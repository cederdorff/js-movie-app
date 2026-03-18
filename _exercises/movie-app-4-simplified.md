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
  <h1>Min Film-app</h1>
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
.search-section {
  max-width: 600px;
  margin: 2rem auto;
  padding: 0 2rem;
}

.search-section input {
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border: 2px solid #667eea;
  border-radius: 50px;
  outline: none;
  transition: all 0.3s;
  box-sizing: border-box;
}

.search-section input:focus {
  border-color: #764ba2;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
}
```

### 1.3: Tilføj JavaScript

**Opdatér `app.js` - tilføj søge-logik:**

```javascript
const MOVIES_URL = "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";

async function start() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  setupFilters();
  populateGenreSelect();
  applyFilters();
}

function setupFilters() {
  document.querySelector("#search-input").addEventListener("input", applyFilters);
  document.querySelector("#genre-select").addEventListener("change", applyFilters);
  document.querySelector("#sort-select").addEventListener("change", applyFilters);
}

function applyFilters() {
  const searchTerm = document.querySelector("#search-input").value.toLowerCase();
  const selectedGenre = document.querySelector("#genre-select").value;
  const sortOption = document.querySelector("#sort-select").value;

  let filteredMovies = allMovies.filter(function (movie) {
    const matchesTitle = movie.title.toLowerCase().includes(searchTerm);
    const matchesGenre = selectedGenre === "all" || movie.genre.includes(selectedGenre);
    return matchesTitle && matchesGenre;
  });

  if (sortOption === "title") {
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === "year") {
    filteredMovies.sort((a, b) => b.year - a.year);
  } else if (sortOption === "rating") {
    filteredMovies.sort((a, b) => b.rating - a.rating);
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

**Formål:** Når man klikker en film → vis mere info i en modal.

### 2.1: Simpel løsning med `alert()`

**Start simpelt - brug `alert()` først:**

Opdatér `showMovie()` funktionen:

```javascript
function showMovie(movie) {
  let movieList = document.querySelector("#movie-list");

  let html = `
    <div class="movie-card" data-id="${movie.id}">
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>Ar: ${movie.year}</p>
      <p>Rating: ${movie.rating}</p>
      <p style="font-size: 0.85rem; color: #999;">${movie.genre.join(", ")}</p>
    </div>
  `;

  movieList.insertAdjacentHTML("beforeend", html);

  // Find det kort vi lige lavede
  let card = movieList.lastElementChild;

  // Tilføj click event
  card.addEventListener("click", function () {
    showDetails(movie);
  });
}

function showDetails(movie) {
  // Simpel alert version
  alert(`
${movie.title} (${movie.year})

Rating: ${movie.rating}
Genre: ${movie.genre.join(", ")}
Instruktor: ${movie.director}

 ${movie.description}
  `);
}
```

**Test det!** Klik på en film → se detaljer i alert.

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
/* Modal styling */
#movie-modal {
  border: none;
  border-radius: 20px;
  padding: 0;
  width: 90%;
  max-width: 600px;
  max-height: min(88vh, 900px);
  margin: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

#movie-modal::backdrop {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
}

.modal-content {
  padding: 2rem;
  position: relative;
  overflow-y: auto;
  max-height: min(88vh, 900px);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #27435a;
  color: white;
  border: none;
  height: 38px;
  padding: 0 0.9rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.close-btn:hover {
  background: #1b3143;
}

#modal-body img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
}

#modal-body h2 {
  margin-top: 0;
  color: #667eea;
}
```

#### Step 3: Opdatér JavaScript

```javascript
function showDetails(movie) {
  console.log("Viser detaljer for:", movie.title);

  // Find modal og body
  let modal = document.querySelector("#movie-modal");
  let modalBody = document.querySelector("#modal-body");

  // Lav HTML til modal
  let html = `
    <img src="${movie.image}" alt="${movie.title}">
    <h2>${movie.title}</h2>
    <p><strong>Ar:</strong> ${movie.year}</p>
    <p><strong>Rating:</strong> ${movie.rating} / 10</p>
    <p><strong>Genre:</strong> ${movie.genre.join(", ")}</p>
    <p><strong>Instruktor:</strong> ${movie.director}</p>
    <p><strong>Skuespillere:</strong> ${movie.actors.join(", ")}</p>
    <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid #ddd;">
    <p style="line-height: 1.6;">${movie.description}</p>
  `;

  modalBody.innerHTML = html;

  // Åbn modalen
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
git push origin simplified-version
```

### 3.3: Aktiver GitHub Pages

1. Gå til dit repo på GitHub.com
2. Klik **Settings** (øverst)
3. Scroll til **Pages** (venstre menu)
4. Under **Source**:
   - Vælg branch: `simplified-version`
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
function showMovie(movie) {
  // ... HTML creation ...

  let card = movieList.lastElementChild;
  console.log("Tilføjer click til:", card);

  card.addEventListener("click", function () {
    console.log("Clicked!", movie.title);
    showDetails(movie);
  });
}
```

### GitHub Pages viser ikke siden?

1. **Check branch**: Er "simplified-version" valgt?
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
