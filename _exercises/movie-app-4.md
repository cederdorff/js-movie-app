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

## Del 1: Forståelse af Filtrering og Sortering 🔍

**Formål:** Forstå hvordan filtrering og sortering virker step-by-step før vi bygger modal.

**⚠️ VIGTIGT:** I denne sektion bruger vi **test funktioner** til at forstå koncepterne. Disse funktioner er kun til læring og skal **ikke** være en del af din færdige app. Du kan fjerne dem efter, du har forstået koncepterne.

### Trin 1: Gennemgå streng søgning og filtrering

**1a. Forstå din nuværende filterMovies() funktion**

Åbn din `app.js` og find din `filterMovies()` funktion. Den skulle ligne dette:

```javascript
// #7: Kombineret søgning, genre og sortering
function filterMovies() {
  const searchValue = document.querySelector("#search-input").value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;
  const sortValue = document.querySelector("#sort-select").value;

  let filteredMovies = allMovies;

  // Filtrer på søgetekst
  if (searchValue) {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.title.toLowerCase().includes(searchValue);
    });
  }

  // Filtrer på genre
  if (genreValue !== "all") {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.genre.includes(genreValue);
    });
  }

  // Sorter resultater
  if (sortValue === "title") {
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "year") {
    filteredMovies.sort((a, b) => b.year - a.year);
  } else if (sortValue === "rating") {
    filteredMovies.sort((a, b) => b.rating - a.rating);
  }

  displayMovies(filteredMovies);
}
```

**💡 Hvis din funktion ser anderledes ud:** Følg med i denne sektion for at forstå hvert trin!

### Trin 2: Forstå streng søgning med console.log

**2a. Tilføj test funktion til streng søgning**

**🧪 TEST FUNKTION (til læring - kan fjernes senere):**

Lad os tilføje en test funktion for at forstå hvad der sker ved streng søgning:

```javascript
// 🧪 TEST FUNKTION - Kun til læring (kan fjernes efter forståelse)
function understandStringSearch() {
  console.log("=== FORSTÅ STRENG SØGNING ===");

  // Test data
  const testMovies = [
    { title: "The Matrix" },
    { title: "The Dark Knight" },
    { title: "Avatar" },
    { title: "Inception" }
  ];

  const searchTerm = "the";

  console.log(
    "🎬 Test movies:",
    testMovies.map(m => m.title)
  );
  console.log("🔍 Søger efter:", searchTerm);

  // Step 1: Konverter søgeterm til lowercase
  const searchLower = searchTerm.toLowerCase();
  console.log("🔍 Søgeterm (lowercase):", searchLower);

  // Step 2: Test hver film
  for (const movie of testMovies) {
    const titleLower = movie.title.toLowerCase();
    const matches = titleLower.includes(searchLower);
    console.log(`📝 "${movie.title}" → "${titleLower}" → includes("${searchLower}") → ${matches}`);
  }

  // Step 3: Filtrer med filter()
  const results = testMovies.filter(movie => {
    return movie.title.toLowerCase().includes(searchLower);
  });

  console.log(
    "✅ Resultater:",
    results.map(m => m.title)
  );
}
```

**2b. Test streng søgning i Console**

1. **Tilføj test funktionen** til din `app.js` (kun midlertidigt til læring)
2. **GEM og refresh** browseren
3. **Åbn Console** og kør: `understandStringSearch()`
4. **Se output** og forstå hvert trin:
   - Hvorfor "The Matrix" matcher "the"
   - Hvorfor "Avatar" ikke matcher "the"
   - Hvordan `.toLowerCase()` og `.includes()` virker

**💡 Hvad lærte vi?**

- `.toLowerCase()` gør søgning case-insensitive
- `.includes()` tjekker om en string indeholder en anden
- `.filter()` skaber et nyt array med kun matching elementer

**🗑️ Oprydning:** Du kan fjerne `understandStringSearch()` funktionen når du har forstået konceptet.

### Trin 3: Forstå genre filtrering step-by-step

**3a. Tilføj test funktion til genre filtrering**

