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

const courseData = {
  ballyHalyCountryClubNorth: {
    tees: {
      Silver: { yardage: 2826, par: 61, courseRating: 56.4, slopeRating: 83 },
      Blue: { yardage: 5662, par: 61, courseRating: 58.1, slopeRating: 85 },
      Black: { yardage: 6137, par: 61, courseRating: 59.3, slopeRating: 94 },
    },
  },
  ballyHalyCountryClubSouth: {
    tees: {
      Silver: { yardage: 5082, par: 72, courseRating: 66.4, slopeRating: 105 },
      "Green/Silver": {
        yardage: 5339,
        par: 72,
        courseRating: 67.5,
        slopeRating: 109,
      },
      Green: { yardage: 5593, par: 72, courseRating: 68.2, slopeRating: 115 },
      "Blue/Green": {
        yardage: 5863,
        par: 72,
        courseRating: 69.2,
        slopeRating: 122,
      },
      Blue: { yardage: 6100, par: 72, courseRating: 70.4, slopeRating: 126 },
      "Black/Blue": {
        yardage: 6344,
        par: 72,
        courseRating: 71.4,
        slopeRating: 131,
      },
      Black: { yardage: 6581, par: 72, courseRating: 72.9, slopeRating: 128 },
    },
  },
  blomidonGolfClub: {
    tees: {
      Red: { yardage: 5193, par: 70, courseRating: 65.2, slopeRating: 111 },
      White: { yardage: 5526, par: 70, courseRating: 68.2, slopeRating: 120 },
      Blue: { yardage: 5729, par: 70, courseRating: 69.9, slopeRating: 119 },
    },
  },
  ganderGolfClub: {
    tees: {
      Red: { yardage: 5164, par: 70, courseRating: 66.1, slopeRating: 122 },
      White: { yardage: 5662, par: 70, courseRating: 68.8, slopeRating: 131 },
      Blue: { yardage: 6137, par: 70, courseRating: 71.2, slopeRating: 136 },
    },
  },
  grandFallsGolfClub: {
    tees: {
      Red: { yardage: 5201, par: 71, courseRating: 65.7, slopeRating: 113 },
      White: { yardage: 5742, par: 71, courseRating: 68.6, slopeRating: 125 },
      Blue: { yardage: 6053, par: 71, courseRating: 70.7, slopeRating: 127 },
    },
  },
  grandeMeadowsGolfClub: {
    tees: {
      Red: { yardage: 4960, par: 72, courseRating: 66.4, slopeRating: 121 },
      "Red/Yellow": {
        yardage: 5219,
        par: 72,
        courseRating: 66.7,
        slopeRating: 122,
      },
      Yellow: { yardage: 4678, par: 72, courseRating: 67.0, slopeRating: 119 },
      White: { yardage: 5868, par: 72, courseRating: 69.6, slopeRating: 111 },
      Blue: { yardage: 5888, par: 72, courseRating: 69.6, slopeRating: 111 },
      "White/Blue": {
        yardage: 5921,
        par: 72,
        courseRating: 69.6,
        slopeRating: 111,
      },
    },
  },
  glenDenning: {
    tees: {
      White: { yardage: 4705, par: 71, courseRating: 64.2, slopeRating: 101 },
      "Blue/White": {
        yardage: 5472,
        par: 71,
        courseRating: 67.8,
        slopeRating: 110,
      },
      Blue: { yardage: 5795, par: 71, courseRating: 69.6, slopeRating: 114 },
      "Gold/Blue": {
        yardage: 6011,
        par: 71,
        courseRating: 70.2,
        slopeRating: 120,
      },
      Gold: { yardage: 6214, par: 71, courseRating: 71.2, slopeRating: 123 },
    },
  },
  humberValleyResort: {
    tees: {
      Red: { yardage: 5484, par: 72, courseRating: 66.2, slopeRating: 110 },
      Green: { yardage: 6049, par: 72, courseRating: 68.3, slopeRating: 115 },
      White: { yardage: 6441, par: 72, courseRating: 70.9, slopeRating: 119 },
      Blue: { yardage: 6858, par: 72, courseRating: 73.0, slopeRating: 125 },
      Gold: { yardage: 7199, par: 72, courseRating: 74.5, slopeRating: 129 },
    },
  },
  pippyParkAdmiralsGreen: {
    tees: {
      Red: { yardage: 4220, par: 65, courseRating: 62.8, slopeRating: 97 },
      "Silver/Red": {
        yardage: 4628,
        par: 66,
        courseRating: 64.1,
        slopeRating: 98,
      },
      Silver: { yardage: 5042, par: 68, courseRating: 65.6, slopeRating: 106 },
      "Gold/Silver": {
        yardage: 5439,
        par: 71,
        courseRating: 67.5,
        slopeRating: 113,
      },
      Gold: { yardage: 5784, par: 71, courseRating: 120, slopeRating: 120 },
      Black: { yardage: 6263, par: 71, courseRating: 71.4, slopeRating: 125 },
    },
  },
  terraNovaTwinRivers: {
    tees: {
      Front: { yardage: 5423, par: 71, courseRating: 66.5, slopeRating: 119 },
      Intermediate: {
        yardage: 6066,
        par: 71,
        courseRating: 69.6,
        slopeRating: 123,
      },
      Championship: {
        yardage: 6546,
        par: 71,
        courseRating: 72.5,
        slopeRating: 126,
      },
    },
  },
  theWildsGolfResort: {
    tees: {
      White: { yardage: 6074, par: 72, courseRating: 70.6, slopeRating: 127 },
      Blue: { yardage: 6365, par: 72, courseRating: 71.8, slopeRating: 130 },
      Gold: { yardage: 6772, par: 72, courseRating: 73.7, slopeRating: 138 },
    },
  },
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
  theWildsGolfResort: "The Wilds Golf Resort",
};
const scorecardData = {
  grandFallsGolfClub: {
    Red: [
      { holeNumber: 1, par: 5, yardage: 446 },
      { holeNumber: 2, par: 3, yardage: 203 },
      { holeNumber: 3, par: 3, yardage: 130 },
      { holeNumber: 4, par: 5, yardage: 483 },
      { holeNumber: 5, par: 4, yardage: 250 },
      { holeNumber: 6, par: 4, yardage: 283 },
      { holeNumber: 7, par: 4, yardage: 356 },
      { holeNumber: 8, par: 3, yardage: 145 },
      { holeNumber: 9, par: 4, yardage: 382 },
      { holeNumber: "out", par: 35, yardage: 2678 },
      { holeNumber: 10, par: 5, yardage: 325 },
      { holeNumber: 11, par: 4, yardage: 332 },
      { holeNumber: 12, par: 3, yardage: 130 },
      { holeNumber: 13, par: 4, yardage: 309 },
      { holeNumber: 14, par: 4, yardage: 350 },
      { holeNumber: 15, par: 5, yardage: 444 },
      { holeNumber: 16, par: 3, yardage: 158 },
      { holeNumber: 17, par: 4, yardage: 343 },
      { holeNumber: 18, par: 4, yardage: 132 },
      { holeNumber: "in", par: 36, yardage: 2523 },
      { holeNumber: "total", par: 71, yardage: 5201 },
    ],
    White: [
      { holeNumber: 1, par: 5, yardage: 446 },
      { holeNumber: 2, par: 3, yardage: 203 },
      { holeNumber: 3, par: 3, yardage: 130 },
      { holeNumber: 4, par: 5, yardage: 483 },
      { holeNumber: 5, par: 4, yardage: 261 },
      { holeNumber: 6, par: 4, yardage: 321 },
      { holeNumber: 7, par: 4, yardage: 356 },
      { holeNumber: 8, par: 3, yardage: 145 },
      { holeNumber: 9, par: 4, yardage: 382 },
      { holeNumber: "out", par: 35, yardage: 2727 },
      { holeNumber: 10, par: 5, yardage: 470 },
      { holeNumber: 11, par: 4, yardage: 338 },
      { holeNumber: 12, par: 3, yardage: 149 },
      { holeNumber: 13, par: 4, yardage: 315 },
      { holeNumber: 14, par: 4, yardage: 368 },
      { holeNumber: 15, par: 5, yardage: 500 },
      { holeNumber: 16, par: 3, yardage: 165 },
      { holeNumber: 17, par: 4, yardage: 359 },
      { holeNumber: 18, par: 4, yardage: 351 },
      { holeNumber: "in", par: 36, yardage: 3015 },
      { holeNumber: "total", par: 71, yardage: 5742 },
    ],
    Blue: [
      { holeNumber: 1, par: 5, yardage: 446 },
      { holeNumber: 2, par: 3, yardage: 213 },
      { holeNumber: 3, par: 3, yardage: 140 },
      { holeNumber: 4, par: 5, yardage: 493 },
      { holeNumber: 5, par: 4, yardage: 271 },
      { holeNumber: 6, par: 4, yardage: 331 },
      { holeNumber: 7, par: 4, yardage: 366 },
      { holeNumber: 8, par: 3, yardage: 155 },
      { holeNumber: 9, par: 4, yardage: 392 },
      { holeNumber: "out", par: 35, yardage: 2817 },
      { holeNumber: 10, par: 5, yardage: 499 },
      { holeNumber: 11, par: 4, yardage: 359 },
      { holeNumber: 12, par: 3, yardage: 180 },
      { holeNumber: 13, par: 4, yardage: 339 },
      { holeNumber: 14, par: 4, yardage: 391 },
      { holeNumber: 15, par: 5, yardage: 526 },
      { holeNumber: 16, par: 3, yardage: 183 },
      { holeNumber: 17, par: 4, yardage: 386 },
      { holeNumber: 18, par: 4, yardage: 373 },
      { holeNumber: "in", par: 36, yardage: 3236 },
      { holeNumber: "total", par: 71, yardage: 6053 },
    ],
  },
  terraNovaTwinRivers: {
    Front: [
      { holeNumber: 1, par: 4, yardage: 357 },
      { holeNumber: 2, par: 5, yardage: 440 },
      { holeNumber: 3, par: 3, yardage: 160 },
      { holeNumber: 4, par: 4, yardage: 340 },
      { holeNumber: 5, par: 4, yardage: 339 },
      { holeNumber: 6, par: 4, yardage: 355 },
      { holeNumber: 7, par: 4, yardage: 348 },
      { holeNumber: 8, par: 3, yardage: 125 },
      { holeNumber: 9, par: 5, yardage: 387 },
      { holeNumber: "out", par: 36, yardage: 2851 },
      { holeNumber: 10, par: 4, yardage: 283 },
      { holeNumber: 11, par: 3, yardage: 113 },
      { holeNumber: 12, par: 3, yardage: 134 },
      { holeNumber: 13, par: 4, yardage: 284 },
      { holeNumber: 14, par: 4, yardage: 371 },
      { holeNumber: 15, par: 5, yardage: 454 },
      { holeNumber: 16, par: 5, yardage: 358 },
      { holeNumber: 17, par: 4, yardage: 365 },
      { holeNumber: 18, par: 3, yardage: 110 },
      { holeNumber: "in", par: 35, yardage: 2572 },
      { holeNumber: "total", par: 71, yardage: 5423 },
    ],
    Intermediate: [
      { holeNumber: 1, par: 4, yardage: 396 },
      { holeNumber: 2, par: 5, yardage: 468 },
      { holeNumber: 3, par: 3, yardage: 177 },
      { holeNumber: 4, par: 4, yardage: 416 },
      { holeNumber: 5, par: 4, yardage: 368 },
      { holeNumber: 6, par: 4, yardage: 373 },
      { holeNumber: 7, par: 4, yardage: 372 },
      { holeNumber: 8, par: 3, yardage: 141 },
      { holeNumber: 9, par: 5, yardage: 442 },
      { holeNumber: "out", par: 36, yardage: 3153 },
      { holeNumber: 10, par: 4, yardage: 304 },
      { holeNumber: 11, par: 3, yardage: 214 },
      { holeNumber: 12, par: 3, yardage: 144 },
      { holeNumber: 13, par: 4, yardage: 321 },
      { holeNumber: 14, par: 4, yardage: 410 },
      { holeNumber: 15, par: 5, yardage: 492 },
      { holeNumber: 16, par: 5, yardage: 504 },
      { holeNumber: 17, par: 4, yardage: 389 },
      { holeNumber: 18, par: 3, yardage: 135 },
      { holeNumber: "in", par: 35, yardage: 2913 },
      { holeNumber: "total", par: 71, yardage: 6066 },
    ],
    Championship: [
      { holeNumber: 1, par: 4, yardage: 423 },
      { holeNumber: 2, par: 5, yardage: 521 },
      { holeNumber: 3, par: 3, yardage: 212 },
      { holeNumber: 4, par: 4, yardage: 431 },
      { holeNumber: 5, par: 4, yardage: 390 },
      { holeNumber: 6, par: 4, yardage: 394 },
      { holeNumber: 7, par: 4, yardage: 383 },
      { holeNumber: 8, par: 3, yardage: 161 },
      { holeNumber: 9, par: 5, yardage: 480 },
      { holeNumber: "out", par: 36, yardage: 3395 },
      { holeNumber: 10, par: 4, yardage: 319 },
      { holeNumber: 11, par: 3, yardage: 243 },
      { holeNumber: 12, par: 3, yardage: 157 },
      { holeNumber: 13, par: 4, yardage: 349 },
      { holeNumber: 14, par: 4, yardage: 436 },
      { holeNumber: 15, par: 5, yardage: 510 },
      { holeNumber: 16, par: 5, yardage: 542 },
      { holeNumber: 17, par: 4, yardage: 420 },
      { holeNumber: 18, par: 3, yardage: 175 },
      { holeNumber: "in", par: 35, yardage: 3151 },
      { holeNumber: "total", par: 71, yardage: 6546 },
    ],
  },
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
const postScoreForm = document.getElementById("post-score-form");
const createTournamentBtn = document.getElementById("create-tournament-btn");
const startTournamentBtn = document.getElementById("start-tournament-btn");
const tournamentForm = document.getElementById("tournament-form");
const tournamentCourseDropdown = document.getElementById("tournament-course");
const tournamentTeesDropdown = document.getElementById("tournament-tees");

const rounds = [];
const golfers = [];
const golferHandicaps = [];
let tournamentScores = {};

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
    if (!Array.from(tournamentGolfers.options).some(option => option.value === golfer)){
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
addGolferBtn.addEventListener("click", () => {
  newGolferInput.style.display = "block";
});

submitNewGolferBtn.addEventListener("click", () => {
  const golferName = newGolferNameInput.value;
  if (golferName) {
    addGolfer(golferName);
    newGolferInput.value = "";
    newGolferInput.style.display = "none";
  }
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
  });
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
    holes,
    score,
  };
  rounds.push(round);
  updateGolferHandicap(golferName);
  updateRankingsTable();

  scoreForm.reset();
});

