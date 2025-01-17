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
    grandFallsGolfClub: ["Red", "White", "Blue"],
    terraNovaTwinRivers: ["Front", "Intermediate", "Championship"]
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


