var search = function() {
    var userInput = document.getElementById('artistSearch').value;
    localStorage.setItem("search", userInput);
    window.location.href = "./artist.html"
}
document.getElementById("searchBtn").addEventListener('click', search);