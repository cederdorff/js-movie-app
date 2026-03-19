# DAG 4 - Søgning, Genre, Sortering, Detaljer & Udgivelse

## Formål

På den sidste dag tilføjer vi:

- **Søgefelt** (find film ved titel)
- **Sortering** (titel, år og rating)
- **Dialog/detaljer** (vis mere info når man klikker)
- **GitHub Pages** (gør din app offentlig)

**Hold det enkelt!** Basis funktionalitet der virker.

---

## Opgave 0: Start Hvor Vi Slap

Din `app.js` fra DAG 3 skulle have:

- `fetch()` der henter data
- `showMovies()` der viser film
- Genre-filter (dropdown)

**Hvis ikke - kopier fra DAG 3 først!**

---

## Opgave 1: Tilføj Søgning, Genre & Sortering

**Formål:** Lad brugeren søge på titel, filtrere på genre og sortere resultater.

### 1.1: Tilføj HTML

Opdatér `index.html` - tilføj søgefeltet:

```html
<header>
  <h1>Movie Database</h1>
  <p class="subtitle">Søgning, genre og sortering</p>
</header>

<section class="controls">
  <div class="control-group grow">
    <label for="search-input">Søg på titel</label>
    <input type="text" id="search-input" placeholder="Fx matrix, dune eller dark" />
  </div>

  <div class="control-group">
    <label for="genre-select">Genre</label>
    <select id="genre-select">
      <option value="all">Alle genrer</option>
    </select>
  </div>

  <div class="control-group">
    <label for="sort-select">Sortering</label>
    <select id="sort-select">
      <option value="none">Ingen sortering</option>
      <option value="title">Titel (A-Å)</option>
      <option value="year">Årstal (nyeste først)</option>
      <option value="rating">Rating (højeste først)</option>
    </select>
  </div>
</section>

<section class="status-bar">
  <p id="movie-count">Viser 0 film</p>
</section>

<main>
  <section id="movie-list" class="movie-grid">
    <p class="loading">Loader film...</p>
  </section>
</main>
```

### 1.2: Tilføj CSS

Tilføj i `app.css`:

```css
.movie-card {
  background: linear-gradient(180deg, #434b54 0%, #3f464e 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  transition:
    transform 200ms ease,
    box-shadow 200ms ease,
    border-color 200ms ease;
}

.movie-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
  border-color: #69c8f0;
}

.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.year-badge {
  border-radius: 999px;
  background: rgba(105, 200, 240, 0.24);
  color: #92dafd;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.38rem 0.45rem;
}

.movie-rating {
  margin-top: 0.52rem;
  color: #ffcf4d;
  font-weight: 700;
}

#movie-dialog {
  width: min(92vw, 920px);
  background: #454b53;
}

#dialog-content {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 2fr;
  gap: 2rem;
}

.dialog-description {
  padding: 1rem;
  border-left: 4px solid #69c8f0;
  font-style: italic;
  background: rgba(105, 200, 240, 0.08);
}
```

### 1.3: Tilføj JavaScript

**Opdatér `app.js` - tilføj søge-logik:**

```javascript
const MOVIES_URL = "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  document.querySelector("#search-input").addEventListener("input", applyFiltersAndSort);
  document.querySelector("#genre-select").addEventListener("change", applyFiltersAndSort);
  document.querySelector("#sort-select").addEventListener("change", applyFiltersAndSort);

  getMovies();
}

async function getMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  populateGenreSelect();
  applyFiltersAndSort();
}

function applyFiltersAndSort() {
  const searchTerm = document.querySelector("#search-input").value.trim().toLowerCase();
  const selectedGenre = document.querySelector("#genre-select").value;
  const sortOption = document.querySelector("#sort-select").value;

  let filteredMovies = allMovies.filter(function (movie) {
    const matchesTitle = movie.title.toLowerCase().includes(searchTerm);
    const matchesGenre = selectedGenre === "all" || movie.genre.includes(selectedGenre);
    return matchesTitle && matchesGenre;
  });

  if (sortOption === "title") {
    filteredMovies.sort((movieA, movieB) => movieA.title.localeCompare(movieB.title));
  } else if (sortOption === "year") {
    filteredMovies.sort((movieA, movieB) => movieB.year - movieA.year);
  } else if (sortOption === "rating") {
    filteredMovies.sort((movieA, movieB) => movieB.rating - movieA.rating);
  }

  showMovies(filteredMovies);
}
```

**Test det!**

- Skriv "matrix" → se Matrix film
- Skriv "dark" → se Dark Knight film
- Slet tekst → se alle film igen

### 1.4: Forstå Filter-logikken

