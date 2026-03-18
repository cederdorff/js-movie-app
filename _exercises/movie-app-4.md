# DAG 4 - Søgning, Genre, Sortering, Detaljer & Deployment

## Formål

På den sidste dag tilføjer vi:

- **Søgefelt** (find film ved titel)
- **Sortering** (titel, år og rating)
- **Modal/detaljer** (vis mere info når man klikker)
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
  <p class="subtitle">Search, genre og sortering</p>
</header>

<section class="controls">
  <div class="control-group grow">
    <label for="search-input">Søg på titel</label>
    <input type="text" id="search-input" placeholder="Søg efter film titel..." />
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
      <option value="year">År (nyeste først)</option>
      <option value="rating">Rating (højeste først)</option>
    </select>
  </div>
</section>

<main>
  <div id="movie-list"></div>
</main>
```

### 1.2: Tilføj CSS

Tilføj i `app.css`:

```css
.movie-card {
  background: linear-gradient(180deg, #434b54 0%, #3f464e 100%);
  border: 1px solid rgba(143, 178, 199, 0.2);
  border-radius: 12px;
  overflow: hidden;
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

.rating-row {
  margin-top: 0.52rem;
  color: #e8f2fa;
}

#movie-modal {
  width: min(92vw, 920px);
  background: #454b53;
}

#modal-body {
  display: grid;
  grid-template-columns: 210px 1fr;
  gap: 1rem;
}

.modal-description {
  padding-left: 0.72rem;
  border-left: 3px solid rgba(168, 208, 232, 0.75);
  font-style: italic;
}
```

### 1.3: Tilføj JavaScript

**Opdatér `app.js` - tilføj søge-logik:**

```javascript
const MOVIES_URL = "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  document.querySelector("#search-input").addEventListener("input", applyFilters);
  document.querySelector("#genre-select").addEventListener("change", applyFilters);
  document.querySelector("#sort-select").addEventListener("change", applyFilters);

  getMovies();
}

async function getMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  populateGenreSelect();
  applyFilters();
}

function applyFilters() {
  const searchTerm = document.querySelector("#search-input").value.trim().toLowerCase();
  const selectedGenre = document.querySelector("#genre-select").value;
  const sortOption = document.querySelector("#sort-select").value;

  let filteredMovies = allMovies.filter(function (movie) {
    const matchesTitle = movie.title.toLowerCase().includes(searchTerm);
    const matchesGenre = selectedGenre === "all" || movie.genre.includes(selectedGenre);
    return matchesTitle && matchesGenre;
  });

  filteredMovies = sortMovies(filteredMovies, sortOption);

  showMovies(filteredMovies);
}

