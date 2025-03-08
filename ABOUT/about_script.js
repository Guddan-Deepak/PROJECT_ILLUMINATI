// Responsive Navbar Toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburger-menu");
    const mobileNav = document.querySelector(".mobile-nav");

    menuToggle.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
    });
});

// Search Functionality
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search input");
    const searchButton = document.querySelector(".search img");

    searchButton.addEventListener("click", function () {
        let query = searchInput.value.trim();
        if (query) {
            alert("Search functionality not yet implemented, but you searched for: " + query);
        }
    });

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            searchButton.click();
        }
    });
});

// "Read More" Button Toggle
document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.querySelector(".text-container a");
    const aboutText = document.querySelector(".about-text");

    readMoreBtn.addEventListener("click", function (event) {
        event.preventDefault();
        if (aboutText.style.maxHeight) {
            aboutText.style.maxHeight = null;
            readMoreBtn.innerText = "Read more";
        } else {
            aboutText.style.maxHeight = "500px"; // Adjust as needed
            readMoreBtn.innerText = "Read less";
        }
    });
});
