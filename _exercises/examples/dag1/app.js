"use strict";

// MOVIE APP - DAG 1
// I dag lærer vi JavaScript basics med en klik-tæller
// I morgen (DAG 2) udvider vi dette projekt med rigtige film data!

console.log("Movie App - DAG 1 starter...");

// Find HTML elementerne (som i Opgave 5, trin 2)
const countDisplay = document.querySelector("#counter");
const clickButton = document.querySelector("#click-button");
const resetButton = document.querySelector("#reset-button");

// Lav tæller-variablen (som i Opgave 5, trin 3)
let count = 0;

// Event listener på klik-knappen (som i Opgave 5, trin 4)
clickButton.addEventListener("click", function () {
  console.log("Klik!");

  // Tæl op
  count = count + 1;

  // Vis det nye tal
  countDisplay.textContent = count;
});

// Event listener på reset-knappen (som i Opgave 5, trin 5)
resetButton.addEventListener("click", function () {
  console.log("Nulstiller...");

  // Sæt count tilbage til 0
  count = 0;

  // Vis 0 på siden
  countDisplay.textContent = count;
});

console.log("Tæller er klar!");
