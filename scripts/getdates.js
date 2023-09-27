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
