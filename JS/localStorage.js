var buttonSave = document.getElementById("movie-btn");

var movieInput = document.querySelector(".user-input");



function storeMovie(array) {
  var currentMovies= JSON.parse(localStorage.getItem("movie"))
  var newMovies;
  if(!currentMovies){
    newMovies=[...array]
    
  }else{
    newMovies=[...currentMovies,...array]
  }
  localStorage.setItem("movie", JSON.stringify(newMovies));
init();
}

buttonSave.addEventListener("click", function (event) {
  var movieHistory = movieInput.value.trim();
  var movieArray = [];

  if (!movieHistory) {
    return;
  }

  movieArray.push(movieHistory);

  storeMovie(movieArray);
  showMovies(array);
  console.log(movieArray);
});

function init() {
  var storedMovies = JSON.parse(localStorage.getItem("movie"));
var movieArray;
  if (storedMovies !== null) {
    movieArray = storedMovies;
  }

  showMovies(movieArray);
}

function showMovies(array) {
  var history = document.querySelector(".history");
  clearHistory(history);
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

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
