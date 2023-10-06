let lastModified = new Date(document.lastModified);
document.querySelector("#lastModified").innerHTML = `Last Modification: ${lastModified}`;

document.querySelector('#burger').addEventListener('click', () => {
	document.querySelector('.navigation').classList.toggle('open');
	document.querySelector('#burger').classList.toggle('open');
});