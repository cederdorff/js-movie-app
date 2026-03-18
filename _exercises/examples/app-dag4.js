"use strict";

// DAG 4 - Søgning, Modal & Details Example
// Formål: Søgefunktion, vis film details i modal

console.log("🎬 Movie App med søgning starter...");

let allMovies = [];

start();

async function start() {
  console.log("📡 Henter film data...");

  let response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  allMovies = await response.json();

  console.log("✅ Hentet", allMovies.length, "film!");

  showMovies(allMovies);
  setupButtons();
  setupSearch();
  setupModal();
}

function setupButtons() {
  let showAllBtn = document.querySelector("#show-all");
  let showActionBtn = document.querySelector("#show-action");
  let showDramaBtn = document.querySelector("#show-drama");
  let showComedyBtn = document.querySelector("#show-comedy");

  showAllBtn.addEventListener("click", function () {
    removeActiveClass();
    showAllBtn.classList.add("active");
    showMovies(allMovies);
  });

  showActionBtn.addEventListener("click", function () {
    let actionMovies = allMovies.filter(function (movie) {
      return movie.genre.includes("Action");
    });
    removeActiveClass();
    showActionBtn.classList.add("active");
    showMovies(actionMovies);
  });

  showDramaBtn.addEventListener("click", function () {
    let dramaMovies = allMovies.filter(function (movie) {
      return movie.genre.includes("Drama");
    });
    removeActiveClass();
    showDramaBtn.classList.add("active");
    showMovies(dramaMovies);
  });

  showComedyBtn.addEventListener("click", function () {
    let comedyMovies = allMovies.filter(function (movie) {
      return movie.genre.includes("Comedy");
    });
    removeActiveClass();
    showComedyBtn.classList.add("active");
    showMovies(comedyMovies);
  });

  showAllBtn.classList.add("active");
}

function setupSearch() {
  let searchInput = document.querySelector("#search-input");

  searchInput.addEventListener("input", function () {
    let searchTerm = searchInput.value.toLowerCase();

    console.log("Søger efter:", searchTerm);

    if (searchTerm === "") {
      showMovies(allMovies);
      return;
    }

    let filteredMovies = allMovies.filter(function (movie) {
      let title = movie.title.toLowerCase();
      return title.includes(searchTerm);
    });

    console.log("Fandt", filteredMovies.length, "film");
    showMovies(filteredMovies);
  });
}

function setupModal() {
  let modal = document.querySelector("#movie-modal");
  let closeBtn = document.querySelector("#close-modal");

  // Luk med X knap
  closeBtn.addEventListener("click", function () {
    modal.close();
  });

  // Luk når man klikker udenfor
  modal.addEventListener("click", function (event) {
    if (event.target.id === "movie-modal") {
      modal.close();
    }
  });

  // Luk med ESC
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.open) {
      modal.close();
    }
  });
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

  if (movies.length === 0) {
    movieList.innerHTML = '<p style="text-align: center; color: white;">Ingen film matchede 😢</p>';
    return;
  }

  let counter = document.querySelector("#movie-count");
  counter.textContent = `Viser ${movies.length} film`;

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

  // Find kortet vi lige lavede og tilføj click event
  let card = movieList.lastElementChild;
  card.addEventListener("click", function () {
    showDetails(movie);
  });
}

function showDetails(movie) {
  console.log("Viser details for:", movie.title);

  let modal = document.querySelector("#movie-modal");
  let modalBody = document.querySelector("#modal-body");

  let html = `
    <img src="${movie.image}" alt="${movie.title}">
    <h2>${movie.title}</h2>
    <p><strong>📅 År:</strong> ${movie.year}</p>
    <p><strong>⭐ Rating:</strong> ${movie.rating} / 10</p>
    <p><strong>🎭 Genre:</strong> ${movie.genre.join(", ")}</p>
    <p><strong>⏱️ Varighed:</strong> ${movie.runtime} min</p>
    <p><strong>🎬 Instruktør:</strong> ${movie.director}</p>
    <p><strong>🎭 Skuespillere:</strong> ${movie.actors}</p>
    <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid #ddd;">
    <p style="line-height: 1.6;">${movie.plot}</p>
  `;

  modalBody.innerHTML = html;
  modal.showModal();
}

console.log("✅ Script klar!");
