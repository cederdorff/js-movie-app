"use strict";

document.addEventListener("DOMContentLoaded", initApp);

const MOVIES_URL = "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];

function initApp() {
  document.querySelector("#search-input").addEventListener("input", applyFiltersAndSort);
  document.querySelector("#genre-select").addEventListener("change", applyFiltersAndSort);
  document.querySelector("#sort-select").addEventListener("change", applyFiltersAndSort);

  getMovies();
}

async function getMovies() {
  const response = await fetch(MOVIES_URL); // Hent data fra URL'en
  allMovies = await response.json(); // Konverter data til JavaScript array og gem i allMovies variablen
  populateGenreSelect(); // Udfyld genre dropdown baseret på de hentede film
  applyFiltersAndSort(); // Anvend filtre og sortering for at vise filmene
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

function applyFiltersAndSort() {
  const searchValue = document.querySelector("#search-input").value.trim().toLowerCase(); // Hent søgeinput, fjern whitespace og konverter til lowercase
  const selectedGenre = document.querySelector("#genre-select").value; // Hent den valgte genre fra select elementet
  const sortOption = document.querySelector("#sort-select").value; // Hent den valgte sorteringsmulighed

  // Filtrer film baseret på søgeinput og valgt genre
  let filteredMovies = allMovies.filter(function (movie) {
    const matchesTitle = movie.title.toLowerCase().includes(searchValue);
    const matchesGenre = selectedGenre === "all" || movie.genre.includes(selectedGenre);
    return matchesTitle && matchesGenre;
  });

  // Sorter de filtrerede film baseret på den valgte sorteringsmulighed
  if (sortOption === "title") {
    filteredMovies.sort((movieA, movieB) => movieA.title.localeCompare(movieB.title));
  } else if (sortOption === "year") {
    filteredMovies.sort((movieA, movieB) => movieB.year - movieA.year);
  } else if (sortOption === "rating") {
    filteredMovies.sort((movieA, movieB) => movieB.rating - movieA.rating);
  }

  showMovies(filteredMovies);
}

function showMovies(movies) {
  const movieList = document.querySelector("#movie-list");
  const movieCount = document.querySelector("#movie-count");

  movieList.innerHTML = ""; // Nulstil film listen før vi tilføjer de filtrerede og sorterede film
  movieCount.textContent = `Viser ${movies.length} ud af ${allMovies.length} film`;

  if (movies.length === 0) {
    movieList.innerHTML = '<p class="empty">Ingen film matcher din søgning eller genre.</p>';
    return;
  }

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const movieCard = /*html*/ `
      <article class="movie-card" tabindex="0">
        <img src="${movie.image}" alt="Poster af ${movie.title}" class="movie-poster" />
        <div class="movie-info">
          <div class="title-row">
            <h2>${movie.title}</h2>
            <span class="year-badge">(${movie.year})</span>
          </div>
          <p class="genre">${movie.genre.join(", ")}</p>
          <p class="movie-rating">⭐ ${movie.rating}</p>
          <p class="director-line"><strong>Instruktør:</strong> ${movie.director}</p>
        </div>
      </article>
    `;

  const movieList = document.querySelector("#movie-list");
  movieList.insertAdjacentHTML("beforeend", movieCard);

  const newCard = movieList.lastElementChild;
  newCard.addEventListener("click", function () {
    showMovieDialog(movie);
  });
}

function showMovieDialog(movie) {
  const dialog = document.querySelector("#movie-dialog");
  const dialogContent = document.querySelector("#dialog-content");

  dialogContent.innerHTML = /*html*/ `
    <img src="${movie.image}" alt="Poster af ${movie.title}" class="movie-poster">
    <div class="dialog-details">
      <h2>${movie.title} <span class="movie-year">(${movie.year})</span></h2>
      <p class="movie-genre">${movie.genre.join(", ")}</p>
      <p class="movie-rating">⭐ ${movie.rating}</p>
        <p><strong>Instruktør:</strong> ${movie.director}</p>
        <p><strong>Skuespillere:</strong> ${movie.actors.join(", ")}</p>
      <p class="movie-description">${movie.description}</p>
    </div>
  `;

  // Åbn dialogen - showModal() er en built-in browser funktion
  dialog.showModal();
}
