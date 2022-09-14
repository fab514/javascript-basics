// TODO: onSubmit the page should not refresh. Successfully breakup the function
function validateForm() {
    const form = document.getElementById('myForm');
    let validateDate = document.forms["myForm"]["date"].value;
    if (validateDate.length > 0) {
        form.submit()
        console.log('validateDate', validateDate);
    } else {
        alert("You Must Add A Date");
        return false;
    }
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        return false;
    });
    const newTime = new Date(validateDate).getTime();
    const today = Date.now();
   
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
} 