```javascript
const searchTerm = searchInput.value.toLowerCase();
```

- `searchInput.value` = hvad brugeren skrev
- `.toLowerCase()` = gør til små bogstaver ("Matrix" → "matrix")

```javascript
const filteredMovies = allMovies.filter(function (movie) {
  const title = movie.title.toLowerCase();
  return title.includes(searchTerm);
});
```

- Gør film-titlen til små bogstaver
- Check om titlen indeholder søgeteksten
- `"The Matrix".toLowerCase().includes("matrix")` → `true`

**Vigtigt:**

- `"input"` event = trigger hver gang der skrives
- `.toLowerCase()` gør søgningen case-insensitive
- Tom streng `""` → vis alle film igen

---

## Opgave 2: Klik På Film -> Vis Detaljer

**Formål:** Når man klikker en film → vis mere info i en dialog.

### 2.1: Cardvisning der matcher løsningen

Opdatér `showMovies()`:

```javascript
function showMovies(movies) {
  const movieList = document.querySelector("#movie-list");
  const movieCount = document.querySelector("#movie-count");

  movieList.innerHTML = "";
  movieCount.textContent = `Viser ${movies.length} ud af ${allMovies.length} film`;

  if (movies.length === 0) {
    movieList.innerHTML = '<p class="empty">Ingen film matcher din søgning eller genre.</p>';
    return;
  }

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const movieList = document.querySelector("#movie-list");

  const movieCard = `
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

  movieList.insertAdjacentHTML("beforeend", movieCard);

  const newCard = movieList.lastElementChild;
  newCard.addEventListener("click", function () {
    showMovieDialog(movie);
  });
}
```

**Test det!** Du skal nu have cards med badge, genre, rating og instruktør-linje.

### 2.2: Bedre løsning med HTML dialog

**Mere professionelt - brug en dialog:**

#### Trin 1: Tilføj dialog i HTML

Tilføj EFTER `<main>`:

```html
</main>

<!-- Dialog -->
<dialog id="movie-dialog">
  <form method="dialog">
    <button id="close-dialog" aria-label="Luk">✕</button>
    <div id="dialog-content">
      <!-- Detaljer vises her -->
    </div>
  </form>
</dialog>
```

#### Trin 2: Tilføj CSS

```css
#movie-dialog {
  border-radius: 16px;
  width: min(92vw, 920px);
  background: #454b53;
}

#dialog-content {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 2fr;
  gap: 2rem;
}

