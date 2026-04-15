# DAG 2 EKSTRA - Personliste med Arrays, Objects & Template Literals

## Formål

I denne ekstraopgave skal du gøre **præcis det samme flow** som i Movie App-opgaven, men med et nyt datasæt: personer.

**Du træner igen:**

- Arrays med objects
- `for...of` loops
- Template literals
- `insertAdjacentHTML()`
- Funktioner til rendering

---

## Før du starter: Branch ud

Lav opgaven på en ny branch, så du kan eksperimentere uden at påvirke din main.

**Vigtigt først:** Commit og push dine nuværende ændringer, før du laver en ny branch.

I GitHub Desktop:

1. Skriv en commit-besked, fx `DAG 2 færdig før ekstraopgave`
2. Klik **Commit to main**
3. Klik **Push origin**

Forslag til branch-navn:

- `dag2-ekstra-personliste`

I GitHub Desktop:

1. Klik på current branch
2. Vælg **New Branch**
3. Navngiv branchen `dag2-ekstra-personliste`
4. Klik **Create Branch**

Når opgaven er færdig, commit dine ændringer på branchen.

---

## Opgave 0: Opret en `const persons` JavaScript-liste

Indsæt dette i din `app.js` som en variabel:

```javascript
const persons = [
  {
    id: "ZfPTVEMQKf9vhNiUh0bj",
    image:
      "https://raw.githubusercontent.com/cederdorff/race/master/images/users/mlbe.webp",
    mail: "mlbe@eaaa.dk",
    name: "Maria Louise Bendixen",
    title: "Senior Lecturer",
  },
  {
    id: "fTs84KRoYw5pRZEWCq2Z",
    image:
      "https://raw.githubusercontent.com/cederdorff/race/master/images/users/race.webp",
    mail: "race@eaaa.dk",
    name: "Rasmus Cederdorff",
    title: "Senior Lecturer",
  },
  {
    id: "gCs33KRoYg5pRZEWCq8J",
    image:
      "https://raw.githubusercontent.com/cederdorff/race/master/images/users/bki.webp",
    mail: "bki@eaaa.dk",
    name: "Birgitte Kirk Iversen",
    title: "Senior Lecturer",
  },
  {
    id: "fjpRTRTjZHwrq3tTLHri",
    image:
      "https://raw.githubusercontent.com/cederdorff/race/master/images/users/anki.webp",
    mail: "anki@eaaa.dk",
    name: "Anne Kirketerp",
    title: "Head of Department",
  },
  {
    id: "pqzGY1MnHYm3I4Ca79Xn",
    image:
      "https://raw.githubusercontent.com/cederdorff/race/master/images/users/lskj.webp",
    mail: "lskj@eaaa.dk",
    name: "Line Skjødt",
    title: "Senior Lecturer & Internship Coordinator",
  },
  {
    id: "HlvRHr58C05guOLl64k5",
    image:
      "https://raw.githubusercontent.com/cederdorff/race/master/images/users/dob.webp",
    mail: "dob@eaaa.dk",
    name: "Dan Okkels Brendstrup",
    title: "Senior Lecturer",
  },
  {
    id: "MlvJJr83C55auHLl64s7",
    image:
      "https://raw.githubusercontent.com/cederdorff/race/master/images/users/mnor.webp",
    mail: "mnor@eaaa.dk",
    name: "Martin Aagaard Nøhr",
    title: "Lecturer",
  },
  {
    id: "NlvKKr84D66bvIMm75t8",
    image:
      "https://raw.githubusercontent.com/cederdorff/race/master/images/users/laes.webp",
    mail: "laes@eaaa.dk",
    name: "Lars Bøge Eskildsen",
    title: "Senior Lecturer",
  },
];
```

---

## Opgave 1: Klargør HTML til personer

I din `index.html` skal du have en sektion til person-cards:

```html
<section id="person-list" class="person-grid" aria-label="Personliste">
  <!-- Personer vises her med JavaScript -->
</section>
```

---

## Opgave 2: Opdater CSS så det matcher person-cards

I denne ekstraopgave skal du **erstatte** movie-card CSS'en med person-card CSS.

Det vil sige: brug `person-grid`, `person-card`, `person-image` og `person-info` i stedet for `movie-grid`, `movie-card`, `movie-image` og `movie-info`.

Tilføj/erstat disse klasser i din `app.css`:

```css
.person-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem 0;
}

@media (min-width: 600px) {
  .person-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 992px) {
  .person-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.person-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
}

.person-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}

.person-info {
  padding: 1rem;
}

.person-info h3 {
  color: #ffd700;
  margin-bottom: 0.4rem;
}
```

Tip: Den hurtigste vej er at copy/paste din movie-card CSS og omdøbe klasserne til person-klasser.

---

## Opgave 3: Vis alle personer med loop

1. Find containeren:

```javascript
const personList = document.querySelector("#person-list");
```

2. Lav en funktion `showPersons()` som:

- tømmer containeren
- looper gennem `persons`
- kalder `showPerson(person)` for hver person

---

## Opgave 4: Lav `showPerson(person)`

Byg HTML med en template literal og indsæt den i DOM'en.

Cardet skal mindst indeholde:

- billede (`person.image`)
- navn (`person.name`)
- titel (`person.title`)
- mail (`person.mail`)

Brug klasser som matcher din CSS, fx `person-card`, `person-image` og `person-info`.

Hint:

```javascript
personList.insertAdjacentHTML("beforeend", html);
```

---

## Opgave 5: Gør mail klikbar

Lav mailen som et link:

```html
<a href="mailto:...">...</a>
```

Brug personens mail i både `href` og tekst.

---

## Opgave 6: Refleksion

Skriv kort i kommentarer i din `app.js`:

1. Hvad var ens mellem movie-opgaven og person-opgaven?
2. Hvad skulle du ændre?
3. Hvorfor er template literals smarte her?

---

## Valgfrie challenges

- Sortér personerne alfabetisk efter navn før de vises
- Tilføj badge til "Head of Department"
- Tilføj hover-effekt på `.person-card`

---

## Bonus: Eksempel på card-template uden færdig løsning

```javascript
const html = `
  <article class="person-card">
    <img class="person-image" src="${person.image}" alt="${person.name}">
    <div class="person-info">
      <h3>${person.name}</h3>
      <p>${person.title}</p>
      <p><a href="mailto:${person.mail}">${person.mail}</a></p>
    </div>
  </article>
`;
```
