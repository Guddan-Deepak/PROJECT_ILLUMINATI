// Festival Data
const festivals = [
    { name: "Holi", month: "march", state: "uttar_pradesh" },
    { name: "Diwali", month: "november", state: "all" },
    { name: "Ganesh Chaturthi", month: "september", state: "maharashtra" },
    { name: "Pongal", month: "january", state: "tamil_nadu" },
    { name: "Durga Puja", month: "october", state: "west_bengal" },
    { name: "Makar Sankranti", month: "january", state: "all" },
    { name: "Navratri", month: "october", state: "rajasthan" }
];

function filterFestivals() {
    const selectedMonth = document.getElementById("month").value;
    const selectedState = document.getElementById("state").value;
    const festivalList = document.getElementById("festival-list");

    festivalList.innerHTML = "";

    const filteredFestivals = festivals.filter(festival => 
        (selectedMonth === "all" || festival.month === selectedMonth) &&
        (selectedState === "all" || festival.state === selectedState || festival.state === "all")
    );

    if (filteredFestivals.length === 0) {
        festivalList.innerHTML = "<p>No festivals found for the selected month and state.</p>";
    } else {
        filteredFestivals.forEach(festival => {
            const festivalCard = document.createElement("div");
            festivalCard.classList.add("festival-card");
            festivalCard.innerHTML = `<h3>${festival.name}</h3> <p>Month: ${festival.month.charAt(0).toUpperCase() + festival.month.slice(1)}</p> <p>State: ${festival.state.replace("_", " ").toUpperCase()}</p>`;
            festivalList.appendChild(festivalCard);
        });
    }
}
