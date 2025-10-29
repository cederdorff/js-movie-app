# Movie App - Session 3: Filtrering, søgning & sortering.

## Opgaver til tredje undervisningsgang

> **Vigtig:** Du bygger videre på dit projekt fra Session 2. Sørg for at din `loadMovies()` funktion virker og viser film data fra JSON - ellers er der hjælp at hente i del 0.

---

## 💪 Udfordring og læring

**Der er kode eksempler i denne guide, men vi opfordrer dig til at:**

### 🎯 **Lær aktivt - ikke passivt:**

- ✍️ **Skriv koden selv** i stedet for copy-paste
- 🤔 **Tænk over hvad hver linje gør** før du skriver den
- 🔍 **Eksperimentér** - prøv at ændre værdier og se hvad der sker
- 🐛 **Lav fejl** - det er sådan du lærer bedst!
- 💡 **Forstå logikken** - ikke bare få det til at virke

### 📝 **Forskellige læringsniveauer:**

**Niveau 1 - Begynder:**

- Copy-paste koden og læs kommentarerne grundigt
- Sørg for du forstår hvad hver linje gør
- Eksperimentér med at ændre værdier

**Niveau 2 - Mellem:**

- Se på kode eksemplet
- Luk filen og prøv at skrive det selv
- Kig kun tilbage hvis du sidder fast

**Niveau 3 - Avanceret:**

- Læs kun beskrivelsen af hvad funktionen skal gøre
- Skriv din egen løsning først
- Sammenlign derefter med eksemplet

### 🎓 **Vigtigste læring:**

> **Dine fejl er dine bedste lærere!**
>
> Hvis du bare copy-paster, lærer du ikke at debugge eller tænke som en programmør. Prøv selv først, lav fejl, ret dem, og bliv bedre! 💪

**Husk:** Der er ikke én "rigtig" måde at løse problemerne på. Hvis din kode virker og er forståelig, er den god nok! 🎉

---

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
_Måske giver det bedst mening at slette alt i `app.js` og så fortsætte her fra..._

Vi skal gemme alle movies i en global variabel, så vi kan filtrere dem senere:

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

**0c. Opdater din `getMovies` funktion (erstatter din tidligere `loadMovies`-funktion)**

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

Kontroller at din `displayMovie`-funktion gør det samme som denne:

```javascript
// #4: Render a single movie card
function displayMovie(movie) {
  const movieList = document.querySelector("#movie-list");
  movieList.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <article class="movie-card">
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
  // Nulstil #movie-list HTML'en
  document.querySelector("#movie-list").innerHTML = "";
  // Gennemløb alle movies og kør displayMovie-funktionen for hver movie
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
    <article class="movie-card">
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

## Del 1: Tekstsøgning 🔍

**Formål:** Implementer live søgning i movie titler med `.filter()` og `.includes()`(indbyggede funktioner i JavaScript).

### Trin 1: Forstå hvordan søgning virker

**1a. Tilføj filter bar til din HTML**

Udvid din eksisterende HTML med denne struktur i `index.html`:

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

**💡 Eksempel på hvordan det virker:**

```javascript
// Hvis bruger søger "dark":
const searchTerm = "dark".toLowerCase(); // "dark"
const movieTitle = "The Dark Knight".toLowerCase(); // "the dark knight"
const matches = movieTitle.includes(searchTerm); // true ✅

