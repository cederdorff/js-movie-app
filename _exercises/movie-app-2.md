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

> **Behold koden fra Opgave 1.**
>
> **Tilføj dette nedenunder dit `movies` array** i `app.js`:

```javascript
for (const movie of movies) {
  console.log("Film:", movie);
}
```

Åbn konsollen. Ser du alle film udskrevet én ad gangen?

Prøv at tilføje en film til arrayet. Kører loopet en gang mere automatisk?

### 2.2: Gør noget med hver film

Loopet kører koden indeni `{ }` én gang per film. Vi kan gøre hvad som helst med `movie` inde i loopet.

> **Slet ikke noget nyt i filen. Erstat kun loopet fra 2.1 med dette loop:**

```javascript
for (const movie of movies) {
  console.log("Nu viser vi:", movie);
}
```

Ændr teksten inde i loopet. Ser du ændringen for alle film på én gang?

### 2.3: Find containeren med querySelector

Før vi kan tilføje film til siden, skal JavaScript vide hvor de skal sættes ind. Vi bruger `querySelector` til at finde vores `#movie-list` section i HTML'en.

> **Behold loopet fra 2.2.**
>
> **Tilføj denne linje over loopet** i `app.js` (altså udenfor loopet):

```javascript
const movieList = document.querySelector("#movie-list");
console.log(movieList);
```

Ser du elementet i konsollen? Det er den section vi skal fylde med film-kort.

### 2.4: Byg HTML med en template string

I stedet for at skrive HTML direkte i filen, kan vi bygge det som en streng i JavaScript.

