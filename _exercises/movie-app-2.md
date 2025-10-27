# Movie App - Session 2: Fra Template til Dynamisk Data

## Opgaver til anden undervisningsgang

> **Vigtig:** Åbn Developer Tools i din browser og hold øje med både Console-fanen og Elements-fanen mens du arbejder. Vend dig til at bruge og forstå den!. Du kan åbne Developer Tools med:
>
> - **Mac:** `Cmd + Option + I`
> - **PC:** `F12` eller `Ctrl + Shift + I`

---

## Del 0: Projekt Setup med Template Repository 🚀

**Formål:** Opsæt dit Movie App projekt ved hjælp af GitHub template repository.

### Trin 0: Opret projekt fra template

**0a. Gå til template repository**

1. Åbn din browser og gå til: https://github.com/cederdorff/js-movie-app-template
2. Du skulle se et repository med en grøn "Use this template" knap.

**0b. Opret dit eget repository**

1. Klik på den grønne **"Use this template"** knap. Du skal være logget ind på GitHub for at kunne se den.
2. Vælg **"Create a new repository"**
3. Udfyld repository information:
   - **Repository name**: `movie-app-[dit-navn]` (f.eks. `movie-app-sarah`)
   - **Description**: "Movie App projekt til undervisning"
   - **Public** eller **Private** (vælg gerne public)
4. Klik **"Create repository"**

#### ✅ Check punkt!

Du skulle nu have dit eget repository baseret på template!

**0c. Clone dit repository lokalt med GitHub Desktop**

1. Åbn **GitHub Desktop** applikationen
2. Klik på **"File"** → **"Clone repository..."** (eller brug genvejen `Ctrl+Shift+O` / `Cmd+Shift+O`)
3. Vælg fanen **"URL"**
4. Gå tilbage til dit repository på GitHub.com og klik på den grønne **"Code"** knap
5. Kopier HTTPS URL'en (f.eks. `https://github.com/dit-brugernavn/movie-app-dit-navn.git`)
6. Indsæt URL'en i GitHub Desktop
7. Vælg hvor projektet skal gemmes lokalt (f.eks. i din "Developer" eller "Documents" mappe)
8. Klik **"Clone"**

#### ✅ Check punkt!

GitHub Desktop skulle nu vise dit repository og du skulle se filerne i den lokale mappe!

**0d. Åbn projekt i VS Code**

1. I GitHub Desktop, klik på **"Repository"** i menulinjen
2. Vælg **"Open in Visual Studio Code"** (eller brug genvejen `Ctrl+Shift+A` / `Cmd+Shift+A`)
3. VS Code åbner nu dit projekt
4. Du skulle nu se projektfilerne i VS Code's fil-explorer:
   - `index.html`
   - `app.css`
   - `app.js`
   - `img/favicon.png`

**Alternativ metode:**

1. Åbn VS Code
2. Klik på **File** → **Open Folder...**
3. Navigér til mappen hvor du clonede projektet
4. Vælg `movie-app-dit-navn` mappen
5. Klik **"Open"**

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

Se på din nuværende HTML struktur. Du skulle have noget der minder om det her:

```html
<main>
  <!-- Movie List -->
  <section id="movie-list">
    <article class="movie-card">
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

    <article class="movie-card">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg"
        alt="Poster of Dune"
        class="movie-poster" />
      <div class="movie-info">
        <h3>Dune <span class="movie-year">(2021)</span></h3>
        <p class="movie-genre">Adventure, Drama, Sci-Fi</p>
        <p class="movie-rating">⭐ 8</p>
        <p class="movie-director"><strong>Director:</strong> Denis Villeneuve</p>
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

Prøv at ændre disse CSS værdier midlertidigt for at se hvad der sker (find den eksisterende `.movie-card` og tilpas den givne linie):

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

**_Du skal ikke skrive noget kode i dette trin - men læs og forstår!_**

**3a. Grid container vs Grid items**
Et grid består ofte af noget styling for en container og de items der ligger i containeren. Fx:

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

Tilføj dette til din `#movie-list` i CSS (tilføj blot i bunden af `app.css`):

```css
#movie-list {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 kolonner */
  gap: 20px;
}
```

- Refresh siden - ser du forskellen?
- Forstår du CSS'en? Måske ikke det hele? Det kommer vi til i næste trin.

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

Prøv disse forskellige grid konfigurationer (du skal ændre den eksisterende `grid-template-columns` for `#movie-list`):

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

**Formål:** Opret et responsive grid system for dine movie cards ved at starte mobil og bygge op.

### Trin 5: Start med Mobile-First Grid

**5a. Aktivér Grid og sæt mobile layout**

Find din `#movie-list` CSS regel igen og tilføj basis grid setup:

```css
/* Mobile først - 1 kolonne */
#movie-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 1rem;
}
```

#### ✅ Forstå koden!

- `display: grid` - Aktiverer CSS Grid layout
- `grid-template-columns: 1fr` - Én kolonne der fylder hele bredden
- `gap: 1.5rem` - Mellemrum mellem movie cards
- `padding: 1rem` - Indre margin i containeren

