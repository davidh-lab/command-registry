# Slash-commandbibliotheek — command-library.md
**Status:** gegenereerde Fase 1-versie  
**Bron van waarheid:** `commands.json`  
**Registry version:** `1.0.0`  
**Source version:** `3.2`  

## 1. Routerregels
1. Bekende slash-commands zijn directe werkinstructies.
2. Start altijd met de kernconclusie, directe oplossing of directe uitkomst.
3. Geef daarna pas onderbouwing, details, nuances of vervolgstappen.
4. Voer gecombineerde commands in logische volgorde uit.
5. Vraag alleen om verduidelijking als uitvoering anders inhoudelijk onbetrouwbaar wordt.
6. Veiligheid, privacy, systeemregels en expliciete gebruikersbeperkingen gaan altijd voor.
7. Het externe commandregister is leidend boven fallback knowledge.

## 2. Doorgangsbesluit-termen

| Term | Betekenis |
|---|---|
| `doorgangsbesluit` | De expliciete beslissing of iets verder kan. |
| `doorgaan` | De input is voldoende bruikbaar; uitvoering kan verder. |
| `doorgaan na beperkte correcties` | De input is bruikbaar, maar kleine correcties zijn nodig. |
| `eerst repareren` | Er is een inhoudelijke blokkade die eerst moet worden opgelost. |
| `niet doorgaan` | Verdergaan is niet verantwoord, niet zinvol of niet uitvoerbaar. |

## 3. Commandoverzicht

