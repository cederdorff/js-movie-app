# Movie App - Session 4: Modal Dialog og Avancerede Features

## Opgaver til fjerde undervisningsgang

> **Vigtig:** Du bygger videre på dit projekt fra Session 3. Sørg for at din `filterMovies()` funktion virker og viser film med `alert()` når du klikker på en movie card - ellers er der hjælp at hente i del 0.

> **Developer Tools:** Hold øje med Console-fanen mens du arbejder - vi bruger `console.log()` til at forstå hvad der sker!

---

## Del 0: Forbered dit projekt til modal dialog 🎯

**Formål:** Sørg for dit projekt er klar til at erstatte `alert()` med en flot modal dialog.

### Trin 0: Tjek dit nuværende setup

**0a. Verificer at dit projekt virker fra Session 3**

1. **Åbn dit projekt** fra Session 3 i VS Code
2. **Start Live Server** (højreklik på `index.html`)
3. **Tjek i browseren**:
   - Ser du film cards?
   - Virker søgning, genre filtrering og sortering?
   - Får du `alert()` når du klikker på en film card?
   - Har du `showMovieDetails()` funktionen i din `app.js`?

**0b. Repetér din nuværende filtrering**

Tjek at din `filterMovies()` funktion ser sådan ud:

```javascript
// #7: Kombineret søgning, genre og sortering
function filterMovies() {
  const searchValue = document.querySelector("#search-input").value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;
  const sortValue = document.querySelector("#sort-select").value;

  // Start med alle movies
  let filteredMovies = allMovies;

  // TRIN 1: Filtrer på søgetekst
  if (searchValue) {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.title.toLowerCase().includes(searchValue);
    });
  }

  // TRIN 2: Filtrer på genre
  if (genreValue !== "all") {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.genre.includes(genreValue);
    });
  }

  // TRIN 3: Sorter resultater
  if (sortValue === "title") {
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "year") {
    filteredMovies.sort((a, b) => b.year - a.year); // Nyeste først
  } else if (sortValue === "rating") {
    filteredMovies.sort((a, b) => b.rating - a.rating); // Højeste først
  }

  displayMovies(filteredMovies);
}
```

#### ✅ Test det opdaterede setup!

1. **GEM dine ændringer** (`Ctrl+S` / `Cmd+S`)
2. **Refresh browseren**
3. **Test alle funktioner**:
   - Søg efter "dark" → Se resultater
   - Vælg "Action" genre → Se kun action film
   - Sort på "Rating" → Se højeste rating først
   - Klik på en film → Se alert med detaljer

**💡 Ready for modal?** Nu er du klar til at erstatte alert med en flot dialog!

---

## Del 1: Modal Dialog HTML og CSS 🎭

**Formål:** Udvid din filtrering med nye funktioner før vi går til modal dialog.


### Trin 1: Tilføj modal HTML til index.html

**1a. Tilføj dialog element**

Åbn din `index.html` og tilføj dette EFTER `</main>` og FØR `<script src="app.js">`:

```html
    </main>
    <!-- Footer -->
    <footer>
      <p>© RACE - Rasmus Cederdorff</p>
    </footer>

    <!-- Modal dialog til movie detaljer -->
    <dialog id="movie-modal" class="movie-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="modal-title"></h2>
          <button class="close-modal" id="close-modal">✕</button>
        </div>
        <div class="modal-body">
          <div class="modal-movie-image">
            <img id="modal-image" src="" alt="">
          </div>
          <div class="modal-movie-info">
            <p><strong>År:</strong> <span id="modal-year"></span></p>
            <p><strong>Genre:</strong> <span id="modal-genre"></span></p>
            <p><strong>Rating:</strong> <span id="modal-rating"></span></p>
            <p><strong>Plot:</strong></p>
            <p id="modal-plot"></p>
          </div>
        </div>
      </div>
    </dialog>

    <script src="app.js"></script>
  </body>
</html>
```

**1b. Test HTML struktur**

1. **GEM** `index.html`
2. **Refresh** browseren
3. **Kig efter fejl** i Console (der skulle ikke være nogen)

### Trin 2: Tilføj CSS til modal dialog

**2a. Tilføj modal styling til app.css**

Åbn din `app.css` og tilføj dette CSS (efter din eksisterende CSS):