.dialog-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.dialog-description {
  padding: 1rem;
  border-left: 4px solid #69c8f0;
  font-style: italic;
  background: rgba(105, 200, 240, 0.08);
}
```

#### Trin 3: Opdatér JavaScript

```javascript
function showMovieDialog(movie) {
  const dialog = document.querySelector("#movie-dialog");
  const dialogContent = document.querySelector("#dialog-content");

  dialogContent.innerHTML = `
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

**Test det!**

- Klik en film → se flot dialog
- Klik "Luk" eller tryk ESC -> luk dialog
- Prøv forskellige film

---

## Opgave 3: Deploy Til GitHub Pages

**Formål:** Gør din app tilgængelig på internettet.

### 3.1: Forbered dit projekt

**Tjek at alt virker:**

1. Søgning fungerer
2. Genre-filter fungerer
3. Sortering fungerer
4. Dialog åbner og lukker
5. Ingen fejl i konsollen

### 3.2: Push til GitHub

**Trin 1: Stage alle filer**

```bash
git add .
```

**Trin 2: Commit**

```bash
git commit -m "Færdig movie app med søgning og dialog"
```

**Trin 3: Push**

```bash
git push origin main
```

### 3.3: Aktivér GitHub Pages

1. Gå til dit repo på GitHub.com
2. Klik **Settings** (øverst)
3. Scroll til **Pages** (venstre menu)
4. Under **Source**:

- Vælg branch: `main`
- Vælg folder: `/ (root)`

5. Klik **Save**

**Vent 1-2 minutter** → Din side er live.

URL: `https://[dit-brugernavn].github.io/[repo-navn]/`

### 3.4: Test dit live-site

Åbn URL'en i en ny fane og test:

- Loader film?
- Søgning virker?
- Genre-filter virker?
- Sortering virker?
- Dialog åbner?

**Hvis noget ikke virker:**

- Tjek konsollen for fejl (Windows/PC: F12 eller Ctrl+Shift+I, Mac: Cmd+Option+I)
- Tjek at alle filer er pushet
- Prøv hård genindlæsning (Windows/PC: Ctrl+Shift+R, Mac: Cmd+Shift+R)

---

## Udfordringer

### Udfordring 1: Søg også i genre

Lad søgningen også finde film baseret på genre:

```javascript
function applyFiltersAndSort() {
  let searchTerm = document.querySelector("#search-input").value.toLowerCase();
  let selectedGenre = document.querySelector("#genre-select").value;

  let filteredMovies = allMovies.filter(function (movie) {
    let title = movie.title.toLowerCase();
    let genres = movie.genre.join(" ").toLowerCase();
    let matchesSearch = title.includes(searchTerm) || genres.includes(searchTerm);
    let matchesGenre = selectedGenre === "all" || movie.genre.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  showMovies(filteredMovies);
}
```

### Udfordring 2: Udvid sorteringen

Sortering er allerede en del af basisløsningen. Som ekstra træning kan du tilføje:

- stigende/faldende retning
- sekundær sortering (fx titel ved samme rating)

Grundlogikken i `applyFiltersAndSort()` er:

```javascript
if (sortOption === "title") {
  filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
} else if (sortOption === "year") {
  filteredMovies.sort((a, b) => b.year - a.year);
} else if (sortOption === "rating") {
  filteredMovies.sort((a, b) => b.rating - a.rating);
}
```

### Udfordring 3: Luk dialog med klik på backdrop (valgfri)

```javascript
document.querySelector("#movie-dialog").addEventListener("click", function (event) {
  if (event.target.id === "movie-dialog") {
    this.close();
  }
});
```

### Udfordring 4: Tilføj indlæsnings-tilstand

Vis "Loading..." mens data hentes:

```javascript
async function start() {
  // Vis loading
  let movieList = document.querySelector("#movie-list");
  movieList.innerHTML = '<p style="text-align: center; color: #aaa;">Loading movies...</p>';

  let response = await fetch("...");
  allMovies = await response.json();

  // Skjul loading - vis film
  setupFilters();
  populateGenreSelect();
  applyFiltersAndSort();
}
```

---

## Hvad har du lært i dag?

- **Søgefunktion** med `.filter()` og `.includes()`
- **Sortering** med `.sort()`
- **Dialog** med `<dialog>` element
- **showModal() / close()** API
- **Event listeners** på dynamisk oprettede elementer
- **GitHub Pages** deployment
- **Kombination af funktioner** (søg + filter)

---

## Du har nu en komplet Movie App!

**Din app kan:**

- Hente data fra et API
- Vise film med billeder
- Filtrere på genre
- Søge efter titel
- Vise detaljer i dialog
- Sortere film efter titel, år og rating
- Køre live på internettet!

**Hvad kunne du tilføje senere?**

- Favorit-funktion (localStorage)
- Flere filtre (år-range, rating-range)
- Pagination (vis 20 ad gangen)
- Dark mode toggle

Men det er for avanceret lige nu. **Hold det simpelt!**

---

## Fejlfindingstips

### Søgning virker ikke?

```javascript
// Test i konsollen:
let searchTerm = "matrix";
console.log("Søger:", searchTerm);

allMovies.forEach((movie) => {
  let title = movie.title.toLowerCase();
  console.log(title, "matches?", title.includes(searchTerm));
});
```

### Dialog åbner ikke?

```javascript
// Tjek om dialog findes
let dialog = document.querySelector("#movie-dialog");
console.log("Dialog element:", dialog);

// Tjek om showModal() er en funktion
console.log("showModal() findes?", typeof dialog.showModal);

// Prøv at åbne den manuelt
dialog.showModal();
```

### Klik-event virker ikke?

```javascript
function showMovies(movies) {
  const movieList = document.querySelector("#movie-list");

  for (const movie of movies) {
    // ... HTML creation ...

    const card = movieList.lastElementChild;
    console.log("Tilføjer click til:", card);

    card.addEventListener("click", function () {
      console.log("Clicked!", movie.title);
      showMovieDialog(movie);
    });
  }
}
```

### GitHub Pages viser ikke siden?

1. **Tjek branch**: Er "main" valgt?
2. **Tjek URL**: Korrekt `username.github.io/repo-name`?
3. **Vent**: Tag en kop kaffe - det kan tage 5 min første gang
4. **Tjek konsollen**: Fejl? CORS-problemer? (normalt ikke med GitHub Pages)
5. **Hård genindlæsning**: Windows/PC: Ctrl+Shift+R, Mac: Cmd+Shift+R

---

## Tillykke!

Du har gennemført en 4-dages JavaScript kursus!

Du kan nu:

- Manipulere DOM
- Arbejde med arrays og objects
- Hente data fra API'er
- Filtrere og søge i data
- Bygge interaktive web apps
- Udgive på internettet

**Del din app!** Send linket til venner og familie

Vi ses!
