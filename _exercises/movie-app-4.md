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

**Fra Session 3:** Du har allerede basis filtrering (søg, genre, sortering). Nu tilføjer vi mere avancerede filtre **én ad gangen**.

---

## Feature 1: År Range Filter 📅

### Trin 1: Tilføj år filter HTML

**1a. Tilføj kun år filter HTML**

Find din `.filterbar` i `index.html` og tilføj KUN år filteret:

```html
<!-- År range filter - TILFØJ KUN DENNE -->
<div class="year-filter">
  <label>📅 År:</label>
  <input type="number" id="year-from" placeholder="Fra år" min="1900" max="2024" />
  <span>til</span>
  <input type="number" id="year-to" placeholder="Til år" min="1900" max="2024" />
</div>
```

**🧪 TEST 1a:** GEM og refresh browseren. Du skulle nu se år input felterne i din filterbar.

**1b. Tilføj CSS for år filter**

Tilføj denne CSS til din `app.css`:

```css
/* År filter styling */
.year-filter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.year-filter input {
  width: 80px;
  padding: 0.5rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-card);
  color: var(--text-color);
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

  // NYE år variable - TILFØJ KUN DISSE TO LINJER
  const yearFrom = Number(document.querySelector("#year-from").value) || 0;
  const yearTo = Number(document.querySelector("#year-to").value) || 9999;

  // Test med console.log
  console.log("År filter:", yearFrom, "til", yearTo);

  // Resten af din funktion UÆNDRET indtil videre
  let filteredMovies = allMovies;

  // Din eksisterende filtrering (søgning og genre)...
  // displayMovies(filteredMovies); // til sidst
}
```

**💡 Bemærk:**

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

  // NYE: Kun år felter
  document.querySelector("#year-from").addEventListener("input", filterMovies);
  document.querySelector("#year-to").addEventListener("input", filterMovies);
}
```

**🧪 TEST 4a:** Nu skulle år felterne virke når du skriver i dem.

### Trin 5: Komplet test af år filter

**5a. Test år filter omfattende:**

1. **Test tomme felter:**
   - Begge tomme → Se alle film (0-9999)
2. **Test kun "Fra år":**
   - Fra: 2020 → Se film fra 2020 og frem
3. **Test kun "Til år":**
   - Til: 2015 → Se film til og med 2015
4. **Test range:**
   - Fra: 2010, Til: 2020 → Se kun film fra dette årti
5. **Test kombinationer:**
   - Søg: "the" + Fra år: 2015 → Se "The" film fra 2015+
   - Genre: "Action" + År: 2010-2020 → Se Action film fra årtiet

**🎯 År filter er nu komplet!** Før du går videre, sørg for at år filteret virker perfekt.

---

## Feature 2: Rating Range Filter ⭐

### Trin 6: Tilføj rating filter HTML

**6a. Tilføj rating filter HTML**

Tilføj nu rating filteret til din `.filterbar` EFTER år filteret:

```html
<!-- Rating range filter - TILFØJ EFTER år filter -->
<div class="rating-filter">
  <label>⭐ Rating:</label>
  <input type="number" id="rating-from" placeholder="Fra" min="0" max="10" step="0.1" />
  <span>til</span>
  <input type="number" id="rating-to" placeholder="Til" min="0" max="10" step="0.1" />
</div>
```

**6b. Tilføj CSS for rating filter**

Tilføj til din CSS:

```css
/* Rating filter styling */
.rating-filter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rating-filter input {
  width: 80px;
  padding: 0.5rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-card);
  color: var(--text-color);
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

**💡 Bemærk:**

- `Number("")` giver `0`, så `|| 0` er teknisk set unødvendig for "fra" rating
- Men vi bruger `|| 10` for at sætte max rating som default for "til" rating

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

**9a. Tilføj rating field event listeners**

Tilføj til din `initApp()` funktion EFTER år listeners:

```javascript
// Tilføj EFTER år listeners
document.querySelector("#rating-from").addEventListener("input", filterMovies);
document.querySelector("#rating-to").addEventListener("input", filterMovies);
```

**🧪 TEST 9a:** Nu skulle rating felterne også virke.

### Trin 10: Komplet test af rating filter

**10a. Test rating filter omfattende:**

1. **Test kun "Fra rating":**
   - Fra: 8.0 → Se kun højt ratede film
2. **Test kun "Til rating":**
   - Til: 7.5 → Se film med max 7.5 rating
3. **Test range:**
   - Fra: 7.0, Til: 9.0 → Se film i dette interval
4. **Test kombinationer:**
   - År: 2020+ OG Rating: 8.0+ → Se nyere, højt ratede film
   - Genre: "Action" + Rating: 8.0-10 → Se top Action film

**🎯 Rating filter er nu komplet!**

---

## Feature 3: Clear All Filters 🗑️

### Trin 11: Tilføj clear button HTML

**11a. Tilføj clear filters knap**