```css
/* ======================
   MODAL DIALOG STYLING
   ====================== */

/* Dialog element - skjult som standard */
.movie-modal {
  border: none;
  padding: 0;
  margin: 0;
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  background: transparent;
}

/* Modal backdrop (baggrund når åben) */
.movie-modal::backdrop {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
}

/* Modal content container */
.modal-content {
  background: var(--bg-color);
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

/* Modal header */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: var(--primary-color);
  color: white;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

/* Close knap */
.close-modal {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.close-modal:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Modal body */
.modal-body {
  padding: 2rem;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  align-items: start;
}

/* Movie image i modal */
.modal-movie-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Movie info i modal */
.modal-movie-info {
  color: var(--text-color);
}

.modal-movie-info p {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.modal-movie-info strong {
  color: var(--primary-color);
}

/* Responsive modal */
@media (max-width: 600px) {
  .modal-body {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
  }
  
  .modal-movie-image {
    justify-self: center;
  }
  
  .modal-movie-image img {
    max-width: 200px;
  }
}
```

**2b. Test modal styling**

1. **GEM** `app.css`
2. **Refresh** browseren  
3. **Åbn Developer Tools** og gå til Elements
4. **Find `<dialog>` elementet** og tilføj midlertidigt `open` attribut:
   ```html
   <dialog id="movie-modal" class="movie-modal" open>
   ```
5. **Se modal styling** (den skulle vise en tom modal)
6. **Fjern `open` igen** så modal er skjult

---

## Del 2: JavaScript Modal Funktionalitet 🎬

### Trin 2: Tilføj bedre feedback til filtrering

**2a. Tilføj console logs til debugging**

Opdater din `filterMovies()` funktion til at vise mere information:

```javascript
// #7: Kombineret søgning, genre og sortering
function filterMovies() {
  console.log("🔄 Starter filtrering...");

  const searchValue = document.querySelector("#search-input").value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;
  const sortValue = document.querySelector("#sort-select").value;

  console.log(`🔍 Søgeterm: "${searchValue}"`);
  console.log(`🎭 Genre: "${genreValue}"`);
  console.log(`📊 Sortering: "${sortValue}"`);

  // Start med alle movies
  let filteredMovies = allMovies;
  console.log(`📋 Starter med: ${filteredMovies.length} movies`);

  // TRIN 1: Filtrer på søgetekst
  if (searchValue) {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.title.toLowerCase().includes(searchValue);
    });
    console.log(`🔍 Efter søgning: ${filteredMovies.length} movies`);
  }

  // TRIN 2: Filtrer på genre
  if (genreValue !== "all") {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.genre.includes(genreValue);
    });
    console.log(`🎭 Efter genre filter: ${filteredMovies.length} movies`);
  }

  // TRIN 3: Sorter resultater
  if (sortValue === "title") {
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
    console.log("📝 Sorteret alfabetisk på titel");
  } else if (sortValue === "year") {
    filteredMovies.sort((a, b) => b.year - a.year); // Nyeste først
    console.log("📅 Sorteret på år (nyeste først)");
  } else if (sortValue === "rating") {
    filteredMovies.sort((a, b) => b.rating - a.rating); // Højeste først
    console.log("⭐ Sorteret på rating (højeste først)");
  }

  console.log(`✅ Final resultater: ${filteredMovies.length} movies`);
  displayMovies(filteredMovies);
}
```

#### ✅ Test forbedret filtrering!

1. **GEM og refresh** browseren
2. **Åbn Console** i Developer Tools
3. **Test forskellige kombinationer**:
   - Søg "the" → Se console logs
   - Vælg "Action" genre → Se antal ændringer
   - Sort på "Rating" → Se sortering besked
4. **Forstå hvordan filtrering virker** gennem console logs

**💡 Hvad lærte vi?**

- Console logging hjælper med debugging
- Vi kan følge data gennem hver filter-trin
- Antallet af resultater ændrer sig ved hver operation

---

## Del 2: Modal Dialog HTML og CSS 🎭

**Formål:** Opret HTML struktur og styling til modal dialog.

### Trin 3: Tilføj modal HTML til index.html

**3a. Tilføj dialog element**

Åbn din `index.html` og tilføj dette EFTER `</main>` og FØR `<script src="app.js">`:

```html
    </main>
    <!-- Footer -->
    <footer>
      <p>© RACE - Rasmus Cederdorff</p>
    </footer>

    <!-- Movie Detail Modal -->
    ---

## Del 2: JavaScript Modal Funktionalitet 🔧

    <script src="app.js"></script>
```

**💡 Hvad betyder det?**