> **Template strings** bruger backticks (`` ` ``) i stedet for anførselstegn. Med `${}` kan du sætte en variabels værdi direkte ind i teksten.

> **Erstat loopet fra 2.2 med dette loop** (behold `movieList` fra 2.3):

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

> **Behold loopet fra 2.4, men erstat kun `console.log(html);` med linjen herunder:**

```javascript
movieList.insertAdjacentHTML("beforeend", html);
```

Dit loop skal nu se sådan ud:

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

**Formål:** Byg en komplet film-visning fra data til UI med en tydelig, rolig arbejdsgang.

> **Arbejdsregel i Opgave 4:**
> Start med en frisk `app.js` i 4.1. Derefter bygger du kun videre trin for trin. Slet kun noget, når et trin siger "erstat".

### 4.1: Start med data i en frisk app.js

> **Slet alt i `app.js`**, og indsæt dette som dit nye udgangspunkt:

```javascript
"use strict";
console.log("Movie App starter...");

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

> **Tjek:** Ser du alle film i konsollen?

### 4.2: Find stedet i HTML hvor film skal vises

> **Behold alt fra 4.1. Tilføj kun dette nederst i filen:**

```javascript
const movieList = document.querySelector("#movie-list");
console.log(movieList);
```

> **Tjek:** Ser du et DOM-element i konsollen?

### 4.3: Loop gennem data og byg HTML som tekst

> **Behold alt fra 4.1 og 4.2. Tilføj kun dette nederst i filen:**

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

> **Hvorfor dette trin?**
> Du tester først at loop + template string virker korrekt, før du prøver at vise noget på siden.
>
> **Tjek:**
>
> - Ser du én HTML-streng pr. film?
> - Matcher antal logs antallet i `movies`?

### 4.4: Vis film-kortene på siden

> **Behold samme loop fra 4.3. Erstat kun linjen `console.log(html);` med:**

```javascript
movieList.insertAdjacentHTML("beforeend", html);
```

> **Vigtigt:** Linjen skal stå **inde i loopet** (samme placering som `console.log(html);` stod før).

Nu skal film-kortene blive vist i browseren.

> **Hvad sker der her?**
>
> - `html` er en tekststreng med HTML for én film
> - `insertAdjacentHTML("beforeend", html)` indsætter den tekst som rigtig HTML i `#movie-list`
> - Fordi det ligger inde i loopet, sker det én gang per film i arrayet
>
> **Mini-refleksion:**
> Du har ikke ændret din HTML-fil manuelt med 4 kort. I stedet beskriver du én skabelon, og JavaScript gentager den for alle film.

> **Tjek:**
>
> - Ser du samme antal kort som film i `movies`?
> - Hvis du tilføjer én film i arrayet, kommer der så automatisk ét kort mere?

### 4.5: Tilpas og afprøv

> **Slet ikke noget. Byg videre på koden fra 4.4.**

- Tilføj en ny film i `movies` og tjek at den vises automatisk
- Ændr `year` eller `rating` for en film og tjek at visningen opdateres
- Tilføj en ny property (fx `genre`) og vis den i kortet

> **Refleksion:**
> Hvad er fordelen ved denne løsning i forhold til hardcoded HTML?

---

<details>
<summary><strong>Løsning: Opgave 4 (samlet app.js)</strong></summary>

```javascript
"use strict";

console.log("Movie App starter...");

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

const movieList = document.querySelector("#movie-list");

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

  movieList.insertAdjacentHTML("beforeend", html);
}
```

</details>

---

## Opgave 5: Gør det til funktioner

**Formål:** Lær at bruge funktioner til bedre struktur og genbrug.

> **Udgangspunkt:** Brug din færdige kode fra Opgave 4. Du starter ikke forfra.

### 5.1: Pak din eksisterende rendering ind i `showMovies()`

> **Behold koden fra Opgave 4.**
>
> **Tilføj denne funktion nederst i filen:**

```javascript
function showMovies() {
  movieList.innerHTML = "";

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

    movieList.insertAdjacentHTML("beforeend", html);
  }
}
```

> **Vigtigt:** Indholdet i `showMovies()` er den samme kode, du allerede skrev i Opgave 4, bare samlet i en funktion.
>
> **Erstat derefter hele dit nuværende for-loop med:**

```javascript
showMovies();
```

> **Tjek:** Virker siden stadig som før?

### 5.2: Del op i to funktioner (`showMovies` og `showMovie`)

> **Trin A:** Gå ind i `showMovies()` og erstat loopets indhold med:

```javascript
for (const movie of movies) {
  showMovie(movie);
}
```

> **Trin B:** Tilføj denne funktion lige under `showMovies()`:

```javascript
function showMovie(movie) {
  const html = /* html */ `
    <article class="movie-card">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
```

> **Forskel på funktionerne:**
>
> - `showMovies()` styrer hele listen (loop gennem alle film)
> - `showMovie(movie)` viser én film ad gangen

> **Tjek:** Virker appen stadig helt som i Opgave 4?

### 5.3: Test genbrug

> **Slet ikke noget. Tilføj dette nederst i filen:**

```javascript
movies.push({
  title: "Pulp Fiction",
  year: 1994,
  rating: 8.9,
});

showMovies();
```

> **Refleksion:**
>
> - Hvad bliver lettere med denne struktur?
> - Hvor vil søgning/filter passe bedst ind senere?

**Hvorfor funktioner?**

- Bedre struktur: én funktion, ét ansvar
- Genbrug: samme funktion kan kaldes igen
- Lettere vedligeholdelse og udvidelse

---

<details>
<summary><strong>Løsning: Opgave 5 (samlet app.js)</strong></summary>

```javascript
"use strict";

console.log("Movie App starter...");

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

const movieList = document.querySelector("#movie-list");

showMovies();

function showMovies() {
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const html = /* html */ `
    <article class="movie-card">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
```

</details>

---

## Opgave 6: Udfordringer (hvis du er færdig)

### 6.1: Tilføj billeder

> **Behold din kode fra Opgave 5.**
>
> **Trin A: Udvid alle film i `movies` med en `image` property.**

> **Tip til billed-URL:** Find et billede på nettet, højreklik på billedet og vælg fx **"Kopiér billedadresse"** / **"Copy image address"**. Indsæt den URL i `image`.

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

> **Trin B: Tilføj billed-styling i `app.css`.**

Tilføj også denne CSS i `app.css`:

```css
.movie-image {
  width: 100%;
  border-radius: 10px;
  display: block;
}
```

> **Trin C: Opdatér kun HTML-delen i `showMovie(movie)`**, så billedet vises over teksten:

```javascript
const html = /* html */ `
  <article class="movie-card">
    <img class="movie-image" src="${movie.image}" alt="${movie.title}">
    <div class="movie-info">
      <h3>${movie.title}</h3>
      <p>År: ${movie.year}</p>
      <p>Rating: ${movie.rating}</p>
    </div>
  </article>
`;
```

> **Tjek:**
>
> - Ser du billeder på alle film-kort?
> - Virker layout stadig (kort, spacing, tekst)?

> **Refleksion:**
>
> Hvorfor er denne måde smart?
>
> - **Objects:** Hver film samler data ét sted (`title`, `year`, `rating`, `image`)
> - **Lister (arrays):** Du kan have mange film uden at ændre strukturen i koden
> - **Funktioner:** `showMovie(movie)` bruger samme skabelon til alle film, så du undgår copy/paste
>
> Når du tilføjer en ny property (fx `image`), kan du vise den for alle film ved at ændre ét sted i funktionen.

### 6.2: Tilføj flere film

Tilføj **minimum 3 film-objects** til dit `movies` array. Find selv data online, inkl. billede-URL.

> **Tjek:**
>
> - Genindlæs siden og tjek at alle nye film vises
> - Tjek at hver ny film har både `title`, `year`, `rating` og `image`

### 6.3: Farve baseret på rating

> **Behold alt fra 6.1 og 6.2.**
>
> Målet er: film med rating over 8.5 skal fremhæves med en gul kant.

> **Trin A: Tilføj denne CSS i `app.css`:**

```css
.movie-card--highlight {
  border: 2px solid gold;
}
```

> **Trin B: Opdatér `showMovie(movie)` så den giver en ekstra klasse ved høj rating:**

```javascript
function showMovie(movie) {
  const highlightClass = movie.rating >= 8.5 ? "movie-card--highlight" : "";

  const html = /* html */ `
    <article class="movie-card ${highlightClass}">
      <img class="movie-image" src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
```

> **Bemærk:** Brug den `movieList` du allerede har defineret tidligere i din kode (som i Opgave 5), i stedet for at lave en ny `querySelector` inde i funktionen.

> **Hvad sker der her?**
>
> - `highlightClass` bliver enten `"movie-card--highlight"` eller tom tekst `""`
> - Klassen sættes direkte på `<article class="movie-card ${highlightClass}">`
> - CSS bestemmer så udseendet (ikke inline styling)

> **Tjek:**
>
> - Har film over 8.5 en gul kant?
> - Har film under 8.5 stadig standard-styling?
> - Hvad sker der hvis du ændrer en films rating og genindlæser?

---

<details>
<summary><strong>Løsning: Opgave 6 (samlet app.js + app.css tilføjelser)</strong></summary>

```javascript
"use strict";

console.log("Movie App starter...");

const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    image: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    image: "https://m.media-amazon.com/images/I/71n58Y6XHSL._AC_SL1024_.jpg",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    image: "https://m.media-amazon.com/images/I/71pV4vnt4BL._AC_SL1178_.jpg",
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    image: "https://m.media-amazon.com/images/I/81UTs3sMJNL._AC_SL1500_.jpg",
  },
  {
    title: "Whiplash",
    year: 2014,
    rating: 8.5,
    image: "https://m.media-amazon.com/images/I/91P9AMxGzCL._AC_SL1500_.jpg",
  },
  {
    title: "Arrival",
    year: 2016,
    rating: 7.9,
    image: "https://m.media-amazon.com/images/I/71w7Nf6T6BL._AC_SL1111_.jpg",
  },
];