Tilføj clear knappen til din `.filterbar` EFTER rating filteret:

```html
<!-- Clear filters knap - TILFØJ TIL SIDST -->
<button id="clear-filters">🗑️ Ryd alle filtre</button>
```

**11b. Tilføj CSS for clear knap**

```css
#clear-filters {
  padding: 0.75rem 1rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  font-weight: 500;
}

#clear-filters:hover {
  background: var(--accent-hover);
}
```

**🧪 TEST 11b:** Du skulle nu se clear knappen. Den virker endnu ikke.

### Trin 12: Implementer clearAllFilters() funktion

**12a. Tilføj clear funktion**

Tilføj denne nye funktion til din `app.js`:

```javascript
// Ny funktion: Ryd alle filtre - TILFØJ DENNE
function clearAllFilters() {
  console.log("🗑️ Rydder alle filtre");

  // Ryd søgning og dropdown felter
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

**3a. Først tilføj kun år variabler**

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

**🧪 TEST 3a:**

1. GEM og refresh browseren
2. Prøv at skrive i år felterne (f.eks. "2020" til "2023")
3. Film listen skulle filtreres automatisk baseret på år
4. Prøv eksisterende filtre (søg/genre) - alt skulle virke sammen

**3b. Tilføj år filtrering logik**

Nu tilføj EFTER dine eksisterende filtre, men FØR sortering:

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

### Trin 4: Tilføj rating filtrering

**4a. Tilføj rating variabler**

Tilføj rating variablerne efter år variablerne:

```javascript
// NYE rating variable - TILFØJ EFTER år variablerne
const ratingFrom = Number(document.querySelector("#rating-from").value) || 0;
const ratingTo = Number(document.querySelector("#rating-to").value) || 10;

console.log("Rating filter:", ratingFrom, "til", ratingTo);
```

**4b. Tilføj rating filtrering logik**

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

**🧪 TEST 4b:**

1. **Test "Fra rating: 8.0":** Se kun højt ratede film
2. **Test range:** Fra: 7.0, Til: 9.0 → Se film i dette interval
3. **Test kombination:** År 2020+ OG rating 8.0+ → Se nyere, højt ratede film

### Trin 5: Tilføj clearAllFilters() funktion

**5a. Implementer clear funktion step-by-step**

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

**🧪 TEST 5a:** GEM og refresh browseren. Klik på "Clear Filters" knappen - alle felter skulle ryddes og alle film vises.

### Trin 6: Tilføj event listeners step-by-step

**6a. Først kun år field listeners**

Find din `initApp()` funktion og tilføj KUN år field listeners først:

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

**🧪 TEST 6a:** Nu skulle år felterne virke når du skriver i dem.

**6b. Tilføj rating field listeners**

Tilføj rating event listeners:

```javascript
// Tilføj EFTER år listeners
document.querySelector("#rating-from").addEventListener("input", filterMovies);
document.querySelector("#rating-to").addEventListener("input", filterMovies);
```

**🧪 TEST 6b:** Nu skulle rating felterne også virke.

**6c. Tilføj clear button listener**

Tilføj clear knap event listener:

```javascript
// Tilføj til sidst
document.querySelector("#clear-filters").addEventListener("click", clearAllFilters);
```

**🧪 TEST 6c:** Clear knappen skulle nu virke.

### Trin 7: Omfattende test af alle kombinationer

**7a. Test individuelt:**

1. **Kun år filter:**

   - Fra år: 2020 → Se nyere film
   - Til år: 2015 → Se ældre film
   - Fra: 2010, Til: 2020 → Se årti

2. **Kun rating filter:**
   - Fra rating: 8.0 → Se højt ratede
   - Fra: 7.0, Til: 9.0 → Se medium-høje

**7b. Test kombinationer:**

1. **Søgning + år:**
   - Søg: "the" + Fra år: 2015
2. **Genre + rating:**
   - Genre: "Action" + Fra rating: 8.0
3. **Alt sammen:**
   - Søg: "a" + Genre: "Action" + År: 2010-2020 + Rating: 7.0-10 + Sort: "rating"

**7c. Test clear funktionalitet:**

1. Sæt flere filtre → Klik clear → Alt nulstilles
2. Test at alle filtre virker igen efter clear

**🎯 Debugging tips:**

- Tjek at antallet af film ændrer sig efter hvert filter
- Test alle filter kombinationer
- Verify at sortering sker til sidst

````

### Trin 8: Fjern debug logs (valgfrit)

**8a. Ryd op i console.log statements**

Når alt virker, kan du fjerne debug logs for en renere oplevelse:

```javascript
function filterMovies() {
  // Bevar variable (UÆNDRET)
  const searchValue = document.querySelector("#search-input").value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;
  const sortValue = document.querySelector("#sort-select").value;
  const yearFrom = Number(document.querySelector("#year-from").value) || 0;
  const yearTo = Number(document.querySelector("#year-to").value) || 9999;
  const ratingFrom = Number(document.querySelector("#rating-from").value) || 0;
  const ratingTo = Number(document.querySelector("#rating-to").value) || 10;

  let filteredMovies = allMovies;

  // Eksisterende filtre (fjern console.log hvis ønsket)
  if (searchValue) {
    filteredMovies = filteredMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchValue)
    );
  }

  if (genreValue !== "all") {
    filteredMovies = filteredMovies.filter(movie =>
      movie.genre.includes(genreValue)
    );
  }

  // Nye filtre (fjern console.log hvis ønsket)
  filteredMovies = filteredMovies.filter(movie =>
    movie.year >= yearFrom && movie.year <= yearTo
  );

  filteredMovies = filteredMovies.filter(movie =>
    movie.rating >= ratingFrom && movie.rating <= ratingTo
  );

  // Sortering (UÆNDRET)
  if (sortValue === "title") {
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "year") {
    filteredMovies.sort((a, b) => b.year - a.year);
  } else if (sortValue === "rating") {
    filteredMovies.sort((a, b) => b.rating - a.rating);
  }

  displayMovies(filteredMovies);
}
````