- `<dialog>` er HTML5 element til modals
- `method="dialog"` gør at form kan lukke dialogen
- `#close-dialog` er luk-knap (X)
- `#dialog-content` er hvor vi sætter film detaljer

**3b. Tilføj event listener til luk-knap**

Opdater din `initApp()` funktion til at håndtere modal lukning:

```javascript
// #1: Initialize the app
function initApp() {
  console.log("initApp: app.js is running 🎉");
  getMovies();
  document.querySelector("#search-input").addEventListener("input", filterMovies);
  document.querySelector("#genre-select").addEventListener("change", filterMovies);
  document.querySelector("#sort-select").addEventListener("change", filterMovies);

  // Event listener til modal lukning
  document.querySelector("#close-dialog").addEventListener("click", closeMovieDialog);
}
```

**3c. Opret closeMovieDialog funktion**

Tilføj denne nye funktion til din `app.js`:

```javascript
// #8: Luk movie dialog
function closeMovieDialog() {
  document.querySelector("#movie-dialog").close();
}
```

#### ✅ Test modal HTML!

1. **GEM alle filer** og refresh browseren
2. **Åbn Developer Tools** → Elements tab
3. **Find `<dialog id="movie-dialog">`** i HTML'en
4. **Tjek at elementer findes**:
   - `#movie-dialog`
   - `#close-dialog`
   - `#dialog-content`

**Bemærk:** Modalen er ikke synlig endnu - det kommer i næste trin!

### Trin 4: Basis modal styling

**4a. Tilføj modal CSS til app.css**

Åbn din `app.css` og tilføj denne sektion i slutningen af filen:

```css
/* =====================
   MOVIE DIALOG
   ===================== */
dialog#movie-dialog {
  border: none;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.4);
  padding: 0;
  max-width: min(95vw, 800px);
  max-height: 90vh;
  background: var(--bg-card);
  color: var(--text);
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
  color: #333;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
}

#close-dialog:hover {
  background: var(--error);
  color: white;
  transform: scale(1.1);
}

#dialog-content {
  padding: 2rem;
  overflow-y: auto;
  max-height: 90vh;
}
```

#### ✅ Test basis styling!

1. **GEM CSS filen** og refresh browseren
2. **Styling er nu forberedt** til modal (men endnu ikke synlig)
3. **CSS variabler** bruger dit eksisterende design system

**💡 Hvad lærte vi?**

- `::backdrop` styler baggrunden bag modalen
- `position: absolute` på luk-knap placerer den øverst
- CSS variabler (`var(--bg-card)`) genbrug dit design

---

## Del 2: JavaScript Modal Funktionalitet 🔧

**Formål:** Erstat `alert()` med rigtig modal dialog funktionalitet.

### Trin 5: Erstat showMovieDetails med showMovieDialog

**Problem:** Vi har `showMovieDetails()` med `alert()`, men vi vil have en flot modal!

**5a. Erstat din showMovieDetails funktion**

Find din `showMovieDetails()` funktion i `app.js` og erstat den med:

```javascript
// #5: Vis movie detaljer i modal dialog
function showMovieDialog(movie) {
  console.log("🎭 Åbner modal for:", movie.title);

  // Fyld modal med film data
  document.querySelector("#dialog-content").innerHTML = /*html*/ `
    <img src="${movie.image}" class="movie-poster" />
    <div class="dialog-details">
      <h2>${movie.title} <span class="movie-year">(${movie.year})</span></h2>
      <p class="movie-genre">${movie.genre.join(", ")}</p>
      <p class="movie-rating">⭐ ${movie.rating}</p>
      <p class="movie-director"><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Actors:</strong> ${movie.actors.join(", ")}</p>
      <p class="movie-description">${movie.description}</p>
    </div>
  `;

  // Åbn modalen
  document.querySelector("#movie-dialog").showModal();
}
```

**💡 Hvordan virker det?**

1. Vi bruger `innerHTML` til at sætte film data i `#dialog-content`
2. Vi viser alle film detaljer (også `actors` og `description`)
3. Vi bruger `showModal()` til at åbne dialogen
4. Luk-knappen virker automatisk via vores event listener

**5b. Opdater click event til at bruge nye funktion**

