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
    if (selectedTab) {
        selectedTab.classList.add("tab-active");
    }

    const selectedLink = event.target;
    selectedLink.classList.add("active");
}

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
            Blue: {yardage: 5662, par: 61, courseRating: 58.1, slopeRating: 85},
            Black: {yardage: 6137, par: 61, courseRating: 59.3, slopeRating: 94}
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
    pippyParkAdmiralsGreen: {
        tees: {
            Red: {yardage: 4220, par: 65, courseRating: 62.8, slopeRating: 97},
            "Silver/Red": {yardage: 4628, par: 66, courseRating: 64.1, slopeRating: 98},
            Silver: {yardage: 5042, par: 68, courseRating: 65.6, slopeRating: 106},
            "Gold/Silver": {yardage: 5439, par: 71, courseRating: 67.5, slopeRating: 113},
            Gold: {yardage: 5784, par: 71, courseRating: 120, slopeRating: 120},
            Black: {yardage: 6263, par: 71, courseRating: 71.4, slopeRating: 125},
        }
    }
    
};
const courseNames = {
    ballyHalyCountryClubNorth: "Bally Haly Country Club - North",
    ballyHalyCountryClubSouth: "Bally Haly Country Club - South",
    ganderGolfClub: "Gander Golf Club",
    glenDenning: "Glendenning Golf",
    grandFallsGolfClub: "Grand Falls Golf Club",
    humberValleyResort: "Humber Valley Resort",
    pippyParkAdmiralsGreen: "Pippy Park Golf Club - Admiral's Green",
    terraNovaTwinRivers: "Terra Nova Golf Resort - Twin Rivers"
};

const golferSelect = document.getElementById("golfer-name-dropdown");
const addGolferBtn = document.getElementById("add-golfer-btn");
const roundsList = document.getElementById("rounds-list");
const scoreForm = document.getElementById("score-form");
const newGolferInput = document.getElementById("new-golfer-input");
const submitNewGolferBtn = document.getElementById("submit-new-golfer");
const newGolferNameInput = document.getElementById("new-golfer-name");
const courseDropdown = document.getElementById("course");
const teesDropdown = document.getElementById("tees");
const postScoreBtn = document.getElementById("post-score-btn");
const postScoreForm =  document.getElementById("post-score-form");

const rounds = [];
const golfers = [];
const golferHandicaps = [];


function updateGolferDropdown(){
    golferSelect.innerHTML = '<option value="">Select Golfer</option>';
    golfers.forEach(golfer => {
        const option = document.createElement("option");
        option.value = golfer;
        option.textContent = golfer;
        golferSelect.appendChild(option);
    });
}

function addGolfer(golferName) {
    golfers.push(golferName);
    updateGolferHandicap(golferName);
    updateGolferDropdown();
}

addGolferBtn.addEventListener("click", () => {
   newGolferInput.style.display = "block";
})

submitNewGolferBtn.addEventListener("click", () => {
    const golferName = newGolferNameInput.value;
    if(golferName) {
        addGolfer(golferName);
        newGolferInput.value = "";
        newGolferInput.style.display = "none";
    }
})


function updateTeesDropdown(){
    teesDropdown.innerHTML = "<option value=''>Select Tees Played </option>";
    const selectedCourse = courseDropdown.value; 

    if (courseData[selectedCourse]){
        const courseInfo = courseData[selectedCourse];
        for (const teeName in courseInfo.tees){
            const teeData = courseInfo.tees[teeName];
            const newTees = document.createElement("option");
            newTees.value = teeName;
            newTees.textContent = `${teeName} (${teeData.yardage} yds) - Par ${teeData.par}, Rating ${teeData.courseRating}, Slope ${teeData.slopeRating}`;
            teesDropdown.appendChild(newTees);
        }
        
    }
}
courseDropdown.addEventListener("change", updateTeesDropdown);


postScoreBtn.addEventListener("click", () => {
        if (postScoreForm.style.display === "none") {
            postScoreForm.style.display = "block";
            postScoreBtn.textContent = "Cancel"
        } else {
            postScoreForm.style.display = "none";
            postScoreBtn.textContent = "Post Score"
        }
    });

function calculateHandicap(golferName) {
        const golferRounds = rounds.filter(round => round.golferName === golferName);
        golferRounds.sort((a,b) => new Date(b.datePlayed) - new Date(a.datePlayed));
        const recentRounds = golferRounds.slice(0,20);

        const differentials = recentRounds.map(round => {
        const {score, courseValue, tees} = round;
        const courseInfo = courseData[courseValue];
        const teeInfo = courseInfo.tees[tees];
        const {courseRating, slopeRating} = teeInfo;
        const differential = (113 / slopeRating) * (score - courseRating);
        return differential;
       });

       differentials.sort((a, b) => a - b );
       const lowestDifferentials = differentials.slice(0,8);
       let total = 0;
       for (let i = 0; i < lowestDifferentials.length; i++){
        total += lowestDifferentials[i];
       }
    const averageDifferential = total / lowestDifferentials.length;

    return averageDifferential.toFixed(1);
        
    }
   
    

function updateRankingsTable() {
    const rankingsTable = document.getElementById("rankings-table-body");
    rankingsTable.innerHTML = "";

    golferHandicaps.sort((a, b) => a.handicap - b.handicap);

    golferHandicaps.forEach((golfer, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${golfer.name}</td>
            <td>${golfer.handicap}</td>
            `;
            rankingsTable.appendChild(row);
    })
}

function updateGolferHandicap(golferName) {
    const handicap = calculateHandicap(golferName);
    const golferIndex = golferHandicaps.findIndex(golfer => golfer.name === golferName);
        if (golferIndex !== -1){
            golferHandicaps[golferIndex].handicap = handicap;
        } else {
            golferHandicaps.push({name: golferName, handicap});
        }
        updateRankingsTable();
        }
    

        scoreForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const golferName = document.getElementById("golfer-name-dropdown").value;
            const datePlayed = document.getElementById("date-played").value;
            const courseValue = document.getElementById("course").value;
            const course = courseNames[courseValue];
            const tees = document.getElementById("tees").value.charAt(0).toUpperCase() + document.getElementById("tees").value.slice(1);
            const holes = document.getElementById("holes").value;
            const score = Number(document.getElementById("score").value);
            const courseKey = document.getElementById("course").value;
            const selectedCourseData = courseData[courseKey];
            const selectedTeeData = selectedCourseData.tees[tees];
            const strokesAbovePar = score - selectedTeeData.par;
            
    
            const roundItem = document.createElement("li");
            roundItem.innerHTML = `
                <strong>Golfer:</strong> ${golferName}<br>
                <strong>Date Played:</strong> ${datePlayed}<br>
                <strong>Course:</strong> ${course}<br>
                <strong>Tees:</strong> ${tees}<br>
                <strong>Holes Played:</strong> ${holes}<br>
                <strong>Score:</strong> ${score} (${strokesAbovePar >= 0 ? "+" : ""}${strokesAbovePar})`;
            
                roundsList.appendChild(roundItem);
    
                const roundsDisplay = document.getElementById("rounds-display");
                if (roundsDisplay.style.display === "none") {
                    roundsDisplay.style.display = "block";
                }           
               
    
                const round = {
                    golferName,
                    datePlayed,
                    courseValue,
                    tees,
                    holes,
                    score,
                };
                rounds.push(round);
                updateGolferHandicap(golferName);
                updateRankingsTable();
        
                scoreForm.reset();
        });





   
    
    
    

    

    


   
    


  


