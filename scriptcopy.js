var mainEl = document.querySelector(".mainbox")

var timeLeft = 10;

function startTime () {
    var timerInterval = setInterval(function() {
        timeLeft --;
        timeEl.textContent = timeLeft + " sec Remaining"
        startQuiz();
        if(timeLeft === 0) {
            clearInterval(timerInterval); 
            endMessage();
        }
    }, 1000);
    
}

function startQuiz() {
    mainEl.children[0].textContent = "Question 1";
    mainEl.children[1].textContent = "Are you ready?";
}

function endMessage() {
    timeEl.textContent = " ";
    alert("60sec over");
    return timeLeft = 10;
}



var startButton = document.querySelector("#start");

var timeEl = document.querySelector(".timer");

startButton.addEventListener("click", function (){
    event.preventDefault();
    startTime();
}); 