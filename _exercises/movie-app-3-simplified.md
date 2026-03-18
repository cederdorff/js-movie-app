# DAG 3 - Fetch, JSON & Én Simpel Filter

## 🎯 Formål

I dag skal du lære at hente rigtig data og tilføje **én enkel** filter-knap.

**Du lærer:**

- Hvordan henter man data fra en URL? (fetch)
- Hvad er JSON?
- Hvordan filtrerer man et array? (`.filter()`)
- Hvordan laver man én genre-knap?

**Vi lærer IKKE (endnu):**

- ❌ Søgefelter
- ❌ Dropdowns med mange valg
- ❌ Range filters (år/rating)
- ❌ Kombinerede filtre
- ❌ Sortering

**Hold det simpelt!** Én ting ad gangen.

---

## Opgave 0: Start hvor vi slap 🎬

### Step 1: Åbn dit projekt fra sidst

Åbn din `movie-app` fra DAG 2.

**Din `app.js` skulle ligne noget i stil med:**

```javascript
"use strict";

let movies = [
  { title: "Inception", year: 2010, rating: 8.8 },
  { title: "The Matrix", year: 1999, rating: 8.7 }
  // ... flere
];

showMovies();

function showMovies() {
  let movieList = document.querySelector("#movie-list");
  movieList.innerHTML = "";

  for (let movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  // ... laver HTML og viser det
}
```

**Hvis ikke - kopier fra DAG 2 guiden først!**

---

## Opgave 1: Fetch - Hent Rigtig Data! 🌐

**Formål:** Erstat hardcoded data med rigtig data fra internettet.

### 1.1: Hvad er fetch?

`fetch()` henter data fra en URL - ligesom når din browser loader et billede eller en hjemmeside.

**Tre trin:**

1. `fetch(url)` - bed om data
2. `.json()` - konvertér data til JavaScript
3. Brug dataen!

### 1.2: Din første fetch

**Erstat `app.js` med:**

```javascript
"use strict";

console.log("🎬 Movie App starter...");

// Global variabel til at holde alle film
let allMovies = [];

// Start - hent data
start();

async function start() {
  console.log("📡 Henter film data...");

  // Step 1: Hent data fra URL
  let response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");

  // Step 2: Konvertér til JavaScript
  allMovies = await response.json();

  console.log("✅ Hentet", allMovies.length, "film!");
  console.log("Første film:", allMovies[0]);

  // Step 3: Vis filmene
  showMovies(allMovies);
}

function showMovies(movies) {
  console.log("Viser", movies.length, "film...");

  let movieList = document.querySelector("#movie-list");
  movieList.innerHTML = "";

  for (let movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  let movieList = document.querySelector("#movie-list");

  let html = `
    <div class="movie-card">
      <img src="${movie.image}" alt="${movie.title}" style="width: 100%; border-radius: 10px; margin-bottom: 0.5rem;">
      <h3>${movie.title}</h3>
      <p>📅 ${movie.year}</p>
      <p>⭐ ${movie.rating}</p>
    </div>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
```

**Test det!** Du skulle nu se rigtige film med billeder!

### 1.3: Forstå koden

**`async` og `await`:**

```javascript
async function start() {
  let response = await fetch(url); // Vent på svar
  let data = await response.json(); // Vent på konvertering
}
```

- `async` betyder "denne funktion venter på ting"
- `await` betyder "vent her indtil det er færdigt"
- Uden `await` ville koden fortsætte før data er hentet!

**💡 Vigtigt:**

- `fetch()` returnerer et "promise" (løfte om data)
- `await` venter på at løftet opfyldes
- `async` skal være på funktionen der bruger `await`

---

## Opgave 2: Hvad er Array.filter()? 🔍

**Formål:** Lær at udvælge specifikke elementer fra et array.

### 2.1: Forstå filter

`.filter()` går gennem et array og beholder kun de elementer der matcher en betingelse.

**Simpelt eksempel:**

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Behold kun tal over 5
let bigNumbers = numbers.filter(function (number) {
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
let newMovies = allMovies.filter(function (movie) {
  return movie.year >= 2010;
});

console.log("Nye film:", newMovies);
```

**Test det i din Console:**

Tilføj dette EFTER du har hentet data:

```javascript
async function start() {
  let response = await fetch("...");
  allMovies = await response.json();

  // TEST FILTER
  console.log("Alle film:", allMovies.length);

  let newMovies = allMovies.filter(function (movie) {
    return movie.year >= 2010;
  });

  console.log("Film fra 2010+:", newMovies.length);
  console.log(newMovies);

  showMovies(allMovies);
}
```

---

## Opgave 3: Lav Din Første Filter-knap! 🎯

**Formål:** Lav en knap der viser kun Action-film.

### 3.1: Tilføj knappen i HTML

Opdatér `index.html` - tilføj dette EFTER header:

```html
<header>
  <h1>🎬 Min Film-app</h1>
</header>

<!-- NYT: Filter knapper -->
<section class="filter-section">
  <button id="show-all">Vis alle</button>
  <button id="show-action">Vis Action</button>
</section>

<main>
  <div id="movie-list">
    <!-- Film vises her -->
  </div>
</main>
```

### 3.2: Tilføj CSS til knapperne

Tilføj i `app.css`:

```css
.filter-section {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.filter-section button {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-section button:hover {
  background: #764ba2;
  transform: translateY(-2px);
}

.filter-section button:active {
  transform: translateY(0);
}
```

### 3.3: Tilføj JavaScript logik

**Opdatér `app.js`:**

