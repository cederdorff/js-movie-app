// #0: Listen for page load
window.addEventListener("load", initApp); // When the page is loaded, run initApp function

let allMovies = []; // Global array to hold all movies

// #1: Initialize the app
function initApp() {
  console.log("initApp: app.js is running 🎉");
  getMovies();
  document.querySelector("#search-input").addEventListener("input", filterMovies);
  document.querySelector("#genre-select").addEventListener("change", filterMovies);
  document.querySelector("#sort-select").addEventListener("change", filterMovies);
}

// #2: Fetch movies from JSON and display them
async function getMovies() {
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  allMovies = await response.json();
  populateGenreDropdown();
  displayMovies(allMovies);
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
    console.log(`🎬 Klik på: "${movie.title}"`);
    showMovieDetails(movie);
  });

  // Tilføj keyboard support
  newCard.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showMovieDetails(movie);
    }
  });
}

// #5: Kombineret søgning, genre og sortering
function filterMovies() {
  const searchValue = document.querySelector("#search-input").value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;
  const sortValue = document.querySelector("#sort-select").value;

  // Start med alle movies
  let filteredMovies = allMovies;

  // TRIN 1: Filtrer på søgetekst
  if (searchValue) {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.title.toLowerCase().includes(searchValue);
    });
  }

  // TRIN 2: Filtrer på genre
  if (genreValue !== "all") {
    filteredMovies = filteredMovies.filter(movie => {
      return movie.genre.includes(genreValue);
    });
  }

  // TRIN 3: Sorter resultater
  if (sortValue === "title") {
    filteredMovies.sort((movieA, movieB) => movieA.title.localeCompare(movieB.title)); // Alphabetisk A-Å
  } else if (sortValue === "year") {
    filteredMovies.sort((movieA, movieB) => movieB.year - movieA.year); // Nyeste først
  } else if (sortValue === "rating") {
    filteredMovies.sort((movieA, movieB) => movieB.rating - movieA.rating); // Højeste først
  }

  displayMovies(filteredMovies);
}

// #6: Udfyld genre-dropdown med alle unikke genrer
function populateGenreDropdown() {
  const genreSelect = document.querySelector("#genre-select");
  const genres = new Set();

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  genreSelect.innerHTML = '<option value="all">Alle genrer</option>';

  const sortedGenres = Array.from(genres).sort();
  for (const genre of sortedGenres) {
    genreSelect.insertAdjacentHTML("beforeend", `<option value="${genre}">${genre}</option>`);
  }
}

// #7: Vis movie detaljer (midlertidig løsning med alert)
function showMovieDetails(movie) {
  console.log("📊 Viser detaljer for:", movie.title);

  // Vis i alert (midlertidig løsning)
  const movieInfo = `🎬 ${movie.title} (${movie.year})
🎭 ${movie.genre.join(", ")}
⭐ Rating: ${movie.rating}
🎯 Instruktør: ${movie.director}
👥 Skuespillere: ${movie.actors.join(", ")}

📝 ${movie.description}`;

  alert(movieInfo);

  // TODO: Næste gang laver vi modal dialog!
}
