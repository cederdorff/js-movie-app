# RACE 3 - Fetch, JSON & Simpel Filtrering

## Formål

Formålet med denne lektion er at introducere jer til at hente rigtig data fra projektets JSON-fil og implementere én simpel genre-filter funktion.

**Mål:**

- Forstå og anvende `fetch()` til at hente data fra URL
- Arbejde med `async`/`await` pattern
- Konvertere JSON til JavaScript objekter
- Forstå og bruge `Array.filter()` metoden
- Bruge `.includes()` til array søgning
- Implementere ÉN simpel genre-filter
- Håndtere tomme filtrerede resultater

**Hvorfor kun én filter?**
Ved at fokusere på én filter ad gangen lærer I konceptet ordentligt uden at blive overvældet af kombinerede filtre og ranges. Sortering tager vi som en enkel, fast del af DAG 4.

## Forberedelse

- **Færdiggør DAG 2:**
  - Sørg for du har arrays af objekter der virker
  - Forstå loops og template literals
  - Ha' dit hardcoded movie data klar

- **Læs:**
  - [Fetch på javascript.info](https://javascript.info/fetch) (fokus på basics)
  - [JSON på W3Schools](https://www.w3schools.com/js/js_json.asp) (quick overview)
  - [Array.filter() på MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) (skim eksempler)

### På dagen:

- Åbn dit movie-app projekt fra DAG 2
- Vær klar til at erstatte hardcoded data med fetch
- Developer Tools åben og klar

## Agenda

**9:00 - 9:30 | Opsamling & Vis og fortæl (30 min)**

- Hvem fik arrays af objekter til at virke?
- Vis og fortæl: Vis jeres movie app (5-6 studerende)
- Quiz: Arrays, objects, loops, template literals
- Dagens mål: Rigtig data + én simpel filter

**9:30 - 10:30 | Fetch & JSON Fundamentals (60 min)**

- Hvad er fetch? Henter data fra internettet
- Hvad er JSON? Data format der ligner JavaScript
- Hvorfor async/await? Data tager tid at hente
- Pizza analogi: Asynkron vs synkron programmering
- Live demo: Fetch med async/await
- Praktisk øvelse: Erstat hardcoded data med fetch
- Debugging: Typiske fetch fejl

**10:30 - 10:45 | Pause **

**10:45 - 11:45 | Array.filter() Deep Dive (60 min)**

- Hvad er `.filter()`? Udvælg specifikke elementer
- Filter function returnerer `true` (behold) eller `false` (drop)
- Live demo: Simple filter eksempler med numbers
- Praktisk øvelse: Filtrer film baseret på år og rating
- Code review: Forklar hvad `return` gør

**11:45 - 12:00 | .includes() for Arrays (15 min)**

- Problem: Genre er et array `["Action", "Sci-Fi"]`
- Solution: `.includes()` checker om array indeholder værdi
- Quick test i console

**12:00 - 13:00 | Frokost **

**13:00 - 14:15 | Implementer ÉN Genre-filter (75 min)**

- Planlæg: HTML knapper, CSS styling, JavaScript logik
- Kod med trin-for-trin:
  - HTML: Filter knapper
  - HTML: Behold semantisk struktur (`section.controls`, `section#movie-list`)
  - CSS: Button styling og hover effects
  - JavaScript: Filter logik med `.filter()` og `.includes()`
  - JavaScript: Render film-kort som semantiske `<article>` elementer
- Praktisk øvelse: Implementer "Vis alle" og "Vis Action"
- Tilføj flere genre knapper (Drama, Comedy, Sci-Fi)

**14:15 - 14:45 | Polishing & Edge Cases (30 min)**

- Håndter tomme resultater: "Ingen film fundet"
- Implementer genre-valg (dropdown eller enkel knap)
- Vis counter: "Viser 23 film"
- Test at alt virker

**14:45 - 15:00 | Afrunding & Forhåndsblik (15 min)**

- Recap: fetch, async/await, filter, includes
- Spørgsmål: Hvad var sværest? Hvad var coolest?
- Forhåndsblik på DAG 4: Søgning, dialog og deployment!
- Hjemmearbejde: Ryd op i kode og forbered titel-søgning

## Materialer

**Slides:**

- [JavaScript - 1. semester](https://cederdorff.com/race/slides/javascript-1-semester.pdf)

**Opgaver:**

- [Movie App - DAG 3](../_exercises/movie-app-3.md)

**Eksempel kode:**

- Komplet DAG 3 eksempel: `_solutions/dag3/app.js`
- HTML: `_solutions/dag3/index.html`
- CSS: `_solutions/dag3/style.css`

**Links:**

- Movie Data (ekstern URL): https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json
- Movie App (færdig version): https://cederdorff.com/js-movie-app/
- Array.filter() dokumentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
