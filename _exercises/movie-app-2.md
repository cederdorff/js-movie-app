# Movie App - Session 2: Fra Template til Dynamisk Data

## Opgaver til anden undervisningsgang

> **Vigtig:** Åbn Developer Tools i din browser og hold øje med både Console-fanen og Elements-fanen mens du arbejder. Du kan åbne Developer Tools med:
>
> - **Mac:** `Cmd + Option + I`
> - **PC:** `F12` eller `Ctrl + Shift + I`

---

## Del 0: Projekt Setup med Template Repository 🚀

**Formål:** Opsæt dit Movie App projekt ved hjælp af GitHub template repository.

### Trin 0: Opret projekt fra template

**0a. Gå til template repository**

1. Åbn din browser og gå til: https://github.com/cederdorff/js-movie-app-template
2. Du skulle se et repository med en grøn "Use this template" knap

**0b. Opret dit eget repository**

1. Klik på den grønne **"Use this template"** knap
2. Vælg **"Create a new repository"**
3. Udfyld repository information:
   - **Repository name**: `movie-app-[dit-navn]` (f.eks. `movie-app-sarah`)
   - **Description**: "Movie App projekt til undervisning"
   - **Public** eller **Private** (vælg hvad du foretrækker)
4. Klik **"Create repository"**

#### ✅ Check punkt!

Du skulle nu have dit eget repository baseret på template!

**0c. Clone dit repository lokalt**

1. Klik på den grønne **"Code"** knap i dit nye repository
2. Kopier HTTPS URL'en (f.eks. `https://github.com/dit-brugernavn/movie-app-dit-navn.git`)
3. Åbn Terminal/Command Prompt
4. Navigér til hvor du vil have projektet (f.eks. Desktop eller Documents)
5. Kør kommandoen:

```bash
git clone https://github.com/dit-brugernavn/movie-app-dit-navn.git
```

**0d. Åbn projekt i VS Code**

1. Åbn VS Code
2. File → Open Folder
3. Vælg din `movie-app-dit-navn` mappe
4. Du skulle nu se projektfilerne:
   - `index.html`
   - `app.css`
   - `app.js`
   - `img/favicon.png`

#### ✅ Test dit projekt!

1. Højreklik på `index.html` i VS Code
2. Vælg "Open with Live Server" (installer Live Server extension hvis nødvendigt)
3. Dit projekt skulle åbne i browseren
4. Du skulle se en Movie App med flere film "cards"!

**0e. Forstå template strukturen**

Dit nye projekt indeholder allerede:

- **Komplet HTML struktur** med movie cards - men der skal laves et grid!
- **Professionel CSS styling**
- **Basis JavaScript setup** - klar til DOM-manipulation
- **Responsive design** klar til forbedring

#### ✅ Bekræft setup!

- [ ] Repository oprettet fra template
- [ ] Projekt clonet lokalt
- [ ] Åbnet i VS Code
- [ ] Live Server kører
- [ ] Movie App vises korrekt i browser

---

## Del 1: Forstå dit nuværende projekt 🔍

**Formål:** Analysér og forstå strukturen i dit eksisterende Movie App projekt.

### Trin 1: Undersøg HTML strukturen

**1a. Åbn dit projekt og undersøg `index.html`**

Se på din nuværende HTML struktur. Du skulle have:

```html
<main>
  <!-- Movie List -->
  <section id="movie-list">
    <article class="movie-card" tabindex="0">
      <img src="..." alt="Poster of Barbie" class="movie-poster" />
      <div class="movie-info">
        <h3>Barbie <span class="movie-year">(2023)</span></h3>
        <p class="movie-genre">Adventure, Comedy, Fantasy</p>
        <p class="movie-rating">⭐ 7</p>
        <p class="movie-director"><strong>Director:</strong> Greta Gerwig</p>
      </div>
    </article>
    <!-- Flere movie cards... -->
  </section>
</main>
```

#### ✅ Analyse opgave!

Tæl følgende i din HTML:

- Hvor mange `<article class="movie-card">` elementer har du?
- Hvilket element indeholder alle movie cards?
- Hvilke CSS klasser bliver brugt?

**1b. Forstå strukturen**

Hver movie card består af:

- En **container**: `<article class="movie-card">`
- Et **billede**: `<img class="movie-poster">`
- En **info sektion**: `<div class="movie-info">`
  - Titel + år: `<h3>` med `<span class="movie-year">`
  - Genre: `<p class="movie-genre">`
  - Rating: `<p class="movie-rating">`
  - Instruktør: `<p class="movie-director">`

#### ✅ Test dit projekt!

1. Åbn din `index.html` med Live Server
2. Se hvordan movie cards ser ud
3. Åbn Developer Tools → Elements fanen
4. Inspicér en movie card - se HTML strukturen

---

### Trin 2: Undersøg nuværende CSS

**2a. Se på din `app.css` fil**

Åbn `app.css` og find CSS regler for:

- `.movie-card` - styler hver enkelt movie card
- `.movie-poster` - styler movie plakater
- `.movie-info` - styler tekst information
- `#movie-list` - styler container for alle movies

#### ✅ Eksperiment!

Prøv at ændre disse CSS værdier midlertidigt for at se hvad der sker:

```css
.movie-card {
  border: 3px solid red; /* Tilføj for at se boundaries */
}
```

Refresh siden - kan du se de røde rammer?
Du må gerne gå tilbage til det oprindelige, når du har testet.

**2b. Forstå nuværende layout**

Lige nu er dine movie cards sandsynligvis arrangeret i:

- En kolonne (lodret)
- Eller simpelt flow layout

#### ✅ Observér!

1. Resize dit browser vindue - hvordan opfører movie cards sig?
2. Er der spacing mellem cards?
3. Hvor bred er hver card?

---

## Del 2: Introduktion til CSS Grid 📐

**Formål:** Lær CSS Grid grundlæggende og forbered implementering.

### Trin 3: Forstå CSS Grid koncepter

**3a. Grid container vs Grid items**

```css
/* Grid Container - parent element */
#movie-list {
  display: grid;
}

/* Grid Items - child elements */
.movie-card {
  /* Disse bliver automatisk grid items */
}
```

**3b. Grid egenskaber du skal lære**

- `display: grid` - Aktiverer grid layout
- `grid-template-columns` - Definerer kolonne størrelser
- `gap` - Spacing mellem grid items
- `grid-auto-rows` - Højde af rækker

#### ✅ Test grundlæggende Grid!

Tilføj dette til din `#movie-list` i CSS:

```css
#movie-list {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 kolonner */
  gap: 20px;
}
```

Refresh siden - ser du forskellen?

---

### Trin 4: Responsive Grid System

**4a. Forstå `fr` enheden**

- `1fr` = 1 fraction (andel) af tilgængeligt plads
- `1fr 1fr` = 2 lige store kolonner
- `1fr 2fr` = Første kolonne 1/3, anden kolonne 2/3

**4b. Forstå `repeat()` funktionen**

```css
/* I stedet for: 1fr 1fr 1fr 1fr */
grid-template-columns: repeat(4, 1fr); /* 4 lige kolonner */

/* Mixed størrelser */
grid-template-columns: repeat(3, 200px); /* 3 kolonner, hver 200px */
```

#### ✅ Eksperimentér!

Prøv disse forskellige grid konfigurationer:

```css
/* 3 kolonner */
grid-template-columns: repeat(3, 1fr);

/* 4 kolonner */
grid-template-columns: repeat(4, 1fr);

/* Mixed størrelser */
grid-template-columns: 200px 1fr 200px;
```

---

## Del 3: Implementér CSS Grid Layout 🎯

**Formål:** Opret et responsive grid system for dine movie cards.

### Trin 5: Basis Grid Setup

**5a. Opdater din `#movie-list` CSS**

