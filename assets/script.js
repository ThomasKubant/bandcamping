var search = function() {
    var userInput = document.getElementById('artistSearch').value;
    localStorage.setItem("search", userInput);
    window.location.href = "./artist.html"
}
document.getElementById("searchBtn").addEventListener('click', search);

//Event Listener
//const submitButton = document.getElementById("submit");
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

// Working on future map for tickets
            // function getLocation() {
            //     if (navigator.geolocation) {
            //         navigator.geolocation.getCurrentPosition(showPosition, showError);
            //     } else {
            //         var x = document.getElementById("location");
            //         x.innerHTML = "Geolocation is not supported by this browser.";
            //     }
            // }
            // function showPosition(position) {
            //     var x = document.getElementById("location");
            //     x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
                
            //     var latlon = position.coords.latitude + "," + position.coords.longitude;
        
            //     $.ajax({
            //       type:"GET",
            //       url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=wH9MUA889uOpKEnatwDqKHSN2IHFzJhS&latlong="+latlon,
            //       async:true,
            //       dataType: "json",
            //       success: function(json) {
            //                   console.log(json);
            //                   var e = document.getElementById("events");
            //                   e.innerHTML = json.page.totalElements + " events found.";
            //                   showEvents(json);
            //                   initMap(position, json);
            //                },
            //       error: function(xhr, status, err) {
            //                   console.log(err);
            //                }
            //     });
                
            // }
        
            // function showError(error) {
            //     switch(error.code) {
            //         case error.PERMISSION_DENIED:
            //             x.innerHTML = "User denied the request for Geolocation."
            //             break;
            //         case error.POSITION_UNAVAILABLE:
            //             x.innerHTML = "Location information is unavailable."
            //             break;
            //         case error.TIMEOUT:
            //             x.innerHTML = "The request to get user location timed out."
            //             break;
            //         case error.UNKNOWN_ERROR:
            //             x.innerHTML = "An unknown error occurred."
            //             break;
            //     }
            // }
            
            
            // function showEvents(json) {
            //   for(var i=0; i<json.page.size; i++) {
            //     $("#events").append("<p>"+json._embedded.events[i].name+"</p>");
            //   }
            // }
        
            
            // function initMap(position, json) {
            //   var mapDiv = document.getElementById('map');
            //   var map = new google.maps.Map(mapDiv, {
            //     center: {lat: position.coords.latitude, lng: position.coords.longitude},
            //     zoom: 10
            //   });
            //   for(var i=0; i<json.page.size; i++) {
            //     addMarker(map, json._embedded.events[i]);
            //   }
            // }
            
            // function addMarker(map, event) {
            //   var marker = new google.maps.Marker({
            //     position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
            //     map: map
            //   });
            //   marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
            //   console.log(marker);
            // }           
            
        
            // getLocation();
            // function showEvents(json) {
            //     for(var i=0; i<json.page.size; i++) {
            //       $("#events").append("<p>"+json._embedded.events[i].name+"</p>");
            //     }
            //   }
              
              
            //   function initMap(position, json) {
            //     var mapDiv = document.getElementById('map');
            //     var map = new google.maps.Map(mapDiv, {
            //       center: {lat: position.coords.latitude, lng: position.coords.longitude},
            //       zoom: 10
            //     });
            //     for(var i=0; i<json.page.size; i++) {
            //       addMarker(map, json._embedded.events[i]);
            //     }
            //   }
              
            //   function addMarker(map, event) {
            //     var marker = new google.maps.Marker({
            //       position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
            //       map: map
            //     });
            //     marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
            //     console.log(marker);
            //   }

          
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