**5b. Test mobile layout**

1. Refresh siden
2. Gør browser vinduet smalt (ca. 375px - iPhone størrelse)
3. Observer at alle movie cards ligger under hinanden i én kolonne

#### ✅ Bekræft mobile layout!

- [ ] Movie cards fylder hele bredden
- [ ] Der er pænt mellemrum mellem cards
- [ ] Layout fungerer på smal skærm

---

### Trin 6: Tilføj Media Queries for Større Skærme

**6a. Tilføj tablet breakpoint (2 kolonner)**

Nu tilføjer vi vores første media query for tablets:

```css
/* Mobile først - 1 kolonne */
#movie-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 1rem;
}

/* Tablet - 2 kolonner */
@media (min-width: 600px) {
  #movie-list {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
  }
}
```

#### ✅ Forstå media query!

- `@media (min-width: 600px)` - Aktiveres når skærmen er mindst 600px bred
- `1fr 1fr` - To lige store kolonner
- Vi øger også `gap` og `padding` for større skærme

**6b. Test tablet layout**

1. Udvid browser til ca. 600px bredde
2. Observer at du nu får 2 kolonner ved siden af hinanden
3. Prøv at gøre vinduet smallere og bredere - se layoutet skifte

**6c. Tilføj desktop breakpoint (3 kolonner)**

```css
/* Mobile først - 1 kolonne */
#movie-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 1rem;
}

/* Tablet - 2 kolonner */
@media (min-width: 600px) {
  #movie-list {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
  }
}

/* Desktop - 3 kolonner */
@media (min-width: 992px) {
  #movie-list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
```

**6d. Tilføj store skærme breakpoint (4 kolonner)**