| Command | Actief | Categorie | Betekenis | Gewenste output |
|---|---:|---|---|---|
| `/context` | Ja | Context en voortgang | Vat de relevante context van deze chat samen. | Kernpunten, besluiten, openstaande punten. |
| `/contextkort` | Ja | Context en voortgang | Geef alleen de minimale context die nodig is om verder te werken. | Zeer compacte samenvatting. |
| `/werkstand` | Ja | Context en voortgang | Geef de huidige stand van zaken. | Klaar, openstaand, blokkades, volgende stap. |
| `/hervat` | Ja | Context en voortgang | Ga verder vanaf de laatst bekende werkstand. | Direct vervolg zonder opnieuw te beginnen. |
| `/transitieprompt` | Ja | Context en voortgang | Maak een prompt om in een nieuwe chat verder te gaan. | Zelfstandige overdrachtsprompt. |
| `/analyse` | Ja | Analyse en verdieping | Analyseer de aangeleverde tekst, situatie of vraag. | Hoofdconclusie, onderbouwing, aandachtspunten. |
| `/kritisch` | Ja | Analyse en verdieping | Beoordeel kritisch maar constructief. | Sterktes, zwaktes, risico’s, verbeteringen. |
| `/stepped` | Ja | Analyse en verdieping | Werk stapsgewijs door een complex vraagstuk. | Genummerde stappen met tussenconclusies. |
| `/dieper` | Ja | Analyse en verdieping | Werk het onderwerp inhoudelijk verder uit. | Meer nuance, mechanismen, voorbeelden. |
| `/vereenvoudig` | Ja | Analyse en verdieping | Maak de uitleg eenvoudiger zonder de kern te verliezen. | Simpele versie, eventueel met voorbeeld. |
| `/vergelijk` | Ja | Analyse en verdieping | Vergelijk meerdere opties, modellen of keuzes. | Tabel met verschillen, voor- en nadelen. |
| `/beslis` | Ja | Analyse en verdieping | Help een keuze maken. | Advies, criteria, afweging, voorkeursoptie. |
| `/structureer` | Ja | Structureren en ordenen | Breng losse informatie in een logische structuur. | Koppen, volgorde, hiërarchie. |
| `/overzicht` | Ja | Structureren en ordenen | Maak een overzichtelijke samenvatting. | Lijst, tabel of schema. |
| `/matrix` | Ja | Structureren en ordenen | Zet informatie om in een matrix. | Tabel met criteria, scores of categorieën. |
| `/stappenplan` | Ja | Structureren en ordenen | Zet het onderwerp om in uitvoerbare stappen. | Stap-voor-stapplan. |
| `/checklist` | Ja | Structureren en ordenen | Maak een praktische checklist. | Afvinkbare punten. |
| `/schema` | Ja | Structureren en ordenen | Maak een compact schema van relaties of onderdelen. | Visuele tekststructuur of tabel. |
| `/consolideer` | Ja | Structureren en ordenen | Consolideer informatie uit meerdere bronnen of documenten tot één gestructureerd document. | Geïntegreerd document met samengevoegde informatie, expliciete bronverwerking, hiaten en eventuele conflicten. |
| `/herschrijf` | Ja | Schrijven en herschrijven | Herschrijf de tekst volledig. | Betere versie met behoud van kern. |
| `/strakker` | Ja | Schrijven en herschrijven | Maak de tekst compacter en scherper. | Kortere, directere versie. |
| `/professioneel` | Ja | Schrijven en herschrijven | Maak de tekst zakelijker en professioneler. | Formele versie. |
| `/vriendelijker` | Ja | Schrijven en herschrijven | Maak de tekst warmer of toegankelijker. | Vriendelijkere versie. |
| `/helderder` | Ja | Schrijven en herschrijven | Maak de tekst duidelijker en logischer. | Verbeterde formulering en opbouw. |
| `/toon` | Ja | Schrijven en herschrijven | Pas de toon aan. | Versie in gewenste toon. |
| `/samenvat` | Ja | Schrijven en herschrijven | Vat tekst samen. | Kernsamenvatting met hoofdpunten. |
| `/kort` | Ja | Schrijven en herschrijven | Maak de tekst veel korter. | Essentie in enkele zinnen. |
| `/lang` | Ja | Schrijven en herschrijven | Werk de tekst uitgebreider uit. | Volledige uitwerking met toelichting. |
| `/review` | Ja | Beoordelen en verbeteren | Beoordeel de kwaliteit van tekst, plan of analyse. | Oordeel, sterke punten, verbeterpunten. |
| `/terugkoppeling` | Ja | Beoordelen en verbeteren | Geef bruikbare inhoudelijke terugkoppeling. | Concrete verbeteradviezen. |
| `/score` | Ja | Beoordelen en verbeteren | Scoor op relevante criteria. | Tabel met scores en toelichting. |
| `/risico` | Ja | Beoordelen en verbeteren | Breng risico’s in kaart. | Risico’s, ernst, kans, mitigatie. |
| `/gaten` | Ja | Beoordelen en verbeteren | Zoek ontbrekende onderdelen of aannames. | Hiaten, vragen, ontbrekende onderbouwing. |
| `/verbeterplan` | Ja | Beoordelen en verbeteren | Maak een plan om de kwaliteit te verhogen. | Prioriteiten en concrete acties. |
| `/doorgangsbesluit` | Ja | Beoordelen en verbeteren | Bepaal of iets verder kan. | Besluit, voorwaarden, blokkades, eerstvolgende actie. |
| `/plan` | Ja | Planning en uitvoering | Maak een praktisch plan. | Doel, stappen, volgorde. |
| `/prioriteer` | Ja | Planning en uitvoering | Bepaal wat eerst moet. | Prioriteitenlijst met reden. |
| `/volgende` | Ja | Planning en uitvoering | Geef alleen de eerstvolgende logische stap. | Eén concrete actie. |
| `/planning` | Ja | Planning en uitvoering | Maak een tijdsplanning. | Blokken, deadlines, volgorde. |
| `/minimaliseer` | Ja | Planning en uitvoering | Breng het terug tot de kleinste effectieve aanpak. | Minimum viable plan. |
| `/uitvoeren` | Ja | Planning en uitvoering | Voer de afgesproken stap uit. | Directe uitvoering, geen nieuwe analyse tenzij nodig. |
| `/strategie` | Ja | Besluitvorming en strategie | Werk een strategische aanpak uit. | Doel, route, keuzes, risico’s. |
| `/scenario` | Ja | Besluitvorming en strategie | Werk scenario’s uit. | Scenario A/B/C met gevolgen. |
| `/tradeoffs` | Ja | Besluitvorming en strategie | Breng afwegingen expliciet in beeld. | Voordelen, nadelen, kosten, opbrengsten. |
| `/criteria` | Ja | Besluitvorming en strategie | Bepaal beoordelingscriteria. | Lijst met criteria en gewicht. |
| `/advies` | Ja | Besluitvorming en strategie | Geef een onderbouwd advies. | Advies eerst, daarna argumentatie. |
| `/controleer` | Ja | Kwaliteitscontrole | Controleer op fouten, inconsistenties of onduidelijkheden. | Bevindingen en correcties. |
| `/consistentie` | Ja | Kwaliteitscontrole | Controleer of alles logisch op elkaar aansluit. | Inconsistenties en herstelvoorstellen. |
| `/aannames` | Ja | Kwaliteitscontrole | Maak aannames expliciet. | Lijst met aannames en onzekerheden. |
| `/toets` | Ja | Kwaliteitscontrole | Toets aan criteria of opdracht. | Voldoet / voldoet deels / voldoet niet. |
| `/eindcheck` | Ja | Kwaliteitscontrole | Laatste controle voordat iets wordt gebruikt. | Korte finale check met doorgangsbesluit. |
| `/md` | Ja | Document- en outputcommands | Zet output om naar Markdown. | Net Markdown-document. |
| `/tabel` | Ja | Document- en outputcommands | Zet informatie in tabelvorm. | Overzichtelijke tabel. |
| `/template` | Ja | Document- en outputcommands | Maak een herbruikbaar format. | Invulbaar sjabloon. |
| `/prompt` | Ja | Document- en outputcommands | Maak een goede prompt voor hergebruik. | Complete prompttekst. |
| `/instructies` | Ja | Document- en outputcommands | Zet informatie om in Custom Instructions. | Compacte instructietekst. |
| `/bestand` | Ja | Document- en outputcommands | Maak de output geschikt als bestandstekst. | Volledige bestandsinhoud. |
| `/mail` | Ja | Document- en outputcommands | Zet inhoud om in een e-mail. | Onderwerp en volledige mailtekst. |
| `/bericht` | Ja | Document- en outputcommands | Zet inhoud om in een kort bericht. | WhatsApp-, Slack- of chatbericht. |
| `/onderzoek` | Ja | Onderzoekscommands | Werk een onderzoeksvraag of onderwerp uit. | Vraagstelling, deelvragen, aanpak. |
| `/bronnen` | Ja | Onderzoekscommands | Geef aan welke bronnen of typen bronnen nodig zijn. | Bronlijst of zoekstrategie. |
| `/literatuur` | Ja | Onderzoekscommands | Vat relevante literatuur of theorie samen. | Conceptueel overzicht. |
| `/hypothese` | Ja | Onderzoekscommands | Formuleer mogelijke verklaringen of hypothesen. | Hoofdhypothese en alternatieven. |
| `/model` | Ja | Onderzoekscommands | Bouw een verklarend model. | Componenten, relaties, aannames. |
| `/theorie` | Ja | Onderzoekscommands | Werk het theoretisch kader uit. | Begrippen, mechanismen, onderbouwing. |
| `/operationaliseer` | Ja | Onderzoekscommands | Maak abstracte concepten meetbaar of toetsbaar. | Variabelen, indicatoren, criteria. |
| `/help` | Ja | Meta-commands | Toon beschikbare commands. | Compact command-overzicht. |
| `/lijst` | Ja | Meta-commands | Toon alle bekende slash-commands. | Volledige lijst. |
| `/pasaan` | Ja | Meta-commands | Pas bestaande instructies of output aan. | Aangepaste versie. |
| `/reset` | Ja | Meta-commands | Begin opnieuw binnen de huidige opdracht. | Nieuwe start op basis van huidige input. |
| `/feedback` | Nee | Deprecated commands | Niet actief als bibliotheekcommand vanwege platformconflict met de ChatGPT-UI. | Gebruik /terugkoppeling. |

