# RACE 1 - JavaScript + DOM-manipulation

## Opgaver til første undervisningsgang

> **Vigtig:** Åbn Developer Tools i din browser og hold øje med Console-fanen mens du arbejder. Det er her dine `console.log()` beskeder vises!. Du kan åbne Developer Tools med:

    - PC: `ctrl` + `shift` + `i`
    - Mac: `cmd` + `option` + `i`

---

## Opgave 0: Tilpas dit projekt til Movie App 🎬

**Formål:** Du har allerede oprettet dit GitHub projekt gennem guiden. Nu skal vi tilpasse det til at blive en Movie App og teste at alt virker.

### Step 1: Tjek at dit projekt er korrekt oprettet

1. Du skulle have fulgt denne guide: [Opret et nyt projekt med GitHub Desktop](https://race.notion.site/Opret-et-nyt-projekt-med-GitHub-Desktop-92de71d56c544e52aa87cd58a7b0a1ed)
2. Du skulle have en mappe der hedder `movie-app` åben i VS Code
3. Du skulle have disse filer: `index.html`, `app.js`, `app.css`, og en `img` mappe

### Step 2: Tilpas projektet til Movie App

Nu skal vi ændre standardteksten til noget der passer til vores filmapp:

**Opdater `index.html`:**
Ændr disse linjer i din `index.html` fil:

- Linje med `<title>`: ændr til `<title>Movie App</title>`
- Linje med `<meta name="description"`: ændr til `<meta name="description" content="Movie App" />`
- Linje med `<h1>`: ændr til `<h1>🎬 Movie App</h1>`

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

**Opdater `app.js`:**
Ændr console.log beskeden så den passer til vores movie app:

```javascript
"use strict"; // Enable strict mode for better error checking

// #0: Listen for page load
window.addEventListener("load", initApp); // When the page is loaded, run initApp function

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

Lad os starte helt simpelt! Tilføj kun denne ene linje efter `initApp` funktionen i din `app.js` fil:

```javascript
// My first variable
const movieTitle = "The Matrix";
console.log("Movie:", movieTitle);
```

**💡 Forklaring:**

- `const` betyder konstant - værdien kan ikke ændres
- `movieTitle` er variabelnavnet (professional naming på engelsk)
- `"The Matrix"` er en **string** (tekst) - bemærk anførselstegnene
- `console.log()` viser værdien i browseren

#### ✅ Test det nu!

1. Gem filen (Ctrl+S)
2. Refresh din browser og tjek konsollen
3. Ser du "Movie: The Matrix"? Godt! ✨

#### Step 2: Tilføj flere datatyper

Nu tilføjer vi flere typer data. Tilføj disse linjer under din første variabel:

```javascript
// Different data types (following your project structure)
const movieYear = 1999; // Number (tal) - no quotes needed
const movieGenre = "Action"; // Another string

console.log("Year:", movieYear);
console.log("Genre:", movieGenre);
```

**💡 Forklaring:**

- **Number:** Tal uden anførselstegn (1999, 42, 3.14)
- **Boolean:** Kun `true` eller `false` (ingen anførselstegn)
- Vi bruger engelsk variable names som i dit projekt

#### ✅ Test igen!

Refresh browseren - ser du nu tre linjer i konsollen?

#### Step 3: Prøv at ændre en variabel (og se hvad der sker!)

**Først - lad os prøve at ændre en const og se hvad der sker:**

Tilføj denne linje under din eksisterende kode:

```javascript
// Try to change movieTitle (this will give an error!)
movieTitle = "Inception";
```

#### ✅ Test det nu!

1. Gem filen (Ctrl+S)
2. Refresh browseren og tjek konsollen
3. **Du får en fejl!** 🚨 Det er fint - det er præcis hvad vi ville se!

**💡 Hvad skete der?**

- Du får en fejl som: `TypeError: Assignment to constant variable`
- Det betyder: "Du kan ikke ændre en const variabel"
- **const** betyder konstant = kan IKKE ændres efter den er oprettet

**Fjern den fejlende linje igen** (slet eller kommenter den ud med `//`):

```javascript
// movieTitle = "Inception";  // ← Kommenteret ud så den ikke kører
```

#### Nu - lad os prøve med `let` i stedet:

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
const oldMessage = "The movie " + movieTitle + " is from " + movieYear;
console.log("Old way:", oldMessage);
```

#### ✅ Test det!

Refresh og se beskeden - den virker, men koden er rodet med mange `+` og mellemrum!

#### Step 4b: Template Literals - den smarte løsning!

Nu prøver vi den smarte måde:

```javascript
// Smart way with template literals
const smartMessage = `The movie ${movieTitle} is from ${movieYear}`;
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
const complexMessage = `Movie: ${movieTitle}, Year: ${movieYear}, Rating: ${userRating}, Genre: ${movieGenre}`;
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
Title: ${movieTitle}
Year: ${movieYear}
Rating: ${userRating}/10
Genre: ${movieGenre}`;
console.log(multiLineMessage);
```

**💡 Forklaring:**

- Template literals respekterer linjeskift
- Dette minder om film detaljer i dit projekt!
- Perfekt til at lave pæne, formaterede beskeder
- Prøv at gøre det samme med `+` - umuligt!

#### ✅ Test det!

Se den pænt formaterede besked i konsollen!

#### Step 5a: Kombiner forskellige data

Nu kombinerer vi alle variablerne i en smart tekststreng:

```javascript
// Brug alle vores variabler sammen
const kompletBeskrivelse = `Film: ${filmTitel} (${filmÅr}) - Rating: ${brugerRating}/10`;
console.log(kompletBeskrivelse);
```

#### ✅ Test det!

Se den komplette filmbesked!


#### ✅ Final test!

1. Gem din `app.js` fil (Ctrl+S)
2. Refresh din browser og tjek konsollen
3. **Prøv dette:** Ændr `filmTitel` til en anden film og se forskellen!
4. **Prøv dette:** Ændr `brugerRating` til `9.5` og se resultatet!
5. **Prøv dette:** Ændr `filmÅr` til `2024` og se output!
6. **Eksperimentér:** Prøv forskellige værdier og se hvordan template literals virker!

**🎯 Læringsmål:** Du kan nu oprette variabler og forstår forskellen på string, number og boolean.

---

### Opgave 1.2: Arrays (lister af data)

**Formål:** Lær at gemme flere elementer i en liste og arbejde med dem.

#### Step 1: Problemet - vi har kun én film!

Lige nu har vi kun én film gemt i vores `movieTitle` variabel. Men hvad nu hvis vi vil gemme flere film?

```javascript
// This doesn't work well...
const movie1 = "The Matrix";
const movie2 = "Inception";
const movie3 = "Interstellar";
// What if we have 100 movies? 😰
```

**💡 Problemet:**

- For mange variabler at holde styr på
- Svært at arbejde med mange film
- Vi har brug for en bedre løsning!

#### Step 2: Arrays - listen til redning!

Her kommer løsningen - **arrays** (lister):

```javascript
// Array - a list of movies! 🎉 (like allMovies in your project)
const movieTitles = ["The Matrix", "Inception", "Interstellar"];
console.log("Movie list:", movieTitles);
```

#### ✅ Test det!

Refresh og se listen i konsollen!

**💡 Forklaring:**

- `[]` firkantede parenteser laver en liste
- Komma `,` adskiller hvert element
- Alle film er nu samlet ét sted - som `allMovies` i dit projekt!

#### Step 3: Hvad kan vi putte i arrays?

Arrays kan indeholde mange forskellige ting:

```javascript
// Only strings (text)
const movieTitles = ["The Matrix", "Inception"];

// Only numbers
const movieYears = [1999, 2010, 2014];

// Movie ratings (numbers)
const movieRatings = [8.7, 8.8, 8.6];

// Blandet indhold (fungerer også!)
const randomArray = ["The Matrix", 1999, 8.7];

console.log("Film navne:", movieTitles);
console.log("Film år:", movieYears);
console.log("Film ratings:", movieRatings);
console.log("Blandet:", randomArray);
```

#### ✅ Test og se forskellen!

Se hvordan arrays kan indeholde forskellige typer data!

#### Step 4: Hent enkelt elementer fra listen

Nu lærer vi at hente specifikke film fra listen:

```javascript
// Hent enkelt film (VIGTIGT: arrays starter fra 0!)
console.log("Første film (index 0):", movieTitles[0]);
console.log("Anden film (index 1):", movieTitles[1]);
console.log("Tredje film (index 2):", movieTitles[2]);
```

#### ✅ Test det!

Se hvordan vi får fat i hver enkelt film!

**💡 Vigtigt at huske:**

- Arrays starter fra **0** (ikke 1!)
- Første element er `[0]`, anden er `[1]`, osv.
- `movieTitles[0]` = "The Matrix"
- `movieTitles[1]` = "Inception"

#### Step 5: Hvor mange elementer har vi?

```javascript
// Find længden af listen
console.log("Antal film i listen:", movieTitles.length);
console.log("Sidste film (smart måde):", movieTitles[movieTitles.length - 1]);
```

#### ✅ Test det!

Se hvor mange film vi har!

**💡 Forklaring:**

- `.length` fortæller hvor mange elementer der er
- Sidste element er altid `[length - 1]` (fordi vi starter fra 0)

#### Step 6: Tilføj nye film til listen

```javascript
// Tilføj film til slutningen
movieTitles.push("The Dark Knight");
console.log("Efter tilføjelse:", movieTitles);
console.log("Nu har vi", movieTitles.length, "film!");

// Tilføj flere på én gang
movieTitles.push("Pulp Fiction", "Goodfellas");
console.log("Efter flere tilføjelser:", movieTitles);
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
const fjernetFilm = movieTitles.pop();
console.log("Fjernet film:", movieTitles);
console.log("Listen nu:", movieTitles);

// Fjern den første film
const førsteFjernet = movieTitles.shift();
console.log("Første fjernet:", førsteFjernet);
console.log("Listen nu:", movieTitles);
```

#### ✅ Test det!

Se hvordan film forsvinder fra listen!

**💡 Forklaring:**

- `.pop()` fjerner sidste element og returnerer det
- `.shift()` fjerner første element og returnerer det
- Begge metoder ændrer den originale liste!

#### ✅ Endelig test af alt!

Gem din `app.js` fil og refresh browseren. I konsollen skulle du se:

1. Den originale filmliste (movieTitles)
2. Film der bliver tilføjet
3. Enkelt film hentet fra listen
4. Antal film i listen
5. Film der bliver fjernet
6. Søgeresultater

**🎯 Læringsmål:**
Du kan nu:

- Oprette arrays med `[]`
- Tilføje elementer med `.push()`
- Hente elementer med `[index]`
- Fjerne elementer med `.pop()` og `.shift()`
- Søge med `.includes()` og `.indexOf()`
- Finde længden med `.length`

---

### Opgave 1.3: Objekter (struktureret data)

**Formål:** Lær at gemme relateret data sammen i objekter - præcis som i dit movie app project!

#### Step 1: Problemet - arrays er ikke nok!

Indtil nu har vi brugt arrays til at gemme film:

```javascript
// This works OK for simple lists...
const movieTitles = ["The Matrix", "Inception", "Interstellar"];
```

Men hvad hvis vi vil gemme mere information om hver film?

```javascript
// This becomes messy quickly... 😰
const movieTitles = ["The Matrix", "Inception"];
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
// An object collects ALL data about one movie! 🎉 (like in your movies.json)
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
const realMovie = {
  id: 2,
  title: "The Matrix",
  year: 1999,
  genre: ["Action", "Sci-Fi"],
  director: "Lana Wachowski, Lilly Wachowski",
  rating: 8.7,
  actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
};

console.log("Movie ID:", realMovie.id);
console.log("Title:", realMovie.title);
console.log("First genre:", realMovie.genre[0]);
console.log("Director:", realMovie.director);
console.log("First actor:", realMovie.actors[0]);
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
realMovie.watched = false;
realMovie.review = "Fantastisk film!";

console.log("Er filmen set?", realMovie.watched);
console.log("Anmeldelse:", realMovie.review);
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
console.log("Gammel rating:", realMovie.rating);

realMovie.rating = 9.0; // Opgraderet!
realMovie.watched = true; // Nu har vi set den!

console.log("Ny rating:", realMovie.rating);
console.log("Nu er den set:", realMovie.watched);
```

#### ✅ Test det!

Se hvordan data opdateres!

#### Step 7: Brug template literals med objekter

Nu kombinerer vi det vi har lært om template literals og objekter:

```javascript
// Lav en flot beskrivelse med objektdata
const movieDescription = `
🎬 ${realMovie.title} (${realMovie.year})
⭐ Rating: ${realMovie.rating}/10  
🎭 First genre: ${realMovie.genre[0]}
� Director: ${realMovie.director}
👥 First actor: ${realMovie.actors[0]}
📝 ${realMovie.review}
`;

console.log("Movie info:");
console.log(movieDescription);
```

#### ✅ Test det!

Se den flotte formaterede movie info!

**💡 Forklaring:**

- `.join(", ")` laver array til tekst med komma
- `.join(" og ")` laver tekst med "og" mellem navne
- `${udvidetFilm.set ? "Ja" : "Nej"}` er en smart if/else i template literal!

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

**Formål:** Lær at kombinere arrays og objekter - præcis som i din allMovies array i dit projekt!

#### Step 1: Problemet - en enkelt film er ikke nok!

Indtil nu har vi arbejdet med ét movie object:

```javascript
// This works fine for one movie...
const singleMovie = {
  title: "The Matrix",
  year: 1999,
  rating: 8.7
};
```

Men hvad hvis vi vil have en hel movie collection? Som i dit rigtige projekt?

**💡 Problemet:**

- Vi kan ikke gemme mange film i separate variabler
- Det bliver umuligt at arbejde med store databaser
- Vi har brug for arrays + objekter sammen!

#### Step 2: Arrays af objekter - den perfekte løsning!

Her kombinerer vi det bedste fra begge verdener (præcis som allMovies i dit projekt):

```javascript
// Array of movie objects - exactly like allMovies in your project! 🎉
const allMovies = [
  {
    id: 1,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: ["Action", "Sci-Fi"]
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: ["Action", "Thriller"]
  }
];

console.log("Complete movie database:", allMovies);
console.log("Number of movies:", allMovies.length);
```

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
console.log("Første film objekt:", førsteFilm);
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

#### Step 4: Tilføj mere komplekse objekter

Lad os gøre objekterne mere realistiske:

```javascript
// Udvid databasen med mere komplekse objekter
const allMovies = [
  {
    id: 1,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: ["Action", "Sci-Fi"],
    director: "Lana Wachowski, Lilly Wachowski"
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: ["Action", "Thriller", "Sci-Fi"],
    director: "Christopher Nolan"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan"
  }
];

console.log("All movies:", allMovies);
```

#### ✅ Test det!

Se den komplekse database struktur!

**💡 Forklaring:**

- Hver film har nu id, arrays af genrer og director
- Dette matcher strukturen i den rigtige filmapp!

#### Step 5: Tilgå komplekse data

Nu bliver det interessant - arrays inde i objekter inde i arrays:

```javascript
// Hent komplekse data
console.log("Matrix first genre:", allMovies[0].genre[0]);
console.log("Inception director:", allMovies[1].director);
console.log("Dark Knight number of genres:", allMovies[2].genre.length);

// Hent alle genrer for første film
const matrixGenres = allMovies[0].genre;
console.log("Matrix alle genrer:", matrixGenres.join(", "));
```

#### ✅ Test det!

Se hvordan vi navigerer gennem komplekse strukturer!

**💡 Forklaring:**

- `[0].genre[0]` = første film, første genre
- `[1].director` = anden film, director
- Vi kombinerer array-, objekt- og array-adgang!

#### Step 6: Loop gennem movie database

Nu lærer vi at arbejde med hele databasen:

```javascript
// Loop through all movies
for (const movie of allMovies) {
  console.log(`🎬 ${movie.title} (${movie.year})`);
  console.log(`⭐ Rating: ${movie.rating}`);
  console.log(`🎭 Genre: ${movie.genre[0]}`);
  console.log("---");
}
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

### Opgave 2.1: Simple funktioner

**Formål:** Lær at oprette og bruge funktioner til at organisere din kode.

#### Step 1: Problemet - gentaget kode!

Indtil nu har vi skrevet al kode direkte. Men hvad hvis vi vil gøre det samme mange gange?

```javascript
// Gentaget kode - ikke så smart... 😕
console.log("Hej Emma! Velkommen til filmappen! 🎬");
console.log("Hej Lucas! Velkommen til filmappen! 🎬");
console.log("Hej Sofie! Velkommen til filmappen! 🎬");
console.log("Hej Thomas! Velkommen til filmappen! 🎬");
// Hvad hvis vi skal hilse på 100 personer?
```

**💡 Problemet:**

- Meget gentaget kode
- Svært at ændre beskeden hvis vi vil opdatere den
- Vi har brug for en smartere løsning!

#### Step 2: Funktioner - genbrugelig kode!

Her kommer løsningen - **funktioner**:

```javascript
// En funktion - genbrugelig kode! 🎉
function sayHello() {
  console.log("Hej! Velkommen til filmappen! 🎬");
}

// Nu kan vi bruge den mange gange
sayHello();
sayHello();
sayHello();
```

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
```

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
  const movieInfo = `🎬 ${movie.title} (${movie.year}) - Rating: ⭐ ${movie.rating}`;
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
// Create a test database (match your project structure)
const allMovies = [
  { title: "The Matrix", year: 1999, rating: 8.7, genre: ["Action", "Sci-Fi"] },
  { title: "Inception", year: 2010, rating: 8.8, genre: ["Action", "Thriller"] },
  { title: "The Dark Knight", year: 2008, rating: 9.0, genre: ["Action", "Crime"] },
  { title: "Pulp Fiction", year: 1994, rating: 8.9, genre: ["Crime", "Drama"] }
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
const testSection = document.querySelector("#test-section");
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
  const stars = "★".repeat(Math.floor(rating / 2)) + "☆".repeat(5 - Math.floor(rating / 2));
  return `${stars} ${rating}/10`;
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
        <p><strong>Rating:</strong> ${formatRating(movie.rating)}</p>
        <p><strong>Genre:</strong> ${movie.genre[0]}</p>
      </div>
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
