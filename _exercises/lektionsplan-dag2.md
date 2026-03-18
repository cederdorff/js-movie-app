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

- **DAG 1:** Movie App setup + Click counter (variabler, events)
- **DAG 2:** Arrays, loops, hardcoded movie data ← DU ER HER
- **DAG 3:** Fetch + simpel genre-filter
- **DAG 4:** Title-søgning + modal + sortering + deployment

## Forberedelse

- **Færdiggør DAG 1:**
  - Sørg for din click counter virker
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

**9:00 - 9:20 | Recap & Dagens Mål (20 min)**

- Hvem fik click counter til at virke?
- Vis jeres udfordringer (2-3 frivillige)
- Quiz: Variables, querySelector, addEventListener
- Dagens mål: Fra click counter til rigtig Movie App med film-lister!

**9:20 - 9:40 | Opdater Projekt til DAG 2 (20 min)**

- Åbn dit `movie-app` projekt fra DAG 1
- Opdater HTML struktur: Fra counter-box til movie-list
- Opdater CSS: Fra counter styling til movie card grid
- Ryd op i app.js - vi starter frisk med ny kode
- Code-along så alle er synkroniseret

**9:40 - 10:15 | Arrays Fundamentals (35 min)**

- Hvad er et array? En liste/samling af værdier
- Syntax: `let films = ["Inception", "Matrix"]`
- Array index og `.length` property
- Hands-on: Opret og manipuler arrays
- Code-along: Array med film titler

**10:15 - 10:30 | Pause **

**10:30 - 11:30 | Loops: Gå Gennem Lister (60 min)**

- Hvorfor loops? (Ellers skal vi skrive samme kode 100 gange!)
- `for...of` loop: Den letteste loop
- Sammenlign med manuel index
- Hands-on: Loop gennem film array
- Debugging øvelse: Fix common loop errors

**11:30 - 12:00 | Objects Introduction (30 min)**

- Hvad er et objekt? Data med labels (key-value)
- Fra `let title = "Inception"` til `let movie = { title: "Inception", year: 2010 }`
- Dot notation: `movie.title`, `movie.year`
- Hands-on: Lav movie objekter

**12:00 - 13:00 | Frokost **

**13:00 - 14:00 | Arrays af Objects (60 min)**

- Kombiner arrays + objects = super kraftfuldt!
- Array med movie objekter
- Loop gennem og access properties
- Code-along: Byg movies array med 5 film
- Hands-on: Lav dit eget movies array

**14:00 - 14:45 | Template Literals & HTML Generation (45 min)**

- Problem: At bygge HTML med `+` er grimt!
- Solution: Template literals med backticks
- `${}` - indsæt JavaScript expressions
- `insertAdjacentHTML` - tilføj til DOM
- Hands-on: Generer movie cards

**14:45 - 15:00 | Functions & Wrap-up (15 min)**

- Funktioner til at strukturere kode
- `showMovies()` og `showMovie(movie)`
- **Bonus introduktion:** fetch preview (ikke krav i dag)
- Hjemmearbejde: Færdiggør arrays af objekter

## Materialer

**Slides:**

- [JavaScript - 1. semester](https://cederdorff.com/race/slides/javascript-1-semester.pdf)

**Opgaver:**

- [Movie App - DAG 2](https://github.com/cederdorff/js-movie-app/blob/simplified-version/_exercises/movie-app-2-simplified.md)
- [DOM Manipulation - Simple To Do List](https://www.notion.so/DOM-Manipulation-Simple-To-Do-List-adb24737446a4a72aa829ada27440e0f?pvs=21) (ekstra)

**Eksempel kode:**

- Komplet DAG 2 eksempel: `_exercises/examples/dag2/app.js`
- HTML: `_exercises/examples/dag2/index.html`
- CSS: `_exercises/examples/dag2/style.css`

**Links:**

- Movie App (færdig version): https://cederdorff.com/js-movie-app/
- CSS Grid Guide: https://css-tricks.com/snippets/css/complete-guide-grid/
