# Fase 4 — Registry-hardening

Deze fase maakt het commandregister minder foutgevoelig.

## Toegevoegd

- `scripts/validate-commands.mjs`
- `scripts/generate-command-library.mjs`
- `scripts/test-api.mjs`
- `.github/workflows/validate-registry.yml`
- `package.json` met scripts

## Lokale commands

```bash
npm run validate
npm run generate:md
npm run check
```

API-test:

```bash
COMMAND_REGISTRY_API_URL=https://jouw-worker.workers.dev npm run test:api
```

## Onderhoudsvolgorde

1. Wijzig `registry/commands.json`.
2. Run `npm run validate`.
3. Run `npm run generate:md`.
4. Vergelijk `registry/command-library.generated.md` met je bestaande `command-library.md`.
5. Commit wijzigingen.
6. Test je Worker en Custom GPT.

## Doel

De Custom GPT hoeft niet aangepast te worden bij gewone commandwijzigingen. Alleen het externe register verandert.
