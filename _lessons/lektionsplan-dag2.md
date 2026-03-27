# RACE 2 - Arrays, Loops & Objects

## Formål

Formålet med denne lektion er at bygge videre på jeres Movie App projekt fra DAG 1 og introducere datastrukturer - så I kan arbejde med lister af film i stedet for bare én counter.

**Mål:**

- Forstå arrays til at gemme lister af data
- Bruge `for...of` loops til at iterere gennem arrays
- Arbejde med objekter (key-value pairs)
- Kombinere arrays og objekter til movie data
- Bruge template literals til dynamisk HTML
- Strukturere kode med funktioner
- **Bonus:** Introduktion til fetch (valgfri)

**Hvorfor hardcoded data først?**
Ved at starte med hardcoded data kan I fokusere på at forstå arrays, loops og objekter uden at skulle håndtere kompleksiteten af asynkrone kald. Fetch kommer som bonus, men er ikke et krav i dag.

**Progression:**

- **DAG 1:** Movie App setup + Klik-tæller (variabler, events)
- **DAG 2:** Arrays, loops, hardcoded movie data ← DU ER HER
- **DAG 3:** Fetch + simpel genre-filter
- **DAG 4:** Titel-søgning + dialog + sortering + deployment

## Forberedelse

- **Færdiggør DAG 1:**
  - Sørg for din klik-tæller virker
  - Forstå variables, querySelector og addEventListener
  - Har dit `movie-app` projekt klar

- **Læs:**
  - [Arrays på javascript.info](https://javascript.info/array) (skim - fokus på basics)
  - [Objects på javascript.info](https://javascript.info/object) (skim - basics)
  - [Loops på javascript.info](https://javascript.info/while-for) (fokus på `for...of`)

### På dagen:

- Åbn dit `movie-app` projekt fra DAG 1
- Vær klar til at udvide samme projekt med arrays og loops
- Developer Tools åben

## Agenda

<details>
<summary><strong>1. Recap & Dagens Mål</strong></summary>

- Hvem fik klik-tæller til at virke?
- Vis jeres udfordringer (2-3 frivillige)
- Quiz: Variables, querySelector, addEventListener
- Dagens mål: Fra klik-tæller til rigtig Movie App med film-lister!

</details>

<details>
<summary><strong>2. Opdater Projekt til DAG 2</strong></summary>

- Åbn dit `movie-app` projekt fra DAG 1
- Opdater HTML struktur: Fra counter-box til semantisk `section#movie-list`
- Opdater CSS: Fra counter styling til movie card grid
- Indsæt 2-3 hardcoded film-kort i HTML som bro-øvelse (Opgave 0.6)
- Kort refleksion: "Hvorfor bliver dette tungt i hånden?"
- Ryd op i app.js - vi starter frisk med ny kode

</details>

<details>
<summary><strong>3. Arrays Fundamentals</strong></summary>

- Hvad er et array? En liste/samling af værdier
- Syntax: `let films = ["Inception", "Matrix"]`
- Array index og `.length` property
- Praktisk øvelse: Opret og manipuler arrays (Opgave 1 & 2)

</details>

<details>
<summary><strong>4. Loops: Gå Gennem Lister</strong></summary>

- Hvorfor loops? (Ellers skal vi skrive samme kode 100 gange!)
- `for...of` loop: Den letteste loop
- Praktisk øvelse: Loop gennem film-array (Opgave 3)
- Debugging øvelse: Fix common loop errors

</details>

<details>
<summary><strong>5. Objects Introduction</strong></summary>

- Hvad er et objekt? Data med labels (key-value)
- Fra `let title = "Inception"` til `let movie = { title: "Inception", year: 2010 }`
- Dot notation: `movie.title`, `movie.year`
- Praktisk øvelse: Lav movie-objekter (Opgave 4)

</details>

<details>
<summary><strong>6. Arrays af Objects & Template Literals</strong></summary>

- Kombiner arrays + objects = super kraftfuldt!
- Loop gennem og access properties (Opgave 4 & 5)
- Problem: At bygge HTML med `+` er grimt!
- Template literals med backticks og `${}`
- `insertAdjacentHTML` - tilføj til DOM

</details>

<details>
<summary><strong>7. Funktioner & Afrunding</strong></summary>

- Funktioner til at strukturere kode
- `showMovies()` og `showMovie(movie)` (Opgave 5)
- **Bonus introduktion:** forhåndsblik på fetch (ikke krav i dag)
- Hjemmearbejde: Færdiggør arrays af objekter

</details>

## Materialer

**Slides:**

- [JavaScript - 1. semester](https://cederdorff.com/race/slides/javascript-1-semester.pdf)

**Opgaver:**

- [Movie App - DAG 2](../_exercises/movie-app-2.md)
- [DOM Manipulation - Simple To Do List](https://www.notion.so/DOM-Manipulation-Simple-To-Do-List-adb24737446a4a72aa829ada27440e0f?pvs=21) (ekstra)

**Eksempel kode:**

- Komplet DAG 2 eksempel: `_solutions/dag2/app.js`
- HTML: `_solutions/dag2/index.html`
- CSS: `_solutions/dag2/style.css`

**Links:**

- Movie App (færdig version): https://cederdorff.com/js-movie-app/
- CSS Grid Guide: https://css-tricks.com/snippets/css/complete-guide-grid/