**🎯 Du har nu implementeret:**

- ✅ År range filtrering med step-by-step guidance
- ✅ Rating range filtrering med test efter hvert trin
- ✅ Clear all filters funktionalitet
- ✅ Event listeners for alle nye felter
- ✅ Komplet debug process med console logs
- ✅ Omfattende test scenarios

**🚀 Klar til Del 2!** Din filtrering er nu komplet og du forstår hvert trin.

2. **Rating range filter:**

   - Prøv "Fra: 8.0" og "Til: 10"
   - Se kun højt ratede film

3. **Kombination af filtre:**

   - Søg efter "the"
   - Vælg "Action" genre
   - År: 2008-2015
   - Rating: 7.0-10
   - Sortér efter rating

4. **Clear filters:**
   - Klik "Ryd alle filtre" knappen
   - Alle felter ryddes og alle film vises igen

**🎯 Test din implementation:**

- Antallet af film ændrer sig ved hvert filter-trin
- Sortering sker EFTER filtrering
- Clear knappen nulstiller alt

---

## 🎉 Komplet løsning efter Del 1

**Efter øvelserne** har du nu udvidet filtrering. Her er den **komplette løsning** du skal have for at fortsætte til Del 2: ### ✅ Komplet HTML (index.html)

```html
<!DOCTYPE html>
<html lang="da">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Movie App</title>
    <link rel="stylesheet" href="app.css" />
  </head>
  <body>
    <header>
      <h1>🎬 Movie Database</h1>
    </header>

    <main>
      <!-- Filter bar med alle filtreringsmuligheder -->
      <div class="filterbar">
        <!-- Søgning -->
        <div class="search-filter">
          <label for="search-input">🔍 Søg:</label>
          <input type="text" id="search-input" placeholder="Søg efter filmtitel..." />
        </div>

        <!-- Genre dropdown -->
        <div class="genre-filter">
          <label for="genre-select">🎭 Genre:</label>
          <select id="genre-select">
            <option value="all">Alle genrer</option>
          </select>
        </div>

        <!-- År range -->
        <div class="year-filter">
          <label>📅 År:</label>
          <input type="number" id="year-from" placeholder="Fra år" min="1900" max="2024" />
          <span>til</span>
          <input type="number" id="year-to" placeholder="Til år" min="1900" max="2024" />
        </div>

        <!-- Rating range -->
        <div class="rating-filter">
          <label>⭐ Rating:</label>
          <input type="number" id="rating-from" placeholder="Fra" min="0" max="10" step="0.1" />
          <span>til</span>
          <input type="number" id="rating-to" placeholder="Til" min="0" max="10" step="0.1" />
        </div>

        <!-- Sortering -->
        <div class="sort-filter">
          <label for="sort-select">📊 Sortér:</label>
          <select id="sort-select">
            <option value="none">Ingen sortering</option>
            <option value="title">Titel (A-Å)</option>
            <option value="year">År (nyeste først)</option>
            <option value="rating">Rating (højeste først)</option>
          </select>
        </div>

        <!-- Clear filters -->
        <button id="clear-filters" class="clear-btn">🗑️ Ryd alle filtre</button>
      </div>

      <!-- Movie display område -->
      <section id="movie-list" class="movie-grid"></section>
    </main>

    <script src="app.js"></script>
  </body>
</html>
```

### ✅ Komplet JavaScript (app.js)

```javascript
// Global variable til alle movies
let allMovies = [];

// #1: Initialisér app med event listeners
function initApp() {
  getMovies();

  // Event listeners til alle filtre
  document.querySelector("#search-input").addEventListener("input", filterMovies);
  document.querySelector("#genre-select").addEventListener("change", filterMovies);
if (ratingFrom > 0 || ratingTo < 10) {
  filteredMovies = filteredMovies.filter(movie => {
    return movie.rating >= ratingFrom && movie.rating <= ratingTo;
  });
}
```

