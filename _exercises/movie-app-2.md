# DAG 2 - Arrays, Loops & Film-lister

## Formål

I dag skal du lære at arbejde med **flere ting på én gang** - lister af data! Vi bygger videre på dit Movie App projekt fra DAG 1.

**Du lærer:**

- Hvad er et array?
- Hvordan looper man gennem et array?
- Hvordan viser man data på siden?
- Hvad er et object? (basic intro)

**Vi bruger IKKE fetch endnu!** Vi starter med hardcoded data for at fokusere på loops.

**Progressionen:**

- **DAG 1:** Movie App setup + Klik-tæller (variabler, events)
- **DAG 2:** Arrays, loops, hardcoded movie data ← DU ER HER
- **DAG 3:** Fetch rigtig data + filter
- **DAG 4:** Søgning + dialog + deployment

---

## Opgave 0: Forbered dit Movie App projekt fra DAG 1

### Trin 1: Tjek at du har DAG 1 projektet

Du skal have et `movie-app` projekt med:

- `index.html` - med Movie App header og klik-tæller
- `app.js` - med klik-tæller funktionalitet
- `app.css` - med Movie App styling

**Har du ikke projektet færdigt fra DAG 1?**

1. Gå tilbage til [DAG 1 opgaven](movie-app-1.md) og færdiggør Opgave 0
2. Eller hent eksempel-filerne:
   - `_exercises/examples/dag1/index.html`
   - `_exercises/examples/dag1/app.js`
   - `_exercises/examples/dag1/style.css`

### Trin 2: Opdater HTML til DAG 2 struktur

Nu skal vi ændre vores `index.html` fra klik-tæller til en film-liste.

**Åbn `index.html` og erstat `<main>` sektionen:**

```html
<!DOCTYPE html>
<html lang="da">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Movie App - DAG 2</title>
    <link rel="stylesheet" href="app.css" />
  </head>
  <body>
    <header>
      <h1>Movie App</h1>
      <p>DAG 2: Arrays, Loops & Film-lister</p>
    </header>

    <main>
      <div id="movie-list">
        <!-- Film vises her med JavaScript -->
      </div>
    </main>

    <script src="app.js"></script>
  </body>
</html>
```

### Trin 3: Opdater CSS til film-liste styling

**Åbn `app.css` og erstat hele indholdet med:**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

