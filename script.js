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
  ballyHalyCountryClubNorth: {
    Silver: [
      { holeNumber: 1, par: 4, yardage: 302 },
      { holeNumber: 2, par: 3, yardage: 91 },
      { holeNumber: 3, par: 3, yardage: 74 },
      { holeNumber: 4, par: 4, yardage: 215 },
      { holeNumber: 5, par: 3, yardage: 104 },
      { holeNumber: 6, par: 3, yardage: 85 },
      { holeNumber: 7, par: 3, yardage: 122 },
      { holeNumber: 8, par: 3, yardage: 129 },
      { holeNumber: 9, par: 4, yardage: 257 },
      { holeNumber: "out", par: 30, yardage: 1379 },
      { holeNumber: 10, par: 4, yardage: 303 },
      { holeNumber: 11, par: 4, yardage: 191 },
      { holeNumber: 12, par: 3, yardage: 84 },
      { holeNumber: 13, par: 3, yardage: 94 },
      { holeNumber: 14, par: 3, yardage: 140 },
      { holeNumber: 15, par: 4, yardage: 246 },
      { holeNumber: 16, par: 3, yardage: 100 },
      { holeNumber: 17, par: 3, yardage: 87 },
      { holeNumber: 18, par: 4, yardage: 202 },
      { holeNumber: "in", par: 31, yardage: 1447 },
      { holeNumber: "total", par: 61, yardage: 2826 },
    ],
    Blue: [
      { holeNumber: 1, par: 4, yardage: 338 },
      { holeNumber: 2, par: 3, yardage: 123 },
      { holeNumber: 3, par: 3, yardage: 85 },
      { holeNumber: 4, par: 4, yardage: 246 },
      { holeNumber: 5, par: 3, yardage: 134 },
      { holeNumber: 6, par: 3, yardage: 113 },
      { holeNumber: 7, par: 3, yardage: 125 },
      { holeNumber: 8, par: 3, yardage: 144 },
      { holeNumber: 9, par: 4, yardage: 278 },
      { holeNumber: "out", par: 30, yardage: 1586 },
      { holeNumber: 10, par: 4, yardage: 324 },
      { holeNumber: 11, par: 4, yardage: 214 },
      { holeNumber: 12, par: 3, yardage: 91 },
      { holeNumber: 13, par: 3, yardage: 116 },
      { holeNumber: 14, par: 3, yardage: 166 },
      { holeNumber: 15, par: 4, yardage: 269 },
      { holeNumber: 16, par: 3, yardage: 137 },
      { holeNumber: 17, par: 3, yardage: 105 },
      { holeNumber: 18, par: 4, yardage: 236 },
      { holeNumber: "in", par: 31, yardage: 1658 },
      { holeNumber: "total", par: 61, yardage: 3244 },
    ],
    Black: [
      { holeNumber: 1, par: 4, yardage: 362 },
      { holeNumber: 2, par: 3, yardage: 134 },
      { holeNumber: 3, par: 3, yardage: 85 },
      { holeNumber: 4, par: 4, yardage: 279 },
      { holeNumber: 5, par: 3, yardage: 165 },
      { holeNumber: 6, par: 3, yardage: 123 },
      { holeNumber: 7, par: 3, yardage: 125 },
      { holeNumber: 8, par: 3, yardage: 150 },
      { holeNumber: 9, par: 4, yardage: 308 },
      { holeNumber: "out", par: 30, yardage: 1731 },
      { holeNumber: 10, par: 4, yardage: 331 },
      { holeNumber: 11, par: 4, yardage: 242 },
      { holeNumber: 12, par: 3, yardage: 98 },
      { holeNumber: 13, par: 3, yardage: 147 },
      { holeNumber: 14, par: 3, yardage: 180 },
      { holeNumber: 15, par: 4, yardage: 289 },
      { holeNumber: 16, par: 3, yardage: 163 },
      { holeNumber: 17, par: 3, yardage: 133 },
      { holeNumber: 18, par: 4, yardage: 260 },
      { holeNumber: "in", par: 31, yardage: 1843 },
      { holeNumber: "total", par: 61, yardage: 3574 },
    ],
  },
  ballyHalyCountryClubSouth: {
    Silver: [
      { holeNumber: 1, par: 5, yardage: 440 },
      { holeNumber: 2, par: 3, yardage: 121 },
      { holeNumber: 3, par: 4, yardage: 357 },
      { holeNumber: 4, par: 4, yardage: 225 },
      { holeNumber: 5, par: 4, yardage: 262 },
      { holeNumber: 6, par: 4, yardage: 331 },
      { holeNumber: 7, par: 3, yardage: 104 },
      { holeNumber: 8, par: 5, yardage: 457 },
      { holeNumber: 9, par: 4, yardage: 205 },
      { holeNumber: "out", par: 36, yardage: 2502 },
      { holeNumber: 10, par: 5, yardage: 424 },
      { holeNumber: 11, par: 4, yardage: 334 },
      { holeNumber: 12, par: 3, yardage: 98 },
      { holeNumber: 13, par: 4, yardage: 269 },
      { holeNumber: 14, par: 5, yardage: 417 },
      { holeNumber: 15, par: 3, yardage: 111 },
      { holeNumber: 16, par: 4, yardage: 307 },
      { holeNumber: 17, par: 4, yardage: 318 },
      { holeNumber: 18, par: 4, yardage: 302 },
      { holeNumber: "in", par: 36, yardage: 2580 },
      { holeNumber: "total", par: 72, yardage: 5082 },
    ],
    "Green/Silver": [
      { holeNumber: 1, par: 5, yardage: 440 },
      { holeNumber: 2, par: 3, yardage: 121 },
      { holeNumber: 3, par: 4, yardage: 381 },
      { holeNumber: 4, par: 4, yardage: 255 },
      { holeNumber: 5, par: 4, yardage: 294 },
      { holeNumber: 6, par: 4, yardage: 331 },
      { holeNumber: 7, par: 3, yardage: 104 },
      { holeNumber: 8, par: 5, yardage: 457 },
      { holeNumber: 9, par: 4, yardage: 237 },
      { holeNumber: "out", par: 36, yardage: 2620 },
      { holeNumber: 10, par: 5, yardage: 468 },
      { holeNumber: 11, par: 4, yardage: 334 },
      { holeNumber: 12, par: 3, yardage: 98 },
      { holeNumber: 13, par: 4, yardage: 300 },
      { holeNumber: 14, par: 5, yardage: 417 },
      { holeNumber: 15, par: 3, yardage: 131 },
      { holeNumber: 16, par: 4, yardage: 307 },
      { holeNumber: 17, par: 4, yardage: 362 },
      { holeNumber: 18, par: 4, yardage: 302 },
      { holeNumber: "in", par: 36, yardage: 2719 },
      { holeNumber: "total", par: 72, yardage: 5339 },
    ],

    Green: [
      { holeNumber: 1, par: 5, yardage: 475 },
      { holeNumber: 2, par: 3, yardage: 121 },
      { holeNumber: 3, par: 4, yardage: 381 },
      { holeNumber: 4, par: 4, yardage: 255 },
      { holeNumber: 5, par: 4, yardage: 294 },
      { holeNumber: 6, par: 4, yardage: 363 },
      { holeNumber: 7, par: 3, yardage: 126 },
      { holeNumber: 8, par: 5, yardage: 513 },
      { holeNumber: 9, par: 4, yardage: 237 },
      { holeNumber: "out", par: 36, yardage: 2765 },
      { holeNumber: 10, par: 5, yardage: 468 },
      { holeNumber: 11, par: 4, yardage: 357 },
      { holeNumber: 12, par: 3, yardage: 98 },
      { holeNumber: 13, par: 4, yardage: 300 },
      { holeNumber: 14, par: 5, yardage: 438 },
      { holeNumber: 15, par: 3, yardage: 131 },
      { holeNumber: 16, par: 4, yardage: 340 },
      { holeNumber: 17, par: 4, yardage: 362 },
      { holeNumber: 18, par: 4, yardage: 334 },
      { holeNumber: "in", par: 36, yardage: 2828 },
      { holeNumber: "total", par: 72, yardage: 5593 },
    ],
    "Blue/Green": [
      { holeNumber: 1, par: 5, yardage: 505 },
      { holeNumber: 2, par: 3, yardage: 151 },
      { holeNumber: 3, par: 4, yardage: 381 },
      { holeNumber: 4, par: 4, yardage: 294 },
      { holeNumber: 5, par: 4, yardage: 334 },
      { holeNumber: 6, par: 4, yardage: 363 },
      { holeNumber: 7, par: 3, yardage: 151 },
      { holeNumber: 8, par: 5, yardage: 513 },
      { holeNumber: 9, par: 4, yardage: 237 },
      { holeNumber: "out", par: 36, yardage: 2929 },
      { holeNumber: 10, par: 5, yardage: 468 },
      { holeNumber: 11, par: 4, yardage: 357 },
      { holeNumber: 12, par: 3, yardage: 122 },
      { holeNumber: 13, par: 4, yardage: 300 },
      { holeNumber: 14, par: 5, yardage: 494 },
      { holeNumber: 15, par: 3, yardage: 139 },
      { holeNumber: 16, par: 4, yardage: 358 },
      { holeNumber: 17, par: 4, yardage: 362 },
      { holeNumber: 18, par: 4, yardage: 334 },
      { holeNumber: "in", par: 36, yardage: 2934 },
      { holeNumber: "total", par: 72, yardage: 5863 },
    ],
    Blue: [
      { holeNumber: 1, par: 5, yardage: 505 },
      { holeNumber: 2, par: 3, yardage: 151 },
      { holeNumber: 3, par: 4, yardage: 392 },
      { holeNumber: 4, par: 4, yardage: 294 },
      { holeNumber: 5, par: 4, yardage: 334 },
      { holeNumber: 6, par: 4, yardage: 376 },
      { holeNumber: 7, par: 3, yardage: 151 },
      { holeNumber: 8, par: 5, yardage: 535 },
      { holeNumber: 9, par: 4, yardage: 269 },
      { holeNumber: "out", par: 36, yardage: 3007 },
      { holeNumber: 10, par: 5, yardage: 518 },
      { holeNumber: 11, par: 4, yardage: 375 },
      { holeNumber: 12, par: 3, yardage: 122 },
      { holeNumber: 13, par: 4, yardage: 327 },
      { holeNumber: 14, par: 5, yardage: 494 },
      { holeNumber: 15, par: 3, yardage: 139 },
      { holeNumber: 16, par: 4, yardage: 358 },
      { holeNumber: 17, par: 4, yardage: 380 },
      { holeNumber: 18, par: 4, yardage: 380 },
      { holeNumber: "in", par: 36, yardage: 3093 },
      { holeNumber: "total", par: 72, yardage: 6100 },
    ],
    "Black/Blue": [
      { holeNumber: 1, par: 5, yardage: 505 },
      { holeNumber: 2, par: 3, yardage: 151 },
      { holeNumber: 3, par: 4, yardage: 418 },
      { holeNumber: 4, par: 4, yardage: 313 },
      { holeNumber: 5, par: 4, yardage: 369 },
      { holeNumber: 6, par: 4, yardage: 376 },
      { holeNumber: 7, par: 3, yardage: 151 },
      { holeNumber: 8, par: 5, yardage: 535 },
      { holeNumber: 9, par: 4, yardage: 310 },
      { holeNumber: "out", par: 36, yardage: 3128 },
      { holeNumber: 10, par: 5, yardage: 544 },
      { holeNumber: 11, par: 4, yardage: 375 },
      { holeNumber: 12, par: 3, yardage: 122 },
      { holeNumber: 13, par: 4, yardage: 348 },
      { holeNumber: 14, par: 5, yardage: 494 },
      { holeNumber: 15, par: 3, yardage: 166 },
      { holeNumber: 16, par: 4, yardage: 371 },
      { holeNumber: 17, par: 4, yardage: 416 },
      { holeNumber: 18, par: 4, yardage: 380 },
      { holeNumber: "in", par: 36, yardage: 3216 },
      { holeNumber: "total", par: 72, yardage: 6344 },
    ],
    Black: [
      { holeNumber: 1, par: 5, yardage: 532 },
      { holeNumber: 2, par: 3, yardage: 165 },
      { holeNumber: 3, par: 4, yardage: 418 },
      { holeNumber: 4, par: 4, yardage: 313 },
      { holeNumber: 5, par: 4, yardage: 369 },
      { holeNumber: 6, par: 4, yardage: 401 },
      { holeNumber: 7, par: 3, yardage: 172 },
      { holeNumber: 8, par: 5, yardage: 576 },
      { holeNumber: 9, par: 4, yardage: 310 },
      { holeNumber: "out", par: 36, yardage: 3256 },
      { holeNumber: 10, par: 5, yardage: 544 },
      { holeNumber: 11, par: 4, yardage: 394 },
      { holeNumber: 12, par: 3, yardage: 122 },
      { holeNumber: 13, par: 4, yardage: 348 },
      { holeNumber: 14, par: 5, yardage: 528 },
      { holeNumber: 15, par: 3, yardage: 166 },
      { holeNumber: 16, par: 4, yardage: 371 },
      { holeNumber: 17, par: 4, yardage: 416 },
      { holeNumber: 18, par: 4, yardage: 436 },
      { holeNumber: "in", par: 36, yardage: 3325 },
      { holeNumber: "total", par: 72, yardage: 6581 },
    ],
  },
  blomidonGolfClub: {
    Red: [
      { holeNumber: 1, par: 4, yardage: 341 },
      { holeNumber: 2, par: 5, yardage: 457 },
      { holeNumber: 3, par: 3, yardage: 197 },
      { holeNumber: 4, par: 4, yardage: 347 },
      { holeNumber: 5, par: 4, yardage: 325 },
      { holeNumber: 6, par: 3, yardage: 138 },
      { holeNumber: 7, par: 4, yardage: 243 },
      { holeNumber: 8, par: 3, yardage: 139 },
      { holeNumber: 9, par: 4, yardage: 261 },
      { holeNumber: "out", par: 34, yardage: 2448 },
      { holeNumber: 10, par: 5, yardage: 489 },
      { holeNumber: 11, par: 4, yardage: 322 },
      { holeNumber: 12, par: 4, yardage: 350 },
      { holeNumber: 13, par: 3, yardage: 97 },
      { holeNumber: 14, par: 4, yardage: 281 },
      { holeNumber: 15, par: 4, yardage: 322 },
      { holeNumber: 16, par: 3, yardage: 153 },
      { holeNumber: 17, par: 4, yardage: 320 },
      { holeNumber: 18, par: 5, yardage: 411 },
      { holeNumber: "in", par: 36, yardage: 2745 },
      { holeNumber: "total", par: 70, yardage: 5193 },
    ],
    White: [
      { holeNumber: 1, par: 4, yardage: 341 },
      { holeNumber: 2, par: 5, yardage: 497 },
      { holeNumber: 3, par: 3, yardage: 223 },
      { holeNumber: 4, par: 4, yardage: 375 },
      { holeNumber: 5, par: 4, yardage: 349 },
      { holeNumber: 6, par: 3, yardage: 163 },
      { holeNumber: 7, par: 4, yardage: 243 },
      { holeNumber: 8, par: 3, yardage: 139 },
      { holeNumber: 9, par: 4, yardage: 261 },
      { holeNumber: "out", par: 34, yardage: 2591 },
      { holeNumber: 10, par: 5, yardage: 592 },
      { holeNumber: 11, par: 4, yardage: 355 },
      { holeNumber: 12, par: 4, yardage: 389 },
      { holeNumber: 13, par: 3, yardage: 112 },
      { holeNumber: 14, par: 4, yardage: 281 },
      { holeNumber: 15, par: 4, yardage: 322 },
      { holeNumber: 16, par: 3, yardage: 153 },
      { holeNumber: 17, par: 4, yardage: 320 },
      { holeNumber: 18, par: 5, yardage: 411 },
      { holeNumber: "in", par: 36, yardage: 2935 },
      { holeNumber: "total", par: 70, yardage: 5526 },
    ],
    Blue: [
      { holeNumber: 1, par: 4, yardage: 341 },
      { holeNumber: 2, par: 5, yardage: 511 },
      { holeNumber: 3, par: 3, yardage: 239 },
      { holeNumber: 4, par: 4, yardage: 389 },
      { holeNumber: 5, par: 4, yardage: 369 },
      { holeNumber: 6, par: 3, yardage: 193 },
      { holeNumber: 7, par: 4, yardage: 243 },
      { holeNumber: 8, par: 3, yardage: 139 },
      { holeNumber: 9, par: 4, yardage: 261 },
      { holeNumber: "out", par: 34, yardage: 2685 },
      { holeNumber: 10, par: 5, yardage: 622 },
      { holeNumber: 11, par: 4, yardage: 375 },
      { holeNumber: 12, par: 4, yardage: 415 },
      { holeNumber: 13, par: 3, yardage: 145 },
      { holeNumber: 14, par: 4, yardage: 281 },
      { holeNumber: 15, par: 4, yardage: 322 },
      { holeNumber: 16, par: 3, yardage: 153 },
      { holeNumber: 17, par: 4, yardage: 320 },
      { holeNumber: 18, par: 5, yardage: 411 },
      { holeNumber: "in", par: 36, yardage: 3044 },
      { holeNumber: "total", par: 70, yardage: 5729 },
    ],
  },
  ganderGolfClub: {
    Red: [
      { holeNumber: 1, par: 4, yardage: 382 },
      { holeNumber: 2, par: 3, yardage: 140 },
      { holeNumber: 3, par: 4, yardage: 352 },
      { holeNumber: 4, par: 3, yardage: 129 },
      { holeNumber: 5, par: 5, yardage: 434 },
      { holeNumber: 6, par: 3, yardage: 140 },
      { holeNumber: 7, par: 4, yardage: 269 },
      { holeNumber: 8, par: 5, yardage: 479 },
      { holeNumber: 9, par: 5, yardage: 461 },
      { holeNumber: "out", par: 36, yardage: 2786 },
      { holeNumber: 10, par: 3, yardage: 174 },
      { holeNumber: 11, par: 4, yardage: 269 },
      { holeNumber: 12, par: 4, yardage: 282 },
      { holeNumber: 13, par: 3, yardage: 125 },
      { holeNumber: 14, par: 4, yardage: 365 },
      { holeNumber: 15, par: 3, yardage: 133 },
      { holeNumber: 16, par: 4, yardage: 347 },
      { holeNumber: 17, par: 4, yardage: 281 },
      { holeNumber: 18, par: 5, yardage: 402 },
      { holeNumber: "in", par: 34, yardage: 2378 },
      { holeNumber: "total", par: 70, yardage: 5164 },
    ],

    White: [
      { holeNumber: 1, par: 4, yardage: 382 },
      { holeNumber: 2, par: 3, yardage: 181 },
      { holeNumber: 3, par: 4, yardage: 396 },
      { holeNumber: 4, par: 3, yardage: 149 },
      { holeNumber: 5, par: 5, yardage: 456 },
      { holeNumber: 6, par: 3, yardage: 161 },
      { holeNumber: 7, par: 4, yardage: 304 },
      { holeNumber: 8, par: 5, yardage: 504 },
      { holeNumber: 9, par: 5, yardage: 461 },
      { holeNumber: "out", par: 36, yardage: 2994 },
      { holeNumber: 10, par: 3, yardage: 174 },
      { holeNumber: 11, par: 4, yardage: 340 },
      { holeNumber: 12, par: 4, yardage: 292 },
      { holeNumber: 13, par: 3, yardage: 135 },
      { holeNumber: 14, par: 4, yardage: 365 },
      { holeNumber: 15, par: 3, yardage: 172 },
      { holeNumber: 16, par: 4, yardage: 386 },
      { holeNumber: 17, par: 4, yardage: 329 },
      { holeNumber: 18, par: 5, yardage: 475 },
      { holeNumber: "in", par: 34, yardage: 2668 },
      { holeNumber: "total", par: 70, yardage: 5662 },
    ],

    Blue: [
      { holeNumber: 1, par: 4, yardage: 423 },
      { holeNumber: 2, par: 3, yardage: 208 },
      { holeNumber: 3, par: 4, yardage: 422 },
      { holeNumber: 4, par: 3, yardage: 169 },
      { holeNumber: 5, par: 5, yardage: 480 },
      { holeNumber: 6, par: 3, yardage: 183 },
      { holeNumber: 7, par: 4, yardage: 328 },
      { holeNumber: 8, par: 5, yardage: 527 },
      { holeNumber: 9, par: 5, yardage: 555 },
      { holeNumber: "out", par: 36, yardage: 3295 },
      { holeNumber: 10, par: 3, yardage: 194 },
      { holeNumber: 11, par: 4, yardage: 340 },
      { holeNumber: 12, par: 4, yardage: 302 },
      { holeNumber: 13, par: 3, yardage: 155 },
      { holeNumber: 14, par: 4, yardage: 420 },
      { holeNumber: 15, par: 3, yardage: 185 },
      { holeNumber: 16, par: 4, yardage: 410 },
      { holeNumber: 17, par: 4, yardage: 353 },
      { holeNumber: 18, par: 5, yardage: 483 },
      { holeNumber: "in", par: 34, yardage: 2842 },
      { holeNumber: "total", par: 70, yardage: 6137 },
    ],
  },
  glenDenning: {
    White: [
      { holeNumber: 1, par: 4, yardage: 293 },
      { holeNumber: 2, par: 4, yardage: 229 },
      { holeNumber: 3, par: 5, yardage: 366 },
      { holeNumber: 4, par: 3, yardage: 120 },
      { holeNumber: 5, par: 4, yardage: 266 },
      { holeNumber: 6, par: 3, yardage: 150 },
      { holeNumber: 7, par: 4, yardage: 225 },
      { holeNumber: 8, par: 4, yardage: 277 },
      { holeNumber: 9, par: 5, yardage: 435 },
      { holeNumber: "out", par: 36, yardage: 2361 },
      { holeNumber: 10, par: 4, yardage: 307 },
      { holeNumber: 11, par: 3, yardage: 116 },
      { holeNumber: 12, par: 4, yardage: 273 },
      { holeNumber: 13, par: 4, yardage: 260 },
      { holeNumber: 14, par: 4, yardage: 301 },
      { holeNumber: 15, par: 3, yardage: 146 },
      { holeNumber: 16, par: 5, yardage: 401 },
      { holeNumber: 17, par: 3, yardage: 158 },
      { holeNumber: 18, par: 5, yardage: 382 },
      { holeNumber: "in", par: 35, yardage: 2344 },
      { holeNumber: "total", par: 71, yardage: 4705 },
    ],
    "Blue/White": [
      { holeNumber: 1, par: 4, yardage: 293 },
      { holeNumber: 2, par: 4, yardage: 280 },
      { holeNumber: 3, par: 5, yardage: 451 },
      { holeNumber: 4, par: 3, yardage: 142 },
      { holeNumber: 5, par: 4, yardage: 341 },
      { holeNumber: 6, par: 3, yardage: 150 },
      { holeNumber: 7, par: 4, yardage: 298 },
      { holeNumber: 8, par: 4, yardage: 330 },
      { holeNumber: 9, par: 5, yardage: 506 },
      { holeNumber: "out", par: 36, yardage: 2791 },
      { holeNumber: 10, par: 4, yardage: 307 },
      { holeNumber: 11, par: 3, yardage: 163 },
      { holeNumber: 12, par: 4, yardage: 273 },
      { holeNumber: 13, par: 4, yardage: 340 },
      { holeNumber: 14, par: 4, yardage: 301 },
      { holeNumber: 15, par: 3, yardage: 154 },
      { holeNumber: 16, par: 5, yardage: 485 },
      { holeNumber: 17, par: 3, yardage: 158 },
      { holeNumber: 18, par: 5, yardage: 500 },
      { holeNumber: "in", par: 35, yardage: 2681 },
      { holeNumber: "total", par: 71, yardage: 5472 },
    ],
    Blue: [
      { holeNumber: 1, par: 4, yardage: 365 },
      { holeNumber: 2, par: 4, yardage: 280 },
      { holeNumber: 3, par: 5, yardage: 451 },
      { holeNumber: 4, par: 3, yardage: 142 },
      { holeNumber: 5, par: 4, yardage: 341 },
      { holeNumber: 6, par: 3, yardage: 160 },
      { holeNumber: 7, par: 4, yardage: 298 },
      { holeNumber: 8, par: 4, yardage: 330 },
      { holeNumber: 9, par: 5, yardage: 506 },
      { holeNumber: "out", par: 36, yardage: 2873 },
      { holeNumber: 10, par: 4, yardage: 380 },
      { holeNumber: 11, par: 3, yardage: 163 },
      { holeNumber: 12, par: 4, yardage: 360 },
      { holeNumber: 13, par: 4, yardage: 340 },
      { holeNumber: 14, par: 4, yardage: 356 },
      { holeNumber: 15, par: 3, yardage: 154 },
      { holeNumber: 16, par: 5, yardage: 485 },
      { holeNumber: 17, par: 3, yardage: 184 },
      { holeNumber: 18, par: 5, yardage: 500 },
      { holeNumber: "in", par: 35, yardage: 2922 },
      { holeNumber: "total", par: 71, yardage: 5795 },
    ],
    "Gold/Blue": [
      { holeNumber: 1, par: 4, yardage: 365 },
      { holeNumber: 2, par: 4, yardage: 319 },
      { holeNumber: 3, par: 5, yardage: 451 },
      { holeNumber: 4, par: 3, yardage: 142 },
      { holeNumber: 5, par: 4, yardage: 383 },
      { holeNumber: 6, par: 3, yardage: 160 },
      { holeNumber: 7, par: 4, yardage: 318 },
      { holeNumber: 8, par: 4, yardage: 345 },
      { holeNumber: 9, par: 5, yardage: 518 },
      { holeNumber: "out", par: 36, yardage: 3001 },
      { holeNumber: 10, par: 4, yardage: 380 },
      { holeNumber: 11, par: 3, yardage: 163 },
      { holeNumber: 12, par: 4, yardage: 360 },
      { holeNumber: 13, par: 4, yardage: 355 },
      { holeNumber: 14, par: 4, yardage: 356 },
      { holeNumber: 15, par: 3, yardage: 162 },
      { holeNumber: 16, par: 5, yardage: 540 },
      { holeNumber: 17, par: 3, yardage: 184 },
      { holeNumber: 18, par: 5, yardage: 510 },
      { holeNumber: "in", par: 35, yardage: 3010 },
      { holeNumber: "total", par: 71, yardage: 6011 },
    ],
    Gold: [
      { holeNumber: 1, par: 4, yardage: 376 },
      { holeNumber: 2, par: 4, yardage: 319 },
      { holeNumber: 3, par: 5, yardage: 507 },
      { holeNumber: 4, par: 3, yardage: 154 },
      { holeNumber: 5, par: 4, yardage: 383 },
      { holeNumber: 6, par: 3, yardage: 170 },
      { holeNumber: 7, par: 4, yardage: 318 },
      { holeNumber: 8, par: 4, yardage: 345 },
      { holeNumber: 9, par: 5, yardage: 518 },
      { holeNumber: "out", par: 36, yardage: 3090 },
      { holeNumber: 10, par: 4, yardage: 391 },
      { holeNumber: 11, par: 3, yardage: 173 },
      { holeNumber: 12, par: 4, yardage: 412 },
      { holeNumber: 13, par: 4, yardage: 355 },
      { holeNumber: 14, par: 4, yardage: 390 },
      { holeNumber: 15, par: 3, yardage: 162 },
      { holeNumber: 16, par: 5, yardage: 540 },
      { holeNumber: 17, par: 3, yardage: 191 },
      { holeNumber: 18, par: 5, yardage: 510 },
      { holeNumber: "in", par: 35, yardage: 3124 },
      { holeNumber: "total", par: 71, yardage: 6214 },
    ],
  },
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
  grandeMeadowsGolfClub: {
    Yellow: [
      { holeNumber: 1, par: 4, yardage: 329 },
      { holeNumber: 2, par: 4, yardage: 301 },
      { holeNumber: 3, par: 3, yardage: 124 },
      { holeNumber: 4, par: 4, yardage: 262 },
      { holeNumber: 5, par: 5, yardage: 433 },
      { holeNumber: 6, par: 4, yardage: 282 },
      { holeNumber: 7, par: 3, yardage: 142 },
      { holeNumber: 8, par: 5, yardage: 140 },
      { holeNumber: 9, par: 4, yardage: 326 },
      { holeNumber: "out", par: 36, yardage: 2339 },
      { holeNumber: 10, par: 4, yardage: 329 },
      { holeNumber: 11, par: 4, yardage: 301 },
      { holeNumber: 12, par: 3, yardage: 124 },
      { holeNumber: 13, par: 4, yardage: 262 },
      { holeNumber: 14, par: 5, yardage: 433 },
      { holeNumber: 15, par: 4, yardage: 282 },
      { holeNumber: 16, par: 3, yardage: 142 },
      { holeNumber: 17, par: 5, yardage: 140 },
      { holeNumber: 18, par: 4, yardage: 326 },
      { holeNumber: "in", par: 36, yardage: 2339 },
      { holeNumber: "total", par: 72, yardage: 4678 },
    ],
    Red: [
      { holeNumber: 1, par: 4, yardage: 284 },
      { holeNumber: 2, par: 4, yardage: 268 },
      { holeNumber: 3, par: 3, yardage: 120 },
      { holeNumber: 4, par: 4, yardage: 259 },
      { holeNumber: 5, par: 5, yardage: 430 },
      { holeNumber: 6, par: 4, yardage: 253 },
      { holeNumber: 7, par: 3, yardage: 137 },
      { holeNumber: 8, par: 5, yardage: 436 },
      { holeNumber: 9, par: 4, yardage: 293 },
      { holeNumber: "out", par: 36, yardage: 2480 },
      { holeNumber: 10, par: 4, yardage: 284 },
      { holeNumber: 11, par: 4, yardage: 268 },
      { holeNumber: 12, par: 3, yardage: 120 },
      { holeNumber: 13, par: 4, yardage: 259 },
      { holeNumber: 14, par: 5, yardage: 430 },
      { holeNumber: 15, par: 4, yardage: 253 },
      { holeNumber: 16, par: 3, yardage: 137 },
      { holeNumber: 17, par: 5, yardage: 436 },
      { holeNumber: 18, par: 4, yardage: 293 },
      { holeNumber: "in", par: 36, yardage: 2480 },
      { holeNumber: "total", par: 72, yardage: 4960 },
    ],
    "Red/Yellow": [
      { holeNumber: 1, par: 4, yardage: 284 },
      { holeNumber: 2, par: 4, yardage: 301 },
      { holeNumber: 3, par: 3, yardage: 120 },
      { holeNumber: 4, par: 4, yardage: 330 },
      { holeNumber: 5, par: 5, yardage: 430 },
      { holeNumber: 6, par: 4, yardage: 282 },
      { holeNumber: 7, par: 3, yardage: 137 },
      { holeNumber: 8, par: 5, yardage: 440 },
      { holeNumber: 9, par: 4, yardage: 293 },
      { holeNumber: "out", par: 36, yardage: 2617 },
      { holeNumber: 10, par: 4, yardage: 329 },
      { holeNumber: 11, par: 4, yardage: 268 },
      { holeNumber: 12, par: 3, yardage: 124 },
      { holeNumber: 13, par: 4, yardage: 259 },
      { holeNumber: 14, par: 5, yardage: 465 },
      { holeNumber: 15, par: 4, yardage: 253 },
      { holeNumber: 16, par: 3, yardage: 142 },
      { holeNumber: 17, par: 5, yardage: 436 },
      { holeNumber: 18, par: 4, yardage: 326 },
      { holeNumber: "in", par: 36, yardage: 2602 },
      { holeNumber: "total", par: 72, yardage: 5219 },
    ],
    White: [
      { holeNumber: 1, par: 4, yardage: 333 },
      { holeNumber: 2, par: 4, yardage: 316 },
      { holeNumber: 3, par: 3, yardage: 133 },
      { holeNumber: 4, par: 4, yardage: 342 },
      { holeNumber: 5, par: 5, yardage: 488 },
      { holeNumber: 6, par: 4, yardage: 302 },
      { holeNumber: 7, par: 3, yardage: 152 },
      { holeNumber: 8, par: 5, yardage: 538 },
      { holeNumber: 9, par: 4, yardage: 330 },
      { holeNumber: "out", par: 36, yardage: 2934 },
      { holeNumber: 10, par: 4, yardage: 333 },
      { holeNumber: 11, par: 4, yardage: 316 },
      { holeNumber: 12, par: 3, yardage: 133 },
      { holeNumber: 13, par: 4, yardage: 342 },
      { holeNumber: 14, par: 5, yardage: 488 },
      { holeNumber: 15, par: 4, yardage: 302 },
      { holeNumber: 16, par: 3, yardage: 152 },
      { holeNumber: 17, par: 5, yardage: 538 },
      { holeNumber: 18, par: 4, yardage: 330 },
      { holeNumber: "in", par: 36, yardage: 2934 },
      { holeNumber: "total", par: 72, yardage: 5868 },
    ],
    Blue: [
      { holeNumber: 1, par: 4, yardage: 353 },
      { holeNumber: 2, par: 4, yardage: 305 },
      { holeNumber: 3, par: 3, yardage: 142 },
      { holeNumber: 4, par: 4, yardage: 330 },
      { holeNumber: 5, par: 5, yardage: 503 },
      { holeNumber: 6, par: 4, yardage: 285 },
      { holeNumber: 7, par: 3, yardage: 160 },
      { holeNumber: 8, par: 5, yardage: 522 },
      { holeNumber: 9, par: 4, yardage: 344 },
      { holeNumber: "out", par: 36, yardage: 2944 },
      { holeNumber: 10, par: 4, yardage: 353 },
      { holeNumber: 11, par: 4, yardage: 305 },
      { holeNumber: 12, par: 3, yardage: 142 },
      { holeNumber: 13, par: 4, yardage: 330 },
      { holeNumber: 14, par: 5, yardage: 503 },
      { holeNumber: 15, par: 4, yardage: 285 },
      { holeNumber: 16, par: 3, yardage: 160 },
      { holeNumber: 17, par: 5, yardage: 522 },
      { holeNumber: 18, par: 4, yardage: 344 },
      { holeNumber: "in", par: 36, yardage: 2944 },
      { holeNumber: "total", par: 72, yardage: 5888 },
    ],
    "White/Blue": [
      { holeNumber: 1, par: 4, yardage: 333 },
      { holeNumber: 2, par: 4, yardage: 338 },
      { holeNumber: 3, par: 3, yardage: 133 },
      { holeNumber: 4, par: 4, yardage: 342 },
      { holeNumber: 5, par: 5, yardage: 488 },
      { holeNumber: 6, par: 4, yardage: 302 },
      { holeNumber: 7, par: 3, yardage: 152 },
      { holeNumber: 8, par: 5, yardage: 538 },
      { holeNumber: 9, par: 4, yardage: 330 },
      { holeNumber: "out", par: 36, yardage: 2956 },
      { holeNumber: 10, par: 4, yardage: 353 },
      { holeNumber: 11, par: 4, yardage: 305 },
      { holeNumber: 12, par: 3, yardage: 155 },
      { holeNumber: 13, par: 4, yardage: 330 },
      { holeNumber: 14, par: 5, yardage: 503 },
      { holeNumber: 15, par: 4, yardage: 285 },
      { holeNumber: 16, par: 3, yardage: 160 },
      { holeNumber: 17, par: 5, yardage: 522 },
      { holeNumber: 18, par: 4, yardage: 352 },
      { holeNumber: "in", par: 36, yardage: 2965 },
      { holeNumber: "total", par: 72, yardage: 5921 },
    ],
  },
  humberValleyResort: {
    Red: [
      { holeNumber: 1, par: 5, yardage: 421 },
      { holeNumber: 2, par: 3, yardage: 128 },
      { holeNumber: 3, par: 4, yardage: 319 },
      { holeNumber: 4, par: 4, yardage: 357 },
      { holeNumber: 5, par: 3, yardage: 119 },
      { holeNumber: 6, par: 4, yardage: 359 },
      { holeNumber: 7, par: 5, yardage: 489 },
      { holeNumber: 8, par: 4, yardage: 337 },
      { holeNumber: 9, par: 4, yardage: 338 },
      { holeNumber: "out", par: 36, yardage: 2867 },
      { holeNumber: 10, par: 4, yardage: 374 },
      { holeNumber: 11, par: 4, yardage: 284 },
      { holeNumber: 12, par: 4, yardage: 327 },
      { holeNumber: 13, par: 5, yardage: 416 },
      { holeNumber: 14, par: 3, yardage: 111 },
      { holeNumber: 15, par: 4, yardage: 222 },
      { holeNumber: 16, par: 4, yardage: 353 },
      { holeNumber: 17, par: 3, yardage: 100 },
      { holeNumber: 18, par: 5, yardage: 430 },
      { holeNumber: "in", par: 36, yardage: 2617 },
      { holeNumber: "total", par: 72, yardage: 5484 },
    ],
    Green: [
      { holeNumber: 1, par: 5, yardage: 501 },
      { holeNumber: 2, par: 3, yardage: 155 },
      { holeNumber: 3, par: 4, yardage: 388 },
      { holeNumber: 4, par: 4, yardage: 357 },
      { holeNumber: 5, par: 3, yardage: 158 },
      { holeNumber: 6, par: 4, yardage: 359 },
      { holeNumber: 7, par: 5, yardage: 489 },
      { holeNumber: 8, par: 4, yardage: 337 },
      { holeNumber: 9, par: 4, yardage: 338 },
      { holeNumber: "out", par: 36, yardage: 3082 },
      { holeNumber: 10, par: 4, yardage: 374 },
      { holeNumber: 11, par: 4, yardage: 362 },
      { holeNumber: 12, par: 4, yardage: 378 },
      { holeNumber: 13, par: 5, yardage: 458 },
      { holeNumber: 14, par: 3, yardage: 140 },
      { holeNumber: 15, par: 4, yardage: 275 },
      { holeNumber: 16, par: 4, yardage: 353 },
      { holeNumber: 17, par: 3, yardage: 130 },
      { holeNumber: 18, par: 5, yardage: 497 },
      { holeNumber: "in", par: 36, yardage: 2967 },
      { holeNumber: "total", par: 72, yardage: 6049 },
    ],
    White: [
      { holeNumber: 1, par: 5, yardage: 501 },
      { holeNumber: 2, par: 3, yardage: 155 },
      { holeNumber: 3, par: 4, yardage: 388 },
      { holeNumber: 4, par: 4, yardage: 415 },
      { holeNumber: 5, par: 3, yardage: 158 },
      { holeNumber: 6, par: 4, yardage: 409 },
      { holeNumber: 7, par: 5, yardage: 540 },
      { holeNumber: 8, par: 4, yardage: 410 },
      { holeNumber: 9, par: 4, yardage: 392 },
      { holeNumber: "out", par: 36, yardage: 3368 },
      { holeNumber: 10, par: 4, yardage: 426 },
      { holeNumber: 11, par: 4, yardage: 362 },
      { holeNumber: 12, par: 4, yardage: 378 },
      { holeNumber: 13, par: 5, yardage: 458 },
      { holeNumber: 14, par: 3, yardage: 140 },
      { holeNumber: 15, par: 4, yardage: 275 },
      { holeNumber: 16, par: 4, yardage: 407 },
      { holeNumber: 17, par: 3, yardage: 130 },
      { holeNumber: 18, par: 5, yardage: 497 },
      { holeNumber: "in", par: 36, yardage: 3073 },
      { holeNumber: "total", par: 72, yardage: 6441 },
    ],
    Blue: [
      { holeNumber: 1, par: 5, yardage: 524 },
      { holeNumber: 2, par: 3, yardage: 180 },
      { holeNumber: 3, par: 4, yardage: 407 },
      { holeNumber: 4, par: 4, yardage: 440 },
      { holeNumber: 5, par: 3, yardage: 216 },
      { holeNumber: 6, par: 4, yardage: 455 },
      { holeNumber: 7, par: 5, yardage: 550 },
      { holeNumber: 8, par: 4, yardage: 416 },
      { holeNumber: 9, par: 4, yardage: 418 },
      { holeNumber: "out", par: 36, yardage: 3606 },
      { holeNumber: 10, par: 4, yardage: 442 },
      { holeNumber: 11, par: 4, yardage: 379 },
      { holeNumber: 12, par: 4, yardage: 384 },
      { holeNumber: 13, par: 5, yardage: 484 },
      { holeNumber: 14, par: 3, yardage: 161 },
      { holeNumber: 15, par: 4, yardage: 299 },
      { holeNumber: 16, par: 4, yardage: 436 },
      { holeNumber: 17, par: 3, yardage: 144 },
      { holeNumber: 18, par: 5, yardage: 523 },
      { holeNumber: "in", par: 36, yardage: 3252 },
      { holeNumber: "total", par: 72, yardage: 6858 },
    ],
    Gold: [
      { holeNumber: 1, par: 5, yardage: 550 },
      { holeNumber: 2, par: 3, yardage: 188 },
      { holeNumber: 3, par: 4, yardage: 426 },
      { holeNumber: 4, par: 4, yardage: 470 },
      { holeNumber: 5, par: 3, yardage: 232 },
      { holeNumber: 6, par: 4, yardage: 467 },
      { holeNumber: 7, par: 5, yardage: 561 },
      { holeNumber: 8, par: 4, yardage: 423 },
      { holeNumber: 9, par: 4, yardage: 459 },
      { holeNumber: "out", par: 36, yardage: 3776 },
      { holeNumber: 10, par: 4, yardage: 458 },
      { holeNumber: 11, par: 4, yardage: 396 },
      { holeNumber: 12, par: 4, yardage: 402 },
      { holeNumber: 13, par: 5, yardage: 509 },
      { holeNumber: 14, par: 3, yardage: 181 },
      { holeNumber: 15, par: 4, yardage: 324 },
      { holeNumber: 16, par: 4, yardage: 452 },
      { holeNumber: 17, par: 3, yardage: 156 },
      { holeNumber: 18, par: 5, yardage: 545 },
      { holeNumber: "in", par: 36, yardage: 3423 },
      { holeNumber: "total", par: 72, yardage: 7199 },
    ],
  },
  pippyParkAdmiralsGreen: {
    Red: [
      { holeNumber: 1, par: 4, yardage: 385 },
      { holeNumber: 2, par: 4, yardage: 262 },
      { holeNumber: 3, par: 3, yardage: 100 },
      { holeNumber: 4, par: 4, yardage: 393 },
      { holeNumber: 5, par: 3, yardage: 80 },
      { holeNumber: 6, par: 4, yardage: 390 },
      { holeNumber: 7, par: 3, yardage: 140 },
      { holeNumber: 8, par: 4, yardage: 240 },
      { holeNumber: 9, par: 4, yardage: 226 },
      { holeNumber: "out", par: 33, yardage: 2216 },
      { holeNumber: 10, par: 4, yardage: 246 },
      { holeNumber: 11, par: 4, yardage: 252 },
      { holeNumber: 12, par: 3, yardage: 212 },
      { holeNumber: 13, par: 3, yardage: 116 },
      { holeNumber: 14, par: 3, yardage: 88 },
      { holeNumber: 15, par: 4, yardage: 245 },
      { holeNumber: 16, par: 3, yardage: 105 },
      { holeNumber: 17, par: 4, yardage: 370 },
      { holeNumber: 18, par: 4, yardage: 370 },
      { holeNumber: "in", par: 32, yardage: 2004 },
      { holeNumber: "total", par: 65, yardage: 4220 },
    ],
    "Silver/Red": [
      { holeNumber: 1, par: 4, yardage: 410 },
      { holeNumber: 2, par: 4, yardage: 262 },
      { holeNumber: 3, par: 3, yardage: 164 },
      { holeNumber: 4, par: 4, yardage: 393 },
      { holeNumber: 5, par: 3, yardage: 108 },
      { holeNumber: 6, par: 4, yardage: 390 },
      { holeNumber: 7, par: 3, yardage: 169 },
      { holeNumber: 8, par: 4, yardage: 240 },
      { holeNumber: 9, par: 4, yardage: 245 },
      { holeNumber: "out", par: 33, yardage: 2381 },
      { holeNumber: 10, par: 4, yardage: 343 },
      { holeNumber: 11, par: 4, yardage: 252 },
      { holeNumber: 12, par: 4, yardage: 273 },
      { holeNumber: 13, par: 3, yardage: 116 },
      { holeNumber: 14, par: 3, yardage: 126 },
      { holeNumber: 15, par: 4, yardage: 245 },
      { holeNumber: 16, par: 3, yardage: 105 },
      { holeNumber: 17, par: 4, yardage: 370 },
      { holeNumber: 18, par: 4, yardage: 417 },
      { holeNumber: "in", par: 33, yardage: 2247 },
      { holeNumber: "total", par: 66, yardage: 4628 },
    ],
    Silver: [
      { holeNumber: 1, par: 4, yardage: 410 },
      { holeNumber: 2, par: 4, yardage: 305 },
      { holeNumber: 3, par: 3, yardage: 164 },
      { holeNumber: 4, par: 5, yardage: 460 },
      { holeNumber: 5, par: 3, yardage: 108 },
      { holeNumber: 6, par: 5, yardage: 474 },
      { holeNumber: 7, par: 3, yardage: 169 },
      { holeNumber: 8, par: 4, yardage: 315 },
      { holeNumber: 9, par: 4, yardage: 245 },
      { holeNumber: "out", par: 35, yardage: 2650 },
      { holeNumber: 10, par: 4, yardage: 343 },
      { holeNumber: 11, par: 4, yardage: 295 },
      { holeNumber: 12, par: 4, yardage: 273 },
      { holeNumber: 13, par: 3, yardage: 130 },
      { holeNumber: 14, par: 3, yardage: 126 },
      { holeNumber: 15, par: 4, yardage: 315 },
      { holeNumber: 16, par: 3, yardage: 105 },
      { holeNumber: 17, par: 4, yardage: 388 },
      { holeNumber: 18, par: 4, yardage: 417 },
      { holeNumber: "in", par: 33, yardage: 2392 },
      { holeNumber: "total", par: 68, yardage: 5042 },
    ],

    "Gold/Silver": [
      { holeNumber: 1, par: 5, yardage: 495 },
      { holeNumber: 2, par: 4, yardage: 305 },
      { holeNumber: 3, par: 3, yardage: 196 },
      { holeNumber: 4, par: 5, yardage: 460 },
      { holeNumber: 5, par: 3, yardage: 141 },
      { holeNumber: 6, par: 5, yardage: 474 },
      { holeNumber: 7, par: 3, yardage: 182 },
      { holeNumber: 8, par: 4, yardage: 315 },
      { holeNumber: 9, par: 4, yardage: 305 },
      { holeNumber: "out", par: 36, yardage: 2873 },
      { holeNumber: 10, par: 4, yardage: 351 },
      { holeNumber: 11, par: 4, yardage: 295 },
      { holeNumber: 12, par: 4, yardage: 287 },
      { holeNumber: 13, par: 3, yardage: 130 },
      { holeNumber: 14, par: 3, yardage: 126 },
      { holeNumber: 15, par: 4, yardage: 315 },
      { holeNumber: 16, par: 3, yardage: 154 },
      { holeNumber: 17, par: 5, yardage: 460 },
      { holeNumber: 18, par: 5, yardage: 448 },
      { holeNumber: "in", par: 35, yardage: 2566 },
      { holeNumber: "total", par: 71, yardage: 5439 },
    ],
    Gold: [
      { holeNumber: 1, par: 5, yardage: 495 },
      { holeNumber: 2, par: 4, yardage: 338 },
      { holeNumber: 3, par: 3, yardage: 196 },
      { holeNumber: 4, par: 5, yardage: 519 },
      { holeNumber: 5, par: 3, yardage: 141 },
      { holeNumber: 6, par: 5, yardage: 499 },
      { holeNumber: 7, par: 3, yardage: 182 },
      { holeNumber: 8, par: 4, yardage: 360 },
      { holeNumber: 9, par: 4, yardage: 305 },
      { holeNumber: "out", par: 36, yardage: 3035 },
      { holeNumber: 10, par: 4, yardage: 351 },
      { holeNumber: 11, par: 4, yardage: 349 },
      { holeNumber: 12, par: 4, yardage: 287 },
      { holeNumber: 13, par: 3, yardage: 140 },
      { holeNumber: 14, par: 3, yardage: 165 },
      { holeNumber: 15, par: 4, yardage: 395 },
      { holeNumber: 16, par: 3, yardage: 154 },
      { holeNumber: 17, par: 5, yardage: 460 },
      { holeNumber: 18, par: 5, yardage: 448 },
      { holeNumber: "in", par: 35, yardage: 2749 },
      { holeNumber: "total", par: 71, yardage: 5784 },
    ],
    Black: [
      { holeNumber: 1, par: 5, yardage: 546 },
      { holeNumber: 2, par: 4, yardage: 360 },
      { holeNumber: 3, par: 3, yardage: 213 },
      { holeNumber: 4, par: 5, yardage: 528 },
      { holeNumber: 5, par: 3, yardage: 162 },
      { holeNumber: 6, par: 5, yardage: 536 },
      { holeNumber: 7, par: 3, yardage: 207 },
      { holeNumber: 8, par: 4, yardage: 400 },
      { holeNumber: 9, par: 4, yardage: 360 },
      { holeNumber: "out", par: 36, yardage: 3312 },
      { holeNumber: 10, par: 4, yardage: 390 },
      { holeNumber: 11, par: 4, yardage: 363 },
      { holeNumber: 12, par: 4, yardage: 320 },
      { holeNumber: 13, par: 3, yardage: 157 },
      { holeNumber: 14, par: 3, yardage: 188 },
      { holeNumber: 15, par: 4, yardage: 420 },
      { holeNumber: 16, par: 3, yardage: 163 },
      { holeNumber: 17, par: 5, yardage: 477 },
      { holeNumber: 18, par: 5, yardage: 473 },
      { holeNumber: "in", par: 35, yardage: 2951 },
      { holeNumber: "total", par: 71, yardage: 6263 },
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
  theWildsGolfResort: {
    White: [
      { holeNumber: 1, par: 4, yardage: 343 },
      { holeNumber: 2, par: 5, yardage: 514 },
      { holeNumber: 3, par: 4, yardage: 303 },
      { holeNumber: 4, par: 3, yardage: 121 },
      { holeNumber: 5, par: 4, yardage: 375 },
      { holeNumber: 6, par: 4, yardage: 385 },
      { holeNumber: 7, par: 5, yardage: 496 },
      { holeNumber: 8, par: 3, yardage: 158 },
      { holeNumber: 9, par: 4, yardage: 375 },
      { holeNumber: "out", par: 36, yardage: 3070 },
      { holeNumber: 10, par: 4, yardage: 356 },
      { holeNumber: 11, par: 5, yardage: 473 },
      { holeNumber: 12, par: 4, yardage: 344 },
      { holeNumber: 13, par: 3, yardage: 147 },
      { holeNumber: 14, par: 4, yardage: 326 },
      { holeNumber: 15, par: 4, yardage: 390 },
      { holeNumber: 16, par: 4, yardage: 344 },
      { holeNumber: 17, par: 3, yardage: 158 },
      { holeNumber: 18, par: 5, yardage: 466 },
      { holeNumber: "in", par: 36, yardage: 3004 },
      { holeNumber: "total", par: 72, yardage: 6074 },
    ],
    Blue: [
      { holeNumber: 1, par: 4, yardage: 355 },
      { holeNumber: 2, par: 5, yardage: 522 },
      { holeNumber: 3, par: 4, yardage: 309 },
      { holeNumber: 4, par: 3, yardage: 127 },
      { holeNumber: 5, par: 4, yardage: 402 },
      { holeNumber: 6, par: 4, yardage: 404 },
      { holeNumber: 7, par: 5, yardage: 524 },
      { holeNumber: 8, par: 3, yardage: 175 },
      { holeNumber: 9, par: 4, yardage: 400 },
      { holeNumber: "out", par: 36, yardage: 3218 },
      { holeNumber: 10, par: 4, yardage: 368 },
      { holeNumber: 11, par: 5, yardage: 484 },
      { holeNumber: 12, par: 4, yardage: 350 },
      { holeNumber: 13, par: 3, yardage: 154 },
      { holeNumber: 14, par: 4, yardage: 383 },
      { holeNumber: 15, par: 4, yardage: 398 },
      { holeNumber: 16, par: 4, yardage: 351 },
      { holeNumber: 17, par: 3, yardage: 168 },
      { holeNumber: 18, par: 5, yardage: 491 },
      { holeNumber: "in", par: 36, yardage: 3147 },
      { holeNumber: "total", par: 72, yardage: 6365 },
    ],
    Gold: [
      { holeNumber: 1, par: 4, yardage: 395 },
      { holeNumber: 2, par: 5, yardage: 547 },
      { holeNumber: 3, par: 4, yardage: 329 },
      { holeNumber: 4, par: 3, yardage: 141 },
      { holeNumber: 5, par: 4, yardage: 432 },
      { holeNumber: 6, par: 4, yardage: 426 },
      { holeNumber: 7, par: 5, yardage: 551 },
      { holeNumber: 8, par: 3, yardage: 195 },
      { holeNumber: 9, par: 4, yardage: 429 },
      { holeNumber: "out", par: 36, yardage: 3445 },
      { holeNumber: 10, par: 4, yardage: 395 },
      { holeNumber: 11, par: 5, yardage: 517 },
      { holeNumber: 12, par: 4, yardage: 369 },
      { holeNumber: 13, par: 3, yardage: 161 },
      { holeNumber: 14, par: 4, yardage: 389 },
      { holeNumber: 15, par: 4, yardage: 425 },
      { holeNumber: 16, par: 4, yardage: 370 },
      { holeNumber: 17, par: 3, yardage: 193 },
      { holeNumber: 18, par: 5, yardage: 508 },
      { holeNumber: "in", par: 36, yardage: 3327 },
      { holeNumber: "total", par: 72, yardage: 6772 },
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
        const golfer = input.dataset.golfer;
        if (!tournamentScores[golfer]) tournamentScores[golfer] = {};
        if (!tournamentScores[golfer][roundNumber])
          tournamentScores[golfer][roundNumber] = [];
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
      `.out-total[data-round="${roundNumber}"]`
    );
    const inTotalElement = document.querySelector(
      `.in-total[data-round="${roundNumber}"]`
    );
    const roundTotalElement = document.querySelector(
      `.round-total[data-round="${roundNumber}"]`
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
    createLeaderboard(golfers, rounds);
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

  const scorecardContainer = document.getElementById("scorecard-container");
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

startTournamentBtn.addEventListener("click", createTournament);

function createLeaderboard(golfers, rounds) {
  const leaderboardContainer = document.getElementById("leaderboard-container");
  leaderboardContainer.innerHTML = "";

  const table = document.createElement("table");
  table.classList.add("leaderboard-table");

  const headerRow = document.createElement("tr");
  const headerCells = ["Golfer"];

  for (let i = 1; i <= rounds; i++) {
    headerCells.push(`R${i} Score`);
  }

  headerCells.push("TOTAL");

  headerCells.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  golfers.forEach((golfer) => {
    const row = document.createElement("tr");
    const golferNameCell = document.createElement("td");
    golferNameCell.textContent = golfer;
    row.appendChild(golferNameCell);

    let totalScore = 0;
    let totalRounds  = 0;

    for (let i = 1; i <= rounds; i++) {
      const scoreCell = document.createElement("td");
      const roundScore = tournamentScores[golfer][i]
  ? tournamentScores[golfer][i].reduce((sum, val) => sum + val, 0)
  : 0;

      scoreCell.textContent = roundScore === 0 ? "-" : roundScore;
      row.appendChild(scoreCell);

      if (roundScore > 0){
      totalScore += roundScore;
      totalRounds += 1;
      }
    }

    const totalCell = document.createElement("td");
    totalCell.textContent = totalRounds === 0 ? "-" : totalScore;
    row.appendChild(totalCell);

    table.appendChild(row);
  });

  leaderboardContainer.appendChild(table);
}





