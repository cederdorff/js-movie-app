# DAG 3 - Fetch, JSON & Simpelt Genre-filter

## Formål

I dag skal du lære at hente rigtig data og tilføje **ét enkelt** genre-filter.

Vi bruger const-first: start med `const`, og skift kun til `let` hvis en variabel skal kunne ændre værdi.

**Du lærer:**

- Hvordan henter man data fra en URL? (fetch)
- Hvad er JSON?
- Hvordan filtrerer man et array? (`.filter()`)
- Hvordan laver man et simpelt genre-filter med dropdown?

**Vi lærer IKKE endnu:**

- Søgefelter
- Dropdowns med mange valg
- Range filters (år/rating)
- Kombinerede filtre
- Sortering (det kommer i DAG 4)

**Hold det simpelt!** Én ting ad gangen.

## Progression Fra DAG 2 Til DAG 3

I DAG 2 byggede du struktur med funktioner og hardcoded data.

I DAG 3 bygger du videre i denne rækkefølge:

1. Behold funktionsstrukturen fra DAG 2
2. Skift kun datakilden fra hardcoded array til `fetch()`
3. Filtrér data med `.filter()`
4. Kobl filteret til dropdown i UI

Du lærer altså ét nyt lag ad gangen oven på noget, du allerede kender.

---

## Før Du Starter DAG 3: Tilbage Til `main` (GitHub Desktop)

Nogle af jer er stadig på branchen fra person-ekstraopgaven (`dag2-ekstra-personliste`).

Før vi starter DAG 3, skal du sikre at dit arbejde er gemt, og at du er tilbage på `main`.

### Trin 1: Commit og push hvis du står på ekstraopgave-branchen

I GitHub Desktop:

1. Kig under **Changes** - er der ændringer?
2. Skriv en commit-besked, fx `DAG 2 ekstra færdig`
3. Klik **Commit to dag2-ekstra-personliste**
4. Klik **Push origin**

### Trin 2: Skift tilbage til `main`

1. Klik på branch-dropdown øverst i GitHub Desktop
2. Vælg `main`
3. Bekræft at der står `Current branch: main`

### Trin 3: Tjek at du er klar

- Du er på `main`
- Der står ingen ufærdige ændringer i **Changes**
- Du kan nu starte DAG 3-opgaven

---

## Opgave 0: Recap Fra DAG 2 (Funktioner Først)

### 0.1: Åbn dit projekt fra sidst

Åbn din `movie-app` fra DAG 2.

For at sikre samme udgangspunkt for alle bruger vi en fælles baseline i `app.js`.

> **Det er med vilje, at alle nulstiller til denne version.**
> Også hvis du har lavet ekstraopgaven fra DAG 2.
> Vi gør det for at hele holdet starter fra præcis samme kode, så resten af DAG 3 kan følges trin-for-trin.

```javascript
"use strict";

const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    image: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    image: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
  },
  {
    title: "Oppenheimer",
    year: 2023,
    rating: 8.4,
    image:
      "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Dune",
    year: 2021,
    rating: 8.0,
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
  },
];

const movieList = document.querySelector("#movie-list");

showMovies();

function showMovies() {
  movieList.innerHTML = "";

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
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
```

Copy/paste hele koden ovenfor, så vi er sikre på fælles udgangspunkt inden fetch-delen.

### 0.2: Mini-funktionsøvelse (step-by-step)

Formålet er at genopfriske funktioner, så de giver mening i den kode du allerede har.

**Kort forklaret: Hvad er en funktion?**

En funktion er en navngiven "mini-opskrift" i din kode.

- Den kan modtage input (parametre)
- Den kan lave noget arbejde
- Den kan sende et resultat tilbage (`return`)

I denne app er funktioner smarte, fordi:

1. Du undgår at gentage den samme kode mange steder
2. Du kan ændre adfærd ét sted og få ændringen overalt
3. Koden bliver lettere at læse og debugge
4. Det bliver nemmere at bygge videre med fetch og filtrering bagefter

