fetch (
    'https://app.ticketmaster.com/discovery/v2/events.json?keyword=devjam&source=universe&countryCode=US&apikey=wH9MUA889uOpKEnatwDqKHSN2IHFzJhS'
    )
            .then(function(response) {
                console.log(response);
              return response.json();
            })
            .then(function(data) {
              console.log(data);
            });
    

//Fetch for last FM
//  fetch(
//      `https://www.last.fm/api/auth/?api_key=79000ec6a486b0cc93684413435a84c6`
//     )
//             .then(function(response) {
//                 console.log(response);
//                 return response.json();
//             })
//             .then(function(data) {
//                 console.log(data);
//             });
//Start Local Storage          
           
const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('.textinput');

if(storageInput){
    text.textContent = storedInput
}
storageInput.addEventListener('input', letter=> {
    text.textContent = letter.target.value;
})
const saveToLocalStorage = () => {
    localStorage.setItem('textinput', text.textContent)
}
button.addEventListener('click', saveToLocalStorage);
var search = function() {
    var userInput = document.getElementById('artistSearch').value;
    localStorage.setItem("search", userInput);
    window.location.href = "./artist.html"
}
document.getElementById("searchBtn").addEventListener('click', search);