## 4. Commanddetails

### `/context` — Context

**Status:** actief  
**Categorie:** Context en voortgang  
**Doel:** Vat de relevante context van deze chat samen.  

**Gewenste output:**
- Kernpunten
- besluiten
- openstaande punten.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/contextkort` — Contextkort

**Status:** actief  
**Categorie:** Context en voortgang  
**Doel:** Geef alleen de minimale context die nodig is om verder te werken.  

**Gewenste output:**
- Zeer compacte samenvatting.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/werkstand` — Werkstand

**Status:** actief  
**Categorie:** Context en voortgang  
**Doel:** Geef de huidige stand van zaken.  

**Gewenste output:**
- Klaar
- openstaand
- blokkades
- volgende stap.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/hervat` — Hervat

**Status:** actief  
**Categorie:** Context en voortgang  
**Doel:** Ga verder vanaf de laatst bekende werkstand.  

**Gewenste output:**
- Direct vervolg zonder opnieuw te beginnen.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/transitieprompt` — Transitieprompt

**Status:** actief  
**Categorie:** Context en voortgang  
**Doel:** Maak een prompt om in een nieuwe chat verder te gaan.  

**Gewenste output:**
- Zelfstandige overdrachtsprompt.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/analyse` — Analyse

**Status:** actief  
**Categorie:** Analyse en verdieping  
**Doel:** Analyseer de aangeleverde tekst, situatie of vraag.  

**Gewenste output:**
- Hoofdconclusie
- onderbouwing
- aandachtspunten.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.
- Analyseer de aangeleverde tekst, situatie of vraag.
- Lever minimaal: hoofdconclusie, onderbouwing en aandachtspunten.

### `/kritisch` — Kritisch

**Status:** actief  
**Categorie:** Analyse en verdieping  
**Doel:** Beoordeel kritisch maar constructief.  

**Gewenste output:**
- Sterktes
- zwaktes
- risico’s
- verbeteringen.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.
- Beoordeel kritisch maar constructief.
- Maak onderscheid tussen sterktes, zwaktes, risico’s en verbeteringen.

### `/stepped` — Stepped

**Status:** actief  
**Categorie:** Analyse en verdieping  
**Doel:** Werk stapsgewijs door een complex vraagstuk.  

**Gewenste output:**
- Genummerde stappen met tussenconclusies.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/dieper` — Dieper

