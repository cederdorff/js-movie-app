# DAG 2 - Arrays, Loops & Film-lister

## Formål

I dag skal du lære at arbejde med **flere ting på én gang** - lister af data! Vi bygger videre på dit Movie App projekt fra DAG 1.

**Du lærer:**

- Hvad er et array?
- Hvordan looper man gennem et array?
- Hvordan viser man data på siden?
- Hvad er et objekt?

**Vi starter med data direkte i koden** — det gør det nemmere at fokusere på arrays og loops uden distraktioner.

**Progressionen:**

- **DAG 1:** Movie App setup + Klik-tæller (variabler, events)
- **DAG 2:** Arrays, loops, hardcoded movie data ← DU ER HER
- **DAG 3:** Fetch rigtig data + filter
- **DAG 4:** Søgning + dialog + deployment

---

## Opgave 0: Forbered dit Movie App projekt fra DAG 1

### 0.1: Tjek at du har DAG 1 projektet

Du skal have et `movie-app` projekt med:

- `index.html` - med Movie App header og klik-tæller
- `app.js` - med klik-tæller funktionalitet
- `app.css` - med Movie App styling

**Har du ikke projektet færdigt fra DAG 1?**

Gå tilbage til [DAG 1 opgaven](movie-app-1.md) og færdiggør Opgave 0 først.

**Commit dit udgangspunkt:**

Inden du begynder at ændre noget, lav en commit i GitHub Desktop:

1. Åbn GitHub Desktop
2. Skriv en besked, f.eks. `DAG 2 start - klik-tæller fra DAG 1`
3. Klik **Commit to main**
4. Klik **Fetch origin** (eller **Push origin**) for at synkronisere med GitHub

Nu har du et sikkert udgangspunkt du kan vende tilbage til!

### 0.2: Opdater HTML til DAG 2 struktur

Nu skal vi ændre vores `index.html` fra klik-tæller til en film-liste.

**Åbn `index.html` og lav disse to ændringer:**

1. **Opdater `<title>`** til `Movie App - DAG 2`

2. **Erstat `<p>` i `<header>`** med teksten `DAG 2: Arrays, Loops & Film-lister`

3. **Erstat alt indhold i `<main>`** med en tom section til film:

```html
<section id="movie-list" class="movie-grid" aria-label="Filmliste">
  <!-- Film vises her med JavaScript -->
</section>
```

Klik-tæller knappen og counter-boxen forsvinder — det er meningen!

### 0.3: Opdater CSS til film-liste styling

**Åbn `app.css` og lav disse ændringer:**

**1. Slet al counter-CSS** — find og slet blokkene for `.counter-container`, `.info`, `#counter`, `button` og `button:hover`. Vi bruger dem ikke mere.

**2. Erstat `main`-blokken** med en version der passer til et grid-layout:

```css
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
```

**3. Tilføj disse nye klasser** for film-grid og film-kort nederst i filen:

> **CSS Grid** lader dig arrangere elementer i rækker og kolonner. `grid-template-columns: 1fr 1fr` betyder to kolonner der deler pladsen ligeligt. Med `@media` skifter vi layout afhængigt af skærmbredde — det kalder man responsivt design.

```css
.movie-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem 0;
}

@media (min-width: 600px) {
  .movie-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 992px) {
  .movie-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (min-width: 1400px) {
  .movie-grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
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

### 0.4: Ryd op i app.js

**Åbn `app.js` og slet alt indhold** - vi starter med en frisk begyndelse til DAG 2:

```javascript
"use strict";

