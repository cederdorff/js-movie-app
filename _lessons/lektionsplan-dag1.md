# RACE 1 - JavaScript Fundamentals & Movie App Setup

## Formål

Dagens formål er at introducere jer til grundlæggende elementer i JavaScript på en tilgængelig måde, samtidig med at vi sætter fundamentet for en Movie App, vi skal bygge henover de næste undervisningsgange.

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

- **[Setup Tools & Dev Environment](https://www.notion.so/Dev-Setup-Guide-VS-Code-Git-Browser-DevTools-Node-js-7a55f70a02834132a11da6f253ba3274?pvs=21)**
  - Følg guiden for at installere de nødvendige værktøjer
  - Du skal have: VS Code med Extensions, GitHub Desktop og Git - du har muligvis allerede det meste
  - Spring over trin _8. Node.js & npm_ (ikke nødvendigt i dette forløb)

- **[Opret et nyt projekt med GitHub Desktop](https://www.notion.so/Opret-et-nyt-projekt-med-GitHub-Desktop-92de71d56c544e52aa87cd58a7b0a1ed?pvs=21)**
  - Følg guiden - det er ok hvis der er ting du ikke forstår endnu
  - Navngiv dit projekt `movie-app`
  - Du skal have gennemgået Setup Tools først

- **Læs [JavaScript Basics](https://thevalleyofcode.com/lesson/js-basics/)** — afsnit 0–11 (meget korte artikler om variabler, typer, operators og strings)

## Agenda

<details>
<summary><strong>1. Introduktion og Movie App setup</strong></summary>

- Hvem er RACE? Hvad bygger vi på 4 dage?
- Projekt setup: `movie-app` med `index.html`, `app.js`, `app.css`
- Brug semantiske tags fra start: `header`, `main`, `section`
- Test Live Server

</details>

<details>
<summary><strong>2. Client-Server modellen & Webudvikling</strong></summary>

- Hvad sker der når du besøger en hjemmeside?
- Client (browser) vs. Server - hvem gør hvad?
- HTML, CSS og JavaScript - hver deres rolle
- Hvor passer vores Movie App ind?

</details>

<details>
<summary><strong>3. Variables, Datatyper & Console</strong></summary>

- Hvad er en variable? (`const` og `let`) (Opgave 1)
- const-first princip i praksis
- `console.log()` - din debugging ven

</details>

<details>
<summary><strong>4. querySelector & DOM Manipulation</strong></summary>

- **Hvorfor `querySelector()` er smart:** find præcis det element du skal arbejde med
- `.textContent` og `.style` - ændr indhold og udseende
- Praktisk øvelse: Find og ændr elementer (Opgave 2 & 3)

</details>

<details>
<summary><strong>5. Events & Klik-tæller</strong></summary>

- Hvad er et event - og hvorfor bruger vi det? (Opgave 4 intro)
- Bygge Movie App klik-tæller trin-for-trin (Opgave 5)
- Tilføj reset-knap og test sammen
- Hvis du er færdig: Opgave 6 udfordringer (6.1-6.3)
- **6.4: Refactor til funktioner** - Split event listeners i navngivne funktioner

</details>

## Materialer

**Slides:**

- [JavaScript - 1. semester](https://cederdorff.com/race/slides/javascript-1-semester.pdf)

**Opgaver:**

- [Movie App - DAG 1](../_exercises/movie-app-1.md) - 6 opgaver fra setup til klik-tæller og udfordringer
- [Hello JavaScript](https://www.notion.so/Hello-JavaScript-6ca283a288bd4fafbcea2a11b2c9806e?pvs=21) (ekstra øvelse)

**Links:**

- Movie App (færdig version): https://cederdorff.com/js-movie-app/
- JavaScript dokumentation: https://javascript.info
- The Valley of Code: https://thevalleyofcode.com/ (stærk opslagssamling om webudvikling)