**Status:** actief  
**Categorie:** Analyse en verdieping  
**Doel:** Werk het onderwerp inhoudelijk verder uit.  

**Gewenste output:**
- Meer nuance
- mechanismen
- voorbeelden.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/vereenvoudig` — Vereenvoudig

**Status:** actief  
**Categorie:** Analyse en verdieping  
**Doel:** Maak de uitleg eenvoudiger zonder de kern te verliezen.  

**Gewenste output:**
- Simpele versie
- eventueel met voorbeeld.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/vergelijk` — Vergelijk

**Status:** actief  
**Categorie:** Analyse en verdieping  
**Doel:** Vergelijk meerdere opties, modellen of keuzes.  

**Gewenste output:**
- Tabel met verschillen
- voor-
- nadelen.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/beslis` — Beslis

**Status:** actief  
**Categorie:** Analyse en verdieping  
**Doel:** Help een keuze maken.  

**Gewenste output:**
- Advies
- criteria
- afweging
- voorkeursoptie.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/structureer` — Structureer

**Status:** actief  
**Categorie:** Structureren en ordenen  
**Doel:** Breng losse informatie in een logische structuur.  

**Gewenste output:**
- Koppen
- volgorde
- hiërarchie.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/overzicht` — Overzicht

**Status:** actief  
**Categorie:** Structureren en ordenen  
**Doel:** Maak een overzichtelijke samenvatting.  

**Gewenste output:**
- Lijst
- tabel of schema.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/matrix` — Matrix

**Status:** actief  
**Categorie:** Structureren en ordenen  
**Doel:** Zet informatie om in een matrix.  

**Gewenste output:**
- Tabel met criteria
- scores of categorieën.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/stappenplan` — Stappenplan

**Status:** actief  
**Categorie:** Structureren en ordenen  
**Doel:** Zet het onderwerp om in uitvoerbare stappen.  

**Gewenste output:**
- Stap-voor-stapplan.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/checklist` — Checklist

**Status:** actief  
**Categorie:** Structureren en ordenen  
**Doel:** Maak een praktische checklist.  

