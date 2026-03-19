# JavaScript Movie App

Et 4-dages JavaScript-kursus for begyndere - bygget til multimediedesignstuderende.

## Kursusstruktur

### DAG 1: Klik-tæller og grundprincipper

**Formål:** Lær de helt grundlæggende ting uden arrays eller objekter

- Variabler med const-first tilgang (brug let kun ved reassignment)
- querySelector til at finde elementer
- addEventListener til at reagere på klik
- Byg en simpel klik-tæller

**Eksempel:** Se `_solutions/dag1/app.js`

---

### DAG 2: Arrays, Loops & Objekter

**Formål:** Introducer datastrukturer med forhåndsdefineret data

- Arrays med strenge
- for...of loops
- Introduktion til objekter
- Array af objekter (forhåndsdefineret filmdata)
- Template literals til HTML-generering
- **Bonus:** Introduktion til fetch (valgfri)

**Eksempel:** Se `_solutions/dag2/app.js`

---

### DAG 3: Fetch, JSON & Simpelt Filter

**Formål:** Hent rigtig data og tilføj ÉT filter

- fetch() fra ekstern URL
- async/await mønster
- JSON konvertering
- Array.filter() grundlæggende
- .includes() til at checke arrays
- ÉN genre-filter-knap (ikke kombineret)

**Eksempel:** Se `_solutions/dag3/app.js`

---

### DAG 4: Søgning, Genre, Sortering & Udgivelse

**Formål:** Komplet app med fetch, titel-søgning, genre-filter, sortering og dialog

- Søgefelt med input-event
- Simpel genre-filtrering
- Kombineret søgning + genre
- Simpel sortering (titel, år, rating)
- Dialog med film-detaljer
- Udgivelse med GitHub Pages

**Eksempel:** Se `_solutions/dag4/app.js`

---

## Simplificeringer fra originalen

**Hvad er blevet enklere:**

- Ingen kombinerede filtre (kun én ad gangen)
- Ingen range-filtre (år/rating-sliders)
- Sortering er med som simpel basisfunktion i DAG 4
- Ingen favorit-funktion
- Ingen avanceret dialog-navigation

**Hvorfor simplificeret?**

- Fokus på grundprincipper først
- Ét koncept ad gangen
- Mindre frustrerende for begyndere
- Mere tid til at øve grundprincipper

---

## Projektstruktur

```
js-movie-app/
├── index.html              # Root-demo (slutapp)
├── app.js                  # Fetch + titel-søgning + genre-filter + simpel sortering
├── app.css                 # Root-styling til slutapp
├── _exercises/
│   ├── movie-app-1.md
│   ├── movie-app-2.md
│   ├── movie-app-3.md
│   ├── movie-app-4.md
│   └── examples/
│       ├── dag1/app.js     # DAG 1 eksempel
│       ├── dag1/index.html
│       ├── dag1/style.css
│       ├── dag2/app.js     # DAG 2 eksempel
│       ├── dag2/index.html
│       ├── dag2/style.css
│       ├── dag3/app.js     # DAG 3 eksempel
│       ├── dag3/index.html
│       ├── dag3/style.css
│       ├── dag4/app.js     # DAG 4 eksempel (komplet app!)
│       ├── dag4/index.html
│       └── dag4/style.css
```

---

## Kom i gang

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
# Se eksempler i _solutions/
```

### Kør projektet lokalt:

Projektet er ren HTML/CSS/JS (ingen `package.json`):

1. Åbn `index.html` med Live Server i VS Code
2. Eller servér mappen med en simpel statisk server
3. Appen henter film fra ekstern URL: https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json

`npm run dev` virker ikke i denne repo, da der ikke er npm scripts.

### For Undervisere:

**Klon repo:**

```bash
git clone https://github.com/cederdorff/js-movie-app.git
cd js-movie-app
```

**Åbn eksempler:**

```bash
# Åbn _solutions/ mappen
# Hver dag har sine egne filer (dag-mapper med app.js, index.html og style.css.)
```

---

## Undervisningstips

1. **Vis console.log meget!** Gør det synligt hvad der sker
2. **Start fra ingenting** - lad dem skrive hver linje
3. **Test efter hver ændring** - hvis noget virker, byg videre
4. **Brug debugging-sektioner** - i hver opgavefil
5. **Hold det simpelt** - modstå fristelsen til at tilføje mere

---

## App-funktioner efter dag

| Funktion  | DAG 1-2                      | DAG 3-4                          |
| --------- | ---------------------------- | -------------------------------- |
| **DAG 1** | Klik-tæller                  | Grundprincipper                  |
| **DAG 2** | Arrays & loops               | Liste med forhåndsdefineret data |
| **DAG 3** | Fetch & genre-filter         | ÉN filter-knap                   |
| **DAG 4** | Søgning + sortering + dialog | Komplet app                      |
| **Fokus** | Grundlæggende JavaScript     | API + DOM-manipulation           |

---

## Live-demo

Udgiv til GitHub Pages for at vise resultatet:

**URL-format:** `https://[username].github.io/js-movie-app/`

Se DAG 4-guiden for udgivelsesinstruktioner.

---

## Bidrag

Forslag til forbedringer? Åbn en issue eller en pull request.

---

## Licens

MIT-licens - brug frit til undervisning

---

## Udviklet til

**Multimediedesign studerende på EASJ**  
4-dages JavaScript introduktion  
Fokus: Grundprincipper først, kompleksitet senere

**Feedback?** Skriv til race@eaaa.dk
