"use strict";

// MOVIE APP - DAG 2
// I går (DAG 1): Lærte variables, querySelector, addEventListener med click counter
// I dag (DAG 2): Lærer arrays, loops, objects med hardcoded movie data
// I morgen (DAG 3): Tilføjer fetch for at hente rigtig data!

console.log("Movie App - DAG 2 starter...");

// Hardcoded movie data (ingen fetch endnu!)
const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: ["Action", "Sci-Fi"],
    image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: ["Action", "Sci-Fi"],
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genre: ["Crime", "Drama"],
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    genre: ["Drama", "Romance"],
    image:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
];

console.log("Har", movies.length, "film i listen");

// Vis filmene når siden loader
showMovies();

function showMovies() {
  console.log("Viser film...");

  // Find containeren
  const movieList = document.querySelector("#movie-list");

  // Tøm containeren
  movieList.innerHTML = "";

  // Loop gennem alle film
  for (const movie of movies) {
    showMovie(movie);
  }

  console.log("Alle film vist!");
}

function showMovie(movie) {
  // Find containeren
  const movieList = document.querySelector("#movie-list");

  // Lav HTML for denne film
  const html = `
    <div class="movie-card">
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>År: ${movie.year}</p>
      <p>Rating: ${movie.rating}</p>
      <p class="genre">${movie.genre.join(", ")}</p>
    </div>
  `;

  // Tilføj til listen
  movieList.insertAdjacentHTML("beforeend", html);
}

console.log("Script klar!");
