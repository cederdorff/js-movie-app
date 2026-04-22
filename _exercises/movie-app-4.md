# DAG 4 - Søgning, Sortering, Dialog & GitHub Pages

## Formål

I dag bygger du videre på din løsning fra DAG 3.

Du har allerede:

- `fetch()` der henter filmdata
- `showMovies(movies)` der viser en liste
- `showMovie(movie)` der viser ét filmkort
- genre-filter med dropdown

I DAG 4 tilføjer vi fire nye lag:

- **Tekstsøgning** på filmtitel
- **Sortering** af film
- **Dialog** med flere detaljer om en film
- **GitHub Pages** så appen kan deles online

Vi holder samme progression som i de andre øvelser:

1. Start fra noget der allerede virker
2. Tilføj én ny ting ad gangen
3. Test undervejs
4. Byg videre i små trin

---

## Før Du Starter DAG 4

Du skal starte fra din fungerende løsning fra DAG 3.

På dette tidspunkt bør du have:

- en `index.html` med en sektion til controls og en sektion til filmlisten
- en genre-dropdown med id `genre-select`
- et element til filmlisten med id `movie-list`
- JavaScript der henter filmdata med `fetch()`
- en variabel som gemmer alle film, fx `allMovies`
- en funktion som viser en liste af film, fx `showMovies(movies)`
- en funktion som viser ét filmkort, fx `showMovie(movie)`
- en funktion som udfylder genre-dropdownen med genrer fra dataen
- et genre-filter der opdaterer listen når brugeren vælger en genre

> **Checkpoint:**
> Kan du i browseren vælge en genre og se listen opdatere?
> Hvis ikke, så gå tilbage til [DAG 3](./movie-app-3.md) først.

---

## Opgave 0: Forstå Springet Fra DAG 3 Til DAG 4

I DAG 3 havde du ét filter: genre.

I DAG 4 skal appen kunne:

1. læse flere inputs fra brugeren
2. kombinere flere filtre samtidigt
3. sortere resultatet
4. vise flere detaljer når man klikker på en film

Det betyder, at vi ikke længere kun har en funktion som filtrerer på genre.

I stedet laver vi én samlet funktion, der:

1. læser søgefeltet
2. læser genre-dropdownen
3. læser sortering
4. filtrerer filmene
5. sorterer dem
6. viser resultatet

Det er den vigtigste arkitekturændring i dag.

Vi prøver samtidig at holde fast i så meget af strukturen fra DAG 3 som muligt.

Det betyder:

- du beholder gerne `fetchMovies()`
- du beholder gerne `populateGenreSelect()`
- du beholder gerne `showMovies(movies)`
- du beholder gerne `showMovie(movie)`
- du bygger oven på `applyGenreFilter()` i stedet for at starte forfra

---

## Opgave 1: Tilføj Søgning

**Formål:** Brugeren skal kunne søge på titel.

Vi starter med søgning, fordi det er den naturlige udvidelse af dit eksisterende genre-filter.

I Opgave 1 holder vi os så tæt som muligt til strukturen fra DAG 3.

Det betyder, at du som udgangspunkt beholder:

- `fetchMovies()`
- `populateGenreSelect()`
- `showMovies(movies)`
- `showMovie(movie)`

Den største ændring i denne opgave er derfor kun, at `applyGenreFilter()` bliver udvidet til også at håndtere søgning.

### 1.1: Tilføj søgefelt til HTML

Åbn `index.html`.

Fra DAG 3 har du allerede en sektion med controls og genre-dropdown.
Det er i den sektion, du skal lave den første ændring.

Find den `<section class="controls">` hvor din genre-dropdown ligger.

Udvid den, så du også får et søgefelt.

Det nemmeste er at indsætte søgefeltets `<div class="control-group">` lige før den eksisterende genre-dropdown.

Brug denne struktur:

```html
<section class="controls">
  <div class="control-group">
    <label for="search-input">Søg på titel</label>
    <input
      type="text"
      id="search-input"
      placeholder="Fx matrix, dune eller dark"
    />
  </div>

  <div class="control-group">
    <label for="genre-select">Genre</label>
    <select id="genre-select">
      <option value="all">Alle genrer</option>
    </select>
  </div>
</section>
```

Hvis din HTML fra DAG 3 ser lidt anderledes ud, er det helt ok.
Det vigtige er bare, at du nu har:

- et input med id `search-input`
- din eksisterende dropdown med id `genre-select`

> **Checkpoint:**
> Kan du se søgefeltet i browseren?

### 1.1.1: Giv søgefeltet plads i CSS

Åbn `app.css`.

Fra DAG 3 har du sandsynligvis allerede styling til din `controls`-sektion.

Nu hvor sektionen skal rumme både søgning og genre, skal den kunne håndtere flere felter pænt.

Tilføj eller opdatér styles i retning af dette:

```css
.controls {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.control-group input,
.control-group select {
  width: 100%;
}
```

Du behøver ikke ramme præcis de samme værdier.
Det vigtigste er bare, at søgefelt og genre-dropdown står pænt og er nemme at bruge.

Hvis du allerede har en `.controls`-block fra DAG 3, så ret i den eksisterende block i stedet for at oprette en ny et andet sted i filen.

### 1.2: Find søgefeltet i JavaScript

Åbn nu `app.js`.

I DAG 3 havde du en reference til genre-dropdownen:

```javascript
const genreSelect = document.querySelector("#genre-select");
```

Find området i toppen af filen, hvor du allerede har dine andre DOM-variabler.

Tilføj nu også en reference til søgefeltet lige sammen med dem:

```javascript
const searchInput = document.querySelector("#search-input");
```

Sæt den lige under:

```javascript
const genreSelect = document.querySelector("#genre-select");
```

### 1.3: Saml filtreringen i én funktion

Bliv i `app.js`.

