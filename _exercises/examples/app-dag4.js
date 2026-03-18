"use strict";

// DAG 4 - Søgning, Modal & Details Example
// Formål: Søgefunktion, vis film details i modal

console.log("Movie App med sogning starter...");

const MOVIES_URL = "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];

start();

async function start() {
  console.log("Henter film data...");

  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  console.log("Hentet", allMovies.length, "film!");

  setupFilters();
  populateGenreSelect();
  applyFilters();
}

function setupFilters() {
  document.querySelector("#search-input").addEventListener("input", applyFilters);
  document.querySelector("#genre-select").addEventListener("change", applyFilters);
  document.querySelector("#sort-select").addEventListener("change", applyFilters);
}

function populateGenreSelect() {
  const genreSelect = document.querySelector("#genre-select");
  const genres = new Set();

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  const sortedGenres = [...genres].sort((a, b) => a.localeCompare(b));
  for (const genre of sortedGenres) {
    genreSelect.insertAdjacentHTML("beforeend", `<option value="${genre}">${genre}</option>`);
  }
}

function applyFilters() {
  const searchTerm = document.querySelector("#search-input").value.trim().toLowerCase();
  const selectedGenre = document.querySelector("#genre-select").value;
  const sortOption = document.querySelector("#sort-select").value;

  let filteredMovies = allMovies.filter(function (movie) {
    const matchesTitle = movie.title.toLowerCase().includes(searchTerm);
    const matchesGenre = selectedGenre === "all" || movie.genre.includes(selectedGenre);
    return matchesTitle && matchesGenre;
  });

  filteredMovies = sortMovies(filteredMovies, sortOption);
  showMovies(filteredMovies);
}

function sortMovies(movies, sortOption) {
  const sortedMovies = [...movies];

  if (sortOption === "title") {
    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === "year") {
    sortedMovies.sort((a, b) => b.year - a.year);
  } else if (sortOption === "rating") {
    sortedMovies.sort((a, b) => b.rating - a.rating);
  }

  return sortedMovies;
}

function showMovies(movies) {
  console.log("Viser", movies.length, "film...");

  const movieList = document.querySelector("#movie-list");
  movieList.innerHTML = "";

  if (movies.length === 0) {
    movieList.innerHTML = '<p style="text-align: center; color: white;">Ingen film matchede filteret.</p>';
    document.querySelector("#movie-count").textContent = "Viser 0 film";
    return;
  }

  const counter = document.querySelector("#movie-count");
  counter.textContent = `Viser ${movies.length} film`;

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const movieList = document.querySelector("#movie-list");

  const html = `
    <div class="movie-card" tabindex="0">
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>Ar: ${movie.year}</p>
      <p>Rating: ${movie.rating}</p>
      <p class="genre">${movie.genre.join(", ")}</p>
    </div>
  `;

  movieList.insertAdjacentHTML("beforeend", html);

  // Find kortet vi lige lavede og tilføj click event
  const card = movieList.lastElementChild;
  card.addEventListener("click", function () {
    showDetails(movie);
  });
  card.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showDetails(movie);
    }
  });
}

function showDetails(movie) {
  console.log("Viser details for:", movie.title);

  const modal = document.querySelector("#movie-modal");
  const modalBody = document.querySelector("#modal-body");

  const html = `
    <img src="${movie.image}" alt="${movie.title}">
    <h2>${movie.title}</h2>
    <p><strong>Ar:</strong> ${movie.year}</p>
    <p><strong>Rating:</strong> ${movie.rating} / 10</p>
    <p><strong>Genre:</strong> ${movie.genre.join(", ")}</p>
    <p><strong>Instruktor:</strong> ${movie.director}</p>
    <p><strong>Skuespillere:</strong> ${movie.actors.join(", ")}</p>
    <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid #ddd;">
    <p style="line-height: 1.6;">${movie.description}</p>
  `;

  modalBody.innerHTML = html;
  modal.showModal();
}

console.log("Script klar!");
