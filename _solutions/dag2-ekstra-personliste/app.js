"use strict";

console.log("Person App starter...");

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
const personList = document.querySelector("#person-list");

showPersons();

function showPersons() {
  personList.innerHTML = "";

  const sortedPersons = [...persons].sort((a, b) =>
    a.name.localeCompare(b.name, "da"),
  );

  for (const person of sortedPersons) {
    showPerson(person);
  }
}

function showPerson(person) {
  const badge =
    person.title === "Head of Department"
      ? '<span class="person-badge">Lead</span>'
      : "";

  const html = /* html */ `
    <article class="movie-card" data-id="${person.id}">
      <img class="movie-image" src="${person.image}" alt="${person.name}">
      <div class="movie-info">
        <h3>${person.name}</h3>
        <p class="person-title">${person.title}</p>
        <p class="person-mail"><a href="mailto:${person.mail}">${person.mail}</a></p>
        ${badge}
      </div>
    </article>
  `;

  personList.insertAdjacentHTML("beforeend", html);
}
