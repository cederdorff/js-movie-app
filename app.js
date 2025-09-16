// #0: Listen for page load
window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// #1: Initialize the app
function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  getMovies(); // Fetch and display movies
}

// #2: Fetch movies from JSON and display them
async function getMovies() {
  const response = await fetch("./data/movies.json");
  const movies = await response.json();
  displayMovies(movies);
}

// #3: Render all movies in the grid
function displayMovies(movies) {
  document.querySelector("#movie-list").innerHTML = "";
  for (const movie of movies) {
    displayMovie(movie); // Render each movie card -> see step #4
  }
}

// #4: Render a single movie card and add event listeners
function displayMovie(movie) {
  const movieList = document.querySelector("#movie-list");
  movieList.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
      <article class="movie-card" tabindex="0">
        <img src="${movie.image}" alt="Poster of ${movie.title}" class="movie-poster" />
        <div class="movie-info">
          <h3>${movie.title} <span class="movie-year">(${movie.year})</span></h3>
          <p class="movie-genre">${movie.genre.join(", ")}</p>
          <p class="movie-rating">⭐ ${movie.rating}</p>
          <p class="movie-director"><strong>Director:</strong> ${movie.director}</p>
        </div>
      </article>
    `
  );
  movieList.lastElementChild.addEventListener("click", () => showMovieDialog(movie)); // Add click event to show movie details
}

// #5: Show movie details in a modal dialog
function showMovieDialog(movie) {
  document.querySelector("#dialog-content").innerHTML = /*html*/ `
    <img src="${movie.image}" class="movie-poster" />
    <div class="dialog-details">
      <h2>${movie.title} <span class="movie-year">(${movie.year})</span></h2>
      <p class="movie-genre">${movie.genre.join(", ")}</p>
      <p class="movie-rating">⭐ ${movie.rating}</p>
      <p class="movie-director"><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Actors:</strong> ${movie.actors.join(", ")}</p>
      <p class="movie-description">${movie.description}</p>
    </div>
  `;
  document.querySelector("#movie-dialog").showModal();
}