// Andre eksempler:
"Barbie".toLowerCase().includes("dark"); // false ❌
"The Dark Knight".toLowerCase().includes("dark"); // true ✅
"Dune".toLowerCase().includes("dark"); // false ❌
```

**💡 Hvorfor .toLowerCase()?**

- Så "DARK", "Dark" og "dark" alle matcher
- Case-insensitive søgning er brugervenligt!

### Trin 2: Implementer simpel søgning (kun tekst)

**2a. Tilføj event listener til søgefeltet**

Opdater din `initApp` funktion til at lytte på søgefeltet:

```javascript
// #1: Initialize the app
function initApp() {
  console.log("initApp: app.js is running 🎉");
  getMovies(); // Fetch and display movies
  document.querySelector("#search-input").addEventListener("input", searchMovies);
}
```

**2b. Opret en simpel søge-funktion**

```javascript
// #5: Søg i movie titler
function searchMovies() {
  const searchValue = document.querySelector("#search-input").value.toLowerCase();

  const filteredMovies = allMovies.filter(movie => {
    return movie.title.toLowerCase().includes(searchValue);
  });

  displayMovies(filteredMovies);
}
```

**💡 Hvordan virker det?**

1. Hent søgeværdi fra input feltet
2. Konverter til lowercase for case-insensitive søgning
3. Filtrer movies hvor titlen indeholder søgeteksten
4. Vis de filtrerede resultater

#### ✅ Test søgning!

1. **GEM og refresh** browseren
2. **Skriv i søgefeltet** - f.eks. "dark"
3. **Se øjeblikkelig filtrering** af resultater
4. **Prøv at slette** søgningen - alle film vises igen

**💡 Hvad har vi lært?**

- `addEventListener("input")` lytter på hver tastetryk
- `.filter()` opretter et nyt array med matches
- `.includes()` tjekker om tekst findes i en string
- `.toLowerCase()` gør søgningen case-insensitive

---

## Del 2: Genre filtrering 🎭

**Formål:** Tilføj genre filtrering med automatisk populeret dropdown og kombiner det med søgning.

### Trin 3: Forstå genre strukturen i JSON

**3a. Se på genre data**

Hver movie har et array af genres:

```javascript
// Genre eksempel fra JSON data:
const movie = {
  title: "Barbie",
  genre: ["Adventure", "Comedy", "Fantasy"], // Array af strings
  year: 2023
};
```

**💡 Vigtigt at forstå:**

- `genre` er et **array** (ikke en string)
- En movie kan have **flere** genres
- Vi bruger `.includes()` til at tjekke om en genre findes

**💡 Eksempel:**

```javascript
const movie = {
  title: "Barbie",
  genre: ["Adventure", "Comedy", "Fantasy"]
};