console.log("Movie App - DAG 2 starter...");
```

**Hvorfor sletter vi DAG 1 koden?**

I dag lærer vi arrays og loops - det er nyt koncept. Klik-tæller koden har du commitet i GitHub i 0.1, så du kan altid gå tilbage og finde den igen!

### 0.5: Test din Movie App struktur

1. **Gem alle filer** (Windows/PC: Ctrl+S, Mac: Cmd+S)
2. **Genindlæs Live Server** (eller start den hvis ikke åben)
3. **Tjek i browseren:**

- Ser du "Movie App" header?
- Står der "DAG 2: Arrays, Loops & Film-lister"?
- Siden er tom under headeren - det er ok! Vi tilføjer indhold nu.

### 0.6: Indsæt 3 hardcoded film-kort i HTML (bro-øvelse)

Før vi bruger JavaScript, laver vi **samme resultat manuelt i HTML**.

Det kalder man **hardcoded indhold**: du skriver hvert film-kort direkte i koden, ét ad gangen.

Det er vigtigt at prøve først, fordi du så kan mærke problemet med hænderne:

- Det virker fint med 3 film
- Det bliver hurtigt tungt med 10 eller 20 film
- Du skal kopiere den samme struktur igen og igen
- Små ændringer skal laves mange steder

Det er præcis derfor vi bagefter bruger **arrays + loops + JavaScript**: så computeren kan lave det gentagne arbejde for os.

**Indsæt midlertidigt dette i `index.html` inde i `#movie-list`:**

```html
<section id="movie-list" class="movie-grid" aria-label="Filmliste">
  <article class="movie-card">
    <div class="movie-info">
      <h3>Inception</h3>
      <p>År: 2010</p>
    </div>
  </article>
  <article class="movie-card">
    <div class="movie-info">
      <h3>The Matrix</h3>
      <p>År: 1999</p>
    </div>
  </article>
  <article class="movie-card">
    <div class="movie-info">
      <h3>Interstellar</h3>
      <p>År: 2014</p>
    </div>
  </article>
</section>
```

**Reflektér kort:**

- Hvordan ville det se ud med 20 film?
- Hvad hvis titlen eller årstal skal ændres mange steder?
- Hvor meget kopi-arbejde bliver der?

Når du har set det i browseren, går vi videre til Opgave 1 og 2, hvor vi genererer Movie Cards med JavaScript i stedet.

---

## Opgave 1: Hvad er et Array?

**Formål:** Forstå hvordan man gemmer flere ting i én variabel.

### 1.1: Opret dit første array

Et array er en liste af ting. I stedet for én variabel per film:

```javascript
const movie1 = "Inception";
const movie2 = "The Matrix";
const movie3 = "Interstellar";
```

...kan vi samle dem i ét array:

```javascript
const movies = ["Inception", "The Matrix", "Interstellar"];
```

**Skriv dette i `app.js`** (skriv det, copy/paste ikke):

```javascript
"use strict";

console.log("Movie App starter...");

const movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight"];

console.log("Alle film:", movies);
```

Åbn konsollen i browseren. Ser du alle 4 film?

### 1.2: Hent én bestemt film

Arrays er nummererede fra 0. Den første film er `movies[0]`, den anden er `movies[1]` osv.

**Tilføj disse linjer** til din `app.js`:

```javascript
console.log("Første film:", movies[0]);
console.log("Anden film:", movies[1]);
console.log("Sidste film:", movies[3]);
```

Hvad sker der hvis du prøver `movies[10]`? Prøv det!

### 1.3: Tæl dit array

`.length` fortæller hvor mange elementer arrayet indeholder.

**Tilføj:**

```javascript
console.log("Antal film:", movies.length);
```

Tilføj en ekstra film til arrayet ved at tilføje en ny streng med komma:

```javascript
const movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Pulp Fiction"];
```

Kør siden igen. Opdaterer `.length` sig automatisk?

---

## Opgave 2: Loop gennem et Array

**Formål:** Lær at gå gennem hvert element i en liste.

### 2.1: Dit første loop

I stedet for at skrive `console.log` tre gange:

```javascript
console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);
```

...kan et loop gøre det for os:

**Tilføj dette til din `app.js`** (brug det samme array fra Opgave 1):

```javascript
for (const movie of movies) {
  console.log("Film:", movie);
}
```

Åbn konsollen. Ser du alle film udskrevet én ad gangen?

Prøv at tilføje en film til arrayet. Kører loopet en gang mere automatisk?

### 2.2: Gør noget med hver film

Loopet kører koden indeni `{ }` én gang per film. Vi kan gøre hvad som helst med `movie` inde i loopet.

**Prøv at udskrive en sætning per film:**

```javascript
for (const movie of movies) {
  console.log("Nu viser vi:", movie);
}
```

Ændr teksten inde i loopet. Ser du ændringen for alle film på én gang?

### 2.3: Find containeren med querySelector