```javascript
"use strict";

console.log("🎬 Movie App starter...");

let allMovies = [];

// Start - hent data
start();

async function start() {
  console.log("📡 Henter film data...");

  let response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  allMovies = await response.json();

  console.log("✅ Hentet", allMovies.length, "film!");

  // Vis alle film først
  showMovies(allMovies);

  // Sæt event listeners på knapperne
  setupButtons();
}

function setupButtons() {
  // Find knapperne
  let showAllBtn = document.querySelector("#show-all");
  let showActionBtn = document.querySelector("#show-action");

  // Når "Vis alle" klikkes
  showAllBtn.addEventListener("click", function () {
    console.log("Viser alle film");
    showMovies(allMovies);
  });

  // Når "Vis Action" klikkes
  showActionBtn.addEventListener("click", function () {
    console.log("Filtrerer til Action film...");

    // Filtrer: behold kun Action film
    let actionMovies = allMovies.filter(function (movie) {
      return movie.genre.includes("Action");
    });

    console.log("Fandt", actionMovies.length, "Action film");
    showMovies(actionMovies);
  });
}

function showMovies(movies) {
  console.log("Viser", movies.length, "film...");

  let movieList = document.querySelector("#movie-list");
  movieList.innerHTML = "";

  // Hvis ingen film matcher
  if (movies.length === 0) {
    movieList.innerHTML = '<p style="text-align: center; color: #aaa;">Ingen film matchede filteret 😢</p>';
    return;
  }

  for (let movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  let movieList = document.querySelector("#movie-list");

  let html = `
    <div class="movie-card">
      <img src="${movie.image}" alt="${movie.title}" style="width: 100%; border-radius: 10px; margin-bottom: 0.5rem;">
      <h3>${movie.title}</h3>
      <p>📅 ${movie.year}</p>
      <p>⭐ ${movie.rating}</p>
      <p style="font-size: 0.85rem; color: #999;">${movie.genre.join(", ")}</p>
    </div>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
```

**Test det!**

1. Siden loader → vis alle film
2. Klik "Vis Action" → vis kun Action film
3. Klik "Vis alle" → vis alle igen

### 3.4: Forstå filteret

```javascript
let actionMovies = allMovies.filter(function (movie) {
  return movie.genre.includes("Action");
});
```

**Hvad sker der?**

- Filter går gennem hver film
- Checker om `genre` arrayet indeholder "Action"
- `movie.genre` er `["Action", "Sci-Fi"]`
- `.includes("Action")` returnerer `true` hvis "Action" findes
- Hvis `true` → filmen beholdes

**💡 Vigtigt:**

- `movie.genre` er et ARRAY: `["Action", "Sci-Fi"]`
- `.includes()` checker om noget findes i et array
- Derfor: `movie.genre.includes("Action")`

---

## 🎯 Udfordringer

### Udfordring 1: Tilføj flere genre-knapper

Tilføj knapper for:

- Drama
- Comedy
- Sci-Fi

**HTML:**

```html
<button id="show-drama">Vis Drama</button>
<button id="show-comedy">Vis Comedy</button>
<button id="show-scifi">Vis Sci-Fi</button>
```

**JavaScript:**

```javascript
let showDramaBtn = document.querySelector("#show-drama");

showDramaBtn.addEventListener("click", function () {
  let dramaMovies = allMovies.filter(function (movie) {
    return movie.genre.includes("Drama");
  });
  showMovies(dramaMovies);
});
```

### Udfordring 2: Vis hvor mange film

Tilføj en counter der viser antal film:

**HTML:**

```html
<section class="filter-section">
  <button id="show-all">Vis alle</button>
  <button id="show-action">Vis Action</button>
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

### Udfordring 3: Active state på knap

Gør så den aktive knap får en anden farve:

**CSS:**

```css
.filter-section button.active {
  background: #28a745;
  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.4);
}
```

**JavaScript:**

```javascript
function setupButtons() {
  let showAllBtn = document.querySelector("#show-all");
  let showActionBtn = document.querySelector("#show-action");

  showAllBtn.addEventListener("click", function () {
    // Fjern active fra alle
    document.querySelectorAll(".filter-section button").forEach(btn => {
      btn.classList.remove("active");
    });

    // Tilføj active til denne
    showAllBtn.classList.add("active");

    showMovies(allMovies);
  });

  // ... samme for de andre knapper
}
```

---

## 📚 Hvad har du lært i dag?

✅ **fetch()** - hente data fra URL  
✅ **async/await** - vente på asynkrone operationer  
✅ **JSON** - data format fra API'er  
✅ **Array.filter()** - udvælge elementer  
✅ **.includes()** - check om noget findes i array  
✅ **Event listeners** - reagere på knap-klik  
✅ **Global variables** - data tilgængelig overalt

---

## 🏠 Forberedelse til næste gang

Til næste gang skal vi tilføje:

- Søgefelt (find film ved titel)
- Modal dialog (vis detaljer når man klikker)
- Deploy til GitHub Pages (gør din app offentlig!)

Hold det simpelt! Vi bygger videre på det du har nu.

Vi ses! 🚀

---

## 💡 Debugging Tips

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
// ❌ Forkert - genre er et array!
return movie.genre === "Action";

// ✅ Rigtigt - brug includes
return movie.genre.includes("Action");
```

```javascript
// ❌ Forkert - glemmer return
allMovies.filter(function (movie) {
  movie.genre.includes("Action"); // Mangler return!
});

// ✅ Rigtigt
allMovies.filter(function (movie) {
  return movie.genre.includes("Action");
});
```
