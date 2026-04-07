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

**Hvorfor hardcoded data først?**
Ved at starte med hardcoded data kan I fokusere på at forstå arrays, loops og objekter uden at skulle håndtere kompleksiteten af asynkrone kald. Fetch kommer som bonus, men er ikke et krav i dag.

**Progression i forløbet:**

- **DAG 1:** Movie App setup + Klik-tæller (variabler, events)
- **DAG 2:** Arrays, loops, hardcoded movie data ← DU ER HER
- **DAG 3:** Fetch + simpel genre-filter
- **DAG 4:** Titel-søgning + dialog + sortering + deployment

## Forberedelse

- **Færdiggør DAG 1:**
  - Se opgaven her: [Movie App - DAG 1](../_exercises/movie-app-1.md)
  - Sørg for din klik-tæller virker
  - Forstå variables, querySelector og addEventListener

- **Læs (små korte artikler):**
  - **Arrays:**
    - [Arrays](https://thevalleyofcode.com/lesson/js-arrays/)
    - [Number of items in an array](https://thevalleyofcode.com/lesson/js-arrays/number-of-items-in-an-array/)
    - [Adding an item to an existing array](https://thevalleyofcode.com/lesson/js-arrays/adding-an-item-to-an-existing-array/)
  - **Loops:**
    - [Loops](https://thevalleyofcode.com/lesson/js-loops/)
    - [The for...of loop](https://thevalleyofcode.com/lesson/js-loops/the-for-of-loop/)
  - **Objects:**
    - [Objects](https://thevalleyofcode.com/lesson/js-objects/)
    - [How to create an object](https://thevalleyofcode.com/lesson/js-objects/how-to-create-an-object/)
    - [Object properties](https://thevalleyofcode.com/lesson/js-objects/object-properties/)
  - **Functions:**
    - [Functions](https://thevalleyofcode.com/lesson/js-functions/)
    - [Function parameters](https://thevalleyofcode.com/lesson/js-functions/function-parameters/)
    - [Returning values from a function](https://thevalleyofcode.com/lesson/js-functions/returning-values-from-a-function/)

## Agenda

<details>
<summary><strong>1. Recap og Projektopsætning</strong></summary>

- Hvem fik klik-tæller til at virke? Vis udfordringer (2-3 frivillige)
- Dagens mål: Fra klik-tæller til Movie App med rigtige film-lister
- Opdater HTML + CSS til DAG 2 struktur (`section#movie-list`, movie card grid)
- Indsæt 2-3 hardcoded film-kort som bro-øvelse — refleksion: "Hvorfor er dette tungt i hånden?" (Opgave 0.1-0.6)

</details>

<details>
<summary><strong>2. Arrays og Loops</strong></summary>

- Hvad er et array? `const movies = ["Inception", "Matrix"]`
- Loop med `for...of`: Hvorfor? (Ellers skal vi skrive samme kode 100 gange!)
- Praktisk øvelse: Loop gennem film-array + første DOM-rendering (Opgave 1 & 2)

</details>

<details>
<summary><strong>3. Objects</strong></summary>

- Hvad er et objekt? Data med labels (key-value)
- Fra `let title = "Inception"` til `let movie = { title: "Inception", year: 2010 }`
- Dot notation: `movie.title`, `movie.year`
- Praktisk øvelse: Lav movie-objekter (Opgave 3)

</details>

<details>
<summary><strong>4. Arrays af Objects og Template Literals</strong></summary>

- Kombiner arrays + objects = super kraftfuldt
- Loop gennem objects og access properties
- Template literals med backticks og `${}`
- `insertAdjacentHTML` - tilføj til DOM
- Fokus på god praksis: Struktur i JS/HTML, styling i CSS (ingen inline styles) (Opgave 4)

</details>

<details>
<summary><strong>5. Funktioner og Afrunding</strong></summary>

- Funktioner til at strukturere kode: `showMovies()` og `showMovie(movie)` (Opgave 5)
- Udfordringer: billeder, flere film, rating-highlight (Opgave 6)
- **Bonus introduktion:** forhåndsblik på fetch, ikke et krav i dag (BONUS)
- Hjemmearbejde: Færdiggør arrays af objekter

</details>

## Materialer

**Slides:**

- [JavaScript - 1. semester](https://cederdorff.com/race/slides/javascript-1-semester.pdf)

**Opgaver:**

- [Movie App - DAG 2](../_exercises/movie-app-2.md)
- [DOM Manipulation - Simple To Do List](https://www.notion.so/DOM-Manipulation-Simple-To-Do-List-adb24737446a4a72aa829ada27440e0f?pvs=21) (ekstra)

**Links:**

- Movie App (færdig version): https://cederdorff.com/js-movie-app/
- CSS Grid Guide: https://css-tricks.com/snippets/css/complete-guide-grid/
