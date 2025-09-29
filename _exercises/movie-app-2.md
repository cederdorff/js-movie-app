# Movie App - Session 2: Projekt Forståelse og CSS Grid

## Opgaver til anden undervisningsgang

> **Vigtig:** Åbn Developer Tools i din browser og hold øje med både Console-fanen og Elements-fanen mens du arbejder. Du kan åbne Developer Tools med:
>
> - **Mac:** `Cmd + Option + I`
> - **PC:** `F12` eller `Ctrl + Shift + I`

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
  background: white;
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

## 🎯 Læringsmål opnået

Efter denne session kan du:

- ✅ **Analysere HTML struktur**: Forstå eksisterende projekt layout
- ✅ **CSS Grid basics**: `display: grid`, `grid-template-columns`, `gap`
- ✅ **Responsive grid**: `auto-fit`, `minmax()`, media queries
- ✅ **Grid alignment**: `justify-items`, `align-items`
- ✅ **Grid areas**: Specielle layout patterns
- ✅ **Integration**: Kombinere grid med flexbox for optimal layout

---

## 🚀 Næste skridt

I session 3 vil vi:

- Arbejde med JavaScript til at generere movie cards dynamisk
- Implementere søgning og filtrering
- Tilføje interaktive funktioner

**Din Movie App er nu professionelt stylet med CSS Grid! 🎉**
