"use strict";

document.addEventListener("DOMContentLoaded", initApp);

// Global variabel til alle film
let allMovies = [];

// #1: Initialize the app
function initApp() {
  getMovies();

  // Event listeners for alle filtre
  document.querySelector("#search-input").addEventListener("input", filterMovies);
  document.querySelector("#genre-select").addEventListener("change", filterMovies);
  document.querySelector("#sort-select").addEventListener("change", filterMovies);
  document.querySelector("#year-from").addEventListener("input", filterMovies);
  document.querySelector("#year-to").addEventListener("input", filterMovies);
  document.querySelector("#rating-from").addEventListener("input", filterMovies);
  document.querySelector("#rating-to").addEventListener("input", filterMovies);
  document.querySelector("#clear-filters").addEventListener("click", clearAllFilters);
}

// #2: Fetch movies from JSON file
async function getMovies() {
  try {
    const response = await fetch("data/movies.json");
    allMovies = await response.json();
    populateGenreDropdown(); // Udfyld dropdown med genrer fra data
    displayMovies(allMovies);
  } catch (error) {
    console.error("❌ Error loading movies:", error);
  }
}

// #3: Display all movies
function displayMovies(movies) {
  const movieList = document.querySelector("#movie-list");
  movieList.innerHTML = "";

  if (movies.length === 0) {
    movieList.innerHTML = '<p class="no-results">Ingen film matchede dine filtre 😢</p>';
    return;
  }

  for (const movie of movies) {
    displayMovie(movie);
  }
}

// #4: Render a single movie card and add event listeners
function displayMovie(movie) {
  const movieList = document.querySelector("#movie-list");

  const movieHTML = `
    <article class="movie-card" tabindex="0">
      <img src="${movie.image}" 
           alt="Poster of ${movie.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movie.title} <span class="movie-year">(${movie.year})</span></h3>
        <p class="movie-genre">${movie.genre.join(", ")}</p>
        <p class="movie-rating">⭐ ${movie.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movie.director}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", movieHTML);

  // Tilføj click event til den nye card
  const newCard = movieList.lastElementChild;
  newCard.addEventListener("click", function () {
    showMovieModal(movie);
  });

  // Tilføj keyboard support
  newCard.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showMovieModal(movie);
    }
  });
}

// #5: Udfyld genre-dropdown med alle unikke genrer fra data
function populateGenreDropdown() {
  const genreSelect = document.querySelector("#genre-select");
  const genres = new Set();

  // Samle alle unikke genrer fra alle film
  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  // Fjern gamle options undtagen 'Alle genrer'
  genreSelect.innerHTML = '<option value="all">Alle genrer</option>';

  // Sortér genres alfabetisk og tilføj dem som options
  const sortedGenres = Array.from(genres).sort();
  for (const genre of sortedGenres) {
    genreSelect.insertAdjacentHTML("beforeend", `<option value="${genre}">${genre}</option>`);
  }
}

// #6: Vis movie i modal dialog
function showMovieModal(movie) {
  // Byg HTML struktur dynamisk
  document.querySelector("#dialog-content").innerHTML = /*html*/ `
    <img src="${movie.image}" alt="Poster af ${movie.title}" class="movie-poster">
    <div class="dialog-details">
      <h2>${movie.title} <span class="movie-year">(${movie.year})</span></h2>
      <p class="movie-genre">${movie.genre.join(", ")}</p>
      <p class="movie-rating">⭐ ${movie.rating}</p>
      <p><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Actors:</strong> ${movie.actors.join(", ")}</p>
      <p class="movie-description">${movie.description}</p>
    </div>
  `;

  // Åbn modalen
  document.querySelector("#movie-dialog").showModal();
}

// #7: Ryd alle filtre
function clearAllFilters() {
  // Ryd alle input felter
  document.querySelector("#search-input").value = "";
  document.querySelector("#genre-select").value = "all";
  document.querySelector("#sort-select").value = "none";
  document.querySelector("#year-from").value = "";
  document.querySelector("#year-to").value = "";
  document.querySelector("#rating-from").value = "";
  document.querySelector("#rating-to").value = "";

  // Kør filtrering igen (vil vise alle film)
  filterMovies();
}

// #8: Komplet filtrering med alle funktioner
function filterMovies() {
  // Hent alle filter værdier
  const searchValue = document.querySelector("#search-input").value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;
  const sortValue = document.querySelector("#sort-select").value;
  const yearFrom = Number(document.querySelector("#year-from").value) || 0;
  const yearTo = Number(document.querySelector("#year-to").value) || 9999;
  const ratingFrom = Number(document.querySelector("#rating-from").value) || 0;
  const ratingTo = Number(document.querySelector("#rating-to").value) || 10;

  // Start med alle film
  let filteredMovies = allMovies;

  // FILTER 1: Søgetekst
  if (searchValue) {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.title.toLowerCase().includes(searchValue);
    });
  }

  // FILTER 2: Genre
  if (genreValue !== "all") {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.genre.includes(genreValue);
    });
  }

  // FILTER 3: År range
  if (yearFrom > 0 || yearTo < 9999) {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.year >= yearFrom && movie.year <= yearTo;
    });
  }

  // FILTER 4: Rating range
  if (ratingFrom > 0 || ratingTo < 10) {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.rating >= ratingFrom && movie.rating <= ratingTo;
    });
  }

  // SORTERING (altid til sidst)
  if (sortValue === "title") {
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "year") {
    filteredMovies.sort((a, b) => b.year - a.year);
  } else if (sortValue === "rating") {
    filteredMovies.sort((a, b) => b.rating - a.rating);
  }

  displayMovies(filteredMovies);
}