**🧪 TEST FUNKTION (til læring - kan fjernes senere):**

```javascript
// 🧪 TEST FUNKTION - Kun til læring (kan fjernes efter forståelse)
function understandGenreFiltering() {
  console.log("=== FORSTÅ GENRE FILTRERING ===");

  // Test data (genre er et array!)
  const testMovies = [
    { title: "The Matrix", genre: ["Action", "Sci-Fi"] },
    { title: "Titanic", genre: ["Drama", "Romance"] },
    { title: "The Avengers", genre: ["Action", "Adventure"] },
    { title: "The Lion King", genre: ["Animation", "Family"] }
  ];

  const selectedGenre = "Action";

  console.log("� Test movies:");
  for (const m of testMovies) {
    console.log(`  "${m.title}" → [${m.genre.join(", ")}]`);
  }
  console.log("�🎭 Valgt genre:", selectedGenre);

  // Test hver film
  for (const movie of testMovies) {
    const hasGenre = movie.genre.includes(selectedGenre);
    console.log(`📝 "${movie.title}" → genre.includes("${selectedGenre}") → ${hasGenre}`);
  }

  // Filtrer resultater
  const results = testMovies.filter(movie => {
    return movie.genre.includes(selectedGenre);
  });

  console.log(
    "✅ Action movies:",
    results.map(m => m.title)
  );
}
```

**3b. Test genre filtrering**

1. **Tilføj test funktionen** til din `app.js` (kun midlertidigt til læring)
2. **Kør i Console:** `understandGenreFiltering()`
3. **Forstå output:**
   - Genre er et array: `["Action", "Sci-Fi"]`
   - `.includes()` virker også på arrays
   - En film kan have flere genrer

**💡 Forskel på string og array includes:**

```javascript
// String includes
"The Matrix"
  .includes("Matrix") // true

  [
    // Array includes
    ("Action", "Sci-Fi")
  ].includes("Action"); // true
```

**🗑️ Oprydning:** Du kan fjerne `understandGenreFiltering()` funktionen når du har forstået konceptet.

### Trin 4: Forstå sortering (alfabetisk og numerisk)

**4a. Tilføj test funktion til sortering**

**🧪 TEST FUNKTION (til læring - kan fjernes senere):**

```javascript
// 🧪 TEST FUNKTION - Kun til læring (kan fjernes efter forståelse)
function understandSorting() {
  console.log("=== FORSTÅ SORTERING ===");

  const testMovies = [
    { title: "Zebra Movie", year: 2020, rating: 8.5 },
    { title: "Alpha Movie", year: 2022, rating: 7.2 },
    { title: "Beta Movie", year: 2021, rating: 9.1 }
  ];

  console.log("🎬 Original rækkefølge:");
  for (let i = 0; i < testMovies.length; i++) {
    const m = testMovies[i];
    console.log(`  ${i + 1}. "${m.title}" (${m.year}) ⭐${m.rating}`);
  }

  // 1. Sortér på titel (alfabetisk)
  console.log("\n📝 Sortér på titel (A-Å):");
  const byTitle = [...testMovies].sort((a, b) => a.title.localeCompare(b.title));
  for (let i = 0; i < byTitle.length; i++) {
    const m = byTitle[i];
    console.log(`  ${i + 1}. "${m.title}"`);
  }

  // 2. Sortér på år (nyeste først)
  console.log("\n📅 Sortér på år (nyeste først):");
  const byYear = [...testMovies].sort((a, b) => b.year - a.year);
  for (let i = 0; i < byYear.length; i++) {
    const m = byYear[i];
    console.log(`  ${i + 1}. "${m.title}" (${m.year})`);
  }

  // 3. Sortér på rating (højeste først)
  console.log("\n⭐ Sortér på rating (højeste først):");
  const byRating = [...testMovies].sort((a, b) => b.rating - a.rating);
  for (let i = 0; i < byRating.length; i++) {
    const m = byRating[i];
    console.log(`  ${i + 1}. "${m.title}" ⭐${m.rating}`);
  }

  console.log("\n💡 Bemærk: Original array er uændret:");
  for (let i = 0; i < testMovies.length; i++) {
    const m = testMovies[i];
    console.log(`  ${i + 1}. "${m.title}"`);
  }
}
```

