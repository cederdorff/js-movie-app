# Movie App - Session 3: Filtrering, søgning & sortering.

## Opgaver til tredje undervisningsgang

> **Vigtig:** Du bygger videre på dit projekt fra Session 2. Sørg for at din `loadMovies()` funktion virker og viser film data fra JSON.

> **Developer Tools:** Hold øje med Console-fanen mens du arbejder - vi bruger `console.log()` til at forstå hvad der sker!

---

## Del 0: Forbered dit projekt til interaktivitet 🎯

**Formål:** Sørg for dit projekt er klar til at tilføje søgning, filtrering og sortering.

### Trin 0: Tjek dit nuværende setup

**0a. Verificer at dit projekt virker**

1. **Åbn dit projekt** fra Session 2 i VS Code
2. **Start Live Server** (højreklik på `index.html`)
3. **Tjek i browseren**:
   - Ser du film cards?
   - Kommer data fra JSON? (tjek Console for success beskeder)
   - Virker CSS styling korrekt?

**0b. Forbered global `movie` storage**

Vi skal gemme alle movies i en global variabel så vi kan filtrere dem senere:

```javascript
// #0: Listen for page load
window.addEventListener("load", initApp);

let allMovies = []; // Global array to hold all movies

// #1: Initialize the app
function initApp() {
  console.log("initApp: app.js is running 🎉");
  getMovies(); // Fetch and display movies
}
```

**0c. Opdater din `getMovies` funktion (erstatter loadMovies)**

```javascript
// #2: Fetch movies from JSON and display them
async function getMovies() {
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  allMovies = await response.json();
  displayMovies(allMovies);
}

// #3: Render all movies in the grid
function displayMovies(movies) {
  document.querySelector("#movie-list").innerHTML = "";
  for (const movie of movies) {
    displayMovie(movie);
  }
}
```

```javascript
// #4: Render a single movie card
function displayMovie(movie) {
  const movieList = document.querySelector("#movie-list");
  movieList.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <article class="movie-card" tabindex="0">
      <img src="${movie.image}" alt="Poster of ${movie.title}" class="movie-poster" />
      <div class="movie-info">
        <h3>${movie.title} <span class="movie-year">(${movie.year})</span></h3>
        <p class="movie-genre">${movie.genre.join(", ")}</p>
        <p class="movie-rating">⭐ ${movie.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movie.director}</p>
      </div>
    </article>
  `
  );
}
```

#### ✅ Test det opdaterede setup!

1. **GEM dine ændringer** (`Ctrl+S` / `Cmd+S`)
2. **Refresh browseren**
3. **Åbn Console** og tjek at du ser:
   - "🌐 Henter alle movies fra JSON..."
   - "📊 JSON data modtaget: 17 movies"
4. **Alle film vises** som før

**💡 Hvorfor global storage?**

- Vi henter data ÉN gang fra JSON
- Vi gemmer det i `allMovies` array
- Vi kan så filtrere/sortere uden nye fetch calls!

### ✅ Komplet løsning til Del 0

Tjek disse filer igennem og sørg for at de matcher med din nuværende løsning.

**Komplet `app.js` fil efter Del 0:**

```javascript
// #0: Listen for page load
window.addEventListener("load", initApp);

let allMovies = []; // Global array to hold all movies

// #1: Initialize the app
function initApp() {
  console.log("initApp: app.js is running 🎉");
  getMovies(); // Fetch and display movies
  document.querySelector("#search-input").addEventListener("input", filterSortDisplayMovies);
  document.querySelector("#sort-select").addEventListener("change", filterSortDisplayMovies);
  document.querySelector("#genre-select").addEventListener("change", filterSortDisplayMovies);
}

// #2: Fetch movies from JSON and display them
async function getMovies() {
  console.log("🌐 Henter alle movies fra JSON...");

  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  allMovies = await response.json();

  console.log(`📊 JSON data modtaget: ${allMovies.length} movies`);
  displayMovies(allMovies);
}

// #3: Render all movies in the grid
function displayMovies(movies) {
  console.log(`🎬 Viser ${movies.length} movies`);

  document.querySelector("#movie-list").innerHTML = "";
  for (const movie of movies) {
    displayMovie(movie);
  }
}

