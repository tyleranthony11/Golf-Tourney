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
    blomidonGolfClub: {
        tees: {
            Red: {yardage: 5193, par: 70, courseRating: 65.2, slopeRating: 111},
            White: {yardage: 5526, par: 70, courseRating: 68.2, slopeRating: 120},
            Blue: {yardage: 5729, par: 70, courseRating: 69.9, slopeRating: 119}
        }
    },
    ganderGolfClub: { 
        tees: {
            Red: {yardage: 5164, par: 70, courseRating: 66.1, slopeRating: 122}, 
            White: {yardage: 5662, par: 70, courseRating: 68.8, slopeRating: 131},
            Blue: {yardage: 6137, par: 70, courseRating: 71.2, slopeRating: 136}
        }
    },
    grandFallsGolfClub: { 
        tees: {
            Red: {yardage: 5201, par: 71, courseRating: 65.7, slopeRating: 113}, 
            White: {yardage: 5742, par: 71, courseRating: 68.6, slopeRating: 125},
            Blue: {yardage: 6053, par: 71, courseRating: 70.7, slopeRating: 127}
        }
    },
    grandeMeadowsGolfClub: { 
        tees: {
            Red: {yardage: 4960, par: 72, courseRating: 66.4, slopeRating: 121}, 
            "Red/Yellow": {yardage: 5219, par: 72, courseRating: 66.7, slopeRating: 122},
            Yellow: {yardage: 4678, par: 72, courseRating: 67.0, slopeRating: 119},
            White: {yardage: 5868, par: 72, courseRating: 69.6, slopeRating: 111},
            Blue: {yardage: 5888, par: 72, courseRating: 69.6, slopeRating: 111},
            "White/Blue": {yardage: 5921, par: 72, courseRating: 69.6, slopeRating: 111}
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
    },
    terraNovaTwinRivers: { 
        tees: {
            Front: {yardage: 5423, par: 71, courseRating: 66.5, slopeRating: 119}, 
            Intermediate: {yardage: 6066, par: 71, courseRating: 69.6, slopeRating: 123},
            Championship: {yardage: 6546, par: 71, courseRating: 72.5, slopeRating: 126}
        }
    },
    theWildsGolfResort: { 
        tees: {
            White: {yardage: 6074, par: 72, courseRating: 70.6, slopeRating: 127}, 
            Blue: {yardage: 6365, par: 72, courseRating: 71.8, slopeRating: 130},
            Gold: {yardage: 6772, par: 72, courseRating: 73.7, slopeRating: 138}
        }
    }
   
   
};
const courseNames = {
    ballyHalyCountryClubNorth: "Bally Haly Country Club - North",
    ballyHalyCountryClubSouth: "Bally Haly Country Club - South",
    blomidonGolfClub: "Blomidon Golf Club",
    ganderGolfClub: "Gander Golf Club",
    glenDenning: "Glendenning Golf",
    grandFallsGolfClub: "Grand Falls Golf Club",
    grandeMeadowsGolfClub: "Grande Meadows Golf Club",
    humberValleyResort: "Humber Valley Resort",
    pippyParkAdmiralsGreen: "Pippy Park Golf Club - Admiral's Green",
    terraNovaTwinRivers: "Terra Nova Golf Resort - Twin Rivers",
    theWildsGolfResort: "The Wilds Golf Resort"
};
const scorecardData = {
    grandFallsGolfClub: {
        Red: [
            {holeNumber: 1, par: 5, yardage: 446},
            {holeNumber: 2, par: 3, yardage: 203},
            {holeNumber: 3, par: 3, yardage: 130},
            {holeNumber: 4, par: 5, yardage: 483},
            {holeNumber: 5, par: 4, yardage: 250},
            {holeNumber: 6, par: 4, yardage: 283},
            {holeNumber: 7, par: 4, yardage: 356},
            {holeNumber: 8, par: 3, yardage: 145},
            {holeNumber: 9, par: 4, yardage: 382},
            {holeNumber: "front", par: 35, yardage: 2678},
            {holeNumber: 10, par: 5, yardage: 325},
            {holeNumber: 11, par: 4, yardage: 332},
            {holeNumber: 12, par: 3, yardage: 130},
            {holeNumber: 13, par: 4, yardage: 309},
            {holeNumber: 14, par: 4, yardage: 350},
            {holeNumber: 15, par: 5, yardage: 444},
            {holeNumber: 16, par: 3, yardage: 158},
            {holeNumber: 17, par: 4, yardage: 343},
            {holeNumber: 18, par: 4, yardage: 132},
            {holeNumber: "back", par: 36, yardage: 2523},
            {holeNumber: "total", par: 71, yardage: 5201}
        ],
        White: [
            {holeNumber: 1, par: 5, yardage: 446},
            {holeNumber: 2, par: 3, yardage: 203},
            {holeNumber: 3, par: 3, yardage: 130},
            {holeNumber: 4, par: 5, yardage: 483},
            {holeNumber: 5, par: 4, yardage: 261},
            {holeNumber: 6, par: 4, yardage: 321},
            {holeNumber: 7, par: 4, yardage: 356},
            {holeNumber: 8, par: 3, yardage: 145},
            {holeNumber: 9, par: 4, yardage: 382},
            {holeNumber: "front", par: 35, yardage: 2727},
            {holeNumber: 10, par: 5, yardage: 470},
            {holeNumber: 11, par: 4, yardage: 338},
            {holeNumber: 12, par: 3, yardage: 149},
            {holeNumber: 13, par: 4, yardage: 315},
            {holeNumber: 14, par: 4, yardage: 368},
            {holeNumber: 15, par: 5, yardage: 500},
            {holeNumber: 16, par: 3, yardage: 165},
            {holeNumber: 17, par: 4, yardage: 359},
            {holeNumber: 18, par: 4, yardage: 351},
            {holeNumber: "back", par: 36, yardage: 3015},
            {holeNumber: "total", par: 71, yardage: 5742}
        ],
        Blue: [
            {holeNumber: 1, par: 5, yardage: 446},
            {holeNumber: 2, par: 3, yardage: 213},
            {holeNumber: 3, par: 3, yardage: 140},
            {holeNumber: 4, par: 5, yardage: 493},
            {holeNumber: 5, par: 4, yardage: 271},
            {holeNumber: 6, par: 4, yardage: 331},
            {holeNumber: 7, par: 4, yardage: 366},
            {holeNumber: 8, par: 3, yardage: 155},
            {holeNumber: 9, par: 4, yardage: 392},
            {holeNumber: "front", par: 35, yardage: 2817},
            {holeNumber: 10, par: 5, yardage: 499},
            {holeNumber: 11, par: 4, yardage: 359},
            {holeNumber: 12, par: 3, yardage: 180},
            {holeNumber: 13, par: 4, yardage: 339},
            {holeNumber: 14, par: 4, yardage: 391},
            {holeNumber: 15, par: 5, yardage: 526},
            {holeNumber: 16, par: 3, yardage: 183},
            {holeNumber: 17, par: 4, yardage: 386},
            {holeNumber: 18, par: 4, yardage: 373},
            {holeNumber: "back", par: 36, yardage: 3236},
            {holeNumber: "total", par: 71, yardage: 6053}
        ]
    
    }
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
const createTournamentBtn = document.getElementById("create-tournament-btn");
const startTournamentBtn = document.getElementById("start-tournament-btn");
const tournamentForm = document.getElementById("tournament-form");
const tournamentCourseDropdown = document.getElementById("tournament-course");
const tournamentTeesDropdown = document.getElementById("tournament-tees");


const rounds = [];
const golfers = [];
const golferHandicaps = [];


function populateCourseDropdown (dropdown) {
    dropdown.innerHTML = '<option value="">Select a Course</option>';
    Object.keys(courseData).forEach(courseKey => {
        const option = document.createElement("option");
        option.value = courseKey;
        option.textContent = courseNames[courseKey];
        dropdown.appendChild(option);
    })
}
populateCourseDropdown(courseDropdown);
populateCourseDropdown(tournamentCourseDropdown);

courseDropdown.addEventListener("change", () => {
    populateTeesDropdown(courseDropdown, teesDropdown);
});

tournamentCourseDropdown.addEventListener("change", () => {
    populateTeesDropdown(tournamentCourseDropdown, tournamentTeesDropdown);
});

function populateTeesDropdown(courseDropdown, teesDropdown){
    teesDropdown.innerHTML = "<option value=''>Select Tees Played </option>";
    const selectedCourse = courseDropdown.value; 

    if (courseData[selectedCourse]){
        const courseInfo = courseData[selectedCourse];
        for (const teeName in courseInfo.tees){
            const teeData = courseInfo.tees[teeName];
            const newOption = document.createElement("option");
            newOption.value = teeName;
            newOption.textContent = `${teeName} (${teeData.yardage} yds) - Par ${teeData.par}, Rating ${teeData.courseRating}, Slope ${teeData.slopeRating}`;
            teesDropdown.appendChild(newOption);
        }
        
    }
}

function updateGolferDropdowns(){
    golferSelect.innerHTML = '<option value="">Select Golfer</option>';
    golfers.forEach(golfer => {
        const option = document.createElement("option");
        option.value = golfer;
        option.textContent = golfer;
        golferSelect.appendChild(option);
    });

    const tournamentGolfers = document.getElementById("tournament-golfers");
    golfers.forEach(golfer => {
        const option = document.createElement("option");
        option.value = golfer;
        option.textContent = golfer;
        tournamentGolfers.appendChild(option);
    })
}

function addGolfer(golferName) {
    if (!golfers.includes(golferName)){
    golfers.push(golferName);
    updateGolferHandicap(golferName);
    updateGolferDropdowns();
} else {
    alert("This golfer already exists. Please enter a new golfer.")
}
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


/*function populateScorecard(courseName, teeColor) {
    const course = scorecardData[courseName];
    const tee = course[teeColor];
    const parCells = document.querySelectorAll(".hole-cell");
    const yardageCells = document.querySelectorAll(".yardage-cell");

    tee.forEach((hole, index) => {
        if (parCells[index]) {
            parCells[index].innerText = hole.par;
            yardageCells[index].innerText = hole.yardage;
        }
    })
}*/



createTournamentBtn.addEventListener("click", () => {
    tournamentForm.classList.toggle("hidden");
    
});


//populateScorecard("grandFallsGolfClub", "White");

   
function generateScorecard(courseName, teeColor/*, golfers, roundNumber*/) {
    const course = scorecardData[courseName];
    const tee = course[teeColor];

    const table = document.createElement("table");
    table.classList.add("scorecard-table");

    const headerRow = document.createElement("tr");
    const holes = [ "HOLE", "1", "2", "3", "4", "5", "6", "7", "8", "9", "OUT", "10", "11", "12", "13", "14", "15", "16", "17", "18", "IN", "TOTAL"];
    holes.forEach(hole => {
        const th = document.createElement("th");
        th.textContent = hole;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    const yardageRow = document.createElement("tr");
    yardageRow.classList.add("yardage-row");
    yardageRow.innerHTML = `<td>YDS</td>`;

    tee.forEach(hole => {
        const td = document.createElement("td");
        td.textContent = hole.yardage;
        yardageRow.appendChild(td);
    });
    table.appendChild(yardageRow);

    const parRow = document.createElement("tr");
    parRow.classList.add("par-row");
    parRow.innerHTML = `<td>PAR</td>`;

    tee.forEach(hole => {
        const td = document.createElement("td");
        td.textContent = hole.par;
        parRow.appendChild(td);
    });
    table.appendChild(parRow);

    return table;
    
}    
    
 

startTournamentBtn.addEventListener("click", () => {
    const table = generateScorecard("grandFallsGolfClub", "White");
    document.getElementById('scorecard-container').appendChild(table);  // Append the generated table to the container
});

   
    


  


