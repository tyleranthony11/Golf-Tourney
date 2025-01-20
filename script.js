function switchTab (tabName, event){
    event.preventDefault();

    console.log("Switching to tab:", tabName);

    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.classList.remove("tab-active");
    });

    const links = document.querySelectorAll(".topnav a");
    links.forEach(link => {
        link.classList.remove("active");
    });

    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        console.log("Activating tab:", selectedTab);
        selectedTab.classList.add("tab-active");
    }

    const selectedLink = event.target;
    selectedLink.classList.add("active");


}

const courseDropdown = document.getElementById("course");
const teesDropdown = document.getElementById("tees");
const courseData = {
    grandFallsGolfClub: { 
        tees: {
            Red: {yardage: 5201, par: 71, courseRating: 65.7, slopeRating: 113}, 
            White: {yardage: 5742, par: 71, courseRating: 68.6, slopeRating: 125},
            Blue: {yardage: 6053, par: 71, courseRating: 70.7, slopeRating: 127}
        }
    },
    terraNovaTwinRivers: { 
        tees: {
            Front: {yardage: 5423, par: 71, courseRating: 66.5, slopeRating: 119}, 
            Intermediate: {yardage: 6066, par: 71, courseRating: 69.6, slopeRating: 123},
            Championship: {yardage: 6546, par: 71, courseRating: 72.5, slopeRating: 126}
        }
    },
    ganderGolfClub: { 
        tees: {
            Red: {yardage: 5164, par: 70, courseRating: 66.1, slopeRating: 122}, 
            White: {yardage: 5662, par: 70, courseRating: 68.8, slopeRating: 131},
            Blue: {yardage: 6137, par: 70, courseRating: 71.2, slopeRating: 136}
        }
    },
    ballyHalyCountryClubNorth: { 
        tees: {
            Silver: {yardage: 2826, par: 61, courseRating: 56.4, slopeRating: 83}, 
            Blue: {yardage: 5662, par: 70, courseRating: 58.1, slopeRating: 85},
            Black: {yardage: 6137, par: 70, courseRating: 59.3, slopeRating: 94}
        }
    },
    ballyHalyCountryClubSouth: { 
        tees: {
            Silver: {yardage: 5082, par: 72, courseRating: 66.4, slopeRating: 105}, 
            "Green/Silver": {yardage: 5339, par: 72, courseRating: 67.5, slopeRating: 109}, 
            Green: {yardage: 5593, par: 72, courseRating: 68.2, slopeRating: 115}, 
            "Blue/Green": {yardage: 5863, par: 72, courseRating: 69.2, slopeRating: 122}, 
            Blue: {yardage: 6100, par: 72, courseRating: 70.4, slopeRating: 126}, 
            "Black/Blue": {yardage: 6344, par: 72, courseRating: 71.4, slopeRating: 131}, 
            Black: {yardage: 6581, par: 72, courseRating: 72.9, slopeRating: 128} 
        }
    },
    glenDenning: { 
        tees: {
            White: {yardage: 4705, par: 71, courseRating: 64.2, slopeRating: 101}, 
            "Blue/White": {yardage: 5472, par: 71, courseRating: 67.8, slopeRating: 110}, 
            Blue: {yardage: 5795, par: 71, courseRating: 69.6, slopeRating: 114}, 
            "Gold/Blue": {yardage: 6011, par: 71, courseRating: 70.2, slopeRating: 120}, 
            Gold: {yardage: 6214, par: 71, courseRating: 71.2, slopeRating: 123}, 
          
        }
    },
    humberValleyResort: { 
        tees: {
            Red: {yardage: 5484, par: 72, courseRating: 66.2, slopeRating: 110}, 
            Green: {yardage: 6049, par: 72, courseRating: 68.3, slopeRating: 115}, 
            White: {yardage: 6441, par: 72, courseRating: 70.9, slopeRating: 119}, 
            Blue: {yardage: 6858, par: 72, courseRating: 73.0, slopeRating: 125}, 
            Gold: {yardage: 7199, par: 72, courseRating: 74.5, slopeRating: 129}, 
          
        }
    },
    
};


function updateDropdown(){
    teesDropdown.innerHTML = "<option value=''>Select Tees Played </option>";
    const selectedCourse = courseDropdown.value; 

    if (courseData[selectedCourse]){
        const courseInfo = courseData[selectedCourse];
        for (const teeName in courseInfo.tees){
            const teeData = courseInfo.tees[teeName];
            const newTees = document.createElement("option");
            newTees.value = teeName.toLowerCase();
            newTees.textContent = `${teeName} (${teeData.yardage} yds) - Par ${teeData.par}, Rating ${teeData.courseRating}, Slope ${teeData.slopeRating}`;
            teesDropdown.appendChild(newTees);
        }
        
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
    const rounds = [];

    scoreForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const golferName = document.getElementById("golfer-name").value;
        const datePlayed = document.getElementById("date-played").value;
        const course = document.getElementById("course").options[document.getElementById("course").selectedIndex].text;
        const tees = document.getElementById("tees").options[document.getElementById("tees").selectedIndex].text;
        const holes = document.getElementById("holes").value;
        const score = Number(document.getElementById("score").value);

        const round = {
            golferName,
            datePlayed,
            course,
            tees,
            holes,
            score,
        };
        rounds.push(round);
        

        const roundItem = document.createElement("li");
        roundItem.innerHTML = `
            <strong>Golfer:</strong> ${golferName}<br>
            <strong>Date Played:</strong> ${datePlayed}<br>
            <strong>Course:</strong> ${course}<br>
            <strong>Tees:</strong> ${tees}<br>
            <strong>Holes Played:</strong> ${holes}<br>
            <strong>Score:</strong> ${score}`;
        
            roundsList.appendChild(roundItem);
            scoreForm.reset();
    });


  


