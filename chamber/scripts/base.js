let lastModified = new Date(document.lastModified);
document.querySelector("#lastModified").innerHTML = `Last Modification: ${lastModified}`;

document.querySelector('#burger').addEventListener('click', () => {
	document.querySelector('.navigation').classList.toggle('open');
	document.querySelector('#burger').classList.toggle('open');
});

document.querySelector("#dark-btn").addEventListener("click", () => {
	document.querySelector("#dark-btn").classList.toggle("dark");
	document.querySelector("body").classList.toggle("dark");
});