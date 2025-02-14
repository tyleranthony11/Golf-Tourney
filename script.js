import { courseData, courseNames, scorecardData } from './courses.js';
const golferSelect = document.getElementById("golfer-name-dropdown");
const roundsList = document.getElementById("rounds-list");
const scoreForm = document.getElementById("score-form");
const newGolferInput = document.getElementById("new-golfer-input");
const submitNewGolferBtn = document.getElementById("submit-new-golfer");
const newGolferNameInput = document.getElementById("new-golfer-name");
const courseDropdown = document.getElementById("course");
const teesDropdown = document.getElementById("tees");
const postScoreBtn = document.getElementById("post-score-btn");
const postScoreForm = document.getElementById("post-score-form");
const createTournamentBtn = document.getElementById("create-tournament-btn");
const startTournamentBtn = document.getElementById("start-tournament-btn");
const tournamentForm = document.getElementById("tournament-form");
const tournamentCourseDropdown = document.getElementById("tournament-course");
const tournamentTeesDropdown = document.getElementById("tournament-tees");
const leaderboardContainer = document.getElementById("leaderboard-container");
const scorecardContainer = document.getElementById("scorecard-container");
const handicapRankingsContainer = document.getElementById("handicap-rankings-container");
const slides = document.querySelectorAll(".carousel-slide");
const emptyHandicapRankings = document.getElementById("empty-handicap-rankings");
const emptyLeaderboard = document.getElementById("empty-leaderboard");



let tournamentScores = {};
const rounds = [];
const golfers = [];
const golferHandicaps = [];

document.getElementById('homeTab').addEventListener('click', (event) => switchTab('home', event));
document.getElementById('postRoundTab').addEventListener('click', (event) => switchTab('post-round', event));
document.getElementById('handicapRankingsTab').addEventListener('click', (event) => switchTab('handicap-rankings', event));
document.getElementById('tournamentScorecardTab').addEventListener('click', (event) => switchTab('tournament-scorecard', event));
document.getElementById('tournamentLeaderboardTab').addEventListener('click', (event) => switchTab('tournament-leaderboard', event));
document.getElementById("start-tournament-link").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("tournamentScorecardTab").click();
});
document.getElementById("post-score-link").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("postRoundTab").click();
});

function switchTab(tabName, event) {
  event.preventDefault();

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("tab-active");
  });

  const links = document.querySelectorAll(".topnav a");
  links.forEach((link) => {
    link.classList.remove("active");
  });

  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.classList.add("tab-active");
  }

  const selectedLink = event.target;
  selectedLink.classList.add("active");
}



function showSlide(index){
  slides.forEach((slide, i) => {
    if (i === index){
      slide.classList.add("show");
      slide.style.opacity = 1;
    } else {
      slide.classList.remove("show");
      slide.style.opacity = 0;
    }
   
  });
}
let currentIndex = 0;
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}
showSlide(currentIndex);
setInterval(nextSlide, 8000);




function populateCourseDropdown(dropdown) {
  dropdown.innerHTML = '<option value="">Select a Course</option>';
  Object.keys(courseData).forEach((courseKey) => {
    const option = document.createElement("option");
    option.value = courseKey;
    option.textContent = courseNames[courseKey];
    dropdown.appendChild(option);
  });
}
populateCourseDropdown(courseDropdown);
populateCourseDropdown(tournamentCourseDropdown);

courseDropdown.addEventListener("change", () => {
  populateTeesDropdown(courseDropdown, teesDropdown);
});

tournamentCourseDropdown.addEventListener("change", () => {
  populateTeesDropdown(tournamentCourseDropdown, tournamentTeesDropdown);
});

function populateTeesDropdown(courseDropdown, teesDropdown) {
  teesDropdown.innerHTML = "<option value=''>Select Tees Played </option>";
  const selectedCourse = courseDropdown.value;

  if (courseData[selectedCourse]) {
    const courseInfo = courseData[selectedCourse];
    for (const teeName in courseInfo.tees) {
      const teeData = courseInfo.tees[teeName];
      const newOption = document.createElement("option");
      newOption.value = teeName;
      newOption.textContent = `${teeName} (${teeData.yardage} yds) - Par ${teeData.par}, Rating ${teeData.courseRating}, Slope ${teeData.slopeRating}`;
      teesDropdown.appendChild(newOption);
    }
  }
}

