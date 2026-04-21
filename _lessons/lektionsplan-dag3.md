# RACE 3 - Fetch, JSON & Simpel Filtrering

## Formål

Formålet med denne lektion er at introducere jer til at hente rigtig data fra projektets JSON-fil og implementere ét simpelt genre-filter med dropdown.

**Mål:**

- Repetere funktioner (`showMovies()`, `showMovie(movie)`, parametre og return)
- Forstå og anvende `fetch()` til at hente data fra en URL
- Arbejde med `async`/`await` pattern
- Konvertere JSON til JavaScript objekter
- Forstå og bruge `Array.filter()` metoden
- Bruge `.includes()` til array søgning
- Implementere ét simpelt genre-filter med dropdown
- Håndtere tomme filtrerede resultater med en besked

**Hvorfor kun ét filter?**
Ved at fokusere på ét filter ad gangen lærer I konceptet ordentligt uden at blive overvældet af kombinerede filtre og ranges. Sortering tager vi som en enkel, fast del af DAG 4.

**Progression i forløbet:**

- **DAG 1:** Movie App setup + Klik-tæller (variabler, events)
- **DAG 2:** Arrays, loops, hardcoded movie data
- **DAG 3:** Fetch + simpel genre-filter ← DU ER HER
- **DAG 4:** Titel-søgning + dialog + sortering + deployment

## Forberedelse

- **Færdiggør DAG 2:**
  - Se opgaven her: [Movie App - DAG 2](../_exercises/movie-app-2.md)
  - Sørg for `showMovies()` og `showMovie(movie)` virker
  - Du skal kunne vise movie cards

- **Læs (små korte artikler):**
  - **Fetch:**
    - [Fetch](https://thevalleyofcode.com/lesson/fetch/)
    - [Introduction to Fetch](https://thevalleyofcode.com/lesson/fetch/introduction/)
    - [Async Fetch på W3Schools](https://www.w3schools.com/js/js_async_fetch.asp)
  - **JSON:**
    - [JSON](https://thevalleyofcode.com/lesson/js-built-in-objects/json/)
    - [JSON på W3Schools](https://www.w3schools.com/js/js_json.asp)
  - **Filter:**
    - [Array filter()](https://thevalleyofcode.com/lesson/js-array-functions/filter/)
    - [Array filter() på W3Schools](https://www.w3schools.com/jsref/jsref_filter.asp)

## Agenda

<details>
<summary><strong>1. Recap</strong></summary>

- Hvem fik arrays af objekter til at virke? Vis og fortæl (2-3 frivillige)
- Arrays, objects, loops, template literals
- Dagens mål: funktioner + rigtig data fra fetch + ét simpelt genre-filter (Opgave 0)

</details>

<details>
<summary><strong>2. Funktioner</strong></summary>

- Kort funktion-recap: hvorfor vi deler kode op i funktioner
- Gennemgå `showMovies()` og `showMovie(movie)` fra DAG 2
- Mini-øvelse: lav `formatMovieTitle(title, year)` der returnerer en samlet tekst
- Hvordan bruger vi funktioner sammen med fetch-flowet?
- Ansvarsdeling i funktioner: `fetchMovies()`, `showMovies()`, `showMovie(movie)`
- Hvornår kalder vi hvilke funktioner?
- Praktisk overgang: behold funktionsstrukturen mens data-kilden skiftes

</details>

<details>
<summary><strong>3. Fetch og JSON</strong></summary>

- Hvad er fetch? Henter data fra internettet
- Hvad er JSON? Dataformat der ligner JavaScript
- Hvorfor async/await? Data tager tid at hente — pizza-analogien
- Live demo: Fetch med async/await
- Praktisk øvelse: Erstat hardcoded data med fetch (Opgave 1)

</details>

<details>
<summary><strong>4. Array.filter() og .includes()</strong></summary>

- Hvad er `.filter()`? Udvælg specifikke elementer
- Filterfunktionen returnerer `true` (behold) eller `false` (drop)
- Live demo: Simpelt filter-eksempel med tal
- Problem: Genre er et array `["Action", "Sci-Fi"]` — løsning: `.includes()`
- Praktisk øvelse: Filtrer film baseret på genre (Opgave 2)

</details>

<details>
<summary><strong>5. Genre-filter med dropdown</strong></summary>

- Planlæg: HTML dropdown, JavaScript logik
- Trin-for-trin: `populateGenreSelect()`, `applyGenreFilter()`, `showMovies(filteredMovies)` (Opgave 3)
- Håndter tomme resultater: "Ingen film fundet"
- Vis filmtæller: "Viser 23 film"

</details>

<details>
<summary><strong>6. Afrunding og næste gang</strong></summary>

- Recap: fetch, async/await, filter, includes
- Hjemmearbejde: Ryd op i kode
- Forhåndsblik på DAG 4: Titel-søgning, dialog og deployment

</details>

## Materialer

**Slides:**

- [JavaScript - 1. semester](https://cederdorff.com/race/slides/javascript-1-semester.pdf)

**Opgaver:**

- [Movie App - DAG 3](../_exercises/movie-app-3.md)

**Links:**

- Movie Data (ekstern URL): https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json
- Movie App (færdig version): https://cederdorff.com/js-movie-app/
