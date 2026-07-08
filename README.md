# Command Registry — Fase 2

Dit pakket bevat de API-wrapper voor het externe commandregister.

## Bestanden

- `registry/commands.json` — bron van waarheid.
- `api/worker.js` — Cloudflare Worker API-wrapper.
- `api/openapi.yaml` — schema voor Custom GPT Actions.
- `api/wrangler.toml` — optionele Wrangler-configuratie.
- `tests/action-testcases.json` — minimale API-testset.

## Eerst aanpassen

1. Publiceer `registry/commands.json` op een HTTPS-URL.
2. Vervang in `api/worker.js`:

```js
const COMMANDS_JSON_URL = "https://example.com/registry/commands.json";
```

3. Vervang in `api/openapi.yaml`:

```yaml
servers:
  - url: https://jouw-worker-url.workers.dev
```

## Routes

- `GET /commands`
- `GET /commands/{command}`
- `POST /commands/batch`

## Doel

Na deploy kan de Custom GPT deze API gebruiken via Actions:

- `listCommands`
- `getCommand`
- `getCommands`