**Step 1: Opret hjælpefunktionen**

```javascript
function formatMovieTitle(title, year) {
  return `${title} (${year})`;
}
```

**Step 2: Test funktionen direkte i konsollen**

```javascript
console.log(formatMovieTitle("Inception", 2010));
```

Du skal se: `Inception (2010)`

**Step 3: Brug funktionen på data fra dit array**

Brug funktionen direkte i `showMovie(movie)`, så den påvirker det brugeren ser på siden.

1. Find denne linje i din template:

```javascript
<h3>${movie.title}</h3>
```

2. Erstat den med:

```javascript
<h3>${formatMovieTitle(movie.title, movie.year)}</h3>
```

3. Fjern nu år-linjen under titlen, fordi år allerede er med i overskriften:

```javascript
<p>År: ${movie.year}</p>
```

Nu bruger du funktionen i den rigtige UI-kode - ikke kun i konsollen.

**Hvorfor er det smart her?**

Hvis designet ændrer sig til fx `Inception - 2010`, retter du kun i `formatMovieTitle(...)` i stedet for at lede efter alle steder titlen vises.

Når det virker, er du klar til næste trin.

### 0.3: Den vigtige ændring i dag

Her er den konkrete ændring fra DAG 2-koden:

**1. `showMovies()` får nu en parameter**

I DAG 2 brugte vi `showMovies()` uden parameter — den kendte altid `movies`-variablen direkte.

I DAG 3 sender vi en liste med som argument, fx `showMovies(movies)`.
Senere i dag bruger vi konkrete lister som `allMovies` og `filteredMovies`.

Det gør, at funktionen kan vise _hvilken som helst_ liste af film. Det er vigtigt senere, når vi filtrerer.

**Hvorfor er det her vigtigt? (meget konkret)**

Lige nu viser du hele `movies`-listen fra DAG 2.

Om lidt i DAG 3 får du to nye lister:

- `allMovies` (alle film fra fetch)
- `filteredMovies` (kun de film der matcher en valgt genre)

Hvis `showMovies()` kun virker med én fast/global liste, kan du ikke nemt skifte mellem dem.

Når `showMovies(movies)` tager en liste som input, kan du genbruge samme funktion til begge situationer:

```javascript
showMovies(allMovies); // vis alt
showMovies(filteredMovies); // vis kun filtreret
```

Det er derfor ændringen er vigtig: den gør din kode fleksibel og klar til filtrering uden at du skal lave en ny visningsfunktion.

**Gør det her i din kode nu (trin-for-trin):**

1. Find funktionsheaderen og ret den fra:

```javascript
function showMovies() {
```

til:

```javascript
function showMovies(movies) {
```

2. Tjek at loopet bruger parameteren `movies` inde i funktionen:

```javascript
for (const movie of movies) {
  showMovie(movie);
}
```

Hvis din kode allerede ser sådan ud, skal du ikke ændre noget i dette trin.

3. Ret kaldet i toppen fra:

```javascript
showMovies();
```

til:

```javascript
showMovies(movies);
```

**Checkpoint: `movieList` forbliver global i denne øvelse**

I DAG 3 holder vi det simpelt og lader denne linje blive global:

```javascript
const movieList = document.querySelector("#movie-list");
```

Det betyder at både `showMovies(...)` og `showMovie(...)` kan bruge den direkte,
og vi slipper for at sende `movieList` rundt som parameter i denne omgang.

**Tjek:** Du skal kun have linjen én gang - lige under `const movies = [...]` og før første `showMovies(...)`-kald.

---

## Opgave 1: Fetch - Hent Rigtig Data

**Formål:** Brug rigtig data fra en ekstern URL - uden at ændre den overordnede funktionsstruktur.

### 1.0: Overgangen fra DAG 2 til DAG 3

Indtil nu har dine film ligget hardcoded i `const movies = [...]`.

Nu skifter vi kun **datakilden** - ikke hele arkitekturen:

- **Det bevarer vi:** `showMovies(...)`, `showMovie(...)`, template literal og rendering til DOM
- **Det ændrer vi:** data hentes med `fetch()` og gemmes i `allMovies`

Tænk på det som et "motor-skift":

- UI-delen er den samme
- data kommer nu udefra i stedet for at være skrevet i filen

Det gør koden mere realistisk og klar til filtrering senere i opgaven.

### 1.0.1: Hvorfor fetch? (og hvorfor det er professionelt)

I rigtige apps ligger data næsten aldrig hardcoded i JavaScript-filen.

I stedet hentes data fra en ekstern kilde (API/JSON), fordi:

1. Indhold kan opdateres uden at du skal ændre frontend-koden
2. Flere sider/klienter kan bruge samme datakilde
3. Backend og frontend får tydeligere rollefordeling
4. Setup'et ligner det, du møder i praktik og arbejde

Med andre ord: `fetch()` er broen mellem din UI og rigtig data.

### 1.1: Hvad er fetch?

`fetch()` henter data fra en URL - her bruger vi en ekstern JSON-fil.

**Tre trin:**

1. `fetch(url)` - bed om data
2. `.json()` - konvertér data til JavaScript
3. Brug dataen!

Det nye i denne opgave er selve datahentningen med `fetch()` og `.json()`. Resten af visningen genbruger du fra DAG 2.

### 1.2: Din Første Fetch

I stedet for at få hele løsningen på én gang, bygger du nu fetch-flowet trin for trin.

### 1.2.1: Opret URL, variabler og første funktionskald

Start med at opdatere toppen af din fil.

**Det skal du gøre:**

1. Behold `"use strict";`
2. Behold din `showMovies(...)` og `showMovie(...)` længere nede i filen
3. Slet hele den gamle hardcoded `const movies = [...]` liste
4. Opret i stedet `let allMovies = []`
5. Sørg for at `const movieList = document.querySelector("#movie-list")` kun står én gang
6. Tilføj `MOVIES_URL`
7. Tilføj kaldet `fetchMovies();`

**Hvorfor bruger vi `let allMovies = []`?**

Fordi variablen skal skifte værdi senere.

I starten er `allMovies` en tom liste:

```javascript
let allMovies = [];
```

Efter `fetch()` får den en ny værdi med rigtige film:

```javascript
allMovies = await response.json();
```

Hvis vi brugte `const`, måtte vi ikke tildele en ny værdi bagefter.

Toppen af filen skal nu se sådan ud:

```javascript
"use strict";

console.log("Movie App starter...");

const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];
const movieList = document.querySelector("#movie-list");

fetchMovies();
```

Hvis du kører koden allerede her, er det helt normalt at den endnu ikke virker færdigt - vi har kaldt `fetchMovies()`, men har ikke lavet funktionen endnu. Det gør vi i næste trin.

**Hvorfor?**

- `MOVIES_URL` gemmer adressen til dataen
- `allMovies` skal senere holde alle filmene
- `fetchMovies()` beskriver tydeligt hvad funktionen gør: den henter film

### 1.2.2: Opret selve `fetchMovies()` funktionen

Tilføj nu funktionen under linjen med `fetchMovies();`:

```javascript
async function fetchMovies() {
  console.log("Henter film data...");
}
```

Kør siden og tjek at du ser loggen i konsollen.

### 1.2.3: Hent data med `fetch()`

Udvid funktionen til dette:

```javascript
async function fetchMovies() {
  console.log("Henter film data...");

  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();
}
```

Nu henter du data og gemmer det i `allMovies`.

**Hvad sker der helt præcist her?**

1. `fetch(MOVIES_URL)` sender en forespørgsel til URL'en
2. Svaret gemmes i variablen `response`
3. `response.json()` oversætter JSON-svaret til JavaScript-data
4. Den færdige liste gemmes i `allMovies`

Der er altså to ventetrin:

- først venter du på selve svaret fra serveren
- derefter venter du på at JSON bliver lavet om til JavaScript