```css
/* Mobile først - 1 kolonne */
#movie-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 1rem;
}

/* Tablet - 2 kolonner */
@media (min-width: 600px) {
  #movie-list {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
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

Test dit responsive grid grundigt:

1. **Mobile** (< 600px): 1 kolonne
2. **Tablet** (600px - 991px): 2 kolonner
3. **Desktop** (992px - 1399px): 3 kolonner
4. **Store skærme** (≥ 1400px): 4 kolonner

**Tips til test:**

- Brug Developer Tools → Toggle device toolbar (Cmd+Shift+M / Ctrl+Shift+M)
- Eller resize browser vinduet manuelt
- Observer hvordan layoutet ændrer sig ved hver breakpoint

#### ✅ Forstå fordelene!

- ✅ **Specifik kontrol** - Du bestemmer præcist antal kolonner ved hver skærmstørrelse
- ✅ **Forudsigelig** - Samme layout på alle enheder af samme størrelse
- ✅ **Mobile-first** - Starter simpelt og bygger op
- ✅ **Lettere at debug** - Klare breakpoints du kan teste

---

### Trin 7: Avanceret Grid med Auto-Fit

**Formål:** Lær en mere dynamisk tilgang til grid layout.

**7a. Forstå `auto-fit` og `minmax()`**

I stedet for faste breakpoints kan vi lade browseren bestemme antal kolonner automatisk:

```css
#movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}
```

#### ✅ Forstå avanceret grid!

- `repeat(auto-fit, ...)` - Lav så mange kolonner som der er plads til
- `minmax(250px, 1fr)` - Hver kolonne er minimum 250px og maksimum 1fr (fylder tilgængelig plads)
- Browseren beregner automatisk antal kolonner baseret på skærmbredde

**7b. Sammenlign de to tilgange**

| Tilgang               | Fordele                                          | Ulemper                                      |
| --------------------- | ------------------------------------------------ | -------------------------------------------- |
| **Faste breakpoints** | Præcis kontrol, forudsigelig, lettere at debugge | Flere kodelinjer, skal vedligeholdes         |
| **Auto-fit**          | Mindre kode, fleksibel, tilpasser sig automatisk | Mindre kontrol, kan give uventede resultater |

#### ✅ Eksperimentér!

Prøv at skifte mellem de to tilgange:

1. **Metode 1**: Brug din mobile-first CSS med media queries (Trin 6)
2. **Metode 2**: Erstat med auto-fit versionen (Trin 7a)
3. Resize vinduet og observer forskellene

**7c. Hvornår bruge hvad?**

- **Brug faste breakpoints når:**

  - Du vil have specifik kontrol over layout
  - Design kræver præcise antal kolonner
  - Du skal matche et design system

- **Brug auto-fit når:**
  - Du vil have maksimal fleksibilitet
  - Du har meget dynamisk content
  - Du vil minimere vedligeholdelse

#### ✅ Vælg din tilgang!

Beslut hvilken grid tilgang der fungerer bedst for dit projekt.

**Anbefaling:** Start med faste breakpoints (Trin 6) - det giver dig bedre forståelse og kontrol!

---

## Del 4: Forstå Eksisterende Styling 🎨

**Formål:** Analyser og forstå den eksisterende CSS styling for movie cards og posters.

### Trin 8: Undersøg Movie Card Styling

**8a. Find og analyser `.movie-card` CSS**

Åbn din `app.css` fil og find `.movie-card` reglen. Den skulle indeholde noget lignende:

```css
.movie-card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.movie-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
```

#### ✅ Forstå hver CSS regel!

- `display: flex` - Aktiverer flexbox layout
- `flex-direction: column` - Layouter indhold lodret (billede over tekst)
- `border-radius: 8px` - Afrundede hjørner
- `overflow: hidden` - Holder indhold inden for border-radius
- `box-shadow` - Skaber dybde effekt
- `transition` - Smooth animationer ved hover
- `transform: translateY(-4px)` - Løfter card 4px op ved hover

**8b. Test card styling**

#### ✅ Interaktivitets test!

1. Hover langsomt over forskellige movie cards
2. Observer lift-effekten når du hover
3. Se hvordan skyggen ændrer sig
4. Åbn Developer Tools → Elements → Hover over en `.movie-card`
5. Se CSS properties i "Styles" panelet

---

### Trin 9: Forstå Movie Poster Styling

**9a. Find og analyser `.movie-poster` CSS**

Find `.movie-poster` reglen i din `app.css`:

```css
.movie-poster {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.movie-card:hover .movie-poster {
  transform: scale(1.05);
}
```

#### ✅ Forstå hver CSS regel!

- `width: 100%` - Billedet fylder hele card bredden
- `height: 400px` - Fast højde sikrer alle posters er samme størrelse
- `object-fit: cover` - **VIGTIG!** Bevarer billedproportioner og fylder hele området
- `transition` - Smooth animation ved hover
- `transform: scale(1.05)` - Zoom effekt (5% større) ved hover

**9b. Test poster hover effekt**

#### ✅ Zoom test!

1. Hover over movie cards
2. Observer hvordan poster billeder zoomer subtilt ind
3. Se at zoom effekten er smooth (ikke hoppende)

---

### Trin 10: Dybdegående - Forstå `object-fit`

**Formål:** Forstå hvorfor `object-fit: cover` er vigtig for movie posters.

**10a. Problemet med billeder**

Movie posters har forskellige størrelser og proportioner:

- Nogle er høje og smalle (typisk filmplakater)
- Andre er brede og lave
- Hvis vi bare sætter `width` og `height`, bliver billeder strækket og forvrænsket! 😱

**10b. Løsningen: `object-fit`**

CSS `object-fit` property styrer hvordan billeder tilpasser sig deres container:

```css
/* Forskellige object-fit værdier */
object-fit: cover; /* Fylder hele området, kan croppe kanter */
object-fit: contain; /* Viser hele billedet, kan efterlade whitespace */
object-fit: fill; /* Strækker til at fylde (forvrænger billedet!) */
object-fit: scale-down; /* Som contain, men aldrig større end original */
```

#### ✅ Visualisér forskellen!

Tænk på en høj smal filmplakat i en bred container:

- **`cover`**: Fylder hele containeren, cropper top/bund hvis nødvendigt ✅ (Vores valg!)
- **`contain`**: Viser hele plakaten, men med whitespace på siderne ❌
- **`fill`**: Strækker plakaten så den bliver bred og flad ❌❌

**10c. Eksperimentér med object-fit**

#### ✅ Hands-on test!

1. Find `.movie-poster` i din `app.css`
2. Ændr midlertidigt `object-fit: cover` til `object-fit: contain`
3. Refresh siden og observer forskellen
4. Se hvordan nogle posters nu har whitespace (hvide/grå områder)
5. Prøv også `object-fit: fill` - se hvordan billeder bliver forvrænsket!
6. Skift tilbage til `object-fit: cover` - meget bedre! ✨

**10d. Hvorfor `cover` er bedst til posters**

- ✅ Fylder hele card området - ingen whitespace
- ✅ Bevarer billedproportioner - ingen forvrængning
- ✅ Konsistent visuelt udtryk - alle cards ser ens ud
- ✅ Professionelt look - som Netflix, IMDb, osv.

#### ✅ Developer Tools Inspect!

1. Højreklik på en movie poster → "Inspect Element"
2. Find `<img class="movie-poster">` i Elements panelet
3. Se i Styles panelet hvordan `object-fit: cover` er anvendt
4. Prøv at disable/enable properties - se effekten live!

---

### Trin 11: Sammenfatning af Styling

#### ✅ Hvad har du lært?

- [ ] Forstår hvordan `.movie-card` bruger flexbox til layout
- [ ] Forstår hover effekter med `transform` og `transition`
- [ ] Forstår hvorfor `object-fit: cover` er vigtig for billeder
- [ ] Kan forklare forskellen mellem `cover`, `contain` og `fill`
- [ ] Har eksperimenteret med CSS i Developer Tools

#### 🎉 Godt gået!

Du forstår nu den eksisterende styling og er klar til næste del!

---

## Del 5: Fra HTML til JavaScript Objekter 🎬→📝

**Formål:** Konverter din eksisterende HTML movie data til JavaScript objekter.

### Hvorfor JavaScript objekter? 🤔

**Lige nu har vi et problem:**

Vores movie data er "låst fast" i HTML:

```html
<article class="movie-card">
  <img src="..." alt="Barbie" />
  <div class="movie-info">
    <h3>Barbie <span class="movie-year">(2023)</span></h3>
    <p class="movie-genre">Adventure, Comedy, Fantasy</p>
    <!-- osv. -->
  </div>
</article>
```

#### ❌ Problemer med HTML-only data:

1. **Svært at søge** - Hvordan finder vi alle film fra 2023?
2. **Svært at sortere** - Hvordan sorterer vi efter rating?
3. **Svært at filtrere** - Hvordan viser vi kun action film?
4. **Svært at opdatere** - Skal manuelt ændre HTML for hver film
5. **Ikke dynamisk** - Kan ikke tilføje nye film uden at skrive HTML
6. **Gentaget kode** - Samme HTML struktur kopieret mange gange

#### ✅ Fordele ved JavaScript objekter:

```javascript
const barbieMovie = {
  id: 1,
  title: "Barbie",
  year: 2023,
  genre: ["Adventure", "Comedy", "Fantasy"],
  rating: 7.0,
  director: "Greta Gerwig"
  // osv.
};
```

1. **Nemt at søge** - `movies.filter(movie => movie.year === 2023)`
2. **Nemt at sortere** - `movies.sort((a, b) => b.rating - a.rating)`
3. **Nemt at filtrere** - `movies.filter(movie => movie.genre.includes("Action"))`
4. **Dynamisk** - Generer HTML automatisk fra data
5. **Kan hentes fra database** - F.eks. JSON fil eller API
6. **Separation of Concerns** - Data adskilt fra præsentation

#### 🎯 Vores mål:

1. **Konverter** alle movie cards fra HTML til JavaScript objekter
2. **Gem** objekterne i et array: `const movies = [movie1, movie2, ...]`
3. **Generer** HTML dynamisk fra JavaScript (senere!)

#### 💡 Real-world eksempler:

- **Netflix**: Henter film data fra database → viser som cards
- **IMDb**: Tusindvis af film i database → genererer HTML dynamisk
- **Spotify**: Sange som objekter → viser dem som playlister

**Lad os komme i gang!** 🚀

---

### Trin 10: Analyser eksisterende movie data

**10a. Undersøg din HTML struktur**

Se på en af dine movie cards i `index.html`:

```html
<article class="movie-card">
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

### Trin 11: Opret individuelle movie objekter

**11a. Åbn din `app.js` fil**

Vi starter med at oprette et JavaScript objekt for hver film individuelt.

**11b. Opret første movie objekt - Barbie**

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

**11c. Opret andet movie objekt - Dune**

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

### Trin 12: Opret resterende movie objekter selv! 💪

**13a. Nu er det din tur!**

Du har lært mønsteret - nu skal du selv oprette objekter for de resterende 5 film baseret på din HTML:

- Everything Everywhere All at Once (2022)
- Fight Club (1999)
- Forrest Gump (1994)
- Goodfellas (1990)
- Inception (2010)
- Eller nogle helt andre hvis du ønsker!

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

### Trin 13: Test objekt egenskaber

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

### Trin 14: Sammenlign HTML vs JavaScript

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

### Trin 14B: Nulstil JavaScript til ren movie data 🧹

Før vi starter DOM manipulation, skal vi have en ren `app.js` fil OG en tom movie container.

**15B.1. Backup din nuværende `app.js`**

Hvis du har lavet meget test kode, gem den måske i en kommentar øverst.

**15B.2. Ryd HTML - fjern alle statiske movie cards**

Gå til din `index.html` og fjern ALT indhold mellem `<section id="movie-list">` tags:

```html
<!-- Fra dette: -->
<section id="movie-list">
  <article class="movie-card">
    <!-- Masse HTML for Barbie... -->
  </article>
  <article class="movie-card">
    <!-- Masse HTML for Dune... -->
  </article>
  <!-- ...alle de andre movie cards... -->
</section>

<!-- Til dette: -->
<section id="movie-list">
  <!-- Tom container - klar til JavaScript! -->
</section>
```

Det til sige at din html ender med at se sådan ud:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Dit navn" />
    <meta name="description" content="Project Template" />
    <link rel="stylesheet" href="app.css" />
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon" />
    <title>Movie App</title>
  </head>

  <body>
    <header>
      <h1>Movie App</h1>
    </header>
    <main>
      <!-- Movie List -->
      <section id="movie-list"></section>
    </main>
    <!-- Footer -->
    <footer>
      <p>© Dit Navn</p>
    </footer>

    <script src="app.js"></script>
  </body>
</html>
```

**15B.3. Erstat indholdet af `app.js` med kun movie objekterne**
Ryd op i din `app.js`, så du kun har dine movie objekter gemt i variabler. Du må gerne have c`onsole.log`s, som du har testet med:

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

### Trin 15: Fra JavaScript til DOM - Oplev problemet først! 🎨

**16a. Start med at skrive HTML direkte (den "forkerte" måde)**

```javascript
// Find movie list container (den er nu tom efter Trin 15B!)
const movieListContainer = document.querySelector("#movie-list");

// Tilføj Barbie movie DIREKTE med template string
const barbieHTML = `
  <article class="movie-card">
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
  <article class="movie-card">
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
  <article class="movie-card">
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

### Trin 16: Løsningen - Lav en funktion! 🚀

**17a. Opret en smart funktion der gør ALT arbejdet**

```javascript
// Find movie list container (gør det én gang)
const movieListContainer = document.querySelector("#movie-list");

// Den SMARTE måde - funktion der både genererer HTML og tilføjer til DOM!
function displayMovie(movieObject) {
  // Konverter genre array til string
  const genreString = movieObject.genre.join(", ");

  const movieHTML = `
    <article class="movie-card">
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

### Trin 17: Tilføj ALLE movies med funktionen! 🎬

**Nu kan vi tilføje alle vores movies super nemt:**

```javascript
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

---

### 📋 Sådan burde din `app.js` se ud nu:

<details>
<summary>🔍 Klik her for at se komplet løsning</summary>

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

// Movie 4: Spider-Man: Across the Spider-Verse
const spider = {
  id: 4,
  title: "Spider-Man: Across the Spider-Verse",
  year: 2023,
  genre: ["Animation", "Action", "Adventure"],
  rating: 8.7,
  director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
  image:
    "https://m.media-amazon.com/images/M/MV5BZjE1ODk2NDgtNTMxZC00ZWQ1LWFlZmItNjQ1ZWRhZTQ5NTliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  actors: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac"],
  description:
    "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence."
};

// Movie 5: Avatar: The Way of Water
const avatar = {
  id: 5,
  title: "Avatar: The Way of Water",
  year: 2022,
  genre: ["Action", "Adventure", "Fantasy"],
  rating: 7.6,
  director: "James Cameron",
  image:
    "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGc@._V1_.jpg",
  actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
  description:
    "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora."
};

// Movie 6: Top Gun: Maverick
const topgun = {
  id: 6,
  title: "Top Gun: Maverick",
  year: 2022,
  genre: ["Action", "Drama"],
  rating: 8.3,
  director: "Joseph Kosinski",
  image:
    "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  actors: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
  description:
    "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it."
};

// Movie 7: Interstellar
const interstellar = {
  id: 7,
  title: "Interstellar",
  year: 2014,
  genre: ["Adventure", "Drama", "Sci-Fi"],
  rating: 8.7,
  director: "Christopher Nolan",
  image:
    "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
  actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
  description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
};

// Movie 8: John Wick: Chapter 4
const johnwick = {
  id: 8,
  title: "John Wick: Chapter 4",
  year: 2023,
  genre: ["Action", "Crime", "Thriller"],
  rating: 7.7,
  director: "Chad Stahelski",
  image:
    "https://m.media-amazon.com/images/M/MV5BNjRmMTk1ZjgtZTQ5ZS00NmM5LWJlNWYtY2M1NzI3NWU3ZmFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  actors: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"],
  description:
    "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe."
};

