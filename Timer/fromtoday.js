const newTime = new Date('2022-12-25').getTime();
const today = Date.now();
// Create a form that the user is able to insert anyday they choose

const difference = newTime - today;

const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 7 * 4));
const weeks = Math.floor((difference % (1000 * 60 * 60 * 24 * 7 * 4)) / (1000 * 60 * 60 * 24 * 7));
const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7 )) / (1000 * 60 * 60 * 24));
const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((difference % (1000 * 60)) / 1000);

const yayChristmas = document.createElement('div');
const chirstmasText = document.createTextNode(`Yay! There are ${months} months, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds until this Christmas`);
yayChristmas.appendChild(chirstmasText);

document.body.appendChild(yayChristmas);

const form = document.getElementById('form');
const input = document.getElementById('date');
const button = document.getElementById('button');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Add a event that will insert any day (date input) and use it in the newTime variable
});

onSubmit = (event) => {}