**Test din rating filter:**

- Rating fra: 8.0 → Se kun film med rating 8.0+
- Rating til: 7.0 → Se kun film med rating 7.0 eller lavere
- Kombiner: Fra 7.5 til 9.0 → Se film mellem 7.5-9.0 rating

**7f. Tilføj "Clear All Filters" knap**

Som sidste trin, lav en knap der rydder alle filtre:

**HTML:**

```html
<button id="clear-filters" class="clear-btn">🗑️ Ryd alle filtre</button>
```

**JavaScript:**

```javascript
// ✨ NY: Funktion til at rydde alle filtre
function clearAllFilters() {
  console.log("🗑️ Rydder alle filtre");

  // Ryd alle input felter
  document.querySelector("#search-input").value = "";
  document.querySelector("#genre-select").value = "all";
  document.querySelector("#sort-select").value = "none";
  document.querySelector("#year-from").value = "";
  document.querySelector("#year-to").value = "";
  document.querySelector("#rating-from").value = "";
  document.querySelector("#rating-to").value = "";

  // Kør filtrering igen (vil vise alle film)
  filterMovies();
}

// Tilføj til initApp():
document.querySelector("#clear-filters").addEventListener("click", clearAllFilters);
```

**💡 Del 1 Sammenfatning - Du har nu mestret:**

- ✅ **Grundlæggende filtrering:** string search og array includes
- ✅ **Sortering:** alfabetisk og numerisk, stigende/faldende
- ✅ **Rækkefølge:** filter først, sort til sidst
- ✅ **Udvidelse:** tilføjet nye filter kriterier (år, rating)
- ✅ **Event handling:** input/change events på forskellige felter
- ✅ **UX:** clear all filters funktionalitet
- ✅ **Debugging:** console.log til at forstå data flow

**🎯 Nu er du klar til modal implementation!** Du har en solid forståelse af hvordan data filtreres og manipuleres i JavaScript.

---

## 🎉 Komplet løsning efter Del 1

**Efter alle øvelser og tests** har du nu en fuld forståelse af filtrering. Her er den **komplette, rene løsning** du skal have for at fortsætte til Del 2:

### ✅ Komplet HTML (index.html)

```html
<!DOCTYPE html>
<html lang="da">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Movie App</title>
    <link rel="stylesheet" href="app.css" />
  </head>
  <body>
    <header>
      <h1>🎬 Movie Database</h1>
    </header>

    <main>
      <!-- Filter bar med alle filtreringsmuligheder -->
      <div class="filterbar">
        <input type="text" id="search-input" placeholder="Søg efter film..." />

        <select id="genre-select">
          <option value="all">Alle genrer</option>
          <!-- Genrer indsættes dynamisk via JavaScript -->
        </select>

        <!-- År range filter -->
        <div class="year-filter">
          <label for="year-from">Fra år:</label>
          <input type="number" id="year-from" placeholder="2000" min="1900" max="2030" />
          <label for="year-to">Til år:</label>
          <input type="number" id="year-to" placeholder="2025" min="1900" max="2030" />
        </div>

        <!-- Rating range filter -->
        <div class="rating-filter">
          <label for="rating-from">Fra rating:</label>
          <input type="number" id="rating-from" placeholder="0" min="0" max="10" step="0.1" />
          <label for="rating-to">Til rating:</label>
          <input type="number" id="rating-to" placeholder="10" min="0" max="10" step="0.1" />
        </div>

        <select id="sort-select">
          <option value="none">Ingen sortering</option>
          <option value="title">Sortér: Titel (A-Å)</option>
          <option value="year">Sortér: År (nyeste først)</option>
          <option value="rating">Sortér: Rating (højeste først)</option>
        </select>

        <button id="clear-filters" class="clear-btn">🗑️ Ryd alle filtre</button>
      </div>

      <!-- Movie grid -->
      <section id="movie-list" class="movie-grid">
        <!-- Film vil blive indsat her dynamisk -->
      </section>
    </main>

    <!-- Footer -->
    <footer>
      <p>© RACE - Rasmus Cederdorff</p>
    </footer>

    <script src="app.js"></script>
  </body>
</html>
```

### ✅ Komplet JavaScript (app.js)