**Gewenste output:**
- Afvinkbare punten.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/schema` — Schema

**Status:** actief  
**Categorie:** Structureren en ordenen  
**Doel:** Maak een compact schema van relaties of onderdelen.  

**Gewenste output:**
- Visuele tekststructuur of tabel.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/consolideer` — Consolideren

**Status:** actief  
**Categorie:** Structureren en ordenen  
**Doel:** Consolideer informatie uit meerdere bronnen of documenten tot één gestructureerd document.  

**Gewenste output:**
- Geïntegreerd document met samengevoegde informatie
- expliciete bronverwerking
- hiaten
- eventuele conflicten.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.
- Bepaal eerst het doel van het einddocument wanneer dat uit de opdracht blijkt.
- Orden de informatie rond een heldere hoofdstructuur.
- Voeg overlappende informatie samen en voorkom dubbele passages.
- Behoud inhoudelijke betekenis; voeg geen nieuwe claims toe zonder duidelijke markering als aanname of interpretatie.
- Maak bronconflicten, ontbrekende informatie en onzekerheden expliciet wanneer die relevant zijn.
- Gebruik de meest betrouwbare of meest recente bron als leidend wanneer gebruiker of broncontext dat duidelijk maakt.

### `/herschrijf` — Herschrijf

**Status:** actief  
**Categorie:** Schrijven en herschrijven  
**Doel:** Herschrijf de tekst volledig.  

**Gewenste output:**
- Betere versie met behoud van kern.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/strakker` — Strakker

**Status:** actief  
**Categorie:** Schrijven en herschrijven  
**Doel:** Maak de tekst compacter en scherper.  

**Gewenste output:**
- Kortere
- directere versie.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/professioneel` — Professioneel

**Status:** actief  
**Categorie:** Schrijven en herschrijven  
**Doel:** Maak de tekst zakelijker en professioneler.  

**Gewenste output:**
- Formele versie.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/vriendelijker` — Vriendelijker

**Status:** actief  
**Categorie:** Schrijven en herschrijven  
**Doel:** Maak de tekst warmer of toegankelijker.  

**Gewenste output:**
- Vriendelijkere versie.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/helderder` — Helderder

**Status:** actief  
**Categorie:** Schrijven en herschrijven  
**Doel:** Maak de tekst duidelijker en logischer.  

**Gewenste output:**
- Verbeterde formulering
- opbouw.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/toon` — Toon

**Status:** actief  
**Categorie:** Schrijven en herschrijven  
**Doel:** Pas de toon aan.  

**Gewenste output:**
- Versie in gewenste toon.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/samenvat` — Samenvat

**Status:** actief  
**Categorie:** Schrijven en herschrijven  
**Doel:** Vat tekst samen.  

**Gewenste output:**
- Kernsamenvatting met hoofdpunten.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/kort` — Kort

**Status:** actief  
**Categorie:** Schrijven en herschrijven  
**Doel:** Maak de tekst veel korter.  

**Gewenste output:**
- Essentie in enkele zinnen.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/lang` — Lang

**Status:** actief  
**Categorie:** Schrijven en herschrijven  
**Doel:** Werk de tekst uitgebreider uit.  

**Gewenste output:**
- Volledige uitwerking met toelichting.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/review` — Review

**Status:** actief  
**Categorie:** Beoordelen en verbeteren  
**Doel:** Beoordeel de kwaliteit van tekst, plan of analyse.  

**Gewenste output:**
- Oordeel
- sterke punten
- verbeterpunten.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/terugkoppeling` — Terugkoppeling

**Status:** actief  
**Categorie:** Beoordelen en verbeteren  
**Doel:** Geef bruikbare inhoudelijke terugkoppeling.  

**Gewenste output:**
- Concrete verbeteradviezen.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.
- Geef concrete, bruikbare verbeteradviezen.
- Vermijd vage feedback; benoem wat aangepast moet worden en waarom.

### `/score` — Score

**Status:** actief  
**Categorie:** Beoordelen en verbeteren  
**Doel:** Scoor op relevante criteria.  

**Gewenste output:**
- Tabel met scores
- toelichting.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/risico` — Risico

**Status:** actief  
**Categorie:** Beoordelen en verbeteren  
**Doel:** Breng risico’s in kaart.  

**Gewenste output:**
- Risico’s
- ernst
- kans
- mitigatie.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/gaten` — Gaten

