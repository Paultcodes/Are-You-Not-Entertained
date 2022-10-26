//OMDb API

var baseURL = "http://www.omdbapi.com/"
var apiKeyString = "&apikey=90db5d26&"
var movieName = 'batman'
var queryString 
var queryString = `?t=${movieName}`

var completeURL = baseURL + queryString + apiKeyString;
console.log(completeURL);