**4b. Test sortering og forstå forskelle**

1. **Tilføj test funktionen** til din `app.js` (kun midlertidigt til læring)
2. **Kør i Console:** `understandSorting()`
3. **Forstå de tre sorteringstyper:**
   - **String sortering:** `a.title.localeCompare(b.title)` (alfabetisk)
   - **Tal sortering (faldende):** `b.year - a.year` (største først)
   - **Tal sortering (stigende):** `a.year - b.year` (mindste først)

**💡 Vigtigt at forstå localeCompare():**

`localeCompare()` er den rigtige måde at sortere tekst alfabetisk på dansk/engelsk. Det tager højde for:

- Store/små bogstaver
- Danske tegn (æ, ø, å)
- Specialtegn og tal i tekst

```javascript
// String sammenligning med localeCompare()
"Alpha".localeCompare("Beta"); // -1 (Alpha kommer før Beta)
"Beta".localeCompare("Alpha"); // 1  (Beta kommer efter Alpha)
"äpfel".localeCompare("zebra"); // -1 (ä sorteres som a)

// FORKERT måde at sortere strings:
"Alpha" > "Beta"; // false (ikke pålidelig!)

// KORREKT måde:
"Alpha".localeCompare("Beta") < 0; // true (Alpha kommer før Beta)

// Tal sammenligning (simpel matematik)
// For STIGENDE (mindste først): a - b
2020 - 2022; // -2 (2020 kommer før 2022)

// For FALDENDE (største først): b - a
2022 - 2020; // 2  (2022 kommer før 2020)
```

**🗑️ Oprydning:** Du kan fjerne `understandSorting()` funktionen når du har forstået konceptet.

### Trin 5: Byg en komplet filterMovies() step-by-step

**5a. Tilføj forbedret filterMovies med fuld debugging**

**⚠️ BEMÆRK:** Dette erstatter din eksisterende `filterMovies()` funktion med en version der har debugging. Du kan fjerne console.log linjerne når du har forstået hvordan det virker.

Erstat eller opdater din `filterMovies()` funktion:

```javascript
// #7: Kombineret søgning, genre og sortering (MED DEBUGGING)
function filterMovies() {
  console.log("🔄 ===== STARTER FILTRERING =====");

  // Hent værdier fra UI
  const searchValue = document.querySelector("#search-input").value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;
  const sortValue = document.querySelector("#sort-select").value;

  console.log(`🔍 Søgeterm: "${searchValue}"`);
  console.log(`🎭 Valgt genre: "${genreValue}"`);
  console.log(`📊 Valgt sortering: "${sortValue}"`);

  // Start med alle film
  let filteredMovies = allMovies;
  console.log(`📋 Starter med: ${filteredMovies.length} movies`);

  // TRIN 1: Filtrer på søgetekst (hvis der er skrevet noget)
  if (searchValue) {
    console.log(`🔍 Filtrerer på søgetekst: "${searchValue}"`);
    filteredMovies = filteredMovies.filter(movie => {
      const matches = movie.title.toLowerCase().includes(searchValue);
      if (matches) {
        console.log(`  ✅ "${movie.title}" matcher "${searchValue}"`);
      }
      return matches;
    });
    console.log(`📊 Efter søgetekst filter: ${filteredMovies.length} movies tilbage`);
  } else {
    console.log(`🔍 Ingen søgetekst - springer over`);
  }

  // TRIN 2: Filtrer på genre (hvis ikke "all")
  if (genreValue !== "all") {
    console.log(`🎭 Filtrerer på genre: "${genreValue}"`);
    filteredMovies = filteredMovies.filter(movie => {
      const hasGenre = movie.genre.includes(genreValue);
      if (hasGenre) {
        console.log(`  ✅ "${movie.title}" har genre "${genreValue}"`);
      }
      return hasGenre;
    });
    console.log(`📊 Efter genre filter: ${filteredMovies.length} movies tilbage`);
  } else {
    console.log(`🎭 Alle genrer valgt - springer over genre filter`);
  }

  // TRIN 3: Sortér resultater
  if (sortValue === "title") {
    console.log(`📝 Sorterer alfabetisk på titel (A-Å)`);
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "year") {
    console.log(`📅 Sorterer på år (nyeste først)`);
    filteredMovies.sort((a, b) => b.year - a.year);
  } else if (sortValue === "rating") {
    console.log(`⭐ Sorterer på rating (højeste først)`);
    filteredMovies.sort((a, b) => b.rating - a.rating);
  } else {
    console.log(`📊 Ingen sortering valgt`);
  }

  console.log(`✅ FINAL RESULTAT: ${filteredMovies.length} movies`);
  console.log(
    "📋 Titles:",
    filteredMovies.map(m => m.title)
  );
  console.log("🔄 ===== FILTRERING FÆRDIG =====\n");

  displayMovies(filteredMovies);
}
```