```javascript
"use strict";

// Global variabel til alle film
let allMovies = [];

// #1: Initialize the app
function initApp() {
  console.log("initApp: app.js is running 🎉");
  getMovies();

  // Event listeners for alle filtre
  document.querySelector("#search-input").addEventListener("input", filterMovies);
  document.querySelector("#genre-select").addEventListener("change", filterMovies);
  document.querySelector("#sort-select").addEventListener("change", filterMovies);
  document.querySelector("#year-from").addEventListener("input", filterMovies);
  document.querySelector("#year-to").addEventListener("input", filterMovies);
  document.querySelector("#rating-from").addEventListener("input", filterMovies);
  document.querySelector("#rating-to").addEventListener("input", filterMovies);
  document.querySelector("#clear-filters").addEventListener("click", clearAllFilters);
}

// #2: Fetch movies from JSON file
async function getMovies() {
  try {
    const response = await fetch("data/movies.json");
    allMovies = await response.json();
    console.log("📁 Movies loaded:", allMovies.length);
    populateGenreDropdown(); // Udfyld dropdown med genrer fra data
    displayMovies(allMovies);
  } catch (error) {
    console.error("❌ Error loading movies:", error);
  }
}

// #3: Display all movies
function displayMovies(movies) {
  const movieList = document.querySelector("#movie-list");
  movieList.innerHTML = "";

  if (movies.length === 0) {
    movieList.innerHTML = '<p class="no-results">Ingen film matchede dine filtre 😢</p>';
    return;
  }

  for (const movie of movies) {
    displayMovie(movie);
  }
}

// #4: Render a single movie card and add event listeners
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

  // Tilføj keyboard support
  newCard.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showMovieDetails(movie);
    }
  });
}

// #5: Udfyld genre-dropdown med alle unikke genrer fra data
function populateGenreDropdown() {
  const genreSelect = document.querySelector("#genre-select");
  const genres = new Set();

  // Samle alle unikke genrer fra alle film
  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  // Fjern gamle options undtagen 'Alle genrer'
  genreSelect.innerHTML = '<option value="all">Alle genrer</option>';

  // Sortér genres alfabetisk og tilføj dem som options
  const sortedGenres = Array.from(genres).sort();
  for (const genre of sortedGenres) {
    genreSelect.insertAdjacentHTML("beforeend", `<option value="${genre}">${genre}</option>`);
  }

  console.log("🎭 Genres loaded:", sortedGenres.length, "unique genres");
}

// #6: Vis movie details (Session 3 version - bliver erstattet med modal i Del 2)
function showMovieDetails(movie) {
  alert(`
🎬 ${movie.title} (${movie.year})

🎭 Genre: ${movie.genre.join(", ")}
⭐ Rating: ${movie.rating}
🎥 Director: ${movie.director}
👥 Actors: ${movie.actors.join(", ")}

📝 ${movie.description}
  `);
}

// #7: Ryd alle filtre
function clearAllFilters() {
  console.log("🗑️ Rydder alle filtre");

  // Ryd alle input felter
  document.querySelector("#search-input").value = "";
  document.querySelector("#genre-select").value = "all";
  document.querySelector("#sort-select").value = "none";
  document.querySelector("#year-from").value = "";
  document.querySelector("#year-to").value = "";
  document.querySelector("#rating-from").value = "";
  document.querySelector("#rating-to").value = "";

  // Kør filtrering igen (vil vise alle film)
  filterMovies();
}

// #8: Komplet filtrering med alle funktioner
function filterMovies() {
  console.log("🔄 ===== STARTER KOMPLET FILTRERING =====");

  // Hent alle filter værdier
  const searchValue = document.querySelector("#search-input").value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;
  const sortValue = document.querySelector("#sort-select").value;
  const yearFrom = Number(document.querySelector("#year-from").value) || 0;
  const yearTo = Number(document.querySelector("#year-to").value) || 9999;
  const ratingFrom = Number(document.querySelector("#rating-from").value) || 0;
  const ratingTo = Number(document.querySelector("#rating-to").value) || 10;

  console.log(`🔍 Søgeterm: "${searchValue}"`);
  console.log(`🎭 Genre: "${genreValue}"`);
  console.log(`📅 År range: ${yearFrom} - ${yearTo}`);
  console.log(`⭐ Rating range: ${ratingFrom} - ${ratingTo}`);
  console.log(`📊 Sortering: "${sortValue}"`);

  // Start med alle film
  let filteredMovies = allMovies;
  console.log(`📋 Starter med: ${filteredMovies.length} movies`);

  // FILTER 1: Søgetekst
  if (searchValue) {
    console.log(`🔍 Anvender søgetekst filter`);
    filteredMovies = filteredMovies.filter(movie => {
      return movie.title.toLowerCase().includes(searchValue);
    });
    console.log(`📊 Efter søgetekst: ${filteredMovies.length} movies`);
  }

  // FILTER 2: Genre
  if (genreValue !== "all") {
    console.log(`🎭 Anvender genre filter`);
    filteredMovies = filteredMovies.filter(movie => {
      return movie.genre.includes(genreValue);
    });
    console.log(`📊 Efter genre: ${filteredMovies.length} movies`);
  }

  // FILTER 3: År range
  if (yearFrom > 0 || yearTo < 9999) {
    console.log(`📅 Anvender år filter`);
    filteredMovies = filteredMovies.filter(movie => {
      return movie.year >= yearFrom && movie.year <= yearTo;
    });
    console.log(`📊 Efter år filter: ${filteredMovies.length} movies`);
  }

  // FILTER 4: Rating range
  if (ratingFrom > 0 || ratingTo < 10) {
    console.log(`⭐ Anvender rating filter`);
    filteredMovies = filteredMovies.filter(movie => {
      return movie.rating >= ratingFrom && movie.rating <= ratingTo;
    });
    console.log(`📊 Efter rating filter: ${filteredMovies.length} movies`);
  }

  // SORTERING (altid til sidst)
  if (sortValue === "title") {
    console.log(`📝 Sorterer alfabetisk`);
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "year") {
    console.log(`📅 Sorterer på år (nyeste først)`);
    filteredMovies.sort((a, b) => b.year - a.year);
  } else if (sortValue === "rating") {
    console.log(`⭐ Sorterer på rating (højeste først)`);
    filteredMovies.sort((a, b) => b.rating - a.rating);
  }

  console.log(`✅ FINAL RESULTAT: ${filteredMovies.length} movies`);
  console.log("🔄 ===== FILTRERING FÆRDIG =====\n");

  displayMovies(filteredMovies);
}

// Start appen når siden er loaded
initApp();
```

