# RACE 4 - Søgning, Sortering, Dialog & Udgivelse

## Formål

Formålet med denne lektion er at bygge videre på Movie App'en fra DAG 3 og gøre den mere færdig og brugbar.

Du går fra et simpelt genre-filter til en app der kan:

- søge på titel
- kombinere søgning og genre-filter
- sortere filmene
- vise flere detaljer i en dialog
- udgives på GitHub Pages

**Mål:**

- Udvide koden fra DAG 3 i stedet for at starte forfra
- Implementere søgefunktion med `input`-event
- Kombinere titel-søgning og genre-filter
- Udvide filterlogikken til også at håndtere sortering
- Opdatere `showMovies(movies)` med movie count og tom-tilstand
- Udvide `showMovie(movie)` så cards er klar til interaktion
- Oprette og bruge HTML `<dialog>` element
- Bruge `showModal()` til at vise filmdetaljer
- Håndtere klik-events på dynamisk genererede movie cards
- Udgive appen på GitHub Pages

**Progression i forløbet:**

- **DAG 1:** Movie App setup + Klik-tæller
- **DAG 2:** Arrays, loops og hardcoded movie data
- **DAG 3:** Fetch + simpelt genre-filter
- **DAG 4:** Søgning + sortering + dialog + deployment ← DU ER HER

## Forberedelse

- [Færdiggør øvelsen fra DAG 3](../_exercises/movie-app-3.md)
- Sørg for at du har en fungerende løsning med:
  - `fetchMovies()`
  - `populateGenreSelect()`
  - `showMovies(movies)`
  - `showMovie(movie)`
  - `applyGenreFilter()`

**Læs:**

- [Dialog element på MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) for kort overblik
- [GitHub Pages dokumentation](https://docs.github.com/en/pages/getting-started-with-github-pages) for kort overblik

## Agenda

<details>
<summary><strong>1. Recap Fra DAG 3 Og Dagens Spring</strong></summary>

- Tjek at du har fungerende fetch og genre-filter
- Se på din egen kode: hvordan ser `fetchMovies()` og `applyGenreFilter()` ud?
- Gentag den kendte struktur fra DAG 3:
  - `fetchMovies()`
  - `populateGenreSelect()`
  - `showMovies(movies)`
  - `showMovie(movie)`
- Forstå dagens vigtigste arkitekturændring:
  - vi går fra ét filter til flere inputs
  - vi samler logikken gradvist
- Dagens mål:
  - først søgning
  - så sortering
  - så visning og dialog
  - til sidst GitHub Pages

</details>

<details>
<summary><strong>2. Søgefunktion Oven På Genre-filter</strong></summary>

- Hvorfor søgning?
  - Brugere ved ofte hvad de leder efter
- Hold fast i DAG 3-strukturen
  - byg videre på `applyGenreFilter()`
  - lad resten af appen være så uændret som muligt
- Gennemgå:
  - HTML søgefelt i `controls`
  - `input`-event
  - `.trim()`
  - `.toLowerCase()`
  - `.includes()`
- Praktisk kodning:
  - tilføj søgefelt
  - find `searchInput` i JavaScript
  - udvid filterfunktionen til også at håndtere søgning
  - brug filterfunktionen efter `fetchMovies()`
- Test undervejs:
  - virker genre stadig?
  - virker søgning?
  - virker de sammen?

</details>

<details>
<summary><strong>3. Sortering Oven På Filtrering</strong></summary>

- Byg videre på den funktion du lige har lavet
- Omdøb gradvist fra `applyFilters()` til `applyFiltersAndSort()`
- Tilføj sorterings-dropdown i HTML
- Læs `sortSelect.value` i JavaScript
- Sortér efter:
  - titel
  - år
  - rating
- Forstå rækkefølgen i flowet:
  - læs inputs
  - filtrér
  - sortér
  - vis resultat
- Test undervejs:
  - virker søgning stadig?
  - virker genre stadig?
  - virker sortering?
  - virker alle tre ting sammen?

</details>

<details>
<summary><strong>4. Visning, Movie Count Og Tom Tilstand</strong></summary>

- Før dialogen giver du listen et lille kvalitetsløft
- Tilføj `movie-count` i HTML
- Udvid `showMovies(movies)` så den:
  - rydder listen
  - viser antal film
  - håndterer tomt resultat
- Forstå kort hvorfor `showMovies(movies)` stadig er central:
  - samme funktion viser både hele listen og filtrerede lister
- Udvid `showMovie(movie)` med:
  - lidt mere struktur
  - bedre card-indhold
  - klasser som forbereder dialogen
- Justér CSS løbende:
  - controls
  - status-bar
  - `.empty`
  - card-styling

</details>

<details>
<summary><strong>5. Dialog Med Filmdetaljer</strong></summary>

- Hvad er en dialog?
  - et lag oven på siden med ekstra information
- Introducér HTML `<dialog>`
- Brug browserens indbyggede løsning i stedet for at bygge modal helt fra bunden
- Praktisk kodning:
  - tilføj dialog i HTML
  - style den grundlæggende i CSS
  - lav `showMovieDialog(movie)`
  - kobl klik på movie cards til dialogen
- Forstå hvorfor klik-eventen først sættes efter kortet er indsat i DOM'en
- Tilføj evt. ekstra tastaturvenlighed med Enter
- Test:
  - klik åbner dialog
  - indhold matcher den valgte film
  - dialogen kan lukkes igen

</details>

<details>
<summary><strong>6. Udgivelse På GitHub Pages</strong></summary>

- Hvad er GitHub Pages?
  - gratis hosting af statiske websites
- Formålet:
  - få appen online
  - kunne dele resultatet med andre
- Gennemgå trin for trin:
  - commit ændringer
  - push til GitHub
  - aktivér Pages i repository settings
  - vent på deploy
  - test siden live
- Gør det konkret:
  - URL-format: `https://brugernavn.github.io/repository-navn/`
- Kort fejlfinding:
  - er der pushed?
  - er `main` og root valgt?
  - er der givet lidt tid til deploy?

</details>

## Materialer

**Slides:**

- [JavaScript - 1. semester](https://cederdorff.com/race/slides/javascript-1-semester.pdf)

**Opgaver:**

- [Movie App - DAG 4](../_exercises/movie-app-4.md)
- [Games App - Kom godt i gang](../_exercises/games-app-guide.md)
- [Deploy dit website til GitHub Pages](https://www.notion.so/Deploy-dit-website-til-GitHub-Pages-2cba6f1413dc474883b58fdd4eba57bb?pvs=21)

**Movie App løsning:**

- GitHub (kode): https://github.com/cederdorff/js-movie-app
- GitHub Pages: https://cederdorff.com/js-movie-app/

**Links:**

- Dialog element guide: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
- GitHub Pages docs: https://docs.github.com/en/pages