function sortMovies(movies, sortOption) {
  const sortedMovies = [...movies];

  if (sortOption === "title") {
    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === "year") {
    sortedMovies.sort((a, b) => b.year - a.year);
  } else if (sortOption === "rating") {
    sortedMovies.sort((a, b) => b.rating - a.rating);
  }

  return sortedMovies;
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

**Formål:** Når man klikker en film → vis mere info i en modal.

### 2.1: Cardvisning der matcher løsningen

Opdatér `showMovies()`:

```javascript
function showMovies(movies) {
  const movieList = document.querySelector("#movie-list");
  const movieCount = document.querySelector("#movie-count");

  movieList.innerHTML = "";
  movieCount.textContent = `Viser ${movies.length} film`;

  for (const movie of movies) {
    const movieCard = `
      <article class="movie-card" tabindex="0">
        <img src="${movie.image}" alt="Poster af ${movie.title}" class="movie-poster" />
        <div class="movie-info">
          <div class="title-row">
            <h2>${movie.title}</h2>
            <span class="year-badge">(${movie.year})</span>
          </div>
          <p class="genre">${movie.genre.join(", ")}</p>
          <p class="rating-row"><span class="rating-star">★</span> <strong>${movie.rating}</strong></p>
          <p class="director-line"><strong>Director:</strong> ${movie.director}</p>
        </div>
      </article>
    `;

    movieList.insertAdjacentHTML("beforeend", movieCard);

    const newCard = movieList.lastElementChild;
    newCard.addEventListener("click", function () {
      showDetails(movie);
    });
  }
}
```

**Test det!** Du skal nu have cards med badge, genre, rating og director-linje.

### 2.2: Bedre løsning med HTML dialog

**Mere professionelt - brug en modal:**

#### Step 1: Tilføj dialog i HTML

Tilføj EFTER `<main>`:

```html
</main>

<!-- Modal dialog -->
<dialog id="movie-modal">
  <form method="dialog" class="modal-content">
    <button class="close-btn" value="close">Luk</button>
    <div id="modal-body">
      <!-- Detaljer vises her -->
    </div>
  </form>
</dialog>
```

#### Step 2: Tilføj CSS

```css
#movie-modal {
  border-radius: 16px;
  width: min(92vw, 920px);
  background: #454b53;
}

#modal-body {
  display: grid;
  grid-template-columns: 210px 1fr;
  gap: 1rem;
}

.modal-title-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.modal-description {
  padding-left: 0.72rem;
  border-left: 3px solid rgba(168, 208, 232, 0.75);
  font-style: italic;
}
```

#### Step 3: Opdatér JavaScript

```javascript
function showDetails(movie) {
  const modal = document.querySelector("#movie-modal");
  const modalBody = document.querySelector("#modal-body");

  modalBody.innerHTML = `
    <img src="${movie.image}" alt="Poster af ${movie.title}" class="modal-poster" />
    <div class="modal-title-row">
      <h2>${movie.title}</h2>
      <span class="year-badge">(${movie.year})</span>
    </div>
    <p class="genre">${movie.genre.join(", ")}</p>
    <p class="rating-row"><span class="rating-star">★</span> <strong>${movie.rating}</strong></p>
    <p><strong>Director:</strong> ${movie.director}</p>
    <p><strong>Actors:</strong> ${movie.actors.join(", ")}</p>
    <p class="modal-description">${movie.description}</p>
  `;

  modal.showModal();
}
```

**Test det!**

- Klik en film → se flot modal
- Klik "Luk" eller tryk ESC -> luk modal
- Prøv forskellige film

---

## Opgave 3: Deploy Til GitHub Pages

**Formål:** Gør din app tilgængelig på internettet!

### 3.1: Forbered dit projekt

**Check at alt virker:**

1. Søgning fungerer
2. Genre-filter fungerer
3. Sortering fungerer
4. Modal åbner og lukker
5. Ingen fejl i Console

### 3.2: Push til GitHub

**Step 1: Stage alle filer**

```bash
git add .
```

**Step 2: Commit**

```bash
git commit -m "Færdig movie app med søgning og modal"
```

**Step 3: Push**

```bash
git push origin main
```

### 3.3: Aktiver GitHub Pages

1. Gå til dit repo på GitHub.com
2. Klik **Settings** (øverst)
3. Scroll til **Pages** (venstre menu)
4. Under **Source**:

- Vælg branch: `main`
- Vælg folder: `/ (root)`

5. Klik **Save**

**Vent 1-2 minutter** → Din side er live!

URL: `https://[dit-brugernavn].github.io/[repo-navn]/`

### 3.4: Test din live site

Åbn URL'en i en ny tab og test:

- Loader film?
- Søgning virker?
- Genre-filter virker?
- Sortering virker?
- Modal åbner?

**Hvis noget ikke virker:**

- Check Console for fejl (F12)
- Check at alle filer er pushed
- Prøv hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

---

## Udfordringer

### Udfordring 1: Søg også i genre

Lad søgningen også finde film baseret på genre:

```javascript
function applyFilters() {
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

Grundlogikken i `applyFilters()` er:

```javascript
if (sortOption === "title") {
  filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
} else if (sortOption === "year") {
  filteredMovies.sort((a, b) => b.year - a.year);
} else if (sortOption === "rating") {
  filteredMovies.sort((a, b) => b.rating - a.rating);
}
```

### Udfordring 3: Luk modal med klik på backdrop (valgfri)

```javascript
document.querySelector("#movie-modal").addEventListener("click", function (event) {
  if (event.target.id === "movie-modal") {
    this.close();
  }
});
```

### Udfordring 4: Tilføj loading state

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
  applyFilters();
}
```

---

## Hvad har du lært i dag?

- **Søgefunktion** med `.filter()` og `.includes()`
- **Sortering** med `.sort()`
- **Modal dialog** med `<dialog>` element
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
- Vise detaljer i modal
- Sortere film efter titel, år og rating
- Køre live på internettet!

**Hvad kunne du tilføje senere?**

- Favorit-funktion (localStorage)
- Flere filtre (år-range, rating-range)
- Pagination (vis 20 ad gangen)
- Dark mode toggle

Men det er for avanceret lige nu. **Hold det simpelt!**

---

## Debugging Tips

### Søgning virker ikke?

```javascript
// Test i Console:
let searchTerm = "matrix";
console.log("Søger:", searchTerm);

allMovies.forEach((movie) => {
  let title = movie.title.toLowerCase();
  console.log(title, "matches?", title.includes(searchTerm));
});
```

### Modal åbner ikke?

```javascript
// Check om modal findes
let modal = document.querySelector("#movie-modal");
console.log("Modal element:", modal);

// Check om showModal() er en funktion
console.log("showModal() findes?", typeof modal.showModal);

// Prøv at åbne den manuelt
modal.showModal();
```

### Click event virker ikke?

```javascript
function showMovies(movies) {
  const movieList = document.querySelector("#movie-list");

  for (const movie of movies) {
    // ... HTML creation ...

    const card = movieList.lastElementChild;
    console.log("Tilføjer click til:", card);

    card.addEventListener("click", function () {
      console.log("Clicked!", movie.title);
      showDetails(movie);
    });
  }
}
```

### GitHub Pages viser ikke siden?

1. **Check branch**: Er "main" valgt?
2. **Check URL**: Korrekt `username.github.io/repo-name`?
3. **Wait**: Tag en kop kaffe - det kan tage 5 min første gang
4. **Check Console**: Fejl? CORS issues? (normalt ikke med GitHub Pages)
5. **Hard refresh**: Cmd+Shift+R / Ctrl+Shift+R

---

## Tillykke!

Du har gennemført en 4-dages JavaScript kursus!

Du kan nu:

- Manipulere DOM
- Arbejde med arrays og objects
- Hente data fra API'er
- Filtrere og søge i data
- Bygge interaktive web apps
- Deploye til internettet

**Del din app!** Send linket til venner og familie

Vi ses!