### ✅ Ekstra CSS til nye filtre (tilføj til din app.css)

```css
/* Ekstra styling til nye filter felter */
.year-filter,
.rating-filter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.year-filter label,
.rating-filter label {
  font-size: 0.875rem;
  color: var(--text-light);
  white-space: nowrap;
}

.year-filter input,
.rating-filter input {
  width: 80px;
  padding: 0.5rem;
  background: var(--bg-card);
  color: var(--text);
  border: 1px solid var(--secondary);
  border-radius: var(--radius);
  font-size: 0.875rem;
  transition: var(--transition);
}

.year-filter input:focus,
.rating-filter input:focus {
  outline: 2px solid var(--secondary);
  border-color: var(--secondary);
}

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

.no-results {
  text-align: center;
  color: var(--text-light);
  font-size: 1.2rem;
  margin: 2rem 0;
  padding: 2rem;
  background: var(--bg-card);
  border-radius: var(--radius);
}

/* Responsive filter bar */
@media (max-width: 768px) {
  .filterbar {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }

  .year-filter,
  .rating-filter {
    justify-content: space-between;
  }

  .year-filter input,
  .rating-filter input {
    width: 100px;
  }
}
```

### 🎯 Nu har du:

- ✅ **Komplet HTML** med alle filter muligheder
- ✅ **Komplet JavaScript** med fuld funktionalitet:
  - Søgning i film titler
  - Genre filtrering
  - År range filtrering
  - Rating range filtrering
  - Sortering (titel, år, rating)
  - Clear all filters knap
  - Keyboard navigation
- ✅ **CSS styling** til de nye elementer
- ✅ **Robust fejlhåndtering** og user feedback

**🗑️ Ryd op:** Du kan nu fjerne alle test funktioner fra Del 1 og forenkle console.log hvis du vil.

**🚀 Klar til Del 2:** Nu har du en solid, funktionel base at bygge modal funktionalitet på!

---

## Del 2: Modal Dialog HTML og CSS 🎭

**Formål:** Nu hvor du har en komplet filtreringsapp, lad os bygge en professionel modal dialog!

### Trin 1: Tilføj modal HTML til index.html

**1a. Forstå `<dialog>` elementet**

`<dialog>` elementet er en moderne HTML5 løsning til at skabe modale dialoger:

**Hvad kan `<dialog>` elementet:**

- **Native modal functionalitet**: Automatisk focus management og keyboard handling
- **Backdrop support**: Inbygget baggrund overlay med `::backdrop` CSS pseudo-element
- **Accessibility**: Bygget med screen reader support og ARIA standarder
- **Form integration**: Kan indeholde formularer med `method="dialog"` for automatisk lukning
- **JavaScript API**: `showModal()`, `close()`, og `show()` metoder
- **Event handling**: `close` event når dialog lukkes

**📚 VIGTIGT - Læs MDN dokumentationen:**

Før du fortsætter, skal du læse den officielle dokumentation for `<dialog>` elementet:

👉 **https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog**

**Læs specifikt:**

- **"Description" sektionen** - forstå formålet med `<dialog>`
- **"Usage notes"** - vigtige detaljer om `showModal()` vs `show()`
- **"Accessibility concerns"** - hvordan `<dialog>` understøtter screen readers
- **"Examples"** - se praktiske eksempler på brug

**💡 Hvorfor MDN?** Mozilla Developer Network er den autoritative kilde til web standarder og best practices.

**1b. Tilføj dialog element**

Åbn din `index.html` og tilføj dette EFTER `</main>` og FØR `<script src="app.js">`:

