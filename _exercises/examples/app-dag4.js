"use strict";

document.addEventListener("DOMContentLoaded", initApp);

const MOVIES_URL = "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];

function initApp() {
  document.querySelector("#search-input").addEventListener("input", applyFilters);
  document.querySelector("#genre-select").addEventListener("change", applyFilters);
  document.querySelector("#sort-select").addEventListener("change", applyFilters);

  getMovies();
}

async function getMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();
  populateGenreSelect();
  applyFilters();
}

function populateGenreSelect() {
  const genreSelect = document.querySelector("#genre-select");
  const genres = new Set();

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  genreSelect.innerHTML = '<option value="all">Alle genrer</option>';

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
  const movieList = document.querySelector("#movie-list");
  const movieCount = document.querySelector("#movie-count");

  movieList.innerHTML = "";
  movieCount.textContent = `Viser ${movies.length} film`;

  if (movies.length === 0) {
    movieList.innerHTML = '<p class="empty">Ingen film matcher din sogning eller genre.</p>';
    return;
  }

  for (const movie of movies) {
    const movieCard = `
      <article class="movie-card" tabindex="0">
        <img src="${movie.image}" alt="Poster af ${movie.title}" class="movie-poster" />
        <div class="movie-info">
          <div class="title-row">
            <h2>${movie.title}</h2>
            <span class="year-badge">(${movie.year})</span>
          </div>
          <p class="genre">${movie.genre.join(", ")}</p>
          <p class="rating-row"><span class="rating-star">★</span> <strong>${movie.rating}</strong></p>
          <p class="director-line"><strong>Director:</strong> ${movie.director}</p>
        </div>
      </article>
    `;

    movieList.insertAdjacentHTML("beforeend", movieCard);

    const newCard = movieList.lastElementChild;
    newCard.addEventListener("click", function () {
      showDetails(movie);
    });
    newCard.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showDetails(movie);
      }
    });
  }
}

function showDetails(movie) {
  const modal = document.querySelector("#movie-modal");
  const modalBody = document.querySelector("#modal-body");

  modalBody.innerHTML = `
    <img src="${movie.image}" alt="Poster af ${movie.title}" class="modal-poster" />
    <div class="modal-title-row">
      <h2>${movie.title}</h2>
      <span class="year-badge">(${movie.year})</span>
    </div>
    <p class="genre">${movie.genre.join(", ")}</p>
    <p class="rating-row"><span class="rating-star">★</span> <strong>${movie.rating}</strong></p>
    <p><strong>Director:</strong> ${movie.director}</p>
    <p><strong>Actors:</strong> ${movie.actors.join(", ")}</p>
    <p class="modal-description">${movie.description}</p>
  `;

  modal.showModal();
}
