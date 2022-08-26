let dateEl = document.getElementById("dates")
let hoursEl = document.getElementById("hours")
let minutesEl = document.getElementById("minutes")
let secondsEl = document.getElementById("seconds")


let newDate = new Date();

dateEl.textContent = "Date: " + newDate


// clock
let hour = newDate.getHours();
// console.log(hour)
hoursEl.textContent = "Hours: " + hour



let minute = newDate.getMinutes();
// console.log(minute)
minutesEl.textContent = "Minute: " + minute


let sec = newDate.getSeconds();
// console.log(sec)
secondsEl.textContent = "Seconds: " + sec


// clock 



setInterval(update, 1000);

function update() {
    dateEl.innerHTML = "Date: "+ new Date().getDate() + " / " + new Date().getMonth() + " / " + new Date().getFullYear();
    secondsEl.innerHTML = "Seconds: "+ new Date().getSeconds() 
    minutesEl.innerHTML = "Minutes: "+ new Date().getMinutes()
    hoursEl.innerHTML = "Hours: "+ new Date().getHours()
}

