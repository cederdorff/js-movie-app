# DAG 4 - Søgning, Details & Deployment 🚀

## 🎯 Formål

På den sidste dag tilføjer vi:

- 🔎 **Søgefelt** (find film ved titel)
- 📝 **Modal/details** (vis mere info når man klikker)
- 🌐 **GitHub Pages** (gør din app offentlig!)

**Hold det enkelt!** Basis funktionalitet der virker.

---

## Opgave 0: Start hvor vi slap

Din `app.js` fra DAG 3 skulle have:

- ✅ `fetch()` der henter data
- ✅ `showMovies()` der viser film
- ✅ Filter-knapper (Action, Drama, etc.)

**Hvis ikke - kopier fra DAG 3 først!**

---

## Opgave 1: Tilføj Søgefelt 🔍

**Formål:** Lad brugeren søge efter film ved titel.

### 1.1: Tilføj HTML

Opdatér `index.html` - tilføj søgefeltet:

```html
<header>
  <h1>🎬 Min Film-app</h1>
</header>

<!-- NYT: Søgefelt -->
<section class="search-section">
  <input type="text" id="search-input" placeholder="Søg efter film titel..." />
</section>

<!-- Eksisterende filter knapper -->
<section class="filter-section">
  <button id="show-all">Vis alle</button>
  <button id="show-action">Vis Action</button>
  <!-- ... andre knapper -->
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
async function start() {
  let response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  allMovies = await response.json();

  showMovies(allMovies);
  setupButtons();
  setupSearch(); // NYT!
}

// Ny funktion: Setup search
function setupSearch() {
  let searchInput = document.querySelector("#search-input");

  searchInput.addEventListener("input", function () {
    let searchTerm = searchInput.value.toLowerCase();

    console.log("Søger efter:", searchTerm);

    // Hvis tom - vis alle
    if (searchTerm === "") {
      showMovies(allMovies);
      return;
    }

    // Filtrer: behold kun film hvor titel inkluderer søgetekst
    let filteredMovies = allMovies.filter(function (movie) {
      let title = movie.title.toLowerCase();
      return title.includes(searchTerm);
    });

    console.log("Fandt", filteredMovies.length, "film");
    showMovies(filteredMovies);
  });
}
```

**Test det!**

- Skriv "matrix" → se Matrix film
- Skriv "dark" → se Dark Knight film
- Slet tekst → se alle film igen

### 1.4: Forstå søge-logikken

```javascript
let searchTerm = searchInput.value.toLowerCase();
```

- `searchInput.value` = hvad brugeren skrev
- `.toLowerCase()` = gør til små bogstaver ("Matrix" → "matrix")

```javascript
let filteredMovies = allMovies.filter(function (movie) {
  let title = movie.title.toLowerCase();
  return title.includes(searchTerm);
});
```

- Gør film-titlen til små bogstaver
- Check om titlen indeholder søgeteksten
- `"The Matrix".toLowerCase().includes("matrix")` → `true`

**💡 Vigtigt:**

- `"input"` event = trigger hver gang der skrives
- `.toLowerCase()` gør søgningen case-insensitive
- Tom streng `""` → vis alle film igen

---

## Opgave 2: Klik på Film → Vis Details! 📝

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
      <p>📅 ${movie.year}</p>
      <p>⭐ ${movie.rating}</p>
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

⭐ Rating: ${movie.rating}
🎭 Genre: ${movie.genre.join(", ")}
⏱️ Runtime: ${movie.runtime} min

📝 ${movie.plot}
  `);
}
```

**Test det!** Klik på en film → se details i alert.

### 2.2: Bedre løsning med HTML dialog

**Mere professionelt - brug en modal:**

#### Step 1: Tilføj dialog i HTML

Tilføj EFTER `<main>`:

```html
</main>

<!-- Modal dialog -->
<dialog id="movie-modal">
  <div class="modal-content">
    <button id="close-modal" class="close-btn">✕</button>
    <div id="modal-body">
      <!-- Details vises her -->
    </div>
  </div>
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
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

#movie-modal::backdrop {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
}

.modal-content {
  padding: 2rem;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f44336;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
}

.close-btn:hover {
  background: #d32f2f;
  transform: scale(1.1);
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
  console.log("Viser details for:", movie.title);

  // Find modal og body
  let modal = document.querySelector("#movie-modal");
  let modalBody = document.querySelector("#modal-body");

  // Lav HTML til modal
  let html = `
    <img src="${movie.image}" alt="${movie.title}">
    <h2>${movie.title}</h2>
    <p><strong>📅 År:</strong> ${movie.year}</p>
    <p><strong>⭐ Rating:</strong> ${movie.rating} / 10</p>
    <p><strong>🎭 Genre:</strong> ${movie.genre.join(", ")}</p>
    <p><strong>⏱️ Varighed:</strong> ${movie.runtime} min</p>
    <p><strong>🎬 Instruktør:</strong> ${movie.director}</p>
    <p><strong>🎭 Skuespillere:</strong> ${movie.actors}</p>
    <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid #ddd;">
    <p style="line-height: 1.6;">${movie.plot}</p>
  `;

  modalBody.innerHTML = html;

  // Åbn modalen
  modal.showModal();
}

// Luk modal når X klikkes
document.querySelector("#close-modal").addEventListener("click", function () {
  let modal = document.querySelector("#movie-modal");
  modal.close();
});

// Luk modal når man klikker udenfor
document.querySelector("#movie-modal").addEventListener("click", function (event) {
  // Hvis man klikker på selve dialogen (ikke indholdet)
  if (event.target.id === "movie-modal") {
    this.close();
  }
});
```

