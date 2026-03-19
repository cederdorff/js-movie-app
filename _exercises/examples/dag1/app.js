"use strict";

// MOVIE APP - DAG 1
// I dag lærer vi JavaScript basics med en klik-tæller
// I morgen (DAG 2) udvider vi dette projekt med rigtige film data!

console.log("Movie App - DAG 1 starter...");

// 1. Find knapperne
const button = document.querySelector("#click-button");
const resetButton = document.querySelector("#reset-button");

// 2. Find tekst elementet
const counterText = document.querySelector("#counter");

// 3. Lav en variabel til at tælle
let count = 0;

// 4. Tilføj event listener til click-knappen
button.addEventListener("click", function () {
  console.log("Knap klikket!");

  // Tæl op
  count = count + 1;

  // Vis det nye tal
  counterText.textContent = count;

  console.log("Count er nu:", count);
});

// 5. Tilføj event listener til reset-knappen
resetButton.addEventListener("click", function () {
  console.log("Nulstiller counter...");

  count = 0;
  counterText.textContent = count;

  console.log("Counter nulstillet!");
});

console.log("Script klar - prøv at klikke!");