createTournamentBtn.addEventListener("click", () => {
  tournamentForm.classList.toggle("hidden");
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

  submitButton.addEventListener("click", () => {
    document
      .querySelectorAll(`input[data-round="${roundNumber}"]`)
      .forEach((input) => {
        const hole = input.dataset.hole;
        const score = parseInt(input.value, 10) || "-";

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
    submitButton.disabled = true;
    submitButton.textContent = "Round Submitted";
    submitButton.classList.add("submitted");
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
    outTotalElement.textContent = `${outTotal} (${
    outStrokesAbovePar === 0 ? "E" : outStrokesAbovePar >= 0 ? `+${outStrokesAbovePar}` : outStrokesAbovePar
  })`;
  }

  const inTotalElement = document.querySelector(
    `.in-total[data-golfer="${golfer}"][data-round="${round}"]`
  );

  if (inTotalElement) {
    inTotalElement.textContent = `${inTotal} (${
    inStrokesAbovePar === 0 ? "E" : inStrokesAbovePar >= 0 ? `+${inStrokesAbovePar}` : inStrokesAbovePar
  })`;
  }

  const roundTotalElement = document.querySelector(
    `.round-total[data-golfer="${golfer}"][data-round="${round}"]`
  );
  if (roundTotalElement) {
    roundTotalElement.textContent = `${roundTotal} (${
    roundStrokesAbovePar === 0 ? "E" : roundStrokesAbovePar >= 0 ? `+${roundStrokesAbovePar}` : roundStrokesAbovePar
  })`;
  }

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

  const scorecardContainer = document.getElementById("scorecard-container");
  scorecardContainer.innerHTML = "";

  golfers.forEach((golfer) => {
    if (!tournamentScores[golfer]) tournamentScores[golfer] = {};
    for (let i = 1; i <= rounds; i++) {
      tournamentScores[golfer][i] = new Array(18).fill(0);
    }
  });

  for (let i = 1; i <= rounds; i++) {
    const scorecard = generateScorecard(course, tees, golfers, i);
    scorecardContainer.appendChild(scorecard);
  }
}

startTournamentBtn.addEventListener("click", createTournament);
