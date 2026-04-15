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
      "https://www.baaa.dk/media/b5ahrlra/maria-louise-bendixen.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921650330000&format=webp",
    mail: "mlbe@eaaa.dk",
    name: "Maria Louise Bendixen",
    title: "Senior Lecturer",
  },
  {
    id: "fTs84KRoYw5pRZEWCq2Z",
    image:
      "https://www.eaaa.dk/media/mfcpsgy1/rasmus-cederdorf.jpg?width=800&height=450&v=1db97e246f73210",
    mail: "race@eaaa.dk",
    name: "Rasmus Cederdorff",
    title: "Senior Lecturer",
  },
  {
    id: "gCs33KRoYg5pRZEWCq8J",
    image:
      "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen.jpg?width=800&height=450&v=1db9744144491d0",
    mail: "bki@eaaa.dk",
    name: "Birgitte Kirk Iversen",
    title: "Senior Lecturer",
  },
  {
    id: "fjpRTRTjZHwrq3tTLHri",
    image:
      "https://www.baaa.dk/media/5buh1xeo/anne-kirketerp.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921531600000&format=webp",
    mail: "anki@eaaa.dk",
    name: "Anne Kirketerp",
    title: "Head of Department",
  },
  {
    id: "pqzGY1MnHYm3I4Ca79Xn",
    image:
      "https://www.eaaa.dk/media/14qpfeq4/line-skjodt.jpg?width=800&height=450&rnd=133178433559770000",
    mail: "lskj@eaaa.dk",
    name: "Line Skjødt",
    title: "Senior Lecturer & Internship Coordinator",
  },
  {
    id: "HlvRHr58C05guOLl64k5",
    image:
      "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
    mail: "dob@eaaa.dk",
    name: "Dan Okkels Brendstrup",
    title: "Senior Lecturer",
  },
  {
    id: "MlvJJr83C55auHLl64s7",
    image:
      "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?width=800&height=450&v=1da8a5a7a84e370",
    mail: "mnor@eaaa.dk",
    name: "Martin Aagaard Nøhr",
    title: "Lecturer",
  },
  {
    id: "NlvKKr84D66bvIMm75t8",
    image:
      "https://www.eaaa.dk/media/1yfflb3v/lars-boge-eskildsen.jpg?width=850&height=450&v=1dc16997f2dfd40",
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
<section id="person-list" class="movie-grid" aria-label="Personliste">
  <!-- Personer vises her med JavaScript -->
</section>
```

Du må gerne genbruge din eksisterende `movie-grid` styling til denne opgave.

---

## Opgave 2: Vis alle personer med loop

1. Find containeren:

```javascript
const personList = document.querySelector("#person-list");
```

2. Lav en funktion `showPersons()` som:

- tømmer containeren
- looper gennem `persons`
- kalder `showPerson(person)` for hver person

---

## Opgave 3: Lav `showPerson(person)`

Byg HTML med en template literal og indsæt den i DOM'en.

Cardet skal mindst indeholde:

- billede (`person.image`)
- navn (`person.name`)
- titel (`person.title`)
- mail (`person.mail`)

Hint:

```javascript
personList.insertAdjacentHTML("beforeend", html);
```

---

## Opgave 4: Gør mail klikbar

Lav mailen som et link:

```html
<a href="mailto:...">...</a>
```

Brug personens mail i både `href` og tekst.

---

## Opgave 5: Refleksion

Skriv kort i kommentarer i din `app.js`:

1. Hvad var ens mellem movie-opgaven og person-opgaven?
2. Hvad skulle du ændre?
3. Hvorfor er template literals smarte her?

---

## Valgfrie challenges

- Sortér personerne alfabetisk efter navn før de vises
- Tilføj badge til "Head of Department"
- Gør cards pænere med en ny CSS-klasse til personer

---

## Bonus: Eksempel på card-template uden færdig løsning

```javascript
const html = `
  <article class="movie-card">
    <img class="movie-image" src="${person.image}" alt="${person.name}">
    <div class="movie-info">
      <h3>${person.name}</h3>
      <p>${person.title}</p>
      <p><a href="mailto:${person.mail}">${person.mail}</a></p>
    </div>
  </article>
`;
```