I DAG 3 havde du typisk en funktion som lignede:

```javascript
function applyGenreFilter() {
  const selectedGenre = genreSelect.value;

  const filteredMovies = allMovies.filter(function (movie) {
    return selectedGenre === "all" || movie.genre.includes(selectedGenre);
  });

  showMovies(filteredMovies);
}
```

Nu skal vi udvide idéen.

I denne del af opgaven skal du kun fokusere på én ting:

- få søgning til at virke sammen med dit eksisterende genre-filter

Du skal **ikke** tænke på sortering endnu.
Det kommer først i Opgave 2.

Find din nuværende genre-filter-funktion.

Omdøb funktionen fra:

```javascript
function applyGenreFilter() {
```

til:

```javascript
function applyFilters() {
```

Du skal altså ændre selve funktionsnavnet der, hvor funktionen bliver defineret.

Du skal ikke lave en ny funktion et andet sted i filen.
Du skal ændre den eksisterende `applyGenreFilter()` funktion dér hvor den allerede står.

Start med kun at ændre toppen af funktionen, så den læser begge inputfelter.

Din funktion skal nu starte sådan her:

```javascript
function applyFilters() {
  const selectedGenre = genreSelect.value;
  const searchValue = searchInput.value.trim().toLowerCase();
  // eksisterende genre-filter-kode
}
```

### 1.4: Filtrér både på genre og titel

Bliv i den samme funktion i `app.js`.

Find linjen hvor du i DAG 3 lavede:

```javascript
const filteredMovies = allMovies.filter(...)
```

Erstat filter-logikken med denne version, så der både filtreres på genre og søgning:

```javascript
function applyFilters() {
  const selectedGenre = genreSelect.value;
  const searchValue = searchInput.value.trim().toLowerCase();

  const filteredMovies = allMovies.filter(function (movie) {
    const matchesGenre =
      selectedGenre === "all" || movie.genre.includes(selectedGenre);
    const matchesSearch = movie.title.toLowerCase().includes(searchValue);

    return matchesGenre && matchesSearch;
  });

  showMovies(filteredMovies);
}
```

**Hvad sker der her?**

- `matchesGenre` checker om filmen passer til genren
- `matchesSearch` checker om titlen indeholder søgeteksten
- vi beholder kun filmen hvis **begge** er `true`

Det er første gang i forløbet, at du kombinerer flere betingelser i samme filter.

Stop gerne op her og test, før du går videre.

Målet lige nu er kun dette:

- genre-filter virker stadig
- søgning virker også
- de to ting virker sammen

Sortering venter vi med til næste opgave.

### 1.5: Opdatér event listeners

Bliv stadig i `app.js`.

Nu skal både genre-dropdown og søgefelt trigge den samme filterfunktion.

Find stedet hvor du sætter din event listener på genre-dropdownen.

I DAG 3 ligger den typisk nederst i `fetchMovies()`:

```javascript
genreSelect.addEventListener("change", applyGenreFilter);
```

Hvis du tidligere havde:

```javascript
genreSelect.addEventListener("change", applyGenreFilter);
```

så skal du ændre den eksisterende linje og tilføje en ny linje under den:

```javascript
genreSelect.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);
```

`input` er smart til søgning, fordi listen opdateres mens brugeren skriver.

Sæt den nye `searchInput.addEventListener(...)` linje lige under genre-listeneren.

### 1.6: Sørg for at appen bruger filterfunktionen efter fetch

Find nu din `fetchMovies()` funktion i `app.js`.

I DAG 3 viste du sandsynligvis alle film direkte efter fetch:

```javascript
showMovies(allMovies);
```

I DAG 4 vil vi hellere lade den samlede filterfunktion styre visningen.

Det betyder, at du skal finde linjen med:

```javascript
showMovies(allMovies);
```

og erstatte den med:

```javascript
applyFilters();
```

Det er altså inde i `fetchMovies()` at du retter det sidste kald, så visningen efter datahentning går gennem din nye filterfunktion.

Hvis du også udfylder genre-dropdownen i samme funktion, skal den typisk ende sådan her:

```javascript
async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  populateGenreSelect();
  applyFilters();
}
```

> **Checkpoint:**
> Kan du nu både vælge genre og søge på titel samtidig?

<details>
<summary><strong>Vis samlet løsning efter Opgave 1</strong></summary>

Hvis du er kørt fast, kan du sammenligne med denne version.

Den viser en mulig løsning på søgning oven på din DAG 3-kode:

```javascript
"use strict";

const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];

const movieList = document.querySelector("#movie-list");
const genreSelect = document.querySelector("#genre-select");
const movieCount = document.querySelector("#movie-count");
const searchInput = document.querySelector("#search-input");

fetchMovies();

async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  populateGenreSelect();
  applyFilters();
}

function populateGenreSelect() {
  const genres = new Set();

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  const sortedGenres = [...genres].sort((a, b) => a.localeCompare(b));

  for (const genre of sortedGenres) {
    genreSelect.insertAdjacentHTML(
      "beforeend",
      `<option value="${genre}">${genre}</option>`,
    );
  }
}

function applyFilters() {
  const selectedGenre = genreSelect.value;
  const searchValue = searchInput.value.trim().toLowerCase();

  const filteredMovies = allMovies.filter(function (movie) {
    const matchesGenre =
      selectedGenre === "all" || movie.genre.includes(selectedGenre);
    const matchesSearch = movie.title.toLowerCase().includes(searchValue);

    return matchesGenre && matchesSearch;
  });

  showMovies(filteredMovies);
}

function showMovies(movies) {
  movieList.innerHTML = "";
  movieCount.textContent = `Viser ${movies.length} film`;

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const html = /* html */ `
    <article class="movie-card">
      <img class="movie-image" src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
        <p class="genre">${movie.genre.join(", ")}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}