const movieList = document.querySelector("#movie-list");

showMovies();

function showMovies() {
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const highlightClass = movie.rating >= 8.5 ? "movie-card--highlight" : "";

  const html = /* html */ `
    <article class="movie-card ${highlightClass}">
      <img class="movie-image" src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
```

```css
.movie-image {
  width: 100%;
  border-radius: 10px;
  display: block;
}

.movie-card--highlight {
  border: 2px solid gold;
}
```

</details>

---

## BONUS: Introduktion til Fetch

**Kun hvis du er færdig med alt ovenstående!**

I BONUS skal du **ikke skrive alt om**. Du skal kun lave disse ændringer i din nuværende løsning:

### BONUS 1: Erstat hardcoded `movies` med en tom liste

Find din nuværende `const movies = [...]` og erstat den med:

```javascript
let movies = [];
```

> Vi bruger `let` her, fordi variablen får ny værdi efter fetch.

### BONUS 2: Tilføj `start()` og hent data

Tilføj dette under din `movieList`-linje:

```javascript
start();

async function start() {
  console.log("Henter film data...");

  const response = await fetch("./data/movies.json");
  movies = await response.json();

  console.log("Hentet", movies.length, "film!");
  showMovies();
}
```

### BONUS 3: Brug eksisterende funktioner

Din eksisterende `showMovies()` og `showMovie(movie)` fra Opgave 6 kan blive som de er. De skal bare bruge data, der nu kommer fra fetch i stedet for hardcoded array.

> **Tjek:**
>
> - Ser du “Hentet X film!” i konsollen?
> - Vises filmene stadig i gridet?
> - Har filmene billeder, år og rating?

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
