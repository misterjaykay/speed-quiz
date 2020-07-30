var lastUserDisplay = document.querySelector("#last-user-display");
var lastScoreDisplay = document.querySelector("#last-user-score");
    // lastUserDisplay.textContent = lastUser[0].username;
    // lastScoreDisplay.textContent = lastUser[0].userscore;
    
var leaderBoard = document.querySelector(".leader-board");
var lastUser = JSON.parse(localStorage.getItem("highscores"));
    console.log(lastUser.length);


for (var i = 0; i < lastUser.length; i++) {
    var random = lastUser.length[i];

    var li = document.createElement("li");
    li.innerHTML = "Name: " + lastUser[0].username + "<br>" + " Score: " + lastUser[0].userscore;
    leaderBoard.append(li);
}

var goBackButton = document.querySelector("#go-back-button")

goBackButton.addEventListener("click", function() {
    window.location.href = "index.html";  

});

var resetScore = document.querySelector("#reset-score")

resetScore.addEventListener("click", function() {
    leaderBoard.innerHTML = "";
    JSON.parse(localStorage.removeItem("highscores"));
    
});