// ========== FUNCTIONS ==========

/**
 * Displays a single movie card in the movie list
 * @param {Object} movieObject - The movie object containing all movie data
 */
function displayMovie(movieObject) {
  const htmlTemplate = `
    <article class="movie-card">
      <img 
        src="${movieObject.image}" 
        alt="Poster of ${movieObject.title}"
        class="movie-poster" 
      />
      <div class="movie-info">
        <h3>${movieObject.title} <span class="movie-year">(${movieObject.year})</span></h3>
        <p class="movie-genre">${movieObject.genre.join(", ")}</p>
        <p class="movie-rating">⭐ ${movieObject.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movieObject.director}</p>
      </div>
    </article>
  `;

  document.querySelector("#movie-list").insertAdjacentHTML("beforeend", htmlTemplate);
}

// ========== DISPLAY ALL MOVIES ==========

// Tilføj alle movies - ÉN linje per movie!
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

#### ✅ Checklist for din kode:

- [ ] Alle 8 movie objekter er defineret
- [ ] `movieListContainer` reference er oprettet
- [ ] `displayMovie()` funktionen er defineret
- [ ] Alle 8 movies kaldes med `displayMovie()`
- [ ] Ingen fejl i Console
- [ ] Alle movies vises i browseren i CSS Grid layout