**5b. Test den komplette filtrering**

1. **GEM** `app.js` og refresh browseren
2. **Åbn Console** i Developer Tools
3. **Test forskellige kombinationer** og se console output:

**Test 1: Kun søgning**

- Skriv "the" i søgefeltet
- Se hvilke film matcher
- Bemærk: "The Matrix", "The Dark Knight" matcher

**Test 2: Kun genre**

- Slet søgetekst
- Vælg "Action" i genre dropdown
- Se hvilke Action film vises

**Test 3: Kun sortering**

- Vælg "All Genres"
- Vælg "Rating" i sort dropdown
- Se film sorteret efter rating

**Test 4: Kombination**

- Skriv "a" i søgefeltet
- Vælg "Action" genre
- Vælg "Year" sortering
- Se komplette filtrering i action

**💡 Hvad skal du bemærke:**

- Antallet af film ændrer sig ved hvert filter-trin
- Sortering sker EFTER filtrering
- Console viser præcis hvilke film der matcher hvert trin

### Trin 6: Forstå rækkefølgen af operationer

**6a. Vigtigheden af rækkefølge**

**🧪 TEST FUNKTION (til læring - kan fjernes senere):**

```javascript
// 🧪 TEST FUNKTION - Kun til læring (kan fjernes efter forståelse)
function understandFilterOrder() {
  console.log("=== FORSTÅ FILTER RÆKKEFØLGE ===");

  const testMovies = [
    { title: "The Action Hero", genre: ["Action"], year: 2020, rating: 8.0 },
    { title: "Action Adventure", genre: ["Action"], year: 2022, rating: 7.5 },
    { title: "The Drama", genre: ["Drama"], year: 2021, rating: 9.0 }
  ];

  console.log(
    "📋 Start movies:",
    testMovies.map(m => `"${m.title}"`)
  );

  // Scenario: Søg "action" + genre "Action" + sort "year"

  // KORREKT rækkefølge: Filter først, sort til sidst
  console.log("\n✅ KORREKT: Filter → Filter → Sort");
  let step1 = testMovies.filter(m => m.title.toLowerCase().includes("action"));
  console.log(
    "Efter søgning:",
    step1.map(m => `"${m.title}"`)
  );

  let step2 = step1.filter(m => m.genre.includes("Action"));
  console.log(
    "Efter genre:",
    step2.map(m => `"${m.title}"`)
  );

  let step3 = step2.sort((a, b) => b.year - a.year);
  console.log(
    "Efter sortering:",
    step3.map(m => `"${m.title}" (${m.year})`)
  );

  // FORKERT rækkefølge: Sort først
  console.log("\n❌ FORKERT: Sort → Filter → Filter");
  let wrong1 = [...testMovies].sort((a, b) => b.year - a.year);
  console.log(
    "Efter sortering:",
    wrong1.map(m => `"${m.title}" (${m.year})`)
  );

  let wrong2 = wrong1.filter(m => m.title.toLowerCase().includes("action"));
  console.log(
    "Efter søgning:",
    wrong2.map(m => `"${m.title}"`)
  );

  let wrong3 = wrong2.filter(m => m.genre.includes("Action"));
  console.log(
    "Efter genre:",
    wrong3.map(m => `"${m.title}"`)
  );

  console.log("\n💡 Samme resultat, men sortering skal altid være SIDST!");
}
```

