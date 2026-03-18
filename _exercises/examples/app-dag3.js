"use strict";

// DAG 3 - Fetch & Filter Example
// Formål: Hent rigtig data og tilføj én simpel filter

console.log("🎬 Movie App starter...");

// Global variabel til alle film
let allMovies = [];

// Start - hent data
start();

async function start() {
  console.log("📡 Henter film data...");

  // Hent data fra URL
  let response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");

  // Konvertér til JavaScript
  allMovies = await response.json();

  console.log("✅ Hentet", allMovies.length, "film!");

  // Vis alle film
  showMovies(allMovies);

  // Setup knapperne
  setupButtons();
}

function setupButtons() {
  // Find knapperne
  let showAllBtn = document.querySelector("#show-all");
  let showActionBtn = document.querySelector("#show-action");
  let showDramaBtn = document.querySelector("#show-drama");
  let showComedyBtn = document.querySelector("#show-comedy");

  // Vis alle
  showAllBtn.addEventListener("click", function () {
    console.log("Viser alle film");
    removeActiveClass();
    showAllBtn.classList.add("active");
    showMovies(allMovies);
  });

  // Vis Action
  showActionBtn.addEventListener("click", function () {
    console.log("Filtrerer til Action...");

    let actionMovies = allMovies.filter(function (movie) {
      return movie.genre.includes("Action");
    });

    console.log("Fandt", actionMovies.length, "Action film");
    removeActiveClass();
    showActionBtn.classList.add("active");
    showMovies(actionMovies);
  });

  // Vis Drama
  showDramaBtn.addEventListener("click", function () {
    console.log("Filtrerer til Drama...");

    let dramaMovies = allMovies.filter(function (movie) {
      return movie.genre.includes("Drama");
    });

    console.log("Fandt", dramaMovies.length, "Drama film");
    removeActiveClass();
    showDramaBtn.classList.add("active");
    showMovies(dramaMovies);
  });

  // Vis Comedy
  showComedyBtn.addEventListener("click", function () {
    console.log("Filtrerer til Comedy...");

    let comedyMovies = allMovies.filter(function (movie) {
      return movie.genre.includes("Comedy");
    });

    console.log("Fandt", comedyMovies.length, "Comedy film");
    removeActiveClass();
    showComedyBtn.classList.add("active");
    showMovies(comedyMovies);
  });

  // Sæt "Vis alle" som active ved start
  showAllBtn.classList.add("active");
}

function removeActiveClass() {
  document.querySelectorAll(".filter-section button").forEach(function (btn) {
    btn.classList.remove("active");
  });
}

function showMovies(movies) {
  console.log("Viser", movies.length, "film...");

  let movieList = document.querySelector("#movie-list");
  movieList.innerHTML = "";

  // Hvis ingen film
  if (movies.length === 0) {
    movieList.innerHTML = '<p style="text-align: center; color: white;">Ingen film matchede filteret 😢</p>';
    return;
  }

  // Vis counter
  let counter = document.querySelector("#movie-count");
  counter.textContent = `Viser ${movies.length} film`;

  // Loop gennem film
  for (let movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  let movieList = document.querySelector("#movie-list");

  let html = `
    <div class="movie-card">
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>📅 ${movie.year}</p>
      <p>⭐ ${movie.rating}</p>
      <p class="genre">${movie.genre.join(", ")}</p>
    </div>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}

console.log("✅ Script klar!");