Find din `#movie-list` CSS regel og erstat/tilføj:

```css
#movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}
```

#### ✅ Forstå koden!

- `auto-fit` - Tilpasser antal kolonner automatisk
- `minmax(250px, 1fr)` - Minimum 250px bred, maksimum fylder tilgængelig plads
- `gap: 20px` - 20px mellemrum mellem cards
- `padding: 20px` - 20px indre margin i containeren

**5b. Test dit responsive grid**

1. Refresh siden
2. Resize browser vinduet langsomt
3. Observer hvordan kolonner tilpasser sig automatisk

#### ✅ Experiment!

Prøv forskellige `minmax` værdier:

```css
/* Smaller cards */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

/* Larger cards */
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
```

---

### Trin 6: Forbedret Grid Styling

**6a. Tilføj grid spacing og alignment**

```css
#movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  padding: 24px;
  justify-items: stretch; /* Strækker items til fuld kolonne bredde */
  align-items: start; /* Aligner items til toppen */
}
```

**6b. Forbedret movie card styling for grid**

```css
.movie-card {
  display: flex;
  flex-direction: column;
  height: 100%; /* Fylder fuld højde af grid cell */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.movie-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

#### ✅ Test forbedringerne!

1. Refresh siden
2. Hover over movie cards - ser du effekten?
3. Er alle cards samme højde nu?

---

### Trin 7: Progressive Responsive Design

**7a. Start med mobile-first tilgang**

```css
/* Mobile først - 1 kolonne */
#movie-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 2rem 0;
}
```

#### ✅ Test mobile layout!

1. Gør browser vinduet smalt (mobile størrelse)
2. Observer at movie cards fylder hele bredden

**7b. Tilføj tablet breakpoint**

```css
/* Mobile først */
#movie-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 2rem 0;
}

/* Tablet - 2 kolonner */
@media (min-width: 600px) {
  #movie-list {
    grid-template-columns: 1fr 1fr;
  }
}
```

#### ✅ Test tablet layout!

1. Udvid browser til ca. 600px bredde
2. Observer at du nu får 2 kolonner

**7c. Tilføj desktop breakpoints**

```css
/* Mobile først */
#movie-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 2rem 0;
}

/* Tablet - 2 kolonner */
@media (min-width: 600px) {
  #movie-list {
    grid-template-columns: 1fr 1fr;
  }
}