header {
  text-align: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

#movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.movie-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1rem;
  transition: transform 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.movie-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.movie-card h3 {
  color: #ffd700;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.movie-card p {
  opacity: 0.9;
  font-size: 0.95rem;
  margin: 0.3rem 0;
}
```

### Trin 4: Ryd op i app.js

**Åbn `app.js` og slet alt indhold** - vi starter med en frisk begyndelse til DAG 2:

```javascript
"use strict";

console.log("Movie App - DAG 2 starter...");

// Her skriver du din nye kode for DAG 2
```

**Hvorfor sletter vi DAG 1 koden?**

I dag lærer vi arrays og loops - det er nyt koncept. Klik-tæller koden kan du altid finde i `_exercises/examples/dag1/app.js` hvis du vil se den igen!

### Trin 5: Test din Movie App struktur

1. **Gem alle filer** (Windows/PC: Ctrl+S, Mac: Cmd+S)
2. **Genindlæs Live Server** (eller start den hvis ikke åben)
3. **Tjek i browseren:**

- Ser du "Movie App" header?
- Står der "DAG 2: Arrays, Loops & Film-lister"?
- Siden er tom under headeren - det er ok! Vi tilføjer indhold nu.

### Trin 6: Indsæt 3 hardcoded film-kort i HTML (bro-øvelse)

Før vi bruger JavaScript, laver vi **samme resultat manuelt i HTML**. Så bliver det tydeligt, hvorfor arrays + loops er smart.

**Indsæt midlertidigt dette i `index.html` inde i `#movie-list`:**

```html
<div id="movie-list">
  <div class="movie-card">
    <h3>Inception</h3>
    <p>År: 2010</p>
  </div>
  <div class="movie-card">
    <h3>The Matrix</h3>
    <p>År: 1999</p>
  </div>
  <div class="movie-card">
    <h3>Interstellar</h3>
    <p>År: 2014</p>
  </div>
</div>
```

**Reflektér kort:**

- Hvordan ville det se ud med 20 film?
- Hvad hvis titlen eller årstal skal ændres mange steder?
- Hvor meget kopi-arbejde bliver der?

Når du har set det i browseren, går vi videre til Opgave 1, hvor vi genererer kortene med JavaScript i stedet.

---

## Opgave 1: Hvad er et Array?

**Formål:** Forstå hvordan man gemmer flere ting i én variabel.

### 1.1: Din første liste

Arrays er som en liste eller en boks med flere ting i. I stedet for:

```javascript
let movie1 = "Inception";
let movie2 = "The Matrix";
let movie3 = "Interstellar";
```

Kan du skrive:

```javascript
let movies = ["Inception", "The Matrix", "Interstellar"];
```

**Prøv det i `app.js`:**

```javascript
"use strict";

console.log("Movie App starter...");

// En liste af film-titler
let movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight"];

console.log("Alle film:", movies);
console.log("Første film:", movies[0]);
console.log("Anden film:", movies[1]);
console.log("Hvor mange film?", movies.length);
```

**Vigtigt:**

- Arrays starter ved index 0 (ikke 1!)
- `movies[0]` er den første
- `.length` fortæller hvor mange der er

---

## Opgave 2: Loop gennem et Array

**Formål:** Lær at gå gennem hvert element i en liste.

### 2.1: For...of loop (den nemme måde)

```javascript
"use strict";

let movies = ["Inception", "The Matrix", "Interstellar"];

console.log("--- Vi looper gennem filmene ---");

for (let movie of movies) {
  console.log("Film:", movie);
}

console.log("--- Loop færdig ---");
```

**Hvad sker der?**

- Loopet går gennem arrayet én ad gangen
- `movie` bliver skiftevis "Inception", "The Matrix", "Interstellar"
- Koden indeni `{ }` køres 3 gange

### 2.2: Loop og vis på siden

```javascript
"use strict";

let movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight"];

// Find container
let movieList = document.querySelector("#movie-list");

// Loop gennem alle film
for (let movie of movies) {
  console.log("Tilføjer film:", movie);

  // Lav HTML for denne film
  let html = `
    <div class="movie-card">
      <h3>${movie}</h3>
    </div>
  `;

  // Tilføj til siden
  movieList.insertAdjacentHTML("beforeend", html);
}

console.log("Alle film vist!");
```

**Test det!** Du skulle se 4 film-kort på siden.

**Nyt koncept: Template strings**

- Brug backticks: `` ` ``
- Indsæt variabler med `${variabel}`
- Kan skrives over flere linjer

---

## Opgave 3: Hvad er et Object?

**Formål:** Lær at gemme flere informationer om én ting.

### 3.1: Fra string til object

I stedet for bare en titel, vil vi gerne have:

- Titel
- År
- Rating

**Med objects kan vi det:**

```javascript
let movie = {
  title: "Inception",
  year: 2010,
  rating: 8.8,
};

console.log("Titel:", movie.title);
console.log("År:", movie.year);
console.log("Rating:", movie.rating);
```

**Vigtigt:**

- Objects bruger `{ }` (arrays bruger `[ ]`)
- Data gemmes som `key: value` par
- Få adgang med `.` (dot notation)

### 3.2: Array af objects

Nu kombinerer vi! Array med flere film-objects:

```javascript
let movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
  },
];

console.log("Første film:", movies[0]);
console.log("Dens titel:", movies[0].title);
```

---

## Opgave 4: Vis Film-kort med Data

**Formål:** Kombinér alt du har lært - loop gennem objects og vis dem!

### 4.1: Komplet løsning

**Erstat alt i `app.js` med:**

```javascript
"use strict";

console.log("Movie App starter...");

// Array af film-objects (hardcoded data)
let movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
  },
];

// Find container
let movieList = document.querySelector("#movie-list");

// Loop gennem alle film
for (let movie of movies) {
  console.log("Viser film:", movie.title);

  // Lav HTML for denne film
  let html = `
    <div class="movie-card">
      <h3>${movie.title}</h3>
      <p> År: ${movie.year}</p>
      <p> Rating: ${movie.rating}</p>
    </div>
  `;

  // Tilføj til siden
  movieList.insertAdjacentHTML("beforeend", html);
}

console.log("Alle", movies.length, "film vist!");
```

**Test det!** Du skulle se 4 flotte film-kort med data.

---

## Opgave 5: Gør det til funktioner

**Formål:** Lær at organisere din kode i funktioner.

### 5.1: Opdel i funktioner

```javascript
"use strict";

console.log("Movie App starter...");

