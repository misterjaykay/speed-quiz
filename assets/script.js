
//////////////////////// QUESTION LIST
var questionList = [{
    question: "Q1: What is Tofu made of?",
    answer: "Soy Beans",
    choices: ["Milk", "Soy Beans", "Banana", "Red Beans"],
    userAnswer: ""
},
{
    question: "Q2: What type of food is Shiitake?",
    answer: "Mushroom",
    choices: ["Mushroom", "Jelly", "Vegetable", "Meat"],
    userAnswer: ""
},
{
    question: "Q3: Which word follows: Dijon, Wholegrain, and French?",
    answer: "Mustard",
    choices: ["Bread", "Mayonaisse", "Mustard", "Ketchup"],
    userAnswer: ""
},
{
    question: "Q4: Grape Seed, Sesame and Ground Nut are all types of what?",
    answer: "Oil",
    choices: ["Wine", "Oil", "Pasta", "Fruit"],
    userAnswer: ""
},
{
    question: "Q5: In which country was tea first grown?",
    answer: "China",
    choices: ["Mexico", "India", "France", "China"],
    userAnswer: ""
}];


///////////////// GLOBAL VARIBLES 
var listEl = document.querySelector(".answer-div");
var scoreBox = document.querySelector(".score-box");
var gameOver = document.querySelector(".game-over");
var overMessage = document.querySelector(".over-message");
var sumbmitButton = document.querySelector("#highscore");
var mainEl = document.querySelector(".mainbox");
var submitNameInput = document.querySelector("#submit-name");
var answerDiv = document.querySelector(".answer-div");
var questionBody = document.querySelector(".question-body");
var questionTitle = document.querySelector(".question-title");
var questionIndex = 0;
var points = 0;
var quizEl = document.querySelector(".quizbox");
var startButton = document.getElementById("start");
var audioPlay = document.querySelector("#play-bgm");




startButton.addEventListener("click", startQuiz);


function startQuiz() {
    quizEl.children[1].setAttribute("style", "display:none;");
    startTime();
    showQuestion();
    bgmPlay();
}


function bgmPlay() {
    audioPlay.volume = 0.2;
    audioPlay.play();
}


///////////////// TIMER
var timeEl = document.querySelector(".timer");
var timeLeft = 60;


function startTime() {
    timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft + " sec Remaining";
        if(timeLeft === 0) {
            clearInterval(timerInterval);
             endMessage();
        }
    }, 1000);


}


////////////////// SHOWING QUESTION 
function showQuestion() {
    var questionShow = questionList[questionIndex].question;
    var questionChoice = questionList[questionIndex].choices;
    console.log(questionShow);
    console.log(questionChoice);

    questionTitle.textContent = questionShow;
    // questionBody.setAttribute("style","display: none;");
    questionBody.innerHTML = "";
    // questionChoice.textContent = li; 
    for (var i = 0; i < questionList[questionIndex].choices.length; i++) {
        var answer = questionList[questionIndex].choices[i];
            
        var inputEl = document.createElement("input");
        inputEl.setAttribute("id",questionList[questionIndex].choices[i]);  
        inputEl.setAttribute("type","button");
        inputEl.setAttribute("value", answer);
        inputEl.setAttribute("class", "answer-button");
        inputEl.setAttribute("width", "100px");
        
        answerDiv.append(inputEl);

        // li.textContent = answer;
        // li.setAttribute("id", questionList[questionIndex].choices[i]);  
        // answerDiv.append(li);
    }

}


/////////////// CLICKING ANSWERS
listEl.addEventListener("click", function(event) {
    event.preventDefault;
    var btnClick = event.target;
    var userAnswer = btnClick.getAttribute("id");
    var trueAnswer = questionList[questionIndex].answer;
    console.log("User's answer is " + userAnswer);
    console.log("Correct asnwer is " + trueAnswer);
    if (trueAnswer === userAnswer) {
        points++;
        if (timeLeft <= 0) {
            endMessage();
        }
        nextQuestion();
    }
    else {
        points--;
        timeLeft -= 5;
        if (timeLeft <= 0) {
            endMessage();
        }
        nextQuestion();
    }
});

////////////// GOING TO NEXT QUESTION
function nextQuestion() {
    answerDiv.innerHTML = " ";
    // answerDiv.removeChild(answerDiv.childNodes[4]); /// condensed with using innerHTML
    // answerDiv.removeChild(answerDiv.childNodes[3]); /// 
    // answerDiv.removeChild(answerDiv.childNodes[2]); /// 
    // answerDiv.removeChild(answerDiv.childNodes[1]); /// 
    var isQuestionOver = (questionList.length - 1) === questionIndex;
    if (isQuestionOver) {
        clearInterval(timerInterval);
        timeLeft = 0;
        timeEl.textContent = timeLeft + " sec Remaining";
        endMessage();
    }
    
    else {
        questionIndex++;
        showQuestion();
    }
    
    
}


/////////////////// ENDING HERE
function endMessage(){
    quizEl.setAttribute("style","display: none;");
    gameOver.textContent = "Game Over!";
    overMessage.textContent = "Thank you for playing.\n Your total point is " + points;
    // scoreBox.children[0].removeAttribute("style", "display: none;"); // This did not work somehow
    scoreBox.children[0].setAttribute("style", "display:block;");
    
    ///////////// USED HTML INSTEAD OF USING JAVASCRIPT CODE
    // var submitName = document.createElement("input");
    // submitName.setAttribute("type", "text")
    // submitName.setAttribute("id", "submit-name");
    // submitName.setAttribute("placeholder", "Enter your names here.")
    // scoreBox.append(submitName);

    // var submitButton = document.createElement("button");
    // submitButton.textContent = "Submit";
    // submitButton.setAttribute("OnClick", "location.href='highscore.html'");
    // scoreBox.append(submitButton);
}


////////////////// STORING DATA TO LOCAL STORAGE
sumbmitButton.addEventListener("click", function() {
    if (userData !== "") {
        var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

        var userData = {
            username: submitNameInput.value.trim(),
            userscore: points
        };
        highscores.push(userData);
        localStorage.setItem("highscores", JSON.stringify(highscores));
        window.location.href = "highscore.html";  
        return displayLast();
    }
});


//////////////////////// DISPLAYING SCORE 
///////////////// LEAVING THIS FOR FUTURE USE.
// function displayLast() {
//     // lastUserDisplay.textContent = lastUser[0].username;
//     // lastScoreDisplay.textContent = lastUser[0].userscore;
//     var lastUserDisplay = document.querySelector("#last-user-display");
//     var lastScoreDisplay = document.querySelector("#last-user-score");
//     var lastUser = JSON.parse(localStorage.getItem("highscores"));
//         lastUserDisplay.textContent = lastUser[0].username;
//         lastScoreDisplay.textContent = lastUser[0].userscore;
// }