Det er derfor vi bruger `await` to gange.

### 1.2.4: Tjek at data faktisk er kommet ind

Tilføj et par logs i funktionen:

```javascript
async function fetchMovies() {
  console.log("Henter film data...");

  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  console.log("Hentet", allMovies.length, "film!");
  console.log("Første film:", allMovies[0]);
  console.log("Alle film:", allMovies);
}
```

Hvis du ser antal film, første film og hele arrayet i konsollen, virker fetch-delen.

### 1.2.5: Vis filmene med dine eksisterende funktioner

Nu skal du bare koble de hentede data sammen med de funktioner du allerede har.

Tilføj denne linje nederst i `fetchMovies()`:

```javascript
showMovies(allMovies);
```

Så funktionen ser sådan ud:

```javascript
async function fetchMovies() {
  console.log("Henter film data...");

  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  console.log("Hentet", allMovies.length, "film!");
  console.log("Første film:", allMovies[0]);
  console.log("Alle film:", allMovies);

  showMovies(allMovies);
}
```

Du genbruger altså dine eksisterende `showMovies(...)` og `showMovie(...)` funktioner fra før.

### 1.2.6: Samlet version

Når du har bygget det trin for trin, kan du bruge den samlede version her som støtte, hvis du har brug for det.

<details>
<summary><strong>Vis samlet løsning for 1.2</strong></summary>

```javascript
"use strict";

const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];
const movieList = document.querySelector("#movie-list");

fetchMovies();

async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  showMovies(allMovies);
}

function showMovies(movies) {
  movieList.innerHTML = "";

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
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
```

</details>

> **Progressions-tjek:**
>
> - Hvilke funktioner er de samme som i DAG 2?
> - Hvilke linjer er nye pga. `fetch()`?

**Test det!** Du skulle nu se rigtige film med billeder!

### 1.3: Forstå koden

**`async` og `await`:**

```javascript
async function fetchMovies() {
  const response = await fetch(url); // Vent på svar
  const data = await response.json(); // Vent på konvertering
}
```

- `async` betyder "denne funktion venter på ting"
- `await` betyder "vent her indtil det er færdigt"
- Uden `await` ville koden fortsætte før data er hentet!

**Vigtigt:**

- `fetch()` returnerer et "promise" (løfte om data)
- `await` venter på at løftet opfyldes
- `async` skal være på funktionen der bruger `await`

---

## Opgave 2: Forberedelse Til Genre-filtrering

**Formål:** Lær `Array.filter()`, så du er klar til at filtrere film på genre.

Nu har du hentet alle filmene med `fetch()`. Næste skridt er, at brugeren selv skal kunne vælge en genre og kun se de film der passer.

Før vi bygger selve genre-filteret, træner vi først den vigtigste teknik bagved: `Array.filter()`.

Tænk på det sådan her:

1. Du har allerede **alle film** i `allMovies`
2. Nu skal du lære at lave en **ny liste med nogle af filmene**
3. Bagefter bruger vi præcis den idé til at vise fx kun `Action`, `Drama` eller `Sci-Fi`

Så Opgave 2 er med vilje en lille mellemstation: først forstå filter-logikken, derefter bruge den til genre-filtrering i Opgave 3.

### 2.1: Forstå filter

`.filter()` går gennem et array og beholder kun de elementer der matcher en betingelse.

**Simpelt eksempel:**

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Behold kun tal over 5
const bigNumbers = numbers.filter(function (number) {
  return number > 5;
});