// Tjek om en movie har en bestemt genre:
movie.genre.includes("Comedy"); // true ✅
movie.genre.includes("Action"); // false ❌
```

### Trin 4: Byg automatisk genre dropdown

**4a. Opret `populateGenreDropdown` funktionen**

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

**💡 Hvad sker der?**

1. Vi bruger `Set()` til at samle **unikke** genres (ingen dubletter)
2. Vi looper gennem alle movies og deres genres
3. Vi sorterer genres alfabetisk
4. Vi indsætter dem som `<option>` elementer i dropdown

**4b. Kald funktionen efter data er hentet**

Opdater din `getMovies` funktion:

```javascript
// #2: Fetch movies from JSON and display them
async function getMovies() {
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  allMovies = await response.json();
  populateGenreDropdown(); // Udfyld dropdown med genres <-----
  displayMovies(allMovies);
}
```

#### ✅ Test genre dropdown!

1. **GEM og refresh** browseren
2. **Tjek genre dropdown** - alle unikke genres fra JSON vises nu
3. **Bemærk** at de er sorteret alfabetisk

**🚨 Problem:** Genre dropdown virker ikke endnu - vi skal kombinere søgning og filtrering!

### Trin 5: Kombiner søgning og genre filtrering

**Problem:** Nu har vi to separate funktioner - `searchMovies()` (kun søgning) og `populateGenreDropdown()` (udfylder dropdown), men søgning og genre-filtrering virker ikke sammen!

**Løsning:** Lav én funktion der håndterer BEGGE filtre samtidig.

**5a. Fra simpel til kombineret - forstå progressionen**

**Hvad vi havde (kun søgning):**

```javascript
// Denne funktion håndterer KUN søgning:
function searchMovies() {
  const searchValue = document.querySelector("#search-input").value.toLowerCase();

  const filteredMovies = allMovies.filter(movie => {
    return movie.title.toLowerCase().includes(searchValue);
  });

  displayMovies(filteredMovies);
}
```

**Hvad vi skal have (søgning + genre):**

Nu skal vi ERSTATTE `searchMovies()` med en ny `filterMovies()` funktion der kan BEGGE dele:

```javascript
// #5: Kombineret søgning og genre filtrering
function filterMovies() {
  const searchValue = document.querySelector("#search-input").value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;

  // Start med alle movies
  let filteredMovies = allMovies;

  // TRIN 1: Filtrer på søgetekst, hvis der er skrevet noget
  if (searchValue) {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.title.toLowerCase().includes(searchValue);
    });
  }

  // TRIN 2: Filtrer på genre, hvis valgte genre ikke er "all"
  if (genreValue !== "all") {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.genre.includes(genreValue);
    });
  }

  displayMovies(filteredMovies);
}
```

**💡 Hvad er forskellen?**

1. Vi starter med **alle movies**
2. Vi tjekker **FØRST** om der er søgetekst → filtrer hvis ja
3. Vi tjekker **DEREFTER** om der er valgt en genre → filtrer yderligere hvis ja
4. Hver filter reducerer listen gradvist
5. Vi viser kun de movies der matcher **BEGGE** kriterier

**5b. Opdater din app.js:**

1. **SLET** eller **ERSTAT** din gamle `searchMovies()` funktion
2. **TILFØJ** den nye `filterMovies()` funktion ovenfor

**5b. Opdater din app.js:**

1. **SLET** eller **ERSTAT** din gamle `searchMovies()` funktion
2. **TILFØJ** den nye `filterMovies()` funktion ovenfor

**5c. Opdater event listeners**

Nu skal begge inputs bruge den samme nye funktion. Find din `initApp()` og opdater til:

```javascript
// #1: Initialize the app
function initApp() {
  console.log("initApp: app.js is running 🎉");
  getMovies();
  document.querySelector("#search-input").addEventListener("input", filterMovies); // ← Ændret!
  document.querySelector("#genre-select").addEventListener("change", filterMovies); // ← Ny!
}
```

**💡 Bemærk:** Vi ændrede `searchMovies` til `filterMovies` for søgefeltet, og tilføjede event listener for genre dropdown.

```javascript
// #1: Initialize the app
function initApp() {
  console.log("initApp: app.js is running 🎉");
  getMovies();
  document.querySelector("#search-input").addEventListener("input", filterMovies);
  document.querySelector("#genre-select").addEventListener("change", filterMovies);
}
```

#### ✅ Test kombineret filtrering!

1. **GEM og refresh** browseren
2. **Test kombinationer**:
   - Søg "the" → Se alle film med "the" i titlen
   - Vælg "Action" genre → Se kun action film med "the"
   - Fjern søgning → Se alle action film
   - Vælg "Alle genrer" → Se alle film igen

**💡 Magic happens:** Begge filtre virker nu sammen! 🎉

---

### ✅ Checkpoint: Hvor er vi nu?

**Din app.js skulle nu have disse funktioner:**

- ✅ `initApp()` - med event listeners for søgning OG genre
- ✅ `getMovies()` - henter data og kalder `populateGenreDropdown()`
- ✅ `displayMovies()` - viser array af movies
- ✅ `displayMovie()` - viser én enkelt movie
- ✅ `populateGenreDropdown()` - udfylder genre dropdown
- ✅ `filterMovies()` - kombinerer søgning og genre filtrering

**Din app kan nu:**

- 🔍 Søge i movie titler (live opdatering)
- 🎭 Filtrere på genre (dynamisk dropdown)
- 🎯 Kombinere søgning + genre filtrering

**Næste: Vi tilføjer sortering!**

---

## Del 3: Sortering 📊

**Formål:** Tilføj muligheden for at sortere movies på titel, år eller rating.

Vi har nu tekstsøgning og genre-filtrering. Næste skridt er at tilføje sortering!

### Trin 6: Tilføj sort dropdown til HTML

Åbn din `index.html` og tilføj sort dropdown (måske har du allerede noget der minder om det - så erstat din `sort-select` i `index.html`):

```html
<!-- Tilføj denne linje til din filter-bar sektion -->
<select id="sort-select">
  <option value="none">Ingen sortering</option>
  <option value="title">Sortér: Titel (A-Å)</option>
  <option value="year">Sortér: År (nyeste først)</option>
  <option value="rating">Sortér: Rating (højeste først)</option>
