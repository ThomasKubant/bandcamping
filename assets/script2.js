var userAccessToken = 'BQBRNa3KMGwW_-rht9a3j9tYBwdQLt3gOHu74ok6WDWC1USCrc2CxoAagnB_jwEM5oksd-M5lstJF2iq_-co7sRVt09kCvSwNG5eZ4rW3TEFfjObtDqdtJvYSNYbYlT4CYxsSi7lequdevkW4h_r5vkTCJS5at8';
var userInput = localStorage.getItem("search");
var artistName;
var favoriteArists = [];
fetch('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist='+ userInput +'&api_key=79000ec6a486b0cc93684413435a84c6&format=json').then(function(response) {
    if(response.ok) {
        response.json().then(function(data) {
            console.log(data);
            artistName = data.results.artistmatches.artist[0].name;
            getArtististInfo();
            getSpotifyInfo();
            document.getElementById("artistName").textContent = artistName;
        })
    }
})

var getSpotifyInfo = function() {
    fetch('https://api.spotify.com/api/token', {
            method: 'POST', headers: {
                'Authorization': 'Basic NDU2ZmRmYjZmOGU4NDJjMTk1ZWI3YTIwY2ZhNGQzYTQ6NDJlNTliNTJlYzcxNDg0ZGIxYjA0MGQ4YzVkOTcyOGE=',
            }
        }).then(function(response) {
            console.log(response);
        })
    fetch('https://api.spotify.com/v1/search?query='+ artistName +'&type=artist', {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer BQBBa7x3MIMp4-tD1WA2c7homaWhS_rgBEAlevgMLVUGrBZzPeXHfzQ2JAlobJN-U7i3H9aQ4BA9jsJeCPbHapM7Bhv612Sn8qKVNo120sDXHD3aND9AqCD0lSdPhPQBCsIpDuPhXkqsSksSin1RIh3pO_h1Yag'
            }
        }).then(function(response) {
            if(response.ok) {
            response.json().then(function(data) {
                var artist = data.artists.items[0];
                var headerImg = artist.images[0].url;
                const headerImgEl = document.getElementById('artistImg');
                headerImgEl.src = headerImg;
        })
    }
})

}
var getArtististInfo = function() {
    fetch(' http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+ artistName +'&api_key=79000ec6a486b0cc93684413435a84c6&format=json').then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
                var genre = data.artist.tags.tag[0].name;
                genre = genre.charAt(0).toUpperCase() + genre.slice(1);
                document.getElementById('artistGenre').textContent = genre;
            })
        }
    })
}
var addFavoriteArtist = function() {
    var favoriteArists = JSON.parse(localStorage.getItem("favoriteArtists"));
    if(!favoriteArists) {
        favoriteArists = []
    }
    favoriteArists.push(artistName);
    localStorage.setItem("favoriteArtists", JSON.stringify(favoriteArists))
    console.log(favoriteArists);
}
var search = function() {
    var userInput = document.getElementById('artistSearch').value;
    localStorage.setItem("search", userInput);
    window.location.href = "./artist.html"
}
document.getElementById("searchBtn").addEventListener('click', search);
document.getElementById("favBtn").addEventListener('click', addFavoriteArtist);