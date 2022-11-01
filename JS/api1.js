var button = document.getElementById("movie-btn");

button.addEventListener("click", populateMovie);

function populateMovie() {
  var userInput = document.querySelector(".user-input");
  var userChoice = userInput.value;

  var completeURL = "https://www.omdbapi.com/?apikey=98b986e7&t=" + userChoice;

  fetch(completeURL)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayResults(data);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to OMDB Api");
    });
}

function displayResults(jsonFile) {
  var title = document.querySelector(".title");
  title.textContent = "Title: " + jsonFile.Title;
  var rated = document.querySelector(".rated");
  rated.textContent = "Rated: " + jsonFile.Rated;
  var ratingLetter = jsonFile.Rated;
  if(ratingLetter === 'G'){
    rated.style.color='green';
  }
  else if(ratingLetter ==='PG'){
    rated.style.color='yellow';
  }
  else if(ratingLetter ==='PG-13'){
    rated.style.color='orange';
  }
  else if(ratingLetter ==='R'){
    rated.style.color='red';
  }
  else{
    rated.style.color='gray';
  }
  var runTime = document.querySelector(".runtime");
  runTime.textContent = "Runtime: " + jsonFile.Runtime;
  var rating = document.querySelector(".rating");
  rating.textContent = "Rating: " + jsonFile.imdbRating;
}

