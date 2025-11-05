# Games App - Kom godt i gang 🎮

**Formål:** Anvend dine Movie App færdigheder i en ny kontekst - byg en Games App!

---

## 💡 Fra Movies til Games

Nu skal du overføre det du har lært fra Movie App til en ny kontekst. Dette er en vigtig programmør-færdighed: **at kunne genbruge og tilpasse kode til nye situationer**.

**Din opgave:**

- 🎮 Byg en Games App der henter og viser spil fra en JSON fil
- 🎮 Gennemtænk hvilke funktioner der giver mening for spil
- 🎮 Tilpas din eksisterende Movie App kode til games data

**Dette er IKKE en step-by-step guide!**  
Du skal selv tænke over hvordan du implementerer funktionerne. Guiden her hjælper dig med at **identificere forskelle** og **undgå faldgruber**.

---

## 🎯 Games Data Struktur

**JSON URL:**

```
https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/games.json
```

**Eksempel på et game objekt:**

```javascript
{
  "id": 1,
  "title": "Matador",
  "description": "Dansk klassiker inspireret af Monopoly.",
  "image": "https://raw.githubusercontent.com/cederdorff/race/master/images/games/matador.webp",
  "genre": "Familie",
  "playtime": 120,
  "players": { "min": 2, "max": 6 },
  "language": "Dansk",
  "rating": 4.0,
  "age": 8,
  "difficulty": "Let",
  "location": "Vestergade",
  "shelf": "A3",
  "available": true,
  "rules": "Spillerne bevæger sig rundt på brættet..."
}
```

**Sammenligning: Movies vs Games**

| Movies           | Games              | Bemærkning            |
| ---------------- | ------------------ | --------------------- |
| `title`          | `title`            | ✅ Samme              |
| `year`           | `playtime`         | ⚠️ Tal (minutter)     |
| `genre` (array)  | `genre` (string)   | ⚠️ Games har ÉN genre |
| `rating`         | `rating`           | ✅ Samme              |
| `director`       | `language`         | ⚠️ Anderledes felt    |
| `actors` (array) | `players` (object) | ⚠️ Object med min/max |
| -                | `age`              | 🆕 Nyt felt           |
| -                | `difficulty`       | 🆕 Nyt felt           |
| -                | `available`        | 🆕 Boolean            |
| -                | `location`         | 🆕 Nyt felt           |
| -                | `shelf`            | 🆕 Nyt felt           |
| `description`    | `description`      | ✅ Samme              |
| -                | `rules`            | 🆕 Længere tekst      |

---

## � Kom i gang

### Trin 1: Opret nyt projekt 📁

Opret et nyt projekt via GitHub som I plejer:

- Repository med `index.html`, `app.js` og `app.css`
- Brug VS Code med Live Server

**💡 Tip:** Du kan genbruge struktur fra Movie App, men du skal tilpasse indholdet!

---

## 🧠 Vigtige overvejelser

### HTML Struktur

**Spørgsmål at stille dig selv:**

- 🤔 Hvilke felter skal vises på game cards? (Se JSON strukturen ovenfor)
- 🤔 Hvordan vises `players` der er et object med `min` og `max`?
- 🤔 Hvilke filtre giver mening for spil? (Genre, spilletid, antal spillere?)
- 🤔 Skal du vise om spillet er `available` (tilgængeligt)?

**💡 Start simpelt:** Få først basis funktionalitet til at virke (hent data, vis cards), tilføj derefter filtre.

---

## 💻 JavaScript Struktur - Forslag

**Du skal selv implementere funktionerne!** Her er et forslag til struktur:

```javascript
// ===== GLOBALE VARIABLER =====
let allGames = []; // Hvad kaldes den i Movie App?

// ===== INITIALISERING =====
function initApp() {
  // Start app - hvad skal der ske?
}

// ===== DATA HENTNING =====
async function getGames() {
  // Hent data fra JSON - husk at URL er anderledes!
  // Gem i allGames variablen
  // Kald andre funktioner (hvilke?)
}

// ===== VISNING =====
function displayGames(games) {
  // Vis alle games - loop gennem og kald displayGame()
}

function displayGame(game) {
  // Vis ÉT game card
  // Husk: game.players er et OBJECT!
}

// ===== FILTRERING =====
function populateGenreDropdown() {
  // Opbyg genre dropdown
  // OBS: game.genre er en STRING (ikke array!)
}

function filterGames() {
  // Filtrer games baseret på søgning, genre, osv.
  // OBS: game.genre skal sammenlignes med === (ikke .includes())
}

// ===== MODAL =====
function showGameModal(game) {
  // Vis game detaljer i modal
  // Hvilke felter har et game? (Se JSON strukturen)
}
```