```html
    </main>
    <!-- Footer -->
    <footer>
      <p>© RACE - Rasmus Cederdorff</p>
    </footer>

    <!-- Movie Detail Modal -->
    <dialog id="movie-dialog">
      <form method="dialog">
        <button id="close-dialog" aria-label="Close">✕</button>
        <div id="dialog-content">
          <!-- Movie details will be injected here via JavaScript -->
        </div>
      </form>
    </dialog>

    <script src="app.js"></script>
  </body>
</html>
```

**💡 Vigtigt om strukturen:**

- **`<form method="dialog">`**: Gør at Enter/Escape keys automatisk lukker dialog
- **`aria-label="Close"`**: Tilgængelighed for skærmlæsere
- **`#dialog-content`**: Container hvor JavaScript indsætter movie detaljer dynamisk
- **Tom div**: Vi fylder indholdet via JavaScript for maksimal fleksibilitet

**1c. Test HTML struktur**

1. **GEM** `index.html`
2. **Refresh** browseren
3. **Åbn Developer Tools** → Elements tab
4. **Find `<dialog>` elementet** - det skulle være lukket (ingen `open` attribut)
5. **Kig efter fejl** i Console (der skulle ikke være nogen)

**💡 Moderne Web Standards:**

Ved at bruge `<dialog>` med `<form method="dialog">` følger vi moderne web standards:

- **HTML5 Semantik**: `<dialog>` er designet specifikt til modale dialoger
- **Native Accessibility**: Automatisk ARIA support og fokus management
- **Performance**: Browser håndterer modal state effektivt
- **User Experience**: Konsistent adfærd på tværs af devices og browsers
- **Maintainability**: Mindre JavaScript kode nødvendig

**🔗 MDN Reference:** Læs mere om `<dialog>` element på: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog

### Trin 2: Tilføj CSS til modal dialog

**2a. Bekræft at modal CSS allerede findes**

Åbn din `app.css` og scroll ned til linjen der starter med:

```css
/* =====================
   MOVIE DIALOG
   ===================== */
```

**✅ Perfekt!** CSS til modal dialog er allerede inkluderet i din app.css fil. Du skal IKKE tilføje mere CSS.

**Det eksisterende CSS i din app.css inkluderer:**

```css
dialog#movie-dialog {
  border: none;
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  padding: 0;
  max-width: min(95vw, 1000px);
  max-height: 90vh;
  background: var(--bg-card);
  color: var(--text);
  overflow: hidden;
  position: relative;
  margin: auto;
}

dialog#movie-dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
}

#close-dialog {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-light);
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  z-index: 10;
}

#close-dialog:hover {
  background: var(--error);
  color: white;
  transform: scale(1.1);
}

#dialog-content {
  padding: 2rem;
  display: grid;
  grid-template-columns: minmax(250px, 1fr) 2fr;
  gap: 2rem;
  align-items: start;
  overflow-y: auto;
  max-height: 90vh;
}

.dialog-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.movie-description {
  color: var(--text) !important;
  font-size: 1.1rem !important;
  line-height: 1.7 !important;
  margin-top: 1rem !important;
  padding: 1rem;
  background: var(--secondary-light);
  border-radius: var(--radius);
  border-left: 4px solid var(--secondary);
  font-style: italic;
}
```

**2b. Responsive design er også inkluderet**

Din CSS inkluderer også responsive design:

```css
@media (max-width: 768px) {
  #dialog-content {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    gap: 1.5rem;
    text-align: center;
  }
}

@media (max-width: 768px) {
  #dialog-content img.movie-poster {
    max-width: 300px;
    margin: 0 auto;
  }
}
```

**💡 Vigtigt:** Din HTML struktur skal matche disse CSS selectors nøjagtigt for at styling virker!

---

## Del 3: JavaScript Modal Funktionalitet 🔧

**Formål:** Erstat `alert()` med rigtig modal dialog funktionalitet.

### Trin 3: Opret modal funktioner

**3a. Tilføj showMovieModal funktion**

Tilføj denne nye funktion til din `app.js` (erstatter ikke `showMovieDetails` endnu):

```javascript
// #8: Vis movie i modal dialog
function showMovieModal(movie) {
  console.log("🎭 Åbner modal for:", movie.title);

  // Byg HTML struktur dynamisk
  const dialogContent = document.querySelector("#dialog-content");
  dialogContent.innerHTML = `
    <img src="${movie.image}" alt="Poster af ${movie.title}" class="movie-poster">
    <div class="dialog-details">
      <h2>${movie.title} <span class="movie-year">(${movie.year})</span></h2>
      <p class="movie-genre">${movie.genre.join(", ")}</p>
      <p class="movie-rating">⭐ ${movie.rating}</p>
      <p><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Actors:</strong> ${movie.actors.join(", ")}</p>
      <p class="movie-description">${movie.description}</p>
    </div>
  `;

  // Åbn modalen
  document.querySelector("#movie-dialog").showModal();
}
```

**💡 Fordele ved denne approach:**