function updateGolferDropdowns() {
  golferSelect.innerHTML = '<option value="">Select Golfer</option>';
  golfers.forEach((golfer) => {
    const option = document.createElement("option");
    option.value = golfer;
    option.textContent = golfer;
    golferSelect.appendChild(option);
  });

  const tournamentGolfers = document.getElementById("tournament-golfers");
  golfers.forEach((golfer) => {
    if (
      !Array.from(tournamentGolfers.options).some(
        (option) => option.value === golfer
      )
    ) {
      const option = document.createElement("option");
      option.value = golfer;
      option.textContent = golfer;
      tournamentGolfers.appendChild(option);
    }
  });
}

function addGolfer(golferName) {
  if (!golfers.includes(golferName)) {
    golfers.push(golferName);
    updateGolferHandicap(golferName);
    updateGolferDropdowns();
  } else {
    alert("This golfer already exists. Please enter a new golfer.");
  }
}

newGolferNameInput.addEventListener("input", () => {
  if (newGolferNameInput.value.trim() === "") {
    submitNewGolferBtn.disabled = true;
  } else {
    submitNewGolferBtn.disabled = false;
  }
});

submitNewGolferBtn.addEventListener("click", () => {
  const golferName = newGolferNameInput.value;
  if (golferName) {
    addGolfer(golferName);
    newGolferInput.value = "";  
  }
  newGolferNameInput.value = "";
  newGolferNameInput.dispatchEvent(new Event("input")); 
});

postScoreBtn.addEventListener("click", () => {
  if (postScoreForm.style.display === "none") {
    postScoreForm.style.display = "block";
    postScoreBtn.textContent = "Cancel";
  } else {
    postScoreForm.style.display = "none";
    postScoreBtn.textContent = "Post Score";
  }
});

function calculateHandicap(golferName) {
  const golferRounds = rounds.filter(
    (round) => round.golferName === golferName
  );
  golferRounds.sort((a, b) => new Date(b.datePlayed) - new Date(a.datePlayed));
  const recentRounds = golferRounds.slice(0, 20);

  const differentials = recentRounds.map((round) => {
    const { score, courseValue, tees } = round;
    const courseInfo = courseData[courseValue];
    const teeInfo = courseInfo.tees[tees];
    const { courseRating, slopeRating } = teeInfo;
    const differential = (113 / slopeRating) * (score - courseRating);
    return differential;
  });

  differentials.sort((a, b) => a - b);
  const lowestDifferentials = differentials.slice(0, 8);
  let total = 0;
  for (let i = 0; i < lowestDifferentials.length; i++) {
    total += lowestDifferentials[i];
  }
  const averageDifferential = total / lowestDifferentials.length;

  return averageDifferential.toFixed(1);
}

