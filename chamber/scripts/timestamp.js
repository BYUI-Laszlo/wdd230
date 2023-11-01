const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();

const timeStamp = `${month}/${day}/${year} ${hour}:${minute}`

document.querySelector("#timeStamp").value = timeStamp;