// var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }

//   }, 1000);
// }

// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();

var startButton = document.querySelector("#start");

var timeEl = document.querySelector(".timer");

var timeLeft = 60;
console.log(timeLeft);

function startTime () {
    var timerInterval = setInterval(function() {
        timeLeft --;
        timeEl.textContent = timeLeft + " sec Remaining"
        console.log(timeLeft);
        
        if(second === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeEl.textContent = " ";
    alert("60sec over");
}

startButton.addEventListener("click", startTime);