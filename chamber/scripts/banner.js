document.addEventListener("DOMContentLoaded", visible);

function visible() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();

    if ((dayOfWeek === 1) || (dayOfWeek === 2) || (dayOfWeek === 3)) {
        const bannerVisable = document.querySelector(".banner");
        bannerVisable.classList.add("visible");
    }
}

const bannerBtn = document.querySelector(".bannerBtn");
const bannerVisable = document.querySelector(".banner")
bannerBtn.addEventListener("click", () =>{
    bannerVisable.classList.remove("visible");
})