</details>

---

**18a. BONUS - Opret din egen movie**

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

### Trin 18: Forbedring - Fra objekter til array! 🗃️

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
Lidt som i en database eller JSON fil, kan vi samle alle vores movie objekter i et enkelt array:

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
Brug din eksisterende `displayMovie` funktion til at tilføje enkelte movies ved hjælp af array indeks - fx `movies[0]`, `movies[1]`, osv.:

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

1. Prøv forskellige indeks: `movies[0]`, `movies[3]`, `movies[7]` - eller måske dem alle sammen?
2. Tilføj kun de movies du vil have vist
3. Se hvordan array indeks giver os mere kontrol

**19d. Gradvis introduktion til loops - tilføj alle movies**
Fjern eller udkommenter de manuelle kald til `displayMovie` og brug et `for-of` loop til at tilføje alle movies fra arrayet:

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

- Hvad sker der når du kører `displayMovies(movies)` igen efter at have tilføjet en ny movie?
- Prøv at tilføje flere movies dynamisk!

#### 🎯 Hvad lærte vi i Del 5 + Arrays?

- **Template strings** (`${}`) til dynamisk HTML
- **Functions** til genbrugelig kode
- **insertAdjacentHTML** til at tilføje HTML til DOM
- **Arrays** til at organisere data
- **For-of loops** til at iterere gennem arrays
- **Array methods** som `filter()`, `sort()`, `push()`
- **Progression** fra manuel til automatiseret kode

