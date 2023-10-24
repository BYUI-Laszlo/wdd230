const year = new Date().getFullYear();
let lastModified = new Date(document.lastModified);
document.querySelector("#currentYear").innerHTML = `©${year}`;
document.querySelector(
  "#lastModified"
).innerHTML = `Last Modification: ${lastModified}`;

/*--------------------------------------------------*/

document.querySelector('#burger').addEventListener('click', () => {
	document.querySelector('.navigation').classList.toggle('open');
	document.querySelector('#burger').classList.toggle('open');
});

/*--------------------------------------------------*/

let visitNumber = Number(localStorage.getItem("visitStored")) || 0;
if (visitNumber == 0){
	document.querySelector(".visits").innerHTML = "This is your first time on this page";
}
else {
	document.querySelector(".visits").innerHTML = "Number of visits: "+ visitNumber;
}
visitNumber++;
localStorage.setItem("visitStored", visitNumber);