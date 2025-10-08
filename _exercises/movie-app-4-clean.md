# Session 4: Movie App - Modal Dialog Implementation 🎭

**Kompetencemål:** Implementér en modal dialog til at vise detaljerede filminformationer.

**Fra Session 3 til Session 4:**

- Session 3 sluttede med `filterMovies()` funktion og `showMovieDetails()` med `alert()`
- Nu bygger vi en rigtig modal dialog til en bedre brugeroplevelse

---

## Del 0: Forbered dit projekt til modal dialog 🎯

**Startpunkt:** Dit projekt fra Session 3 skal have:

- ✅ `filterMovies()` funktion (kombineret søg/filter/sort)
- ✅ `showMovieDetails()` funktion med `alert()`
- ✅ Keyboard support (Enter/Space)

**Sådan tjekker du dit startpunkt:**

### Verificer din app.js

**Klik på en movie card** → Skulle vise `alert()` med film detaljer.

**Din `showMovieDetails()` funktion skulle ligne:**

```javascript
// #7: Vis movie details (Session 3 version)
function showMovieDetails(movie) {
  alert(`
🎬 ${movie.title} (${movie.year})

🎭 Genre: ${movie.genre.join(", ")}
⭐ Rating: ${movie.rating}
🎥 Director: ${movie.director}

📝 ${movie.description}
  `);
}
```

**💡 Hvis ikke:** Gå tilbage til Session 3 og implementér det først!

---

## Del 1: Udvidelse af Filtrering 🔍

**Mål:** Udvid din eksisterende filtrering med **år-range** og **rating-range** filtre for at give brugerne flere muligheder.

**Metode:** Vi implementerer de 3 features separat, så du forstår hvert trin.

## Feature 1: År Range Filter 📅

### Trin 1: Tilføj år filter HTML

**1a. Tilføj år input felter til filterbar**

Find din `<div class="filterbar">` i `index.html` og tilføj EFTER genre dropdown:

```html
<!-- År range filter - TILFØJ EFTER genre dropdown -->
<div class="year-filter">
  <label>📅 År:</label>
  <input type="number" id="year-from" placeholder="Fra år" min="1900" max="2030" />
  <span>til</span>
  <input type="number" id="year-to" placeholder="Til år" min="1900" max="2030" />
</div>
```

**🧪 TEST 1a:** GEM og refresh browseren. Du skulle nu se år input felterne i din filterbar.

**1b. Tilføj CSS styling for år felter**

Tilføj til din `app.css`:

```css
/* År range filter styling */
.year-filter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.year-filter label {
  font-size: 0.875rem;
  color: var(--text-light);
  white-space: nowrap;
}

.year-filter input {
  width: 80px;
  padding: 0.5rem;
  background: var(--bg-card);
  color: var(--text-color);
  border: 1px solid var(--secondary);
  border-radius: var(--radius);
  font-size: 0.875rem;
  transition: var(--transition);
}

.year-filter input:focus {
  outline: 2px solid var(--secondary);
  border-color: var(--secondary);
}

.year-filter span {
  font-size: 0.875rem;
  color: var(--text-light);
}
```

**🧪 TEST 1b:** Refresh browseren. År felterne skulle nu være pænt stylet.

### Trin 2: Forstå Number() konvertering

**2a. Forstå problemet med input værdier**

HTML input felter giver altid **strings**, selvom de er type="number". Derfor skal vi konvertere dem til tal før vi kan sammenligne med film data.

**2b. Lær Number() - konvertering af strings til tal**

`Number()` konverterer strings til tal så vi kan sammenligne dem med film data:

```javascript
// Number() konverterer string til tal
Number("2020"); // → 2020 (heltal)
Number("8.5"); // → 8.5 (decimal)
Number(""); // → 0 (tom string = 0)
Number("abc"); // → NaN (invalid tekst)

// Default værdier med || operator
Number("") || 0; // → 0
Number("2020") || 0; // → 2020
Number("abc") || 9999; // → 9999 (hvis teksten ikke er et tal)
```

**💡 Hvad Number() gør:**

- ✅ **Konverterer strings til tal** så vi kan sammenligne
- ✅ **Tom string bliver til 0** automatisk (praktisk for filtre)
- ✅ **Håndterer både heltal og decimaler**

### Trin 3: Implementer år filter i filterMovies()

**3a. Tilføj kun år variabler med Number()**

Find din eksisterende `filterMovies()` funktion og tilføj KUN år variablerne:

