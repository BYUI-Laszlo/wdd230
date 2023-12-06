const urlRentals = "https://byui-laszlo.github.io/wdd230/scoots/data/rentals.json";
const tableBody = document.querySelector("#indexTable");

async function getRentalData() {
    const response = await fetch(urlRentals);
    const data = await response.json();
    //console.log(data);
    displayRentals(data.rentals);
}

function displayRentals(rentals) {
    rentals.forEach((rental) => {
        let row = document.createElement("tr");
        let type = document.createElement("td");
        let persons = document.createElement("td");
        let reserveHalf = document.createElement("td");
        let reserveFull = document.createElement("td");
        let walkinHalf = document.createElement("td");
        let walkinFull = document.createElement("td");
        type.textContent = rental.type;
        persons.textContent = rental.persons;
        reserveHalf.textContent = `$${rental.reservation.half}`;
        reserveFull.textContent = `$${rental.reservation.full}`;
        walkinHalf.textContent = `$${rental.walkin.half}`;
        walkinFull.textContent = `$${rental.walkin.full}`;
        row.appendChild(type);
        row.appendChild(persons);  
        row.appendChild(reserveHalf);
        row.appendChild(reserveFull);
        row.appendChild(walkinHalf);
        row.appendChild(walkinFull);
        tableBody.appendChild(row);
    });
}
getRentalData()