**6b. Test rækkefølge betydning**

1. **Tilføj test funktionen** til din `app.js` (kun midlertidigt til læring)
2. **Kør i Console:** `understandFilterOrder()`
3. **Forstå hvorfor rækkefølge er vigtig:**
   - Filtrering reducerer antallet af elementer
   - Sortering arrangerer de tilbageværende elementer
   - Effektivitet: Sortér færre elementer = hurtigere

**💡 Husk altid: FILTER → FILTER → SORT** ✅

**🗑️ Oprydning:** Du kan fjerne `understandFilterOrder()` funktionen når du har forstået konceptet.

**🧹 SAMLEDE OPRYDNING EFTER DEL 1:**
Efter du har forstået filtrering og sortering kan du fjerne alle test funktioner:

- `understandStringSearch()`
- `understandGenreFiltering()`
- `understandSorting()`
- `understandFilterOrder()`

Du kan også fjerne eller forenkle console.log linjerne i din `filterMovies()` funktion når du er tryg ved hvordan det virker.

### Trin 7: Udvid filtrering med ny funktionalitet 🚀

**Formål:** Nu skal du anvende din forståelse til at bygge nye filtreringsmuligheder step-by-step!

**7a. Tilføj årstal range filtrering**

Lad os tilføje muligheden for at filtrere film efter årstal (f.eks. "2020-2025").

**Først: Tilføj HTML til index.html**

Find din filter bar og tilføj dette nye input efter genre dropdown:

```html
<div class="filter-bar">
  <input type="text" id="search-input" placeholder="Søg efter film..." />

  <select id="genre-select">
    <option value="all">Alle genrer</option>
    <!-- dine eksisterende genre options -->
  </select>

  <!-- ✨ NY: År range filter -->
  <div class="year-filter">
    <label for="year-from">Fra år:</label>
    <input type="number" id="year-from" placeholder="2000" min="1900" max="2030" />
    <label for="year-to">Til år:</label>
    <input type="number" id="year-to" placeholder="2025" min="1900" max="2030" />
  </div>

  <select id="sort-select">
    <option value="none">Ingen sortering</option>
    <!-- dine eksisterende sort options -->
  </select>
</div>
```

**7b. Udvid filterMovies() med år filtrering - STEP FOR STEP**

**📋 Plan:** Vi bygger år filtrering i små trin og tester efter hvert trin!

**TRIN 1: Forstå og test parseInt() først**

Tilføj denne test funktion til din `app.js` for at forstå parseInt():

```javascript
// 🧪 TEST: Forstå parseInt() og default værdier
function testParseInt() {
  console.log("=== TEST AF PARSEINT ===");

  // Test forskellige input typer
  console.log('parseInt("2020"):', parseInt("2020")); // 2020
  console.log('parseInt(""):', parseInt("")); // NaN
  console.log('parseInt("abc"):', parseInt("abc")); // NaN
  console.log('parseInt("2020.5"):', parseInt("2020.5")); // 2020 (fjerner decimaler)

  // Test || operator til default værdier
  console.log('parseInt("") || 0:', parseInt("") || 0); // 0 (default)
  console.log('parseInt("2020") || 0:', parseInt("2020") || 0); // 2020
  console.log('parseInt("abc") || 9999:', parseInt("abc") || 9999); // 9999 (default)

  console.log("💡 NaN er 'falsy', så || giver default værdien");
}
```

**Test det:**

1. **Tilføj funktionen** til din `app.js`
2. **Kør i Console:** `testParseInt()`
3. **Forstå output** - hvorfor får vi default værdier?

**TRIN 2: Test hentning af år værdier fra DOM**

Tilføj denne test funktion:

```javascript
// 🧪 TEST: Hent år værdier fra input felter
function testGetYearValues() {
  console.log("=== TEST AF ÅR VÆRDIER ===");

  // Hent de rå værdier
  const rawYearFrom = document.querySelector("#year-from").value;
  const rawYearTo = document.querySelector("#year-to").value;

  console.log('Rå værdi fra "year-from":', `"${rawYearFrom}"`);
  console.log('Rå værdi fra "year-to":', `"${rawYearTo}"`);

  // Konverter til tal med default
  const yearFrom = parseInt(rawYearFrom) || 0;
  const yearTo = parseInt(rawYearTo) || 9999;

  console.log("Konverteret yearFrom:", yearFrom);
  console.log("Konverteret yearTo:", yearTo);

  // Test logik
  console.log("Er der sat år filter?", yearFrom > 0 || yearTo < 9999);
}
```

**Test det:**

1. **Kør i Console:** `testGetYearValues()` (med tomme felter)
2. **Skriv "2020" i "Fra år"** og kør igen
3. **Skriv "2022" i "Til år"** og kør igen
4. **Forstå forskellen** mellem tomme og udfyldte felter

**TRIN 3: Test år filtrering logik isoleret**

```javascript
// 🧪 TEST: År filtrering logik
function testYearFiltering() {
  console.log("=== TEST AF ÅR FILTRERING ===");

  // Test data
  const testMovies = [
    { title: "Old Movie", year: 2018 },
    { title: "2020 Movie", year: 2020 },
    { title: "Recent Movie", year: 2022 },
    { title: "Future Movie", year: 2025 }
  ];

  // Test scenario: Film fra 2020-2022
  const yearFrom = 2020;
  const yearTo = 2022;

  console.log(
    `🎬 Test movies:`,
    testMovies.map(m => `"${m.title}" (${m.year})`)
  );
  console.log(`📅 Filter: ${yearFrom} - ${yearTo}`);

  // Test hver film
  for (const movie of testMovies) {
    const inRange = movie.year >= yearFrom && movie.year <= yearTo;
    console.log(`📝 "${movie.title}" (${movie.year}) → i range? ${inRange}`);
  }

  // Filter resultatet
  const filtered = testMovies.filter(movie => {
    return movie.year >= yearFrom && movie.year <= yearTo;
  });

  console.log(
    `✅ Filtrerede film:`,
    filtered.map(m => `"${m.title}" (${m.year})`)
  );
}
```

**Test det:**

1. **Kør i Console:** `testYearFiltering()`
2. **Forstå logikken:** `>=` og `<=` operatorer
3. **Se hvilke film** der matcher 2020-2022 range

**TRIN 4: Tilføj år værdier til din filterMovies() funktion**

Nu tilføjer vi kun år værdierne til din eksisterende `filterMovies()`:

```javascript
// #7: Opdater din filterMovies() - TILFØJ DISSE LINJER
function filterMovies() {
  console.log("🔄 ===== STARTER FILTRERING =====");

  // Eksisterende værdier (uændret)
  const searchValue = document.querySelector("#search-input").value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;
  const sortValue = document.querySelector("#sort-select").value;

  // ✨ TILFØJ DISSE NYE LINJER:
  const yearFrom = parseInt(document.querySelector("#year-from").value) || 0;
  const yearTo = parseInt(document.querySelector("#year-to").value) || 9999;

  // Eksisterende console logs (uændret)
  console.log(`🔍 Søgeterm: "${searchValue}"`);
  console.log(`🎭 Valgt genre: "${genreValue}"`);
  console.log(`📊 Valgt sortering: "${sortValue}"`);

  // ✨ TILFØJ DENNE NYE LOG:
  console.log(`📅 År range: ${yearFrom} - ${yearTo}`);

  // Rest af funktionen forbliver uændret for nu...
  let filteredMovies = allMovies;
  console.log(`📋 Starter med: ${filteredMovies.length} movies`);

  // Dine eksisterende filtre (søgning, genre, sortering) - UÆNDRET
  // ... resten af din kode ...

  displayMovies(filteredMovies);
}
```

**Test delvise ændringer:**