```javascript
function filterMovies() {
  // Dine eksisterende variable (UÆNDRET)
  const searchValue = document.querySelector("#search-input").value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;
  const sortValue = document.querySelector("#sort-select").value;

  // NYE år variable - TILFØJ DISSE TO LINJER
  const yearFrom = Number(document.querySelector("#year-from").value) || 0;
  const yearTo = Number(document.querySelector("#year-to").value) || 9999;

  // Test med console.log
  console.log("År filter:", yearFrom, "til", yearTo);

  // Resten af din funktion UÆNDRET indtil videre
  let filteredMovies = allMovies;

  // Din eksisterende filtrering...
  // displayMovies(filteredMovies); // til sidst
}
```

**💡 Forklaring:**

- `Number("")` giver `0` automatisk, så `|| 0` er faktisk unødvendig for tom string
- Men vi bruger `|| 9999` for at sætte en høj default værdi for "til år"

**🧪 TEST 3a:**

1. GEM og refresh browseren
2. Prøv at skrive i år felterne (f.eks. "2020" til "2023")
3. Film listen skulle filtreres automatisk baseret på år
4. Prøv eksisterende filtre (søg/genre) - alt skulle virke sammen

**3b. Tilføj år filtrering logik**

Nu tilføj år filteret EFTER dine eksisterende filtre, men FØR sortering:

```javascript
// Tilføj EFTER genre filter, FØR sortering

// År range filter - TILFØJ DENNE SEKTION
if (yearFrom > 0 || yearTo < 9999) {
  console.log("Anvender år filter:", yearFrom, "-", yearTo);
  const before = filteredMovies.length;

  filteredMovies = filteredMovies.filter(movie => {
    return movie.year >= yearFrom && movie.year <= yearTo;
  });

  console.log("År filter:", before, "→", filteredMovies.length, "film");
} else {
  console.log("Ingen år filter (alle år)");
}
```

**🧪 TEST 3b:**

1. **Test tom år felter:** Brug søgning eller genre → Alle film vises
2. **Test "Fra år: 2020":** Skriv 2020 i fra-felt → Se kun nyere film
3. **Test range:** Fra: 2010, Til: 2020 → Se kun film fra dette årti
4. Prøv at kombinere med andre filtre (søg/genre)

### Trin 4: Tilføj event listeners for år filter

**4a. Tilføj kun år field event listeners**

Find din `initApp()` funktion og tilføj KUN år field listeners:

```javascript
function initApp() {
  getMovies();

  // Dine eksisterende event listeners (UÆNDRET)
  document.querySelector("#search-input").addEventListener("input", filterMovies);
  document.querySelector("#genre-select").addEventListener("change", filterMovies);
  document.querySelector("#sort-select").addEventListener("change", filterMovies);

  // NYE: Kun år felter først
  document.querySelector("#year-from").addEventListener("input", filterMovies);
  document.querySelector("#year-to").addEventListener("input", filterMovies);
}
```

**🧪 TEST 4a:** Nu skulle år felterne virke når du skriver i dem.

### Trin 5: Komplet test af år filter

**5a. Test år filter isoleret:**

1. **Ryd andre filtre** først (tom søgning, "alle genrer")
2. **Test kun år felter:**
   - "Fra år: 2015" → Se nyere film
   - "Til år: 2010" → Se ældre film
   - Fra: 2008, Til: 2012 → Se kun film fra dette interval

**🧪 TEST 5a:** År filter skulle nu virke perfekt alene og kombineret med andre filtre.

---

## Feature 2: Rating Range Filter ⭐

### Trin 6: Tilføj rating filter HTML

**6a. Tilføj rating input felter**

Tilføj EFTER år filter i din `<div class="filterbar">`:

```html
<!-- Rating range filter - TILFØJ EFTER år filter -->
<div class="rating-filter">
  <label>⭐ Rating:</label>
  <input type="number" id="rating-from" placeholder="Fra" min="0" max="10" step="0.1" />
  <span>til</span>
  <input type="number" id="rating-to" placeholder="Til" min="0" max="10" step="0.1" />
</div>
```

**6b. Tilføj CSS for rating felter**

Tilføj til din `app.css`:

```css
/* Rating range filter styling */
.rating-filter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rating-filter label {
  font-size: 0.875rem;
  color: var(--text-light);
  white-space: nowrap;
}

.rating-filter input {
  width: 80px;
  padding: 0.5rem;
  background: var(--bg-card);
  color: var(--text-color);
}

.rating-filter span {
  font-size: 0.875rem;
  color: var(--text-light);
}
```

**🧪 TEST 6b:** Refresh browseren. Du skulle nu se både år og rating filtre.