console.log(bigNumbers); // [6, 7, 8, 9, 10]
```

**Test det selv i `app.js`:**

Prøv at indsætte eksemplet helt nederst i din `app.js` fil midlertidigt. Fjern det igen, når du har testet og forstået.

Genindlæs siden i browseren og tjek derefter konsollen.

Du skulle gerne se:

```javascript
[6, 7, 8, 9, 10];
```

**Hvad sker der?**

- Filter går gennem hvert tal
- Funktionen checker: er tallet > 5?
- Hvis `true` → behold det
- Hvis `false` → drop det

### 2.2: Filter med film

Nu flytter vi filter-tanken over på dine filmdata.

Målet er stadig det samme: behold nogle elementer, og fjern resten.

Forskellen er bare, at vi nu filtrerer filmobjekter i stedet for tal.

Koden herunder er først bare et eksempel, så du kan se hvordan filter-logikken ser ud med film:

```javascript
// Behold kun film fra 2010 eller senere
const newMovies = allMovies.filter(function (movie) {
  return movie.year >= 2010;
});

console.log("Nye film:", newMovies);
```

**Test det i `fetchMovies()` og tjek svaret i konsollen:**

Tilføj dette EFTER du har hentet data:

```javascript
async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  // TEST FILTER
  console.log("Alle film:", allMovies.length);

  const newMovies = allMovies.filter(function (movie) {
    return movie.year >= 2010;
  });

  console.log("Film fra 2010+:", newMovies.length);
  console.log(newMovies);

  showMovies(allMovies);
}
```

Genindlæs siden og åbn konsollen.

Du skal nu kontrollere, at du kan se:

1. hvor mange film der er i `allMovies`
2. hvor mange film der er fra 2010 eller senere
3. et array med de film der matcher filteret

Det er den samme mekanik vi om lidt bruger til genre:

- i eksemplet ovenfor spørger vi: `er movie.year >= 2010?`
- i næste opgave spørger vi i stedet: `indeholder movie.genre den valgte genre?`

### 2.3: Træn genre-filter uden dropdown først

Før du bygger den rigtige løsning, tager vi en ekstra træningsrunde.

Her vælger brugeren ikke genre endnu. I stedet vælger **du selv** en genre direkte i koden, så du kan øve filter-logikken helt isoleret.

Det gør Opgave 3 lettere, fordi du først træner selve tankegangen:

1. vælg en genre
2. filtrér filmene
3. tjek resultatet i konsollen

Prøv dette inde i `fetchMovies()` efter du har hentet data:

```javascript
async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  const selectedGenre = "Action";

  const filteredMovies = allMovies.filter(function (movie) {
    return movie.genre.includes(selectedGenre);
  });

  console.log("Valgt genre:", selectedGenre);
  console.log("Film i genren:", filteredMovies.length);
  console.log(filteredMovies);

  showMovies(allMovies);
}
```

Genindlæs siden og tjek svaret i konsollen.

Du skal nu kontrollere, at du kan se:

1. hvilken genre du filtrerer på
2. hvor mange film der matcher den genre
3. arrayet med de film der passer til genren

Prøv derefter at skifte `"Action"` til fx `"Drama"`, `"Sci-Fi"` eller `"Adventure"` og se hvordan resultatet ændrer sig.

Nu har du faktisk allerede lavet selve filter-logikken til genre.

I Opgave 3 er forskellen bare, at genren ikke længere er hardcoded i JavaScript. Den kommer i stedet fra brugerens valg i dropdownen.

### 2.4: Ryd op før du går videre til Opgave 3

Ja, før du starter på den rigtige løsning, skal du lige nulstille din kode igen.

Ellers risikerer du at have midlertidig testkode liggende, som gør Opgave 3 mere forvirrende.

**Fjern derfor dette fra `fetchMovies()`:**

1. midlertidige `console.log(...)` tests fra 2.2 og 2.3
2. `const newMovies = ...` fra årstals-filteret
3. `const selectedGenre = "Action"` fra den hardcoded genre-test
4. `const filteredMovies = ...` fra træningsrunden i 2.3

Når du er færdig med at rydde op, skal `fetchMovies()` igen være helt enkel og se sådan ud:

```javascript
async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  showMovies(allMovies);
}
```

Det er din rene baseline før Opgave 3.

Så starter du med en frisk version, hvor du kun bygger de nye genre-filter trin ovenpå.

---

## Opgave 3: Lav Dit Første Genre-filter

**Formål:** Filtrer film på valgt genre med en dropdown.

Nu bruger du `filter()` til noget der ligner en rigtig app.

Brugeren vælger en genre i en dropdown, og din kode skal derefter:

1. læse den valgte genre
2. filtrere `allMovies`
3. vise den nye filtrerede liste med `showMovies(...)`

Det er altså ikke en helt ny tankegang i Opgave 3. Det er bare Opgave 2 anvendt på et mere realistisk problem.

I 2.3 valgte du selv genren direkte i JavaScript.

Nu flytter vi det valg over til brugerfladen, så brugeren selv kan vælge genre i en dropdown.

### 3.1: Tilføj Genre-felt I HTML

Opdatér `index.html` - tilføj dette EFTER header:

```html
<section class="controls">
  <label for="genre-select">Genre</label>
  <select id="genre-select">
    <option value="all">Alle genrer</option>
  </select>
  <p id="movie-count"></p>