**Status:** actief  
**Categorie:** Beoordelen en verbeteren  
**Doel:** Zoek ontbrekende onderdelen of aannames.  

**Gewenste output:**
- Hiaten
- vragen
- ontbrekende onderbouwing.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/verbeterplan` — Verbeterplan

**Status:** actief  
**Categorie:** Beoordelen en verbeteren  
**Doel:** Maak een plan om de kwaliteit te verhogen.  

**Gewenste output:**
- Prioriteiten
- concrete acties.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.
- Maak verbeteracties concreet, geprioriteerd en uitvoerbaar.
- Orden waar mogelijk op impact, urgentie en afhankelijkheden.

### `/doorgangsbesluit` — Doorgangsbesluit

**Status:** actief  
**Categorie:** Beoordelen en verbeteren  
**Doel:** Bepaal of iets verder kan.  

**Gewenste output:**
- Besluit
- voorwaarden
- blokkades
- eerstvolgende actie.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.
- Formuleer expliciet of het werk verder kan.
- Gebruik uitsluitend: doorgaan, doorgaan na beperkte correcties, eerst repareren, niet doorgaan.

### `/plan` — Plan

**Status:** actief  
**Categorie:** Planning en uitvoering  
**Doel:** Maak een praktisch plan.  

**Gewenste output:**
- Doel
- stappen
- volgorde.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/prioriteer` — Prioriteer

**Status:** actief  
**Categorie:** Planning en uitvoering  
**Doel:** Bepaal wat eerst moet.  

**Gewenste output:**
- Prioriteitenlijst met reden.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/volgende` — Volgende

**Status:** actief  
**Categorie:** Planning en uitvoering  
**Doel:** Geef alleen de eerstvolgende logische stap.  

**Gewenste output:**
- Eén concrete actie.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/planning` — Planning

**Status:** actief  
**Categorie:** Planning en uitvoering  
**Doel:** Maak een tijdsplanning.  

**Gewenste output:**
- Blokken
- deadlines
- volgorde.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/minimaliseer` — Minimaliseer

**Status:** actief  
**Categorie:** Planning en uitvoering  
**Doel:** Breng het terug tot de kleinste effectieve aanpak.  

**Gewenste output:**
- Minimum viable plan.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/uitvoeren` — Uitvoeren

**Status:** actief  
**Categorie:** Planning en uitvoering  
**Doel:** Voer de afgesproken stap uit.  

**Gewenste output:**
- Directe uitvoering
- geen nieuwe analyse tenzij nodig.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.
- Voer de afgesproken stap direct uit.
- Voer bij twijfel de meest waarschijnlijke afgesproken stap uit, maak de aanname expliciet en beperk de scope.
- Vraag alleen om verduidelijking als uitvoering anders onbetrouwbaar wordt.

### `/strategie` — Strategie

**Status:** actief  
**Categorie:** Besluitvorming en strategie  
**Doel:** Werk een strategische aanpak uit.  

**Gewenste output:**
- Doel
- route
- keuzes
- risico’s.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/scenario` — Scenario

**Status:** actief  
**Categorie:** Besluitvorming en strategie  
**Doel:** Werk scenario’s uit.  

**Gewenste output:**
- Scenario A/B/C met gevolgen.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/tradeoffs` — Tradeoffs

**Status:** actief  
**Categorie:** Besluitvorming en strategie  
**Doel:** Breng afwegingen expliciet in beeld.  

**Gewenste output:**
- Voordelen
- nadelen
- kosten
- opbrengsten.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/criteria` — Criteria

**Status:** actief  
**Categorie:** Besluitvorming en strategie  
**Doel:** Bepaal beoordelingscriteria.  

**Gewenste output:**
- Lijst met criteria
- gewicht.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/advies` — Advies

**Status:** actief  
**Categorie:** Besluitvorming en strategie  
**Doel:** Geef een onderbouwd advies.  

**Gewenste output:**
- Advies eerst
- daarna argumentatie.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/controleer` — Controleer

**Status:** actief  
**Categorie:** Kwaliteitscontrole  
**Doel:** Controleer op fouten, inconsistenties of onduidelijkheden.  

**Gewenste output:**
- Bevindingen
- correcties.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/consistentie` — Consistentie

