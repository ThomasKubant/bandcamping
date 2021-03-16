var search = function() {
    var userInput = document.getElementById('artistSearch').value;
    localStorage.setItem("search", userInput);
    window.location.href = "./artist.html"
}
document.getElementById("searchBtn").addEventListener('click', search);

//Event Listener
// const submitButton = document.getElementById("submit");
// submitButton.addEventListener("click", (saveToLocalStorage) => {
// console.log(submitButton);
// })
//Fetch for TicketMaster API Key wH9MUA889uOpKEnatwDqKHSN2IHFzJhS
fetch (
    'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US=devjam&source=universe&countryCode=US&apikey=wH9MUA889uOpKEnatwDqKHSN2IHFzJhS'
    )
            .then(function(response) {
                console.log(response);
              return response.json();
            })
            .then(function(data) {
              console.log(data);
            });
// Fetch for last FM
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
// // // // // // // // // // // // // }// 

// *start of the calendar code

// Months stored as string
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// creates a dropdown menu for the months
function createMonth() {
    for (var i = 0; i < months.length; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = months[i];
        doc.classList.add("menuItem")

        doc.onclick = (function () {
            var currentMonth = i;
            return function() {
                month = currentMonth;
                document.getElementById("currentMonth").innerHTML = months[month];
                loadCalendarDays();
                return month;
            }
        }
        
        )};
        document.getElementById("months").appendChild(doc);
}

// creates a dropdown menu for the years
function createyear() {
    var startYear = 2000;
    var endYear = 2022;
    for (var i = startYear; i < endYear; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = i;
        doc.classList.add("menuItem")

        doc.onclick = (function () {
            var currentYear = i;
            return function() {
                year = currentYear;
                document.getElementById("currentYear").innerHTML = year;
                loadCalendarDays();
                return year;
            }
        }
        
        )};
        document.getElementById("years").appendChild(doc);
}

// calendar days shenanigans

function daysInMonth(month, year) {
    let d = new Date(year, month+1, 0)
    return d.getDate();
}

function loadCalendarDays() {
    document.getElementById("calendarDays").innerHTML = "";
    var tempDate = new Date(year, month, 0);
    var number = daysInMonth(month, year);
    var dayOfWeek = tempDate.getDay();

    for(var i = 0; i <= dayOfWeek; i++) {
        var d = document.createElement("div");
        d.classList.add("day")
        d.classList.add("blank")
        document.getElementById("calendarDays").appendChild(d);

    }

    for (var i = 0; i < number; i++) {
        var temp = i + 1;
        var d = document.createElement("div");
        d.id = "calendarDay_" + i;
        d.className = "day"
        d.innerHTML = temp;
        document.getElementById("calendarDays").appendChild(clear);

        //clicking on the day will cause this event
        d.addEventListener('click', function(){
            
        })
        
    }

    
}

var selectedDays = new Array();
var mousedown = false;