genreSelect.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);
```

</details>

---

## Opgave 2: Tilføj Sortering

**Formål:** Brugeren skal kunne ændre rækkefølgen på filmene.

Nu hvor filtreringen virker, kan vi lægge sortering ovenpå.

Også her bygger vi videre på koden fra før i stedet for at lave en ny struktur.

### 2.1: Tilføj sortering til HTML

Åbn `index.html`.

Find den samme `<section class="controls">` som du lige har arbejdet i i Opgave 1.

Du har allerede:

- et søgefelt
- en genre-dropdown

Nu skal du tilføje en tredje control i den samme sektion: en dropdown til sortering.

Tilføj denne kode som endnu et `<div class="control-group">` inde i `controls`-sektionen:

```html
<div class="control-group">
  <label for="sort-select">Sortering</label>
  <select id="sort-select">
    <option value="none">Ingen sortering</option>
    <option value="title">Titel (A-Å)</option>
    <option value="year">Årstal (nyeste først)</option>
    <option value="rating">Rating (højeste først)</option>
  </select>
</div>
```

Du bør nu have tre controls:

- søgning
- genre
- sortering

> **Checkpoint:**
> Kan du se sorterings-dropdownen i browseren?

### 2.1.1: Justér CSS så der er plads til tre controls

Åbn `app.css`.

Nu har du tre felter i din `controls`-sektion:

- søgning
- genre
- sortering

Hvis layoutet ser klemt ud, så opdatér din `.controls`-style, så den passer bedre til tre kolonner.

Et eksempel kunne være:

```css
.controls {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 0.8rem;
}
```

Hvis du vil gøre layoutet mere robust på små skærme, kan du også tilføje:

```css
@media (max-width: 900px) {
  .controls {
    grid-template-columns: 1fr;
  }
}
```

Hvis du allerede har en `.controls`-style, så opdatér den eksisterende style.
Hvis du ikke har en `@media`-block endnu, kan du lægge den nederst i `app.css`.

### 2.2: Find sorterings-dropdownen i JavaScript

Åbn `app.js`.

Find området i toppen af filen, hvor du allerede har dine DOM-referencer, fx `movieList`, `genreSelect` og `searchInput`.

Tilføj nu også en reference til sorterings-dropdownen:

```javascript
const sortSelect = document.querySelector("#sort-select");
```

Sæt den lige under:

```javascript
const searchInput = document.querySelector("#search-input");
```

### 2.3: Udvid filterfunktionen til også at sortere

Bliv i `app.js`.

I Opgave 1 lavede du en funktion, der kun havde ét fokus:

- filtrere på genre
- filtrere på søgning

Nu bygger vi videre på den samme funktion.

I denne opgave skal du kun fokusere på én ny ting:

- få sortering til at virke oven på de filtre du allerede har

Du skal **ikke** tænke på dialog eller filmdetaljer endnu.
Det kommer først senere.

Nu ændrer vi `applyFilters()` til `applyFiltersAndSort()`.

Det nye navn gør det tydeligere hvad funktionen faktisk gør.

Find din nuværende funktion fra Opgave 1.

Omdøb funktionen fra:

```javascript
function applyFilters() {
```

til:

```javascript
function applyFiltersAndSort() {
```

Du skal altså ændre selve funktionsnavnet der, hvor funktionen bliver defineret.

Du skal ikke oprette en ekstra funktion længere nede i filen.
Du skal videreudbygge den funktion, du allerede lavede i Opgave 1.

Tilføj derefter en ny linje i toppen af funktionen, så den også læser den valgte sortering:

```javascript
const sortOption = sortSelect.value;
```

Sæt den lige under:

```javascript
const searchValue = searchInput.value.trim().toLowerCase();
```

Toppen af funktionen skal nu ligne dette:

```javascript
function applyFiltersAndSort() {
  const selectedGenre = genreSelect.value;
  const searchValue = searchInput.value.trim().toLowerCase();
  const sortOption = sortSelect.value;
}
```

### 2.4: Tilføj sorteringslogik i den samme funktion

Bliv i den samme funktion i `app.js`.

Find den del af funktionen hvor du allerede laver:

```javascript
const filteredMovies = allMovies.filter(...)
```

Ret den først til:

```javascript
let filteredMovies = allMovies.filter(...)
```

Vi bruger `let`, fordi vi bagefter vil ændre rækkefølgen på listen.

Tilføj derefter sorteringslogikken mellem filteret og `showMovies(filteredMovies);`.

Det betyder helt konkret:

1. behold din eksisterende `filter(...)`
2. indsæt `if/else if` sorteringsblokken lige efter filteret
3. lad `showMovies(filteredMovies);` blive stående nederst i funktionen

Hele funktionen skal nu ligne dette:

```javascript
function applyFiltersAndSort() {
  const selectedGenre = genreSelect.value;
  const searchValue = searchInput.value.trim().toLowerCase();
  const sortOption = sortSelect.value;

  let filteredMovies = allMovies.filter(function (movie) {
    const matchesGenre =
      selectedGenre === "all" || movie.genre.includes(selectedGenre);
    const matchesSearch = movie.title.toLowerCase().includes(searchValue);

    return matchesGenre && matchesSearch;
  });

  if (sortOption === "title") {
    filteredMovies.sort(function (movieA, movieB) {
      return movieA.title.localeCompare(movieB.title);
    });
  } else if (sortOption === "year") {
    filteredMovies.sort(function (movieA, movieB) {
      return movieB.year - movieA.year;
    });
  } else if (sortOption === "rating") {
    filteredMovies.sort(function (movieA, movieB) {
      return movieB.rating - movieA.rating;
    });
  }

  showMovies(filteredMovies);
}
```

### 2.5: Opdatér event listeners igen

Bliv stadig i `app.js`.

Alle tre inputfelter skal nu pege på samme funktion:

```javascript
genreSelect.addEventListener("change", applyFiltersAndSort);
searchInput.addEventListener("input", applyFiltersAndSort);
sortSelect.addEventListener("change", applyFiltersAndSort);
```

Find derfor dine to eksisterende linjer fra Opgave 1:

```javascript
genreSelect.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);
```

Erstat dem med de tre linjer ovenfor.

De skal stå samme sted som før.
Du skal altså udskifte de gamle listeners, ikke tilføje de nye et helt andet sted i filen.

### 2.6: Sørg for at `fetchMovies()` bruger den nye funktion

Find nu din `fetchMovies()` funktion i `app.js`.

I Opgave 1 endte den sandsynligvis med:

```javascript
populateGenreSelect();
applyFilters();
```

Nu skal den i stedet kalde den nye funktion.

Find linjen med:

```javascript
applyFilters();
```

og erstat den med:

```javascript
applyFiltersAndSort();
```

Hvis du også udfylder genre-dropdownen i samme funktion, skal den typisk ende sådan her:

```javascript
async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  populateGenreSelect();
  applyFiltersAndSort();
}
```

### 2.7: Hvorfor bruger vi `let filteredMovies`?

I filterdelen laver vi først listen:

```javascript
let filteredMovies = allMovies.filter(...);
```

Vi bruger `let`, fordi vi bagefter vil ændre rækkefølgen med `.sort()`.

Det er stadig den samme liste vi arbejder med, men den bliver ændret undervejs.

Stop gerne op og test her, før du går videre.

Målet lige nu er kun dette:

- søgning virker stadig
- genre-filter virker stadig
- sortering virker også
- alle tre ting virker sammen

Dialog og filmdetaljer venter vi med til næste store del.

> **Checkpoint:**
> Kan du nu:
>
> - søge på titel
> - vælge genre
> - sortere listen
> - kombinere alle tre ting samtidig?

<details>
<summary><strong>Vis samlet løsning efter Opgave 2</strong></summary>

Hvis du er kørt fast, kan du sammenligne med denne version.

Den viser en mulig løsning på sortering oven på Opgave 1:

```javascript
"use strict";