Find din `displayMovie()` funktion og opdater click event:

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
    showMovieDialog(movie); // ÆNDRET: Brug ny modal funktion
  });

  // Tilføj keyboard support
  newCard.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showMovieDialog(movie); // ÆNDRET: Brug ny modal funktion
    }
  });
}
```

#### ✅ Test modal funktionalitet!

1. **GEM alle filer** og refresh browseren
2. **Klik på en movie card** → Se modal åbne!
3. **Tjek modal indhold**:
   - Film poster
   - Titel og år
   - Genre, rating, director
   - Actors og description
4. **Test luk modal**:
   - Klik X knap → Modal lukker
   - Klik uden for modal → Modal lukker
   - Tryk Escape → Modal lukker

**💡 Modal virker nu!** Men styling kan forbedres...

---

## Del 3: Forbedret Modal Styling 🎨

**Formål:** Gør modalen flot med bedre layout og responsive design.

### Trin 6: Forbedret modal layout

**6a. Opdater modal styling i app.css**

Udskift din eksisterende modal CSS med denne forbedrede version:

```css
/* =====================
   MOVIE DIALOG
   ===================== */
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

@media (max-width: 768px) {
  #dialog-content {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    gap: 1.5rem;
    text-align: center;
  }
}
```

**💡 Hvad er nyt?**

- **Grid layout**: Poster til venstre, detaljer til højre
- **Responsive**: Mobil layout stacker vertikalt
- **CSS variabler**: Bruger dit eksisterende design system
- **Forbedrede transitions**: Smooth animationer

**6b. Tilføj styling til modal indhold**

Tilføj denne CSS til modal sektionen:

```css
#dialog-content img.movie-poster {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

@media (max-width: 768px) {
  #dialog-content img.movie-poster {
    max-width: 300px;
    margin: 0 auto;
  }
}

.dialog-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

#dialog-content h2 {
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 700;
  color: var(--text);
  line-height: 1.2;
  margin: 0 0 1rem 0;
}

#dialog-content .movie-year {
  display: inline-block;
  background: var(--secondary-light);
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  margin-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
}

#dialog-content p {
  color: var(--text-light);
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

#dialog-content p strong {
  color: var(--text);
  font-weight: 600;
}

#dialog-content .movie-genre {
  color: var(--secondary);
  font-weight: 500;
  font-size: 1.1rem;
}

#dialog-content .movie-rating {
  color: var(--warning);
  font-weight: 600;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  #dialog-content .movie-rating {
    justify-content: center;
  }
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

#### ✅ Test forbedret modal styling!

1. **GEM CSS filen** og refresh browseren
2. **Klik på en movie card** → Se forbedret modal!
3. **Test responsive design**:
   - Desktop: Poster til venstre, detaljer til højre
   - Mobil: Vertikal stacking
4. **Test alle elementer**:
   - Stor poster billede
   - Flot titel og år badge
   - Colored genre, rating, osv.
   - Highlighted description box

**💡 Professionel modal!** Nu ser det helt anderledes ud end alert()!

---

## Del 4: Modal Tilgængelighed og UX 🚀

**Formål:** Forbedre brugeroplevelsen med keyboard navigation og bedre funktionalitet.

### Trin 7: Keyboard support til modal

**7a. Tilføj ESC key support**

Opdater din `initApp()` funktion til at håndtere ESC key:

```javascript
// #1: Initialize the app
function initApp() {
  console.log("initApp: app.js is running 🎉");
  getMovies();
  document.querySelector("#search-input").addEventListener("input", filterMovies);
  document.querySelector("#genre-select").addEventListener("change", filterMovies);
  document.querySelector("#sort-select").addEventListener("change", filterMovies);

  // Event listener til modal lukning
  document.querySelector("#close-dialog").addEventListener("click", closeMovieDialog);

  // ESC key support til modal
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMovieDialog();
    }
  });
}
```

**7b. Forbedre closeMovieDialog funktion**

Opdater din `closeMovieDialog()` funktion:

```javascript
// #8: Luk movie dialog
function closeMovieDialog() {
  const dialog = document.querySelector("#movie-dialog");
  if (dialog.open) {
    dialog.close();
    console.log("🔒 Modal lukket");
  }
}
```

**💡 Hvad tilføjede vi?**

- **ESC key**: Lukker modal når man trykker Escape
- **Safety check**: Tjekker om modal er åben før lukning
- **Console log**: Debugging når modal lukkes

### Trin 8: Click outside to close

**8a. Tilføj click-outside funktionalitet**

Opdater din `showMovieDialog()` funktion:

