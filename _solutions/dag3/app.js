"use strict";

// DAG 3 - Fetch & Genre-filter eksempel
// Formål: Hent data og filtrer på én valgt genre

console.log("Movie App starter...");

const MOVIES_URL = "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];

start();

async function start() {
  console.log("Henter film data...");

  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  console.log("Hentet", allMovies.length, "film!");

  populateGenreSelect();
  showMovies(allMovies);

  document.querySelector("#genre-select").addEventListener("change", applyGenreFilter);
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

function applyGenreFilter() {
  const selectedGenre = document.querySelector("#genre-select").value;

  if (selectedGenre === "all") {
    showMovies(allMovies);
    return;
  }

  const filteredMovies = allMovies.filter(function (movie) {
    return movie.genre.includes(selectedGenre);
  });

  showMovies(filteredMovies);
}

function showMovies(movies) {
  console.log("Viser", movies.length, "film...");

  const movieList = document.querySelector("#movie-list");
  movieList.innerHTML = "";

  // Hvis ingen film
  if (movies.length === 0) {
    movieList.innerHTML = '<p style="text-align: center; color: white;">Ingen film matchede filteret.</p>';
    document.querySelector("#movie-count").textContent = "Viser 0 film";
    return;
  }

  const counter = document.querySelector("#movie-count");
  counter.textContent = `Viser ${movies.length} film`;

  // Loop gennem film
  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const movieList = document.querySelector("#movie-list");

  const html = `
    <article class="movie-card">
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>År: ${movie.year}</p>
      <p>Rating: ${movie.rating}</p>
      <p class="genre">${movie.genre.join(", ")}</p>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}

console.log("Script klar!");
