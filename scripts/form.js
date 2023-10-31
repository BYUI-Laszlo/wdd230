/*---------- Password Matching ----------*/

const passwordMain = document.querySelector("#passwordMain");
const passwordConf = document.querySelector("#passwordConf");
const errorMessage = document.querySelector(".errorMessage");


passwordConf.addEventListener("focusout", passMatch);

function passMatch() {
    if (passwordMain.value !== passwordConf.value) {
        errorMessage.style.visibility = "visible";
        passwordMain.value = null;
        passwordConf.value = null;
        passwordMain.focus();
        passwordMain.style.backgroundColor = "#F9C7CE";
        passwordConf.style.backgroundColor = "#F9C7CE";
    }
    else {
        errorMessage.style.visibility = "hidden";
        passwordMain.style.backgroundColor = "#fff";
        passwordConf.style.backgroundColor = "#fff";
    }
}