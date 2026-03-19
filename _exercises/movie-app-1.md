# DAG 1 - JavaScript Basics & Klik-tæller

## Formål

I dag begynder vi Movie App projektet og lærer det mest basale JavaScript!

**Du lærer:**

- Hvad er en variabel?
- Hvordan reagerer man på et klik?
- Hvordan ændrer man noget på siden?
- Hvordan bruger man console.log til at debugge?

**Du lærer IKKE (endnu):**

- Arrays, objects, loops - det kommer DAG 2!
- Fetch, JSON, API'er - det kommer DAG 3!
- Funktioner med parametre - hold det simpelt i dag!

**Progressionen:**

- **DAG 1:** Setup + Klik-tæller (lær basics)
- **DAG 2:** Arrays, loops, hardcoded movie data
- **DAG 3:** Fetch rigtig data + filter
- **DAG 4:** Søgning + dialog + deployment

---

## Opgave 0: Movie App Projekt Setup

### Trin 1: Opret Movie App projektet

Hvis du allerede har gjort det, kan du gå til trin 2.

1. Følg denne guide: [Opret et nyt projekt med GitHub Desktop](https://race.notion.site/Opret-et-nyt-projekt-med-GitHub-Desktop-92de71d56c544e52aa87cd58a7b0a1ed)
2. **VIGTIGT - Navngiv projektet:** `movie-app` (vi skal bruge dette navn!)
3. Opret disse filer:
   - `index.html`
   - `app.js`
   - `app.css`

### Trin 2: Movie App HTML struktur

**Note:** Det er helt ok, hvis du ikke forstår alt i HTML/CSS endnu. I dette forløb er hovedfokus JavaScript, og vi bruger HTML/CSS som en ramme at arbejde i. Men prøv så vidt muligt at danne dig et overblik over hvilke HTML-elementer, der er.

Kopier dette ind i `index.html`:

```html
<!DOCTYPE html>
<html lang="da">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Movie App - DAG 1</title>
    <link rel="stylesheet" href="app.css" />
  </head>
  <body>
    <header>
      <h1>Movie App</h1>
      <p>DAG 1: Lær JavaScript med Klik-tæller</p>
    </header>

    <main>
      <div class="counter-box">
        <h2>Klik Tæller</h2>
        <p class="instructions">Øv dig med klik events mens vi bygger fundamentet til vores Movie App!</p>

        <div class="count-display">Antal klik: <span id="counter">0</span></div>

        <button id="click-button">Klik mig!</button>
        <button id="reset-button">Nulstil</button>
      </div>
    </main>

    <script src="app.js"></script>
  </body>
</html>
```

### Trin 3: Movie App CSS styling

**Vigtigt:** Du behøver ikke forstå al CSS-koden i dag. Kopier den som den er, så vi har et godt visuelt udgangspunkt, mens vi fokuserer på JavaScript.

Kopier dette ind i `app.css`:

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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 2rem;
}

.counter-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 100%;
}

.counter-box h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.instructions {
  font-size: 0.95rem;
  opacity: 0.8;
  margin-bottom: 2rem;
}

.count-display {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

#counter {
  font-size: 4rem;
  font-weight: bold;
  color: #ffd700;
  display: block;
  margin: 1rem 0;
}

button {
  background: white;
  color: #667eea;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  margin: 0.5rem;
  transition: all 0.3s;
  font-weight: bold;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

button:active {
  transform: translateY(0);
}

#reset-button {
  background: #ff6b6b;
  color: white;
}

#reset-button:hover {
  background: #ff5252;
}
```

### Trin 4: Test din Movie App setup

1. **Gem alle filer** (Windows/PC: Ctrl+S, Mac: Cmd+S)
2. **Start Live Server:**
   - Højreklik på `index.html` → "Open with Live Server"
3. **Åbn Developer Tools** (Windows/PC: F12 eller Ctrl+Shift+I, Mac: Cmd+Option+I)
   - Klik på "Console" fanen
   - Dette er dit vigtigste debugging værktøj!

**Tjek at det virker:**

- Ser du "Movie App" som overskrift?
- Ser du klik-tæller boksen?
- Knapperne gør ikke noget endnu - det er ok! Vi tilføjer JavaScript nu.

**Hvorfor hedder det "Movie App"?**

I morgen (DAG 2) udvider vi dette projekt med rigtige film data. I dag lærer vi bare JavaScript basics med en simpel counter!

---

### Trin 5: Start Live Server (hvis ikke allerede åben)

1. Gem alle filer
2. Højreklik på `index.html` → "Open with Live Server"
3. Åbn Developer Tools (Windows/PC: F12 eller Ctrl+Shift+I, Mac: Cmd+Option+I) og hold Console-fanen åben!

---

## Opgave 1: Din første variabel

**Formål:** Lær hvad en variabel er.

**Hvorfor er det vigtigt?**
Variabler er fundamentet for al JavaScript og programmering generelt. De bruges overalt: når du gemmer værdier, opdaterer data, sammenligner input, filtrerer lister eller bygger funktioner. I dette forløb starter vi simpelt med en tæller, men præcis det samme princip går igen i alle de næste opgaver.

### Hvad er en variabel?

En variabel er som en "boks" hvor du kan gemme data. Brug en const-first tilgang: start med `const`, og skift kun til `let` hvis værdien skal ændres senere.

**Eksempel:**

```javascript
const name = "Rasmus";
const age = 25;
const isStudent = true;
```

### 1.1: Prøv det selv

Åbn `app.js` og skriv:

```javascript
"use strict"; // Hjælper med at fange fejl