// #4: Render a single movie card
function displayMovie(movie) {
  const movieList = document.querySelector("#movie-list");
  movieList.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <article class="movie-card" tabindex="0">
      <img src="${movie.image}" alt="Poster of ${movie.title}" class="movie-poster" />
      <div class="movie-info">
        <h3>${movie.title} <span class="movie-year">(${movie.year})</span></h3>
        <p class="movie-genre">${movie.genre.join(", ")}</p>
        <p class="movie-rating">⭐ ${movie.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movie.director}</p>
      </div>
    </article>
  `
  );
}
```

**Komplet `index.html` fil efter Del 0:**

```html
<!DOCTYPE html>
<html lang="da">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Movie App Session 3</title>
    <link rel="stylesheet" href="app.css" />
  </head>
  <body>
    <header>
      <h1>🎬 Movie Database</h1>
      <p>Søg, filtrer og sortér dine yndlingsfilm</p>
    </header>

    <main>
      <!-- Filter bar sektion (kommer i Del 1) -->
      <section class="filterbar">
        <h2>🔍 Søg og filtrer film</h2>
        <!-- Filter controls tilføjes senere -->
      </section>

      <!-- Movie grid -->
      <section id="movie-list" class="movie-grid">
        <!-- Movies indsættes her via JavaScript -->
      </section>
    </main>

    <script src="app.js"></script>
  </body>
</html>
```

#### ✅ Verificer din Del 0 løsning

1. Sørg for at du har sammen struktur i din HTML og JavaScript.
2. **Gem alt** og refresh browseren
3. **Tjek Console** - du skulle se:
   - "initApp: app.js is running 🎉"
   - "🌐 Henter alle movies fra JSON..."
   - "📊 JSON data modtaget: 17 movies"
   - "🎬 Viser 17 movies"
4. **Alle 17 film** vises i grid layout

**🎯 Nu er du klar til Del 1!** Du har:

- ✅ Global `allMovies` array
- ✅ Moderne async/await data hentning
- ✅ Clean HTML struktur med filterbar
- ✅ Basis CSS styling
- ✅ for...of loops til array iteration
- ✅ Template literals med ``
- ✅ Event listeners sat op direkte i `initApp()` 

**💡 Simplificeret approach**: Vi sætter alle event listeners op direkte i `initApp()` . Dette gør koden mere simpel og lige til.

---

## Del 1: Tekstsøgning med Filter og Includes 🔍

**Formål:** Lær at søge i movie titler med `.filter()`, `.includes()` og `.toLowerCase()`.

### Trin 1: Forstå hvordan søgning virker

**1a. Tilføj filter bar til din HTML**

Erstat din eksisterende HTML med denne struktur i `index.html`:

```html
<main>
  <!-- Filter Bar -->
  <section class="filterbar">
    <input id="search-input" type="search" placeholder="Søg film..." />
    <select id="genre-select">
      <option value="all">Alle genrer</option>
      <!-- Genre options will be populated from JS -->
    </select>
    <select id="sort-select">
      <option value="title">Sortér: Titel (A-Å)</option>
      <option value="year">Sortér: År (nyeste)</option>
    </select>
  </section>
  <!-- Movie List -->
  <section id="movie-list">
    <!-- Movie items will be displayed here - from JS -->
  </section>
</main>
```

- Stop lige op og overvej, hvad du har tilføjet til HTML'en.
- Kontroller dine ændringer i browseren.

**1b. Forstå søge-logikken**
Søgning virker ved at:

1. **Konvertere søgeterm til lowercase** - så "DARK", "Dark" og "dark" alle matcher
2. **Filtrere movies** med `.filter()` metoden
3. **Tjekke om titel indeholder søgetermen** med `.includes()`

**💡 Eksempel på søge-logik:**

```javascript
// Hvis bruger søger "dark":
const searchTerm = "dark".toLowerCase(); // "dark"
const movieTitle = "The Dark Knight".toLowerCase(); // "the dark knight"
const matches = movieTitle.includes(searchTerm); // true
```

**💡 Hvorfor .toLowerCase()?**

- Så "DARK", "Dark" og "dark" alle matcher
- Case-insensitive søgning er brugervenligt!

#### ✅ Test søge-logikken!

1. **GEM filen** og refresh browseren
2. **Åbn Console** og se outputtet
3. **Forstå hvad der sker**:
   - "Barbie" → "barbie" → includes "dark"? `false`
   - "The Dark Knight" → "the dark knight" → includes "dark"? `true`
   - Kun "The Dark Knight" er i filtrerede resultater!

### Trin 2: Implementer søgning med event listeners

**2a. Tilføj event listeners til `initApp`**

Opdater din `initApp` funktion til at lytte på ændringer:

```javascript
// #1: Initialize the app
function initApp() {
  console.log("initApp: app.js is running 🎉");
  getMovies(); // Fetch and display movies
  document.querySelector("#search-input").addEventListener("input", filterSortDisplayMovies);
  document.querySelector("#sort-select").addEventListener("change", filterSortDisplayMovies);
  document.querySelector("#genre-select").addEventListener("change", filterSortDisplayMovies);
}
```

- Hvad er det nye, du har tilføjet, og hvad tror du, at det gør?
  - Hint: det handler om `.addEventListener(...)`

**2b. Opret en samlet filter funktion**

```javascript
// #5: Samlet filter, søg og sort funktion
function filterSortDisplayMovies() {
  const searchValue = document.querySelector("#search-input").value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;
  const sortValue = document.querySelector("#sort-select").value;
  let movies = allMovies;

  // Filtrér på søgning
  movies = movies.filter(movie => movie.title.toLowerCase().includes(searchValue));

  // Filtrér på genre
  if (genreValue !== "all") {
    movies = movies.filter(movie => movie.genre.includes(genreValue));
  }

  // Sortér
  if (sortValue === "title") {
    movies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "year") {
    movies.sort((a, b) => b.year - a.year);
  }

  displayMovies(movies);
}
```

- Observer hvordan vi genbruger funktionen displayMovies fra tidligere, men hvorfor skal vi bruge `filterSortDisplayMovies()` først?

#### ✅ Test søgning!

1. **GEM og refresh** browseren
2. **Skriv i søgefeltet** - f.eks. "dark"
3. **Se øjeblikkelig filtrering** af resultater
4. **Prøv at slette** søgningen - alle film vises igen

**💡 Hvordan virker det?**

- `addEventListener("input")` lytter på hver tastetryk
- `filterSortDisplayMovies()` kører hver gang søgefeltet ændres
- `.filter()` og `.includes()` finder matchende film
- `displayMovies()` opdaterer visningen øjeblikkeligt

---

## Del 2: Genre filtrering automatisk populeret 🎭

**Formål:** Din genre dropdown udfyldes automatisk med alle genrer fra JSON data.

### Trin 3: Automatisk genre dropdown population

**3a. Tilføj populateGenreDropdown til getMovies**

Opdater din `getMovies` funktion til at udfylde genre dropdown:

```javascript
// #2: Fetch movies from JSON and display them
async function getMovies() {
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  allMovies = await response.json();
  populateGenreDropdown(); // Udfyld dropdown med genres
  displayMovies(allMovies);
}
```

**3b. Opret populateGenreDropdown funktionen**

```javascript
// #6: Udfyld genre-dropdown med alle unikke genrer
function populateGenreDropdown() {
  const genreSelect = document.querySelector("#genre-select");
  const genres = new Set();

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  // Fjern gamle options undtagen 'Alle genrer'
  genreSelect.innerHTML = '<option value="all">Alle genrer</option>';

  const sortedGenres = Array.from(genres).sort();
  for (const genre of sortedGenres) {
    genreSelect.insertAdjacentHTML("beforeend", `<option value="${genre}">${genre}</option>`);
  }
}
```

#### ✅ Test genre dropdown!

```javascript
// Genre eksempel fra JSON data:
const movie = {
  title: "Barbie",
  genre: ["Adventure", "Comedy", "Fantasy"], // Array af strings
  year: 2023
};

// Tjek om en movie har en bestemt genre:
const hasComedy = movie.genre.includes("Comedy"); // true
```

#### ✅ Forstå genre strukturen!

1. **GEM og refresh** browseren
2. **Tjek Console** og se:
   - Genres er arrays: `["Adventure", "Comedy", "Fantasy"]`
   - Hver movie kan have flere genres
   - Liste af alle unikke genres i datasættet

### Trin 5: Byg genre dropdown dynamisk

**5a. Tilføj genre dropdown til HTML**

Opdater din search sektion i `index.html`:

```html
<section class="search-section">
  <h2>🔍 Søg og filtrer film</h2>

  <input type="search" id="search-input" placeholder="Søg film titler..." />

  <!-- Tilføj genre dropdown -->
  <select id="genre-select">
    <option value="all">Alle genrer</option>
    <!-- Genre options udfyldes fra JavaScript -->
  </select>
</section>
```

**5b. Opret funktion til at udfylde dropdown**

```javascript
// ========== GENRE DROPDOWN ==========
function populateGenreDropdown() {
  console.log("🎭 Opretter genre dropdown...");

  const genreSelect = document.querySelector("#genre-select");

  // Find alle unikke genres
  const uniqueGenres = new Set(); // Set automatisk fjerner dubletter

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      uniqueGenres.add(genre);
    }
  }

  // Konverter Set til Array og sortér
  const sortedGenres = Array.from(uniqueGenres).sort();

  console.log("🎯 Sorterede genres:", sortedGenres);

  // Tilføj genre options til dropdown
  for (const genre of sortedGenres) {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  }

  console.log(`✅ Tilføjede ${sortedGenres.length} genre options`);
}

// Opdater din getMovies funktion:
async function getMovies() {
  // ... din eksisterende kode ...

  displayMovies(allMovies);
  populateGenreDropdown(); // Tilføj denne linje
}
```

#### ✅ Test genre dropdown og kombineret funktionalitet!

1. **GEM og refresh** browseren
2. **Tjek dropdown** - alle genrer er nu tilgængelige
3. **Test kombinationer**:
   - Søg "the" → Se alle film med "the" i titlen
   - Vælg "Action" → Se kun action film med "the"
   - Prøv forskellige sorteringer
   - Klik på movie cards → Se alerts med film info

**💡 Din app kan nu:**

- Søge i film titler med live opdatering
- Filtrere på genre med dynamisk dropdown
- Sortere alfabetisk eller efter år
- Kombinere alle filtre sammen
- Klikke på film for at se detaljer (forberedt til modal)

### Trin 6: Implementer kombineret filter-funktion

**6a. Opret hovedfunktion der matcher din løsning**

```javascript
// ========== KOMBINERET FILTRERING ==========
function filterSortDisplayMovies() {
  console.log("🔄 Kører kombineret filtrering...");

  // Hent aktuelle værdier fra HTML elementer
  const searchTerm = document.querySelector("#search-input").value;
  const selectedGenre = document.querySelector("#genre-select").value;
  const sortBy = document.querySelector("#sort-select").value;

  console.log(`🔍 Søgeterm: "${searchTerm}"`);
  console.log(`🎭 Genre: "${selectedGenre}"`);
  console.log(`📊 Sortering: "${sortBy}"`);

  // Start med alle movies
  let filteredMovies = allMovies;

  // TRIN 1: Søgning (hvis der er tekst)
  if (searchTerm && searchTerm.trim() !== "") {
    const searchLower = searchTerm.toLowerCase().trim();
    filteredMovies = filteredMovies.filter(movie => {
      return movie.title.toLowerCase().includes(searchLower);
    });
    console.log(`📋 Efter søgning: ${filteredMovies.length} movies`);
  }

  // TRIN 2: Genre filtrering (hvis ikke "all")
  if (selectedGenre !== "all") {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.genre.includes(selectedGenre);
    });
    console.log(`🎭 Efter genre filter: ${filteredMovies.length} movies`);
  }

  // TRIN 3: Sortering
  if (sortBy === "title") {
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
    console.log("📝 Sorteret alfabetisk på titel");
  } else if (sortBy === "year") {
    filteredMovies.sort((a, b) => b.year - a.year); // Nyeste først
    console.log("📅 Sorteret på år (nyeste først)");
  } else if (sortBy === "rating") {
    filteredMovies.sort((a, b) => b.rating - a.rating); // Højeste først
    console.log("⭐ Sorteret på rating (højeste først)");
  }

  console.log(`✅ Final resultater: ${filteredMovies.length} movies`);
  displayMovies(filteredMovies);
}
```

**6b. Event listeners er allerede sat op**

Event listeners er allerede konfigureret i din `initApp()` funktion, så de vil automatisk virke når siden loader. Alle tre inputs (søgning, genre, sortering) bruger samme `filterSortDisplayMovies()` funktion.

### Trin 7: Tilføj sortering til HTML og kode

**7a. Tilføj sort dropdown til HTML**

```html
<!-- Tilføj denne linje til din filter-bar sektion -->
<select id="sort-select">
  <option value="none">Ingen sortering</option>
  <option value="title">Sortér: Titel (A-Å)</option>
  <option value="year">Sortér: År (nyeste først)</option>
  <option value="rating">Sortér: Rating (højeste først)</option>
</select>
```

**7b. Event listeners virker automatisk**

Du behøver ikke at tilføje flere event listeners - de er allerede sat op i din `initApp()` funktion og vil automatisk håndtere alle tre inputs (søgning, genre, sortering) med samme `filterSortDisplayMovies()` funktion.

#### ✅ Test al funktionalitet sammen!

1. **GEM og refresh** browseren
2. **Test kombinationer**:
   - Søg "the" + Genre "Action" + Sort "År"
   - Prøv forskellige kombinationer
   - Alt skulle virke perfekt sammen!

---

## Del 3: Click Events og forberedelse til modal 🖱️

**Formål:** Lær click events og forbered til modal visning næste gang.

### Trin 8: Implementer click events på movie cards

**8a. Opdater `displayMovie` funktionen**

```javascript
// ========== OPDATER displayMovie MED CLICK EVENTS ==========
function displayMovie(movie) {
  const movieList = document.querySelector("#movie-list");

  const movieHTML = `
    <article class="movie-card" tabindex="0">
      <img src="${movie.image}" 
           alt="Poster of ${movie.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movie.title} <span class="movie-year">(${movie.year})</span></h3>
        <p class="movie-genre">${movie.genre.join(", ")}</p>
        <p class="movie-rating">⭐ ${movie.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movie.director}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", movieHTML);

  // Tilføj click event til den nye card
  const newCard = movieList.lastElementChild;

  newCard.addEventListener("click", function () {
    console.log(`🎬 Klik på: "${movie.title}"`);
    showMovieDetails(movie);
  });
}
```

**8b. Opret `showMovieDetails` funktion**

```javascript
// ========== SHOW MOVIE DETAILS ==========
function showMovieDetails(movie) {
  console.log("📊 Viser detaljer for:", movie.title);

  // Log movie info til console
  console.group(`🎬 ${movie.title} Detaljer`);
  console.log("📅 År:", movie.year);
  console.log("🎭 Genrer:", movie.genre);
  console.log("⭐ Rating:", movie.rating);
  console.log("🎯 Instruktør:", movie.director);
  console.log("👥 Skuespillere:", movie.actors);
  console.groupEnd();

  // Vis i alert (midlertidig løsning)
  const movieInfo = `🎬 ${movie.title} (${movie.year})
🎭 ${movie.genre.join(", ")}
⭐ Rating: ${movie.rating}
🎯 Instruktør: ${movie.director}
👥 Skuespillere: ${movie.actors.join(", ")}

📝 ${movie.description}`;

  alert(movieInfo);

  // TODO: Næste gang laver vi modal dialog!
}
```

#### ✅ Test click events!

1. **GEM og refresh** browseren
2. **Klik på movie cards** → Se alerts med film info
3. **Tjek console** for detaljerede logs

### Trin 9: Forbedre brugeroplevelsen

**9a. Tilføj hover effekter (CSS)**

```css
/* Tilføj til din app.css */
.movie-card {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.movie-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}
```

**9b. Tilføj keyboard support**

```javascript
// Tilføj også keyboard event til displayMovie:
newCard.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    showMovieDetails(movie);
  }
});
```

#### ✅ Test forbedret interaktion!

1. **Hover** over movie cards → Se animation
2. **Tab** til cards og tryk **Enter** → Samme funktionalitet
3. **Alle funktioner** virker sammen perfekt!

---

## ✅ Session 3 fuldført!

**🎯 Hvad du har lært:**

### 🔍 **Avanceret Array Manipulation**

- `filter()` til søgning og filtrering
- `sort()` med `localeCompare()` og numerisk sammenligning
- `includes()` til genre matching
- `Set()` til unikke værdier

### 🎛️ **Event-driven Programmering**

- `addEventListener()` for bruger input
- Kombineret filter-/sort-funktion
- Click og keyboard events
- Real-time opdatering af resultater

### 🏗️ **Kodestuktur og Mønstre**

- Modulær funktions-design
- Enkelt ansvar per funktion
- Event delegation og DOM manipulation
- Forberedelse til modal arkitektur

**💡 Din app kan nu:**

- ✅ Søge i film titler med live opdatering
- ✅ Filtrere på genre med dynamisk dropdown
- ✅ Sortere alfabetisk eller efter år/rating
- ✅ Kombinere alle filtre samtidig
- ✅ Reagere på klik for detailvisning
- ✅ Understøtte keyboard navigation

---

## 🚀 Næste session preview

**Session 4** vil fokusere på:

1. **🎭 Modal Dialog** - Erstat alerts med flot popup
2. **🎨 Advanced Styling** - Responsive design og animationer
3. **❤️ Favorit System** - Gem og administrer favoritter
4. **⚡ Performance** - Optimering og bedre UX

**🎊 Tillykke! Du har nu en fuldt funktionel Movie App! 🎉**

---

## Del 4: Sortering af resultater 📊

**Formål:** Lær at sortere movies på titel, år eller andre egenskaber med `.sort()`.

### Trin 8: Forstå hvordan sortering virker

**8a. Tilføj sortering dropdown til HTML**

Opdater din search sektion:

```html
<section class="search-section">
  <h2>🔍 Søg, filtrer og sortér film</h2>

  <input type="search" id="search-input" placeholder="Søg film titler..." />

  <select id="genre-select">
    <option value="all">Alle genrer</option>
  </select>

  <!-- Tilføj sort dropdown -->
  <select id="sort-select">
    <option value="none">Ingen sortering</option>
    <option value="title">Sortér: Titel (A-Å)</option>
    <option value="year">Sortér: År (nyeste først)</option>
    <option value="rating">Sortér: Rating (højeste først)</option>
  </select>
