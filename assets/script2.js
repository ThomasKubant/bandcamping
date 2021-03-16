var userInput = localStorage.getItem("search");
console.log(userInput);
fetch(' http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+ userInput +'&api_key=79000ec6a486b0cc93684413435a84c6&format=json').then(function(response) {
    if(response.ok) {
        response.json().then(function(data) {
            console.log(data);
        })
    }
})