const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];

const movieList = document.querySelector("#movie-list");
const genreSelect = document.querySelector("#genre-select");
const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");
const movieCount = document.querySelector("#movie-count");

fetchMovies();

async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  populateGenreSelect();
  applyFiltersAndSort();
}

function populateGenreSelect() {
  const genres = new Set();

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  const sortedGenres = [...genres].sort((a, b) => a.localeCompare(b));

  for (const genre of sortedGenres) {
    genreSelect.insertAdjacentHTML(
      "beforeend",
      `<option value="${genre}">${genre}</option>`,
    );
  }
}

function applyFiltersAndSort() {
  const selectedGenre = genreSelect.value;
  const searchValue = searchInput.value.trim().toLowerCase();
  const sortOption = sortSelect.value;

  let filteredMovies = allMovies.filter(function (movie) {
    const matchesGenre =
      selectedGenre === "all" || movie.genre.includes(selectedGenre);
    const matchesSearch = movie.title.toLowerCase().includes(searchValue);

    return matchesGenre && matchesSearch;
  });

  if (sortOption === "title") {
    filteredMovies.sort(function (movieA, movieB) {
      return movieA.title.localeCompare(movieB.title);
    });
  } else if (sortOption === "year") {
    filteredMovies.sort(function (movieA, movieB) {
      return movieB.year - movieA.year;
    });
  } else if (sortOption === "rating") {
    filteredMovies.sort(function (movieA, movieB) {
      return movieB.rating - movieA.rating;
    });
  }

  showMovies(filteredMovies);
}

