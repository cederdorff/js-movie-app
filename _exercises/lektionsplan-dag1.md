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
- **DAG 4:** Titel-søgning + detail dialog + sortering

**Hvorfor starter vi med en klik-tæller i Movie App?**
Klik-tæller er perfekt til at lære variable opdateringer og DOM manipulation - de samme koncepter vi bruger i morgen når vi tilføjer rigtig movie data. I dag bygger vi fundamentet!

## Forberedelse

For at øvelsen på DAG 1 giver mening, skal denne rækkefølge følges:

1. Installer værktøjer
2. Opret projektet `movie-app` (hvis det ikke allerede er gjort)
3. Åbn projektet i VS Code og kod videre i de samme filer

Hvis man **ikke** har gennemført "Opret et nyt projekt med GitHub Desktop", så skal det gøres først, inden man starter selve øvelsen.

### Før første lektion:

- **[Setup Tools & Dev Environment](https://www.notion.so/Dev-Setup-Guide-VS-Code-Git-Browser-DevTools-Node-js-7a55f70a02834132a11da6f253ba3274?pvs=21)**
  - Følg guiden for at installere de nødvendige værktøjer
  - Du skal have: VS Code med Extensions, GitHub Desktop og Git
  - Spring over trin _8. Node.js & npm_ (ikke nødvendigt i dette forløb)

- **[Opret et nyt projekt med GitHub Desktop](https://www.notion.so/Opret-et-nyt-projekt-med-GitHub-Desktop-92de71d56c544e52aa87cd58a7b0a1ed?pvs=21)**
  - Følg guiden - det er ok hvis der er ting du ikke forstår endnu
  - Navngiv dit projekt `movie-app`
  - Du skal have gennemgået Setup Tools først
  - Hvis projektet allerede er oprettet, kan dette trin springes over
  - Hvis projektet ikke er oprettet, skal dette trin gennemføres før DAG 1-opgaven

- **Læs hele afsnittet om [JavaScript Basics](https://thevalleyofcode.com/lesson/js-basics/)**
  - The fundamentals of JavaScript
  - 0: Introduction
  - 1: Literals, identifiers and variables
  - 2: Comments
  - 3: The difference between let, const and var
  - 4: Types
  - 5: Operators and expressions
  - 6: Let's start with arithmetic operators
  - 7: The assignment operator
  - 8: Operator precedence
  - 9: Strings
  - 10: Numbers
  - 11: Semicolons, white space and sensitivity

### På dagen:

- Åbn dit `movie-app` projekt i VS Code og vær klar til at kode videre i `index.html`, `app.js` og `app.css`
- Åbn Developer Tools i din browser (Windows/PC: F12 eller Ctrl+Shift+I, Mac: Cmd+Option+I)

## Agenda

**Introduktion og Movie App setup**

- Hvem er RACE, og hvad skal vi lave?
- Intro til Movie App projektet - progressionen over 4 dage
- Projekt setup: Opret `movie-app` mappe med `index.html`, `app.js`, `app.css`
- Brug semantiske tags fra start: `header`, `main`, `section`
- Test Live Server extension

**Variables, Datatyper & Console**

- Hvad er en variable? (`const` og `let`)
- const-first princip i praksis
- `console.log()` - din debugging ven
- Forskellige datatyper: strings, numbers, booleans
- Praktisk øvelse med variabler

**querySelector & DOM Manipulation**

- Hvad er DOM? (Document Object Model)
- `querySelector()` - find elementer på siden
- `.textContent` og `.style` - ændr indhold og udseende
- Praktisk øvelse: Find og ændr elementer

**Events & Klik-tæller**

- Hvad er et event?
- `addEventListener("click", function)`
- Byg Movie App klik-tæller trin-for-trin
- Tilføj reset-knap funktionalitet
- Test og debug sammen

**Fejlfinding & Problemløsning**

- Typiske fejl og hvordan man finder dem
- Læs error messages i Console
- Fix bugs i hinandens kode
- Eksperimentér med nye features

**Afrunding**

- Recap: Hvad har vi lært?
- **Forhåndsblik på DAG 2:** I morgen tilføjer vi arrays, loops og rigtig movie data til samme projekt!
- Hjemmearbejde: Færdiggør udfordringer og eksperimentér

## Materialer

**Slides:**

- [JavaScript - 1. semester](https://cederdorff.com/race/slides/javascript-1-semester.pdf)

**Opgaver:**

- [Movie App - DAG 1](movie-app-1.md)
- [Hello JavaScript](https://www.notion.so/Hello-JavaScript-6ca283a288bd4fafbcea2a11b2c9806e?pvs=21) (ekstra øvelse)

**Links:**

- Movie App (færdig version): https://cederdorff.com/js-movie-app/
- JavaScript dokumentation: https://javascript.info
- The Valley of Code: https://thevalleyofcode.com/ (stærk opslagssamling om webudvikling)