1. **GEM** `app.js` og refresh browseren
2. **Skriv i år felterne** og brug eksisterende filtre
3. **Se console output** - ser du de nye år værdier?
4. **Verify** at eksisterende filtrering stadig virker

**TRIN 5: Tilføj selve år filtreringen**

Nu tilføjer vi filtreringslogikken efter dine eksisterende filtre:

```javascript
// Tilføj EFTER dine eksisterende filtre (søgning og genre), men FØR sortering:

// ✨ NY: Filtrer på år range
if (yearFrom > 0 || yearTo < 9999) {
  console.log(`📅 Anvender år filter: ${yearFrom} - ${yearTo}`);

  const beforeYearFilter = filteredMovies.length;

  filteredMovies = filteredMovies.filter(movie => {
    const movieYear = movie.year;
    const inRange = movieYear >= yearFrom && movieYear <= yearTo;

    if (inRange) {
      console.log(`  ✅ "${movie.title}" (${movieYear}) er i range`);
    } else {
      console.log(`  ❌ "${movie.title}" (${movieYear}) er IKKE i range`);
    }

    return inRange;
  });

  console.log(`📊 År filter: ${beforeYearFilter} → ${filteredMovies.length} movies`);
} else {
  console.log(`📅 Ingen år filter anvendt (0-9999)`);
}
```

**Test år filtreringen:**

1. **GEM** og refresh browseren
2. **Test scenarios:**
   - **Tom år felter** → Se "Ingen år filter anvendt"
   - **Fra: 2020** → Se hvilke film der er fra 2020+
   - **Til: 2022** → Se hvilke film der er til 2022
   - **Fra: 2020, Til: 2022** → Se kun film 2020-2022
3. **Kombiner med eksisterende filtre:**
   - Søg "the" + År 2020-2022
   - Genre "Action" + År 2020+

**TRIN 6: Test complete implementering**

Din komplette `filterMovies()` skulle nu se sådan ud:

```javascript
function filterMovies() {
  console.log("🔄 ===== STARTER UDVIDET FILTRERING =====");

  // Hent alle værdier
  const searchValue = document.querySelector("#search-input").value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;
  const sortValue = document.querySelector("#sort-select").value;
  const yearFrom = parseInt(document.querySelector("#year-from").value) || 0;
  const yearTo = parseInt(document.querySelector("#year-to").value) || 9999;

  // Log alle værdier
  console.log(`🔍 Søgeterm: "${searchValue}"`);
  console.log(`🎭 Valgt genre: "${genreValue}"`);
  console.log(`📅 År range: ${yearFrom} - ${yearTo}`);
  console.log(`📊 Valgt sortering: "${sortValue}"`);

  // Start filtrering
  let filteredMovies = allMovies;
  console.log(`📋 Starter med: ${filteredMovies.length} movies`);

  // FILTER 1: Søgetekst (din eksisterende kode)
  if (searchValue) {
    console.log(`🔍 Filtrerer på søgetekst: "${searchValue}"`);
    filteredMovies = filteredMovies.filter(movie => {
      return movie.title.toLowerCase().includes(searchValue);
    });
    console.log(`📊 Efter søgetekst filter: ${filteredMovies.length} movies`);
  }

  // FILTER 2: Genre (din eksisterende kode)
  if (genreValue !== "all") {
    console.log(`🎭 Filtrerer på genre: "${genreValue}"`);
    filteredMovies = filteredMovies.filter(movie => {
      return movie.genre.includes(genreValue);
    });
    console.log(`📊 Efter genre filter: ${filteredMovies.length} movies`);
  }

  // FILTER 3: År range (ny kode)
  if (yearFrom > 0 || yearTo < 9999) {
    console.log(`📅 Filtrerer på år: ${yearFrom} - ${yearTo}`);
    filteredMovies = filteredMovies.filter(movie => {
      return movie.year >= yearFrom && movie.year <= yearTo;
    });
    console.log(`📊 Efter år filter: ${filteredMovies.length} movies`);
  }

  // SORTERING (din eksisterende kode)
  if (sortValue === "title") {
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
    console.log("📝 Sorteret alfabetisk");
  } else if (sortValue === "year") {
    filteredMovies.sort((a, b) => b.year - a.year);
    console.log("📅 Sorteret på år");
  } else if (sortValue === "rating") {
    filteredMovies.sort((a, b) => b.rating - a.rating);
    console.log("⭐ Sorteret på rating");
  }

  console.log(`✅ FINAL: ${filteredMovies.length} movies`);
  displayMovies(filteredMovies);
}
```