function showMovies(movies) {
  movieList.innerHTML = "";
  movieCount.textContent = `Viser ${movies.length} film`;

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const html = /* html */ `
    <article class="movie-card">
      <img class="movie-image" src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
        <p class="genre">${movie.genre.join(", ")}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}

genreSelect.addEventListener("change", applyFiltersAndSort);
searchInput.addEventListener("input", applyFiltersAndSort);
sortSelect.addEventListener("change", applyFiltersAndSort);
```

</details>

---

## Opgave 3: Gør Visningen Mere Professionel

**Formål:** Opdatér HTML/CSS og movie count så appen passer til de nye features.

Når vi tilføjer flere controls og flere data på kortene, giver det mening at stramme UI'et lidt op.

Strukturen fra DAG 3 bevarer vi stadig:

- `fetchMovies()` henter data
- `populateGenreSelect()` udfylder dropdownen
- `applyFiltersAndSort()` vælger hvilke film der skal vises
- `showMovies(movies)` renderer listen
- `showMovie(movie)` renderer ét kort

### 3.1: Tilføj movie count

Åbn `index.html`.

Find området lige under din `<section class="controls">`.

Hvis du ikke allerede har den, så tilføj en lille status-linje mellem controls og filmlisten:

```html
<section class="status-bar">
  <p id="movie-count">Viser 0 film</p>
</section>
```

Den kan placeres lige under dine controls og lige over filmlisten.

Med andre ord:

- indsæt den efter `</section>` for controls
- indsæt den før `<section id="movie-list" ...>`

> **Checkpoint:**
> Kan du nu se teksten `Viser 0 film` på siden?

### 3.1.1: Tilføj styling til movie count

Åbn `app.css`.

Tilføj en lille style til status-linjen og movie count, så den visuelt hænger sammen med resten af appen:

```css
.status-bar {
  margin: 0.8rem 0;
}

#movie-count {
  font-size: 0.9rem;
  font-weight: 700;
}
```

Læg dem gerne i nærheden af dine andre layout- og status-styles, eller nederst i filen hvis det er lettere at finde igen.

### 3.2: Opdatér `showMovies(movies)`

Åbn `app.js`.

Sørg først for at du har en DOM-reference til movie count, fx:

```javascript
const movieCount = document.querySelector("#movie-count");
```

Find området i toppen af filen, hvor du allerede har dine DOM-referencer, fx:

- `movieList`
- `genreSelect`
- `searchInput`
- `sortSelect`

Læg `movieCount` ind sammen med dem.

Sæt den fx lige under:

```javascript
const sortSelect = document.querySelector("#sort-select");
```

Find derefter din `showMovies(movies)` funktion.

I Opgave 2 har den sandsynligvis set nogenlunde sådan her ud:

```javascript
function showMovies(movies) {
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }
}
```

Udvid den, så den både rydder listen og viser antal film:

```javascript
function showMovies(movies) {
  movieList.innerHTML = "";
  movieCount.textContent = `Viser ${movies.length} ud af ${allMovies.length} film`;

  for (const movie of movies) {
    showMovie(movie);
  }
}
```

Det er en fin forbedring, fordi brugeren nu kan se hvor meget søgning og filtrering har indsnævret listen.

### 3.3: Håndtér tomt resultat

Bliv i den samme `showMovies(movies)` funktion i `app.js`.

Hvis ingen film matcher, bliver appen mere brugervenlig hvis du viser en besked i stedet for bare en tom liste.

Tilføj dette i `showMovies(movies)` lige efter at du har sat `innerHTML = ""` og movie count:

```javascript
if (movies.length === 0) {
  movieList.innerHTML =
    '<p class="empty">Ingen film matcher din søgning eller genre.</p>';
  return;
}
```

Det betyder, at `if (movies.length === 0) { ... }` skal stå før dit `for...of` loop.

Når du har tilføjet den besked i JavaScript, så gå også til `app.css` og giv den lidt styling:

```css
.empty {
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
}
```

### 3.4: Udvid `showMovie(movie)`

Bliv i `app.js`.

I DAG 3 viste du måske kun titel, år, rating og genre.

I DAG 4 vil vi gerne have kortene klar til klik og detaljer.

Find din nuværende `showMovie(movie)` funktion.

Den kan fra Opgave 2 ligne noget i denne retning:

```javascript
function showMovie(movie) {
  const html = /* html */ `
    <article class="movie-card">
      <img class="movie-image" src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
        <p class="genre">${movie.genre.join(", ")}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
```

Erstat template-delen med en version i denne stil:

```javascript
function showMovie(movie) {
  const html = /* html */ `
    <article class="movie-card" tabindex="0">
      <img src="${movie.image}" alt="Poster af ${movie.title}" class="movie-poster" />
      <div class="movie-info">
        <div class="title-row">
          <h2>${movie.title}</h2>
          <span class="year-badge">(${movie.year})</span>
        </div>
        <p class="genre">${movie.genre.join(", ")}</p>
        <p class="movie-rating">⭐ ${movie.rating}</p>
        <p class="director-line"><strong>Instruktør:</strong> ${movie.director}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
```

Du skal stadig beholde:

```javascript
movieList.insertAdjacentHTML("beforeend", html);
```

Den skal fortsat stå nederst i `showMovie(movie)`.

Det vil sige:

- ret HTML-template-strengen i toppen af funktionen
- behold selve `insertAdjacentHTML(...)` linjen nederst

**Hvorfor `tabindex="0"`?**

Det gør kortet fokusérbart, så det også kan nås med tastatur.

### 3.4.1: Tilføj styling til de nye movie cards

Åbn `app.css`.

Nu har du introduceret nye klassenavne i `showMovie(movie)`.

Det betyder, at du også skal style de nye elementer:

- `.movie-poster`
- `.title-row`
- `.year-badge`
- `.movie-rating`
- `.director-line`

Du kan fx starte med styles i denne retning:

```css
.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.year-badge {
  border-radius: 999px;
  padding: 0.35rem 0.45rem;
  font-size: 0.7rem;
}

.movie-rating {
  margin-top: 0.45rem;
  font-weight: 700;
}

.director-line {
  font-size: 0.8rem;
  margin-top: 0.4rem;
}
```

Hvis du også har skiftet fra `.movie-image` til `.movie-poster`, så husk at opdatere billed-stylingen til det nye klassenavn.

Hvis du bliver i tvivl, kan du bruge denne fil som reference:

- [_solutions/dag4/app.css](../_solutions/dag4/app.css)

Stop gerne op og test her, før du går videre.

Målet lige nu er kun dette:

- søgning virker stadig
- genre-filter virker stadig
- sortering virker stadig
- movie count opdateres
- du får en tom-besked hvis intet matcher
- kortene viser lidt mere information

Dialogen kommer først i Opgave 4.

> **Checkpoint:**
> Virker søgning, genre, sortering og movie count stadig efter dine UI-ændringer?

<details>
<summary><strong>Vis samlet løsning efter Opgave 3</strong></summary>

Hvis du er kørt fast, kan du sammenligne med denne version.

Den viser en mulig løsning på Opgave 3 oven på Opgave 2:

```javascript
"use strict";

const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];

const movieList = document.querySelector("#movie-list");
const genreSelect = document.querySelector("#genre-select");
const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");
const movieCount = document.querySelector("#movie-count");

fetchMovies();

async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  populateGenreSelect();
  applyFiltersAndSort();
}

function populateGenreSelect() {
  const genres = new Set();

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  const sortedGenres = [...genres].sort((a, b) => a.localeCompare(b));

  for (const genre of sortedGenres) {
    genreSelect.insertAdjacentHTML(
      "beforeend",
      `<option value="${genre}">${genre}</option>`,
    );
  }
}

function applyFiltersAndSort() {
  const selectedGenre = genreSelect.value;
  const searchValue = searchInput.value.trim().toLowerCase();
  const sortOption = sortSelect.value;

  let filteredMovies = allMovies.filter(function (movie) {
    const matchesGenre =
      selectedGenre === "all" || movie.genre.includes(selectedGenre);
    const matchesSearch = movie.title.toLowerCase().includes(searchValue);

    return matchesGenre && matchesSearch;
  });

  if (sortOption === "title") {
    filteredMovies.sort(function (movieA, movieB) {
      return movieA.title.localeCompare(movieB.title);
    });
  } else if (sortOption === "year") {
    filteredMovies.sort(function (movieA, movieB) {
      return movieB.year - movieA.year;
    });
  } else if (sortOption === "rating") {
    filteredMovies.sort(function (movieA, movieB) {
      return movieB.rating - movieA.rating;
    });
  }

  showMovies(filteredMovies);
}

function showMovies(movies) {
  movieList.innerHTML = "";
  movieCount.textContent = `Viser ${movies.length} ud af ${allMovies.length} film`;

  if (movies.length === 0) {
    movieList.innerHTML =
      '<p class="empty">Ingen film matcher din søgning eller genre.</p>';
    return;
  }

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const html = /* html */ `
    <article class="movie-card" tabindex="0">
      <img src="${movie.image}" alt="Poster af ${movie.title}" class="movie-poster" />
      <div class="movie-info">
        <div class="title-row">
          <h2>${movie.title}</h2>
          <span class="year-badge">(${movie.year})</span>
        </div>
        <p class="genre">${movie.genre.join(", ")}</p>
        <p class="movie-rating">⭐ ${movie.rating}</p>
        <p class="director-line"><strong>Instruktør:</strong> ${movie.director}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}

genreSelect.addEventListener("change", applyFiltersAndSort);
searchInput.addEventListener("input", applyFiltersAndSort);
sortSelect.addEventListener("change", applyFiltersAndSort);
```

</details>

---

## Opgave 4: Klik På En Film Og Vis Detaljer I En Dialog

**Formål:** Når brugeren klikker på et filmkort, skal der vises flere detaljer.

Nu gør vi appen mere interaktiv.

I stedet for at vise al information direkte på kortet, kan vi vise ekstra detaljer i en dialog.

Vi holder stadig fast i den kendte struktur:

- `showMovies(movies)` viser listen
- `showMovie(movie)` viser ét kort
- den nye funktion `showMovieDialog(movie)` viser detaljerne for det kort man klikker på

### 4.1: Tilføj dialog til HTML

Åbn `index.html`.

Find den nederste del af `body`, lige over:

```html
<script src="app.js"></script>
```

Tilføj denne kode nederst i `body`, lige over `<script src="app.js"></script>`:

```html
<dialog id="movie-dialog">
  <form method="dialog">
    <button id="close-dialog" aria-label="Luk">✕</button>
    <div id="dialog-content">
      <!-- Filmdetaljer indsættes her via JavaScript -->
    </div>
  </form>
</dialog>
```

Du skal altså ikke sætte dialogen inde i `main`.
Den skal stå som et selvstændigt element nederst i `body`.

Her er idéen:

- `<dialog>` er selve pop-up'en
- `#dialog-content` er området vi fylder med JavaScript
- knappen lukker dialogen

### 4.1.1: Tilføj grundlæggende dialog-CSS

Åbn `app.css`.

Når du har tilføjet dialogen i HTML, giver det mening at style selve boksen med det samme.

Tilføj i første omgang styles til:

- `#movie-dialog`
- `#movie-dialog::backdrop`
- `#dialog-content`
- `#close-dialog`

Læg dem gerne i bunden af `app.css`, så de er nemme at finde igen.

Et eksempel kunne være:

```css
dialog#movie-dialog {
  width: min(94vw, 900px);
  padding: 0;
  border-radius: 14px;
}

dialog#movie-dialog::backdrop {
  background: rgba(0, 0, 0, 0.7);
}

#dialog-content {
  display: grid;
  gap: 1rem;
  padding: 1rem;
}

#close-dialog {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
}
```

Hvis du allerede har styling til knapper eller modal-lignende elementer, så lad dialog-styles stå samlet ét sted, så de ikke bliver spredt rundt i filen.

### 4.2: Lav funktionen `showMovieDialog(movie)`

Åbn `app.js`.

Find et sted under dine andre funktioner, fx under `showMovie(movie)`.

Tilføj denne nye funktion:

```javascript
function showMovieDialog(movie) {
  const dialog = document.querySelector("#movie-dialog");
  const dialogContent = document.querySelector("#dialog-content");

  dialogContent.innerHTML = /* html */ `
    <img src="${movie.image}" alt="Poster af ${movie.title}" class="movie-poster">
    <div class="dialog-details">
      <h2>${movie.title} <span class="movie-year">(${movie.year})</span></h2>
      <p class="movie-genre">${movie.genre.join(", ")}</p>
      <p class="movie-rating">⭐ ${movie.rating}</p>
      <p><strong>Instruktør:</strong> ${movie.director}</p>
      <p><strong>Skuespillere:</strong> ${movie.actors.join(", ")}</p>
      <p class="movie-description">${movie.description}</p>
    </div>
  `;

  dialog.showModal();
}
```

Sæt den som en selvstændig funktion lige under `showMovie(movie)`.
Du skal ikke placere den inde i en anden funktion.

**Hvad sker der her?**

1. vi finder dialogen i HTML
2. vi indsætter indhold baseret på den valgte film
3. vi åbner dialogen med `showModal()`

### 4.3: Kobl klik på movie cards til dialogen

Bliv i `app.js`.

Nu skal `showMovie(movie)` ikke kun vise et kort.

Kortet skal også reagere på klik.

Find din nuværende `showMovie(movie)` funktion.

Den kan fra Opgave 3 ligne noget i denne retning:

```javascript
function showMovie(movie) {
  const html = /* html */ `
    <article class="movie-card" tabindex="0">
      <img src="${movie.image}" alt="Poster af ${movie.title}" class="movie-poster" />
      <div class="movie-info">
        <div class="title-row">
          <h2>${movie.title}</h2>
          <span class="year-badge">(${movie.year})</span>
        </div>
        <p class="genre">${movie.genre.join(", ")}</p>
        <p class="movie-rating">⭐ ${movie.rating}</p>
        <p class="director-line"><strong>Instruktør:</strong> ${movie.director}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
```

Du skal ikke lave hele funktionen om.

Du skal kun tilføje klik-logikken lige efter denne linje:

```javascript
movieList.insertAdjacentHTML("beforeend", html);
```

Tilføj:

```javascript
const newCard = movieList.lastElementChild;
newCard.addEventListener("click", function () {
  showMovieDialog(movie);
});
```

De nye linjer skal altså stå nederst i `showMovie(movie)`, efter kortet er blevet indsat i DOM'en.

Hele funktionen ender så sådan her:

```javascript
function showMovie(movie) {
  const html = /* html */ `
    <article class="movie-card" tabindex="0">
      <img src="${movie.image}" alt="Poster af ${movie.title}" class="movie-poster" />
      <div class="movie-info">
        <div class="title-row">
          <h2>${movie.title}</h2>
          <span class="year-badge">(${movie.year})</span>
        </div>
        <p class="genre">${movie.genre.join(", ")}</p>
        <p class="movie-rating">⭐ ${movie.rating}</p>
        <p class="director-line"><strong>Instruktør:</strong> ${movie.director}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);

  const newCard = movieList.lastElementChild;
  newCard.addEventListener("click", function () {
    showMovieDialog(movie);
  });
}
```

Det smarte her er:

- du renderer kortet først
- derefter finder du det sidst indsatte kort
- så kobler du et klik til den rigtige film

### 4.4: Ekstra tastaturvenlighed

Bliv i den samme `showMovie(movie)` funktion.

Hvis du vil gøre løsningen bedre, kan du også åbne dialogen med Enter.

Det er ikke et krav for at komme i mål, men det er en god øvelse.

Tilføj i så fald også denne event listener lige under klik-listeneren:

```javascript
newCard.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    showMovieDialog(movie);
  }
});
```

Den skal stå direkte under:

```javascript
newCard.addEventListener("click", function () {
  showMovieDialog(movie);
});
```

### 4.4.1: Udvid dialog-CSS med indholdsstyling

Åbn `app.css`.

Nu hvor dialogen også får rigtigt indhold fra JavaScript, kan du udvide stylingen med:

- `.dialog-details`
- `.movie-year`
- `.movie-genre`
- `.movie-description`

Et eksempel kunne være:

```css
.dialog-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.movie-description {
  padding: 0.9rem;
  border-left: 4px solid #69c8f0;
}
```

Du kan stadig bruge denne fil som reference:

- [_solutions/dag4/app.css](../_solutions/dag4/app.css)

Læg også disse styles i bunden af `app.css`, lige under den grundlæggende dialog-CSS fra 4.1.1, så dialog-stylingen står samlet.

Her er browserens built-in dialog faktisk ret smart, så du slipper for at bygge en modal helt fra bunden med `position: fixed` og ekstra overlay-logik.

Stop gerne op og test her, før du går videre.

Målet lige nu er kun dette:

- filmkort kan stadig vises
- klik på et kort åbner dialogen
- dialogen viser de rigtige detaljer
- dialogen kan lukkes igen

GitHub Pages kommer først i næste opgave.

> **Checkpoint:**
> Kan du klikke på et filmkort og få vist flere detaljer i en dialog?

<details>
<summary><strong>Vis samlet løsning efter Opgave 4</strong></summary>

Hvis du er kørt fast, kan du sammenligne med denne version.

Den viser en mulig løsning på Opgave 4 oven på Opgave 3:

```javascript
"use strict";

const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];

const movieList = document.querySelector("#movie-list");
const genreSelect = document.querySelector("#genre-select");
const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");
const movieCount = document.querySelector("#movie-count");

fetchMovies();

async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  populateGenreSelect();
  applyFiltersAndSort();
}

function populateGenreSelect() {
  const genres = new Set();

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  const sortedGenres = [...genres].sort((a, b) => a.localeCompare(b));

  for (const genre of sortedGenres) {
    genreSelect.insertAdjacentHTML(
      "beforeend",
      `<option value="${genre}">${genre}</option>`,
    );
  }
}

function applyFiltersAndSort() {
  const selectedGenre = genreSelect.value;
  const searchValue = searchInput.value.trim().toLowerCase();
  const sortOption = sortSelect.value;

  let filteredMovies = allMovies.filter(function (movie) {
    const matchesGenre =
      selectedGenre === "all" || movie.genre.includes(selectedGenre);
    const matchesSearch = movie.title.toLowerCase().includes(searchValue);

    return matchesGenre && matchesSearch;
  });

  if (sortOption === "title") {
    filteredMovies.sort(function (movieA, movieB) {
      return movieA.title.localeCompare(movieB.title);
    });
  } else if (sortOption === "year") {
    filteredMovies.sort(function (movieA, movieB) {
      return movieB.year - movieA.year;
    });
  } else if (sortOption === "rating") {
    filteredMovies.sort(function (movieA, movieB) {
      return movieB.rating - movieA.rating;
    });
  }

  showMovies(filteredMovies);
}

function showMovies(movies) {
  movieList.innerHTML = "";
  movieCount.textContent = `Viser ${movies.length} ud af ${allMovies.length} film`;

  if (movies.length === 0) {
    movieList.innerHTML =
      '<p class="empty">Ingen film matcher din søgning eller genre.</p>';
    return;
  }

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const html = /* html */ `
    <article class="movie-card" tabindex="0">
      <img src="${movie.image}" alt="Poster af ${movie.title}" class="movie-poster" />
      <div class="movie-info">
        <div class="title-row">
          <h2>${movie.title}</h2>
          <span class="year-badge">(${movie.year})</span>
        </div>
        <p class="genre">${movie.genre.join(", ")}</p>
        <p class="movie-rating">⭐ ${movie.rating}</p>
        <p class="director-line"><strong>Instruktør:</strong> ${movie.director}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);

  const newCard = movieList.lastElementChild;
  newCard.addEventListener("click", function () {
    showMovieDialog(movie);
  });

  newCard.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      showMovieDialog(movie);
    }
  });
}

