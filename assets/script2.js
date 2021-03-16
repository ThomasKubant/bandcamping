var userAccessToken = 'BQBRNa3KMGwW_-rht9a3j9tYBwdQLt3gOHu74ok6WDWC1USCrc2CxoAagnB_jwEM5oksd-M5lstJF2iq_-co7sRVt09kCvSwNG5eZ4rW3TEFfjObtDqdtJvYSNYbYlT4CYxsSi7lequdevkW4h_r5vkTCJS5at8';
var userInput = localStorage.getItem("search");
var artistName;
fetch('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist='+ userInput +'&api_key=79000ec6a486b0cc93684413435a84c6&format=json').then(function(response) {
    if(response.ok) {
        response.json().then(function(data) {
            console.log(data);
            artistName = data.results.artistmatches.artist[0].name;
            getArtististInfo();
            getMusicStoryInfo();
            document.getElementById("artistName").textContent = artistName;
        })
    }
})

var getMusicStoryInfo = function() {
    fetch('https://api.spotify.com/v1/search?query='+ artistName +'&type=artist', {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer BQCMOpudIgTbIStsiNczW39TYBNyefAiRsXPmZqf4rMnX-RKU-P0T4DTCUjXg6gFC-L-YJANvFNwPiQLiQhvXmT7JCKLwmgl2lOiCOUxZFujtoLq6AS9efCa0tXY2wfEAJrJcIacQEsCSwSCW5Kgzwsi4TyCSBc'
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
            })
        }
    })
}

var search = function() {
    var userInput = document.getElementById('artistSearch').value;
    localStorage.setItem("search", userInput);
    window.location.href = "./artist.html"
}
document.getElementById("searchBtn").addEventListener('click', search);