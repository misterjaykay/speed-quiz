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


var points = 0;

var quizEl = document.querySelector(".quizbox");
var startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);


function startQuiz() {
    quizEl.children[1].setAttribute("style", "display:none;");
    startTime();
    showQuestion();
}

///// TIMER PART (OKAY) /////
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
//////////

///// LEAVING GLOBAL VARIABLES HERE /////
var answerDiv = document.querySelector(".answer-div");
var questionBody = document.querySelector(".questionbody")
var questionIndex = 0;


////////// SHOWING QUESTION 
function showQuestion() {
    var questionShow = questionList[questionIndex].question;
    var questionChoice = questionList[questionIndex].choices;
    console.log(questionShow);
    console.log(questionChoice);

    questionBody.textContent = questionShow;
    // questionChoice.textContent = li;
    for (var i = 0; i < questionList[questionIndex].choices.length; i++) {
        var answer = questionList[questionIndex].choices[i];
            
        var li = document.createElement("li");
        li.textContent = answer;
        li.setAttribute("id", questionList[questionIndex].choices[i]);  
    
        answerDiv.append(li);
    }

}

///// SELECTING ANSWERS HERE /////
var listEl = document.querySelector(".answer-div");

/////////////// CLICKING ANSWERS
listEl.addEventListener("click", function(event) {
    // var element = this;
    // var userAnswer = element.getAttribute("id");
    event.preventDefault;
    var btnClick = event.target;
    var userAnswer = btnClick.getAttribute("id");
    var trueAnswer = questionList[questionIndex].answer;
    console.log(userAnswer);
    console.log(trueAnswer);
    if (trueAnswer === userAnswer) {
        points++;
        nextQuestion();
    }
    else {
        points--;
        timeLeft - 5;
        nextQuestion();
    }
});

////////// GOING TO NEXT QUESTION
function nextQuestion() {
    answerDiv.removeChild(answerDiv.childNodes[4]);
    answerDiv.removeChild(answerDiv.childNodes[3]);
    answerDiv.removeChild(answerDiv.childNodes[2]);
    answerDiv.removeChild(answerDiv.childNodes[1]);
    var isQuestionOver = (questionList.length - 1) === questionIndex;
    console.log(isQuestionOver);
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

var scoreBox = document.querySelector(".score-box");
var gameOver = document.querySelector(".game-over");
var overMessage = document.querySelector(".over-message");
var sumbmitButton = document.querySelector("#highscore");
var mainEl = document.querySelector(".mainbox");

function endMessage(){
    mainEl.setAttribute("style","display:none;");
    gameOver.textContent = "Game Over!";
    overMessage.textContent = "Thank you for playing.\n Your total point is " + points;
    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.setAttribute("OnClick", "location.href='highscore.html'");
    scoreBox.append(submitButton);
}