function showMovieDialog(movie) {
  const dialog = document.querySelector("#movie-dialog");
  const dialogContent = document.querySelector("#dialog-content");

  dialogContent.innerHTML = /* html */ `
    <img src="${movie.image}" alt="Poster af ${movie.title}" class="movie-poster">
    <div class="dialog-details">
      <h2>${movie.title} <span class="movie-year">(${movie.year})</span></h2>
      <p class="movie-genre">${movie.genre.join(", ")}</p>
      <p class="movie-rating">⭐ ${movie.rating}</p>
      <p><strong>Instruktør:</strong> ${movie.director}</p>
      <p><strong>Skuespillere:</strong> ${movie.actors.join(", ")}</p>
      <p class="movie-description">${movie.description}</p>
    </div>
  `;

  dialog.showModal();
}

genreSelect.addEventListener("change", applyFiltersAndSort);
searchInput.addEventListener("input", applyFiltersAndSort);
sortSelect.addEventListener("change", applyFiltersAndSort);
```

</details>

---

## Opgave 5: Publicér Til GitHub Pages

**Formål:** Gør appen offentlig, så den kan deles.

Nu har du en rigtig lille webapp, og sidste trin er at få den online.

### 5.1: Commit dine ændringer

I GitHub Desktop:

1. Gå til fanen **Changes**
2. Gennemgå dine filer
3. Skriv en commit-besked, fx `DAG 4 færdig - søgning, sortering og dialog`
4. Klik **Commit to main**

### 5.2: Push til GitHub

Klik **Push origin** i GitHub Desktop.

Det sender din seneste version op på GitHub.

### 5.3: Aktivér GitHub Pages

På GitHub:

1. Åbn dit repository i browseren
2. Klik på **Settings**
3. Klik på **Pages** i menuen til venstre
4. Under **Build and deployment** vælger du:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Klik **Save**

### 5.4: Vent på deploy

GitHub Pages bruger ofte lige et øjeblik på at bygge siden.

Efter kort tid får du en URL der typisk ligner:

```text
https://dit-brugernavn.github.io/repository-navn/
```

Åbn linket og test:

- loader appen?
- virker fetch stadig?
- virker søgning?
- virker sortering?
- virker dialogen?

### 5.5: Vigtigt når du senere ændrer noget

Når GitHub Pages først er sat op, er workflowet simpelt:

1. Lav ændringer lokalt
2. Commit i GitHub Desktop
3. Push til GitHub
4. Vent lidt
5. Genindlæs din GitHub Pages-side

Så bliver siden automatisk opdateret.

---

## Samlet Checkliste

Når du er færdig med DAG 4, skal din app kunne:

- hente filmdata med `fetch()`
- vise film i et grid
- filtrere på genre
- søge på titel
- sortere på titel, år eller rating
- vise movie count
- vise en tom-besked hvis intet matcher
- åbne en dialog med flere detaljer
- være publiceret på GitHub Pages

---

## Samlet JavaScript-Struktur

Når du er færdig, vil din kode typisk have denne struktur:

```javascript
"use strict";

