const url = "https://byui-laszlo.github.io/wdd230/scoots/data/rentals.json";
const cards = document.querySelector("#cards");

async function getRentalData() {
    const response = await fetch(url);
    const data = await response.json();
    displayRentals(data.rentals);
}

function displayRentals(rentals) {
    rentals.forEach((rental) => {
        let card = document.createElement("section");
        let pic = document.createElement("img");
        let type = document.createElement("h3");
        let persons = document.createElement("p");
        let reserveHalf = document.createElement("p");
        let reserveFull = document.createElement("p");
        let walkinHalf = document.createElement("p");
        let walkinFull = document.createElement("p");
        pic.setAttribute("src", rental.pic);
        pic.setAttribute("alt", `A picture of ${rental.type}`);
        pic.setAttribute("loading", "lazy");
        pic.setAttribute("width", "375");
        pic.setAttribute("height", "375");
        type.textContent = rental.type;
        persons.textContent = `Number of Persons: ${rental.persons}`;
        reserveHalf.textContent = `Reservation for Half Day: $${rental.reservation.half}`;
        reserveFull.textContent = `Reservation for Full Day: $${rental.reservation.full}`;
        walkinHalf.textContent = `Walk-in price for Half Day: $${rental.walkin.half}`;
        walkinFull.textContent = `Walk-in price for Full Day: $${rental.walkin.full}`;
        card.appendChild(pic);
        card.appendChild(type);
        card.appendChild(persons);  
        card.appendChild(reserveHalf);
        card.appendChild(reserveFull);
        card.appendChild(walkinHalf);
        card.appendChild(walkinFull);
        cards.appendChild(card);
    });
}
getRentalData()