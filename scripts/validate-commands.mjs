import fs from "node:fs";
import path from "node:path";

const registryPath = process.argv[2] || "registry/commands.json";
const summaryPath = "registry/validation-summary.json";

function fail(message, context = {}) {
  return { level: "error", message, ...context };
}

function warn(message, context = {}) {
  return { level: "warning", message, ...context };
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    console.error(`Kon JSON niet lezen: ${filePath}`);
    console.error(error.message);
    process.exit(1);
  }
}

function normalizeSlash(value) {
  if (typeof value !== "string") return "";
  const cleaned = value.trim().toLowerCase();
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
}

function hasOldDecisionTerminology(value) {
  if (typeof value !== "string") return false;
  return /\b(go|no-go|nogo|go\/no-go|no go)\b/i.test(value);
}

function inspectStrings(obj, visitor, trail = []) {
  if (typeof obj === "string") {
    visitor(obj, trail);
    return;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, index) => inspectStrings(item, visitor, [...trail, String(index)]));
    return;
  }
  if (obj && typeof obj === "object") {
    Object.entries(obj).forEach(([key, value]) => inspectStrings(value, visitor, [...trail, key]));
  }
}

const registry = readJson(registryPath);
const issues = [];

if (!registry.registry_version || typeof registry.registry_version !== "string") {
  issues.push(fail("registry_version ontbreekt of is geen string."));
}

if (!Array.isArray(registry.commands) || registry.commands.length === 0) {
  issues.push(fail("commands ontbreekt of is leeg."));
}

const ids = new Map();
const slashes = new Map();
const activeCommands = [];
const inactiveCommands = [];

for (const [index, cmd] of (registry.commands || []).entries()) {
  const context = { command_index: index, id: cmd?.id, slash: cmd?.slash };

  if (!cmd || typeof cmd !== "object") {
    issues.push(fail("Command is geen object.", context));
    continue;
  }

  const requiredStringFields = ["id", "slash", "category", "title", "intent", "version"];
  for (const field of requiredStringFields) {
    if (!cmd[field] || typeof cmd[field] !== "string") {
      issues.push(fail(`Verplicht veld ontbreekt of is geen string: ${field}.`, context));
    }
  }

  if (typeof cmd.active !== "boolean") {
    issues.push(fail("active ontbreekt of is geen boolean.", context));
  }

  if (typeof cmd.slash === "string" && !cmd.slash.startsWith("/")) {
    issues.push(fail("slash moet beginnen met '/'.", context));
  }

  if (typeof cmd.id === "string") {
    const key = cmd.id.trim().toLowerCase();
    if (ids.has(key)) {
      issues.push(fail("Dubbele command-id.", { ...context, duplicate_of: ids.get(key) }));
    } else {
      ids.set(key, cmd.slash || `index:${index}`);
    }
  }

  if (typeof cmd.slash === "string") {
    const key = normalizeSlash(cmd.slash);
    if (slashes.has(key)) {
      issues.push(fail("Dubbele slash-commandnaam.", { ...context, duplicate_of: slashes.get(key) }));
    } else {
      slashes.set(key, cmd.id || `index:${index}`);
    }
  }

  if (cmd.active === false) {
    inactiveCommands.push(cmd);
    if (cmd.deprecated !== true) {
      issues.push(warn("Inactive command heeft deprecated niet op true staan.", context));
    }
    if (!cmd.replacement || typeof cmd.replacement !== "string") {
      issues.push(warn("Inactive/deprecated command heeft geen replacement.", context));
    }
  } else {
    activeCommands.push(cmd);
    if (!Array.isArray(cmd.output_contract) || cmd.output_contract.length === 0) {
      issues.push(fail("Actief command mist output_contract of heeft een lege output_contract.", context));
    }
    if (!Array.isArray(cmd.execution_instructions) || cmd.execution_instructions.length === 0) {
      issues.push(fail("Actief command mist execution_instructions of heeft een lege execution_instructions.", context));
    }
  }

  inspectStrings(cmd, (value, trail) => {
    if (hasOldDecisionTerminology(value)) {
      issues.push(warn("Mogelijke oude GO/NO-GO-terminologie gevonden.", {
        ...context,
        path: ["commands", String(index), ...trail].join("."),
        value
      }));
    }
  });
}

const knownSlashes = new Set([...slashes.keys()]);
for (const [index, rule] of (registry.combined_command_rules || []).entries()) {
  const context = { rule_index: index, pattern: rule?.pattern };

  if (!Array.isArray(rule.pattern) || rule.pattern.length < 2) {
    issues.push(fail("Combinatieregel moet een pattern met minimaal twee commands hebben.", context));
    continue;
  }

  if (!Array.isArray(rule.execution_order) || rule.execution_order.length < 2) {
    issues.push(fail("Combinatieregel moet een execution_order met minimaal twee commands hebben.", context));
  }

  for (const slash of [...(rule.pattern || []), ...(rule.execution_order || [])]) {
    const normalized = normalizeSlash(slash);
    if (!knownSlashes.has(normalized)) {
      issues.push(fail("Combinatieregel verwijst naar onbekend command.", { ...context, slash }));
    }
  }
}

const errors = issues.filter((issue) => issue.level === "error");
const warnings = issues.filter((issue) => issue.level === "warning");

const summary = {
  checked_at: new Date().toISOString(),
  registry_path: registryPath,
  registry_version: registry.registry_version || null,
  command_count: (registry.commands || []).length,
  active_command_count: activeCommands.length,
  inactive_command_count: inactiveCommands.length,
  combined_rule_count: (registry.combined_command_rules || []).length,
  error_count: errors.length,
  warning_count: warnings.length,
  status: errors.length === 0 ? "valid" : "invalid",
  issues
};

fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2) + "\n", "utf8");

console.log(`Registry: ${registryPath}`);
console.log(`Commands: ${summary.command_count} (${summary.active_command_count} actief, ${summary.inactive_command_count} inactive)`);
console.log(`Combinatieregels: ${summary.combined_rule_count}`);
console.log(`Errors: ${summary.error_count}`);
console.log(`Warnings: ${summary.warning_count}`);
console.log(`Summary geschreven naar: ${summaryPath}`);

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`ERROR: ${error.message}`, JSON.stringify(error));
  }
  process.exit(1);
}

if (warnings.length > 0) {
  for (const warning of warnings.slice(0, 10)) {
    console.warn(`WARNING: ${warning.message}`, JSON.stringify(warning));
  }
  if (warnings.length > 10) {
    console.warn(`... ${warnings.length - 10} extra warnings niet getoond.`);
  }
}
