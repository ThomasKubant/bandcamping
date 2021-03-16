var userInput = localStorage.getItem("search");
var artistName;
console.log(userInput);
fetch('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist='+ userInput +'&api_key=79000ec6a486b0cc93684413435a84c6&format=json').then(function(response) {
    if(response.ok) {
        response.json().then(function(data) {
            console.log(data);
            artistName = data.results.artistmatches.artist[0].name;
            console.log(artistName);
        })
    }
}).then(
fetch(' http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+ artistName +'&api_key=79000ec6a486b0cc93684413435a84c6&format=json').then(function(response) {
    if(response.ok) {
        response.json().then(function(data) {
            console.log(data);
            console.log(artistName);

        })
    }
}))
fetch('https://api.spotify.com/v1/search?q='+ userInput +'&type=artist').then(function(response) {
    if(response.ok) {
        response.json().then(function(data) {
            console.log(data);
            var artist = data.artists.items[0];
            document.getElementById('artistImg').src = artist.images[0].url;
        })
    }
})
var search = function() {
    var userInput = document.getElementById('artistSearch').value;
    localStorage.setItem("search", userInput);
    window.location.href = "./artist.html"
}
document.getElementById("searchBtn").addEventListener('click', search);