</section>
```

Det giver os to nye elementer i HTML:

1. en dropdown med id `genre-select`
2. et felt til antal film med id `movie-count`

### 3.2: Gør klar i JavaScript

Før vi bygger hele løsningen, tager vi det i små trin.

Målet er:

1. at finde dropdownen i JavaScript
2. at fylde den med genrer fra dataen
3. at reagere når brugeren vælger en genre
4. at filtrere filmene og vise resultatet

### 3.2.1: Gem dropdownen i en variabel

Tilføj denne linje sammen med dine andre DOM-variabler i toppen af filen:

```javascript
const genreSelect = document.querySelector("#genre-select");
```

Toppen af filen skal nu ligne dette:

```javascript
"use strict";

const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];
const movieList = document.querySelector("#movie-list");
const genreSelect = document.querySelector("#genre-select");

fetchMovies();
```

### 3.2.2: Fyld dropdownen med genrer

Nu laver du funktionen `populateGenreSelect()`.

Det er helt ok, hvis du ikke forstår hver eneste linje i den her funktion første gang du ser den.

Det vigtigste er, at du forstår idéen:

1. vi går gennem alle film
2. vi samler deres genrer
3. vi undgår dubletter
4. vi viser genrerne i dropdownen

Den skal:

1. gennemgå alle film
2. samle alle genrer
3. undgå dubletter
4. indsætte genrerne som `<option>` i dropdownen

Vi holder den bevidst så enkel som muligt her.

Tilføj denne funktion under `fetchMovies()`:

```javascript
function populateGenreSelect() {
  const genres = new Set();

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  for (const genre of genres) {
    genreSelect.insertAdjacentHTML(
      "beforeend",
      `<option value="${genre}">${genre}</option>`,
    );
  }
}
```

**Kort forklaring:**

- `new Set()` er en samling der automatisk undgår dubletter
- hver gang vi finder en genre, lægger vi den i `genres`
- bagefter laver vi en `<option>` i dropdownen for hver genre

Du behøver ikke kunne genfortælle hele funktionen perfekt endnu. Det vigtigste er at se mønsteret: læs data -> saml værdier -> vis dem i HTML.

### 3.2.3: Kald `populateGenreSelect()` når filmene er hentet

Når `allMovies` er fyldt med data, skal dropdownen også fyldes.

Opdatér `fetchMovies()` til dette:

```javascript
async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  populateGenreSelect();
  showMovies(allMovies);
}
```

Test det nu.

Genindlæs siden og tjek dropdownen i browseren.

Du skulle gerne se, at den nu automatisk bliver fyldt med genrer fra dataen.

### 3.2.4: Reagér når brugeren vælger en genre

Nu skal din kode lytte efter ændringer i dropdownen.

Tilføj denne linje nederst i `fetchMovies()`:

```javascript
genreSelect.addEventListener("change", applyGenreFilter);
```

Så `fetchMovies()` nu ser sådan ud:

```javascript
async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  populateGenreSelect();
  showMovies(allMovies);

  genreSelect.addEventListener("change", applyGenreFilter);
}
```

**Vigtigt:**

`applyGenreFilter` er ikke lavet endnu på dette trin.

Det betyder, at hvis du allerede nu prøver at ændre genre i dropdownen, vil koden fejle. Det er helt forventet.

Fejlen forsvinder i næste trin, hvor du opretter selve `applyGenreFilter()`.

### 3.2.5: Lav selve filter-funktionen

Nu kommer selve logikken, som matcher det du allerede trænede i 2.3.

Vi bygger den i små trin.

#### 3.2.5.1: Start med en tom funktion

Tilføj først rammen:

```javascript
function applyGenreFilter() {
  const selectedGenre = genreSelect.value;
}
```

Tilføj en midlertidig testlinje, så du kan se at funktionen bliver kaldt:

```javascript
function applyGenreFilter() {
  const selectedGenre = genreSelect.value;

  console.log("Valgt genre:", selectedGenre);
}
```

Test ved at ændre genre i dropdownen og tjek konsollen.

#### 3.2.5.2: Håndtér "Alle genrer"

Når brugeren vælger `all`, skal alle film vises igen:

```javascript
function applyGenreFilter() {
  const selectedGenre = genreSelect.value;

  if (selectedGenre === "all") {
    showMovies(allMovies);
    return;
  }
}
```

#### 3.2.5.3: Filtrér resten

Nu tilføjer du den sidste del, som filtrerer på den valgte genre:

```javascript
function applyGenreFilter() {
  const selectedGenre = genreSelect.value;

  if (selectedGenre === "all") {
    showMovies(allMovies);
    return;
  }

  const filteredMovies = allMovies.filter(function (movie) {
    return movie.genre.includes(selectedGenre);
  });

  showMovies(filteredMovies);
}
```

Når alt virker, kan du fjerne den midlertidige `console.log(...)` testlinje.

Det vigtigste her er:

1. læs den valgte genre fra dropdownen
2. hvis værdien er `"all"`, så vis alle film
3. ellers filtrér `allMovies`
4. vis det filtrerede resultat

### 3.2.6: Samlet JavaScript-løsning

Når du har bygget det trin for trin, kan du sammenligne med denne samlede version:

```javascript
const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];
const movieList = document.querySelector("#movie-list");
const genreSelect = document.querySelector("#genre-select");

