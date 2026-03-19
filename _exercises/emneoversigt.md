# Emneoversigt - Movie App (JavaScript + DOM)

## 📚 Kursusforløb

Dette dokument giver et samlet overblik over alle emner der er gennemgået i Movie App projektet. Forløbet er inddelt i 4 sessioner med stigende kompleksitet.

---

## Session 1: JavaScript-grundprincipper + DOM-manipulation

### 🎯 Formål

Lær grundlæggende JavaScript-syntax og DOM-manipulation ved at arbejde med statiske data.

### 📖 Emner

#### 1. Projektopsætning

- Oprettelse af projekt med GitHub Desktop
- Mappestruktur: `index.html`, `app.js`, `app.css`
- Linking af JavaScript og CSS filer
- Udviklerværktøjer (Console + Elements-fanen)

#### 2. HTML Struktur

- Semantisk HTML (`<header>`, `<main>`, `<article>`)
- Data attributter (`data-id`, `data-genre`)
- Tilgængelighed (alt-tags, semantic tags)

#### 3. JavaScript-grundlæggende

- **Variabler**: `const`, `let`
- **Datatyper**: String, Number, Boolean, Array, Object
- **Output i konsol**: `console.log()`
- **"use strict"**: Strict mode for fejlhåndtering

#### 4. DOM-udvælgelse

- `document.querySelector()` - Find ét element
- `document.querySelectorAll()` - Find alle matchende elementer
- CSS selectors i JavaScript (`#id`, `.class`, `tag`)

#### 5. DOM-manipulation

- **Læse data**: `.textContent`, `.innerHTML`
- **Ændre data**: Assignment (`element.textContent = "ny værdi"`)
- **Style manipulation**: `.style` property

#### 6. Arrays og Objects

- **Array basics**: Indeksering, `.length`
- **Object basics**: Properties, dot notation
- **Array iteration**: `for...of` loop
- **Object properties**: Accessing data med `.` og `[]`

#### 7. Funktioner

- Funktionsdeklaration
- Funktionsparametre
- Returværdier
- Funktionskald

#### 8. Eventhåndtering

- `addEventListener()` - Tilføj event listeners
- Klik-events
- Eventhandler-funktioner
- Callback functions

---

## Session 2: Dynamisk data + asynkron programmering

### 🎯 Formål

Arbejd med eksterne data fra JSON API og generer dynamisk HTML.

### 📖 Emner

#### 1. Projektopsætning fra template

- GitHub template repositories
- Klon repository med GitHub Desktop
- Commit og push workflow

#### 2. Asynkron JavaScript

- **Promises**: Asynkrone operationer
- **async/await**: Modern asynkron syntax
- **fetch()**: HTTP requests til JSON data
- **response.json()**: Parse JSON til JavaScript objects

#### 3. Dynamisk HTML-generering

- **Template literals**: Backticks og `${variable}`
- **Multi-line strings**: HTML struktur i JavaScript
- **insertAdjacentHTML()**: Indsæt HTML dynamisk
  - `"beforeend"` position
  - Andre positioner (`"afterbegin"`, `"beforebegin"`, `"afterend"`)

#### 4. Array Methods (Basics)

- **Array.forEach()**: Iteration over arrays
- **Array.map()**: Transform array elements
- **Array.join()**: Konverter array til string

#### 5. DOM-livscyklus

- **DOMContentLoaded**: Vent på DOM er klar
- Document ready state
- Script loading timing

#### 6. Arbejde med JSON

- JSON struktur (objects + arrays)
- Accessing nested data
- Array af objects iteration
- Object destructuring (intro)

#### 7. Globale variabler

- Scope i JavaScript
- Global vs. lokal scope
- Best practices for global state

#### 8. Kodeorganisering

- Funktions-baseret struktur
- Separation of concerns
- Kommentarer og dokumentation

---

## Session 3: Filtrering, søgning og sortering

### 🎯 Formål

Implementér avanceret filtrering, søgning og sortering af data med array methods.

### 📖 Emner

#### 1. Array Methods (Advanced)

- **Array.filter()**: Filtrer elements baseret på betingelse
  - Callback functions med return statement
  - Boolean conditions
  - Chaining multiple filters
