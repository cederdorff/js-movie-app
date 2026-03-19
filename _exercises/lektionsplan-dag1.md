# RACE 1 - JavaScript Fundamentals & Movie App Setup

## Formål

Dagens formål er at introducere jer til de allermest grundlæggende elementer i JavaScript på en tilgængelig måde, samtidig med at vi sætter fundamentet for vores Movie App-en. Vi starter simpelt - ingen arrays, ingen objekter, ingen loops. Bare det basale.

**Mål:**

- Forstå variabler med const-first tilgang (`const` først, `let` ved reassignment)
- Bruge `console.log()` til debugging
- Finde HTML elementer med `querySelector()`
- Reagere på klik med `addEventListener()`
- Bygge en fungerende klik-tæller som første skridt i Movie App

**Progression i forløbet:**

- **DAG 1:** Klik-tæller og JavaScript fundamentals
- **DAG 2:** Arrays, loops og hardcoded movie data
- **DAG 3:** Fetch + simpel genre-filter
- **DAG 4:** Titel-søgning + detail modal + sortering

**Hvorfor starter vi med en klik-tæller i Movie App?**
Klik-tæller er perfekt til at lære variable opdateringer og DOM manipulation - de samme koncepter vi bruger i morgen når vi tilføjer rigtig movie data. I dag bygger vi fundamentet!

## Forberedelse

### Før første lektion:

- **[Setup Tools & Dev Environment](https://www.notion.so/Dev-Setup-Guide-VS-Code-Git-Browser-DevTools-Node-js-7a55f70a02834132a11da6f253ba3274?pvs=21)**
  - Følg guiden for at installere de nødvendige værktøjer
  - Du skal have: VS Code med Extensions, GitHub Desktop og Git
  - Spring over trin _8. Node.js & npm_ (ikke nødvendigt i dette forløb)

- **[Opret et nyt projekt med GitHub Desktop](https://www.notion.so/Opret-et-nyt-projekt-med-GitHub-Desktop-92de71d56c544e52aa87cd58a7b0a1ed?pvs=21)**
  - Følg guiden - det er ok hvis der er ting du ikke forstår endnu
  - Navngiv dit projekt `movie-app`
  - Du skal have gennemgået Setup Tools først

- **Læs [An Introduction to JavaScript](https://javascript.info/intro)**
  - Skim artiklen og prøv at forstå hovedpointerne
  - Det er helt fint hvis du ikke forstår alt - vi gennemgår det i dag

### På dagen:

- Åbn VS Code og vær klar til at kode fra scratch
- Åbn Developer Tools i din browser (F12)
- Ha' din GitHub Desktop app klar

## Agenda

**9:00 - 9:30 | Introduktion og Movie App setup (30 min)**

- Hvem er RACE, og hvad skal vi lave?
- Intro til Movie App projektet - progressionen over 4 dage
- Projekt setup: Opret `movie-app` mappe med `index.html`, `app.js`, `app.css`
- Test Live Server extension

**9:30 - 10:15 | Variables & Console (45 min)**

- Hvad er en variable? (`const` og `let`)
- const-first princip i praksis
- `console.log()` - din debugging ven
- Forskellige datatyper: strings, numbers, booleans
- Praktisk øvelse med variabler

**10:15 - 10:30 | Pause **

**10:30 - 11:15 | querySelector & DOM Manipulation (45 min)**

- Hvad er DOM? (Document Object Model)
- `querySelector()` - find elementer på siden
- `.textContent` og `.style` - ændr indhold og udseende
- Praktisk øvelse: Find og ændr elementer

**11:15 - 12:00 | Events & Klik-tæller (45 min)**

- Hvad er et event?
- `addEventListener("click", function)`
- Byg Movie App klik-tæller trin-for-trin
- Tilføj reset-knap funktionalitet
- Test og debug sammen

**12:00 - 13:00 | Frokost **
**13:00 - 13:45 | Klik-tæller Udfordringer (45 min)**

- Udbyg din counter med flere features
- Ændr styling baseret på count
- Eksperimenter med forskellige button funktioner
- Hjælp hinanden (pair programming)

**13:45 - 14:30 | Fejlfinding & Problemløsning (45 min)**

- Typiske fejl og hvordan man finder dem
- Læs error messages i Console
- Fix bugs i hinandens kode
- Eksperimentér med nye features

**14:30 - 15:00 | Afrunding & Forhåndsblik (30 min)**

- Recap: Hvad har vi lært?
- **Forhåndsblik på DAG 2:** I morgen tilføjer vi arrays, loops og rigtig movie data til samme projekt!
- Hjemmearbejde: Færdiggør udfordringer og eksperimentér

## Materialer

**Slides:**

- [JavaScript - 1. semester](https://cederdorff.com/race/slides/javascript-1-semester.pdf)

**Opgaver:**

- [Movie App - DAG 1](movie-app-1.md)
- [Hello JavaScript](https://www.notion.so/Hello-JavaScript-6ca283a288bd4fafbcea2a11b2c9806e?pvs=21) (ekstra øvelse)

**Eksempel kode:**

- Komplet DAG 1 eksempel: `_exercises/examples/dag1/app.js`
- HTML: `_exercises/examples/dag1/index.html`
- CSS: `_exercises/examples/dag1/style.css`

**Links:**

- Movie App (færdig version): https://cederdorff.com/js-movie-app/
- JavaScript dokumentation: https://javascript.info
