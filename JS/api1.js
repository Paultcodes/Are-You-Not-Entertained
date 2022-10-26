//OMDb API


// console.log(completeURL);

addEventListener("click", populateMovie)

function populateMovie(){
    var baseURL = "https://www.omdbapi.com/"
    var apiKeyString = "&apikey=90db5d26&"
    var movieName = 'batman'
    var queryString 
    var queryString = `?t=${movieName}`

    var button = document.getElementById("movie-btn");

    var completeURL = baseURL + queryString + apiKeyString;
    // var userChoice = userInput.value
    
    fetch(completeURL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        displayResults(data);
    })
}

populateMovie();

function displayResults(jsonFile){
    console.log(jsonFile.Title)
    console.log(jsonFile.Rated)
    console.log(jsonFile.Runtime)
    console.log(jsonFile.imdbRating)
}