/* Desktop - 3 kolonner */
@media (min-width: 992px) {
  #movie-list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

/* Store skærme - 4 kolonner */
@media (min-width: 1400px) {
  #movie-list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
```

#### ✅ Test alle breakpoints!

1. Start smal (mobile)
2. Udvid til 600px+ (tablet - 2 kolonner)
3. Udvid til 992px+ (desktop - 3 kolonner)
4. Udvid til 1400px+ (store skærme - 4 kolonner)

**7d. Forstå fordele ved denne tilgang**

- **Specifik kontrol** - Du bestemmer præcis hvor mange kolonner ved hver størrelse
- **Forudsigelig** - Samme layout på alle enheder af samme størrelse
- **Lettere at debug** - Klare breakpoints du kan teste
- **Performance** - Browseren ved præcis hvilken layout der skal bruges

---

### Trin 8: Avanceret Grid (Valgfrit)

**8a. Alternative tilgang med auto-fit (til senere)**

Når du er komfortabel med basis grid, kan du eksperimentere med:

```css
/* Alternativ: Automatisk tilpasning */
#movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem 0;
}
```

#### ✅ Sammenlign tilgange!

- **Faste breakpoints** (din nuværende): Præcis kontrol
- **Auto-fit**: Dynamisk tilpasning baseret på plads

**8b. Hvornår bruge hvad?**

- **Faste breakpoints**: Når du vil have specifik kontrol over layout
- **Auto-fit**: Når du vil have fleksibel tilpasning til skærmstørrelse

#### ✅ Eksperimentér!

Prøv begge tilgange og se hvilken du foretrækker til dit projekt!---

## Del 4: Finpudsning og Optimering ✨

**Formål:** Analyser den eksisterende styling og forstå hvordan den fungerer.

### Trin 9: Analyser eksisterende poster styling

**9a. Undersøg den nuværende movie poster CSS**

Se på din `app.css` - find `.movie-poster` reglen:

```css
.movie-poster {
  width: 100%;
  height: 400px;
  object-fit: cover;
  background: linear-gradient(135deg, var(--secondary-light), var(--primary-light));
  transition: var(--transition);
}

.movie-card:hover .movie-poster {
  transform: scale(1.05);
}
```

#### ✅ Forstå hver CSS regel!

- `width: 100%` - Billedet fylder hele card bredden
- `height: 400px` - Fast højde sikrer alle posters er samme størrelse
- `object-fit: cover` - Bibeholder billedets proportioner og fylder hele området
- `background: linear-gradient(...)` - Fallback hvis billede ikke loader
- `transition: var(--transition)` - Smooth animationer
- `transform: scale(1.05)` - Zoom effekt på hover

**9b. Test poster funktionalitet**

#### ✅ Eksperimentér med poster styling!

1. **Test hover effekt**: Hover over movie cards - ser du zoom effekten?
2. **Test responsivitet**: Resize vinduet - forbliver alle posters samme højde?
3. **Inspicér et billede**:
   - Højreklik på en poster → "Inspect Element"
   - Se hvordan `object-fit: cover` virker
   - Prøv at ændre `cover` til `contain` midlertidigt - se forskellen

**9c. Forstå object-fit værdier**

```css
/* Forskellige object-fit værdier */
object-fit: cover; /* Standard - fylder området, bevarer proportioner */
object-fit: contain; /* Viser hele billedet, kan have whitespace */
object-fit: fill; /* Strækker billedet til at fylde (kan forvrænge) */
object-fit: scale-down; /* Som contain, men aldrig større end original */
```

#### ✅ Test object-fit værdier!

Midlertidigt ændr `object-fit` i din CSS og se forskellen på poster visning.

---

### Trin 10: Loading states og empty states

**10a. Tilføj loading placeholder styling**

Til fremtidige JavaScript funktioner:

```css
.movie-card.loading {
  background: #f0f0f0;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

.movie-list-empty {
  grid-column: 1 / -1; /* Fylder alle kolonner */
  text-align: center;
  padding: 60px 20px;
  color: #666;
}
```

#### ✅ Test placeholders!

Tilføj midlertidigt til HTML for at teste:

```html
<div class="movie-list-empty">
  <p>🎬 Ingen film fundet...</p>
</div>
```

---

## Del 5: Fra HTML til JavaScript Objekter 🎬→📝

**Formål:** Konverter din eksisterende HTML movie data til JavaScript objekter.

### Trin 11: Analyser eksisterende movie data

**11a. Undersøg din HTML struktur**

Se på en af dine movie cards i `index.html`:

```html
<article class="movie-card" tabindex="0">
  <img
    src="https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg"
    alt="Poster of Barbie"
    class="movie-poster" />
  <div class="movie-info">
    <h3>Barbie <span class="movie-year">(2023)</span></h3>
    <p class="movie-genre">Adventure, Comedy, Fantasy</p>
    <p class="movie-rating">⭐ 7</p>
    <p class="movie-director"><strong>Director:</strong> Greta Gerwig</p>
  </div>
</article>
```

#### ✅ Identificer data!

Fra hver movie card kan vi udtrække:

- **ID**: Vi tilføjer et unikt nummer (1, 2, 3...)
- **Titel**: "Barbie"
- **År**: 2023
- **Genre**: ["Adventure", "Comedy", "Fantasy"] (som array)
- **Rating**: 7
- **Instruktør**: "Greta Gerwig"
- **Image URL**: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg"
- **Actors**: ["Margot Robbie", "Ryan Gosling"] (fra cast information)
- **Description**: En kort beskrivelse af filmen

---

### Trin 12: Opret individuelle movie objekter

**12a. Åbn din `app.js` fil**

Vi starter med at oprette et JavaScript objekt for hver film individuelt.

**12b. Opret første movie objekt - Barbie**

```javascript
// ========== MOVIE OBJECTS ==========

// Movie 1: Barbie
const barbieMovie = {
  id: 1,
  title: "Barbie",
  year: 2023,
  genre: ["Adventure", "Comedy", "Fantasy"],
  rating: 7.0,
  director: "Greta Gerwig",
  image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
  actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
  description:
    "Barbie and Ken embark on a journey of self-discovery after leaving the utopian Barbie Land for the real world."
};

console.log("Barbie movie object:", barbieMovie);
```

#### ✅ Test første objekt!

1. Tilføj koden til din `app.js`
2. Refresh siden
3. Tjek Console - ser du movie objektet?

**12c. Opret andet movie objekt - Dune**

```javascript
// Movie 2: Dune
const duneMovie = {
  id: 2,
  title: "Dune",
  year: 2021,
  genre: ["Adventure", "Drama", "Sci-Fi"],
  rating: 8.0,
  director: "Denis Villeneuve",
  image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
  actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
  description:
    "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis and its valuable spice."
};

console.log("Dune movie object:", duneMovie);
```

**12d. Opret tredje movie objekt - Dune: Part Two**

```javascript
// Movie 3: Dune: Part Two
const duneTwoMovie = {
  id: 3,
  title: "Dune: Part Two",
  year: 2024,
  genre: ["Action", "Adventure", "Drama"],
  rating: 8.7,
  director: "Denis Villeneuve",
  image:
    "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
  actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
  description:
    "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
};

console.log("Dune: Part Two movie object:", duneTwoMovie);
```

#### ✅ Test objekterne!

1. Tilføj alle objekter til `app.js`
2. Refresh siden
3. Tjek Console - ser du alle tre objekter?

---

### Trin 13: Opret resterende movie objekter selv! 💪

**13a. Nu er det din tur!**

Du har lært mønsteret - nu skal du selv oprette objekter for de resterende 5 film baseret på din HTML:

- Everything Everywhere All at Once (2022)
- Fight Club (1999)
- Forrest Gump (1994)
- Goodfellas (1990)
- Inception (2010)

#### ✅ Husk objekt strukturen!

Hvert objekt skal have:

```javascript
const filmNavn = {
  id: ...,          // Unikt nummer for filmen
  title: "...",
  year: ...,        // Number, ikke string!
  genre: [...],     // Array med genres, f.eks. ["Action", "Drama"]
  rating: ...,      // Number (kan have decimaler)
  director: "...",
  image: "...",     // URL til poster billede
  actors: [...],    // Array med skuespillere
  description: "..." // Kort beskrivelse af filmen
};
```

**13b. Find informationerne i din HTML**

Se i din `index.html` og find data for hver film.

**Tips:**

- **id**: Tilføj selv (4, 5, 6, 7, 8...)
- **title**: I `<h3>` tagget
- **year**: I `<span class="movie-year">`
- **genre**: I `<p class="movie-genre">` - men lav det til array! `["Drama", "Romance"]`
- **rating**: I `<p class="movie-rating">` (kun tallet, ikke ⭐)
- **director**: I `<p class="movie-director">`
- **image**: I `<img src="...">` (samme som før, men kald den `image`)
- **actors**: Find 2-3 hovedskuespillere online, f.eks. `["Actor 1", "Actor 2"]`
- **description**: Skriv en kort beskrivelse af filmen

#### ✅ Test dine objekter!

Efter hver film du opretter:

1. Tilføj `console.log("Film navn object:", filmNavn);`
2. Refresh siden
3. Tjek at objektet vises korrekt i Console

---

<details>
<summary>🔍 Klik her for at se løsning (prøv selv først!)</summary>

```javascript
// Movie 4: Everything Everywhere All at Once
const everythingEverywhereMovie = {
  id: 4,
  title: "Everything Everywhere All at Once",
  year: 2022,
  genre: ["Action", "Adventure", "Comedy"],
  rating: 7.8,
  director: "Daniel Kwan, Daniel Scheinert",
  image:
    "https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  actors: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"],
  description:
    "A Chinese-American woman is swept up in an insane adventure, where she alone can save the world by exploring other universes."
};

// Movie 5: Fight Club
const fightClubMovie = {
  id: 5,
  title: "Fight Club",
  year: 1999,
  genre: ["Drama"],
  rating: 8.8,
  director: "David Fincher",
  image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
  actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
  description:
    "An insomniac office worker and a soap maker form an underground fight club that evolves into something much more."
};

// Movie 6: Forrest Gump
const forrestGumpMovie = {
  id: 6,
  title: "Forrest Gump",
  year: 1994,
  genre: ["Drama", "Romance"],
  rating: 8.8,
  director: "Robert Zemeckis",
  image: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
  actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
  description:
    "The presidencies of Kennedy and Johnson, the Vietnam War, and more through the eyes of an Alabama man with a low IQ."
};

// Movie 7: Goodfellas
const goodfellasMovie = {
  id: 7,
  title: "Goodfellas",
  year: 1990,
  genre: ["Biography", "Crime", "Drama"],
  rating: 8.7,
  director: "Martin Scorsese",
  image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
  actors: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
  description:
    "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners."
};

// Movie 8: Inception
const inceptionMovie = {
  id: 8,
  title: "Inception",
  year: 2010,
  genre: ["Action", "Adventure", "Sci-Fi"],
  rating: 8.8,
  director: "Christopher Nolan",
  image: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
  actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
  description:
    "A thief who enters the dreams of others to steal secrets is given the inverse task of planting an idea into the mind of a CEO."
};

// Test alle objekter
console.log("Everything Everywhere movie:", everythingEverywhereMovie);
console.log("Fight Club movie:", fightClubMovie);
console.log("Forrest Gump movie:", forrestGumpMovie);
console.log("Goodfellas movie:", goodfellasMovie);
console.log("Inception movie:", inceptionMovie);
```

</details>

---

### Trin 14: Test objekt egenskaber

**14a. Tilgang til objekt properties**

```javascript
// Test hvordan du får adgang til movie data
console.log("=== TESTING MOVIE OBJECTS ===");

console.log("Barbie title:", barbieMovie.title);
console.log("Dune year:", duneMovie.year);
console.log("Fight Club rating:", fightClubMovie.rating);
console.log("Inception director:", inceptionMovie.director);
```

**14b. Brug template literals med objekter**

```javascript
// Opret beskeder med movie data
console.log(`${barbieMovie.title} (${barbieMovie.year}) - Rating: ⭐ ${barbieMovie.rating}`);
console.log(`${duneMovie.title} er instrueret af ${duneMovie.director}`);
console.log(`${fightClubMovie.title} er fra ${fightClubMovie.year} og har rating ${fightClubMovie.rating}`);
```

#### ✅ Test objekt adgang!

1. Tilføj test koden
2. Refresh siden
3. Se Console - får du de rigtige værdier fra objekterne?

---

### Trin 15: Sammenlign HTML vs JavaScript

**15a. Forstå forskellen**

- **HTML**: Static data direkte i markup
- **JavaScript objekter**: Dynamisk data der kan manipuleres

**15b. Fordele ved JavaScript objekter**

```javascript
// Du kan nu programmatisk arbejde med data:

// Ændre rating
barbieMovie.rating = 7.5;
console.log("Updated Barbie rating:", barbieMovie.rating);

// Tilføje ny property
barbieMovie.watched = true;
console.log("Barbie movie with watched status:", barbieMovie);

// Beregne movie alder
const currentYear = new Date().getFullYear();
const barbieAge = currentYear - barbieMovie.year;
console.log(`${barbieMovie.title} er ${barbieAge} år gammel`);
```

#### ✅ Eksperimentér!

1. Prøv at ændre properties på dine movie objekter
2. Tilføj nye properties som `watched`, `favorite`, etc.
3. Beregn alder for forskellige film

---

### Trin 15B: Nulstil JavaScript til ren movie data 🧹

**Før vi starter DOM manipulation, skal vi have en ren `app.js` fil OG en tom movie container.**

**15B.1. Backup din nuværende `app.js`**

Hvis du har lavet meget test kode, gem den måske i en kommentar øverst.

**15B.2. Ryd HTML - fjern alle statiske movie cards**

Gå til din `index.html` og fjern ALT indhold mellem `<section id="movie-list">` tags:

```html
<!-- Fra dette: -->
<section id="movie-list">
  <article class="movie-card" tabindex="0">
    <!-- Masse HTML for Barbie... -->
  </article>
  <article class="movie-card" tabindex="0">
    <!-- Masse HTML for Dune... -->
  </article>
  <!-- ...alle de andre movie cards... -->
</section>

<!-- Til dette: -->
<section id="movie-list">
  <!-- Tom container - klar til JavaScript! -->
</section>
```

**15B.3. Erstat indholdet af `app.js` med kun movie objekterne**

```javascript
// ========== MOVIE APP - SESSION 2 ==========
// Movie objects created from HTML data

// Movie 1: Barbie
const barbieMovie = {
  id: 1,
  title: "Barbie",
  year: 2023,
  genre: ["Adventure", "Comedy", "Fantasy"],
  rating: 7.0,
  director: "Greta Gerwig",
  image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
  actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
  description:
    "Barbie and Ken embark on a journey of self-discovery after leaving the utopian Barbie Land for the real world."
};

// Movie 2: Dune
const duneMovie = {
  id: 4,
  title: "Dune",
  year: 2021,
  genre: ["Adventure", "Drama", "Sci-Fi"],
  rating: 8.0,
  director: "Denis Villeneuve",
  image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
  actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
  description:
    "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis and its valuable spice."
};

// Movie 3: Dune: Part Two
const duneTwoMovie = {
  id: 16,
  title: "Dune: Part Two",
  year: 2024,
  genre: ["Action", "Adventure", "Drama"],
  rating: 8.7,
  director: "Denis Villeneuve",
  image:
    "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
  actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
  description:
    "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
};

// Tilføj resten af dine movie objekter her...
// (De objekter du oprettede i Trin 13)

console.log("✅ Movie objects loaded and ready for DOM manipulation!");
```

#### ✅ Check din setup!

1. Din `index.html` har en TOM `#movie-list` container
2. Sørg for din `app.js` kun indeholder movie objekterne
3. Refresh siden
4. Tjek Console - ser du "Movie objects loaded..." beskeden?
5. Din browser viser nu en TOM movie sektion (perfekt til DOM manipulation!)

**15B.4. Hvorfor tømme HTML containeren?**

- **Clean slate** - vi starter fra bunden
- **Forstå formålet** - nu ser du hvorfor vi skal bruge JavaScript!
- **Forbered DOM manipulation** - tom container klar til dynamisk indhold
- **Oplev forskellen** - fra statisk til dynamisk

**🎯 Nu har du en tom side klar til at blive fyldt med JavaScript! Dette er udgangspunktet for DOM manipulation.** 🚀 2. Refresh siden 3. Tjek Console - ser du "Movie objects loaded..." beskeden? 4. Din HTML skulle stadig vise de statiske movie cards

**15B.3. Hvorfor nulstille?**

- **Ren start** for DOM manipulation
- **Fokus** på movie data uden støj
- **Performance** færre console.log beskeder
- **Struktur** klar til at bygge funktioner oven på

Nu er vi klar til at lære DOM manipulation! 🚀

---

### Trin 16: Fra JavaScript til DOM - Oplev problemet først! 🎨

**16a. Start med at skrive HTML direkte (den "forkerte" måde)**

```javascript
// Find movie list container (den er nu tom efter Trin 15B!)
const movieListContainer = document.querySelector("#movie-list");

// Tilføj Barbie movie DIREKTE med template string
const barbieHTML = `
  <article class="movie-card" tabindex="0">
    <img src="${barbieMovie.image}" 
         alt="Poster of ${barbieMovie.title}" 
         class="movie-poster" />
    <div class="movie-info">
      <h3>${barbieMovie.title} <span class="movie-year">(${barbieMovie.year})</span></h3>
      <p class="movie-genre">${barbieMovie.genre}</p>
      <p class="movie-rating">⭐ ${barbieMovie.rating}</p>
      <p class="movie-director"><strong>Director:</strong> ${barbieMovie.director}</p>
    </div>
  </article>
`;

movieListContainer.insertAdjacentHTML("beforeend", barbieHTML);
console.log("Barbie added!");
```

#### ✅ Test første movie!

1. Tilføj koden til din `app.js`
2. Refresh siden
3. Du skulle kun se Barbie movie card nu!

**16b. Tilføj endnu en movie (og mærk gentagelsen...)**

```javascript
// Tilføj Dune movie DIREKTE (bemærk hvor meget du skriver igen!)
const duneHTML = `
  <article class="movie-card" tabindex="0">
    <img src="${duneMovie.poster}" 
         alt="Poster of ${duneMovie.title}" 
         class="movie-poster" />
    <div class="movie-info">
      <h3>${duneMovie.title} <span class="movie-year">(${duneMovie.year})</span></h3>
      <p class="movie-genre">${duneMovie.genre}</p>
      <p class="movie-rating">⭐ ${duneMovie.rating}</p>
      <p class="movie-director"><strong>Director:</strong> ${duneMovie.director}</p>
    </div>
  </article>
`;

movieListContainer.insertAdjacentHTML("beforeend", duneHTML);
console.log("Dune added!");
```

**16c. Tilføj en tredje movie (nu bliver det virkelig kedeligt...)**

```javascript
// Tilføj Dune: Part Two (SAMME kode igen og igen!)
const duneTwoHTML = `
  <article class="movie-card" tabindex="0">
    <img src="${duneTwoMovie.poster}" 
         alt="Poster of ${duneTwoMovie.title}" 
         class="movie-poster" />
    <div class="movie-info">
      <h3>${duneTwoMovie.title} <span class="movie-year">(${duneTwoMovie.year})</span></h3>
      <p class="movie-genre">${duneTwoMovie.genre}</p>
      <p class="movie-rating">⭐ ${duneTwoMovie.rating}</p>
      <p class="movie-director"><strong>Director:</strong> ${duneTwoMovie.director}</p>
    </div>
  </article>
`;

movieListContainer.insertAdjacentHTML("beforeend", duneTwoHTML);
console.log("Dune: Part Two added!");
```

#### ✅ Mærk problemet!

1. Tilføj alle tre movie kode blokke
2. Refresh siden - ser du 3 movies?
3. **Tæl hvor mange linjer kode du har skrevet!**
4. **Forestil dig at skulle skrive dette for 8 movies... 😱**

**16d. Hvad er problemet?**

- 🔄 **Duplikeret kode** - Samme HTML struktur igen og igen
- 🐛 **Fejlrisiko** - Hvis du laver en fejl, skal du rette den 8 steder
- 😫 **Kedeligt** - Meget copy/paste arbejde
- 🔧 **Svært at ændre** - Vil du ændre design? 8 steder at opdatere!

---

### Trin 17: Løsningen - Lav en funktion! 🚀

**17a. Opret en smart funktion der gør ALT arbejdet**

```javascript
// Find movie list container (gør det én gang)
const movieListContainer = document.querySelector("#movie-list");

// Den SMARTE måde - funktion der både genererer HTML og tilføjer til DOM!
function displayMovie(movieObject) {
  // Konverter genre array til string
  const genreString = movieObject.genre.join(", ");

  const movieHTML = `
    <article class="movie-card" tabindex="0">
      <img src="${movieObject.image}" 
           alt="Poster of ${movieObject.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movieObject.title} <span class="movie-year">(${movieObject.year})</span></h3>
        <p class="movie-genre">${genreString}</p>
        <p class="movie-rating">⭐ ${movieObject.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movieObject.director}</p>
      </div>
    </article>
  `;

  // Tilføj direkte til DOM
  movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
  console.log(`${movieObject.title} tilføjet til DOM!`);
}

// Test funktionen
displayMovie(barbieMovie);
```

#### ✅ Test den smarte funktion!

1. Tilføj funktionen til din `app.js`
2. Refresh siden
3. Ser du Barbie movie card i browseren?

**17b. Nu kan vi tilføje movies på den VIRKELIG SMARTE måde**

```javascript
// Ryd container først
movieListContainer.innerHTML = "";

// Tilføj movies med ÉN linje hver (så nemt!)
displayMovie(barbieMovie);
displayMovie(duneMovie);
displayMovie(duneTwoMovie);

console.log("3 movies tilføjet med kun 3 linjer kode!");
```

#### ✅ Sammenlign tilgangene!

**Før (duplikeret kode):**

- 45+ linjer kode for 3 movies
- Samme struktur skrevet 3 gange
- Svært at ændre

**Efter (funktion):**

- ~15 linjer funktion + 3 linjer tilføjelse
- Skriv HTML struktur ÉN gang
- Nem at ændre og udvide

**17c. Forstå fordelene ved funktioner**

```javascript
// Nu kan du:

// 1. Tilføje en movie med ÉN linje (funktionen gør ALT arbejdet!)
displayMovie(barbieMovie);

// 2. Ændre designet ÉT sted (i funktionen) og alle movies opdateres

// 3. Nemt teste med nye data
const testMovie = {
  id: 999,
  title: "Test Film",
  year: 2024,
  genre: ["Test", "Genre"],
  rating: 9.9,
  director: "Test Director",
  image: "https://via.placeholder.com/300x400",
  actors: ["Test Actor"],
  description: "This is a test movie description."
};

displayMovie(testMovie);
```

#### ✅ Eksperimentér med funktionen!

1. Prøv at ændre noget i HTML strukturen i funktionen
2. Regenerér alle movies - ser du ændringen overalt?
3. Opret en test movie og tilføj den

---

### Trin 18: Tilføj ALLE movies med funktionen! 🎬

**Nu kan vi tilføje alle vores movies super nemt:**

```javascript
// Ryd container hvis nødvendigt
movieListContainer.innerHTML = "";

// Tilføj alle movies - ÉN linje per movie! (bruger individuelle objekter)
displayMovie(barbieMovie);
displayMovie(duneMovie);
displayMovie(duneTwoMovie);
displayMovie(spider);
displayMovie(avatar);
displayMovie(topgun);
displayMovie(interstellar);
displayMovie(johnwick);

console.log("Alle 8 movies tilføjet! 🎉");
```

#### ✅ Test den færdige løsning!

1. Tilføj koden til din `app.js`
2. **GEM filen** (`Ctrl+S` / `Cmd+S`)
3. Refresh siden
4. Ser du alle 8 movie cards i det smukke CSS Grid layout?

💡 **Note:** Vi bruger stadig individuelle objekter her - i næste trin lærer vi en bedre måde!

**18a. BONUS - Opret dit eget movie**

```javascript
// Opret et nyt movie object
const myFavoriteMovie = {
  id: 2,
  title: "The Matrix",
  year: 1999,
  genre: ["Action", "Sci-Fi"],
  rating: 8.7,
  director: "Lana & Lilly Wachowski",
  image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
  actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
  description:
    "A computer hacker learns about the true nature of his reality and his role in the war against its controllers."
};

// Tilføj det til dit layout - så nemt!
displayMovie(myFavoriteMovie);
```

#### 🎯 Hvad lærte vi i Del 5?

- **Template strings** (`${}`) til dynamisk HTML
- **Functions** til genbrugelig kode
- **insertAdjacentHTML** til at tilføje HTML til DOM
- **Problemløsning** - vi SAW problemet (duplication) før vi løste det!
- **Practical functions** - funktioner der gør ALT arbejdet på én gang

---

### Trin 19: Forbedring - Fra objekter til array! 🗃️

**19a. Problemet med mange individuelle variabler**

```javascript
// Lige nu har vi 8 separate variabler:
displayMovie(barbieMovie);
displayMovie(duneMovie);
displayMovie(duneTwoMovie);
displayMovie(spider);
displayMovie(avatar);
displayMovie(topgun);
displayMovie(interstellar);
displayMovie(johnwick);

// Det er meget kode, og svært at arbejde med programmatisk!
```

**19b. Løsningen - Saml alt i et array!**

```javascript
// I stedet for mange separate variabler, definer alt data direkte i arrayet!
const movies = [
  {
    id: 1,
    title: "Barbie",
    year: 2023,
    genre: ["Adventure", "Comedy", "Fantasy"],
    rating: 7.0,
    director: "Greta Gerwig",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
    actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
    description:
      "Barbie and Ken embark on a journey of self-discovery after leaving the utopian Barbie Land for the real world."
  },
  {
    id: 2,
    title: "Dune",
    year: 2021,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.0,
    director: "Denis Villeneuve",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
    actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
    description:
      "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis and its valuable spice."
  },
  {
    id: 3,
    title: "Dune: Part Two",
    year: 2024,
    genre: ["Action", "Adventure", "Drama"],
    rating: 8.7,
    director: "Denis Villeneuve",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
    actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
  }
  // Tilføj resten af dine movies her...
];

console.log("Movies array:", movies);
console.log("Antal movies:", movies.length);
```

**💡 Fordele ved denne tilgang:**

- **Alt data ét sted** - ingen spredte variabler
- **JSON-lignende struktur** - forberedelse til eksterne data
- **Nem at udvide** - bare tilføj flere objekter
- **Professionel approach** - sådan gør man det i virkeligheden!

**19b2. Din opgave - tilføj de resterende movies!**

Tilføj de resterende 5 movies til arrayet. Du kan kopiere data fra dine tidligere objekter:

```javascript
const movies = [
  // De første 3 er lavet - tilføj de resterende:
  // { title: "Everything Everywhere All at Once", year: 2022, ... },
  // { title: "Fight Club", year: 1999, ... },
  // { title: "Forrest Gump", year: 1994, ... },
  // { title: "Goodfellas", year: 1990, ... },
  // { title: "Inception", year: 2010, ... }
];
```

💪 **Tip:** Kopier data fra dine tidligere objekter, men placer dem direkte i arrayet!

**19b3. VIGTIGT - Ryd op i din kode! 🧹**

Nu hvor du har alle movies i arrayet, skal du slette de gamle individuelle objekter:

```javascript
// SLET DISSE - vi bruger dem ikke længere:
// const barbieMovie = { ... };
// const duneMovie = { ... };
// const duneTwoMovie = { ... };
// const spider = { ... };
// const avatar = { ... };
// const topgun = { ... };
// const interstellar = { ... };
// const johnwick = { ... };

// BEHOLD KUN DETTE:
const movies = [
  // alle dine movie objekter her...
];
```

**🎯 Hvorfor rydde op?**

- **Cleaner kode** - ingen forvirring
- **Ingen dublering** - data eksisterer kun ét sted
- **Performance** - færre variabler i memory
- **Best practice** - professionel kodestil

#### ✅ Checklist efter cleanup:

1. ✅ Alle individuelle movie objekter er slettet
2. ✅ Kun `movies` arrayet eksisterer
3. ✅ Arrayet indeholder alle 8 movies
4. **✅ GEM filen** (`Ctrl+S` / `Cmd+S`)
5. ✅ Console viser ingen fejl

#### ✅ Test arrayet!

1. Tilføj array koden til din `app.js`
2. **GEM filen** (`Ctrl+S` / `Cmd+S`)
3. Refresh siden
4. Tjek Console - ser du arrayet med alle movies?

**19c. Test adgang til enkelte movies via indeks**

```javascript
// Nu kan vi tilgå movies via array indeks
console.log("Første movie:", movies[0]); // Barbie
console.log("Anden movie:", movies[1]); // Dune
console.log("Sidste movie:", movies[movies.length - 1]); // Inception

// Test displayMovie med array elementer
movieListContainer.innerHTML = ""; // Ryd først

// Tilføj kun de første 3 movies via array indeks
displayMovie(movies[0]); // Barbie
displayMovie(movies[1]); // Dune
displayMovie(movies[2]); // Dune: Part Two

console.log("3 movies tilføjet via array indeks!");
```

#### ✅ Eksperimentér med array adgang!

1. Prøv forskellige indeks: `movies[0]`, `movies[3]`, `movies[7]`
2. Tilføj kun de movies du vil have vist
3. Se hvordan array indeks giver os mere kontrol

**19d. Gradvis introduktion til loops - tilføj alle movies**

```javascript
// I stedet for at skrive 8 linjer...
// displayMovie(movies[0]);
// displayMovie(movies[1]);
// displayMovie(movies[2]);
// displayMovie(movies[3]);
// displayMovie(movies[4]);
// displayMovie(movies[5]);
// displayMovie(movies[6]);
// displayMovie(movies[7]);

// Kan vi bruge et loop! (den moderne måde)
movieListContainer.innerHTML = ""; // Ryd først

// For-of loop - gå gennem hver movie i arrayet
for (const movie of movies) {
  displayMovie(movie);
  console.log(`Tilføjet movie: ${movie.title}`);
}

console.log("Alle movies tilføjet via for-of loop! 🎉");
```

**💡 Hvorfor for-of loop?**

- **Simplere** - ingen indeks at holde styr på
- **Læseligt** - `for (const movie of movies)` er selvforklarende
- **Mindre fejl** - ingen risiko for off-by-one errors
- **Moderne** - den foretrukne måde i moderne JavaScript

#### ✅ Test dit første loop!

1. Tilføj loop koden til din `app.js`
2. **GEM filen** (`Ctrl+S` / `Cmd+S`)
3. Refresh siden
4. Ser du alle 8 movies?
5. Tjek Console - ser du progress beskeder for hver movie?

#### 🎯 Hvad lærte vi i Trin 19?

- **Arrays** til at organisere relateret data
- **Array indeks** til at tilgå specifikke elementer (`movies[0]`)
- **For-of loops** til at iterere gennem arrays
- **Clean code** - fjernelse af dupliceret kode
- **Progression** fra manuel kode til automatiseret loops

---

### Trin 20: Den ultimative displayMovies funktion! 🎬

**Nu kan vi lave en funktion der automatisk viser alle movies:**

```javascript
// Den ultimative funktion - vis alle movies i ét kald!
function displayMovies(movieArray) {
  // Ryd container først
  movieListContainer.innerHTML = "";

  // Loop gennem alle movies og vis dem (bruger for-of loop!)
  for (const movie of movieArray) {
    displayMovie(movie);
    console.log(`${movie.title} displayed`);
  }

  console.log(`🎉 ${movieArray.length} movies displayed successfully!`);
}

// Test den ultimative funktion
displayMovies(movies);
```

#### ✅ Test den færdige løsning!

1. Tilføj `displayMovies` funktionen til din `app.js`
2. Kald `displayMovies(movies)`
3. **GEM filen** (`Ctrl+S` / `Cmd+S`)
4. Refresh siden
5. Ser du alle 8 movie cards?
6. Prøv at kalde funktionen igen - movies bliver vist på ny!

---

### Trin 21: Nu er alt automatiseret! 🎊

**21a. En enkelt linje viser alle movies**

```javascript
// Fra mange linjer til ÉN linje:
displayMovies(movies);

// Det er det! Alle movies vises automatisk ✨
```

**21b. BONUS - Opret og tilføj nye movies dynamisk**

```javascript
// Opret et nyt movie object
const myFavoriteMovie = {
  id: 2,
  title: "The Matrix",
  year: 1999,
  genre: ["Action", "Sci-Fi"],
  rating: 8.7,
  director: "Lana & Lilly Wachowski",
  image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
  actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
  description:
    "A computer hacker learns about the true nature of his reality and his role in the war against its controllers."
};

// Tilføj til array og vis alle
movies.push(myFavoriteMovie);
displayMovies(movies);

console.log(`Nu vises ${movies.length} movies!`);
```

#### 🎯 Hvad lærte vi i Del 5 + Arrays?

- **Template strings** (`${}`) til dynamisk HTML
- **Functions** til genbrugelig kode
- **insertAdjacentHTML** til at tilføje HTML til DOM
- **Arrays** til at organisere data
- **For-of loops** til at iterere gennem arrays
- **Array methods** som `filter()`, `sort()`, `push()`
- **Progression** fra manuel til automatiseret kode

---

---

## Del 6: Fra Lokale Arrays til Ekstern JSON Data 🌐→📡

**Formål:** Lær at hente movie data fra en ekstern JSON fil i stedet for lokale JavaScript arrays.

### Trin 22: Forstå problemet med lokale data

**22a. Hvad er problemet med vores nuværende løsning?**

```javascript
// Vores nuværende movies array:
const movies = [
  {
    id: 1,
    title: "Barbie",
    year: 2023,
    genre: ["Adventure", "Comedy", "Fantasy"],
    rating: 7.0,
    director: "Greta Gerwig",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
    actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
    description:
      "Barbie and Ken embark on a journey of self-discovery after leaving the utopian Barbie Land for the real world."
  }
  // ... 7 andre movies hardkodet i JavaScript
];
```

**💭 Problemerne:**

- 🔒 **Statisk data** - Kan kun ændres af udviklere
- 📝 **Vedligeholdelse** - Skal redigere kode for at tilføje film
- 🚫 **Ikke scalable** - Hvad hvis vi vil have 1000 film?
- 👥 **Ikke delt** - Andre systemer kan ikke få adgang til data
- 🔄 **Ingen opdateringer** - Data kan ikke opdateres uden ny kode

#### ✅ Tænk over det!

1. Hvor skulle film data egentlig komme fra i en rigtig app?
2. Hvem skulle kunne tilføje nye film?
3. Hvor ofte ændres film informationer?

---

### Trin 23: Inspicér ekstern JSON data 🔍

**23a. Hvad er JSON?**

**JSON** står for **J**ava**S**cript **O**bject **N**otation og er web'ets mest populære dataformat:

```json
{
  "name": "Rasmus",
  "age": 25,
  "hobbies": ["programming", "coffee", "movies"],
  "isStudent": true
}
```

**💡 JSON karakteristika:**

- 📝 **Tekst-baseret** - kan læses af mennesker og computere
- 🌐 **Sprog-uafhængigt** - virker med alle programmeringssprog
- 📊 **Struktureret data** - objekter, arrays, strings, numbers, booleans
- 🔗 **Nemt at parse** - JavaScript kan nemt konvertere til objekter

**JSON vs JavaScript objekter:**

```javascript
// JavaScript objekt (i kode)
const person = {
  name: "Rasmus",        // Ingen quotes på property names
  age: 25
};

// JSON (som tekst/data)
{
  "name": "Rasmus",      // Quotes på ALT (property names og strings)
  "age": 25
}
```

**23b. Åbn JSON filen i din browser**

1. Åbn en ny tab i din browser
2. Gå til: `https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json`
3. **STOP! Læs JSON'en grundigt før du fortsætter** 👀

#### ✅ Analyser JSON strukturen!

Se på den første film i JSON'en og besvar:

1. **Hvilke properties har hver film?** (sammenlign med din lokale array)
2. **Hvilke nye properties ser du som vi ikke har lokalt?**
3. **Hvilke properties er arrays?** (hint: der er et par stykker)
4. **Hvor mange film er der i alt?** (scroll til bunden)

**23c. Sammenlign strukturer**

**Din lokale struktur:**

```javascript
{
  id: 1,
  title: "Barbie",
  year: 2023,
  genre: ["Adventure", "Comedy", "Fantasy"],  // ← Array (samme som JSON!)
  rating: 7.0,
  director: "Greta Gerwig",
  image: "https://...",  // ← Samme som JSON
  actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],  // ← Samme som JSON
  description: "Barbie and Ken embark..."  // ← Samme som JSON
}
```

**JSON strukturen:**

```json
{
  "id": 1,
  "title": "Barbie",
  "year": 2023,
  "genre": ["Adventure", "Comedy", "Fantasy"],
  "director": "Greta Gerwig",
  "rating": 7.0,
  "image": "https://...",
  "actors": ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
  "description": "Barbie and Ken embark..."
}
```

#### ✅ Spot ligheder og forskelle!

**Ligheder:** ✅ Strukturen er næsten identisk!
**Forskelle:**

1. **Quotes**: JSON har quotes på alle property names
2. **Syntax**: JSON er tekst, JavaScript er kode
3. **Datakilder**: Lokal vs. ekstern

**23d. Fordele ved ekstern JSON**

- 📊 **Mere data** - ID, skuespillere, beskrivelser
- 🏗️ **Bedre struktur** - Arrays for relateret data
- 🔄 **Kan opdateres** - Uden at ændre kode
- 🌐 **Delt data** - Andre apps kan bruge samme data
- 📱 **Real-world ready** - Sådan fungerer rigtige apps

---

### Trin 24: Introduktion til moderne data hentning 🎣

**24a. Den moderne måde at hente data på**

JavaScript har en elegant måde at hente data fra internettet på ved hjælp af `async` og `await`:

```javascript
// Moderne async/await syntaks - nemt at læse og forstå!
async function loadMovies() {
  console.log("🚀 Henter movie data...");

  const response = await fetch("https://url-til-data.json");
  const data = await response.json();

  console.log("🎬 Data modtaget:", data);
  return data;
}
```

**💡 Tænk på `async/await` som ventetid:**

- `async` = "Denne funktion kan tage tid"
- `await` = "Vent her til data er klar"
- Det ligner normal kode, men venter pænt på internettet

**24b. Sådan virker det:**

- 🌐 **Internettet er langsomt** - kan tage tid at hente data
- ⏰ **`await` venter** - JavaScript pauser og venter på svar
- ⚡ **Derefter fortsætter** - når data er klar, kører koden videre

💡 **Hvorfor bruger vi denne måde?** Fordi den er lettere at læse og forstå - det ser ud som normal kode der bare "venter" på data!

---

### Trin 25: Din første async/await funktion 🎯

**25a. Opret din første async funktion**

Tilføj denne kode til din `app.js` (efter dine eksisterende funktioner):

```javascript
// ========== ASYNC MOVIE LOADER ==========

async function loadMovies() {
  console.log("🚀 Starter hentning af movie data...");

  // Vent på at få response fra serveren
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");

  console.log("📡 Response modtaget:", response);

  // Vent på at konvertere response til JavaScript objekter
  const moviesFromJSON = await response.json();

  console.log("🎬 Movies fra JSON:", moviesFromJSON);
  console.log("📊 Antal movies:", moviesFromJSON.length);
  console.log("🎭 Første movie:", moviesFromJSON[0]);

  return moviesFromJSON;
}

// Kald funktionen
loadMovies();
```

**25b. Forstå hvad der sker trin for trin:**

1. **`async function`** - Fortæller JavaScript "denne funktion kan tage tid"
2. **`await fetch(...)`** - "Vent her til serveren svarer"
3. **`await response.json()`** - "Vent her til data er konverteret"
4. **Return data** - Sender movie data tilbage

#### ✅ Test din første async funktion!

1. Tilføj koden til din `app.js`
2. **GEM filen** (`Ctrl+S` / `Cmd+S`)
3. Refresh siden
4. Åbn Console (F12) og se de detaljerede logs!

**💡 Bemærk:** Funktionen kører automatisk når siden loader - du ser data i Console!

**Du skulle se:**

1. "🚀 Starter fetch test..." (med det samme)
2. "⚡ Kode fortsætter..." (med det samme)
3. "📡 Response modtaget..." (lidt senere)
4. "🎬 Movies fra JSON..." (lidt senere)

**25b. Analyser JSON response i Console**

Når data er hentet, undersøg det i Console:

1. **Expand** `moviesFromJSON` arrayet
2. **Click** på den første movie ([0])
3. **Se** alle properties: id, title, genre array, actors array, etc.

#### ✅ Sammenlign med din lokale data!

- Er genre nu et array? `["Adventure", "Comedy", "Fantasy"]`
- Findes der actors? `["Margot Robbie", "Ryan Gosling", "America Ferrera"]`
- Er der en description?
- Hedder billedet `image` i stedet for `poster`?

**25c. Forstå console output**

```javascript
// Du ser response objektet først:
Response {
  status: 200,        // ← HTTP status (200 = success)
  ok: true,          // ← Alt gik godt
  url: "https://...", // ← URL der blev hentet fra
  // ... og meget mere
}

// Derefter det parsede JSON:
[
  { id: 1, title: "Barbie", genre: [...], ... },
  { id: 2, title: "The Matrix", genre: [...], ... },
  // ... 15 andre movies
]
```

---

### Trin 26: Fantastisk! Din funktion virker allerede! 🎉

**26a. Godt nyt - ingen ændringer nødvendige!**

Fordi vi brugte den samme struktur fra starten, virker din `displayMovie` funktion allerede perfekt med JSON data:

```javascript
function displayMovie(movieObject) {
  // Konverter genre array til string
  const genreString = movieObject.genre.join(", ");

  const movieHTML = `
    <article class="movie-card" tabindex="0">
      <img src="${movieObject.image}" 
           alt="Poster of ${movieObject.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movieObject.title} <span class="movie-year">(${movieObject.year})</span></h3>
        <p class="movie-genre">${genreString}</p>
        <p class="movie-rating">⭐ ${movieObject.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movieObject.director}</p>
      </div>
    </article>
  `;

  movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
  console.log(`${movieObject.title} tilføjet fra JSON!`);
}
```

#### ✅ Fordele ved konsistent struktur!

- 🎯 **Ingen refactoring** - samme funktion virker til alt
- 🧹 **Cleaner kode** - ingen duplikerede funktioner
- 🚀 **Fremtidssikret** - klar til alle datakilder
- 💪 **Professionel tilgang** - sådan designer man systemer

**26b. Test din eksisterende funktion med JSON data**

```javascript
// Test din eksisterende funktion med JSON data
async function testDisplayMovie() {
  console.log("🧪 Tester displayMovie med JSON data...");

  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  const moviesFromJSON = await response.json();

  // Vis første movie som test
  displayMovie(moviesFromJSON[0]);
  console.log("✅ Test fuldført - det virkede!");
}

// Kør testen
testDisplayMovie();

// Kør testen
testDisplayMovie();
```

#### ✅ Test processen!

1. Tilføj koden til din `app.js`
2. **GEM filen** (`Ctrl+S` / `Cmd+S`)
3. Refresh siden
4. Ser du en movie card fra JSON data?
5. Tjek Console for success beskeder!

---

### Trin 27: Vis alle JSON movies! 🎬

**27a. Opret displayMovies funktion (kan bruges til alt!)**

```javascript
// ========== DISPLAY ALL MOVIES ==========

function displayMovies(movieArray) {
  // Ryd container først
  movieListContainer.innerHTML = "";

  console.log(`🎬 Viser ${movieArray.length} movies...`);

  // Loop gennem alle movies
  for (const movie of movieArray) {
    displayMovie(movie); // Samme funktion til alt!
  }

  console.log(`🎉 ${movieArray.length} movies vist successfully!`);
}
```

**27b. Hent og vis alle movies med async/await**

```javascript
// ========== MAIN ASYNC FUNCTION ==========

async function loadMovies() {
  console.log("🌐 Henter alle movies fra JSON...");

  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  const moviesFromJSON = await response.json();

  console.log("📊 JSON data modtaget:", moviesFromJSON.length, "movies");

  // Vis alle movies fra JSON!
  displayMovies(moviesFromJSON);
}

// Start processen
loadMovies();
```

// Start processen
loadMovies();

````

**27c. Test den komplette løsning**

1. **Kommentér ud** eller slet din gamle lokale movies array og funktions kald
2. Tilføj den nye async kode til din `app.js`
3. **GEM filen** (`Ctrl+S` / `Cmd+S`)
4. Refresh siden

#### ✅ Du skulle nu se!

- 🎬 **17 movies** i stedet for 8 (fra JSON)
- 📊 **Nye film** som "Ternet Ninja 3", "The Dark Knight", etc.
- ⭐ **Rigtige data** hentet live fra internettet
- 🎭 **Clean kode** med moderne async/await

---

### Trin 28: Sammenlign lokale vs. eksterne data 📊

**28a. Hvad har vi opnået?**

**Før (lokale arrays):**

```javascript
// Hardkodet data
const movies = [
  /* 8 movies */
];
displayMovies(movies); // Instant visning
````

**Efter (ekstern JSON med async/await):**

```javascript
// Moderne dynamisk data hentning
async function loadMovies() {
  const response = await fetch("https://...");
  const movies = await response.json();
  displayMovies(movies); // Clean og læseligt!
}
loadMovies();
```

**28b. Fordele og ulemper**

**✅ Fordele ved ekstern JSON:**

- 📈 **Flere movies** (17 vs 8)
- 🆕 **Rigere data** (actors, description, id)
- 🔄 **Kan opdateres** uden kode ændringer
- 🌐 **Real-world ready** - sådan gør man det rigtigt
- 👥 **Delt mellem apps** - andre kan bruge samme data

**⚠️ Nye udfordringer:**

- 🌐 **Kræver internet** - virker ikke offline
- ⏱️ **Loading tid** - brugere skal vente
- 🐛 **Fejl håndtering** - hvad hvis serveren er nede?
- 🔄 **Asynkron programmering** - mere kompleks kode

#### ✅ Refleksion!

1. Hvornår ville du bruge lokale arrays vs. ekstern JSON?
2. Hvordan kunne vi vise en loading indikator mens data hentes?
3. Hvad ville der ske hvis JSON URL'en ændrer sig?

---

### Trin 29: Bonus - Udforsk den rigere JSON data! 🎭

**29a. Tilføj actors til movie cards**

Prøv at udvide din `displayMovie` funktion:

```javascript
function displayMovie(movieObject) {
  const genreString = movieObject.genre.join(", ");
  const actorsString = movieObject.actors.join(", "); // Ny linje!

  const movieHTML = `
    <article class="movie-card" tabindex="0">
      <img src="${movieObject.image}" 
           alt="Poster of ${movieObject.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movieObject.title} <span class="movie-year">(${movieObject.year})</span></h3>
        <p class="movie-genre">${genreString}</p>
        <p class="movie-rating">⭐ ${movieObject.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movieObject.director}</p>
        <p class="movie-actors"><strong>Stars:</strong> ${actorsString}</p>
      </div>
    </article>
  `;

  movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
}
```

**29b. Tilføj description som tooltip eller modal**

```javascript
// Tilføj description som data attribut for senere brug
const movieHTML = `
  <article class="movie-card" tabindex="0" data-description="${movieObject.description}">
    <!-- ... resten af HTML ... -->
  </article>
`;
```

#### ✅ Eksperimentér selv!

1. Hvilke andre JSON properties kunne være interessante?
2. Hvordan kunne du vise film beskrivelsen?
3. Kunne du bruge `id` property til noget?

---

### Trin 30: Ryd op og optimer! 🧹

**30a. Fjern gamle lokale data**

Nu hvor du bruger JSON data, kan du fjerne:

```javascript
// SLET DISSE - bruges ikke længere:
// const movies = [ ... ];
// function displayMovie(movieObject) { ... }
// function displayMovies(movieArray) { ... }
// displayMovies(movies);
```

**30b. Organiser din kode**

```javascript
// ========== MOVIE APP - SESSION 2 → 3 ==========
// Now using external JSON data instead of local arrays

// DOM reference
const movieListContainer = document.querySelector("#movie-list");

// Display single movie (virker til alt!)
function displayMovie(movieObject) {
  // ... din funktion
}

// Display all movies (virker til alt!)
function displayMovies(movieArray) {
  // ... din funktion
}

// Load and display movies with async/await
async function loadMovies() {
  console.log("🌐 Loading movies from external JSON...");
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  const movies = await response.json();
  displayMovies(movies);
}

// Start the app
loadMovies();
```

#### ✅ Endelig test!

1. **GEM alle ændringer** (`Ctrl+S` / `Cmd+S`)
2. Refresh siden
3. **Tjek at alt virker**:
   - 17 movies vises
   - Alle har rigtige data
   - Console viser success beskeder
   - Ingen fejl i Console

#### 🎯 Hvad lærte vi i Del 6?

- **JSON struktur** - arrays vs strings, nye properties
- **Fetch API** - hentning af eksterne data
- **Async/await** - moderne asynkron programmering
- **Error handling** - try/catch for robuste apps
- **Data transformation** - tilpasning af forskellige strukturer
- **Real-world development** - sådan arbejder man professionelt

---

## � Læringsmål opdateret

Efter denne session kan du:

- ✅ **GitHub templates**: Starte projekter fra eksisterende repositories
- ✅ **CSS Grid basics**: `display: grid`, `grid-template-columns`, `gap`
- ✅ **Responsive grid**: Mobile-first design med breakpoints
- ✅ **Grid styling**: Hover effects og professionel styling
- ✅ **Data konvertering**: Fra HTML til JavaScript objekter
- ✅ **Objekt manipulation**: Oprette, læse og ændre object properties
- ✅ **Template literals**: Kombinere objekter med dynamisk tekst
- ✅ **DOM manipulation**: Generere HTML fra JavaScript objekter
- ✅ **insertAdjacentHTML**: Tilføje dynamisk indhold til DOM
- ✅ **Functions**: Oprette praktiske, genbrugelige funktioner
- ✅ **Arrays**: Organisere og manipulere data collections
- ✅ **Loops**: Automatisere gentagende handlinger
- ✅ **Problem-first learning**: Opleve problemet før løsningen
- ✅ **JSON data**: Forstå JSON struktur og properties
- ✅ **Fetch API**: Hente data fra eksterne kilder
- ✅ **Async/await**: Moderne og ren asynkron programmering
- ✅ **Data transformation**: Tilpasse forskellige data strukturer

---

## 🚀 Næste skridt

I session 3 vil vi:

- Implementere søgning og filtrering i movies
- Tilføje interaktive funktioner som favoritter
- Optimere performance og brugeroplevelse

**🎊 Tillykke! Du bruger nu moderne async/await til at hente rigtige data fra internettet! 🎉**