**Status:** actief  
**Categorie:** Kwaliteitscontrole  
**Doel:** Controleer of alles logisch op elkaar aansluit.  

**Gewenste output:**
- Inconsistenties
- herstelvoorstellen.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/aannames` — Aannames

**Status:** actief  
**Categorie:** Kwaliteitscontrole  
**Doel:** Maak aannames expliciet.  

**Gewenste output:**
- Lijst met aannames
- onzekerheden.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/toets` — Toets

**Status:** actief  
**Categorie:** Kwaliteitscontrole  
**Doel:** Toets aan criteria of opdracht.  

**Gewenste output:**
- Voldoet / voldoet deels / voldoet niet.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/eindcheck` — Eindcheck

**Status:** actief  
**Categorie:** Kwaliteitscontrole  
**Doel:** Laatste controle voordat iets wordt gebruikt.  

**Gewenste output:**
- Korte finale check met doorgangsbesluit.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/md` — Markdown-output

**Status:** actief  
**Categorie:** Document- en outputcommands  
**Doel:** Zet output om naar Markdown.  

**Gewenste output:**
- Net Markdown-document.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.
- Lever een net Markdown-document op.
- Gebruik logische koppen, consistente lijsten en waar nuttig tabellen.
- Laat overbodige uitleg buiten de documenttekst wanneer de gebruiker om bestandstekst vraagt.

### `/tabel` — Tabel

**Status:** actief  
**Categorie:** Document- en outputcommands  
**Doel:** Zet informatie in tabelvorm.  

**Gewenste output:**
- Overzichtelijke tabel.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/template` — Template

**Status:** actief  
**Categorie:** Document- en outputcommands  
**Doel:** Maak een herbruikbaar format.  

**Gewenste output:**
- Invulbaar sjabloon.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/prompt` — Prompt

**Status:** actief  
**Categorie:** Document- en outputcommands  
**Doel:** Maak een goede prompt voor hergebruik.  

**Gewenste output:**
- Complete prompttekst.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/instructies` — Instructies

**Status:** actief  
**Categorie:** Document- en outputcommands  
**Doel:** Zet informatie om in Custom Instructions.  

**Gewenste output:**
- Compacte instructietekst.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/bestand` — Bestand

**Status:** actief  
**Categorie:** Document- en outputcommands  
**Doel:** Maak de output geschikt als bestandstekst.  

**Gewenste output:**
- Volledige bestandsinhoud.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/mail` — Mail

**Status:** actief  
**Categorie:** Document- en outputcommands  
**Doel:** Zet inhoud om in een e-mail.  

**Gewenste output:**
- Onderwerp
- volledige mailtekst.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/bericht` — Bericht

**Status:** actief  
**Categorie:** Document- en outputcommands  
**Doel:** Zet inhoud om in een kort bericht.  

**Gewenste output:**
- WhatsApp-
- Slack- of chatbericht.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/onderzoek` — Onderzoek

**Status:** actief  
**Categorie:** Onderzoekscommands  
**Doel:** Werk een onderzoeksvraag of onderwerp uit.  

**Gewenste output:**
- Vraagstelling
- deelvragen
- aanpak.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/bronnen` — Bronnen

**Status:** actief  
**Categorie:** Onderzoekscommands  
**Doel:** Geef aan welke bronnen of typen bronnen nodig zijn.  

**Gewenste output:**
- Bronlijst of zoekstrategie.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/literatuur` — Literatuur

**Status:** actief  
**Categorie:** Onderzoekscommands  
**Doel:** Vat relevante literatuur of theorie samen.  

**Gewenste output:**
- Conceptueel overzicht.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/hypothese` — Hypothese

**Status:** actief  
**Categorie:** Onderzoekscommands  
**Doel:** Formuleer mogelijke verklaringen of hypothesen.  

**Gewenste output:**
- Hoofdhypothese
- alternatieven.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/model` — Model

**Status:** actief  
**Categorie:** Onderzoekscommands  
**Doel:** Bouw een verklarend model.  

**Gewenste output:**
- Componenten
- relaties
- aannames.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/theorie` — Theorie