- **Dynamisk**: HTML bygges kun når modal åbnes
- **Fleksibel**: Nem at ændre struktur uden at redigere HTML
- **Performant**: Ingen unødvendige DOM elementer når modal er lukket
- **Maintainable**: Al modal logik er i JavaScript

**3b. Test modal funktionalitet**

Med `<form method="dialog">` får vi automatisk modal lukning! Test det:

1. **GEM** `app.js` og refresh browseren
2. **Test modal** ved at klikke på en film card
3. **Test automatisk lukning**:
   - **Tryk Escape** → Modal lukker automatisk
   - **Klik på X knappen** → Modal lukker automatisk
   - **Klik udenfor modal** → Modal lukker automatisk (i de fleste browsere)

**💡 Ingen JavaScript lukning nødvendig!** `<form method="dialog">` håndterer alt automatisk.

**3c. Verificer din eksisterende initApp funktion**

Din `initApp()` funktion fra Session 3 skulle ligne dette:

```javascript
// #1: Initialize the app (fra Session 3)
function initApp() {
  console.log("initApp: app.js is running 🎉");
  getMovies();
  document.querySelector("#search-input").addEventListener("input", filterMovies);
  document.querySelector("#genre-select").addEventListener("change", filterMovies);
  document.querySelector("#sort-select").addEventListener("change", filterMovies);
}
```

**💡 Ingen ændringer nødvendige!** Modal fungerer perfekt med din eksisterende Session 3 kode.

**Hvorfor ingen modal event listeners?**

- `<form method="dialog">` giver automatisk Escape key support
- Browser håndterer backdrop clicks automatisk
- Close button fungerer automatisk (form submission)
- Accessibility er built-in### Trin 4: Test modal uden at ændre eksisterende kode

**4a. Test modal direkte**

1. **GEM** `app.js` og refresh browseren
2. **Test den nye modal** ved at klikke på en film card
3. **Test automatisk lukning**:
   - **Tryk Escape** → Modal lukker
   - **Klik X knappen** → Modal lukker
   - **Klik udenfor modal** → Modal lukker

**💡 Alt fungerer automatisk!** Ingen manuel event handling nødvendig. 4. **Se modal åbne** med film detaljer 5. **Test lukning**:

- Klik X knap
- Klik udenfor modal
- Tryk Escape

**💡 Modal virker!** Men vi bruger stadig `alert()` i din app...

### Trin 5: Skift fra alert til modal

**5a. Opdater displayMovie funktion**

Find din `displayMovie()` funktion og ændr `showMovieDetails` til `showMovieModal`:

```javascript
// #4: Render a single movie card and add event listeners
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
    showMovieModal(movie); // ÆNDRET: Fra showMovieDetails til showMovieModal
  });

  // Tilføj keyboard support
  newCard.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showMovieModal(movie); // ÆNDRET: Fra showMovieDetails til showMovieModal
    }
  });
}
```

**5b. Test den komplette modal integration**

1. **GEM** `app.js` og refresh browseren
2. **Klik på en movie card** → Modal åbner (ikke alert!)
3. **Test automatisk modal funktioner**:
   - Film detaljer vises korrekt i professionel layout
   - **Tryk Escape** → Modal lukker automatisk
   - **Klik X knappen** → Modal lukker automatisk
   - **Klik udenfor modal** → Modal lukker automatisk
4. **Test keyboard navigation**:
   - Tab til movie card
   - Tryk Enter → Modal åbner
   - Tryk Escape → Modal lukker automatisk

**💡 Alt fungerer uden JavaScript event handling!** `<form method="dialog">` giver os alt gratis.

**5c. Fjern den gamle showMovieDetails funktion (valgfrit)**

Du kan nu fjerne eller kommentere din gamle `showMovieDetails()` funktion ud, da den ikke bruges længere.

---

## 🎉 Tillykke! Du har nu en komplet modal dialog!

**Du har lært:**

✅ **HTML struktur** for modal dialog med `<dialog>` element  
✅ **CSS styling** bruger det eksisterende design i din app.css  
✅ **JavaScript funktionalitet** med `showModal()` og `close()`  
✅ **Event handling** for close button, escape key og backdrop click  
✅ **Erstatning af alert()** med professionel modal dialog

**Din modal har nu:**

- Professionel grid layout med film billede og detaljer
- Responsive design der fungerer på mobile
- Accessibility med keyboard navigation
- Smooth animations og hover effects
- Konsistent design der matcher din app

**💡 CSS Styling:** Dit eksisterende CSS i app.css indeholder allerede al nødvendig styling til modal dialogen. Den inkluderer:

- Dark mode support
- Responsive design
- Hover animations
- Accessibility fokus styling
- Professional grid layout

**💡 Næste skridt (Session 5):** I næste session kan du udforske:

- Local storage til favoritter
- API integration til rigtige film data
- Avanceret filtrering og sortering
- Dark/light mode toggle
- Export funktionalitet
