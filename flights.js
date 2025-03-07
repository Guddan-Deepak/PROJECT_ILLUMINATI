document.getElementById("submit-btn").addEventListener("click", function() {
    let departure = document.getElementById("departure").value;
    let destination = document.getElementById("destination").value;
    let departureDate = document.getElementById("departure-date").value;

    let googleFlightsURL = `https://www.google.com/travel/flights?q=flights%20from%20${departure}%20to%20${destination}%20on%20${departureDate}`;

    window.open(googleFlightsURL, "_blank");
});