### ⚠️ Vigtige forskelle fra Movie App:

**1. Genre håndtering:**

```javascript
// Movies: genre er ARRAY
movie.genre.includes("Action"); // ✅ Virker

// Games: genre er STRING
game.genre === "Familie"; // ✅ Virker
game.genre.includes("Familie"); // ❌ Virker måske, men forkert tilgang
```

**2. Players håndtering:**

```javascript
// Movies: actors er ARRAY
movie.actors.join(", "); // ✅ Virker

// Games: players er OBJECT
game.players.min; // ✅ Få minimum spillere
game.players
  .max // ✅ Få maximum spillere
`${game.players.min}-${game.players.max} spillere`; // ✅ Formatering
```

**3. Andre felt-navne:**

- `movie.year` → `game.playtime`
- `movie.director` → `game.language`
- Nye felter: `age`, `difficulty`, `available`, `location`, `shelf`, `rules`

---

## 🎨 CSS - Genbrug og tilpas

**Spørgsmål at overveje:**

- 🤔 Kan du genbruge din Movie App CSS?
- 🤔 Hvilke class-navne skal ændres? (`.movie-card` → `.game-card`)
- 🤔 Skal layoutet tilpasses til nye felter?

**💡 Tip:** Find & Replace i din editor kan hjælpe med at omdøbe classes hurtigt - men tjek altid resultatet!

---

## 🚀 Udvidelsesmuligheder

Når du har basis funktionalitet (hent data, vis cards, søgning), overvej at tilføje:

### **Idéer til avanceret filtrering:**

- 🎲 **Antal spillere:** Filter spil der kan spilles med X spillere (husk: `players` er et object med `min` og `max`)
- 🎯 **Vanskelighed:** Dropdown med "Let", "Mellem", "Svær"
- ✅ **Tilgængelighed:** Checkbox til kun at vise spil hvor `available === true`
- ⏱️ **Spilletid range:** Filter på min/max spilletid

### **Idéer til sortering:**

- 📝 Titel (alfabetisk)
- ⏱️ Spilletid (kortest/længst først)
- ⭐ Rating (højeste/laveste først)
- 🎂 Alder (yngste/ældste først)

**💡 Spørgsmål at stille dig selv:**

- Hvordan sammenligner du tal vs strings i sortering?
- Hvordan håndterer du et `players` object i filtrering?
- Hvordan viser du boolean-værdier (`available`) i UI?

---

## 💡 Arbejdsstrategier

Tre måder at angribe opgaven på:

### **Strategi 1: Fra bunden** 🏗️

Start med tomt projekt og byg funktionalitet op trinvist.

- ✅ Bedst til læring og forståelse
- ⚠️ Tager længere tid

### **Strategi 2: Kopier og tilpas** 📋

Kopier Movie App og tilpas systematisk.

- ✅ Hurtigere at komme i gang
- ⚠️ Let at overse forskelle

### **Strategi 3: Hybrid** 🎯

Kopier struktur, implementer logik selv.

- ✅ God balance
- ✅ Tvinger dig til at tænke over forskelle

**💪 Vælg den strategi der passer dig bedst!**

---

## ✅ Før du går i gang - kan du svare på:

- 🤔 Hvad er forskellen på `movie.genre` og `game.genre`?
- 🤔 Hvordan får du fat i antal spillere fra et game objekt?
- 🤔 Hvilke filtre giver mening for spil vs film?
- 🤔 Hvordan viser du en boolean værdi (`available`) i UI?

**Hvis du kan svare på disse, er du klar!** 🚀

---

## 🎯 Det handler ikke om at kopiere

**Formålet med denne opgave er:**

- ✅ Træne **problemløsning** - ikke bare følge en opskrift
- ✅ Lære at **tilpasse eksisterende kode** til nye krav
- ✅ Forstå **data strukturer** og hvordan de påvirker koden
- ✅ Øve **debugging** når ting ikke virker første gang

**💡 Tip:** Gå langsomt frem. Test ofte. Brug `console.log()` til at inspicere data!

---

## 📚 Hvis du sidder fast

1. **Kig i JSON-filen** - Hvad er strukturen præcist?
2. **Sammenlign med Movie App** - Hvad er anderledes?
3. **Console.log()** - Hvad er værdien af `game.players`?
4. **Test én ting ad gangen** - Få først cards til at vises, tilføj derefter filtre
5. **Spørg en makker** - Forklar hvad du prøver at gøre

**Held og lykke! Du kan sagtens klare det!** 🎮✨
