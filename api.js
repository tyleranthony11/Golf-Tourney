import { populateTeesDropdownUSA, populateTournamentTeesDropdownUSA } from "./script.js";

// allows for searching of USA courses in Post-Score Form
function setupCourseSearch() {
    const searchInput = document.getElementById("course-search");
    const resultsContainer = document.getElementById("course-results");
  
    if (!searchInput || !resultsContainer) return;
  
    searchInput.addEventListener("input", async function () {
      const query = this.value.trim().toLowerCase();
      resultsContainer.innerHTML = "";
      if (query.length < 3) return;
  
      const courses = await fetchUSCourses(query);
  
      const filteredCourses = courses.filter(
        (course) =>
          course.club_name.toLowerCase().includes(query) ||
          course.course_name.toLowerCase().includes(query)
      );
  
      filteredCourses.forEach((course) => {
        const div = document.createElement("div");
        div.classList.add("search-result");
        div.textContent = `${course.club_name} - ${course.course_name}`;
  
        div.addEventListener("click", () => {
          searchInput.value = div.textContent;
          resultsContainer.innerHTML = "";
          populateTeesDropdownUSA(course);
          populateTournamentTeesDropdownUSA(course);
        });
  
        resultsContainer.appendChild(div);
      });
    });
  }

  async function fetchUSCourses() {
    try {
      const response = await fetch(`https://golf-api-backend.vercel.app/courses`);
      const data = await response.json();
      return data.courses || [];
    } catch (error) {
      console.error("Error fetching courses:", error);
      return [];
    }
  }

  async function fetchAndTransformCourse(courseName) {
    const response = await fetch("https://golf-api-backend.vercel.app/courses");
    const data = await response.json();
  
    const course = data.courses.find(
      (course) => course.course_name === courseName
    );
  
    if (course) {
      const combinedTees = [...course.tees.male, ...course.tees.female];
  
      const transformedCourse = {
        [course.club_name]: {
          tees: combinedTees.reduce((acc, tee) => {
            acc[tee.tee_name] = {
              yardage: tee.total_yards,
              par: tee.par_total,
              courseRating: tee.course_rating,
              slopeRating: tee.slope_rating,
            };
            return acc;
          }, {}),
        },
      };
      let transformedCourses = JSON.parse(
        localStorage.getItem("transformedCourses") || "{}"
      );
      transformedCourses[course.club_name] = transformedCourse[course.club_name];
      localStorage.setItem(
        "transformedCourses",
        JSON.stringify(transformedCourses)
      );
  
      return transformedCourse;
    } else {
      console.log("Course not found");
    }
  }

  // fetches course from API and converts JSON to same form as manually entered courses
  async function fetchAndTransformCourseTournament(courseName) {
    try {
      const response = await fetch("https://golf-api-backend.vercel.app/courses");
      const data = await response.json();
      const apiResponse = data.courses.find(
        (course) => course.course_name === courseName
      );
  
      if (!apiResponse) {
        console.error("Course data not found for USA course:", courseName);
        return null;
      }
  
      const transformedCourse = {};
  
      Object.keys(apiResponse.tees).forEach((gender) => {
        apiResponse.tees[gender].forEach((teeData) => {
          const teeName = teeData.tee_name;
          transformedCourse[teeName] = [];
  
          for (let i = 0; i < 9; i++) {
            transformedCourse[teeName].push({
              holeNumber: i + 1,
              par: teeData.holes[i].par,
              yardage: teeData.holes[i].yardage,
            });
          }
  
          const frontNine = teeData.holes.slice(0, 9);
          transformedCourse[teeName].push({
            holeNumber: "out",
            par: frontNine.reduce((sum, hole) => sum + hole.par, 0),
            yardage: frontNine.reduce((sum, hole) => sum + hole.yardage, 0),
          });
  
          for (let i = 9; i < 18; i++) {
            transformedCourse[teeName].push({
              holeNumber: i + 1,
              par: teeData.holes[i].par,
              yardage: teeData.holes[i].yardage,
            });
          }
  
          const backNine = teeData.holes.slice(9);
          transformedCourse[teeName].push({
            holeNumber: "in",
            par: backNine.reduce((sum, hole) => sum + hole.par, 0),
            yardage: backNine.reduce((sum, hole) => sum + hole.yardage, 0),
          });
  
          transformedCourse[teeName].push({
            holeNumber: "total",
            par: teeData.par_total,
            yardage: teeData.total_yards,
          });
        });
      });
  
      return transformedCourse;
    } catch (error) {
      console.error("Error fetching and transforming USA course data:", error);
      return null;
    }
  }

  export { setupCourseSearch, fetchUSCourses, fetchAndTransformCourse, fetchAndTransformCourseTournament};