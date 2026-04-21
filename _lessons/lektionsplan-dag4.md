# RACE 4 - Søgning, Dialog, Sortering & Udgivelse

## Formål

Formålet med denne lektion er at færdiggøre din Movie App med titel-søgning, genre-filter, detaljedialog og udgivelse, så du kan dele den med venner og familie. Samtidig er formålet, at du nu har en god base og baggrund for at kunne lave dit spilcafe-projekt.

**Mål:**

- Implementere søgefunktion med input-event
- Kombinere titel-søgning og genre-filter
- Oprette og style HTML `<dialog>` element
- Bruge `showModal()` og `close()` API
- Håndtere klik-events på dynamisk genereret indhold
- Tilføje simpel sortering (titel, år, rating)
- Udgive din app på GitHub Pages

**Progression i forløbet:**

- **DAG 1:** Movie App setup + Klik-tæller (variabler, events)
- **DAG 2:** Arrays, loops, hardcoded movie data
- **DAG 3:** Fetch + simpel genre-filter
- **DAG 4:** Titel-søgning + dialog + sortering + deployment ← DU ER HER

## Forberedelse

- [Færdiggør øvelsen fra DAG 3](../_exercises/movie-app-3.md)

- **Læs:**
  - [Dialog element på MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) (skim hvordan det virker)
  - [GitHub Pages dokumentation](https://docs.github.com/en/pages/getting-started-with-github-pages) (kort overblik)

## Agenda

<details>
<summary><strong>1. Recap og overblik over sidste dag</strong></summary>

- Hvem har fungerende fetch og filter?
- Vis og fortæl: Vis dine genre-filtre
- Quiz: fetch, filter, includes
- Dagens mål: Søgning + dialog + live på internettet!
- Motivation: "I dag bliver din app færdig og offentlig!"

</details>

<details>
<summary><strong>2. Søgefunktion + kombinerede filtre</strong></summary>

- Hvorfor søgning? Brugere ved ofte hvad de leder efter
- Genre-filter fra DAG 3 videreføres
- Input-event trigger når der skrives
- `.toLowerCase()` og `.includes()` for søgning uden forskel på store/små bogstaver
- Kod trin-for-trin: HTML søgefelt og kontroller
- Saml logikken i `applyFiltersAndSort()`
- Lad `showMovies()` styre listevisning og tom-tilstand
- Praktisk øvelse: Implementer og test søgning
- Håndter "Ingen resultater"

</details>

<details>
<summary><strong>3. Dialog-implementering</strong></summary>

- Hvad er en dialog? Et pop op-vindue over siden
- HTML `<dialog>` element vs `alert()`
- API-metoder: `showModal()` og `close()`
- Praktisk øvelse del 1: HTML struktur og CSS styling
- Praktisk øvelse del 2: JavaScript klik-events med `showMovie(movie)` og `showMovieDialog(movie)`
- Ensret rating-visning i cards og dialog (`movie-rating`)
- Luk dialog med indbygget Luk-knap (`form method="dialog"`) og ESC

</details>

<details>
<summary><strong>4. Sortering og finpudsning</strong></summary>

- Tilføj sortering i dropdown (titel, år, rating)
- Hold flowet enkelt: `applyFiltersAndSort()` → `showMovies()` → `showMovie()` → `showMovieDialog()`
- Kodekvalitetstjek: Fjern unødvendige `console.log()`
- Tilføj indlæsnings-tilstand mens data hentes
- Bløde animationer og overgange
- Sidste CSS-finpudsning

</details>

<details>
<summary><strong>5. Udgivelse på GitHub Pages</strong></summary>

- Hvad er GitHub Pages? Gratis hosting
- URL-format: `https://[username].github.io/movie-app/`
- Trin-for-trin udgivelse:
- Commit alle ændringer
- Push til GitHub
- Aktivér GitHub Pages i indstillinger
- Vent og test
- Fejlfinding hvis nødvendigt
- Udgiv din app, så den er online

</details>

<details>
<summary><strong>6. Fejring og afrunding</strong></summary>

- Del og fejr: Del dine links
- Vis og fortæl: Vis din live app, hvis du har lyst
- Opsamling på forløbet: Hvad har vi lært i 4 dage?
- Feedback-runde
- Næste skridt og ressourcer
- Tillykke - du er nu web developer!

</details>

## Materialer

**Slides:**

- [JavaScript - 1. semester](https://cederdorff.com/race/slides/javascript-1-semester.pdf)

**Opgaver:**

- [Movie App - DAG 4](../_exercises/movie-app-4.md)
- [Deploy dit website til GitHub Pages](https://www.notion.so/Deploy-dit-website-til-GitHub-Pages-2cba6f1413dc474883b58fdd4eba57bb?pvs=21)

**Movie App løsning:**

- GitHub (kode): https://github.com/cederdorff/js-movie-app
- GitHub Pages: https://cederdorff.com/js-movie-app/

**Links:**

- Dialog element guide: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
- GitHub Pages docs: https://docs.github.com/en/pages
