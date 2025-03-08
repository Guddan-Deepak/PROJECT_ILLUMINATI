const hamburger = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
    mobileNav.classList.toggle('active');
});

document.querySelectorAll('.mobile-nav ul li a').forEach(link => {
    link.addEventListener('click', function () {
        mobileNav.classList.remove('active');
    });
});

// Close the menu if clicking outside of it
document.addEventListener('click', function (event) {
    console.log(event)
    if (!hamburger.contains(event.target) && !mobileNav.contains(event.target)) {
        console.log(event.target)
        mobileNav.classList.remove('active');
    }
});

// List of Indian states for search suggestions
const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

// Get search input and suggestion container
const searchInput = document.getElementById("searchBox");
const suggestionsBox = document.createElement("div");
suggestionsBox.classList.add("suggestions");
document.querySelector(".search").appendChild(suggestionsBox);

// Show search suggestions
searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = ""; // Clear previous suggestions

    if (query) {
        const filteredStates = states.filter(state => state.toLowerCase().includes(query));
        filteredStates.forEach(state => {
            const suggestionItem = document.createElement("div");
            suggestionItem.textContent = state;
            suggestionItem.classList.add("suggestion-item");

            // On click, fill search bar and redirect
            suggestionItem.addEventListener("click", function() {
                searchInput.value = state;
                redirectToWikipedia(state);
                suggestionsBox.innerHTML = ""; // Clear suggestions
            });

            suggestionsBox.appendChild(suggestionItem);
        });
    }
});

// Handle Enter key to search
searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter" && searchInput.value.trim() !== "") {
        redirectToWikipedia(searchInput.value.trim());
    }
});

// Redirect function
function redirectToWikipedia(state) {
    const wikiURL = `https://en.wikipedia.org/wiki/${state.replace(/\s+/g, "_")}`;
    window.open(wikiURL, "_blank");
}
