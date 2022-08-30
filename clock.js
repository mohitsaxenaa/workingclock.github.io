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
    dateEl.innerHTML = ""+ new Date().getDate() + " / " + new Date().getMonth() + " / " + new Date().getFullYear();
    secondsEl.innerHTML = ": "+ new Date().getSeconds() 
    minutesEl.innerHTML = ": "+ new Date().getMinutes()
    hoursEl.innerHTML = " "+ new Date().getHours()
}


var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src = "img/sun.png";
    }
    else{
        icon.src = "img/night-mode.png"
    }
}

