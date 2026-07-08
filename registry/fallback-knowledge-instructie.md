# Fallback Knowledge-instructie — Fase 1

Gebruik het oorspronkelijke bestand `Slash-commandbibliotheek-v3.2_zonder_projectspecifieke_commands.md` tijdelijk als Knowledge fallback in de Custom GPT.

## Regel

1. Gebruik het externe commandregister als primaire bron zodra Actions actief zijn.
2. Gebruik Knowledge fallback alleen wanneer het register of de Action geen bruikbare commanddefinitie geeft.
3. Bij conflict is `commands.json` leidend.
4. `/feedback` is geen actief command; gebruik `/terugkoppeling`.

## Praktische instelling in Custom GPT

Upload voorlopig deze bestanden als Knowledge:

- `Slash-commandbibliotheek-v3.2_zonder_projectspecifieke_commands.md`
- optioneel: `command-library.md`

Zodra Actions stabiel werken, kan het oorspronkelijke `.md`-bestand blijven als fallback, maar niet als primaire bron.