console.log("Hej fra JavaScript! ");

const message = "JavaScript er sejt!";
console.log(message);
```

**Gem og tjek browseren:**

- Åbn Console (Windows/PC: F12 eller Ctrl+Shift+I, Mac: Cmd+Option+I)
- Ser du dine beskeder?

**Tillykke!** Du har lige skrevet din første JavaScript kode!

Her bruger vi `const`, fordi værdien ikke ændrer sig.

### 1.2: Leg med variabler

Prøv at lave flere variabler:

```javascript
const favoritMovie = "Inception";
const year = 2010;
const rating = 8.8;

console.log("Min favorit film er:", favoritMovie);
console.log("Den kom i:", year);
console.log("Rating:", rating);
```

**Eksperimenter:**

- Prøv at ændre værdierne og bruge console.log til at se hvad der sker.
- Lav dine egne variabler.
- Se hvad der sker i Console!

### 1.3: Definér dig selv med variabler

Nu skal du bruge variabler til at beskrive dig selv.

**Skriv fx dette i `app.js`:**

```javascript
const firstName = "Skriv dit navn her";
const age = 22;
const isStudent = true;
const favoriteMovie = "Skriv din yndlingsfilm her";

console.log("Navn:", firstName);
console.log("Alder:", age);
console.log("Er studerende:", isStudent);
console.log("Yndlingsfilm:", favoriteMovie);
```

**Prøv selv:**

- Erstat værdierne med oplysninger om dig selv.
- Tilføj 2-3 ekstra variabler, fx `favoriteColor`, `city` eller `hobby`.
- Brug `console.log()` til at vise dem i konsollen.

Indtil nu har alle variabler været værdier, der bare skal gemmes. Nu kommer næste skridt: variabler der kan ændre sig.

### 1.4: Hvornår bruger man `let`?

Brug `const` som udgangspunkt. Brug kun `let`, når værdien skal ændres senere.

**Eksempel med `let`:**

```javascript
let points = 0;
console.log("Start:", points);

points = 1;
console.log("Efter ændring:", points);
```

**Hvorfor er det smart?**

- `const` beskytter værdier der ikke skal ændres.
- `let` bruges til data der udvikler sig over tid.
- Senere i dag bruger du `let` til tælleren, fordi tallet ændrer sig når man klikker.

**Mini-øvelse:**

Prøv selv at lave en variabel med `let` om dig selv:

```javascript
let mood = "træt";
console.log("Før:", mood);

mood = "klar til JavaScript";
console.log("Efter:", mood);
```

---

## Opgave 2: Find ting på siden

**Formål:** Lær hvordan JavaScript kan "finde" HTML elementer.

### Hvad er querySelector?

`document.querySelector()` finder et HTML element på din side.

**Eksempel:**

```javascript
const heading = document.querySelector("h1");
console.log(heading);
```

### 2.1: Find elementer

**Tilføj dette til din `app.js`:**

```javascript
// Find h1 elementet
const heading = document.querySelector("h1");
console.log("Jeg fandt h1:", heading);

// Find count span
const countDisplay = document.querySelector("#counter");
console.log("Jeg fandt count:", countDisplay);

// Find knapperne
const clickButton = document.querySelector("#click-button");
const resetButton = document.querySelector("#reset-button");
console.log("Jeg fandt knapperne:", clickButton, resetButton);
```

**Vigtigt at forstå:**

- `"h1"` finder første `<h1>` tag
- `"#counter"` finder element med `id="counter"`
- `".container"` ville finde element med `class="container"`

---

## Opgave 3: Ændr noget på siden!

**Formål:** Lær hvordan man ændrer tekst og styling.

### 3.1: Ændr tekst

```javascript
// Ændr overskriften
heading.textContent = "Wow, jeg kan ændre tekst! ";

// Ændr count tallet
countDisplay.textContent = "42";
```

**Gem og se hvad der sker!**

### 3.2: Ændr farver

```javascript
// Ændr tekstfarve
heading.style.color = "yellow";

// Ændr baggrund på count
countDisplay.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
countDisplay.style.padding = "10px";
countDisplay.style.borderRadius = "10px";
```

**Eksperimenter:**

- Prøv andre farver
- Prøv andre CSS properties
- Hvad sker der hvis du skriver forkert?

---

## Opgave 4: Reagér på klik!

**Formål:** Lær hvordan man lytter efter bruger-handlinger.

### 4.1: Din første event listener

**Slet alt i `app.js` og start forfra med dette:**

```javascript
"use strict";

