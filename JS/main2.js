

function clearSearches(e){
    e.preventDefault();
    localStorage.removeItem("movie")
    document.getElementById('History').innerHTML=''

}

document.getElementById('clearSearches').addEventListener("click",clearSearches);