</select>
```

### Trin 7: Udvid filterMovies til også at sortere

Nu skal vi udvide vores `filterMovies()` funktion til også at håndtere sortering.

**Vi bygger videre på funktionen fra Del 2, Trin 5** ved at tilføje sortering som TRIN 3:

```javascript
// #5: Kombineret søgning, genre og sortering
function filterMovies() {
  const searchValue = document.querySelector("#search-input").value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;
  const sortValue = document.querySelector("#sort-select").value; // ← NY linje!

  // Start med alle movies - vi vil altid gerne begynde med hele datasættet
  let filteredMovies = allMovies;

  // TRIN 1: Filtrer på søgetekst (fra input-felt)
  if (searchValue) {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.title.toLowerCase().includes(searchValue);
    });
  }

  // TRIN 2: Filtrer på genre (fra dropdown)
  if (genreValue !== "all") {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.genre.includes(genreValue);
    });
  }

  // TRIN 3: Sorter resultater (fra dropdown)
  if (sortValue === "title") {
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title)); // A-Å
  } else if (sortValue === "year") {
    filteredMovies.sort((a, b) => b.year - a.year); // Nyeste først
  } else if (sortValue === "rating") {
    filteredMovies.sort((a, b) => b.rating - a.rating); // Højeste først
  }

  displayMovies(filteredMovies); // Vis de filtrerede og sorterede movies
}
```

**💡 Hvordan virker sortering?**

- **Alfabetisk**: Vi bruger `localeCompare()` til at sortere tekst korrekt
- **Tal**: Vi trækker fra (b - a giver højeste først, a - b giver laveste først)
- **Ingen sortering**: Hvis "none" vælges, sker der ingen sortering

### Trin 8: Tilføj event listener til sort dropdown

Opdater `initApp()` til at lytte på sort dropdown:

```javascript
// #1: Initialize the app
function initApp() {
  console.log("initApp: app.js is running 🎉");
  getMovies();
  document.querySelector("#search-input").addEventListener("input", filterMovies);
  document.querySelector("#genre-select").addEventListener("change", filterMovies);
  document.querySelector("#sort-select").addEventListener("change", filterMovies);
}
```

#### ✅ Test al funktionalitet sammen!

1. **GEM og refresh** browseren
2. **Test kombinationer**:
   - Søg "the" + Genre "Action" + Sort "År"
   - Sort på "Rating" → Se højeste rating først
   - Sort på "Titel" → Se alfabetisk rækkefølge
   - Prøv forskellige kombinationer!

**💡 Complete system:** Nu virker søgning, filtrering OG sortering sammen! 🎉

---

### ✅ Checkpoint: Hvor er vi nu?

**Din `filterMovies()` funktion håndterer nu:**

1. ✅ Tekstsøgning (hvis der er indtastet noget)
2. ✅ Genre filtrering (hvis ikke "all")
3. ✅ Sortering (på titel, år eller rating)

**Din `initApp()` har tre event listeners:**

- ✅ `#search-input` → `filterMovies`
- ✅ `#genre-select` → `filterMovies`
- ✅ `#sort-select` → `filterMovies`

**Test:**

- Søg "the" + Genre "Action" + Sort "Rating" → Skulle vise action film med "the" sorteret efter rating!

**Næste: Vi tilføjer click events på movie cards!**

---

## Del 4: Click Events og forberedelse til modal 🖱️

> **💡 Bonus feature:** Denne del er en forberedelse til næste session hvor vi laver modal dialogs. Du kan springe over hvis du er presset på tid!

**Formål:** Lær click events og forbered til modal visning næste gang.

### Trin 9: Implementer click events på movie cards

**9a. Opdater `displayMovie` funktionen**

```javascript
// ========== OPDATER displayMovie MED CLICK EVENTS ==========
function displayMovie(movie) {
  const movieList = document.querySelector("#movie-list");

  const movieHTML = `
    <article class="movie-card">
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

**9b. Opret `showMovieDetails` funktion**

