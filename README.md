# JavaScript Movie App

Et 4-dages JavaScript-forløb for begyndere, bygget til multimediedesignstuderende.

## Overblik

Forløbet bygger en lille movie app i fire trin:

- DAG 1: grundlæggende DOM og events
- DAG 2: arrays, objekter og rendering
- DAG 3: `fetch()`, JSON og genre-filter
- DAG 4: søgning, sortering, dialog og GitHub Pages

Materialet består af:

- ovelser i `_exercises/`
- loesninger i `_solutions/`
- lektionsplaner i `_lessons/`
- slides i `_slides/`

## Projektstruktur

```text
js-movie-app/
├── index.html
├── app.js
├── app.css
├── img/
│   └── favicon.png
├── _exercises/
│   ├── movie-app-1.md
│   ├── movie-app-2.md
│   ├── movie-app-3.md
│   ├── movie-app-4.md
│   ├── personer-liste-ekstraopgave-dag2.md
│   ├── games-app-guide.md
│   └── emneoversigt.md
├── _solutions/
│   ├── dag1/
│   ├── dag2/
│   ├── dag2-ekstra-personliste/
│   ├── dag3/
│   └── dag4/
├── _lessons/
│   ├── lektionsplan-dag1.md
│   ├── lektionsplan-dag2.md
│   ├── lektionsplan-dag3.md
│   └── lektionsplan-dag4.md
└── _slides/
    ├── dag1.html
    └── dag2.html
```

## Dage

### DAG 1

Fokus:

- `querySelector`
- `addEventListener`
- variabler og simple funktioner
- helt enkel DOM-opdatering

Se:

- `_exercises/movie-app-1.md`
- `_solutions/dag1/`

### DAG 2

Fokus:

- arrays og objekter
- `for...of`
- template literals
- rendering af en liste med hardcoded data

Se:

- `_exercises/movie-app-2.md`
- `_solutions/dag2/`

Ekstra:

- `_exercises/personer-liste-ekstraopgave-dag2.md`
- `_solutions/dag2-ekstra-personliste/`

### DAG 3

Fokus:

- `fetch()`
- `async/await`
- JSON-data
- `populateGenreSelect()`
- `applyGenreFilter()`
- movie count og et simpelt genre-filter

Se:

- `_exercises/movie-app-3.md`
- `_solutions/dag3/`

### DAG 4

Fokus:

- fælles baseline fra DAG 3
- `DOMContentLoaded` og `initApp()`
- søgning på titel
- sortering
- `applyFilters()`
- tom-tilstand
- dialog med filmdetaljer
- GitHub Pages

Se:

- `_exercises/movie-app-4.md`
- `_solutions/dag4/`

## Root-filer

Filerne i roden er den aktuelle samlede app:

- [index.html](/Users/race/Developer/js-movie-app/index.html)
- [app.js](/Users/race/Developer/js-movie-app/app.js)
- [app.css](/Users/race/Developer/js-movie-app/app.css)

Den matcher i praksis DAG 4-niveau:

- `initApp()` på `DOMContentLoaded`
- søgning, genre og sortering
- movie count
- tom-besked
- dialog med detaljer

## Kom i gang

Projektet er ren HTML, CSS og JavaScript. Der er ingen `package.json`.

Kør lokalt med fx:

1. Live Server i VS Code
2. en simpel statisk server

Appen henter data fra:

`https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json`

## For undervisere

Anbefalet arbejdsgang:

1. Brug øvelsesfilerne i `_exercises/` som elevspor
2. Brug mapperne i `_solutions/` som reference efter hver dag
3. Brug `_lessons/` til planlægning
4. Brug `_slides/` som supplement

## Undervisningstips

- Hold fast i progressionen: ét lag ad gangen
- Test i browseren efter hver ændring
- Brug `console.log()` aktivt i de tidlige dage
- Lad studerende sammenligne med `_solutions/` efter de selv har prøvet
