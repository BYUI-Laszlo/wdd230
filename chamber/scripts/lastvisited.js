let lastVisited = localStorage.getItem("timeOfLastVisit") || "";
const dateToday = new Date().getTime();
const differnce = Math.floor((dateToday - parseInt(lastVisited, 10))/86400000);

if (lastVisited == "") {
    document.querySelector(".visitMessage").innerHTML = "Welcome! Let us know if you have any questions.";
}
else if (differnce < 24) {
    document.querySelector(".visitMessage").innerHTML = "Back so soon! Awesome!";
}
else if (differnce < 48) {
    document.querySelector(".visitMessage").innerHTML = "You last visited 1 day ago.";
}
else {
    document.querySelector(".visitMessage").innerHTML = "You last visited "+ Math.floor(differnce / 24) +" days ago.";
}
localStorage.setItem("timeOfLastVisit", dateToday);