- **Array.sort()**: Sortér arrays
  - Compare function: `(a, b) => a - b`
  - Ascending vs. descending order
  - String sorting med `localeCompare()`
- **Array.includes()**: Check om element findes

#### 2. String Methods

- **String.toLowerCase()**: Case-insensitive søgning
- **String.includes()**: Substring matching
- **String.localeCompare()**: Locale-aware string comparison (danske bogstaver)

#### 3. Håndtering af form-input

- Reading input values: `.value`
- Input events: `input`, `change`
- Real-time filtering
- Dropdown menus (`<select>`)

#### 4. Data Structures

- **Set**: Unikke værdier, remove duplicates
  - `new Set()`
  - `.add()` method
  - Spread operator til array konvertering: `[...set]`

#### 5. Betinget logik

- `if` statements i filters
- Multiple conditions med `&&` (AND)
- Optional filtering (check for empty values)
- Ternary operators (intro)

#### 6. Dynamisk udfyldning af dropdown

- Extracting unique values fra data
- Sorting dropdown options
- Nested loops (genre arrays)
- Building `<option>` elements dynamically

#### 7. Tal-konvertering

- **Number()**: String til number conversion
- **Logical OR `||`**: Fallback values
  - `Number(value) || 0`
  - Default values for empty inputs

#### 8. Kombinerede filtre

- Multi-filter pipeline
- Applying filters sequentially
- Kombinering af søgning, genre og range-filtre
- Clear filters functionality

---

## Session 4: Dialog og avanceret UI

### 🎯 Formål

Implementér dialog for detaljeret visning og udvid filtrering med ranges.

### 📖 Emner

#### 1. HTML5 Dialog Element

- **`<dialog>` tag**: Indbygget dialog-funktionalitet
- **`.showModal()`**: Åbn dialog
- **`.close()`**: Luk dialog
- Dialog backdrop styling
- ESC-lukning automatisk

#### 2. Dialog-implementering

- Dialog struktur i HTML
- Dialog styling med CSS
- Åbn dialog med JavaScript
- Luk dialog (knap + ESC)
- Backdrop-klikhåndtering (valgfri)

#### 3. Range-filtrering

- Number range inputs
- Min/max filtering logic
- Year ranges
- Rating ranges
- Range validation

#### 4. Event-delegering

- Understanding event bubbling
- Efficient event handling
- Single listener for multiple elements

#### 5. Avanceret eventhåndtering

- **event.preventDefault()**: Stop default behavior
- **event.key**: Keyboard events
  - Enter key
  - Space bar
  - ESC key (automatic for dialog)
- Multiple event types på samme element

#### 6. Accessibility (Tilgængelighed)

- **tabindex**: Keyboard navigation
  - `tabindex="0"` - Include in tab order
  - `tabindex="-1"` - Skip in tab order
- **Focus states**: `:focus-visible` pseudo-class
- **ARIA labels**: Screen reader support (intro)
- Keyboard support for interactive elements

#### 7. Avanceret CSS

- **Dialog styling**: Custom dialog appearance
  - `::backdrop` pseudo-element
- **Focus styles**: Visual feedback
- **Responsive design**: Dialog på mobile
- **Flexbox/Grid**: Dialog layout

#### 8. Refaktorering af kode

