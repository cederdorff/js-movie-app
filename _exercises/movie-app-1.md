# RACE 1 - JavaScript + DOM-manipulation

## Opgaver til første undervisningsgang

> **Vigtig:** Åbn Developer Tools i din browser og hold øje med Console-fanen mens du arbejder. Det er her dine `console.log()` beskeder vises!.
>
> Du kan åbne Developer Tools med:

    - PC: `ctrl` + `shift` + `i`
    - Mac: `cmd` + `option` + `i`

---

## Opgave 0: Opret dit Movie App projekt 🎬

**Formål:** Vi skal oprette et nyt projekt der skal blive til vores Movie App og sikre at alt er sat korrekt op.

### Step 1: Opret et nyt projekt med GitHub Desktop

1. Følg denne guide: [Opret et nyt projekt med GitHub Desktop](https://race.notion.site/Opret-et-nyt-projekt-med-GitHub-Desktop-92de71d56c544e52aa87cd58a7b0a1ed)
2. **VIGTIGT:** Navngiv dit projekt `movie-app` når du opretter det
3. Efter guiden skulle du have:
   - En mappe der hedder `movie-app` åben i VS Code
   - Disse filer i mappen: `index.html`, `app.js` og `app.css`

### Step 2: Tilføj Movie App indhold til dine filer

Nu skal vi tilføje det grundlæggende indhold til vores nye filer:

**Opret `index.html`:**
Kopier dette ind i din tomme `index.html` fil:

Din `index.html` skulle nu se sådan ud:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Rasmus Cederdorff - RACE" />
    <meta name="description" content="Movie App" />
    <link rel="stylesheet" href="app.css" />
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon" />
    <title>Movie App</title>
  </head>

  <body>
    <h1>🎬 Movie App</h1>

    <script src="app.js"></script>
  </body>
</html>
```

**Opret `app.js` (hvis ikke du allerede har den):**
Kopier eller erstat din `app.js` med dette:

```javascript
"use strict"; // Enable strict mode for better error checking

// #0: Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// #1: Initialize the app
function initApp() {
  console.log("initApp: Movie App is running 🎉"); // Log to the console that the app is running
}
```

### Step 3: Test dit Movie App setup med Live Server

Nu skal vi teste at alt virker korrekt:

1. **Gem alle filer** (Ctrl+S eller Cmd+S)

2. **Start Live Server:**

   - Højreklik på din `index.html` fil i VS Code
   - Vælg "Open with Live Server"
   - Din browser skulle åbne automatisk med din Movie App

3. **Tjek at alt virker:**

   - Du skulle se "🎬 Movie App" som overskrift på siden
   - Åbn Developer Tools (F12 eller Ctrl+Shift+I)
   - Klik på "Console" fanen
   - Du skulle se: "initApp: Movie App is running 🎉"

4. **Hvis Live Server ikke virker:**
   - Tjek at du har Live Server extension installeret i VS Code
   - Alternativt: åbn `index.html` direkte i din browser

**🎯 Tillykke! Dit Movie App projekt er nu klar og virker. Lad os begynde at kode JavaScript!**

---

## Del 1: Grundlæggende JavaScript

### Opgave 1.1: Variabler og datatyper

**Formål:** Lær at gemme data i variabler og forstå forskellige datatyper.

#### Step 1: Din første JavaScript variabel

Lad os starte helt simpelt! Tilføj denne kode **inde i** `initApp` funktionen (lige under console.log linjen):

```javascript
// Vores første film-variabel
const title = "The Matrix";
console.log("Film titel:", title);
```

**💡 Forklaring:**

- `const` betyder konstant - værdien kan ikke ændres
- `title` er property-navnet (samme navn som i den endelige app)
- `"The Matrix"` er en **string** (tekst) - bemærk anførselstegnene
- `console.log()` viser værdien i browseren

#### ✅ Test det nu!

1. Gem `app.js` filen (Ctrl+S eller Cmd+S)
2. Refresh din browser
3. Åbn Developer Tools (F12) og vælg Console fanen
4. Du skulle nu se:
   - "Movie App kører! 🎬"
   - "Movie: The Matrix"

Hvis du ikke ser begge beskeder, tjek:

- At du har indsat koden det rigtige sted (inde i `initApp` funktionen)
- At du ikke har slettet eller ændret den oprindelige `console.log`
- At din syntax er korrekt (tjek for manglende semikoloner, kommaer etc.)

#### Step 2: Tilføj flere datatyper

Nu skal vi udforske flere properties fra vores movie objekt. **Tilføj** disse linjer **efter** din første `console.log` i `initApp` funktionen:

```javascript
// Numbers (tal)
const year = 1999; // Helt tal - ingen anførselstegn
const rating = 8.7; // Decimal tal - med punktum

// Strings (tekst)
const genre = "Action"; // Tekst - med anførselstegn
const director = "Christopher Nolan";

// Arrays (lister)
const actors = ["Keanu Reeves", "Laurence Fishburne"]; // Liste af skuespillere

// Mere tekst
const description = "A computer programmer discovers..."; // Film beskrivelse
const image = "matrix.jpg"; // Reference til film plakat

// Test alle vores variabler
console.log("År:", year);
console.log("Rating:", rating);
console.log("Genre:", genre);
console.log("Instruktør:", director);
console.log("Skuespillere:", actors);
console.log("Beskrivelse:", description);
console.log("Plakat:", image);
```

**💡 Forklaring af datatyper:**

- **String:** Tekst i anførselstegn (`"Action"`, `"Christopher Nolan"`)
- **Number:** Tal uden anførselstegn (`1999`, `8.7`)
- **Boolean:** Kun `true` eller `false` værdier
- Vi bruger engelske variabelnavne som i vores projekt

#### ✅ Test igen!

1. Gem filen igen (Ctrl+S eller Cmd+S)
2. Refresh browseren
3. I konsollen skulle du nu se:
   - "Movie App kører! 🎬"
   - "Movie title: The Matrix"
   - "Year: 1999"
   - "Rating: 8.7"
   - "Genre: Action"
   - "Director: Christopher Nolan"
   - "Is it a new movie?: false"
   - "Has won Oscar?: true"

Hvis du ikke ser alle linjer:

- Tjek at du har kopieret al koden korrekt
- Se efter manglende kommaer eller semikoloner
- Kontroller at alle console.log er inden i `initApp` funktionen

#### Step 3: Forskellen på const og let

**Først - lad os se hvad der sker når vi prøver at ændre en const:**

Tilføj denne linje efter dine console.log linjer:

```javascript
// Prøv at ændre en const (dette vil give en fejl!)
title = "Inception"; // Fejl! Kan ikke ændre en const
year = 2010; // Fejl! Kan ikke ændre en const
```

#### ✅ Test det!

1. Gem og refresh
2. Se fejlen i konsollen - du skulle få en fejl der siger: `TypeError: Assignment to constant variable`
   Dette er forventet! Det viser at vi ikke kan ændre en `const` variabel.
3. Udkommenter eller slet fejl-linjerne igen så vi kan fortsætte

**Nu prøver vi med `let` i stedet:**

```javascript
// let variabler KAN ændres
let userRating = 4.5; // Start rating
console.log("Start rating:", userRating);

userRating = 5.0; // Opdater rating - dette virker fint med let!
console.log("Ny rating:", userRating);

// Flere eksempler på let
let isFavorite = false;
console.log("Er det en favoritfilm?", isFavorite);

isFavorite = true; // Ændrer boolean værdi
console.log("Efter opdatering:", isFavorite);
```

#### ✅ Test det nu!

1. Gem filen (Ctrl+S eller Cmd+S)
2. Refresh browseren og tjek konsollen
3. Nu skulle du se to beskeder:
   - "Start rating: 4.5"
   - "Ny rating: 5.0"

Dette viser at vi **kan** ændre værdien af en `let` variabel!

**💡 Hvad har vi lært?**

- `const` variabler kan IKKE ændres efter de er oprettet
- `let` variabler KAN ændres når som helst
- Brug `const` når værdien skal forblive den samme
- Brug `let` når værdien skal kunne ændres

**Typiske anvendelser:**

- `const`: Film titler, årstal, instruktører (ændrer sig ikke)
- `let`: Ratings, favoritter, tællere (ændrer sig ofte)

#### ✅ Test det hele!

1. Gem filen og refresh browseren
2. I konsollen skulle du nu se:
   - De oprindelige værdier
   - Fejlen når vi prøver at ændre const
   - Start rating og ny rating
   - Boolean værdi før og efter ændring

#### 🎯 Små opgaver til dig:

1. Prøv at tilføje en ny `let` variabel kaldet `views` med værdien `0`
2. Øg værdien med 1 (`views = views + 1`)
3. Print den nye værdi med `console.log`
4. Prøv at ændre flere af dine `const` variabler og se fejlene

**💡 Tips:**

- Husk at fjerne eller udkommentere kode der giver fejl
- Eksperimenter med forskellige værdier
- Se hvordan konsollen hjælper dig med at finde fejl

#### Step 4: Arbejde med strings og tal

Lad os prøve at arbejde mere med vores variabler:

```javascript
// String sammensætning (concatenation)
const director = "Christopher Nolan";
const movie = "Inception";
const year = 2010;

// Den gamle måde (med +)
const oldWay = "Filmen " + movie + " fra " + year + " er instrueret af " + director;
console.log("Gamle måde:", oldWay);

// Den nye måde (med template literals ` `)
const newWay = `Filmen ${movie} fra ${year} er instrueret af ${director}`;
console.log("Nye måde:", newWay);

// Regn med tal
let rating = 8.5;
rating = rating + 0.3; // Læg 0.3 til
console.log("Ny rating:", rating);

let views = 0;
views = views + 1; // Tæl én visning
console.log("Antal visninger:", views);

// Genveje til matematik
views += 1; // Samme som: views = views + 1
rating += 0.1; // Samme som: rating = rating + 0.1
console.log("Opdaterede værdier:", views, rating);
```

**💡 Forklaring:**

- Template literals bruger ` ` (backticks) og ${} til at indsætte variabler
- Vi kan regne med tal-variabler
- `+=` er en genvej til at lægge til en variabel

#### ✅ Test det!

1. Gem og refresh
2. Se hvordan strings kan sammensættes på forskellige måder
3. Se hvordan tal kan opdateres med forskellige metoder

Tilføj denne kode:

```javascript
// let = can be changed later
let userRating = 4.5;
console.log("Start rating:", userRating);

// Change the value (this works!)
userRating = 5.0;
console.log("New rating:", userRating);
```

#### ✅ Test igen!

Refresh browseren - nu skulle du se både start og ny rating!

**💡 Hvad lærte vi?**

- `const` = konstant, kan IKKE ændres (brug til movie title, year osv.)
- `let` = variabel, KAN ændres (brug til ratings, counters osv.)
- Fejl er normale og hjælper os med at lære! 🎯

#### Step 4a: Det "gamle" problem (string sammensætning)

Først - lad os prøve den gammeldags måde at sammensætte tekst på:

```javascript
// Old way (works, but messy)
const oldMessage = "The movie " + movie + " is from " + year;
console.log("Old way:", oldMessage);
```

#### ✅ Test det!

Refresh og se beskeden - den virker, men koden er rodet med mange `+` og mellemrum!

#### Step 4b: Template Literals - den smarte løsning!

Nu prøver vi den smarte måde:

```javascript
// Smart way with template literals
const smartMessage = `The movie ${movie} is from ${year}`;
console.log("Smart way:", smartMessage);
```

**💡 Hvad er anderledes?**

- Brug **backticks** `` ` `` - se hvordan du skriver dem nedenfor!
- IKKE almindelige anførselstegn `"` eller `'`
- `${variabel}` indsætter variabelens værdi direkte

**🔤 Hvordan skriver jeg backticks?**

- **PC:** Tast ved siden af 1-tallet (øverst til venstre) + mellemrum
- **Mac:** Alt + ` (samme tast som på PC) + mellemrum
- **Ser sådan ud:** `` ` `` (skråstreg den anden vej end normale anførselstegn)
- Ingen forvirrende `+` tegn!

#### ✅ Test og sammenlign!

Refresh og se begge beskeder - samme resultat, men smartere kode!

#### Step 4c: Flere variabler i samme besked

Lad os tilføje flere variabler i én besked:

```javascript
// Multiple variables in same template literal
const complexMessage = `Movie: ${title}, Year: ${year}, Rating: ${userRating}, Genre: ${genre}`;
console.log("Complete info:", complexMessage);
```

**💡 Forklaring:**

- Du kan bruge så mange `${variabel}` som du vil
- Læsbart og let at forstå
- Forestil dig at skrive det med `+` - meget rodet!

#### ✅ Test det!

Se den flotte, komplette besked!

#### Step 4d: Template literals med linjeskift

Template literals kan også håndtere flere linjer:

```javascript
// Multiple lines in same message (like your project's movie details)
const multiLineMessage = `🎬 MOVIE INFO:
Title: ${title}
Year: ${year}
Rating: ${userRating}/10
Genre: ${genre}`;
console.log(multiLineMessage);
```

**💡 Forklaring:**

- Template literals respekterer linjeskift
- Dette minder om film detaljer i dit projekt!
- Perfekt til at lave pæne, formaterede beskeder
- Prøv at gøre det samme med `+` - umuligt!

#### ✅ Test det!

Se den pænt formaterede besked i konsollen!

#### ✅ Final test!

1. Gem din `app.js` fil (Ctrl+S)
2. Refresh din browser og tjek konsollen
3. **Prøv dette:** Ændr `title` til en anden film og se forskellen!
4. **Prøv dette:** Ændr `userRating` til `9.5` og se resultatet!
5. **Prøv dette:** Ændr `year` til `2024` og se output!
6. **Eksperimentér:** Prøv forskellige værdier og se hvordan template literals virker!

**🎯 Læringsmål:** Du kan nu oprette variabler og forstår forskellen på string, number og boolean.

---

### Opgave 1.2: Arrays (lister af data)

**⚠️ Inden vi starter med arrays:**

1. Åbn din `app.js` fil
2. Slet alt indhold fra den tidligere opgave
3. Behold kun denne grundlæggende struktur:

```javascript
"use strict";

window.addEventListener("load", initApp);

function initApp() {
  console.log("Movie App kører! 🎬");
  // Her skal vi tilføje den nye kode med arrays
}
```

**Formål:** Lær at gemme og arbejde med lister af data.

#### Step 1: Introduktion til arrays

Hvis vi vil gemme flere filmtitler, kunne vi gøre det sådan her:

```javascript
// Separate variabler (ikke så smart!)
const movie1 = "The Matrix";
const movie2 = "Inception";
const movie3 = "Interstellar";
console.log("Film 1:", movie1);
console.log("Film 2:", movie2);
console.log("Film 3:", movie3);
```

**💡 Problemet:**

- For mange variabler
- Svært at holde styr på
- Besværligt at arbejde med
- Umuligt med 100 film!

**Løsningen - Arrays:**

```javascript
// En array (liste) af film - MEGET bedre!
const titles = ["The Matrix", "Inception", "Interstellar"];
console.log("Alle film:", titles);
```

#### ✅ Test det!

1. Erstat den første kode med array-versionen
2. Gem og refresh
3. Se hvordan alle film nu er samlet i én liste

#### Step 2: Arbejde med arrays

Lad os lære at arbejde med vores film-array:

```javascript
// Opret array af filmtitler
const titles = ["The Matrix", "Inception", "Interstellar"];

// Få fat i enkelte film (VIGTIGT: vi starter fra 0!)
console.log("Første film:", titles[0]); // The Matrix
console.log("Anden film:", titles[1]); // Inception
console.log("Tredje film:", titles[2]); // Interstellar

// Find ud af hvor mange film vi har
console.log("Antal film:", titles.length); // 3
```

**💡 Vigtigt at huske:**

- Arrays bruger `[]` firkantede parenteser
- Det første element har index `[0]`
- Det andet element har index `[1]`
- `.length` fortæller os hvor mange elementer der er

#### ✅ Test det!

1. Gem og refresh
2. Se i konsollen:
   - Listen af alle film
   - Hver enkelt film
   - Det totale antal film
3. Prøv at ændre rækkefølgen af film i array'et

#### Step 3: Ændre arrays

Vi kan tilføje og fjerne elementer fra vores array:

```javascript
// Start med nogle film
const titles = ["The Matrix", "Inception", "Interstellar"];
console.log("Start:", titles);

// Tilføj en film til slutningen
titles.push("The Dark Knight");
console.log("Efter tilføjelse:", titles);

// Tilføj flere film på én gang
titles.push("Pulp Fiction", "Goodfellas");
console.log("Efter flere tilføjelser:", titles);

// Fjern den sidste film
const removedMovie = titles.pop();
console.log("Fjernet film:", removedMovie);
console.log("Efter fjernelse:", titles);
```

**💡 Array metoder:**

- `.push()` - tilføj til slutningen
- `.pop()` - fjern fra slutningen
- `.push()` kan tage flere argumenter
- `.pop()` returnerer det fjernede element

#### ✅ Test det!

1. Gem og refresh
2. Se hvordan din liste ændrer sig for hver handling
3. Prøv selv at:
   - Tilføj dine egne favorit film
   - Fjern nogle film
   - Print listen efter hver ændring

#### ✅ Test og se forskellen!

Se hvordan arrays kan indeholde forskellige typer data!

#### Step 4: Forskellige typer af arrays

Arrays kan indeholde forskellige typer af data:

```javascript
// Array med tekst (strings)
const titles = ["The Matrix", "Inception", "Interstellar"];

// Array med tal (numbers)
const years = [1999, 2010, 2014];
const ratings = [8.7, 8.8, 8.6];

// Array med true/false (booleans)
const isFavorite = [true, false, true];

// Array med blandet indhold
const movieInfo = ["The Matrix", 1999, 8.7, true];

// Vis alle arrays
console.log("Titler:", titles);
console.log("Årstal:", years);
console.log("Ratings:", ratings);
console.log("Favoritter:", isFavorite);
console.log("Blandet info:", movieInfo);

// Beregn gennemsnit af ratings
const sum = ratings[0] + ratings[1] + ratings[2];
const average = sum / ratings.length;
console.log("Gennemsnitlig rating:", average);
```

**💡 Husk:**

- Arrays kan indeholde alle datatyper
- Du kan mixe forskellige typer i samme array
- Du kan regne med tal i arrays
- `.length` virker på alle arrays

#### 🎯 Opgaver til dig:

1. Lav en array med dine 3 yndlingsfilm
2. Lav en array med deres udgivelsesår
3. Beregn gennemsnitsåret
4. Print både film og beregningen

#### ✅ Test det!

Se hvordan vi får fat i hver enkelt film!

**💡 Vigtigt at huske:**

- Arrays starter fra **0** (ikke 1!)
- Første element er `[0]`, anden er `[1]`, osv.
- `titles[0]` = "The Matrix"
- `titles[1]` = "Inception"

#### Step 5: Hvor mange elementer har vi?

```javascript
// Find længden af listen
console.log("Antal film i listen:", titles.length);
console.log("Sidste film (smart måde):", titles[titles.length - 1]);
```

#### ✅ Test det!

Se hvor mange film vi har!

**💡 Forklaring:**

- `.length` fortæller hvor mange elementer der er
- Sidste element er altid `[length - 1]` (fordi vi starter fra 0)

#### Step 6: Tilføj nye film til listen

```javascript
// Tilføj film til slutningen
titles.push("The Dark Knight");
console.log("Efter tilføjelse:", titles);
console.log("Nu har vi", titles.length, "film!");

// Tilføj flere på én gang
titles.push("Pulp Fiction", "Goodfellas");
console.log("Efter flere tilføjelser:", titles);
```

#### ✅ Test det!

Se hvordan listen vokser!

**💡 Forklaring:**

- `.push()` tilføjer elementer til slutningen
- Du kan tilføje et eller flere elementer ad gangen
- Listen opdateres automatisk!

#### Step 7: Fjern film fra listen

Nogle gange vil vi fjerne film fra listen:

```javascript
// Fjern den sidste film
const removedMovie = titles.pop();
console.log("Removed movie:", removedMovie);
console.log("List now:", titles);

// Fjern den første film
const firstRemoved = titles.shift();
console.log("First removed:", firstRemoved);
console.log("List now:", titles);
```

#### ✅ Test det!

Se hvordan film forsvinder fra listen!

**💡 Forklaring:**

- `.pop()` fjerner sidste element og returnerer det
- `.shift()` fjerner første element og returnerer det
- Begge metoder ændrer den originale liste!

#### ✅ Opsummering af arrays

Du har nu lært:

- At oprette arrays med `[]`
- At få fat i elementer med `[index]`
- At tilføje elementer med `.push()`
- At arrays kan indeholde forskellige datatyper
- At arbejde med `.length`

---

### Opgave 1.3: Objekter (struktureret data)

**⚠️ Inden vi starter med objekter:**

1. Åbn din `app.js` fil
2. Slet **al** den tidligere kode med arrays
3. Behold kun den grundlæggende struktur:

```javascript
"use strict";

window.addEventListener("load", initApp);

function initApp() {
  console.log("Movie App kører! 🎬");
  // Her skal vi tilføje den nye kode med objekter
}
```

**Hvorfor objekter?**
Indtil nu har vi brugt separate arrays til forskellige typer af data:

**Formål:** Lær at samle relateret data i objekter - den datastruktur vi skal bruge i vores Movie App!

#### Step 1: Problemet med separate arrays

Se hvordan vi indtil nu skulle bruge separate arrays for hver type information:

```javascript
// Separate arrays for hver type information
const titles = ["The Matrix", "Inception", "Interstellar"];
const years = [1999, 2010, 2014];
const directors = ["Wachowski Sisters", "Christopher Nolan", "Christopher Nolan"];
const ratings = [8.7, 8.8, 8.6];

// For at vise info om én film skal vi huske alle indexes
console.log("Film info:");
console.log("Titel:", titles[0]);
console.log("År:", years[0]);
console.log("Instruktør:", directors[0]);
console.log("Rating:", ratings[0]);

// Hvad hvis vi blander indexes ved et uheld?
console.log("Forkert match:");
console.log("Titel:", titles[0]); // The Matrix
console.log("År:", years[1]); // 2010 (forkert år!)
console.log("Instruktør:", directors[2]); // Christopher Nolan (forkert instruktør!)
```

#### Step 2: Dit første objekt

Lad os starte med et helt simpelt movie objekt:

```javascript
// Et simpelt movie objekt med to properties
const movie = {
  title: "The Matrix",
  year: 1999
};

// Sådan læser vi værdier fra objektet
console.log("Film titel:", movie.title);
console.log("Udgivelsesår:", movie.year);
```

**💡 Objekt grundregler:**

- Objekter bruger `{}` krølparenteser
- Properties har et navn og en værdi
- Navn og værdi adskilles med `:`
- Properties adskilles med `,`
- Vi får fat i værdier med `.` (fx `movie.title`)

#### Step 3: Tilføj flere properties

Nu udvider vi vores objekt med flere properties:

```javascript
// Et movie objekt med flere properties
const movie = {
  title: "The Matrix",
  year: 1999,
  director: "Wachowski Sisters",
  rating: 8.7
};

// Vi kan stadig få fat i værdierne på samme måde
console.log("Film info:");
console.log("Titel:", movie.title);
console.log("År:", movie.year);
console.log("Instruktør:", movie.director);
console.log("Rating:", movie.rating);
```

**💡 Fordele ved objekter:**

- Al information om én film er samlet ét sted
- Vi kan ikke blande data ved et uheld
- Let at tilgå med `.` notation (fx `movie.title`)
- Koden er mere læsbar og logisk

#### ✅ Test det!

1. Slet din tidligere kode med arrays
2. Indsæt den nye kode med movie objektet
3. Gem og refresh
4. Se hvordan al information om filmen nu er pænt organiseret

#### Step 4: Ændre værdier i objektet

Vi kan også ændre værdier i vores objekt:

```javascript
// Start med vores basis movie objekt
const movie = {
  title: "The Matrix",
  year: 1999,
  director: "Wachowski Sisters",
  rating: 8.7,
  inTheaters: true
};

// Print original værdi
console.log("Original rating:", movie.rating);

// Opdater nogle værdier
movie.rating = 9.0; // Ændrer rating
movie.inTheaters = false; // Ændrer boolean værdi

// Print opdaterede værdier
console.log("Ny rating:", movie.rating);
console.log("Stadig i biografen?", movie.inTheaters);
```

#### Step 5: Arrays i objekter

Nu er vi klar til at tilføje arrays i vores objekt:

```javascript
// Et movie objekt med arrays
const movie = {
  title: "The Matrix",
  year: 1999,
  director: "Wachowski Sisters",
  rating: 8.7,
  genre: ["Action", "Sci-Fi"], // Array af genres (ændret fra 'genres' til 'genre' for at matche endelig løsning)
  actors: ["Keanu Reeves", "Carrie-Anne Moss"] // Array af skuespillere (ændret fra 'stars' til 'actors' for at matche endelig løsning)
};

// Læs værdier fra arrays i objektet
console.log("Første genre:", movie.genre[0]);
console.log("Hovedrolle:", movie.actors[0]);

// Tilføj nye værdier til arrays
movie.genre.push("Cyberpunk");
movie.actors.push("Laurence Fishburne");

// Se de opdaterede arrays
console.log("Alle genrer:", movie.genre);
console.log("Alle skuespillere:", movie.actors);
```

**💡 Husk:**

- Objekter bruger `{}` krølparenteser
- Properties adskilles med komma
- Vi kan have arrays inde i objekter
- Vi kan ændre værdier med `=`
- Vi kan tilføje til arrays i objekter med `.push()`
  const movieTitles = ["The Matrix", "Inception", "Interstellar"];

Men hvad hvis vi vil gemme mere information om hver film?

```javascript
// This becomes messy quickly... 😰
const movieTitles = ["The Matrix", "Inception", "Interstellar"];
const movieYears = [1999, 2010];
const movieRatings = [8.7, 8.8];
const movieGenres = [
  ["Action", "Sci-Fi"],
  ["Action", "Thriller"]
];
// How do we keep track that index 0 belongs together?
```

**💡 Problemet:**

- Svært at holde relateret data sammen
- Hvis vi flytter rundt på én liste, bliver de andre forkerte
- Vi har brug for en bedre måde!

#### Step 2: Objekter - saml relateret data!

Her kommer løsningen - **objekter** (præcis som i din movies.json fil):

```javascript
// An object collects ALL data about one movie! 🎉
const movie = {
  title: "The Matrix",
  year: 1999,
  rating: 8.7
};

console.log("Complete movie object:", movie);
```

#### ✅ Test det!

Refresh og se objektet i konsollen!

**💡 Forklaring:**

- `{}` krøllede parenteser laver et objekt
- `key: value` gemmer data sammen (engelsk notation som i dit projekt)
- Alt om filmen er nu samlet ét sted!

#### Step 3: Tilgå data med dot notation

Nu lærer vi at hente data ud af objektet:

```javascript
// Get specific properties with dot notation
console.log("Movie title:", movie.title);
console.log("Release year:", movie.year);
console.log("Rating:", movie.rating);
```

#### ✅ Test det!

Se hvordan vi får fat i hver del af data!

**💡 Forklaring:**

- `movie.title` henter titel-delen
- `objectName.key` er formatet
- Super nemt at læse og forstå!

#### Step 4: Real movie data struktur (som i dit projekt)

Lad os lave et objekt der matcher din movies.json struktur:

```javascript
// Real movie object structure (exactly like your movies.json!)
const movie = {
  id: 2,
  title: "The Matrix",
  year: 1999,
  genre: ["Action", "Sci-Fi"],
  director: "Lana Wachowski, Lilly Wachowski",
  rating: 8.7,
  image: "matrix.jpg",
  actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
  description: "A computer programmer discovers that reality is not what it seems..."
};

console.log("Movie ID:", movie.id);
console.log("Title:", movie.title);
console.log("First genre:", movie.genre[0]);
console.log("Director:", movie.director);
console.log("First actor:", movie.actors[0]);
console.log("Image:", movie.image);
console.log("Description:", movie.description);
```

#### ✅ Test det!

Se hvordan objekter kan rumme alt muligt data - præcis som i dit projekt!

**💡 Forklaring:**

- Objekter kan indeholde alle datatyper vi kender
- `realMovie.genre[0]` kombinerer objekt- og array-adgang
- Super fleksibelt!

#### Step 5: Tilføj nye egenskaber efter oprettelse

```javascript
// Vi kan tilføje nyt data til eksisterende objekter
movie.actors.push("Hugo Weaving");
movie.genre.push("Drama");

console.log("Opdaterede skuespillere:", movie.actors);
console.log("Opdaterede genrer:", movie.genre);
```

#### ✅ Test det!

Se hvordan vi kan udvide objektet!

**💡 Forklaring:**

- Bare brug `objekt.nyNøgle = værdi`
- Objektet opdateres med det samme
- Ingen grænse for hvor meget data vi kan gemme!

#### Step 6: Ændr eksisterende data

```javascript
// Vi kan også ændre data der allerede findes
console.log("Gammel rating:", movie.rating);

movie.rating = 9.0; // Opgraderet!
movie.description = "En banebrydende sci-fi film der udfordrer vores opfattelse af virkeligheden..."; // Opdateret beskrivelse

console.log("Ny rating:", movie.rating);
console.log("Ny beskrivelse:", movie.description);
```

#### ✅ Test det!

Se hvordan data opdateres!

#### Step 7: Brug template literals med objekter

Nu kombinerer vi det vi har lært om template literals og objekter:

```javascript
// Lav en flot beskrivelse med objektdata
const movieDescription = `
🎬 ${movie.title} (${movie.year})
⭐ Rating: ${movie.rating}/10  
🎭 Genre: ${movie.genre.join(", ")}
🎥 Director: ${movie.director}
👥 Actors: ${movie.actors.join(", ")}
📝 ${movie.description}
`;

console.log("Movie info:");
console.log(movieDescription);
```

#### ✅ Test det!

Se den flotte formaterede movie info!

**💡 Forklaring:**

- `${realMovie.title}` henter title fra objektet
- `${realMovie.genre[0]}` henter første genre fra array
- `${realMovie.actors[0]}` henter første skuespiller fra array
- Template literals kombinerer tekst og objektdata perfekt!
- Dette ligner hvordan rigtige movie apps viser information!

#### ✅ Endelig test af alt!

Gem din `app.js` fil og refresh browseren. I konsollen skulle du se:

1. Det simple filmobjekt
2. Dele af objektet hentet ud
3. Det udvidede objekt med arrays
4. Nye egenskaber tilføjet
5. Ændret data
6. Den flotte formaterede filmbeskrivelse

**🎯 Læringsmål:**
Du kan nu:

- Oprette objekter med `{}`
- Gemme forskellige datatyper som egenskaber
- Hente data med `objekt.nøgle`
- Tilføje nye egenskaber
- Ændre eksisterende data
- Kombinere objekter og arrays
- Bruge objektdata i template literals

---

### Opgave 1.4: Arrays af objekter (som i dit movie app)

**Formål:** Lær at kombinere arrays og objekter for at bygge en rigtig filmdatabase - præcis som i dit endelige projekt!

#### Step 1: Fra ét objekt til mange

Vi har lært at arbejde med ét movie objekt:

```javascript
// Ét enkelt movie objekt
const movie = {
  title: "The Matrix",
  year: 1999,
  rating: 8.7
};

console.log("Én film:", movie);
```

Men i en rigtig movie app har vi brug for at gemme MANGE film. Vi kunne prøve med flere variabler:

```javascript
// Dette bliver hurtigt uoverskueligt...
const movie1 = {
  title: "The Matrix",
  year: 1999,
  rating: 8.7
};

const movie2 = {
  title: "Inception",
  year: 2010,
  rating: 8.8
};

console.log("Film 1:", movie1);
console.log("Film 2:", movie2);
```

**💡 Problemet med separate variabler:**

- Svært at holde styr på mange variabler
- Umuligt at loope gennem filmene
- Ikke en god løsning for en database
- Ikke sådan professionelle apps gør!

#### Step 2: Arrays af objekter - den smarte løsning!

Lad os starte med en simpel array af objekter:

```javascript
// En array der indeholder movie objekter
const allMovies = [
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7
  },
  {
    title: "Inception",
    year: 2010,
    rating: 8.8
  }
];

// Se vores første movie database!
console.log("Alle film:", allMovies);
console.log("Antal film:", allMovies.length);
```

**💡 Fordele ved arrays af objekter:**

- Én variabel `allMovies` indeholder alle film
- Let at tilføje nye film
- Let at loope gennem alle film
- Samme struktur som rigtige databaser
- Præcis sådan movie apps gemmer data!

#### ✅ Test det!

Refresh og se den strukturerede database!

**💡 Forklaring:**

- `[]` array indeholder flere `{}` objekter
- Hver film har sin egen strukturerede data
- Dette er præcis strukturen fra `data/movies.json`!

#### Step 3: Tilgå specifikke film

Nu lærer vi at hente data fra denne struktur:

```javascript
// Hent den første film (index 0)
const firstMovie = allMovies[0];
console.log("Første film objekt:", firstMovie);
console.log("First movie title:", firstMovie.title);

// Eller gør det direkte i ét trin
console.log("Second movie year:", allMovies[1].year);
console.log("Second movie rating:", allMovies[1].rating);
```

#### ✅ Test det!

Se hvordan vi kombinerer array[index] og objekt.nøgle!

**💡 Forklaring:**

- `allMovies[0]` henter første movie object
- `allMovies[0].title` henter titlen fra første movie
- `allMovies[1].year` henter året fra anden movie direkte

#### Step 4: Byg den rigtige database struktur

Nu skal vi gradvist bygge den struktur vi skal bruge i vores endelige projekt. Lad os starte med at tilføje ID'er:

```javascript
// Start med basis struktur + id
const allMovies = [
  {
    id: 1,
    title: "The Matrix",
    year: 1999,
    rating: 8.7
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    rating: 8.8
  }
];

// Test vores nye id'er
console.log("Film #1:", allMovies[0].id, "-", allMovies[0].title);
console.log("Film #2:", allMovies[1].id, "-", allMovies[1].title);
```

**💡 Hvorfor ID'er?**

- Hvert objekt får et unikt nummer
- Gør det let at identificere præcis én film
- Standard i databaser
- Bruges når vi skal opdatere/slette film

#### Step 5: Tilføj arrays i objekterne

Nu gør vi strukturen mere avanceret ved at tilføje arrays:

```javascript
// Tilføj genre og actors arrays
const allMovies = [
  {
    id: 1,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: ["Action", "Sci-Fi"],
    actors: ["Keanu Reeves", "Laurence Fishburne"]
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: ["Action", "Sci-Fi", "Thriller"],
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"]
  }
];

// Test arrays i objekterne
console.log("Matrix genrer:", allMovies[0].genre.join(", "));
console.log("Inception skuespillere:", allMovies[1].actors.join(", "));
```

**💡 Arrays i objekter:**

- Hver film har en `genre` array med alle filmens genrer
- Hver film har en `actors` array med alle filmens skuespillere
- `.join(", ")` laver array til pæn tekst med komma-separator

#### ✅ Test det!

Se den komplekse database struktur!

**💡 Forklaring:**

- Hver film har nu id, arrays af genrer og director
- Dette matcher strukturen i den rigtige filmapp!

#### Step 5: Tilgå komplekse data

Nu bliver det interessant - arrays inde i objekter inde i arrays:

```javascript
// Hent komplekse data
console.log("Matrix første genre:", allMovies[0].genre[0]);
console.log("Inception instruktør:", allMovies[1].director);
console.log("Matrix beskrivelse:", allMovies[0].description);

// Hent alle data for første film
const firstMovie = allMovies[0];
console.log(`
Film: ${firstMovie.title}
År: ${firstMovie.year}
Genrer: ${firstMovie.genre.join(", ")}
Skuespillere: ${firstMovie.actors.join(", ")}
`);
```

#### ✅ Test det!

Se hvordan vi navigerer gennem komplekse strukturer!

**💡 Forklaring:**

- `[0].genre[0]` = første film, første genre
- `[1].director` = anden film, director
- Vi kombinerer array-, objekt- og array-adgang!

#### Step 6: Den endelige database struktur

Nu har vi alle elementer på plads til vores endelige database struktur:

```javascript
// Den komplette movie database struktur
const allMovies = [
  {
    id: 1,
    title: "The Matrix",
    year: 1999,
    genre: ["Action", "Sci-Fi"],
    director: "Lana Wachowski, Lilly Wachowski",
    rating: 8.7,
    image: "matrix.jpg",
    actors: ["Keanu Reeves", "Laurence Fishburne"],
    description: "A computer programmer discovers a mysterious world..."
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    genre: ["Action", "Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    rating: 8.8,
    image: "inception.jpg",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    description: "A thief who steals corporate secrets through..."
  }
];

// Lav en pæn udskrift af første film
const movie = allMovies[0];
const movieInfo = `
🎬 ${movie.title} (${movie.year})
🎭 Genre: ${movie.genre.join(", ")}
👤 Instruktør: ${movie.director}
⭐ Rating: ${movie.rating}
👥 Skuespillere: ${movie.actors.join(", ")}
📝 ${movie.description}
`;

console.log(movieInfo);
```

**💡 Den endelige struktur indeholder:**

- Unik `id` til hver film
- Basis info: `title`, `year`, `rating`
- Arrays: `genre`, `actors`
- Tekst: `director`, `description`
- Billede reference: `image`

#### Step 7: Arbejde med hele databasen

Nu lærer vi at arbejde med hele databasen:

```javascript
// Loop gennem alle film
for (const movie of allMovies) {
  console.log(`
🎬 ${movie.title} (${movie.year})
⭐ Rating: ${movie.rating}
🎭 Genrer: ${movie.genre.join(", ")}
👥 Skuespillere: ${movie.actors.join(", ")}
📝 ${movie.description}
---`);
```

#### ✅ Test det!

Se alle film formateret pænt!

**💡 Forklaring:**

- `for...of` går gennem hvert filmobjekt
- `movie` variablen er et helt objekt i hver iteration
- Vi kan bruge alle objekt-egenskaberne!

#### ✅ Test det hele!

Gem din `app.js` fil og refresh browseren. I konsollen skulle du se:

1. Simple movie database først
2. Kompleks database med alle detaljer
3. Specifikke data hentet ud fra objekter
4. Loop gennem alle film med formateret output

**🎯 Læringsmål - Arrays med objekter:**
Du kan nu:

- ✅ Kombinere arrays og objekter
- ✅ Navigere gennem komplekse datastrukturer
- ✅ Tilgå data med `array[index].property`
- ✅ Loop gennem arrays af objekter
- ✅ Forstå hvordan rigtige filmapp-data er struktureret!

**💪 Det var det! Nu kender du grundlaget for JavaScript data!**

---

## Del 2: Funktioner

### Opgave 2.1: Introduktion til funktioner

**⚠️ Inden vi starter med funktioner:**

1. Åbn din `app.js` fil
2. Slet den tidligere kode med arrays og objekter
3. Behold kun den grundlæggende struktur:

```javascript
"use strict";

window.addEventListener("load", initApp);

function initApp() {
  console.log("Movie App kører! 🎬");
  // Her skal vi tilføje den nye kode med funktioner
}
```

**Formål:** Lær at skrive genbrugelig kode med funktioner - den grundsten der gør det muligt at bygge større apps!

#### Step 1: Din første funktion

Lad os starte med en helt simpel funktion:

```javascript
// Definér en funktion
function sayHello() {
  console.log("Velkommen til Movie App! 🎬");
}

// Kald (brug) funktionen
sayHello();
sayHello(); // Vi kan kalde den flere gange!
```

**💡 Sådan virker funktioner:**

- `function` fortæller JavaScript at vi laver en funktion
- `sayHello` er funktionens navn (brug beskrivende navne!)
- `()` parenteser er hvor vi senere kan give input
- `{}` krølparenteser indeholder koden der skal køres
- Vi kalder funktionen ved at skrive dens navn + `()`

#### Step 2: Funktioner med input (parametre)

Hvad hvis vi vil personalisere vores velkomst? Her kommer parametre ind i billedet:

```javascript
// En funktion der tager imod input
function sayHelloTo(name) {
  console.log(`Velkommen til Movie App, ${name}! 🎬`);
}

// Nu kan vi hilse på forskellige personer
sayHelloTo("Emma");
sayHelloTo("Lucas");
sayHelloTo("Sofia");

// Prøv også med en variabel
const userName = "Thomas";
sayHelloTo(userName);
```

**💡 Om parametre:**

- `name` er et parameter (input) til funktionen
- Vi kan sende forskellige værdier hver gang
- Funktionen bruger værdien vi sender
- Vi kan også sende variabler som input

#### Step 3: Funktioner der returnerer værdier

Nu skal vi lære at få værdier tilbage fra funktioner:

```javascript
// En funktion der returnerer en værdi
function calculateMovieLength(hours, minutes) {
  const totalMinutes = hours * 60 + minutes;
  return totalMinutes; // Send resultatet tilbage
}

// Brug funktionen og gem resultatet
const length1 = calculateMovieLength(2, 15); // 2 timer og 15 minutter
console.log("Film længde i minutter:", length1);

const length2 = calculateMovieLength(1, 45); // 1 time og 45 minutter
console.log("Anden film længde:", length2);

// Vi kan også bruge returværdien direkte
if (calculateMovieLength(3, 0) > 150) {
  console.log("Det er en lang film!");
}
```

**💡 Om return værdier:**

- `return` sender et resultat tilbage
- Vi kan gemme resultatet i en variabel
- Vi kan bruge resultatet direkte
- Funktionen stopper når den når til `return`

#### Step 4: Funktioner til vores Movie App

Nu skal vi se hvordan funktioner kan hjælpe os med vores film database:

```javascript
// Vores movie database
const allMovies = [
  {
    id: 1,
    title: "The Matrix",
    year: 1999,
    genre: ["Action", "Sci-Fi"],
    director: "Lana Wachowski, Lilly Wachowski",
    rating: 8.7,
    image: "matrix.jpg",
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    description: "A computer programmer discovers that reality is not what it seems..."
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    genre: ["Action", "Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    rating: 8.8,
    image: "inception.jpg",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    description: "A thief who enters the dreams of others to steal secrets..."
  }
];

// Funktion der finder en film ud fra id
function findMovieById(movieId) {
  for (const movie of allMovies) {
    if (movie.id === movieId) {
      return movie;
    }
  }
  return null; // Returner null hvis filmen ikke findes
}

// Funktion der laver en pæn tekst om filmen
function createMovieDescription(movie) {
  return `
    🎬 ${movie.title} (${movie.year})
    🎭 Genre: ${movie.genre.join(", ")}
    👤 Instruktør: ${movie.director}
    ⭐ Rating: ${movie.rating}
    👥 Skuespillere: ${movie.actors.join(", ")}
    📝 ${movie.description}
    `;
}

// Nu kan vi nemt finde og vise film!
const movie = findMovieById(1); // Find The Matrix
if (movie) {
  console.log(createMovieDescription(movie));
}
```

**💡 Fordele ved funktioner:**

- Koden bliver mere organiseret
- Vi kan genbruge kode
- Lettere at vedligeholde
- Gør koden mere læsbar

---

## Del 3: DOM-manipulation

### Opgave 3.1: Introduktion til DOM

**⚠️ Inden vi starter med DOM:**

1. Åbn din `app.js` fil
2. Slet den tidligere kode med funktioner
3. Opret denne basis HTML-struktur i din `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Movie App</title>
    <link rel="stylesheet" href="app.css" />
  </head>
  <body>
    <h1>🎬 Movie App</h1>

    <!-- Her tilføjer vi en container til vores film -->
    <section id="movies">
      <!-- Film bliver vist her -->
    </section>

    <script src="app.js"></script>
  </body>
</html>
```

**Formål:** Lær at forbinde JavaScript med HTML - så vi kan vise vores film på siden!

#### Step 1: Find elementer i HTML

Først skal vi lære at få fat i HTML-elementer fra JavaScript:

```javascript
"use strict";

window.addEventListener("load", initApp);

function initApp() {
  // Find vores movies-sektion
  const moviesSection = document.querySelector("#movies");
  console.log("Movies section fundet:", moviesSection);

  // Find h1 overskriften
  const header = document.querySelector("h1");
  console.log("Header fundet:", header);
}
```

**💡 Sådan finder vi elementer:**

- `document` er hele HTML-dokumentet
- `querySelector()` finder ét element
- `#movies` finder element med id="movies"
- `h1` finder første h1-element

#### ✅ Test det!

1. Gem filerne og refresh
2. Åbn konsollen (F12)
3. Se at elementerne er fundet
4. Prøv at ændre selectors og se hvad der sker

#### Step 2: Ændre indhold i elementer

Nu skal vi lære at ændre indholdet af HTML-elementer:

```javascript
function initApp() {
  // Find elementerne
  const moviesSection = document.querySelector("#movies");
  const header = document.querySelector("h1");

  // Ændre tekstindhold
  header.textContent = "🎬 Velkommen til Movie App!";

  // Tilføj HTML-indhold
  moviesSection.innerHTML = `
        <article class="movie">
            <h2>The Matrix</h2>
            <p>Udgivet: 1999</p>
        </article>
    `;
}
```

**💡 To måder at ændre indhold:**

- `textContent` = ren tekst (sikker, men ingen HTML)
- `innerHTML` = HTML-indhold (mere fleksibel)

#### ✅ Test det!

1. Gem og refresh
2. Se hvordan siden opdateres
3. Prøv at ændre teksterne
4. Bemærk forskellen på textContent og innerHTML

#### Step 3: Vis film fra databasen

Nu skal vi kombinere det vi har lært om arrays, objekter og DOM:

```javascript
function initApp() {
  // Vores film database
  const allMovies = [
    {
      id: 1,
      title: "The Matrix",
      year: 1999,
      genre: ["Action", "Sci-Fi"],
      director: "Lana Wachowski, Lilly Wachowski",
      rating: 8.7,
      image: "matrix.jpg",
      actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      description: "A computer programmer discovers that reality is not what it seems..."
    },
    {
      id: 2,
      title: "Inception",
      year: 2010,
      genre: ["Action", "Sci-Fi", "Thriller"],
      director: "Christopher Nolan",
      rating: 8.8,
      image: "inception.jpg",
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
      description: "A thief who enters the dreams of others to steal secrets..."
    }
  ];

  // Find vores movies-sektion
  const moviesSection = document.querySelector("#movies");

  // Opret HTML for hver film
  let movieHTML = "";

  for (const movie of allMovies) {
    movieHTML += `
            <article class="movie">
                <img src="img/${movie.image}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p>Udgivet: ${movie.year}</p>
                <p>Instruktør: ${movie.director}</p>
                <p>Rating: ⭐ ${movie.rating}</p>
                <p>Genre: ${movie.genre.join(", ")}</p>
                <p>Skuespillere: ${movie.actors.join(", ")}</p>
                <p>${movie.description}</p>
            </article>
        `;
  }

  // Indsæt al HTML på én gang
  moviesSection.innerHTML = movieHTML;
}
```

**💡 Sådan virker det:**

- Vi bruger et loop til at gå gennem alle film
- For hver film laver vi et stykke HTML
- Vi samler al HTML i én variabel
- Til sidst indsætter vi det hele på én gang

#### ✅ Test det!

1. Gem og refresh
2. Se hvordan filmene vises på siden
3. Prøv at tilføje flere film til databasen
4. Prøv at ændre HTML-strukturen for hver film

````

#### ✅ Test det!

Refresh og se funktionen virker!

**💡 Forklaring:**

- `function sayHello()` opretter funktionen
- `{}` indeholder koden der skal køres
- `sayHello()` kalder (kører) funktionen
- Koden køres hver gang vi kalder den!

#### Step 3: Funktioner med input (parametre)

Men vi vil gerne personalisere beskeden:

```javascript
// Funktion med parameter - input til funktionen!
function sayHelloTo(name) {
  console.log(`Hej ${name}! Velkommen til filmappen! 🎬`);
}

// Nu kan vi give forskellige navne
sayHelloTo("Emma");
sayHelloTo("Lucas");
sayHelloTo("Sofie");
````

#### ✅ Test det!

Se hvordan samme funktion kan give forskellige resultater!

**💡 Forklaring:**

- `name` er en **parameter** - variabel som funktionen modtager
- Når vi kalder `sayHelloTo("Emma")`, bliver `name` til "Emma"
- Nu er funktionen meget mere fleksibel!

#### Step 4: Funktioner med flere parametre

Lad os prøve med flere inputs:

```javascript
// Funktion med flere parametre
function sayHelloToUser(name, age) {
  console.log(`Hej ${name}! Du er ${age} år og velkommen til filmappen! 🎬`);
}

// Giv flere inputs til funktionen
sayHelloToUser("Emma", 25);
sayHelloToUser("Lucas", 30);
sayHelloToUser("Sofie", 22);
```

#### ✅ Test det!

Se hvordan flere parametre giver endnu mere fleksibilitet!

**💡 Forklaring:**

- Funktioner kan tage så mange parametre som du vil
- Parametre adskilles med komma
- Rækkefølgen er vigtig!

#### Step 5: Funktioner der returnerer værdier

Indtil nu har funktionerne bare udskrevet noget. Lad os lære at få data tilbage:

```javascript
// Funktion der beregner og returnerer en værdi
function calculateMovieAge(releaseYear) {
  const currentYear = 2025;
  const age = currentYear - releaseYear;
  return age; // Send resultatet tilbage!
}

// Gem resultatet i en variabel
const matrixAge = calculateMovieAge(1999);
console.log("The Matrix er", matrixAge, "år gammel");

// Eller brug det direkte
console.log("Inception er", calculateMovieAge(2010), "år gammel");
```

#### ✅ Test det!

Se hvordan funktioner kan give os data tilbage!

**💡 Forklaring:**

- `return` sender en værdi tilbage fra funktionen
- Vi kan gemme den returnerede værdi i en variabel
- Eller bruge den direkte hvor vi har brug for den

#### ✅ Endelig test af funktioner basics!

Gem din `app.js` fil og refresh browseren. I konsollen skulle du se:

1. Simple hej-beskeder
2. Personaliserede beskeder med navne
3. Beskeder med flere parametre
4. Film alder udregninger

**🎯 Læringsmål - Basic funktioner:**
Du kan nu:

- ✅ Oprette funktioner med `function navn(){}`
- ✅ Kalde funktioner med `navn()`
- ✅ Bruge parametre til input
- ✅ Returnere værdier fra funktioner
- ✅ Lave simple beregninger i funktioner

**💪 Nu kender du grundlaget for funktioner!**

---

### Opgave 2.2: Funktioner med filmdata

**Formål:** Lær at lave funktioner der arbejder med objekter - som i den rigtige filmapp!

#### Step 1: Problemet - kompleks kode med objekter

Indtil nu har vi arbejdet med filmobjekter direkte:

```javascript
// Gentaget kode for at beskrive film...
const movie1 = { title: "The Matrix", year: 1999, rating: 8.7 };
const movie2 = { title: "Inception", year: 2010, rating: 8.8 };

console.log(`🎬 ${movie1.title} (${movie1.year}) - Rating: ⭐ ${movie1.rating}`);
console.log(`🎬 ${movie2.title} (${movie2.year}) - Rating: ⭐ ${movie2.rating}`);
// Meget gentaget kode igen! 😕
```

**💡 Problemet:**

- Gentaget kode til at formatere filminfo
- Svært at ændre formatet hvis vi vil opdatere det
- Vi har brug for funktioner der arbejder med objekter!

#### Step 2: Function til at beskrive movies (som displayMovie i dit projekt)

```javascript
// Function that takes a movie object as parameter (like your displayMovie function)
function displayMovieInfo(movie) {
  const movieInfo = `
    🎬 ${movie.title} (${movie.year})
    👤 Instruktør: ${movie.director}
    ⭐ Rating: ${movie.rating}
    🎭 Genre: ${movie.genre.join(", ")}
    👥 Skuespillere: ${movie.actors.join(", ")}
    📝 ${movie.description}
  `;
  return movieInfo;
}

// Now we can reuse this for any movie!
const testMovie = {
  id: 1,
  title: "The Matrix",
  year: 1999,
  rating: 8.7,
  genre: ["Action", "Sci-Fi"]
};

console.log(displayMovieInfo(testMovie));
```

#### ✅ Test det!

Se hvordan objektet bliver til en pæn besked!

**💡 Forklaring:**

- `movie` er et helt objekt som parameter (som i dit projekt)
- Vi bruger `movie.title`, `movie.year` osv. (engelsk properties)
- Dette minder om `displayMovie` funktionen i dit projekt!
- Funktionen returnerer formateret tekst

#### Step 3: Funktioner der henter data fra objekter

Lad os lave funktioner der henter specifikke informationer:

```javascript
// Funktion der henter film titel
function getMovieTitle(movieObject) {
  return movieObject.title;
}

// Funktion der henter film år
function getMovieYear(movieObject) {
  return movieObject.year;
}

// Funktion der beregner film alder
function getMovieAge(movieObject) {
  const currentYear = 2025;
  return currentYear - movieObject.year;
}

// Test funktionerne
console.log("Film titel:", getMovieTitle(testMovie));
console.log("Film år:", getMovieYear(testMovie));
console.log("Film alder:", getMovieAge(testMovie), "år");
```

#### ✅ Test det!

Se hvordan vi kan hente data fra objekter!

**💡 Forklaring:**

- Funktioner kan hente specifikke data fra objekter
- Vi kan lave beregninger baseret på objekt data
- Dette gør koden mere organiseret og genbrugelig!

#### Step 4: Funktioner med arrays af film

Nu kommer det sjove - lad os kombinere alt vi har lært! Vi tager vores funktioner og bruger dem på mange film:

```javascript
// Opret en test database (matcher din projekt struktur)
const allMovies = [
  {
    id: 1,
    title: "The Matrix",
    year: 1999,
    genre: ["Action", "Sci-Fi"],
    director: "Lana Wachowski, Lilly Wachowski",
    rating: 8.7,
    image: "matrix.jpg",
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    description: "A computer programmer discovers that reality is not what it seems..."
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    genre: ["Action", "Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    rating: 8.8,
    image: "inception.jpg",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    description: "A thief who enters the dreams of others to steal secrets..."
  }
];

// Function that displays all movies nicely
function displayAllMovies(movieArray) {
  console.log("\n=== ALLE FILM ===");
  for (const movie of movieArray) {
    console.log(displayMovieInfo(movie)); // Genbruger vores funktion!
  }
}

// Test funktionen med vores film database
displayAllMovies(allMovies);
```

#### ✅ Test det!

Se alle film vist pænt!

**💡 Forklaring:**

- Funktionen tager et helt array som parameter
- Vi looper gennem arrayet og bruger vores `displayMovieInfo` funktion
- Vi genbruger funktioner vi har lavet - smart og effektivt!
- Dette er grundlaget for hvordan rigtige filmapps organiserer deres kode!

#### ✅ Endelig test af funktioner!

Gem din `app.js` fil og refresh browseren. I konsollen skulle du se:

1. **Grundlæggende funktioner** - simple hilsner
2. **Funktioner med parametre** - personaliserede beskeder
3. **Return værdier** - beregning af film alder
4. **Objekt funktioner** - formatering af movie info
5. **Data-hentning** - titel, år og alder fra objekter
6. **Array funktioner** - alle film vist pænt i en liste

**🎯 Læringsmål - Funktioner:**

Nu behersker du:

- ✅ **Oprettelse**: `function functionName() {}`
- ✅ **Kaldelse**: `functionName()`
- ✅ **Parametre**: Input til funktioner
- ✅ **Return**: Output fra funktioner
- ✅ **Objekt-funktioner**: Arbejde med movie objekter
- ✅ **Array-funktioner**: Loop gennem mange objekter
- ✅ **Genbrugelig kode**: En funktion, mange anvendelser!

**💪 Fantastisk! Nu kan du organisere din kode med funktioner som en professionel udvikler!**

---

## Del 3: DOM-manipulation 🎬

**Formål:** Lær at ændre på hjemmesiden med JavaScript - det der gør det til en rigtig web-app!

### Vigtig note om funktioner fra Del 2

I Del 3 bruger vi de funktioner vi lærte i Del 2 til at formatere vores movie data. Husk at du kan bruge:

- `displayMovieInfo(movie)` - til at formatere film information
- `formatYear(year)` - til at formatere årstal
- `formatRating(rating)` - til at formatere ratings

### Opgave 3.1: Grundlæggende DOM-manipulation

**Formål:** Lær at finde HTML-elementer og ændre deres indhold

#### Step 1: Problemet - JavaScript og HTML adskilt!

Indtil nu har vi kun arbejdet i konsollen. Men i rigtige web-apps skal JavaScript ændre på selve hjemmesiden!

**💡 Problemet:**

- JavaScript kan kun udskrive til konsollen
- Brugere ser ikke konsollen - de ser hjemmesiden
- Vi skal forbinde JavaScript med HTML!

#### Step 2: Forbered HTML til JavaScript (match dit projekt)

Åbn din `index.html` fil og tilføj elementer der matcher din projekt struktur:

```html
<body>
  <header>
    <h1>🎬 Movie App</h1>
  </header>
  <main>
    <!-- Test element -->
    <section id="test-section">
      <p>Dette tekst vil JavaScript ændre...</p>
    </section>

    <!-- Movie list container (like in your project) -->
    <section id="movie-list">
      <p>Her kommer movies...</p>
    </section>
  </main>

  <script src="app.js"></script>
</body>
```

#### ✅ Test det!

Gem og refresh - se strukturen der matcher dit projekt!

**💡 Forklaring:**

- Bruger `header`, `main`, `section` som i dit rigtige projekt
- `id="movie-list"` matcher dit projekt's movie container
- Professional HTML struktur

#### Step 3: Find HTML-elementer med JavaScript

Nu lærer vi at forbinde JavaScript med HTML:

```javascript
// ========== DOM MANIPULATION ==========

// Find HTML elements by their id (like your project)
consconst testSection = document.querySelector("#test-section");
const movieListContainer = document.querySelector("#movie-list");

console.log("Found test section:", testSection);
console.log("Found movie list container:", movieListContainer);
```

#### ✅ Test det!

Tjek konsollen - ser du HTML-elementerne?

**💡 Forklaring:**

- `document.querySelector("#movie-list")` finder elementet (som i dit projekt)
- `#` betyder "find efter id"
- Nu har vi forbindelse mellem JavaScript og HTML!

#### Step 4: Ændr indhold med innerHTML

Nu skal vi lære at ændre på hjemmesiden med JavaScript!

**4a. Først skal vi forstå hvad innerHTML gør:**

```javascript
// Prøv denne simple ændring først
testSection.innerHTML = "Ny tekst fra JavaScript!";
```

#### ✅ Test det!

Refresh siden - ser du den nye tekst?

**4b. Nu prøver vi med HTML-tags:**

```javascript
// Vi kan også indsætte HTML-tags
testSection.innerHTML = "<p>🎉 JavaScript har overtaget kontrollen!</p>";
```

#### ✅ Test det!

Se forskellen - nu har teksten HTML formatering!

**4c. Lad os også ændre movie containeren:**

```javascript
// Ændr begge elementer
testSection.innerHTML = "<p>🎉 JavaScript har overtaget kontrollen!</p>";
ntrollen!</p>";
movieListContainer.innerHTML = "<p>📽️ Her vil filminfo komme...</p>";
```

#### ✅ Test det!

Begge sektioner skulle nu være ændret!

**💡 Forklaring:**

- `.innerHTML` erstatter ALT indhold i elementet
- Vi kan bruge både ren tekst og HTML-tags
- JavaScript kan ændre hele hjemmesiden dynamisk!

#### Step 5: Vis filmdata på hjemmesiden

Nu skal vi lære at kombinere vores filmdata med HTML!

**5a. Først vælger vi en film:**

```javascript
// Hent den første film fra vores array
const selectedMovie = allMovies[0];
```

#### ✅ Test det!

Tilføj denne linje og console.log selectedMovie - hvad får du?

**5b. Nu bygger vi HTML med filmdata:**

```javascript
// Start simpelt - vis bare titlen
const movieHTML = `<p>Film: ${selectedMovie.title}</p>`;
movieListContainer.innerHTML = movieHTML;
```

#### ✅ Test det!

Ser du filmtitlen på siden nu?

**5c. Tilføj mere filminfo:**

```javascript
// Byg mere komplet HTML
const movieHTML = `
  <div>
    <h3>🎬 Featured Movie</h3>
    <p><strong>Title:</strong> ${selectedMovie.title}</p>
    <p><strong>Year:</strong> ${selectedMovie.year}</p>
  </div>
`;
movieListContainer.innerHTML = movieHTML;
```

#### ✅ Test det!

Ser du nu titel og år?

**5d. Tilføj også rating:**

```javascript
// Tilføj endnu mere information
const movieHTML = `
  <div>
    <h3>🎬 Featured Movie</h3>
    <p><strong>Title:</strong> ${selectedMovie.title}</p>
    <p><strong>Year:</strong> ${selectedMovie.year}</p>
    <p><strong>Rating:</strong> ⭐ ${selectedMovie.rating}/10</p>
  </div>
`;
movieListContainer.innerHTML = movieHTML;
```

#### ✅ Test det!

Nu skulle du se titel, år og rating!

**💡 Forklaring:**

- Template literals bruger backticks `` ` ` `` i stedet for anførselstegn
- `${selectedMovie.title}` indsætter moviedata direkte i HTML'en
- Vi kan blande HTML-struktur med JavaScript-data
- Nu vises rigtige filmdata på hjemmesiden!

#### Step 6: Introduktion til insertAdjacentHTML

Nu skal vi lære en smartere måde at tilføje HTML på - uden at overskrive det eksisterende!

**6a. Først rydder vi containeren og tilføjer en overskrift:**

```javascript
// Start med at rydde op
movieListContainer.innerHTML = "<h3>🎬 All Movies</h3>";
```

#### ✅ Test det!

Nu skulle containeren kun have overskriften.

**6b. Tilføj den første film MED insertAdjacentHTML:**

```javascript
// Vælg første film
const firstMovie = allMovies[0];

// Byg HTML for den film
const firstMovieHTML = `
  <div style="border: 1px solid #ccc; margin: 10px; padding: 10px;">
    <h4>${firstMovie.title}</h4>
    <p>Year: ${firstMovie.year}</p>
  </div>
`;

// TILFØJ (overskriver IKKE)
movieListContainer.insertAdjacentHTML("beforeend", firstMovieHTML);
```

#### ✅ Test det!

Du skulle nu se overskriften + den første film!

**6c. Tilføj endnu en film:**

```javascript
// Vælg anden film
const secondMovie = allMovies[1];

// Byg HTML for den anden film
const secondMovieHTML = `
  <div style="border: 1px solid #ccc; margin: 10px; padding: 10px;">
    <h4>${secondMovie.title}</h4>
    <p>Year: ${secondMovie.year}</p>
  </div>
`;

// TILFØJ den anden film - bemærk den overskriver IKKE den første!
movieListContainer.insertAdjacentHTML("beforeend", secondMovieHTML);
```

#### ✅ Test det!

Nu skulle du se overskriften + begge film! Læg mærke til at insertAdjacentHTML IKKE overskrev den første film.

**💡 Forklaring forskellen:**

- `innerHTML` erstatter ALT indhold i elementet
- `insertAdjacentHTML('beforeend', html)` TILFØJER HTML til slutningen
- Nu kan vi tilføje mange elementer en ad gangen!
- Dette er grundlaget for dynamiske lister

#### ✅ Endelig test af DOM manipulation!

Gem din `index.html` og `app.js` fil og refresh browseren. Du skulle se:

1. **Ændret tekst** i test-element fra Step 4
2. **Filmdata** vist fra Step 5
3. **To film** tilføjet med insertAdjacentHTML fra Step 6
4. **Rigtig filmdata** fra JavaScript-databasen på hjemmesiden

**🎯 Læringsmål - DOM Manipulation:**
Du kan nu:

- ✅ **Finde elementer**: `document.querySelector()`
- ✅ **Erstatte indhold**: `.innerHTML`
- ✅ **Tilføje indhold**: `.insertAdjacentHTML()`
- ✅ **Bygge HTML**: Template literals med `${data}`
- ✅ **Kombinere data og HTML**: Fra JavaScript arrays til hjemmeside
- ✅ **Lave dynamisk indhold**: Moderne web-app funktionalitet!

**💪 Fantastisk! Nu kan du få JavaScript til at ændre hjemmesiden!**

---

### Opgave 3.2: Professionel filmvisning med funktioner

**Formål:** Refaktorere koden til genbrugelige funktioner - sådan gøres det i rigtige apps!

Nu skal vi bruge det vi har lært i Del 1, 2 og 3 til at bygge en komplet filmvisning!

---

## 🎯 Praktisk Opgave: Byg komplet filmvisning

Nu kombinerer vi alt vi har lært - data fra Del 1, funktioner fra Del 2, og DOM-manipulation fra Del 3!

## 🎯 Praktisk Opgave: Byg komplet filmvisning

Nu kombinerer vi alt vi har lært - data fra Del 1, funktioner fra Del 2, og DOM-manipulation fra Del 3!

### Opgave 1: En funktion til at vise alle film

**Mål:** Lav en funktion der viser alle film på hjemmesiden

**1a. Start med funktionsstrukturen:**

```javascript
// Lav en funktion der hedder displayAllMovies
function displayAllMovies() {
  // Vi kommer til at fylde denne ud step by step!
}
```

**1b. Ryd containeren først:**

```javascript
function displayAllMovies() {
  // Ryd gammel indhold og tilføj overskrift
  movieListContainer.innerHTML = "<h2>🎬 All Movies</h2>";
}
```

**1c. Tilføj en loop til at gå gennem alle film:**

```javascript
function displayAllMovies() {
  // Ryd gammel indhold og tilføj overskrift
  movieListContainer.innerHTML = "<h2>🎬 All Movies</h2>";

  // Loop gennem alle film
  for (const movie of allMovies) {
    // Her kommer filmvisningen
  }
}
```

**1d. Byg HTML for hver film:**

```javascript
function displayAllMovies() {
  // Ryd gammel indhold og tilføj overskrift
  movieListContainer.innerHTML = "<h2>🎬 All Movies</h2>";

  // Loop gennem alle film
  for (const movie of allMovies) {
    // Byg HTML for denne film
    const movieHTML = `
      <div style="border: 1px solid #ddd; margin: 10px; padding: 15px;">
        <h3>${movie.title}</h3>
        <p><strong>Year:</strong> ${movie.year}</p>
        <p><strong>Rating:</strong> ⭐ ${movie.rating}/10</p>
        <p><strong>Genre:</strong> ${movie.genre[0]}</p>
      </div>
    `;

    // Tilføj HTML til siden
    movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
  }
}
```

**1e. Kald funktionen:**

```javascript
// Kald funktionen for at vise alle film
displayAllMovies();
```

#### ✅ Test det!

Nu skulle alle film være vist på hjemmesiden med styling!

### Opgave 2: Forbedre filmvisningen med funktioner fra Del 2

**Mål:** Brug funktioner fra Del 2 til at gøre filmvisningen endnu bedre

**2a. Tilføj formatYear funktionen til filmvisningen:**

**Husk først:** Du skal bruge `formatYear()` funktionen fra Del 2. Hvis du ikke har den, så tilføj den først:

```javascript
function formatYear(year) {
  return `Year: ${year}`;
}
```

```javascript
function displayAllMovies() {
  movieListContainer.innerHTML = "<h2>🎬 All Movies</h2>";

  for (const movie of allMovies) {
    const movieHTML = `
      <div style="border: 1px solid #ddd; margin: 10px; padding: 15px;">
        <h3>${movie.title}</h3>
        <p><strong>Year:</strong> ${formatYear(movie.year)}</p>
        <p><strong>Rating:</strong> ⭐ ${movie.rating}/10</p>
        <p><strong>Genre:</strong> ${movie.genre[0]}</p>
      </div>
    `;

    movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
  }
}
```

#### ✅ Test det!

Nu skulle årene være formateret som "Year: 1994" i stedet for bare "1994"

**2b. Tilføj also formatRating funktionen:**

**Husk først:** Du skal også bruge `formatRating()` funktionen fra Del 2. Hvis du ikke har den, så tilføj den:

```javascript
function formatRating(rating) {
  const stars = "⭐".repeat(Math.floor(rating));
  return `${stars} (${rating}/10)`;
}
```

```javascript
function displayAllMovies() {
  movieListContainer.innerHTML = "<h2>🎬 All Movies</h2>";

  for (const movie of allMovies) {
    const movieHTML = `
      <article class="movie">
        <img src="img/${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p><strong>Year:</strong> ${formatYear(movie.year)}</p>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Rating:</strong> ${formatRating(movie.rating)}</p>
        <p><strong>Genre:</strong> ${movie.genre.join(", ")}</p>
        <p><strong>Actors:</strong> ${movie.actors.join(", ")}</p>
        <p class="description">${movie.description}</p>
      </article>
    `;

    movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
  }
}
```

#### ✅ Test det!

Nu skulle ratings være formateret som "★★★★★ 8.5/10" eller "★★☆☆☆ 6.0/10"

**💡 Perfekt integration:**

- Vi bruger funktioner fra Del 2 til at formatere data
- DOM manipulation fra Del 3 til at vise data
- Alt arbejder sammen som et professionelt system!

#### ✅ Endelig test af komplet integration!

Gem alle filer og refresh browseren. Nu skulle du kunne:

1. **Se alle film** vist pænt på hjemmesiden med professional styling
2. **Formaterede år** med din formatYear funktion
3. **Formaterede ratings** med din formatRating funktion
4. **Struktureret data** fra JavaScript arrays til HTML
5. **Integration** mellem alle tre dele af kurset!

**🎯 Læringsmål - Komplet integration:**
Du kan nu:

- ✅ **innerHTML**: Erstatte alt indhold i et element
- ✅ **insertAdjacentHTML**: Tilføje HTML effektivt uden at overskrive
- ✅ **Template literals**: Bygge kompleks HTML med `${data}`
- ✅ **Dynamiske lister**: Vise arrays som HTML med loops
- ✅ **Funktions-integration**: Kombinere funktioner med DOM manipulation
- ✅ **Professional patterns**: Separation mellem data, logic og presentation

**💪 Du har nu alle grundlæggende færdigheder til at bygge filmapps!**

---

## 🔧 Forbedringer til progressionen (gennemført)

Progressionen er nu opdateret med følgende forbedringer:

✅ **Konsistent datastruktur**: Alle `allMovies` definitioner bruger nu engelsk property names (title, year, rating, genre) som matcher dit rigtige projekt

✅ **Fjernet duplikering**: Ingen gentagne definitioner - hver sektion har sin egen klare datastruktur

✅ **Bedre integration**: Del 3 refererer nu eksplicit til funktioner fra Del 2, og den praktiske opgave viser hvordan man bruger dem sammen

✅ **Klarere navigation**: "Del 3" er nu DOM-manipulation grundlaget, og "🎯 Praktisk Opgave" er anvendelsen - mindre forvirring

✅ **Step-by-step guidance**: Hver opgave er opdelt i micro-steps med test-punkter

---

## 🎉 Session 1 Komplet!

**Du har nu lært de grundlæggende JavaScript-koncepter:**

✅ **Data og variabler**:

- `const` og `let` til variabler
- Strings, numbers, arrays og objekter
- Template literals med `${}`

✅ **Funktioner**:

- Oprettelse med `function name() {}`
- Parametre og return værdier
- Arbejde med objekter og arrays

✅ **DOM Manipulation**:

- `document.querySelector()` til at finde elementer
- `innerHTML` til at erstatte indhold
- `insertAdjacentHTML()` til at tilføje indhold
- Kombinere JavaScript data med HTML

**🚀 Du er nu klar til næste session hvor vi tilføjer interaktivitet, events og mere avancerede features!**

**God arbejdslyst! 🚀**