const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";

let allMovies = [];
const movieList = document.querySelector("#movie-list");
const genreSelect = document.querySelector("#genre-select");
const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");
const movieCount = document.querySelector("#movie-count");

fetchMovies();

async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  populateGenreSelect();
  applyFiltersAndSort();
}
```

Resten af filen vil så bestå af:

- `populateGenreSelect()`
- `applyFiltersAndSort()`
- `showMovies(movies)`
- `showMovie(movie)`
- `showMovieDialog(movie)`

Du behøver ikke have præcis samme struktur eller funktionsnavne.

Det vigtige er at logikken er den samme.

Sammenlign eventuelt med:

- [_solutions/dag4/app.js](../_solutions/dag4/app.js)
- [_solutions/dag4/index.html](../_solutions/dag4/index.html)
- [_solutions/dag4/app.css](../_solutions/dag4/app.css)

---

## Fejlfinding

### Søgning virker ikke?

Tjek:

- findes `#search-input` i HTML?
- bruger du `input` event?
- kalder du `.toLowerCase()` på både titel og søgetekst?

### Sortering virker ikke?

Tjek:

- findes `#sort-select` i HTML?
- læser du `sortSelect.value`?
- bliver `.sort()` kørt efter filtreringen?

### Genre-dropdown er tom?

Tjek:

- bliver `populateGenreSelect()` kaldt efter fetch?
- indeholder `allMovies` data?
- bruger du `movie.genre` korrekt?

### Dialogen åbner ikke?

Tjek:

- findes `<dialog id="movie-dialog">` i HTML?
- bliver `showMovieDialog(movie)` kaldt ved klik?
- bruger du `dialog.showModal()`?

### GitHub Pages viser ikke siden?

Tjek:

- har du pushed til GitHub?
- er Pages sat til `main` og root?
- giver du GitHub 1-2 minutter til at bygge siden?

---

## Når Du Er Færdig

Så har du bygget en lille app med et ret realistisk frontend-flow:

1. hent data
2. læs brugerinput
3. filtrér og sortér data
4. render resultatet
5. vis detaljer i UI
6. deploy til web

Det er en rigtig fin afslutning på Movie App-forløbet.
