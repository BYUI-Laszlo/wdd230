const year = new Date().getFullYear();
let lastModified = new Date(document.lastModified);
document.querySelector("#currentYear").innerHTML = `©${year}`;
document.querySelector(
  "#lastModified"
).innerHTML = `Last Modification:${lastModified}`;
