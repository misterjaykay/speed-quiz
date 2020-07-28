var startButton = document.querySelector("#start");
var timeEl = document.querySelector(".timer");

var quizTitle = document.querySelector(".questiontitle");
var quizBody = document.querySelector(".questionbody");
var mainEl = document.querySelector(".mainbox");
var quizEl = document.querySelector(".quizbox");

var points = 0;
var timeLeft = 60;
timeEl.textContent = timeLeft + " sec Remaining";

function startTime() {
    startQuiz();
    timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft + " sec Remaining";
        if(timeLeft === 0) {
            clearInterval(timerInterval);
            endMessage();
         }
     }, 1000);





}

var answerList = document.querySelector(".answers");

function startQuiz() {
    var answerRight = document.querySelector("#answer-c");
    quizEl.children[1].style.display = "none";
    mainEl.children[0].textContent = "Question 1";
    mainEl.children[1].textContent = "Place your question 1 here?";
    answerList.children[0].textContent = "Answer A";
    answerList.children[0].style.display = "block";
    answerList.children[1].textContent = "Answer B";
    answerList.children[1].style.display = "block";
    answerList.children[2].textContent = "Answer C";
    answerList.children[2].style.display = "block";
    answerList.children[3].textContent = "Answer D";
    answerList.children[3].style.display = "block";

    answerRight.addEventListener("click", function() {
        alert("correct");
        points++;
        secondQuestion();
    });
}

function secondQuestion() {
    var answerRight = document.querySelector("#answer-d");
    // quizEl.children[1].style.display = "none";
    mainEl.children[0].textContent = "Question 2";
    mainEl.children[1].textContent = "Place your question 2 here?";
    answerList.children[0].textContent = "Answer 1";
    // answerList.children[0].style.display = "block";
    answerList.children[1].textContent = "Answer 2";
    // answerList.children[1].style.display = "block";
    answerList.children[2].textContent = "Answer 3";
    // answerList.children[2].style.display = "block";
    answerList.children[3].textContent = "Answer 4";
    // answerList.children[3].style.display = "block";

    answerRight.addEventListener("click", function() {
        alert("correct");
        
    });
}

function endMessage() {
    mainEl.children[0].textContent = "Game Over!";
    mainEl.children[1].textContent = "Thanks for playing. \nYour Score is " + points;
    alert("60sec over");
}

startButton.addEventListener("click", startTime);

// for loop to create a buttons for futre ref
// for (var i = 0; i < answerOnes.length; i++) {
//     var answerOne = answerOnes[i]
//     var button = document.createElement("button");
//     button.textContent = answerOne;
//     answerList.appendChild(button);   
// }