### Trin 7: Number() håndterer både år og rating!

**7a. Number() virker også til rating**

Vi kan bruge den samme `Number()` funktion til rating som vi brugte til år:

```javascript
// Number() konverterer rating værdier
Number("8.5"); // → 8.5 (decimal rating)
Number("8"); // → 8 (heltal rating)
Number(""); // → 0 (tom = 0)

// Default værdier for rating (0 til 10)
Number("") || 0; // → 0
Number("") || 10; // → 10
```

**💡 Praktisk:** Vi bruger samme konverteringsmetode (`Number()`) til både år og rating!

### Trin 8: Implementer rating filter

**8a. Tilføj rating variabler med Number()**

Tilføj rating variablerne til din `filterMovies()` funktion EFTER år variablerne:

```javascript
// NYE rating variable - TILFØJ EFTER år variablerne
const ratingFrom = Number(document.querySelector("#rating-from").value) || 0;
const ratingTo = Number(document.querySelector("#rating-to").value) || 10;

console.log("Rating filter:", ratingFrom, "til", ratingTo);
```

**8b. Tilføj rating filtrering logik**

Tilføj EFTER år filteret:

```javascript
// Rating range filter - TILFØJ EFTER år filter
if (ratingFrom > 0 || ratingTo < 10) {
  console.log("Anvender rating filter:", ratingFrom, "-", ratingTo);
  const before = filteredMovies.length;

  filteredMovies = filteredMovies.filter(movie => {
    return movie.rating >= ratingFrom && movie.rating <= ratingTo;
  });

  console.log("Rating filter:", before, "→", filteredMovies.length, "film");
} else {
  console.log("Ingen rating filter (alle ratings)");
}
```

### Trin 9: Tilføj event listeners for rating

**9a. Tilføj rating field listeners**

Tilføj til din `initApp()` funktion EFTER år listeners:

```javascript
// Tilføj EFTER år field listeners
document.querySelector("#rating-from").addEventListener("input", filterMovies);
document.querySelector("#rating-to").addEventListener("input", filterMovies);
```

**🧪 TEST 9a:** Nu skulle rating felterne også virke.

### Trin 10: Komplet test af rating filter

**10a. Test rating filter:**

1. **Ryd andre filtre** først
2. **Test kun rating:**
   - "Fra rating: 8.0" → Se højt ratede film
   - "Til rating: 7.0" → Se lavt ratede film
   - Fra: 7.5, Til: 9.0 → Se mellemgode film

---

## Feature 3: Clear All Filters 🗑️

### Trin 11: Tilføj clear button HTML

**11a. Tilføj clear knap**

Tilføj TIL SIDST i din `<div class="filterbar">`:

```html
<!-- Clear filters knap - TILFØJ TIL SIDST -->
<button id="clear-filters" class="clear-btn">🗑️ Ryd alle filtre</button>
```

**11b. Tilføj CSS for clear knap**

Tilføj til din `app.css`:

```css
/* Clear button styling */
.clear-btn {
  background: var(--error);
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 0.875rem;
  transition: var(--transition);
  box-shadow: var(--shadow);
}

.clear-btn:hover {
  background: var(--error);
  opacity: 0.9;
  transform: translateY(-2px);
}
```

**🧪 TEST 11b:** Du skulle nu se clear knappen. Den virker endnu ikke.

### Trin 12: Implementer clearAllFilters() funktion

**12a. Implementer clear funktion**

Tilføj denne nye funktion til din `app.js`:

```javascript
// Ny funktion: Ryd alle filtre - TILFØJ DENNE
function clearAllFilters() {
  console.log("🗑️ Rydder alle filtre");

  // Ryd search og dropdown felter
  document.querySelector("#search-input").value = "";
  document.querySelector("#genre-select").value = "all";
  document.querySelector("#sort-select").value = "none";

  // Ryd de nye range felter
  document.querySelector("#year-from").value = "";
  document.querySelector("#year-to").value = "";
  document.querySelector("#rating-from").value = "";
  document.querySelector("#rating-to").value = "";

  // Kør filtrering igen (viser alle film)
  filterMovies();
}
```

**🧪 TEST 12a:** GEM og refresh browseren. Klik på "Clear Filters" knappen - alle felter skulle ryddes og alle film vises.

### Trin 13: Tilføj event listener for clear button

**13a. Tilføj clear button event listener**

Tilføj til din `initApp()` funktion TIL SIDST:

```javascript
// Clear filters knap - TILFØJ TIL SIDST
document.querySelector("#clear-filters").addEventListener("click", clearAllFilters);
```

