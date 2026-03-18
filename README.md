# JavaScript Movie App

Et 4-dages JavaScript kursus for begyndere - bygget til multimediedesign studerende.

## Kursus Struktur

### DAG 1: Click Counter Fundamentals

**Formål:** Lær absolute basics uden arrays eller objekter

- Variables med const-first tilgang (brug let kun ved reassignment)
- querySelector til at finde elementer
- addEventListener til at reagere på klik
- Byg en simpel click counter

**Eksempel:** Se `_exercises/examples/app-dag1.js`

---

### DAG 2: Arrays, Loops & Objects

**Formål:** Introducer data strukturer med hardcoded data

- Arrays med strings
- for...of loops
- Objects introduction
- Array af objects (hardcoded film data)
- Template literals til HTML generation
- **Bonus:** fetch introduction (valgfri)

**Eksempel:** Se `_exercises/examples/app-dag2.js`

---

### DAG 3: Fetch, JSON & Simpel Filter

**Formål:** Hent rigtig data og tilføj ÉN filter

- fetch() fra ekstern URL
- async/await pattern
- JSON konvertering
- Array.filter() basics
- .includes() til at checke arrays
- ÉN genre filter-knap (ikke kombineret)

**Eksempel:** Se `_exercises/examples/app-dag3.js`

---

### DAG 4: Søgning, Genre, Sortering & Deployment

**Formål:** Komplet app med fetch, title-søgning, genre-filter, sortering og modal

- Søgefelt med input event
- Simpel genre-filtrering
- Kombineret søgning + genre
- Simpel sortering (titel, år, rating)
- Modal med film-detaljer
- GitHub Pages deployment

**Eksempel:** Se `_exercises/examples/app-dag4.js`

---

## Simplifications fra Original

**Hvad er blevet enklere:**

- Ingen kombinerede filtre (kun én ad gangen)
- Ingen range filters (år/rating sliders)
- Sortering er med som simpel basisfunktion i DAG 4
- Ingen favorites funktion
- Ingen avanceret modal navigation

**Hvorfor simplificeret?**

- Fokus på fundamentals først
- Ét koncept ad gangen
- Mindre frustrerende for begyndere
- Mere tid til at øve basics

---

## Projekt Struktur

```
js-movie-app/
├── index.html              # Root demo (slutapp)
├── app.js                  # Fetch + title-søgning + genre-filter + simpel sortering
├── app.css                 # Root styling til slutapp
├── _exercises/
│   ├── movie-app-1-simplified.md
│   ├── movie-app-2-simplified.md
│   ├── movie-app-3-simplified.md
│   ├── movie-app-4-simplified.md
│   └── examples/
│       ├── app-dag1.js     # DAG 1 eksempel
│       ├── index-dag1.html
│       ├── style-dag1.css
│       ├── app-dag2.js     # DAG 2 eksempel
│       ├── index-dag2.html
│       ├── style-dag2.css
│       ├── app-dag3.js     # DAG 3 eksempel
│       ├── index-dag3.html
│       ├── style-dag3.css
│       ├── app-dag4.js     # DAG 4 eksempel (komplet app!)
│       ├── index-dag4.html
│       └── style-dag4.css
```

---

## Quick Start

### For Studerende:

**DAG 1:**

```bash
# Start med tom mappe
mkdir movie-app
cd movie-app
# Følg instruktioner i movie-app-1.md
```

**DAG 2-4:**

```bash
# Fortsæt fra hvor du slap
# Se eksempler i _exercises/examples/
```

### Kør projektet lokalt:

Projektet er ren HTML/CSS/JS (ingen `package.json`):

1. Åbn `index.html` med Live Server i VS Code
2. Eller servér mappen med en simpel statisk server
3. Appen henter film fra ekstern URL: https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json

`npm run dev` virker ikke i denne repo, da der ikke er npm scripts.

### For Undervisere:

**Clone repo:**

```bash
git clone https://github.com/cederdorff/js-movie-app.git
cd js-movie-app
```

**Åbn eksempler:**

```bash
# Åbn _exercises/examples/ mappen
# Hver dag har sine egne filer (app-dag1.js, etc.)
```

---

## Undervisnings Tips

1. **Vis console.log meget!** Gør det synligt hvad der sker
2. **Start fra ingenting** - lad dem skrive hver linje
3. **Test efter hver ændring** - hvis noget virker, byg videre
4. **Brug debugging sections** - i hver exercise fil
5. **Hold det simpelt** - modstå fristelsen til at tilføje mere

---

## App funktioner efter dag

| Feature   | DAG 1-2                     | DAG 3-4                  |
| --------- | --------------------------- | ------------------------ |
| **DAG 1** | Click counter               | Counter basics           |
| **DAG 2** | Arrays & loops              | Liste med hardcoded data |
| **DAG 3** | Fetch & genre filter        | ÉN filter knap           |
| **DAG 4** | Søgning + sortering + modal | Komplet app              |
| **Fokus** | Grundlæggende JavaScript    | API + DOM manipulation   |

---

## Live Demo

Deploy til GitHub Pages for at vise resultatet:

**URL format:** `https://[username].github.io/js-movie-app/`

Se DAG 4 guide for deployment instruktioner.

---

## Bidrag

Forslag til forbedringer? Åbn en issue eller pull request!

---

## Licens

MIT License - brug frit til undervisning

---

## Udviklet til

**Multimediedesign studerende på EASJ**  
4-dages JavaScript introduktion  
Fokus: Fundamentals først, kompleksitet senere

**Feedback?** Skriv til race@eaaa.dk