```javascript
// #7: Vis movie detaljer (midlertidig løsning med alert)
function showMovieDetails(movie) {
  console.log("📊 Viser detaljer for:", movie.title);

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

### Trin 10: Forbedre brugeroplevelsen

**10a. Tilføj hover effekter (CSS)**
Det er muligvis allerede i din CSS, men så prøv at forstå, hvad det gør!

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

#### ✅ Test forbedret interaktion!

1. **Hover** over movie cards → Se animation
2. **Tab** til cards og tryk **Enter** → Samme funktionalitet
3. **Alle funktioner** virker sammen perfekt!

---

## Del 5: Test og sammenfatning 🎯

**Formål:** Test alle funktioner sammen og opsummer hvad vi har lært.

### Trin 11: Komplet test af hele applikationen

**Test systematisk:**

1. **Data loading**: Refresh siden → Tjek at movies vises
2. **Tekstsøgning**: Skriv "the" i søgefeltet → Se resultater opdateres live
3. **Genre filtrering**: Vælg "Action" → Se kun action film
4. **Kombineret**: Prøv søgning + genre → Se at begge filtre virker sammen
5. **Sortering**: Vælg "Rating" → Se højeste rating først
6. **Click events**: Klik på en movie card → Se alert med detaljer

**Test forskellige kombinationer:**

- Søg "dark" + Genre "Action" + Sort "År"
- Søg "the" + Genre "Sci-Fi" + Sort "Rating"
- Fjern søgning, behold genre og sortering
- Prøv alle muligheder!

---

## ✅ Session 3 fuldført!

**🎯 Hvad du har lært:**

### 🔍 **Tekstsøgning**

- `filter()` til at filtrere arrays
- `includes()` til at tjekke om tekst findes i string
- `.toLowerCase()` for case-insensitive søgning
- Live opdatering med `input` event

### 🎭 **Genre filtrering**

- `Set()` til at finde unikke værdier
- Dynamisk oprettelse af dropdown options
- Array metoden `.includes()` til at tjekke genre membership
- Kombineret filtrering med tekstsøgning

### 📊 **Sortering**

- `.sort()` til at sortere arrays
- `localeCompare()` for alfabetisk sortering
- Numerisk sortering med `b - a` (højeste først) og `a - b` (laveste først)
- Sortering efter forskellige properties

### 🖱️ **Click Events**

- `addEventListener("click")` til mouse interaktion
- Event handling på dynamisk oprettede elementer
- Forberedelse til modal visning

### 🏗️ **Kodestruktur**

- Modulære funktioner med enkelt ansvar
- Kombineret filter funktion (`filterMovies()`)
- Event-driven arkitektur
- for...of loops i stedet for forEach

**💡 Din app kan nu:**

- ✅ Søge i film titler med live opdatering
- ✅ Filtrere på genre med dynamisk dropdown
- ✅ Sortere på titel, år eller rating
- ✅ Kombinere alle tre funktioner samtidig
- ✅ Reagere på klik med alert (forberedt til modal)

---

## ✅ Session 3 fuldført!

**🎯 Hvad du har lært:**

### 🔍 **Tekstsøgning**

- `filter()` til at filtrere arrays
- `includes()` til at tjekke om tekst findes i string
- `.toLowerCase()` for case-insensitive søgning
- Live opdatering med `input` event

### 🎭 **Genre filtrering**

- `Set()` til at finde unikke værdier
- Dynamisk oprettelse af dropdown options
- Array metoden `.includes()` til at tjekke genre membership
- Kombineret filtrering med tekstsøgning

### 📊 **Sortering**

- `.sort()` til at sortere arrays
- `localeCompare()` for alfabetisk sortering
- Numerisk sortering med `b - a` (højeste først) og `a - b` (laveste først)
- Sortering efter forskellige properties

### 🖱️ **Click Events**

- `addEventListener("click")` til mouse interaktion
- Event handling på dynamisk oprettede elementer
- Forberedelse til modal visning

### 🏗️ **Kodestruktur**

- Modulære funktioner med enkelt ansvar
- Kombineret filter funktion (`filterMovies()`)
- Event-driven arkitektur
- for...of loops i stedet for forEach

**💡 Din app kan nu:**

- ✅ Søge i film titler med live opdatering
- ✅ Filtrere på genre med dynamisk dropdown
- ✅ Sortere på titel, år eller rating
- ✅ Kombinere alle tre funktioner samtidig
- ✅ Reagere på klik med alert (forberedt til modal)

---

## 📋 Komplet løsning

<details>
<summary><strong>🔍 Klik her for at se den komplette app.js løsning</strong></summary>

**Komplet `app.js` efter Session 3:**

```javascript
// ========== GLOBAL STATE ==========
let allMovies = [];