**🧪 TEST 13a:** GEM og refresh. Clear knappen skulle nu virke når du klikker på den.

### Trin 14: Komplet test af alle features

**14a. Test hele systemet:**

1. **Set flere filtre:**

   - Søg: "a"
   - Genre: "Action"
   - År: 2010-2020
   - Rating: 7.0-10
   - Sort: "rating"

2. **Klik clear:** Alt nulstilles og alle film vises

3. **Test edge cases:**
   - Tomme felter → Se alle film
   - Kun et felt udfyldt → Se partiel filtrering
   - Ulogiske ranges (Fra: 2020, Til: 2010) → Ingen film

**🎯 Komplet funktionalitet opnået!**

---

## Del 2: Modal Dialog HTML og CSS 🎭

**Formål:** Nu hvor du har en komplet filtreringsapp, lad os bygge en professionel modal dialog!

**Fra alert() til rigtig modal:** Vi erstatter den kedelige `alert()` funktion med en moderne, responsiv modal dialog der viser film information smukt.

### Trin 1: Tilføj modal HTML struktur

**1a. Tilføj modal HTML til body**

Tilføj EFTER `</main>` tag og FØR `<script>` tag i din `index.html`:

```html
<!-- Modal Dialog - TILFØJ EFTER </main> og FØR <script> -->
<dialog id="movie-modal" class="modal">
  <form method="dialog" class="modal-content">
    <header class="modal-header">
      <h2 id="modal-title">Movie Title</h2>
      <button type="submit" class="modal-close" aria-label="Close modal">✕</button>
    </header>

    <div class="modal-body">
      <div class="modal-poster">
        <img id="modal-image" src="" alt="" />
      </div>

      <div class="modal-info">
        <div class="modal-meta">
          <span id="modal-year" class="meta-item">Year</span>
          <span id="modal-rating" class="meta-item">⭐ Rating</span>
        </div>

        <div class="modal-genre"><strong>Genre:</strong> <span id="modal-genre-text">Genres</span></div>

        <div class="modal-director"><strong>Director:</strong> <span id="modal-director-text">Director</span></div>

        <div class="modal-actors"><strong>Actors:</strong> <span id="modal-actors-text">Actors</span></div>

        <div class="modal-description">
          <strong>Description:</strong>
          <p id="modal-description-text">Movie description</p>
        </div>
      </div>
    </div>
  </form>
</dialog>
```

**💡 Strukturen:**

- `<dialog>` er moderne HTML5 modal element
- `<form method="dialog">` giver automatisk close funktionalitet
- Modal header med titel og close knap
- Modal body med poster og film information

### Trin 2: Tilføj modal CSS styling

**2a. Tilføj grundlæggende modal styling**

Tilføj til din `app.css`:

```css
/* =========================
   MODAL DIALOG STYLING
   ========================= */

/* Modal backdrop */
.modal {
  padding: 0;
  border: none;
  border-radius: var(--radius);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 90vw;
  max-height: 90vh;
  background: transparent;
}

/* Modal backdrop når åben */
.modal::backdrop {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
}

/* Modal content container */
.modal-content {
  background: var(--bg-card);
  color: var(--text-color);
  padding: 0;
  margin: 0;
  border-radius: var(--radius);
  overflow: hidden;
  min-width: 600px;
  max-width: 800px;
}

/* Modal header */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: var(--primary);
  color: white;
  border-bottom: 2px solid var(--secondary);
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

/* Close button */
.modal-close {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

/* Modal body */
.modal-body {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  padding: 2rem;
}

/* Modal poster */
.modal-poster img {
  width: 100%;
  height: auto;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

/* Modal information */
.modal-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Meta information (year, rating) */
.modal-meta {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
}

.meta-item {
  background: var(--secondary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 0.9rem;
}

/* Info sections */
.modal-genre,
.modal-director,
.modal-actors {
  font-size: 1rem;
  line-height: 1.5;
}

.modal-genre strong,
.modal-director strong,
.modal-actors strong {
  color: var(--primary);
  display: inline-block;
  min-width: 80px;
}

/* Description */
.modal-description {
  margin-top: 1rem;
}

.modal-description strong {
  color: var(--primary);
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.modal-description p {
  line-height: 1.6;
  color: var(--text-light);
  margin: 0;
  font-size: 1rem;
}

/* Responsive modal */
@media (max-width: 768px) {
  .modal-content {
    min-width: auto;
    width: 95vw;
  }

  .modal-body {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .modal-poster {
    text-align: center;
  }

  .modal-poster img {
    max-width: 250px;
  }

  .modal-header {
    padding: 1rem 1.5rem;
  }

  .modal-header h2 {
    font-size: 1.3rem;
  }
}
```