Før vi kan tilføje film til siden, skal JavaScript vide hvor de skal sættes ind. Vi bruger `querySelector` til at finde vores `#movie-list` section.

**Tilføj denne linje** til din `app.js` (udenfor loopet):

```javascript
const movieList = document.querySelector("#movie-list");
console.log(movieList);
```

Ser du elementet i konsollen? Det er den section vi skal fylde med film-kort.

### 2.4: Byg HTML med en template string

I stedet for at skrive HTML direkte i filen, kan vi bygge det som en streng i JavaScript.

> **Template strings** bruger backticks (`` ` ``) i stedet for anførselstegn. Med `${}` kan du sætte en variabels værdi direkte ind i teksten.

**Tilføj inde i loopet:**

```javascript
for (const movie of movies) {
  const html = /* html */ `
    <article class="movie-card">
      <div class="movie-info">
        <h3>${movie}</h3>
      </div>
    </article>
  `;

  console.log(html);
}
```

Ser du HTML-strengen i konsollen for hver film?

### 2.5: Tilføj HTML til siden

Nu bruger vi `insertAdjacentHTML` til faktisk at sætte HTML'en ind på siden.

**Tilføj den sidste linje inde i loopet:**

```javascript
for (const movie of movies) {
  const html = /* html */ `
    <article class="movie-card">
      <div class="movie-info">
        <h3>${movie}</h3>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
```

Du skulle nu se 4 film-kort på siden! Tilføj en film til arrayet og tjek at kortet dukker op automatisk.

> **Stop op og reflektér:** Sammenlign hvad du har nu med Opgave 0.6, hvor du hardcodede 3 film-kort i HTML.
>
> - I 0.6 skulle du copy/paste det samme HTML-kort for hver film
> - Nu skriver du arrayet én gang og siden opdaterer sig selv
> - Det er ligegyldigt om der er 4 film eller 400 — koden er den samme
>
> Det er præcis den forskel arrays + loops gør: **du beskriver hvad der skal ske med én film, og computeren gør det for alle**.

---

## Opgave 3: Hvad er et Object?

**Formål:** Forstå hvordan man kan gemme flere informationer om én ting – og hvordan man arbejder med arrays af objects.

### 3.1: Opret et object for én film

> **Slet alt i din app.js** (eller kommentér det ud), så du starter med en tom fil til dette trin.

Et object samler flere informationer om én ting:

```javascript
const movie = {
  title: "Inception",
  year: 2010,
  rating: 8.8,
};

console.log("Titel:", movie.title);
console.log("År:", movie.year);
console.log("Rating:", movie.rating);
```

> **Eksperiment:**
>
> - Prøv at ændre værdien af `movie.rating` og log igen.
> - Tilføj en ny property, fx `genre: "Sci-fi"`, og log den.

**Vigtigt:**

- Objects bruger `{ }` (arrays bruger `[ ]`)
- Data gemmes som `key: value` par
- Få adgang med `.` (dot notation)

### 3.2: Lav et array af objects

> **Slet eller kommentér koden fra 3.1** i din app.js, og indsæt dette array i stedet.

Nu kan vi samle flere film-objects i et array:

```javascript
const movies = [
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
];

console.log("Første film:", movies[0]);
console.log("Anden film:", movies[1]);
```

> **Eksperiment:**
>
> - Tilføj en tredje film til arrayet.
> - Prøv at logge `movies.length`.

### 3.3: Loop gennem arrayet af objects

> **Tilføj dette loop nedenunder arrayet fra 3.2** i din app.js.

Nu kan vi bruge et loop til at arbejde med alle film på én gang:

```javascript
for (const movie of movies) {
  console.log("Titel:", movie.title);
}
```

> **Eksperiment:**
>
> - Udskriv også år og rating for hver film.
> - Prøv at ændre en property på én af filmene og se effekten i loopet.

> **Refleksion:**
>
> Hvorfor er det smartere med objects end bare et array af strenge?
>
> - Du kan nu vise både titel, år og rating – ikke kun titlen
> - Du kan nemt udvide med flere informationer (fx genre, billede, instruktør)
> - Du kan bruge de samme loops og metoder, men få meget mere fleksibilitet
> - Hvis du kun havde et array af strenge, kunne du ikke vise år/rating uden at lave flere separate arrays eller "pakke" informationen sammen i én streng
>
> **Kort sagt:** Objects gør det muligt at arbejde med "rigtige data" – ikke bare tekst, men struktureret information, som computeren kan bruge på mange måder.

---

## Opgave 4: Vis Film-kort med Data

**Formål:** Kombinér alt du har lært – loop gennem array af objects og vis alle informationer på siden.

### 4.1: Start med en frisk app.js

> **Slet alt i din app.js** (eller kommentér det ud), så du starter forfra.

Indsæt dette i toppen af filen:

```javascript
"use strict";
console.log("Movie App starter...");
```

Indsæt derefter dette array af film-objects (formateret for læsbarhed):

```javascript
const movies = [
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

console.log("Alle film:", movies);
```

> **Tjek i konsollen:** Ser du alle film-objects?

### 4.2: Find containeren i DOM'en

Tilføj nedenunder:

```javascript
const movieList = document.querySelector("#movie-list");
console.log(movieList);
```

> **Tjek i konsollen:** Ser du DOM-elementet?

### 4.3: Loop og byg HTML for hver film

Tilføj nedenunder:

```javascript
for (const movie of movies) {
  const html = /* html */ `
    <article class="movie-card">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `;
  console.log(html);
}
```

> **Tjek i konsollen:** Ser du HTML-strengen for hver film?

### 4.4: Indsæt HTML på siden

Udskift `console.log(html);` med:

```javascript
movieList.insertAdjacentHTML("beforeend", html);
```

Nu vises alle film på siden!

### 4.5: Eksperimentér

- Tilføj en ny film til arrayet – dukker den op på siden?
- Prøv at ændre en property (fx rating eller år) – opdateres det på siden?
- Tilføj en ny property til et object og vis den i HTML'en

> **Refleksion:**
> Hvor meget lettere er det nu at vise mange informationer for mange film – sammenlignet med hardcoded HTML eller arrays af strenge?

---

## Opgave 5: Gør det til funktioner

**Formål:** Lær at organisere din kode i funktioner.

### 5.1: Opdel i funktioner

```javascript
"use strict";

console.log("Movie App starter...");

// Global data
const movies = [
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

  const movieList = document.querySelector("#movie-list");
  movieList.innerHTML = ""; // Ryd først

  for (const movie of movies) {
    showMovie(movie);
  }

  console.log("Alle film vist!");
}

// Funktion til at vise én film
function showMovie(movie) {
  const movieList = document.querySelector("#movie-list");

  const html = /* html */ `
    <article class="movie-card">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p> År: ${movie.year}</p>
        <p> Rating: ${movie.rating}</p>
      </div>
    </article>
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

## Opgave 6: Udfordringer (hvis du er færdig)

### 6.1: Tilføj flere film

Tilføj 3 flere film til dit array. Find selv data online!

### 6.2: Farve baseret på rating

Gør så film med rating over 8.5 får en guldfarve:

```javascript
function showMovie(movie) {
  const movieList = document.querySelector("#movie-list");

  // Vælg farve baseret på rating
  const color = movie.rating >= 8.5 ? "gold" : "white";

  const html = /* html */ `
    <article class="movie-card" style="border: 2px solid ${color}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p> År: ${movie.year}</p>
        <p> Rating: ${movie.rating}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
```

### 6.3: Tilføj billeder

Udvid dine movie objects med en `image` property:

```javascript
const movies = [
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
const html = /* html */ `
  <article class="movie-card">
    <img src="${movie.image}" alt="${movie.title}" style="width: 100%; border-radius: 10px;">
    <div class="movie-info">
      <h3>${movie.title}</h3>
      <p> År: ${movie.year}</p>
      <p> Rating: ${movie.rating}</p>
    </div>
  </article>
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
  const movieList = document.querySelector("#movie-list");
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const movieList = document.querySelector("#movie-list");

  const html = /* html */ `
    <article class="movie-card">
      <img src="${movie.image}" alt="${movie.title}" style="width: 100%; border-radius: 10px;">
      <div class="movie-info">
        <h3>${movie.title} (${movie.year})</h3>
        <p> ${movie.rating}</p>
      </div>
    </article>
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
5. **Tjek HTML** - er `#movie-list` og `class="movie-grid"` der?

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