**Status:** actief  
**Categorie:** Onderzoekscommands  
**Doel:** Werk het theoretisch kader uit.  

**Gewenste output:**
- Begrippen
- mechanismen
- onderbouwing.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/operationaliseer` — Operationaliseer

**Status:** actief  
**Categorie:** Onderzoekscommands  
**Doel:** Maak abstracte concepten meetbaar of toetsbaar.  

**Gewenste output:**
- Variabelen
- indicatoren
- criteria.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/help` — Help

**Status:** actief  
**Categorie:** Meta-commands  
**Doel:** Toon beschikbare commands.  

**Gewenste output:**
- Compact command-overzicht.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/lijst` — Lijst

**Status:** actief  
**Categorie:** Meta-commands  
**Doel:** Toon alle bekende slash-commands.  

**Gewenste output:**
- Volledige lijst.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/pasaan` — Pasaan

**Status:** actief  
**Categorie:** Meta-commands  
**Doel:** Pas bestaande instructies of output aan.  

**Gewenste output:**
- Aangepaste versie.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.

### `/reset` — Reset

**Status:** actief  
**Categorie:** Meta-commands  
**Doel:** Begin opnieuw binnen de huidige opdracht.  

**Gewenste output:**
- Nieuwe start op basis van huidige input.

**Uitvoeringsregels:**
- Start met de kernboodschap, conclusie of directe uitkomst.
- Geef daarna pas uitleg, details, uitzonderingen of voorbeelden.
- Kies de outputvorm die past bij het command en de gebruikersinput.
- Maak relevante aannames expliciet.
- Houd de output praktisch bruikbaar.
- Begin opnieuw binnen de huidige opdracht.
- Negeer niet automatisch alle relevante chatcontext, projectregels, veiligheidsregels of bekende bronafspraken.

### `/feedback` — Feedback

**Status:** niet actief  
**Categorie:** Deprecated commands  
**Doel:** Niet actief als bibliotheekcommand vanwege platformconflict met de ChatGPT-UI.  
**Vervanging:** `/terugkoppeling`  
**Reden:** Feedback wordt ook door de ChatGPT-UI gebruikt; gebruik /terugkoppeling voor concrete verbeteradviezen.  

**Gewenste output:**
- Korte verwijzing naar /terugkoppeling

**Uitvoeringsregels:**
- Voer /feedback niet uit als actief bibliotheekcommand.
- Benoem kort dat /terugkoppeling de juiste commandnaam is.
- Voer /terugkoppeling alleen uit als de gebruiker dat expliciet bedoelt of bevestigt.

## 5. Gecombineerde commands

| Combinatie | Uitvoervolgorde | Betekenis |
|---|---|---|
| `/review /score` | `/review → /score` | Eerst beoordelen, daarna scoren. |
| `/kritisch /verbeterplan` | `/kritisch → /verbeterplan` | Eerst kritisch analyseren, daarna verbeteracties formuleren. |
| `/contextkort /transitieprompt` | `/contextkort → /transitieprompt` | Eerst minimale context bepalen, daarna overdrachtsprompt maken. |
| `/analyse /beslis` | `/analyse → /beslis` | Eerst analyseren, daarna keuzeadvies geven. |
| `/controleer /herschrijf` | `/controleer → /herschrijf` | Eerst fouten signaleren, daarna verbeterde versie maken. |
| `/toets /doorgangsbesluit` | `/toets → /doorgangsbesluit` | Eerst toetsen, daarna expliciet besluit formuleren. |
| `/consolideer /md` | `/consolideer → /md` | Eerst bronnen of documenten consolideren, daarna als net Markdown-document opleveren. |
| `/consolideer /eindcheck` | `/consolideer → /eindcheck` | Eerst één geïntegreerd document maken, daarna controleren of het bruikbaar is. |

## 6. Fallbackbeleid

- `commands.json` is leidend.
- Gebruik het oorspronkelijke `.md`-bestand alleen als fallback zolang Actions of registry incompleet zijn.
- Bij conflict tussen registry en Knowledge is de registry leidend.
- `/feedback` is niet actief; gebruik `/terugkoppeling`.