---

## Del 6: Fra Lokale Arrays til Ekstern JSON Data 🌐→📡

**Formål:** Lær at hente movie data fra en ekstern JSON fil i stedet for lokale JavaScript arrays.

### Hvorfor eksterne data? 🤔

**Det store spring - Fra statisk til dynamisk:**

Lige nu har vi hardkodet vores movies direkte i `app.js`:

```javascript
const movies = [
  { id: 1, title: "Barbie", year: 2023, ... },
  { id: 2, title: "Dune", year: 2021, ... },
  // ... osv.
];
```

**Dette fungerer til læring, men i virkeligheden:**

#### ❌ Problemer med hardkoded data:

1. **Skal gendeploye hele app'en** for at tilføje én film
2. **Udviklere skal ændre kode** - content creators kan ikke hjælpe
3. **Ikke skalerbart** - 1000 film i JavaScript filen? 😱
4. **Kan ikke deles** - Andre apps/systemer kan ikke bruge data
5. **Ingen real-time opdateringer** - Data er "frozen" i koden
6. **Svært at vedligeholde** - Skal søge gennem kode for at rette stavefejl

#### ✅ Fordele ved eksterne data (JSON):

1. **Adskillelse af data og kode** - Content kan opdateres uafhængigt
2. **Content creators kan opdatere** - Ingen kode-viden nødvendig
3. **Skalerbart** - Millioner af film? Ingen problem!
4. **Kan deles** - API'er kan bruges af mange apps
5. **Real-time data** - Hent friske data hver gang
6. **Centraliseret** - Én kilde til sandhed, delt af alle

#### 🌍 Real-world eksempler:

- **Netflix**: Henter film data fra database via API
- **Spotify**: Musikdata kommer fra servere, ikke hardkodet
- **Instagram**: Posts hentes dynamisk, ikke i koden
- **Din bank app**: Konto balance kommer fra server!

#### 🎯 Hvad skal vi lære?

1. **Forstå JSON format** - Web'ets data sprog
2. **Fetch API** - Hent data fra eksterne kilder
3. **Async/Await** - Håndter asynkrone operationer
4. **Error handling** - Hvad hvis serveren er nede?
5. **Loading states** - Vis brugeren at data hentes

**Lad os gøre vores app mere professionel!** 🚀

---

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

- **JSON** står for **J**ava**S**cript **O**bject **N**otation og er web'ets mest populære dataformat.
- **JSON** anvendes til at udveksle data på web'et - mellem client og server - via HTTP.

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
- 🔗 **Nemt at parse** til og fra JavaScript - JavaScript kan nemt konvertere til objekter

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
2. Gå til: https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json
3. **STOP! Læs JSON'en grundigt før du fortsætter** 👀

#### ✅ Analyser JSON strukturen!

Se på den første film i JSON'en og besvar:

1. **Hvilke properties har hver film?** (sammenlign med dit lokale array)
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
_Du skal ikke skrive noget kode i dette trin - bare læs og forstå._

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
- `await` = "Vent her til data er klar" - vi ved ikke hvor lang tid det tager fx at hente noget data fra en server over nettet.
- Det ligner normal kode, men venter pænt på internettet

**24b. Sådan virker det:**

- 🌐 **Internettet er langsomt** - kan tage tid at hente data
- ⏰ **`await` venter** - JavaScript pauser og venter på svar
- ⚡ **Derefter fortsætter** - når data er klar, kører koden videre

💡 **Hvorfor bruger vi denne måde?** Fordi den er lettere at læse og forstå - det ser ud som normal kode der bare "venter" på data!

---

### Trin 25: Din første async/await funktion 🎯

**25a. Start med en simpel test funktion**

Lad os først teste at vi kan hente data - uden at vise noget endnu:

