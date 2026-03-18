# 🎬 JavaScript Movie App - Simplified Version

Et 4-dages JavaScript kursus for begyndere - bygget til multimediedesign studerende.

## 📚 Kursus Struktur

### DAG 1: Click Counter Fundamentals

**Formål:** Lær absolute basics uden arrays eller objekter

- Variables og console.log
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

- fetch() fra URL
- async/await pattern
- JSON konvertering
- Array.filter() basics
- .includes() til at checke arrays
- ÉN genre filter-knap (ikke kombineret)

**Eksempel:** Se `_exercises/examples/app-dag3.js`

---

### DAG 4: Søgning, Modal & Deployment

**Formål:** Komplet app med søgning og details

- Søgefelt med input event
- .filter() kombineret med .includes()
- HTML `<dialog>` element til modal
- showModal() / close() API
- GitHub Pages deployment

**Eksempel:** Se `_exercises/examples/app-dag4.js`

---

## 🎯 Simplifications fra Original

**Hvad er blevet enklere:**

- ❌ Ingen kombinerede filtre (kun én ad gangen)
- ❌ Ingen range filters (år/rating sliders)
- ❌ Ingen sortering (rating/år/titel)
- ❌ Ingen favorites funktion
- ❌ Ingen avanceret modal navigation

**Hvorfor simplificeret?**

- Fokus på fundamentals først
- Ét koncept ad gangen
- Mindre frustrerende for begyndere
- Mere tid til at øve basics

---

## 📂 Projekt Struktur

```
js-movie-app/
├── index.html              # Hovedfil (brug dag 4 eksempel)
├── app.js                  # Hovedscript (brug dag 4 eksempel)
├── app.css                 # Hovedstyle (brug dag 4 eksempel)
├── data/
│   └── movies.json         # Film data
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

## 🚀 Quick Start

### For Studerende:

**DAG 1:**

```bash
# Start med tom mappe
mkdir movie-app
cd movie-app
# Følg instruktioner i movie-app-1-simplified.md
```

**DAG 2-4:**

```bash
# Fortsæt fra hvor du slap
# Se eksempler i _exercises/examples/
```

### For Undervisere:

**Clone repo:**

```bash
git clone https://github.com/cederdorff/js-movie-app.git
cd js-movie-app
```

**Switch til simplified version:**

```bash
git checkout simplified-version
```

**Åbn eksempler:**

```bash
# Åbn _exercises/examples/ mappen
# Hver dag har sine egne filer (app-dag1.js, etc.)
```

---

## 🎓 Undervisnings Tips

1. **Vis console.log meget!** Gør det synligt hvad der sker
2. **Start fra ingenting** - lad dem skrive hver linje
3. **Test efter hver ændring** - hvis noget virker, byg videre
4. **Brug debugging sections** - i hver exercise fil
5. **Hold det simpelt** - modstå fristelsen til at tilføje mere

---

## 📊 Sammenligning: Original vs Simplified

| Feature          | Original                          | Simplified            |
| ---------------- | --------------------------------- | --------------------- |
| **DAG 1**        | Variables, arrays, objects, loops | KUN click counter     |
| **DAG 2**        | Fetch + async + JSON samtidigt    | Hardcoded data først  |
| **DAG 3**        | Kombinerede filtre + ranges       | ÉN filter knap        |
| **DAG 4**        | Avanceret modal + favorites       | Basic modal + søgning |
| **Sværhedsgrad** | ⭐⭐⭐⭐⭐                        | ⭐⭐                  |

---

## 🌐 Live Demo

Deploy til GitHub Pages for at vise resultatet:

**URL format:** `https://[username].github.io/js-movie-app/`

Se DAG 4 guide for deployment instruktioner.

---

## 🤝 Bidrag

Forslag til forbedringer? Åbn en issue eller pull request!

---

## 📄 Licens

MIT License - brug frit til undervisning

---

## 👨‍💻 Udviklet til

**Multimediedesign studerende på EASJ**  
4-dages JavaScript introduktion  
Fokus: Fundamentals først, kompleksitet senere

**Feedback?** Skriv til race@eaaa.dk
