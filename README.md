# Command Registry

Dit repository bevat de slash-commanddefinities voor mijn Custom GPT.

## Bron van waarheid

`registry/commands.json` is de leidende bron voor commanddefinities.

## Leesbare documentatie

`registry/command-library.md` is de mensleesbare versie van de commandbibliotheek.

## Fallback

`registry/fallback-knowledge-instructie.md` beschrijft hoe de Custom GPT tijdelijke Knowledge fallback gebruikt zolang Actions niet volledig leidend zijn.

## Validatie

`registry/commands.schema.json` beschrijft de verwachte structuur van `commands.json`.

`registry/validation-summary.json` bevat de laatste validatie-uitkomst.

## Fase 2-doel

In Fase 2 wordt dit register via een kleine API beschikbaar gemaakt voor de Custom GPT Actions:

- `getCommand`
- `getCommands`
- `listCommands`

## Onderhoudsregel

Wijzig commandinhoud voortaan eerst in `registry/commands.json`.

Daarna:
1. valideer de structuur;
2. werk `registry/command-library.md` bij;
3. update `CHANGELOG.md`;
4. deploy de API opnieuw.