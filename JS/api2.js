var button = document.querySelector(".random-button");
var errorMessage = document.querySelector(".error-msg")

button.addEventListener("click", populateRandom);

function populateRandom() {
    var getActivity = "https://www.boredapi.com/api/activity/"

    fetch(getActivity)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayResults(data);
        });
      } else {
        errorMessage.textContent = "Error: " + response.statusText
      }
    })
    .catch(function (error) {
      errorMessage.textContent = "⚠️Unable to connect to Bored Api⚠️"
    });

    function displayResults(jsonFile) {
        var activity = document.querySelector(".activity");
        activity.textContent = jsonFile.activity;
      }
      
}