**Komplet test af år filtrering:**

1. **Test alle kombinationer** af filtre
2. **Verificer rækkefølge:** Søg → Genre → År → Sort
3. **Se console logs** for at forstå hvert trin

**🗑️ Oprydning:** Fjern test funktionerne når du forstår koncepterne:

- `testParseInt()`
- `testGetYearValues()`
- `testYearFiltering()`

**7c. Tilføj event listeners for nye felter**

Opdater din `initApp()` funktion til at lytte på de nye år felter:

```javascript
// #1: Initialize the app (opdateret med nye event listeners)
function initApp() {
  console.log("initApp: app.js is running 🎉");
  getMovies();

  // Eksisterende event listeners
  document.querySelector("#search-input").addEventListener("input", filterMovies);
  document.querySelector("#genre-select").addEventListener("change", filterMovies);
  document.querySelector("#sort-select").addEventListener("change", filterMovies);

  // ✨ NYE: Event listeners for år range
  document.querySelector("#year-from").addEventListener("input", filterMovies);
  document.querySelector("#year-to").addEventListener("input", filterMovies);
}
```

**7d. Test den nye år filtrering**

1. **GEM alle filer** og refresh browseren
2. **Test scenarios:**
   - **Skriv "2020" i "Fra år"** → Se kun film fra 2020 og senere
   - **Skriv "2022" i "Til år"** → Se kun film til og med 2022
   - **Kombiner:** Fra: 2020, Til: 2022 → Se kun film mellem 2020-2022
   - **Kombiner med søgning:** Søg "the" + Fra: 2020 → Se "The" film fra 2020+

**💡 Hvad lærte du?**

- Hvordan man tilføjer nye filter kriterier
- parseInt() til at konvertere string til tal
- || operator til at sætte default værdier
- Rækkefølgen af filtre er vigtig

**7e. Tilføj rating range filtrering** **(ekstra)** - du får ikke helt så meget hjælp her - spring videre til 7f, hvis det ikke giver mening for dig.

Nu skal du selv implementere rating filtrering! Det er din tur til at anvende det du har lært:

**Din opgave:**

1. **Tilføj HTML** for "Fra rating" og "Til rating" input felter (type="number", min="0", max="10", step="0.1")
2. **Udvid filterMovies()** med et nyt filter trin for rating range
3. **Tilføj event listeners** for de nye rating felter
4. **Test** at det virker med forskellige kombinationer

**Hjælp til implementering:**

```javascript
// Hint til rating filter trin:
const ratingFrom = parseFloat(document.querySelector("#rating-from").value) || 0;
const ratingTo = parseFloat(document.querySelector("#rating-to").value) || 10;

// Hint til filtering:
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
  const yearFrom = parseInt(document.querySelector("#year-from").value) || 0;
  const yearTo = parseInt(document.querySelector("#year-to").value) || 9999;
  const ratingFrom = parseFloat(document.querySelector("#rating-from").value) || 0;
  const ratingTo = parseFloat(document.querySelector("#rating-to").value) || 10;

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
2. **Åbn Console** i Developer Tools
3. **Test modal** med første film:
   ```javascript
   // Test i Console
   showMovieModal(allMovies[0]);
   ```
4. **Test automatisk lukning**:
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

**4a. Test modal direkte i Console**

1. **GEM** `app.js` og refresh browseren
2. **Åbn Console** i Developer Tools
3. **Test den nye modal** med en eksisterende film:
   ```javascript
   // Test med første film
   showMovieModal(allMovies[0]);
   ```
4. **Test automatisk lukning**:
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
