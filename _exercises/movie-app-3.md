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

---

## Opgave 0: Start Hvor Vi Slap

### Trin 1: Åbn dit projekt fra sidst

Åbn din `movie-app` fra DAG 2.

**Din `app.js` skulle ligne noget i stil med:**

```javascript
"use strict";

const movies = [
  { title: "Inception", year: 2010, rating: 8.8 },
  { title: "The Matrix", year: 1999, rating: 8.7 },
  // ... flere
];

showMovies();

function showMovies() {
  const movieList = document.querySelector("#movie-list");
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  // ... laver HTML og viser det
}
```

**Hvis ikke - kopier fra DAG 2 guiden først!**

---

## Opgave 1: Fetch - Hent Rigtig Data

**Formål:** Erstat hardcoded data med rigtig data fra en ekstern URL.

### 1.1: Hvad er fetch?

`fetch()` henter data fra en URL - her bruger vi en ekstern JSON-fil.

**Tre trin:**

1. `fetch(url)` - bed om data
2. `.json()` - konvertér data til JavaScript
3. Brug dataen!

### 1.2: Din Første Fetch

**Erstat `app.js` med:**

```javascript
"use strict";

console.log("Movie App starter...");

const MOVIES_URL = "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
// Global variabel til at holde alle film
let allMovies = [];

// Start - hent data
start();

async function start() {
  console.log("Henter film data...");

  // Trin 1: Hent data fra ekstern URL
  const response = await fetch(MOVIES_URL);

  // Trin 2: Konvertér til JavaScript
  allMovies = await response.json();

  console.log("Hentet", allMovies.length, "film!");
  console.log("Første film:", allMovies[0]);

  // Trin 3: Vis filmene
  showMovies(allMovies);
}

function showMovies(movies) {
  console.log("Viser", movies.length, "film...");

  const movieList = document.querySelector("#movie-list");
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const movieList = document.querySelector("#movie-list");

  const html = `
    <article class="movie-card">
      <img src="${movie.image}" alt="${movie.title}" style="width: 100%; border-radius: 10px;">
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

**Test det!** Du skulle nu se rigtige film med billeder!

### 1.3: Forstå koden

**`async` og `await`:**

```javascript
async function start() {
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
async function start() {
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
const MOVIES_URL = "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];

start();

async function start() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  populateGenreSelect();
  showMovies(allMovies);

  document.querySelector("#genre-select").addEventListener("change", applyGenreFilter);
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
    genreSelect.insertAdjacentHTML("beforeend", `<option value="${genre}">${genre}</option>`);
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
- Counter viser antal film korrekt

---

## Udfordringer

### Udfordring 1: Tilføj søgning i title

Tilføj et input-felt og filtrér på title samtidig med genre:

```javascript
function applyFilters() {
  let selectedGenre = document.querySelector("#genre-select").value;
  let searchTerm = document.querySelector("#search-input").value.toLowerCase();

  let filteredMovies = allMovies.filter(function (movie) {
    let matchesGenre = selectedGenre === "all" || movie.genre.includes(selectedGenre);
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
  genreSelect.insertAdjacentHTML("beforeend", `<option value="${genre}">${label}</option>`);
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
