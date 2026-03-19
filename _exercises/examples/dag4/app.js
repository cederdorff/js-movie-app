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
  const genreSelect = document.querySelector("#genre-select"); // Find genre select element i HTML'en
  const genres = new Set(); // Set bruges til at sikre unikke genrer

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  const genreArray = Array.from(genres); // Konverter Set til Array for at kunne sortere

  genreArray.sort((movieA, movieB) => movieA.localeCompare(movieB)); // Sorter genrer alfabetisk
  for (const genre of genreArray) {
    genreSelect.insertAdjacentHTML("beforeend", `<option value="${genre}">${genre}</option>`); // Tilføj genrer som options i select elementet
  }
}

function applyFilters() {
  const searchValue = document.querySelector("#search-input").value.trim().toLowerCase(); // Hent søgeinput, fjern whitespace og konverter til lowercase
  const selectedGenre = document.querySelector("#genre-select").value; // Hent den valgte genre fra select elementet
  const sortOption = document.querySelector("#sort-select").value; // Hent den valgte sorteringsmulighed

  let filteredMovies = allMovies.filter(function (movie) {
    const matchesTitle = movie.title.toLowerCase().includes(searchValue);
    const matchesGenre = selectedGenre === "all" || movie.genre.includes(selectedGenre);
    return matchesTitle && matchesGenre;
  });

  filteredMovies = sortMovies(filteredMovies, sortOption);
  showMovies(filteredMovies);
}

function sortMovies(movies, sortOption) {
  if (sortOption === "title") {
    movies.sort((movieA, movieB) => movieA.title.localeCompare(movieB.title));
  } else if (sortOption === "year") {
    movies.sort((movieA, movieB) => movieB.year - movieA.year);
  } else if (sortOption === "rating") {
    movies.sort((movieA, movieB) => movieB.rating - movieA.rating);
  }

  return movies;
}

function showMovies(movies) {
  const movieList = document.querySelector("#movie-list");
  const movieCount = document.querySelector("#movie-count");

  movieList.innerHTML = "";
  movieCount.textContent = `Viser ${movies.length} ud af ${allMovies.length} film`;

  if (movies.length === 0) {
    movieList.innerHTML = '<p class="empty">Ingen film matcher din søgning eller genre.</p>';
    return;
  }

  for (const movie of movies) {
    const movieCard = /*html*/ `
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
  }
}

function showDetails(movie) {
  const modal = document.querySelector("#movie-modal");
  const modalBody = document.querySelector("#modal-body");

  modalBody.innerHTML = /*html*/ `
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
