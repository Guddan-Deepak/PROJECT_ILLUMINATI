document.addEventListener("DOMContentLoaded", function () {
    let angle = 0;
    const carousel = document.querySelector(".carousel");

    window.addEventListener("wheel", function (event) {
        if (event.deltaY > 0) {
            angle -= 60; // Scroll down rotates clockwise
        } else {
            angle += 60; // Scroll up rotates counterclockwise
        }
        carousel.style.transform = `rotateY(${angle}deg)`;
    });
});
