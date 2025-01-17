function switchTab (tabName, event){
    event.preventDefault();

    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.classList.remove("tab-active");
    });

    const links = document.querySelectorAll(".topnav a");
    links.forEach(link => {
        link.classList.remove("active");
    });

    const selectedTab = document.getElementById(tabName);
    selectedTab.classList.add("tab-active");

    const selectedLink = event.target;
    selectedLink.classList.add("active");


}

const courseDropdown = document.getElementById("course");
const teesDropdown = document.getElementById("tees");
const courseData = {
    grandFallsGolfClub: ["Red (5201 yds)", "White (5742 yds)", "Blue (6053 yds)"],
    terraNovaTwinRivers: ["Front (5423 yds)", "Intermediate (6066 yds)", "Championship (6546 yds)"],
    terraNovaEagleCreek: ["White (4532 yds)", "Blue (5186 yds)"],
    ganderGolfClub: ["Red (5164 yds)", "White (5662 yds)", "Blue (6137 yds)"],
    humberValleyResort: ["Red (5484 yds)", "Green (6049 yds)", "White (6441 yds)", "Blue (6858 yds)", "Gold (7199 yds)"],
    glenDenning: ["White (4705 yds)", "Blue/White (5472 yds)", "Blue (5795 yds)", "Gold/Blue (6011 yds)", "Gold (6214 yds)"],
    ballyHalyCountryClubNorth: ["Silver (2826 yds)", "Blue (3244 yds)", "Black (3574 yds)"],
    ballyHalyCountryClubSouth: ["Silver (5082 yds)", "Green/Silver (5339 yds)", "Green (5593 yds)", "Blue/Green (5863 yds)", "Blue (6100 yds)", "Black/Blue (6344 yds)", "Black (6581 yds)"]
};

function updateDropdown(){
    teesDropdown.innerHTML = "<option value=''>Select Tees Played </option>";
    const selectedCourse = courseDropdown.value; 
    if (courseData[selectedCourse]){
        courseData[selectedCourse].forEach(tees => {
            const newTees = document.createElement("option");
            newTees.value = tees.toLowerCase();
            newTees.textContent = tees;
            teesDropdown.appendChild(newTees);
        });
    }
}

courseDropdown.addEventListener("change", updateDropdown);


    const postScoreBtn = document.getElementById("post-score-btn");
    const postScoreForm =  document.getElementById("post-score-form");

    postScoreBtn.addEventListener("click", () => {
        if (postScoreForm.style.display === "none") {
            postScoreForm.style.display = "block";
            postScoreBtn.textContent = "Cancel"
        } else {
            postScoreForm.style.display = "none";
            postScoreBtn.textContent = "Post Score"
        }
    });

    const roundsList = document.getElementById("rounds-list");
    const scoreForm = document.getElementById("score-form");

    scoreForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const golferName = document.getElementById("golfer-name").value;
        const datePlayed = document.getElementById("date-played").value;
        const course = document.getElementById("course").options[document.getElementById("course").selectedIndex].text;
        const tees = document.getElementById("tees").options[document.getElementById("tees").selectedIndex].text;
        const holes = document.getElementById("holes").value;
        const score = document.getElementById("score").value;

        const roundItem = document.createElement("li");
        roundItem.innerHTML = `
            <strong>Golfer:</strong> ${golferName}<br>
            <strong>Date Played:</strong> ${datePlayed}<br>
            <strong>Course:</strong> ${course}<br>
            <strong>Tees:</strong> ${tees}<br>
            <strong>Holes Played:</strong> ${holes}<br>
            <strong>Score:</strong> ${score}`;
        
            roundsList.appendChild(roundItem);
            postScoreForm.reset();

    });