// ========== APP INITIALIZATION ==========
window.addEventListener("load", initApp);

function initApp() {
  console.log("initApp: app.js is running 🎉");
  getMovies();

  // Event listeners for filtrering og sortering
  document.querySelector("#search-input").addEventListener("input", filterMovies);
  document.querySelector("#genre-select").addEventListener("change", filterMovies);
  document.querySelector("#sort-select").addEventListener("change", filterMovies);
}

// ========== DATA FETCHING ==========

async function getMovies() {
  console.log("🌐 Henter alle movies fra JSON...");

  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  allMovies = await response.json();

  console.log(`📊 JSON data modtaget: ${allMovies.length} movies`);

  populateGenreDropdown();
  displayMovies(allMovies);
}

// ========== GENRE DROPDOWN ==========

function populateGenreDropdown() {
  const genreSelect = document.querySelector("#genre-select");
  const genres = new Set();

  // Saml alle unikke genrer
  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  // Fjern gamle options undtagen 'Alle genrer'
  genreSelect.innerHTML = '<option value="all">Alle genrer</option>';

  // Sorter og tilføj genres
  const sortedGenres = Array.from(genres).sort();
  for (const genre of sortedGenres) {
    genreSelect.insertAdjacentHTML("beforeend", `<option value="${genre}">${genre}</option>`);
  }
}

// ========== FILTERING & SORTING ==========

function filterMovies() {
  const searchValue = document.querySelector("#search-input").value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;
  const sortValue = document.querySelector("#sort-select").value;

  // Start med alle movies
  let filteredMovies = allMovies;

  // FILTER 1: Tekstsøgning
  if (searchValue) {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.title.toLowerCase().includes(searchValue);
    });
  }

  // FILTER 2: Genre filtrering
  if (genreValue !== "all") {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.genre.includes(genreValue);
    });
  }

  // SORTERING
  if (sortValue === "title") {
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "year") {
    filteredMovies.sort((a, b) => b.year - a.year);
  } else if (sortValue === "rating") {
    filteredMovies.sort((a, b) => b.rating - a.rating);
  }

  displayMovies(filteredMovies);
}

// ========== DISPLAY FUNCTIONS ==========

function displayMovies(movies) {
  console.log(`🎬 Viser ${movies.length} movies`);
  document.querySelector("#movie-list").innerHTML = "";

  for (const movie of movies) {
    displayMovie(movie);
  }
}

function displayMovie(movie) {
  const movieList = document.querySelector("#movie-list");

  const movieHTML = `
    <article class="movie-card">
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

  // Tilføj click event (bonus feature)
  const newCard = movieList.lastElementChild;
  newCard.addEventListener("click", function () {
    console.log(`🎬 Klik på: "${movie.title}"`);
    showMovieDetails(movie);
  });
}

// ========== MOVIE DETAILS (BONUS) ==========

function showMovieDetails(movie) {
  console.log("📊 Viser detaljer for:", movie.title);

  const movieInfo = `🎬 ${movie.title} (${movie.year})
🎭 ${movie.genre.join(", ")}
⭐ Rating: ${movie.rating}
🎯 Instruktør: ${movie.director}
👥 Skuespillere: ${movie.actors.join(", ")}

📝 ${movie.description}`;

  alert(movieInfo);

  // TODO: Næste session - lav modal dialog!
}
```

#### ✅ Verificér din løsning

Din kode skulle nu have:

- [ ] Global `allMovies` array
- [ ] `initApp()` med 3 event listeners
- [ ] `getMovies()` der kalder `populateGenreDropdown()`
- [ ] `populateGenreDropdown()` funktion
- [ ] `filterMovies()` der håndterer søgning, genre OG sortering
- [ ] `displayMovies()` og `displayMovie()` funktioner
- [ ] (Bonus) `showMovieDetails()` funktion med click events

</details>

---

Tillykke! Du har nu en fuldt funktionel Movie App med søgning, filtrering og sortering! 🎉