fetchMovies();

async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  populateGenreSelect();
  showMovies(allMovies);

  genreSelect.addEventListener("change", applyGenreFilter);
}

function populateGenreSelect() {
  const genres = new Set();

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  for (const genre of genres) {
    genreSelect.insertAdjacentHTML(
      "beforeend",
      `<option value="${genre}">${genre}</option>`,
    );
  }
}

function applyGenreFilter() {
  const selectedGenre = genreSelect.value;

  if (selectedGenre === "all") {
    showMovies(allMovies);
    return;
  }

  const filteredMovies = allMovies.filter(function (movie) {
    return movie.genre.includes(selectedGenre);
  });

  showMovies(filteredMovies);
}
```

**Test det!**

1. Siden loader → vis alle film
2. Tjek at dropdownen automatisk er fyldt med genrer
3. Vælg fx Action i dropdown → vis kun Action film
4. Vælg Alle genrer → vis alle igen

### 3.2.7: Ekstra trin - sortér genrer alfabetisk

Hvis du vil gøre dropdownen lidt pænere, kan du sortere genrerne alfabetisk.

Det er en god forbedring, men det er ikke nødvendigt for at forstå genre-filteret.

Derfor ligger det som et ekstra trin og ikke som en del af grundløsningen.

Du kan ændre denne del:

```javascript
for (const genre of genres) {
  genreSelect.insertAdjacentHTML(
    "beforeend",
    `<option value="${genre}">${genre}</option>`,
  );
}
```

til dette:

```javascript
const sortedGenres = [...genres].sort((a, b) => a.localeCompare(b));