- Extract helper functions
- **getFilterValues()**: Separate data collection
- **sortMovies()**: Separate sorting logic
- Reduce function complexity
- DRY principle (Don't Repeat Yourself)

---

## 🔧 Tekniske færdigheder (samlet)

### JavaScript-kernekoncepter

- ✅ Variables og data types
- ✅ Functions og parameters
- ✅ Arrays og objects
- ✅ Loops (`for...of`)
- ✅ Conditionals (`if`, logical operators)
- ✅ Scope (global vs. local)
- ✅ "use strict" mode

### Asynkron JavaScript

- ✅ Promises
- ✅ async/await
- ✅ fetch() API
- ✅ JSON parsing

### DOM Manipulation

- ✅ querySelector/querySelectorAll
- ✅ textContent, innerHTML
- ✅ insertAdjacentHTML
- ✅ style manipulation
- ✅ Dialog API

### Array Methods

- ✅ forEach()
- ✅ map()
- ✅ filter()
- ✅ sort()
- ✅ join()
- ✅ includes()

### String Methods

- ✅ toLowerCase()
- ✅ includes()
- ✅ localeCompare()

### Events

- ✅ addEventListener()
- ✅ Klik-events
- ✅ Input/change events
- ✅ Keyboard events
- ✅ event.preventDefault()
- ✅ DOMContentLoaded

### Data Structures

- ✅ Arrays
- ✅ Objects
- ✅ Set (unique values)
- ✅ JSON

### Moderne JavaScript-funktioner

- ✅ Template literals
- ✅ Arrow functions
- ✅ Spread operator (`...`)
- ✅ Logical OR (`||`) for defaults
- ✅ const/let

### HTML/CSS

- ✅ Semantic HTML
- ✅ Forms og inputs
- ✅ Dialog element
- ✅ Flexbox/Grid basics
- ✅ CSS selectors
- ✅ Pseudo-classes/elements

### Værktøjer og arbejdsgang

- ✅ VS Code
- ✅ Developer Tools (Console, Elements)
- ✅ GitHub Desktop
- ✅ Git (commit, push)
- ✅ Live Server

### Bedste praksis

- ✅ Code organization
- ✅ Function naming
- ✅ Comments og dokumentation
- ✅ DRY principle
- ✅ Separation of concerns
- ✅ Accessibility
- ✅ Error handling basics

---

## 📊 Progressionsmatrix

| Emne                 | Session 1      | Session 2          | Session 3              | Session 4               |
| -------------------- | -------------- | ------------------ | ---------------------- | ----------------------- |
| **DOM Manipulation** | Basics         | Dynamisk HTML      | -                      | Dialog                  |
| **Arrays**           | Basics + loops | forEach, map, join | filter, sort, includes | -                       |
| **Functions**        | Basics         | async/await        | Advanced callbacks     | Refactoring             |
| **Events**           | Click          | DOMContentLoaded   | Input/change           | Keyboard                |
| **Data**             | Statisk (HTML) | JSON/fetch         | Filtrering             | Ranges                  |
| **Strings**          | Basics         | Template literals  | toLowerCase, includes  | localeCompare           |
| **UI**               | Statisk layout | Dynamiske cards    | Filtre + søgning       | Dialog + tilgængelighed |

---

## 🎓 Læringsstrategier

### Niveau 1 - Begynder

- Copy-paste koden
- Læs kommentarer grundigt
- Forstå hver linje
- Eksperimentér med værdier

### Niveau 2 - Øvet

- Se kodeeksempel
- Luk fil og skriv selv
- Kig kun tilbage hvis nødvendigt
- Debug egne fejl

### Niveau 3 - Avanceret

- Læs kun beskrivelse
- Skriv egen løsning først
- Sammenlign med eksempel
- Optimer din kode

---

## 🚀 Viderebygning

Efter dette forløb kan du:

- Bygge din egen app (Games App, Books App, etc.)
- Arbejde med andre APIs
- Implementere mere kompleks filtrering
- Tilføje CRUD funktionalitet (Create, Read, Update, Delete)
- Arbejde med localStorage
- Implementere authentication
- Bygge multi-page applications

---

## 📁 Projekt Struktur

```
movie-app/
├── index.html          # HTML struktur
├── app.css             # Styling
├── app.js              # JavaScript logik
├── data/
│   └── movies.json     # Film data (JSON)
├── img/
│   └── favicon.png     # Favicon
└── _exercises/         # Øvelsesguides
    ├── movie-app-1.md  # Session 1
    ├── movie-app-2.md  # Session 2
    ├── movie-app-3.md  # Session 3
    └── movie-app-4.md  # Session 4
```

---

## 🔗 Relaterede Ressourcer

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN - Dialog Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [JavaScript.info - Modern JavaScript](https://javascript.info/)

---

**Oprettet:** November 2025  
**Forfatter:** Rasmus Cederdorff - RACE  
**Kontekst:** Movie App undervisningsforløb