</section>
```

**8b. Forstå sortering koncepter**

Sortering virker ved at sammenligne to elementer ad gangen:

**💡 Sortering eksempler:**

```javascript
// TITEL SORTERING (A-Å)
const sortedByTitle = movies.sort((a, b) => {
  return a.title.localeCompare(b.title); // Alfabetisk
});

// ÅR SORTERING (nyeste først)
const sortedByYear = movies.sort((a, b) => {
  return b.year - a.year; // b - a = faldende orden
});

// RATING SORTERING (højeste først)
const sortedByRating = movies.sort((a, b) => {
  return b.rating - a.rating; // Højeste først
});
```

**Vigtigt:** Brug `[...movies]` for at lave en kopi og ikke ændre originale data!

#### ✅ Forstå sortering!

1. **GEM og refresh** browseren
2. **Tjek Console** og se:
   - `.localeCompare()` for tekst sortering
   - `b - a` for tal sortering (højeste først)
   - `a - b` for tal sortering (laveste først)

**💡 Hvorfor `[...testMovies]`?**

- `...` laver en kopi af arrayet
- `.sort()` ændrer det originale array
- Vi vil ikke ændre vores original data!

### Trin 9: Implementer rigtig movie sortering

**9a. Opret sortering funktion**

```javascript
// ========== SORTERING ==========
function sortMovies(movies, sortBy) {
  console.log(`📊 Sorterer ${movies.length} movies på: "${sortBy}"`);

  // Lav en kopi så vi ikke ændrer original arrayet
  const moviesCopy = [...movies];

  if (sortBy === "none") {
    console.log("📋 Ingen sortering - bevar original rækkefølge");
    return moviesCopy;
  }

  if (sortBy === "title") {
    moviesCopy.sort((a, b) => a.title.localeCompare(b.title));
    console.log("📝 Sorteret alfabetisk på titel");
  } else if (sortBy === "year") {
    moviesCopy.sort((a, b) => b.year - a.year); // Nyeste først
    console.log("📅 Sorteret på år (nyeste først)");
  } else if (sortBy === "rating") {
    moviesCopy.sort((a, b) => b.rating - a.rating); // Højeste først
    console.log("⭐ Sorteret på rating (højeste først)");
  }

  return moviesCopy;
}
```

**9b. Integrer sortering i kombineret filter funktion**

```javascript
// ========== KOMBINERET FILTRERING MED SORTERING ==========
function filterAndDisplayMovies() {
  console.log("🔄 Kører kombineret filtrering og sortering...");

  // Hent værdier
  const searchTerm = document.querySelector("#search-input").value;
  const selectedGenre = document.querySelector("#genre-select").value;
  const sortBy = document.querySelector("#sort-select").value;

  console.log(`🔍 Søgeterm: "${searchTerm}"`);
  console.log(`🎭 Genre: "${selectedGenre}"`);
  console.log(`📊 Sortering: "${sortBy}"`);

  // Start med alle movies
  let filteredMovies = allMovies;

  // FILTRERING (samme som før)
  if (searchTerm && searchTerm.trim() !== "") {
    const searchLower = searchTerm.toLowerCase().trim();
    filteredMovies = filteredMovies.filter(movie => {
      return movie.title.toLowerCase().includes(searchLower);
    });
  }

  if (selectedGenre !== "all") {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.genre.includes(selectedGenre);
    });
  }

  // SORTERING (ny del!)
  filteredMovies = sortMovies(filteredMovies, sortBy);

  console.log(`✅ Final resultater: ${filteredMovies.length} movies`);
  displayMovies(filteredMovies);
}
```

**9c. Event listeners er automatisk konfigureret**

Da alle event listeners allerede er sat op i `initApp()`, behøver du ikke at tilføje flere. De håndterer automatisk alle tre inputs og bruger din `filterSortDisplayMovies()` funktion.

#### ✅ Test komplet søgning, filtrering og sortering!

1. **GEM og refresh** browseren
2. **Test alle kombinationer**:
   - Søg "the" + Genre "Action" + Sort "År" → Action film med "the" sorteret på år
   - Prøv forskellige sorteringer på samme resultater
   - Tjek at alt virker sammen
3. **Tjek Console** for detaljerede beskeder

**💡 Hvad lærte vi om sortering?**

- `.sort()` ændrer arrayet - lav kopier med `[...array]`
- `localeCompare()` for korrekt tekst sortering
- `b - a` vs `a - b` bestemmer stigende/faldende orden
- Sortering sker EFTER filtrering for bedre performance

---

## Del 5: Click Events og Forberedelse til Modal 🖱️

**Formål:** Lær `addEventListener("click")` og forbered movie cards til at kunne åbnes i en modal næste gang.

### Trin 10: Forstå click events

**10a. Forstå click events**

Click events lader os reagere når brugere klikker på elementer. Vi bruger `addEventListener("click", function)` til at lytte på klik.

**💡 Basis click event struktur:**

```javascript
// Find et element
const element = document.querySelector(".movie-card");

