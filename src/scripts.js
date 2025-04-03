import { Datepicker } from 'vanillajs-datepicker';

const messageDisplay = document.getElementById("reservation-message")

const datepickerElement = document.querySelector('input[name="bookingTimestamp"]');
const datepicker = new Datepicker(datepickerElement, {});
console.log(datepicker);

document.getElementById("reservation-form").addEventListener("submit", function (event) {
    event.preventDefault();
    messageDisplay.innerText = "Requesting time slot, please wait..."
    setTimeout(() => {
        messageDisplay.innerText = "Your reservation has been made!"
    }, 2000)
    return false
})