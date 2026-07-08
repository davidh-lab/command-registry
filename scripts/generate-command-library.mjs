import fs from "node:fs";

const registryPath = process.argv[2] || "registry/commands.json";
const outputPath = process.argv[3] || "registry/command-library.generated.md";

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function esc(value) {
  return String(value ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function headingId(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\u00c0-\u017f]+/g, "-")
    .replace(/^-|-$/g, "");
}

const registry = readJson(registryPath);
const commands = registry.commands || [];
const active = commands.filter((cmd) => cmd.active !== false);
const inactive = commands.filter((cmd) => cmd.active === false);

const byCategory = new Map();
for (const cmd of active) {
  const key = cmd.category || "overig";
  if (!byCategory.has(key)) {
    byCategory.set(key, {
      title: cmd.category_title || key,
      commands: []
    });
  }
  byCategory.get(key).commands.push(cmd);
}

let md = "";
md += `# ${registry.library_name || "Slash-commandbibliotheek"}\n\n`;
md += `**Registry version:** ${registry.registry_version || "onbekend"}  \n`;
md += `**Source version:** ${registry.source_version || "onbekend"}  \n`;
md += `**Language:** ${registry.language || "nl"}  \n`;
md += `**Generated:** ${new Date().toISOString()}  \n\n`;
md += `> Dit bestand is gegenereerd uit \`${registryPath}\`. Wijzig bij voorkeur eerst \`commands.json\` en genereer daarna opnieuw.\n\n`;

md += "## Kernregel\n\n";
md += "Slash-commands zijn directe werkinstructies. De uitvoering start met de kernconclusie, directe oplossing of directe uitkomst; daarna volgen pas details, onderbouwing of nuances.\n\n";

if (Array.isArray(registry.decision_terms) && registry.decision_terms.length > 0) {
  md += "## Doorgangsbesluit-termen\n\n";
  md += "| Term | Betekenis |\n|---|---|\n";
  for (const term of registry.decision_terms) {
    md += `| \`${esc(term.term)}\` | ${esc(term.meaning)} |\n`;
  }
  md += "\n";
}

md += "## Commandoverzicht\n\n";
for (const [category, group] of byCategory.entries()) {
  md += `### ${group.title}\n\n`;
  md += "| Command | Betekenis | Gewenste output |\n|---|---|---|\n";
  for (const cmd of group.commands) {
    md += `| \`${esc(cmd.slash)}\` | ${esc(cmd.intent)} | ${esc(cmd.output_summary || (cmd.output_contract || []).join(", "))} |\n`;
  }
  md += "\n";
}

if (Array.isArray(registry.combined_command_rules) && registry.combined_command_rules.length > 0) {
  md += "## Gecombineerde commands\n\n";
  md += "| Combinatie | Uitvoervolgorde | Betekenis |\n|---|---|---|\n";
  for (const rule of registry.combined_command_rules) {
    md += `| ${esc((rule.pattern || []).map((c) => `\`${c}\``).join(" "))} | ${esc((rule.execution_order || []).map((c) => `\`${c}\``).join(" → "))} | ${esc(rule.description)} |\n`;
  }
  md += "\n";
}

md += "## Commanddetails\n\n";
for (const [category, group] of byCategory.entries()) {
  md += `### ${group.title}\n\n`;
  for (const cmd of group.commands) {
    md += `#### \`${cmd.slash}\` — ${cmd.title || cmd.id}\n\n`;
    md += `**Intent:** ${cmd.intent || ""}\n\n`;
    if (Array.isArray(cmd.output_contract) && cmd.output_contract.length > 0) {
      md += "**Outputcontract:**\n\n";
      for (const item of cmd.output_contract) md += `- ${item}\n`;
      md += "\n";
    }
    if (Array.isArray(cmd.execution_instructions) && cmd.execution_instructions.length > 0) {
      md += "**Uitvoeringsregels:**\n\n";
      for (const item of cmd.execution_instructions) md += `- ${item}\n`;
      md += "\n";
    }
    if (cmd.clarification_policy) {
      md += `**Verduidelijking:** ${cmd.clarification_policy}\n\n`;
    }
  }
}

if (inactive.length > 0) {
  md += "## Inactive/deprecated commands\n\n";
  md += "| Command | Replacement | Reden |\n|---|---|---|\n";
  for (const cmd of inactive) {
    md += `| \`${esc(cmd.slash)}\` | ${cmd.replacement ? `\`${esc(cmd.replacement)}\`` : ""} | ${esc(cmd.deprecation_reason || cmd.intent || "Inactive/deprecated")} |\n`;
  }
  md += "\n";
}

fs.writeFileSync(outputPath, md, "utf8");
console.log(`Markdown gegenereerd: ${outputPath}`);
