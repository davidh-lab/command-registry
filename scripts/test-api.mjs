const baseUrl = process.env.COMMAND_REGISTRY_API_URL;

if (!baseUrl) {
  console.error("Zet eerst COMMAND_REGISTRY_API_URL, bijvoorbeeld:");
  console.error("COMMAND_REGISTRY_API_URL=https://jouw-worker.workers.dev npm run test:api");
  process.exit(1);
}

function url(path) {
  return `${baseUrl.replace(/\/$/, "")}${path}`;
}

async function getJson(path) {
  const response = await fetch(url(path));
  const body = await response.text();
  let data;
  try { data = JSON.parse(body); } catch { data = body; }
  if (!response.ok) {
    throw new Error(`GET ${path} gaf HTTP ${response.status}: ${body}`);
  }
  return data;
}

async function postJson(path, payload) {
  const response = await fetch(url(path), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });
  const body = await response.text();
  let data;
  try { data = JSON.parse(body); } catch { data = body; }
  if (!response.ok) {
    throw new Error(`POST ${path} gaf HTTP ${response.status}: ${body}`);
  }
  return data;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const checks = [];

async function check(name, fn) {
  try {
    await fn();
    checks.push({ name, status: "pass" });
    console.log(`PASS ${name}`);
  } catch (error) {
    checks.push({ name, status: "fail", error: error.message });
    console.error(`FAIL ${name}: ${error.message}`);
  }
}

await check("root", async () => {
  const data = await getJson("/");
  assert(data.service === "Command Registry API", "Root mist service-naam.");
  assert(Array.isArray(data.endpoints), "Root mist endpoints-array.");
});

await check("listCommands", async () => {
  const data = await getJson("/commands");
  assert(Array.isArray(data.commands), "/commands mist commands-array.");
  assert(data.commands.length > 0, "/commands is leeg.");
  assert(data.commands.some((cmd) => cmd.slash === "/analyse"), "/analyse ontbreekt in lijst.");
});

await check("getCommand analyse", async () => {
  const data = await getJson("/commands/analyse");
  assert(data.found === true, "analyse niet gevonden.");
  assert(data.command?.slash === "/analyse", "analyse response heeft verkeerde slash.");
});

await check("deprecated feedback", async () => {
  const data = await getJson("/commands/feedback?include_inactive=true");
  assert(data.found === true, "feedback niet gevonden.");
  assert(data.command?.active === false, "feedback moet inactive zijn.");
  assert(data.command?.replacement === "/terugkoppeling", "feedback mist replacement /terugkoppeling.");
});

await check("batch kritisch verbeterplan", async () => {
  const data = await postJson("/commands/batch", {
    commands: ["/kritisch", "/verbeterplan"],
    include_inactive: false,
    include_examples: true,
    resolve_combination: true
  });
  assert(data.found_all === true, "batch vond niet alle commands.");
  assert(Array.isArray(data.commands) && data.commands.length === 2, "batch moet twee commands teruggeven.");
  assert(Array.isArray(data.execution_plan?.order), "batch mist execution_plan.order.");
});

const failures = checks.filter((check) => check.status === "fail");
if (failures.length > 0) {
  console.error(`\n${failures.length} API-test(s) mislukt.`);
  process.exit(1);
}

console.log("\nAlle API-tests geslaagd.");
