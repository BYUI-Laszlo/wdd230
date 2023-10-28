let lastVisited = localStorage.getItem(timeOfLastVisit) || "";
const dateToday = new Date();

if (lastVisited == "") {
    document.querySelector(".visitMessage").innerHTML = "Welcome! Let us know if you have any questions.";
}