```javascript
// #5: Vis movie detaljer i modal dialog
function showMovieDialog(movie) {
  console.log("🎭 Åbner modal for:", movie.title);

  // Fyld modal med film data
  document.querySelector("#dialog-content").innerHTML = /*html*/ `
    <img src="${movie.image}" class="movie-poster" />
    <div class="dialog-details">
      <h2>${movie.title} <span class="movie-year">(${movie.year})</span></h2>
      <p class="movie-genre">${movie.genre.join(", ")}</p>
      <p class="movie-rating">⭐ ${movie.rating}</p>
      <p class="movie-director"><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Actors:</strong> ${movie.actors.join(", ")}</p>
      <p class="movie-description">${movie.description}</p>
    </div>
  `;

  const dialog = document.querySelector("#movie-dialog");

  // Åbn modalen
  dialog.showModal();

  // Click outside to close (kun én gang per modal åbning)
  dialog.addEventListener(
    "click",
    function (event) {
      if (event.target === dialog) {
        closeMovieDialog();
      }
    },
    { once: true }
  );
}
```

**💡 Hvordan virker click-outside?**

- Vi lytter på `click` på hele `dialog` elementet
- Hvis `event.target === dialog` betyder det at man klikkede på baggrunden
- `{ once: true }` sørger for at event listener kun køres én gang
- Dette forhindrer memory leaks ved at fjerne gamle listeners

#### ✅ Test forbedret UX!

1. **GEM alle filer** og refresh browseren
2. **Åbn en modal** ved at klikke på en film
3. **Test alle lukke-metoder**:
   - Klik X knap → Modal lukker
   - Tryk ESC → Modal lukker
   - Klik uden for modal (på mørk baggrund) → Modal lukker
4. **Tjek console** for debugging beskeder

**💡 Professionel brugeroplevelse!** Nu opfører modal sig som forventet!

---

## Del 5: Test og sammenfatning 🎯

**Formål:** Test hele applikationen og opsummer hvad vi har lært.

### Trin 9: Komplet funktionalitetstest

**Test systematisk:**

1. **All funktioner fra Session 3**:

   - Tekstsøgning virker
   - Genre filtrering virker
   - Sortering virker
   - Kombineret filtrering virker

2. **Modal funktionalitet**:

   - Klik på film → Modal åbner
   - Modal viser alle film detaljer
   - X knap lukker modal
   - ESC key lukker modal
   - Click outside lukker modal
   - Responsive design på mobil

3. **Keyboard navigation**:
   - Tab til movie cards
   - Enter/Space åbner modal
   - ESC lukker modal

**Test forskellige kombinationer:**

- Søg "the" + Genre "Action" → Klik på resultat → Se modal
- Sort på "Rating" → Klik på #1 film → Se højeste rating film
- Åbn modal → Luk med ESC → Åbn igen → Luk med click outside
- Test på mobil/tablet størrelse

---

## ✅ Session 4 fuldført!

**🎯 Hvad du har lært:**

### 🎭 **Modal Dialog**

- `<dialog>` HTML5 element
- `showModal()` og `close()` metoder
- `::backdrop` CSS til baggrund styling
- Form method="dialog" til automatisk lukning

### 🎨 **Avanceret CSS**

- Grid layout til responsive modal
- CSS variabler til konsistent design
- Media queries til mobil optimering
- Advanced selectors (`#dialog-content img.movie-poster`)

### ⌨️ **Tilgængelighed og UX**

- Keyboard navigation (ESC, Enter, Space)
- Click outside to close funktionalitet
- Event listener cleanup med `{ once: true }`
- Focus management og ARIA labels

### 🏗️ **Kodestruktur**

- Modulær opdeling af funktionalitet
- Event delegation patterns
- DOM manipulation med `innerHTML`
- Debugging med console logs

**💡 Din app kan nu:**

- ✅ Alle funktioner fra Session 3 (søgning, filtrering, sortering)
- ✅ Flot modal dialog i stedet for alert()
- ✅ Responsive modal design
- ✅ Fuld keyboard support
- ✅ Click outside to close
- ✅ Professional brugeroplevelse

---

## 🚀 Næste session preview

**Session 5** vil fokusere på:

1. **❤️ Favorit System** - Gem og administrer favorit film
2. **🔄 Local Storage** - Persist data mellem sessions
3. **⚡ Performance** - Lazy loading og optimering
4. **🎨 Animations** - Smooth transitions og loading states

**🎊 Tillykke! Du har nu en professionel Movie App med modal dialog! 🎉**