```javascript
// ========== TEST ASYNC FETCH ==========

async function testFetchMovies() {
  console.log("🚀 Starter hentning af movie data...");

  // Vent på at få response fra serveren
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");

  console.log("📡 Response modtaget:", response);

  // Vent på at konvertere response til JavaScript objekter
  const moviesFromJSON = await response.json();

  console.log("🎬 Movies fra JSON:", moviesFromJSON);
  console.log("📊 Antal movies:", moviesFromJSON.length);
  console.log("🎭 Første movie:", moviesFromJSON[0]);
}

// Kald funktionen
testFetchMovies();
```

**25b. Forstå hvad der sker trin for trin:**

1. **`async function`** - Fortæller JavaScript "denne funktion kan tage tid"
2. **`await fetch(...)`** - "Vent her til serveren svarer"
3. **`await response.json()`** - "Vent her til data er konverteret"
4. **Console logs** - Lad os se hvad vi fik

#### ✅ Test din første async funktion!

1. Tilføj koden til din `app.js`
2. **GEM filen** (`Ctrl+S` / `Cmd+S`)
3. Refresh siden
4. Åbn Console (F12) og se de detaljerede logs!

**Du skulle se:**

1. "🚀 Starter hentning..." (med det samme)
2. "📡 Response modtaget..." (lidt senere)
3. "🎬 Movies fra JSON..." (lidt senere)
4. "📊 Antal movies: 17"

**25c. Analyser JSON response i Console**

Når data er hentet, undersøg det i Console:

1. **Expand** `moviesFromJSON` arrayet (klik på pilen)
2. **Click** på den første movie ([0])
3. **Se** alle properties: id, title, genre array, actors array, etc.

#### ✅ Sammenlign med din lokale data!

- Er der flere movies? (17 vs. 8)
- Findes der actors? `["Margot Robbie", "Ryan Gosling", "America Ferrera"]`
- Er der en description?
- Hedder billedet `image`?

---

### Trin 26: Test med én movie først �

**26a. Godt nyt - din displayMovie funktion virker allerede!**

Fordi vi designede vores struktur godt fra starten, virker `displayMovie` funktionen med JSON data uden ændringer!

Lad os teste det:

```javascript
// ========== TEST DISPLAY ONE MOVIE ==========

async function testDisplayOneMovie() {
  console.log("🧪 Tester at vise ÉN movie fra JSON...");

  // Hent data
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  const moviesFromJSON = await response.json();

  // Ryd container først
  movieListContainer.innerHTML = "";

  // Vis kun første movie som test
  displayMovie(moviesFromJSON[0]);

  console.log("✅ Test success - én movie fra JSON vist!");
}

// Kør testen
testDisplayOneMovie();
```

#### ✅ Test processen!

1. **Kommentér ud** din `testFetchMovies()` funktion (tilføj `//` foran hver linje)
2. Tilføj `testDisplayOneMovie()` funktionen til din `app.js`
3. **GEM filen** (`Ctrl+S` / `Cmd+S`)
4. Refresh siden
5. Ser du ÉN movie card fra JSON data?

**Sådan skulle din app.js se ud nu:**

```javascript
// Kommenteret ud - vi bruger den ikke mere:
// async function testFetchMovies() { ... }

// Ny test funktion - aktiv:
async function testDisplayOneMovie() {
  console.log("🧪 Tester at vise ÉN movie fra JSON...");
  // ... funktionskode ...
}

testDisplayOneMovie(); // ← Denne kører nu
```

**💡 Hvorfor virker det?**

Fordi JSON strukturen matcher vores objekt struktur:

- Begge har `title`, `year`, `genre`, `rating`, `director`, `image`
- `displayMovie()` forventer et objekt med disse properties
- JSON giver os netop det! ✨

---

### Trin 27: Vis alle JSON movies! 🎬🎬🎬

**27a. Nu skal vi vise ALLE movies - ikke bare én**

Vi skal nu erstatte vores test-kode med den endelige løsning. Følg disse trin nøje:

**TRIN 1: Slet/kommentér test funktioner**

Find og kommentér ud (eller slet) disse test funktioner:

```javascript
// SLET ELLER KOMMENTÉR UD:
// async function testFetchMovies() { ... }
// testFetchMovies();

// async function testDisplayOneMovie() { ... }
// testDisplayOneMovie();
```

**TRIN 2: Tjek om du har displayMovies() funktion**

Søg i din `app.js` efter en funktion der hedder `displayMovies`.

- **Hvis du IKKE har den:** Tilføj den nedenfor
- **Hvis du HAR den:** Spring til TRIN 3

```javascript
// ========== DISPLAY ALL MOVIES ==========

function displayMovies(movieArray) {
  // Ryd container først
  movieListContainer.innerHTML = "";

  console.log(`🎬 Viser ${movieArray.length} movies...`);

  // Loop gennem alle movies
  for (const movie of movieArray) {
    displayMovie(movie);
  }

  console.log(`🎉 ${movieArray.length} movies vist!`);
}
```

**TRIN 3: Opret den endelige loadMovies() funktion**

Tilføj denne nye funktion (eller erstat hvis du allerede har en):

