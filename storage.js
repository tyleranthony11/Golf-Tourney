import { courseNames } from "./courses.js";
import { formatDate } from "./utils.js";

function saveTournamentToHistory() {
  const leaderboardContainer = document.getElementById("leaderboard-container");
  const scorecardContainer = document.getElementById("scorecard-container");
  const scorecardData = scorecardContainer.innerHTML;
  const leaderboardData = leaderboardContainer.innerHTML;
  const scorecardWithoutName = scorecardData.replace(/<h2>.*<\/h2>/, "");
  const datePlayed = document.getElementById("tournament-date").value;
  const tees = document.getElementById("tournament-tees").value;
  const country = document.getElementById("tournament-country-selection").value;

  const tournamentHistory =
    JSON.parse(localStorage.getItem("tournamentHistory")) || [];

  let courseName = "";

  if (country === "canada") {
    const courseKey = document.getElementById("tournament-course").value;
    courseName = courseNames[courseKey] || courseKey;
  } else {
    courseName = document.getElementById("course-search").value.trim();
  }

  const tournament = {
    datePlayed,
    course: courseName,
    tees,
    scorecard: scorecardWithoutName,
    leaderboard: leaderboardData,
  };

  tournamentHistory.push(tournament);
  localStorage.setItem("tournamentHistory", JSON.stringify(tournamentHistory));

  updateHistoryTab();
}
function updateHistoryTab() {
  const historyList = document.getElementById("history-list");
  const emptyHistory = document.getElementById("empty-history");
  historyList.innerHTML = "";

  const tournamentHistory =
    JSON.parse(localStorage.getItem("tournamentHistory")) || [];

  if (tournamentHistory.length === 0) {
    emptyHistory.style.display = "block";
    historyList.style.display = "none";
  } else {
    emptyHistory.style.display = "none";
    historyList.style.display = "block";
  }

  tournamentHistory.forEach((tournament, index) => {
    const tournamentItem = document.createElement("div");
    tournamentItem.classList.add("tournament-item");

    const leaderboard = document.createElement("div");
    leaderboard.classList.add("leaderboard-preview");
    leaderboard.innerHTML = tournament.leaderboard;
    tournamentItem.appendChild(leaderboard);

    const scorecard = document.createElement("div");
    scorecard.classList.add("scorecard-details");
    scorecard.innerHTML = tournament.scorecard;
    scorecard.style.display = "none";

    const formattedDate = formatDate(tournament.datePlayed);
    const detailsSection = document.createElement("div");
    detailsSection.classList.add("tournament-details");
    detailsSection.innerHTML = `
      <span><strong>Start Date:</strong> ${formattedDate}</span>
      <span><strong>Course:</strong> ${tournament.course}</span>
      <span><strong>Tees:</strong> ${tournament.tees}</span>
    `;
    detailsSection.style.display = "none";
    tournamentItem.appendChild(scorecard);
    tournamentItem.appendChild(detailsSection);

    const viewDetailsBtn = document.createElement("button");
    viewDetailsBtn.textContent = "View Full Tournament Details";
    viewDetailsBtn.classList.add("view-details-btn");

    viewDetailsBtn.addEventListener("click", () => {
      const isVisible = scorecard.style.display === "block";
      scorecard.style.display = isVisible ? "none" : "block";
      detailsSection.style.display = isVisible ? "none" : "block";
      viewDetailsBtn.textContent = isVisible
        ? "View Full Tournament Details"
        : "Close Full Tournament Details";
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-tournament-btn");

    const trashIcon = document.createElement("img");
    trashIcon.src = "images/delete.png";
    trashIcon.alt = "Delete";
    trashIcon.classList.add("trash-icon");

    deleteBtn.appendChild(trashIcon);
    deleteBtn.addEventListener("click", () => {
      confirmDeleteTournament(index);
    });

    tournamentItem.appendChild(viewDetailsBtn);
    tournamentItem.appendChild(deleteBtn);
    historyList.appendChild(tournamentItem);
  });
}

function deleteTournament(index) {
  let tournamentHistory =
    JSON.parse(localStorage.getItem("tournamentHistory")) || [];
  tournamentHistory.splice(index, 1);
  localStorage.setItem("tournamentHistory", JSON.stringify(tournamentHistory));
  updateHistoryTab();
}

function confirmDeleteTournament(index) {
  const confirmation = confirm(
    "Are you sure you want to delete this tournament? This action cannot be undone."
  );
  if (confirmation) {
    deleteTournament(index);
  }
}

function saveGolfers(golfers) {
  localStorage.setItem("golfers", JSON.stringify(golfers));
}
function loadGolfers(addGolferCallback) {
  const storedGolfers = localStorage.getItem("golfers");
  const golfersData = storedGolfers ? JSON.parse(storedGolfers) : [];
  golfersData.forEach((golfer) => addGolferCallback(golfer));
}

function saveRounds(rounds) {
  localStorage.setItem("rounds", JSON.stringify(rounds));
}
function loadRounds(rounds, displayRound) {
  const storedRounds = localStorage.getItem("rounds");
  const roundsData = storedRounds ? JSON.parse(storedRounds) : [];
  roundsData.forEach((round, index) => {
    rounds.push(round);
    displayRound(round, index);
  });
  if (rounds.length > 0) {
    const roundsDisplay = document.getElementById("rounds-display");
    roundsDisplay.style.display = "block";
  }
}

function saveHandicaps(golferHandicaps) {
  const validHandicaps = golferHandicaps.filter((golfer) =>
    isFinite(golfer.handicap)
  );
  localStorage.setItem("golferHandicaps", JSON.stringify(validHandicaps));
}

function loadHandicaps(golferHandicaps, updateRankingsTableCallback) {
  const storedHandicaps =
    JSON.parse(localStorage.getItem("golferHandicaps")) || [];
  golferHandicaps.length = 0;
  golferHandicaps.push(
    ...storedHandicaps.filter((golfer) => isFinite(golfer.handicap))
  );

  if (golferHandicaps.length > 0) {
    updateRankingsTableCallback();
  }
}

export {
  saveTournamentToHistory,
  updateHistoryTab,
  saveGolfers,
  loadGolfers,
  saveRounds,
  loadRounds,
  saveHandicaps,
  loadHandicaps,
};