// Global data
let movies = [
  { title: "Inception", year: 2010, rating: 8.8 },
  { title: "The Matrix", year: 1999, rating: 8.7 },
  { title: "Interstellar", year: 2014, rating: 8.6 },
  { title: "The Dark Knight", year: 2008, rating: 9.0 },
];

// Start app
showMovies();

// Funktion til at vise alle film
function showMovies() {
  console.log("Viser", movies.length, "film...");

  let movieList = document.querySelector("#movie-list");
  movieList.innerHTML = ""; // Ryd først

  for (let movie of movies) {
    showMovie(movie);
  }

  console.log("Alle film vist!");
}

// Funktion til at vise én film
function showMovie(movie) {
  let movieList = document.querySelector("#movie-list");

  let html = `
    <div class="movie-card">
      <h3>${movie.title}</h3>
      <p> År: ${movie.year}</p>
      <p> Rating: ${movie.rating}</p>
    </div>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
```

**Hvorfor funktioner?**

- Lettere at læse
- Lettere at ændre
- Kan genbruges
- Professionel kode-struktur

---

## Udfordringer

### Udfordring 1: Tilføj flere film

Tilføj 3 flere film til dit array. Find selv data online!

### Udfordring 2: Farve baseret på rating

Gør så film med rating over 8.5 får en guldfarve:

```javascript
function showMovie(movie) {
  let movieList = document.querySelector("#movie-list");

  // Vælg farve baseret på rating
  let color = movie.rating >= 8.5 ? "gold" : "white";

  let html = `
    <div class="movie-card" style="border: 2px solid ${color}">
      <h3>${movie.title}</h3>
      <p> År: ${movie.year}</p>
      <p> Rating: ${movie.rating}</p>
    </div>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
```

### Udfordring 3: Tilføj billeder

Udvid dine movie objects med en `image` property:

```javascript
let movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
  },
  // ... resten
];
```

Vis billedet i dit card:

```javascript
let html = `
  <div class="movie-card">
    <img src="${movie.image}" alt="${movie.title}" style="width: 100%; border-radius: 10px;">
    <h3>${movie.title}</h3>
    <p> År: ${movie.year}</p>
    <p> Rating: ${movie.rating}</p>
  </div>
`;
```

---

## BONUS: Introduktion til Fetch

**Kun hvis du er færdig med alt ovenstående!**

Nu kan vi erstatte vores hardcoded data med rigtig data fra en JSON fil:

```javascript
"use strict";

// Start app når siden er loaded
start();

async function start() {
  console.log("Henter film data...");

  // Hent data fra URL
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  const movies = await response.json();

  console.log("Hentet", movies.length, "film!");

  showMovies(movies);
}

function showMovies(movies) {
  let movieList = document.querySelector("#movie-list");
  movieList.innerHTML = "";

  for (let movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  let movieList = document.querySelector("#movie-list");

  let html = `
    <div class="movie-card">
      <img src="${movie.image}" alt="${movie.title}" style="width: 100%; border-radius: 10px; margin-bottom: 0.5rem;">
      <h3>${movie.title} (${movie.year})</h3>
      <p> ${movie.rating}</p>
    </div>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
```

**Dette er avanceret!** Hvis det er forvirrende, spring det over. Vi dykker ned i fetch næste gang!

---

## Hvad har du lært i dag?

**Arrays** - lister med `[ ]`  
**Objects** - data med `{ key: value }`  
**For...of loops** - gå gennem et array  
**Template strings** - indsæt variabler i HTML  
**insertAdjacentHTML** - tilføj HTML til siden  
**Funktioner** - organisér din kode

---

## Forberedelse til næste gang

Til næste gang skal vi arbejde med **filtrering**!

Tænk over:

- Hvordan ville du vise kun film fra 2010?
- Hvordan ville du søge efter en titel?
- Hvordan ville du sortere efter rating?

Vi ses!

---

## Debugging Tips

**Hvis noget ikke virker:**

1. **Tjek stavning** - er det `title` eller `titel`?
2. **Tjek kommaer** - mangler der `,` mellem objects?
3. **Tjek quotes** - matcher `"` og `"` ?
4. **Log hver film** - `console.log(movie)` i loopet
5. **Tjek HTML** - er `#movie-list` der?

**Typiske fejl:**

```javascript
//  Forkert - mangler komma
let movies = [
  { title: "Inception" }
  { title: "Matrix" }  // Fejl her!
];

//  Rigtigt
let movies = [
  { title: "Inception" },
  { title: "Matrix" }
];
```
