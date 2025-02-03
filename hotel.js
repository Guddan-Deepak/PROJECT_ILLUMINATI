document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const priceRange = document.getElementById('price-range').value;
alert(`Booking Details:
Location: ${location}
Check-in Date: ${checkIn}
Check-out Date: ${checkOut}
Adults: ${adults}
Children: ${children}
Price Range: ${priceRange}`);
});