// Command Registry API — Fase 2
// Cloudflare Worker versie voor gebruik via de Cloudflare dashboard-editor.
//
// Stap voor jou:
// 1. Zet registry/commands.json ergens publiek bereikbaar, bijvoorbeeld via GitHub raw of Cloudflare Pages.
// 2. Vervang COMMANDS_JSON_URL hieronder door de URL van jouw commands.json.
// 3. Deploy deze Worker.
// 4. Test GET /commands, GET /commands/analyse en POST /commands/batch.

const COMMANDS_JSON_URL = "https://github.com/davidh-lab/command-registry/blob/main/api/worker.js";
const REGISTRY_CACHE_SECONDS = 60;

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET, POST, OPTIONS",
      "access-control-allow-headers": "content-type, authorization",
      "cache-control": "no-store"
    }
  });
}

function normalizeCommand(input) {
  if (!input || typeof input !== "string") return "";
  const cleaned = input.trim().toLowerCase();
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
}

function stripSlash(command) {
  return normalizeCommand(command).replace(/^\//, "");
}

async function loadRegistry() {
  if (!COMMANDS_JSON_URL || COMMANDS_JSON_URL.includes("example.com")) {
    throw new Error("COMMANDS_JSON_URL is nog niet ingesteld.");
  }

  const response = await fetch(COMMANDS_JSON_URL, {
    headers: {
      "accept": "application/json"
    },
    cf: {
      cacheTtl: REGISTRY_CACHE_SECONDS,
      cacheEverything: true
    }
  });

  if (!response.ok) {
    throw new Error(`Kon commands.json niet ophalen: HTTP ${response.status}`);
  }

  return await response.json();
}

function findCommand(registry, commandInput, includeInactive = false) {
  const normalizedSlash = normalizeCommand(commandInput);
  const normalizedId = stripSlash(commandInput);

  const command = (registry.commands || []).find((cmd) => {
    const cmdSlash = normalizeCommand(cmd.slash);
    const cmdId = String(cmd.id || "").trim().toLowerCase();
    return cmdSlash === normalizedSlash || cmdId === normalizedId;
  });

  if (!command) return null;

  if (command.active === false && !includeInactive) {
    return {
      id: command.id,
      slash: command.slash,
      active: false,
      deprecated: command.deprecated === true,
      replacement: command.replacement || null,
      deprecation_reason: command.deprecation_reason || "Command is inactive/deprecated.",
      inactive_match: true
    };
  }

  return command;
}

function publicCommandSummary(cmd) {
  return {
    id: cmd.id,
    slash: cmd.slash,
    title: cmd.title || cmd.id,
    category: cmd.category || null,
    active: cmd.active !== false,
    deprecated: cmd.deprecated === true,
    replacement: cmd.replacement || null,
    intent: cmd.intent || null
  };
}

function listCommands(registry, { activeOnly = true, category = null, query = null } = {}) {
  let commands = registry.commands || [];

  if (activeOnly) {
    commands = commands.filter((cmd) => cmd.active !== false);
  }

  if (category) {
    commands = commands.filter((cmd) => String(cmd.category || "") === String(category));
  }

  if (query) {
    const q = String(query).toLowerCase();
    commands = commands.filter((cmd) => {
      return [cmd.slash, cmd.id, cmd.title, cmd.intent, cmd.category]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(q));
    });
  }

  return commands.map(publicCommandSummary);
}

function sameCommandArray(a, b) {
  return JSON.stringify((a || []).map(normalizeCommand)) === JSON.stringify((b || []).map(normalizeCommand));
}

function resolveExecutionPlan(registry, commands) {
  const normalized = commands.map(normalizeCommand);

  const matchingRule = (registry.combined_command_rules || []).find((rule) => {
    return sameCommandArray(rule.pattern || [], normalized);
  });

  if (matchingRule) {
    return {
      order: (matchingRule.execution_order || matchingRule.pattern || []).map(normalizeCommand),
      description: matchingRule.description || "Combinatieregel uit commandregistry."
    };
  }

  return {
    order: normalized,
    description: "Geen specifieke combinatieregel gevonden; gebruik invoervolgorde."
  };
}

function removeExamplesIfNeeded(command, includeExamples) {
  const copy = { ...command };
  if (!includeExamples) delete copy.examples;
  return copy;
}

async function handleListCommands(request, registry) {
  const url = new URL(request.url);
  const activeOnly = url.searchParams.get("active_only") !== "false";
  const category = url.searchParams.get("category");
  const query = url.searchParams.get("query");

  return json({
    registry_version: registry.registry_version || null,
    commands: listCommands(registry, { activeOnly, category, query })
  });
}

async function handleGetCommand(request, registry, commandInput) {
  const url = new URL(request.url);
  const includeInactive = url.searchParams.get("include_inactive") === "true";
  const includeExamples = url.searchParams.get("include_examples") !== "false";

  const command = findCommand(registry, commandInput, includeInactive);

  if (!command) {
    return json({
      found: false,
      command: null,
      registry_version: registry.registry_version || null
    }, 404);
  }

  return json({
    found: true,
    command: removeExamplesIfNeeded(command, includeExamples),
    registry_version: registry.registry_version || null
  });
}

async function handleGetCommands(request, registry) {
  let body;

  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  const commands = Array.isArray(body.commands) ? body.commands : [];
  const includeInactive = body.include_inactive === true;
  const includeExamples = body.include_examples !== false;

  if (commands.length === 0) {
    return json({ error: "Field `commands` must contain at least one command." }, 400);
  }

  const resolved = commands.map((cmd) => findCommand(registry, cmd, includeInactive));
  const missing = commands.filter((_, index) => !resolved[index]);

  return json({
    found_all: missing.length === 0,
    commands: resolved.filter(Boolean).map((cmd) => removeExamplesIfNeeded(cmd, includeExamples)),
    missing,
    execution_plan: resolveExecutionPlan(registry, commands),
    registry_version: registry.registry_version || null
  });
}

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "GET, POST, OPTIONS",
          "access-control-allow-headers": "content-type, authorization"
        }
      });
    }

    let registry;
    try {
      registry = await loadRegistry();
    } catch (error) {
      return json({
        error: "Registry load failed.",
        detail: error.message
      }, 500);
    }

    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/$/, "") || "/";

    if (request.method === "GET" && pathname === "/") {
      return json({
        service: "Command Registry API",
        registry_version: registry.registry_version || null,
        endpoints: [
          "GET /commands",
          "GET /commands/{command}",
          "POST /commands/batch"
        ]
      });
    }

    if (request.method === "GET" && pathname === "/commands") {
      return handleListCommands(request, registry);
    }

    if (request.method === "GET" && pathname.startsWith("/commands/")) {
      const commandInput = decodeURIComponent(pathname.replace("/commands/", ""));
      return handleGetCommand(request, registry, commandInput);
    }

    if (request.method === "POST" && pathname === "/commands/batch") {
      return handleGetCommands(request, registry);
    }

    return json({
      error: "Not found.",
      available_endpoints: [
        "GET /commands",
        "GET /commands/{command}",
        "POST /commands/batch"
      ]
    }, 404);
  }
};