function updateRankingsTable() {
   const rankingsTable = document.getElementById("rankings-table-body");
   emptyHandicapRankings.style.display = "none";
  

  rankingsTable.innerHTML = "";

  if (golferHandicaps.length > 0) {
  golferHandicaps.sort((a, b) => a.handicap - b.handicap);

  golferHandicaps.forEach((golfer, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${golfer.name}</td>
            <td>${golfer.handicap}</td>
            `;
    rankingsTable.appendChild(row);
  });

  handicapRankingsContainer.style.display = "block";
    handicapRankingsContainer.classList.add("visible");
  
} else {
  emptyHandicapRankings.style.display = "block";
}
}

function updateGolferHandicap(golferName) {
  const handicap = calculateHandicap(golferName);
  const golferIndex = golferHandicaps.findIndex(
    (golfer) => golfer.name === golferName
  );
  if (golferIndex !== -1) {
    golferHandicaps[golferIndex].handicap = handicap;
  } else {
    golferHandicaps.push({ name: golferName, handicap });
  }
  updateRankingsTable();
}



scoreForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const golferName = document.getElementById("golfer-name-dropdown").value;
  const datePlayed = document.getElementById("date-played").value;
  const courseValue = document.getElementById("course").value;
  const course = courseNames[courseValue];
  const tees =
    document.getElementById("tees").value.charAt(0).toUpperCase() +
    document.getElementById("tees").value.slice(1);
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
                <strong>Score:</strong> ${score} (${
    strokesAbovePar >= 0 ? "+" : ""
  }${strokesAbovePar})`;

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
    score,
  };
  rounds.push(round);
  updateGolferHandicap(golferName);
  updateRankingsTable();
  

  scoreForm.reset();
});

createTournamentBtn.addEventListener("click", () => {
  tournamentForm.style.display = "flex";
});

function generateScorecard(courseName, teeColor, golfers, roundNumber) {
  const course = scorecardData[courseName];
  const tee = course[teeColor];

  const scorecardContainer = document.createElement("div");
  scorecardContainer.classList.add("scorecard-container");

  const table = document.createElement("table");
  table.classList.add("scorecard-table");

  const headerRow = document.createElement("tr");
  const holes = [
    "HOLE",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "OUT",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "IN",
    `R${roundNumber}`,
    "TOTAL",
  ];
  holes.forEach((hole) => {
    const th = document.createElement("th");
    th.textContent = hole;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  const yardageRow = document.createElement("tr");
  yardageRow.classList.add("yardage-row");
  yardageRow.innerHTML = `<td>YDS</td>`;

  for (let i = 0; i < 21; i++) {
    const td = document.createElement("td");
    td.textContent = tee[i].yardage;
    yardageRow.appendChild(td);
  }

  table.appendChild(yardageRow);

  const parRow = document.createElement("tr");
  parRow.classList.add("par-row");
  parRow.innerHTML = `<td>PAR</td>`;
  for (let i = 0; i < 21; i++) {
    const td = document.createElement("td");
    td.textContent = tee[i].par;
    parRow.appendChild(td);
  }

  table.appendChild(parRow);

  golfers.forEach((golfer) => {
    const golferRow = document.createElement("tr");
    golferRow.classList.add("golfer-row");
    golferRow.innerHTML = `<td>${golfer}</td>`;

    for (let i = 1; i <= 18; i++) {
      const td = document.createElement("td");
      const input = document.createElement("input");
      input.type = "number";
      input.min = "1";
      input.classList.add("hole-score");
      input.dataset.hole = i;
      input.dataset.golfer = golfer;
      input.dataset.round = roundNumber;
      input.addEventListener("input", (event) => updateTotals(event, tee));
      td.appendChild(input);
      golferRow.appendChild(td);
      if (i === 9 || i === 18) {
        const totalTd = document.createElement("td");
        totalTd.classList.add(i === 9 ? "out-total" : "in-total");
        totalTd.dataset.golfer = golfer;
        totalTd.dataset.round = roundNumber;
        totalTd.textContent = "0";
        golferRow.appendChild(totalTd);
      }
    }

    const roundTotal = document.createElement("td");
    roundTotal.classList.add("round-total");
    roundTotal.dataset.golfer = golfer;
    roundTotal.dataset.round = roundNumber;
    roundTotal.textContent = "0";
    golferRow.appendChild(roundTotal);

    const tournamentTotal = document.createElement("td");
    tournamentTotal.classList.add("tournament-total");
    tournamentTotal.dataset.golfer = golfer;
    tournamentTotal.textContent = "0";
    golferRow.appendChild(tournamentTotal);

    table.appendChild(golferRow);
  });

  const submitButton = document.createElement("button");
  submitButton.textContent = `Submit Round ${roundNumber}`;
  submitButton.classList.add("submit-round-btn");
  submitButton.dataset.round = roundNumber;

 
  
  submitButton.addEventListener("click", function() {
    let allScoresFilled = true;


    Object.keys(tournamentScores).forEach((golfer) => {
      document.querySelectorAll(`input[data-round="${roundNumber}"][data-golfer="${golfer}"]`)
        .forEach((input) => {
          if (!input.value || input.value === "") {
            allScoresFilled = false;
            
          } 
        });
    });

    
    if (!allScoresFilled) {
      alert("Please enter score for all holes before submitting the round.");
      return; 
    }

    
    Object.keys(tournamentScores).forEach((golfer) => {
      document.querySelectorAll(`input[data-round="${roundNumber}"][data-golfer="${golfer}"]`)
        .forEach((input) => {
          const hole = input.dataset.hole;
          const score = parseInt(input.value, 10) || "-";
          const golfer = input.dataset.golfer;

          if (!tournamentScores[golfer]) tournamentScores[golfer] = {};
          if (!tournamentScores[golfer][roundNumber]) tournamentScores[golfer][roundNumber] = [];
          tournamentScores[golfer][roundNumber][hole - 1] = score;

          let holeIndex = parseInt(hole, 10) - 1;
          if (hole >= 10) {
            holeIndex = parseInt(hole, 10);
          }
          const par = parseInt(tee[holeIndex].par, 10);

          const span = document.createElement("span");
          span.textContent = score;
          span.classList.add("final-score");

          if (score !== "-") {
            const scoreDifference = score - par;

            if (scoreDifference <= -3) {
              span.classList.add("albatross");
            } else if (scoreDifference === -2) {
              span.classList.add("eagle");
            } else if (scoreDifference === -1) {
              span.classList.add("birdie");
            } else if (scoreDifference === 0) {
              span.classList.add("par");
            } else if (scoreDifference === 1) {
              span.classList.add("bogey");
            } else if (scoreDifference === 2) {
              span.classList.add("double-bogey");
            } else {
              span.classList.add("triple-bogey");
            }
          }

          input.parentNode.replaceChild(span, input);

          
        });
       
      
      const outTotalElement = document.querySelector(
        `.out-total[data-round="${roundNumber}"][data-golfer="${golfer}"]`
      );
      const inTotalElement = document.querySelector(
        `.in-total[data-round="${roundNumber}"][data-golfer="${golfer}"]`
      );
      const roundTotalElement = document.querySelector(
        `.round-total[data-round="${roundNumber}"][data-golfer="${golfer}"]`
      );

      if (outTotalElement) {
        outTotalElement.textContent += ` (${outTotalElement.dataset.strokesAbovePar})`;
      }
      if (inTotalElement) {
        inTotalElement.textContent += ` (${inTotalElement.dataset.strokesAbovePar})`;
      }
      if (roundTotalElement) {
        roundTotalElement.textContent += ` (${roundTotalElement.dataset.strokesAbovePar})`;
      }
      
    
      let tournamentStrokesAbovePar = 0;
      
      document.querySelectorAll(`.round-total[data-golfer="${golfer}"]`).forEach((roundElement) => {
        tournamentStrokesAbovePar += parseInt(roundElement.dataset.strokesAbovePar) || 0;
      });
      
      document.querySelectorAll(`.tournament-total[data-golfer="${golfer}"]`).forEach((roundElement) => {
        if (roundElement) {
          roundElement.textContent += 
            tournamentStrokesAbovePar === 0
            ? " (E)"
            : tournamentStrokesAbovePar > 0
            ? ` (+${tournamentStrokesAbovePar})`
            : ` (${tournamentStrokesAbovePar})`;
        }
      });
     
      submitButton.disabled = true;
      submitButton.textContent = "Round Submitted";
      submitButton.classList.add("submitted");
      updateLeaderboard();
      emptyLeaderboard.style.display = "none";
      leaderboardContainer.style.display = "block";
    });
});

  scorecardContainer.appendChild(table);
  scorecardContainer.appendChild(submitButton);

  

  return scorecardContainer;
}

function updateTotals(event, tee) {
  const input = event.target;
  const hole = parseInt(input.dataset.hole) - 1;
  const golfer = input.dataset.golfer;
  const round = input.dataset.round;
  const score = parseInt(input.value) || 0;

  tournamentScores[golfer][round][hole] = score;

  const outPar = tee[9].par;
  const inPar = tee[19].par;
  const totalPar = tee[20].par;

  const outTotal = Object.values(tournamentScores[golfer][round])
    .slice(0, 9)
    .reduce((sum, val) => sum + (val || 0), 0);

  const inTotal = tournamentScores[golfer][round]
    .slice(9, 18)
    .reduce((sum, val) => sum + val, 0);

  const roundTotal = outTotal + inTotal;

  const outStrokesAbovePar = outTotal - outPar;
  const inStrokesAbovePar = inTotal - inPar;
  const roundStrokesAbovePar = roundTotal - totalPar;


  const outTotalElement = document.querySelector(
    `.out-total[data-golfer="${golfer}"][data-round="${round}"]`
  );

  if (outTotalElement) {
    outTotalElement.textContent = `${outTotal}`;
  }

  const inTotalElement = document.querySelector(
    `.in-total[data-golfer="${golfer}"][data-round="${round}"]`
  );

  if (inTotalElement) {
    inTotalElement.textContent = `${inTotal}`;
  }

  const roundTotalElement = document.querySelector(
    `.round-total[data-golfer="${golfer}"][data-round="${round}"]`
  );
  if (roundTotalElement) {
    roundTotalElement.textContent = `${roundTotal}`;
  }

  outTotalElement.dataset.strokesAbovePar =
    outStrokesAbovePar === 0
      ? "E"
      : outStrokesAbovePar >= 0
      ? `+${outStrokesAbovePar}`
      : outStrokesAbovePar;
  inTotalElement.dataset.strokesAbovePar =
    inStrokesAbovePar === 0
      ? "E"
      : inStrokesAbovePar >= 0
      ? `+${inStrokesAbovePar}`
      : inStrokesAbovePar;
  roundTotalElement.dataset.strokesAbovePar =
    roundStrokesAbovePar === 0
      ? "E"
      : roundStrokesAbovePar >= 0
      ? `+${roundStrokesAbovePar}`
      : roundStrokesAbovePar;

  let tournamentTotal = 0;
  let tournamentStrokesAbovePar = 0;

  for (let i in tournamentScores[golfer]) {
    tournamentTotal += tournamentScores[golfer][i].reduce(
      (sum, val) => sum + val,
      0
    );
    tournamentStrokesAbovePar += roundStrokesAbovePar;
  }
  document
    .querySelectorAll(`.tournament-total[data-golfer="${golfer}"]`)
    .forEach((cell) => {
      cell.textContent = tournamentTotal;
    });
}

function createTournament() {
  const golfers = Array.from(
    document.getElementById("tournament-golfers").selectedOptions
  ).map((option) => option.value);
  const course = document.getElementById("tournament-course").value;
  const tees = document.getElementById("tournament-tees").value;
  const rounds = parseInt(document.getElementById("tournament-rounds").value);

 
  scorecardContainer.innerHTML = "";



  golfers.forEach((golfer) => {
    if (!tournamentScores[golfer]) tournamentScores[golfer] = {};
    for (let i = 1; i <= rounds; i++) {
      tournamentScores[golfer][i] = new Array(18).fill(0);
    }
  });

  for (let i = 1; i <= rounds; i++) {
    const roundHeading = document.createElement("h3");
    roundHeading.textContent = `Round ${i}:`;
    roundHeading.classList.add("round-heading");
    const scorecard = generateScorecard(course, tees, golfers, i);
    scorecardContainer.appendChild(roundHeading);
    scorecardContainer.appendChild(scorecard);
  }
  scorecardContainer.style.display = "block";
  tournamentForm.classList.toggle("hidden");
}

startTournamentBtn.addEventListener("click", function(event) {
  event.preventDefault();
  

  if (tournamentForm.checkValidity()) {
    resetScorecard();
    createTournament();
    tournamentForm.style.display = "none";
    createTournamentBtn.style.display = "block";
  } else {
    tournamentForm.reportValidity();
  }
  
});



function updateLeaderboard() {
  const leaderboardContainer = document.getElementById("leaderboard-container");
  leaderboardContainer.innerHTML = "";

  let leaderboard = [];
  let totalRounds = 0;

  
  for (let golfer in tournamentScores) {
    let totalScore = 0;
    let roundScores = [];
    let strokesAbovePar = [];

    for (let round in tournamentScores[golfer]) {
      let roundTotal = tournamentScores[golfer][round].reduce((sum, score) => sum + score, 0);
      let roundStrokesAbovePar = document.querySelector(
        `.round-total[data-golfer="${golfer}"][data-round="${round}"]`
      ).dataset.strokesAbovePar || 0;

      roundScores.push(roundTotal || 0);
      strokesAbovePar.push(roundStrokesAbovePar);
      totalScore += roundTotal || 0;
    }

    totalRounds = roundScores.length;
    leaderboard.push({ golfer, roundScores, strokesAbovePar,totalScore });
  }

 
  leaderboard.sort((a, b) => a.totalScore - b.totalScore);


  const table = document.createElement("table");
  table.classList.add("leaderboard-table");

  let headerRow = table.insertRow();
  headerRow.innerHTML = "<th>Rank</th><th>Golfer</th>";

  
  for (let i = 1; i <= totalRounds; i++) {
    headerRow.innerHTML += `<th>R${i}</th>`;
  }

  headerRow.innerHTML += "<th>Total</th>";

 
  leaderboard.forEach((entry, index) => {
    let row = table.insertRow();
    row.innerHTML = `<td>${index + 1}</td><td>${entry.golfer}</td>`;

    entry.roundScores.forEach((score, i) => {
      let strokesAbovePar = entry.strokesAbovePar[i];
      row.innerHTML += `<td>${score} (${strokesAbovePar >= 0 ? `${strokesAbovePar}` : strokesAbovePar})</td>`;
    });
    let totalStrokesAbovePar = entry.strokesAbovePar.reduce((a, b) => {
      return (parseFloat(a) || 0) + (parseFloat(b) || 0);
    }, 0);
    row.innerHTML += `<td>${entry.totalScore} (${totalStrokesAbovePar >= 0 ? `+${totalStrokesAbovePar}` : totalStrokesAbovePar})</td>`;
  });

  leaderboardContainer.appendChild(table);
}

function resetScorecard(){
  if (scorecardContainer) {
    scorecardContainer.innerHTML = "";
}}