```javascript
// ========== LOAD MOVIES FROM JSON ==========

async function loadMovies() {
  console.log("🌐 Henter alle movies fra JSON...");

  // Hent data fra JSON fil
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  const moviesFromJSON = await response.json();

  console.log("📊 JSON data modtaget:", moviesFromJSON.length, "movies");

  // Vis alle movies
  displayMovies(moviesFromJSON);
}
```

**TRIN 4: Kald loadMovies() når siden loader**

Find din `DOMContentLoaded` event listener (eller tilføj den):

```javascript
// ===== APP INITIALISERING =====
document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  loadMovies(); // Hent og vis movies fra JSON
}
```

**TRIN 5: Ryd op - slet gammel lokal data**

Find og **SLET** (ikke kommentér, men slet helt):

```javascript
// SLET DETTE:
const movies = [
  { id: 1, title: "Barbie", ... },
  { id: 2, title: "Dune", ... },
  // ... alle dine lokale movies
];

// SLET OGSÅ DETTE hvis du har det:
displayMovies(movies);
```

#### ✅ Test den komplette løsning!

1. **GEM filen** (`Ctrl+S` / `Cmd+S`)
2. Refresh siden
3. Åbn Console

**Du skulle nu se:**

- 🎬 **17 movies** (fra JSON, ikke 8)
- 📊 Console log: "JSON data modtaget: 17 movies"
- 🎉 Console log: "17 movies vist!"
- ⭐ Nye film som "The Matrix", "The Dark Knight", etc.

**27b. Fejlfinding hvis det ikke virker**

**Problem:** Ingen movies vises

**Tjek:**

1. Er der fejl i Console? (Røde beskeder)
2. Kører `loadMovies()` fra `initApp()`?
3. Er din gamle `movies` array slettet?

**Problem:** Jeg ser stadig kun 8 movies

**Løsning:**

- Du har glemt at slette din gamle lokale `movies` array
- Eller du kalder stadig `displayMovies(movies)` med den gamle data
- Søg efter "const movies = [" og slet det hele

---

### Trin 28: Verificér din endelige kode struktur ✅

**28a. Sådan SKAL din app.js se ud nu:**

```javascript
// ========== DOM REFERENCE ==========
const movieListContainer = document.querySelector("#movie-list");

// ========== DISPLAY SINGLE MOVIE ==========
function displayMovie(movieObject) {
  const genreString = movieObject.genre.join(", ");

  const movieHTML = `
    <article class="movie-card">
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
}

// ========== DISPLAY ALL MOVIES ==========
function displayMovies(movieArray) {
  movieListContainer.innerHTML = "";

  for (const movie of movieArray) {
    displayMovie(movie);
  }

  console.log(`🎉 ${movieArray.length} movies vist!`);
}

// ========== LOAD MOVIES FROM JSON ==========
async function loadMovies() {
  console.log("🌐 Henter movies fra JSON...");

  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  const moviesFromJSON = await response.json();

  console.log("📊 Data modtaget:", moviesFromJSON.length, "movies");

  displayMovies(moviesFromJSON);
}

// ===== APP INITIALISERING =====
document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  loadMovies();
}
```

#### ✅ Verificér din kode!

- [ ] Ingen `const movies = [...]` lokal array
- [ ] Ingen test funktioner (`testFetchMovies`, `testDisplayOneMovie`)
- [ ] `displayMovie()` funktion eksisterer
- [ ] `displayMovies()` funktion eksisterer
- [ ] `loadMovies()` async funktion eksisterer
- [ ] `initApp()` kalder `loadMovies()`
- [ ] Ingen fejl i Console
- [ ] 17 movies vises på siden

**28b. Hvis noget mangler - tilføj det nu!**

Sammenlign din kode med strukturen ovenfor og tilføj hvad der mangler.

---

### Trin 29: Sammenlign før og efter 📊

**28a. Hvad har vi opnået?**

**Før (lokale arrays):**

```javascript
// Hardkodet data
const movies = [
  /* 8 movies */
];
displayMovies(movies); // Instant visning
```

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
- 🐛 **Fejl håndtering** - hvad hvis serveren er nede?
- 🔄 **Asynkron programmering** - mere kompleks kode

#### ✅ Refleksion!

1. Hvornår ville du bruge lokale arrays vs. ekstern JSON?
2. Hvad ville der ske hvis JSON URL'en ændrer sig?

---

### Trin 29: Bonus - Udforsk den rigere JSON data! 🎭

**29a. Tilføj actors til movie cards**

Prøv at udvide din `displayMovie` funktion:

```javascript
function displayMovie(movieObject) {
  const genreString = movieObject.genre.join(", ");
  const actorsString = movieObject.actors.join(", "); // Ny linje!

  const movieHTML = `
    <article class="movie-card">
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
  <article class="movie-card" data-description="${movieObject.description}">
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
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  const movies = await response.json();
  displayMovies(movies);
}

// ===== APP INITIALISERING =====
// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// Start the app
function initApp() {
  loadMovies();
}
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
