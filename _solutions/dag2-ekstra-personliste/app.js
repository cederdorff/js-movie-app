"use strict";

console.log("Person App starter...");

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
    name: "Line Skjodt",
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
    name: "Martin Aagaard Nohr",
    title: "Lecturer",
  },
  {
    id: "NlvKKr84D66bvIMm75t8",
    image:
      "https://www.eaaa.dk/media/1yfflb3v/lars-boge-eskildsen.jpg?width=850&height=450&v=1dc16997f2dfd40",
    mail: "laes@eaaa.dk",
    name: "Lars Boge Eskildsen",
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
