# RACE 4 - Søgning, Dialog, Sortering & Deployment

## Formål

Formålet med dagens lektion er at færdiggøre jeres Movie App med titel-søgning, genre-filter, detail dialog og deployment, så I kan dele den med venner og familie.

**Mål:**

- Implementere søgefunktion med input event
- Kombinere titel-søgning og genre-filter
- Oprette og style HTML `<dialog>` element
- Bruge `showModal()` og `close()` API
- Håndtere klik-events på dynamisk genereret indhold
- Tilføje simpel sortering (titel, år, rating)
- Deploye deres app til GitHub Pages
- Fejre en færdig Movie App!

**Den store finale:**
I dag bliver jeres app færdig og offentlig. Om få timer har I en live website på internettet som I kan vise frem!

## Forberedelse

- **Færdiggør DAG 3:**
  - Sørg for fetch virker og henter rigtig data
  - Ha' mindst én fungerende genre-filter
  - Test at din app virker i browseren

- **Læs:**
  - [Dialog element på MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) (skim hvordan det virker)
  - [GitHub Pages dokumentation](https://docs.github.com/en/pages/getting-started-with-github-pages) (kort overblik)

### På dagen:

- Åbn dit movie-app projekt fra DAG 3
- Tjek at alt virker før vi bygger videre
- DevTools åben
- GitHub Desktop klar til deployment

## Agenda

**9:00 - 9:30 | Opsamling & Overblik over sidste dag (30 min)**

- Hvem har fungerende fetch og filter?
- Vis og fortæl: Vis jeres genre-filtre
- Quiz: fetch, filter, includes
- Dagens mål: Søgning + Dialog + Live på internettet!
- Motivation: "I dag bliver jeres app færdig og offentlig!"

**9:30 - 10:30 | Søgefunktion + Genre (60 min)**

- Hvorfor søgning? Brugere ved hvad de leder efter
- Genre-filter fra DAG 3 videreføres
- Input event trigger når der skrives
- `.toLowerCase()` og `.includes()` for søgning uden forskel på store/små bogstaver
- Kod med trin-for-trin:
  - HTML: Søgefelt
  - CSS: Stylet søgefelt + kontroller
  - JavaScript: Samlet flow i `applyFiltersAndSort()`
  - JavaScript: Sortering direkte i samme flow-funktion
  - JavaScript: `showMovies()` styrer listevisning og tom-tilstand
- Praktisk øvelse: Implementer og test søgning
- Håndter "Ingen resultater"

**10:30 - 10:45 | Pause **

**10:45 - 12:00 | Dialog-implementering (75 min)**

- Hvad er en dialog? Popup vindue over siden
- HTML `<dialog>` element vs `alert()`
- API-metoder: `showModal()` og `close()`
- Praktisk øvelse del 1: HTML struktur og CSS styling
- Praktisk øvelse del 2: JavaScript klik-events med `showMovie(movie)` og `showMovieDialog(movie)`
- Ensret rating-visning i cards og dialog (`movie-rating`)
- Luk dialog: indbygget Luk-knap (form method="dialog") og ESC

**12:00 - 13:00 | Frokost **

**13:00 - 13:30 | Finpudsning & Sidste Detaljer (30 min)**

- Kodekvalitetstjek: Fjern unødvendige console.logs
- Hold dialog-koden enkel med indbygget luk-funktionalitet
- Tjek rød tråd i funktionerne: `applyFiltersAndSort()` → `showMovies()` → `showMovie()` → `showMovieDialog()`
- Loading-state mens data hentes
- Tilføj sortering i dropdown
- Bløde animationer og transitions
- Sidste CSS-finpudsning

**13:30 - 14:30 | GitHub Pages Deployment (60 min)**

- Hvad er GitHub Pages? Gratis hosting!
- URL format: `https://[username].github.io/movie-app/`
- Trin-for-trin deployment:
  - Commit alle ændringer
  - Push til GitHub
  - Enable GitHub Pages i settings
  - Vent og test
  - Fejlfinding hvis nødvendigt
- Alle skal have deres app live!

**14:30 - 15:00 | Fejring & Afrunding (30 min) **

- Del og fejr: Del jeres live links!
- Vis og fortæl: 5-6 studerende viser deres live app
- Opsamling på forløbet: Hvad har vi lært i 4 dage?
- Feedback runde
- Næste skridt og ressourcer
- Tillykke - I er nu web developers!

## Materialer

**Slides:**

- [JavaScript - 1. semester](https://cederdorff.com/race/slides/javascript-1-semester.pdf)

**Opgaver:**

- [Movie App - DAG 4](movie-app-4.md)
- [Deploy dit website til GitHub Pages](https://www.notion.so/Deploy-dit-website-til-GitHub-Pages-2cba6f1413dc474883b58fdd4eba57bb?pvs=21)

**Eksempel kode:**

- Komplet DAG 4 eksempel: `_exercises/examples/dag4/app.js`
- HTML: `_exercises/examples/dag4/index.html`
- CSS: `_exercises/examples/dag4/style.css`

**Movie App løsning:**

- GitHub (kode): https://github.com/cederdorff/js-movie-app
- GitHub Pages: https://cederdorff.com/js-movie-app/

**Links:**

- Dialog element guide: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
- GitHub Pages docs: https://docs.github.com/en/pages