**Test det!**

- Klik en film → se flot modal
- Klik X eller udenfor → luk modal
- Prøv forskellige film

---

## Opgave 3: Deploy til GitHub Pages! 🌐

**Formål:** Gør din app tilgængelig på internettet!

### 3.1: Forbered dit projekt

**Check at alt virker:**

1. Søgning fungerer
2. Filter knapper fungerer
3. Modal åbner og lukker
4. Ingen fejl i Console

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

- ✅ Loader film?
- ✅ Søgning virker?
- ✅ Filter knapper virker?
- ✅ Modal åbner?

**Hvis noget ikke virker:**

- Check Console for fejl (F12)
- Check at alle filer er pushed
- Prøv hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

---

## 🎯 Udfordringer

### Udfordring 1: Søg også i genre

Lad søgningen også finde film baseret på genre:

```javascript
function setupSearch() {
  let searchInput = document.querySelector("#search-input");

  searchInput.addEventListener("input", function () {
    let searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === "") {
      showMovies(allMovies);
      return;
    }

    let filteredMovies = allMovies.filter(function (movie) {
      let title = movie.title.toLowerCase();
      let genres = movie.genre.join(" ").toLowerCase();

      // Match title ELLER genre
      return title.includes(searchTerm) || genres.includes(searchTerm);
    });

    showMovies(filteredMovies);
  });
}
```

### Udfordring 2: Kombiner søgning + filter

Hvis brugeren både søger OG klikker filter:

```javascript
// Global variable til aktiv filter
let activeFilter = null;

function setupButtons() {
  let showActionBtn = document.querySelector("#show-action");

  showActionBtn.addEventListener("click", function () {
    activeFilter = "Action";
    applyFilters();
  });

  // ... andre knapper
}

function setupSearch() {
  let searchInput = document.querySelector("#search-input");

  searchInput.addEventListener("input", function () {
    applyFilters();
  });
}

function applyFilters() {
  let searchTerm = document.querySelector("#search-input").value.toLowerCase();

  let filtered = allMovies;

  // Anvend genre filter
  if (activeFilter) {
    filtered = filtered.filter(function (movie) {
      return movie.genre.includes(activeFilter);
    });
  }

  // Anvend søgning
  if (searchTerm !== "") {
    filtered = filtered.filter(function (movie) {
      return movie.title.toLowerCase().includes(searchTerm);
    });
  }

  showMovies(filtered);
}
```

### Udfordring 3: Luk modal med ESC

```javascript
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    let modal = document.querySelector("#movie-modal");
    if (modal.open) {
      modal.close();
    }
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
  showMovies(allMovies);
  setupButtons();
  setupSearch();
}
```

---

## 📚 Hvad har du lært i dag?

✅ **Søgefunktion** med `.filter()` og `.includes()`  
✅ **Modal dialog** med `<dialog>` element  
✅ **showModal() / close()** API  
✅ **Event delegation** med dynamisk indhold  
✅ **GitHub Pages** deployment  
✅ **Kombination af funktioner** (søg + filter)

---

## 🎉 Du har nu en komplet Movie App!

**Din app kan:**

- Hente data fra et API
- Vise film med billeder
- Filtrere på genre
- Søge efter titel
- Vise details i modal
- Køre live på internettet!

**Hvad kunne du tilføje senere?**

- Favorit-funktion (localStorage)
- Sortering (rating, år, titel)
- Flere filtre (år-range, rating-range)
- Pagination (vis 20 ad gangen)
- Dark mode toggle

Men det er for avanceret lige nu. **Hold det simpelt!**

---

## 💡 Debugging Tips

### Søgning virker ikke?

```javascript
// Test i Console:
let searchTerm = "matrix";
console.log("Søger:", searchTerm);

allMovies.forEach(movie => {
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

## 🏁 Tillykke!

Du har gennemført en 4-dages JavaScript kursus! 🎊

Du kan nu:

- Manipulere DOM
- Arbejde med arrays og objects
- Hente data fra API'er
- Filtrere og søge i data
- Bygge interaktive web apps
- Deploye til internettet

**Del din app!** Send linket til venner og familie 🚀

Vi ses! 👋
