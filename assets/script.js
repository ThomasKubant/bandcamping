//Fetch
fetch (
    'https://app.ticketmaster.com/discovery/v2/events.json?keyword=devjam&source=universe&countryCode=US&apikey=wH9MUA889uOpKEnatwDqKHSN2IHFzJhS'
    )
            .then(function(response) {
                console.log(response)
              return response.json();
            })
            .then(function(data) {
              console.log(data);
            });

            //var favorite = localStorage.getItem(".favorite");   
            //localStorage.getItem(favorite);

      