for (const genre of sortedGenres) {
  genreSelect.insertAdjacentHTML(
    "beforeend",
    `<option value="${genre}">${genre}</option>`,
  );
}
```

Det nye her er:

1. `[...]` laver dit `Set` om til et array
2. `sort()` sorterer genrerne alfabetisk
3. bagefter looper du over den sorterede liste i stedet for den usorterede

### 3.3: Tjekliste

- Genre-dropdown indeholder automatisk værdier fra data
- Film-listen opdaterer når genre ændres
- "Alle genrer" viser alle film igen

---

## Udfordringer

### Udfordring 1: Tilføj søgning i title

Tilføj et input-felt og filtrér på title samtidig med genre:

```javascript
function applyFilters() {
  let selectedGenre = document.querySelector("#genre-select").value;
  let searchTerm = document.querySelector("#search-input").value.toLowerCase();

  let filteredMovies = allMovies.filter(function (movie) {
    let matchesGenre =
      selectedGenre === "all" || movie.genre.includes(selectedGenre);
    let matchesTitle = movie.title.toLowerCase().includes(searchTerm);
    return matchesGenre && matchesTitle;
  });

  showMovies(filteredMovies);
}
```

### Udfordring 2: Vis hvor mange film

Tilføj en counter der viser antal film:

**HTML:**

```html
<section class="controls">
  <label for="genre-select">Genre</label>
  <select id="genre-select">
    <option value="all">Alle genrer</option>
  </select>
  <p id="movie-count" style="color: white; margin: 0;"></p>
</section>
```

**JavaScript - i `showMovies()` funktionen:**

```javascript
function showMovies(movies) {
  // ... existing code ...

  // Opdater counter
  let counter = document.querySelector("#movie-count");
  counter.textContent = `Viser ${movies.length} film`;
}
```

### Udfordring 3: Gør dropdown dynamisk med antal

Vis antal film pr. genre i dropdown-teksten:

```javascript
let counts = {};
for (let movie of allMovies) {
  for (let genre of movie.genre) {
    counts[genre] = (counts[genre] || 0) + 1;
  }
}

for (let genre of sortedGenres) {
  let label = `${genre} (${counts[genre]})`;
  genreSelect.insertAdjacentHTML(
    "beforeend",
    `<option value="${genre}">${label}</option>`,
  );
}
```

---

## Hvad har du lært i dag?

**fetch()** - hente data fra URL  
 **async/await** - vente på asynkrone operationer  
 **JSON** - data format fra API'er  
 **Array.filter()** - udvælge elementer  
 **.includes()** - check om noget findes i array  
 **Event listeners** - reagere på ændringer i input/select  
 **Global variables** - data tilgængelig overalt

---

## Forberedelse til næste gang

Til næste gang skal vi tilføje:

- Søgefelt (find film ved titel)
- Sortering (titel, år og rating)
- Dialog (vis detaljer når man klikker)
- Deploy til GitHub Pages (gør din app offentlig!)

Hold det simpelt! Vi bygger videre på det du har nu.

Vi ses!

---

## Debugging Tips

**Hvis filter ikke virker:**

1. **Tjek console** - er der fejl?
2. **Log filteret:**

```javascript
let actionMovies = allMovies.filter(function (movie) {
  console.log("Checker:", movie.title, "Genre:", movie.genre);
  return movie.genre.includes("Action");
});
console.log("Resultat:", actionMovies);
```

3. **Tjek genre struktur:**

```javascript
console.log("Første film genre:", allMovies[0].genre);
console.log("Er det et array?", Array.isArray(allMovies[0].genre));
```

4. **Tjek stavning** - er det `"Action"` eller `"action"`?

**Typiske fejl:**

```javascript
//  Forkert - genre er et array!
return movie.genre === "Action";

//  Rigtigt - brug includes
return movie.genre.includes("Action");
```

```javascript
//  Forkert - glemmer return
allMovies.filter(function (movie) {
  movie.genre.includes("Action"); // Mangler return!
});

//  Rigtigt
allMovies.filter(function (movie) {
  return movie.genre.includes("Action");
});
```