// Tilføj click event
element.addEventListener("click", function () {
  console.log("Element blev klikket!");
});
```

### Trin 11: Tilføj click events til alle movie cards

**11a. Opdater din displayMovie funktion**

Nu skal hver movie card have sit eget click event:

```javascript
// ========== OPDATER displayMovie MED CLICK EVENTS ==========
function displayMovie(movie) {
  const movieList = document.querySelector("#movie-list");

  // Opret movie card HTML (som før)
  const movieHTML = `
    <article class="movie-card" tabindex="0">
      <img src="${movie.image}" 
           alt="Poster of ${movie.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movie.title} <span class="movie-year">(${movie.year})</span></h3>
        <p class="movie-genre">${movie.genre.join(", ")}</p>
        <p class="movie-rating">⭐ ${movie.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movie.director}</p>
      </div>
    </article>
  `;

  // Tilføj til DOM
  movieList.insertAdjacentHTML("beforeend", movieHTML);

  // VIGTIGT: Tilføj click event til den LIGE TILFØJEDE card
  const newlyAddedCard = movieList.lastElementChild;

  newlyAddedCard.addEventListener("click", function () {
    console.log(`🎬 Du klikkede på: "${movie.title}"`);
    showMovieInfo(movie); // Funktion vi laver næste
  });
}
```

**11b. Opret funktion til at vise movie info**

```javascript
// ========== SHOW MOVIE INFO ==========
function showMovieInfo(movie) {
  console.log("🎭 Viser info for:", movie.title);

  // For nu: Vis info i console og alert
  console.log("📊 Movie detaljer:", movie);

  // Opbyg info string
  const movieInfo = `
🎬 ${movie.title} (${movie.year})
🎭 ${movie.genre.join(", ")}
⭐ Rating: ${movie.rating}
🎯 Instruktør: ${movie.director}
👥 Skuespillere: ${movie.actors.join(", ")}

📝 Beskrivelse:
${movie.description}
  `;

  // Vis i alert (midlertidig løsning)
  alert(movieInfo);

  // TODO: Næste gang laver vi en flot modal dialog i stedet!
}
```

#### ✅ Test click på alle movie cards!

1. **GEM og refresh** browseren
2. **Klik på forskellige movie cards**
3. **Se console beskeder** med film titler
4. **Se alert** med film detaljer

### Trin 12: Forbedre click feedback og forbered modal

**12a. Tilføj visual feedback ved hover og click**

Tilføj denne CSS til din `app.css` (eller opret den hvis den ikke findes):

```css
/* ========== CLICK FEEDBACK ========== */
.movie-card {
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.movie-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.movie-card:active {
  transform: translateY(-2px);
}

/* Gør det klart at cards kan klikkes */
.movie-card:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}
```

**12b. Opret en mere avanceret show funktion**

```javascript
// ========== AVANCERET MOVIE INFO ==========
function showMovieInfo(movie) {
  console.log("🎭 Viser detaljeret info for:", movie.title);

  // Log alle detaljer til console for debugging
  console.group(`🎬 ${movie.title} Detaljer`);
  console.log("📅 År:", movie.year);
  console.log("🎭 Genrer:", movie.genre);
  console.log("⭐ Rating:", movie.rating);
  console.log("🎯 Instruktør:", movie.director);
  console.log("👥 Skuespillere:", movie.actors);
  console.log("🔗 ID:", movie.id);
  console.groupEnd();

  // Forbered data til modal (som vi laver næste gang)
  const movieData = {
    id: movie.id,
    title: movie.title,
    year: movie.year,
    genres: movie.genre.join(", "),
    rating: movie.rating,
    director: movie.director,
    actors: movie.actors.join(", "),
    description: movie.description,
    image: movie.image
  };

  console.log("📋 Formatteret movie data til modal:", movieData);

  // Vis bekræftelse
  const shouldShowDetails = confirm(`Vil du se detaljer for "${movie.title}"?\n\n(Næste gang laver vi en flot modal!)`);

  if (shouldShowDetails) {
    console.log("✅ Bruger valgte at se detaljer");
    // Her vil vi åbne modal næste gang
  } else {
    console.log("❌ Bruger lukkede dialog");
  }
}
```

#### ✅ Test forbedret click funktionalitet!

1. **GEM og refresh** browseren
2. **Hover over movie cards** → Se animation
3. **Klik på cards** → Se console group med detaljer
4. **Vælg "OK" i confirm** → Se forberedte modal data

**12c. Tilføj keyboard support**

```javascript
// Opdater displayMovie til at understøtte keyboard:
function displayMovie(movie) {
  // ... din eksisterende HTML kode ...

  movieList.insertAdjacentHTML("beforeend", movieHTML);
  const newlyAddedCard = movieList.lastElementChild;

  // Click event
  newlyAddedCard.addEventListener("click", () => showMovieInfo(movie));

  // Keyboard event (for accessibility)
  newlyAddedCard.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      console.log(`⌨️ Keyboard aktiveret: "${movie.title}"`);
      showMovieInfo(movie);
    }
  });
}
```

#### ✅ Test keyboard navigation!

1. **Tryk Tab** til at navigere mellem movie cards
2. **Tryk Enter eller Space** på en fokuseret card
3. **Se samme funktionalitet** som click

---

## Del 6: Test og sammenfatning 🎯

**Formål:** Test alle funktioner sammen og forbered til næste session.

### Trin 13: Komplet funktionalitetstest

**13a. Test alle funktioner sammen**

Nu hvor du har implementeret alle funktioner, test dem systematisk:

1. **Data loading**: Refresh siden og tjek at movies vises
2. **Søgning**: Skriv "the" i søgefeltet - se resultaterne
3. **Genre filtrering**: Vælg "Action" i dropdown
4. **Sortering**: Test forskellige sorteringsmuligheder
5. **Kombineret**: Prøv søgning + genre + sortering sammen
6. **Click events**: Klik på movie cards og se console/alert

#### ✅ Final test af hele applikationen!

**13b. Opret bruger guide i console**

#### ✅ Test alle funktioner manuelt!

showUserGuide();
}

````

#### ✅ Final test af hele applikationen!

1. **Refresh browseren** og se alle tests og guide i console
2. **Test hver funktion systematisk**:
   - Søg efter "ninja"
   - Filtrer på "Comedy"
   - Sortér på "Rating"
   - Klik på en film card
3. **Kombiner funktioner**:
   - Søg "the" + Genre "Action" + Sort "År"
   - Fjern søgning men behold genre og sortering
   - Prøv forskellige kombinationer

### Trin 14: Forberedelse til næste session

**14a. Opret TODO kommentarer til næste gang**

Tilføj disse kommentarer til din `app.js`:

```javascript
// ========== TODO FOR NÆSTE SESSION ==========
/*
🎯 SESSION 4 OPGAVER:

1. MODAL DIALOG:
   - Erstat alert() med flot modal dialog
   - Vis stort movie poster billede
   - Flot layout med alle movie detaljer
   - Luk modal med X knap eller ESC key

2. STYLING FORBEDRINGER:
   - Forbedre search/filter bar design
   - Animationer for filter ændringer
   - Loading states under data hentning
   - Responsive design for mobile

3. AVANCEREDE FEATURES:
   - Favorit system (hjerte ikon)
   - "Watched" status
   - Export/import af favoritter
   - Måske rating system?

4. PERFORMANCE:
   - Lazy loading af billeder
   - Infinite scroll
   - Debounce på søgning

💡 NUVÆRENDE STATUS:
✅ Data loading fra JSON
✅ Tekst søgning med .filter() og .includes()
✅ Genre filtrering med dropdown
✅ Sortering på titel, år, rating
✅ Click events på movie cards
✅ Keyboard navigation support
✅ Kombineret filter/search/sort funktion

🎉 Klar til modal implementering!
*/
````

## ✅ Session 3 fuldført!

**Hvad du kan nu:**

### 🔍 Søgning og Filtrering

- **Tekst søgning** med `.filter()`, `.includes()` og `.toLowerCase()`
- **Genre filtrering** med dropdown og array metoder
- **Kombineret filtrering** der arbejder sammen

### 📊 Sortering

- **Alfabetisk sortering** med `.localeCompare()`
- **Numerisk sortering** med tal sammenligning
- **Fleksibel sortering** på forskellige egenskaber

### 🖱️ Interaktivitet

- **Click events** med `addEventListener()`
- **Keyboard navigation** for accessibility
- **Event-driven** arkitektur

### 🎯 Forberedelse til næste gang

- **Modal foundation** lagt med click handlers
- **Data struktur** klar til detaljeret visning
- **Clean kode** klar til udvidelse

---

## 🚀 Næste session preview

I **Session 4** vil vi:

1. **Modal Dialog** - Flot popup med film detaljer
2. **Avanceret Styling** - Professionel UI/UX
3. **Favorit System** - Gem og administrer favoritter
4. **Performance** - Optimering og loading states

**🎊 Tillykke! Du har nu en fuldt funktionel Movie App med søgning, filtrering og sortering! 🎉**
