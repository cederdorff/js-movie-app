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

Start med at opdatere toppen af din fil til dette:

```javascript
"use strict";

console.log("Movie App starter...");

const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];
const movieList = document.querySelector("#movie-list");

fetchMovies();
```

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

### 1.2.4: Tjek at data faktisk er kommet ind

Tilføj et par logs i funktionen:

```javascript
async function fetchMovies() {
  console.log("Henter film data...");

  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  console.log("Hentet", allMovies.length, "film!");
  console.log("Første film:", allMovies[0]);
}
```

Hvis du ser antal film og første film i konsollen, virker fetch-delen.

### 1.2.5: Vis filmene med dine eksisterende funktioner

Tilføj nu sidste linje i funktionen og sørg for at resten af filen ser sådan ud:

```javascript
async function fetchMovies() {
  console.log("Henter film data...");

  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  console.log("Hentet", allMovies.length, "film!");
  console.log("Første film:", allMovies[0]);

  showMovies(allMovies);
}

function showMovies(movies) {
  console.log("Viser", movies.length, "film...");

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

### 1.2.6: Samlet version

Når du har bygget det trin for trin, kan din samlede kode se sådan ud:

```javascript
"use strict";

console.log("Movie App starter...");

const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];
const movieList = document.querySelector("#movie-list");

fetchMovies();

async function fetchMovies() {
  console.log("Henter film data...");

  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  console.log("Hentet", allMovies.length, "film!");
  console.log("Første film:", allMovies[0]);

  showMovies(allMovies);
}

function showMovies(movies) {
  console.log("Viser", movies.length, "film...");

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

## Opgave 2: Hvad Er Array.filter()

**Formål:** Lær at udvælge specifikke elementer fra et array.

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

**Hvad sker der?**

- Filter går gennem hvert tal
- Funktionen checker: er tallet > 5?
- Hvis `true` → behold det
- Hvis `false` → drop det

### 2.2: Filter med film

```javascript
// Behold kun film fra 2010 eller senere
const newMovies = allMovies.filter(function (movie) {
  return movie.year >= 2010;
});

console.log("Nye film:", newMovies);
```

**Test det i din Console:**

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

---

## Opgave 3: Lav Dit Første Genre-filter

**Formål:** Filtrer film på valgt genre med en dropdown.

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

### 3.2: Opdatér JavaScript

```javascript
const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];
const movieList = document.querySelector("#movie-list");

fetchMovies();

async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  populateGenreSelect();
  showMovies(allMovies);

  document
    .querySelector("#genre-select")
    .addEventListener("change", applyGenreFilter);
}

function populateGenreSelect() {
  const genreSelect = document.querySelector("#genre-select");
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

function applyGenreFilter() {
  const selectedGenre = document.querySelector("#genre-select").value;

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
2. Vælg fx Action i dropdown → vis kun Action film
3. Vælg Alle genrer → vis alle igen

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