console.log("App starter...");

// Find knappen
let clickButton = document.querySelector("#click-button");

// Lyt efter klik
clickButton.addEventListener("click", function () {
  console.log("Knappen blev klikket! ");
});
```

**Test det:**

- Klik på knappen
- Se Console - hvad sker der?

### 4.2: Gør noget når der klikkes

```javascript
"use strict";

const clickButton = document.querySelector("#click-button");
const heading = document.querySelector("h1");

clickButton.addEventListener("click", function () {
  console.log("Klik! ");
  heading.textContent = "Du klikkede! ";
});
```

**Eksperimenter:**

- Hvad hvis du også ændrer farven?
- Prøv at ændre knappens tekst også!

---

## Opgave 5: Lav en rigtig tæller!

**Formål:** Kombinér alt du har lært - variabler, querySelector, events!

### 5.1: Basis tæller

**Komplet kode til `app.js`:**

```javascript
"use strict";

console.log("Klik-tæller starter...");

// Find elementerne
const countDisplay = document.querySelector("#counter");
const clickButton = document.querySelector("#click-button");
const resetButton = document.querySelector("#reset-button");

// Brug let kun her, fordi værdien ændrer sig
let count = 0;

// Når der klikkes på click-knappen
clickButton.addEventListener("click", function () {
  console.log("Klik!");

  // Tilføj 1 til count
  count = count + 1;

  // Vis det nye tal på siden
  countDisplay.textContent = count;
});

// Når der klikkes på reset-knappen
resetButton.addEventListener("click", function () {
  console.log("Nulstiller...");

  // Sæt count tilbage til 0
  count = 0;

  // Vis 0 på siden
  countDisplay.textContent = count;
});

console.log("Tæller er klar!");
```

**Test det:**

- Klik flere gange på "Klik mig!"
- Klik på "Nulstil"
- Virker det?

### 5.2: Forklaring

Lad os gennemgå hvad der sker:

```javascript
let count = 0;
```

↑ Vi laver en variabel der starter på 0

```javascript
count = count + 1;
```

↑ Vi tager den gamle værdi, lægger 1 til, og gemmer det nye resultat

```javascript
countDisplay.textContent = count;
```

↑ Vi viser det nye tal på skærmen

---

## Udfordringer (hvis du er færdig)

### Udfordring 1: Forskellige farver

Lav så count skifter farve når den kommer over 10:

```javascript
clickButton.addEventListener("click", function () {
  count = count + 1;
  countDisplay.textContent = count;

  // Hvis count er over 10, gør den grøn
  if (count > 10) {
    countDisplay.style.color = "lightgreen";
  }
});
```

### Udfordring 2: Tæl ned i stedet

Lav en ny knap der trækker 1 fra i stedet for at lægge til:

```javascript
// Tilføj denne knap i HTML først:
// <button id="minus-btn">Minus 1</button>

let minusButton = document.querySelector("#minus-btn");

minusButton.addEventListener("click", function () {
  count = count - 1;
  countDisplay.textContent = count;
});
```

### Udfordring 3: Besked ved 10 klik

```javascript
clickButton.addEventListener("click", function () {
  count = count + 1;
  countDisplay.textContent = count;

  if (count === 10) {
    alert("Tillykke! Du nåede 10 klik! ");
  }
});
```

---

## Hvad har du lært i dag?

**Variabler** - gemme data med `let`  
**console.log()** - skrive til Console  
**querySelector** - finde HTML elementer  
**textContent** - ændre tekst  
**style** - ændre CSS  
**addEventListener** - lytte efter klik  
**Funktioner** - kode der kører når noget sker

---

## Forberedelse til næste gang

Til næste gang skal vi arbejde med **flere** ting på én gang - **arrays** og **loops**!

Prøv at tænke over:

- Hvad nu hvis du ville tælle klik for 5 forskellige knapper?
- Hvordan ville du gemme en liste af film-titler?

Vi ses næste gang!

---

## Debugging Tips

**Hvis noget ikke virker:**

1. **Tjek Console** - er der røde fejlbeskeder?
2. **Tjek stavning** - `querySelector` (ikke `queryselector`)
3. **Tjek id'er** - matcher de HTML'en? (`#count`)
4. **Tilføj console.log** - se hvad værdierne er
5. **Spørg en makker** - forklar problemet højt

**Eksempel på debugging:**

```javascript
clickButton.addEventListener("click", function () {
  console.log("Før:", count);
  count = count + 1;
  console.log("Efter:", count);
  countDisplay.textContent = count;
  console.log("Vist på siden:", countDisplay.textContent);
});
```

**Husk:** Fejl er normalt! Alle programmører laver fejl hele tiden. Det vigtige er at lære at finde dem!
