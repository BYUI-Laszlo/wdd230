// Timestamp
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();

const timeStamp = `${month}/${day}/${year} ${hour}:${minute}`

document.querySelector("#timeStamp").value = timeStamp;

// Radiobutton
function raidoList() {
    const radio = document.getElementById("fullRadio");
    const dayList = document.getElementById("fullNumber");

    if (radio.checked) {
        dayList.style.display = "inline-block";
    } else {
        dayList.style.display = "none";
    }
}

// Checkbox
function toggleDropdown(scooterType) {
        const checkbox = document.getElementById(`${scooterType}Checkbox`);
        const dropdown = document.getElementById(`${scooterType}Number`);

        if (checkbox.checked) {
            dropdown.style.display = 'inline-block';
        } else {
            dropdown.style.display = 'none';
        }
    }
/* At least 1 checkbox selected
document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('form');

        form.addEventListener('submit', function (event) {
            const checkboxes = document.querySelectorAll('.vehicleCheckbox');
            let atLeastOneChecked = false;

            checkboxes.forEach(function (checkbox) {
                if (checkbox.checked) {
                    atLeastOneChecked = true;
                }
            });

            if (!atLeastOneChecked) {
                alert('Please select at least one vehicle.');
                event.preventDefault(); // Prevent form submission
            }
        });
    });*/

    // Form submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        const checkboxes = document.querySelectorAll('.vehicleCheckbox');
        let atLeastOneChecked = false;

        checkboxes.forEach(function (checkbox) {
            const dropdown = document.getElementById(`${checkbox.name}Number`);

            if (checkbox.checked) {
                atLeastOneChecked = true;
            } else {
                // Exclude values of unchecked checkboxes
                dropdown.value = '';
            }
        });

        const radioF = document.getElementById("fullRadio");
        const radioH = document.getElementById("halfRadio");
        if (!radioF.checked) {
                // Same for the radiobuttons
            radioF.value = "";
        } else {
            radioH.value = "";
        }

        if (!atLeastOneChecked) {
            alert('Please select at least one vehicle.');
            event.preventDefault(); // Prevent form submission
        }
    });
});