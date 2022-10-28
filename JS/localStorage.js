var buttonSave = document.getElementById("movie-btn");

var movieInput = document.querySelector(".user-input");

var movieArray = [];

function storeMovie() {
  localStorage.setItem("movie", JSON.stringify(movieArray));
}

buttonSave.addEventListener("click", function (event) {
  var movieHistory = movieInput.value.trim();

  if (!movieHistory) {
    return;
  }

  movieArray.push(movieHistory);

  storeMovie();
  showMovies();
  console.log(movieArray);
});

function init() {
  var storedMovies = JSON.parse(localStorage.getItem("movie"));

  if (storedMovies !== null) {
    movieArray = storedMovies;
  }

  showMovies();
}

function showMovies() {
  var history = document.querySelector(".history");
  clearHistory(history);
  for (let i = 0; i < movieArray.length; i++) {
    const element = movieArray[i];

    var movieButton = document.createElement("button");
    movieButton.classList.add("btn-movie");
    movieButton.textContent = element;
    console.log(movieButton);

    history.appendChild(movieButton);
  }
}

function clearHistory(history) {
  var buttons = document.querySelectorAll(".btn-movie");
  buttons.forEach((button) => {
    history.removeChild(button);
  });
}

init();
