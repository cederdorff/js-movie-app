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

### 0.1: Opret Movie App projektet

Hvis du allerede har gjort det, kan du gå til trin 2.

1. Følg denne guide: [Opret et nyt projekt med GitHub Desktop](https://race.notion.site/Opret-et-nyt-projekt-med-GitHub-Desktop-92de71d56c544e52aa87cd58a7b0a1ed)
2. **VIGTIGT - Navngiv projektet:** `movie-app` (vi skal bruge dette navn!)
3. Opret disse filer:
   - `index.html`
   - `app.js`
   - `app.css`

### 0.2: Movie App HTML struktur

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
      <section class="counter-box" aria-labelledby="counter-title">
        <h2 id="counter-title">Klik Tæller</h2>
        <p class="instructions">Øv dig med klik events mens vi bygger fundamentet til vores Movie App!</p>

        <div class="count-display">Antal klik: <span id="counter">0</span></div>

        <button id="click-button">Klik mig!</button>
        <button id="reset-button">Nulstil</button>
      </section>
    </main>

    <script src="app.js"></script>
  </body>
</html>
```

### 0.3: Movie App CSS styling

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

### 0.4: Test din Movie App setup

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

Åbn `app.js` og skriv (ja skriv det - lad vær med at copy/paste):

```javascript
"use strict"; // Hjælper med at fange fejl

console.log("Hej fra JavaScript! ");

const message = "JavaScript er sejt!";
console.log(message);
```

**Gem og tjek browseren:**

- Åbn Console (Windows/PC: F12 eller Ctrl+Shift+I, Mac: Cmd+Option+I)
- Ser du dine beskeder?

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

Tag udgangspunkt i dine egne variabler fra 1.3.

1. Vælg 1-2 variabler, hvor værdien skal kunne ændre sig (fx `city`, `hobby` eller `favoriteMovie`).
2. Skift dem fra `const` til `let`.
3. Opdatér værdien bagefter og log både før/efter i konsollen.

**Eksempel (bygget videre på 1.3):**

```javascript
let favoriteMovie = "Inception";
let city = "Aarhus";

console.log("Før:", favoriteMovie, city);

favoriteMovie = "Interstellar";
city = "København";

console.log("Efter:", favoriteMovie, city);
```

Hvis en variabel ikke skal ændres, skal den stadig være `const`.

**Ekstra tjek:** Prøv med vilje at ændre en `const` variabel og se fejlen i Console. Skift den derefter til `let` og se forskellen.

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

### Hvorfor er `querySelector` smart?

JavaScript kan ikke ændre noget på siden, før det ved **hvilket element** du vil arbejde med.

`querySelector()` er smart, fordi den gør det muligt at:

- pege præcist på det element du vil ændre
- genbruge samme element i flere linjer kode
- lave interaktive features (klik, tekstændringer, styling)

Uden `querySelector()` ville din JavaScript kode ikke kunne kobles til knapper, tekstfelter og overskrifter i HTML.

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

### Hvad er et event - og hvorfor bruger vi det?

Et **event** er noget der sker på siden, fx at en bruger klikker på en knap, skriver i et input eller bevæger musen.

En **event listener** er kode, der "lytter" efter et bestemt event og kører en funktion, når det sker.

Det er smart, fordi det gør din side interaktiv: JavaScript reagerer først, når brugeren gør noget.

I dag arbejder vi med klik-eventet (`click`) på en knap.

### 4.1: Din første event listener

**Slet alt i `app.js` og start forfra med dette:**

```javascript
"use strict";

console.log("App starter...");

// Find knappen
const clickButton = document.querySelector("#click-button");

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

**Prøv selv:**

- Skift overskriftens tekst til noget du selv finder på.
- Skift farven på overskriften, når der klikkes.
- Ændr teksten på knappen efter første klik.
- Giv knappen en ny baggrundsfarve eller border-radius ved klik.
- Prøv at ændre både tekst og styling i samme klik.

**Tip til fremgangsmåde:**

- Byg én ting ad gangen.
- Test i browseren efter hver lille ændring.
- Brug `console.log()` aktivt til at se om din kode kører som forventet.

---

## Opgave 5: Lav en rigtig tæller!

**Formål:** Kombinér alt du har lært - variabler, querySelector, events!

### 5.1: Basis tæller

I denne opgave bygger du tælleren selv i små trin.

Start med en tom `app.js` og byg videre trin for trin.

### 5.2: Trin 1 - Startkode

Skriv strict mode og en kort `console.log()`, så du kan se at filen kører.

<details>
<summary>Kodehint (hvis du sidder fast)</summary>

```javascript
"use strict";
console.log("Klik-tæller starter...");
```

</details>

### 5.3: Trin 2 - Find elementer i HTML

Find disse elementer med `querySelector()` og gem den i variabler:

- `#counter`
- `#click-button`
- `#reset-button`

Test med `console.log()` at de faktisk bliver fundet.

<details>
<summary>Kodehint (hvis du sidder fast)</summary>

```javascript
const countDisplay = document.querySelector("#counter");
const clickButton = document.querySelector("#click-button");
const resetButton = document.querySelector("#reset-button");

console.log(countDisplay);
console.log(clickButton);
console.log(resetButton);
```

</details>

### 5.4: Trin 3 - Lav selve tæller-variablen

Lav en variabel til tælleren, der starter på 0.

Tænk selv: Skal det være `const` eller `let` her, og hvorfor?

<details>
<summary>Kodehint (hvis du sidder fast)</summary>

```javascript
let count = 0;
```

</details>

### 5.5: Trin 4 - Klik skal tælle op

Tilføj en event listener på klik-knappen. Du kan bruge din definerede variabel for knappen.

Når der klikkes:

- læg 1 til `count`
- opdatér teksten i `#counter`

Prøv også at logge værdien i Console efter hvert klik.

<details>
<summary>Kodehint (hvis du sidder fast)</summary>

```javascript
clickButton.addEventListener("click", function () {
  count = count + 1;
  countDisplay.textContent = count;
});
```

</details>

### 5.6: Trin 5 - Nulstil knappen

Tilføj en event listener på reset-knappen.

Når der klikkes:

- sæt `count` tilbage til 0
- vis 0 i `#counter`

<details>
<summary>Kodehint (hvis du sidder fast)</summary>

```javascript
resetButton.addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;
});
```

</details>

### 5.7: Test din løsning

- Klik flere gange på "Klik mig!"
- Klik på "Nulstil"
- Tæller den korrekt op og tilbage til 0?

### 5.8: Ekstra refleksion

- Hvad sker der, hvis du glemmer at opdatere `textContent`?
- Hvad sker der, hvis `count` var lavet med `const`? Du kan evt. prøve det af!
- Hvorfor er event listeners nødvendige her?
- **Ekstra:** Bliver dine event listeners lange når der er meget kode? Hvis ja, se Udfordring 6.4 for en bedre måde at strukturere det på!

---

## Opgave 6: Udfordringer (hvis du er færdig)

### 6.1: Forskellige farver

Mål: Få tælleren til at skifte farve, når den bliver høj nok.

**Trin 1:** Vælg en grænseværdi (fx 10).

**Trin 2:** Inde i klik-listeneren tjekker du, om `count` er over grænsen.

**Trin 3:** Hvis betingelsen er opfyldt, ændrer du farven på `countDisplay`.

**Tænk selv:**

- Hvad skal der ske med farven, hvis count går under grænsen igen?
- Vil du have to farver (normal + highlight)?

<details>
<summary>Kodehint (hvis du sidder fast)</summary>

```javascript
clickButton.addEventListener("click", function () {
  count = count + 1;
  countDisplay.textContent = count;

  if (count > 10) {
    countDisplay.style.color = "lightgreen";
  }
});
```

</details>

### 6.2: Tæl ned i stedet

Mål: Tilføj en ekstra knap, der tæller ned.

**Trin 1:** Tilføj en minus-knap i HTML.

**Trin 2:** Find knappen med `querySelector()`.

**Trin 3:** Lav en event listener på minus-knappen, der trækker 1 fra `count`.

**Trin 4:** Opdatér visningen i `countDisplay`.

**Tænk selv:**

- Skal tælleren kunne gå under 0?
- Hvis ikke, hvor vil du placere tjekket?

<details>
<summary>Kodehint (hvis du sidder fast)</summary>

```html
<button id="minus-btn">Minus 1</button>
```

```javascript
const minusButton = document.querySelector("#minus-btn");

minusButton.addEventListener("click", function () {
  count = count - 1;
  countDisplay.textContent = count;
});
```

</details>

### 6.3: Besked ved 10 klik

Mål: Vis en besked, når brugeren rammer et bestemt mål.

**Trin 1:** Vælg en mål-værdi (fx 10).

**Trin 2:** I klik-listeneren tjekker du, om `count` er præcis lig med målet.

**Trin 3:** Vis en besked i browseren eller i Console, når målet nås.

**Tænk selv:**

- Skal beskeden kun vises én gang?
- Hvad sker der, hvis brugeren klikker videre efter målet?

<details>
<summary>Kodehint (hvis du sidder fast)</summary>

```javascript
clickButton.addEventListener("click", function () {
  count = count + 1;
  countDisplay.textContent = count;

  if (count === 10) {
    alert("Tillykke! Du nåede 10 klik!");
  }
});
```

</details>

### 6.4: Opdel i funktioner

**Tag din løsning fra Opgave 5 og refaktorér den!**

Frem for store event listeners med inline `function() { }`, er det smartere at udtrække logikken til navngivne funktioner.

Lav din kode mere overskuelig ved at flytte logik ud i funktioner.

Målet er:

- Event listener på klik-knappen kalder en funktion (fx `increaseCount()`)
- Event listener på minus-knappen kalder en funktion (fx `decreaseCount()`)
- Event listener på reset-knappen kalder en funktion (fx `resetCount()`)
- Funktionerne står for at opdatere både variablen og visningen på siden

Hvis du ikke allerede lavede den i Udfordring 2, så tilføj også en minus-knap i HTML:

```html
<button id="minus-btn">Minus 1</button>
```

Tænk selv over:

- Hvilken kode går igen flere steder?
- Hvad bør ligge i en funktion fremfor direkte inde i event listeneren?

**Trin 1:** Lav funktioner til op, ned og reset.

**Trin 2:** Flyt logikken ud af event listeners og ind i funktionerne.

**Trin 3:** Lad event listeners kalde funktionerne ved navn.

<details>
<summary>Kodehint (hvis du sidder fast)</summary>

```javascript
const minusButton = document.querySelector("#minus-btn");

function increaseCount() {
  count = count + 1;
  countDisplay.textContent = count;
}

function decreaseCount() {
  count = count - 1;
  countDisplay.textContent = count;
}

function resetCount() {
  count = 0;
  countDisplay.textContent = count;
}

clickButton.addEventListener("click", increaseCount);
minusButton.addEventListener("click", decreaseCount);
resetButton.addEventListener("click", resetCount);
```

</details>

**Kort opsamling: Hvorfor er det smart?**

- Din kode bliver lettere at læse, fordi hver funktion har ét tydeligt ansvar.
- Du undgår gentagelser, når op/ned/reset følger samme mønster.
- Det bliver nemmere at fejlfinde, fordi du kan teste én funktion ad gangen.
- Du er tættere på den struktur, vi bruger i større apps senere i forløbet.

---

## Hvad har du lært i dag?

**Variabler & const/let** - Hvornår skal du bruge const (fast værdi) vs let (værdi der ændrer sig)?  
**console.log()** - Dit vigtigste debugging værktøj  
**querySelector()** - Hvorfor det er smart: find præcis det element du skal arbejde med  
**Tekstændring** - `.textContent` ændrer på siden  
**Styling med JavaScript** - `.style` giver dig magt over CSS fra koden  
**Events og event listeners** - Hvordan JavaScript reagerer på brugerhandlinger (klik, input osv.)  
**Funktioner med klart ansvar** - Hvorfor det er smart at få event listeners til at kalde funktioner i stedet for store blokke af kode

---

## Forberedelse til næste gang

Til næste gang skal vi arbejde med **flere** ting på én gang - **arrays** og **loops**!

**Tænk selv over:**

- Hvad nu hvis du skulle håndtere 10 film i stedet for bare en tæller?
- Hvordan ville du gemme en liste af filmtitler uden at lave 100 variabler?
- Kan man på samme måde lave 5 klik-knapper uden at gentage samme kode 5 gange?

**Prøv selv (bonus før næste gang):**

- Hvis du glemmer event listener på en knap, hvad sker der? Prøv og se.
- Kan du lave en knap der ikke gør noget smart, men som viser at querySelector finder den korrekt?

Vi ses næste gang - I dag har I bygget fundamentet!

---

## Debugging Tips

**Hvis noget ikke virker:**

1. **Tjek Console først** - er der røde fejlbeskeder? Læs beskeden nøje!
2. **Tjek stavning** - `querySelector` (ikke `queryselector`), `addEventListener` (ikke `addEventListner`)
3. **Tjek id'er/selektorer** - gør HTML'en og JavaScript stemmer overens? (`#counter`, `#click-button` osv.)
4. **Log aggressivt** - tilføj `console.log()` på mange steder for at følge værdier
5. **Test én ting ad gangen** - prøv at teste hver funktion/event separat
6. **Spørg en makker** - forklar problemet højt, ofte løser du det selv ved at forklare!

**Eksempel på debugging med funktioner:**

```javascript
function increaseCount() {
  console.log("Før:", count);
  count = count + 1;
  console.log("Efter:", count);
  countDisplay.textContent = count;
  console.log("Vist på siden:", countDisplay.textContent);
}

clickButton.addEventListener("click", increaseCount);
```

**Husk:** Fejl er normalt! Alle programmører laver fejl hele tiden. Det vigtige er at blive god til at finde dem!