**🧪 TEST 2a:** GEM og refresh. Modal er nu stylet men kan endnu ikke åbnes.

### Trin 3: Implementer modal JavaScript

**3a. Opret showMovieModal() funktion**

Erstat din eksisterende `showMovieDetails()` funktion med denne:

```javascript
// #7: Vis movie details i modal (erstatter alert)
function showMovieDetails(movie) {
  showMovieModal(movie);
}

// NY: Funktion til at vise modal med movie data
function showMovieModal(movie) {
  console.log("🎭 Åbner modal for:", movie.title);

  // Hent modal element
  const modal = document.querySelector("#movie-modal");

  // Udfyld modal med movie data
  document.querySelector("#modal-title").textContent = movie.title;
  document.querySelector("#modal-image").src = movie.image;
  document.querySelector("#modal-image").alt = `Poster of ${movie.title}`;
  document.querySelector("#modal-year").textContent = movie.year;
  document.querySelector("#modal-rating").textContent = `⭐ ${movie.rating}`;
  document.querySelector("#modal-genre-text").textContent = movie.genre.join(", ");
  document.querySelector("#modal-director-text").textContent = movie.director;
  document.querySelector("#modal-actors-text").textContent = movie.actors.join(", ");
  document.querySelector("#modal-description-text").textContent = movie.description;

  // Åbn modal
  modal.showModal();
}
```

**3b. Test modal funktionalitet**

Med `<form method="dialog">` får vi automatisk modal lukning! Test det:

1. **GEM** `app.js` og refresh browseren
2. **Test modal** ved at klikke på en film card
3. **Test automatisk lukning**:
   - **Tryk Escape** → Modal lukker automatisk
   - **Klik på X knappen** → Modal lukker automatisk
   - **Klik udenfor modal** → Modal lukker automatisk (i de fleste browsere)

**🎯 Modal Implementation Færdig!**

Du har nu en moderne, professionel modal dialog der:

- ✅ Viser alle film detaljer smukt formateret
- ✅ Er responsive (fungerer på mobil og desktop)
- ✅ Har automatisk close funktionalitet
- ✅ Følger moderne web standards (HTML5 dialog element)
- ✅ Har accessibility support built-in

### Trin 4: Test modal direkte

**4a. Test modal direkte**

1. **GEM** `app.js` og refresh browseren
2. **Test den nye modal** ved at klikke på en film card
3. **Test automatisk lukning**:
   - **Tryk Escape** → Modal lukker
   - **Klik X knappen** → Modal lukker
   - **Klik udenfor modal** → Modal lukker

**💡 Dialog element fordele:**

- Automatisk focus management
- Escape key support
- Backdrop click support (browser-afhængig)
- Screen reader support
- Close button fungerer automatisk (form submission)
- Accessibility er built-in

**🎯 Tillykke!** Du har nu:

1. ✅ **Udvidet filtrering** med år og rating ranges
2. ✅ **Clear all filters** funktionalitet
3. ✅ **Professionel modal dialog** der erstatter alert()
4. ✅ **Moderne HTML5 standards** (dialog element)
5. ✅ **Responsive design** (mobil + desktop)
6. ✅ **Accessibility** (keyboard navigation, screen readers)

**🚀 Din Movie App er nu komplet!** Fra filtrering til modal - alt fungerer professionelt og moderne.

---

## 🎉 Session 4 Sammenfatning

### Du har lært:

**🔍 Udvidet Filtrering:**

- Number() konvertering af input værdier
- Range filtrering (år og rating)
- Kombineret filtrering logik
- Clear all functionality

**🎭 Modal Dialog Implementation:**

- HTML5 `<dialog>` element
- Modern modal CSS styling
- JavaScript modal management
- Automatisk close funktionalitet
- Responsive modal design

**💻 Moderne Web Development:**

- Semantic HTML strukturer
- CSS Grid og Flexbox layouts
- Event handling best practices
- User experience forbedringer
- Accessibility considerations

### Næste skridt:

Din movie app har nu professionel kvalitet! Du kan udvide den med:

- Favorit filmer funktionalitet
- Film søgning via eksterne APIs
- Bruger reviews og ratings
- Film trailers integration
- Avanceret sortering og gruppering

**🎓 Fantastisk arbejde!** Du behersker nu moderne JavaScript web development! 🚀
