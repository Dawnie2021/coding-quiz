// added variables
var startScreen = document.querySelector('.start');
var quizScreen = document.querySelector('.quiz');
var endScreen = document.querySelector('.end');
var timerEl = document.querySelector('#timer');
var startButton = document.querySelector('#start-btn');
var quizScreenTwo = document.querySelector('.quiz-two');
var quizScreenThree = document.querySelector('.quiz-three');
var quizScreenFour = document.querySelector('.quiz-four');
var submitButton = document.querySelector('#submit-btn');
var viewHighScoresButton = document.querySelector('#highscores-btn');
var highScoreScreen = document.querySelector('.last-page');
var inputElement = document.querySelector("#input-element");
var scoreArr = JSON.parse(localStorage.getItem("User score")) || [];
var firstScore = document.querySelector("#first-score")
var seconds = 100;
var timerInterval;
var backButton = document.querySelector("#back-btn");
var ClearHighScores = document.querySelector("#clear-scores");

// added a function to show the first page
function showStart() {
    startScreen.style.display = null;
    quizScreen.style.display = "none";
    quizScreenTwo.style.display = "none";
    quizScreenThree.style.display = "none";
    quizScreenFour.style.display = "none";
    endScreen.style.display = "none";
    highScoreScreen.style.display = "none";
}
// created a function to show the quiz
function showQuiz() {
    startScreen.style.display = "none";
    quizScreen.style.display = null;
    quizScreenTwo.style.display = "none";
    quizScreenThree.style.display = "none";
    quizScreenFour.style.display = "none";
    endScreen.style.display = "none";
    highScoreScreen.style.display = "none";
    // set a time clock
    timerInterval = setInterval(function () {
        seconds--;
        timerEl.textContent = seconds;
        if (seconds <= 0) {
            clearInterval(timerInterval);
            seconds = 0;
            timerEl.textContent = seconds;
            showEnd();
        }

    }, 1000);
}
// created functions to go through the screens one at a time
function showQuizTwo() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    quizScreenTwo.style.display = null;
    quizScreenThree.style.display = "none";
    quizScreenFour.style.display = "none";
    endScreen.style.display = "none";
    highScoreScreen.style.display = "none";
}

function showQuizThree() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    quizScreenTwo.style.display = "none";
    quizScreenThree.style.display = null;
    quizScreenFour.style.display = "none";
    endScreen.style.display = "none";
    highScoreScreen.style.display = "none";
}

function showQuizFour() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    quizScreenTwo.style.display = "none";
    quizScreenThree.style.display = "none";
    quizScreenFour.style.display = null;
    endScreen.style.display = "none";
    highScoreScreen.style.display = "none";
}
// created a function to show the end 
function showEnd() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    quizScreenTwo.style.display = "none";
    quizScreenThree.style.display = "none";
    quizScreenFour.style.display = "none";
    endScreen.style.display = null;
    highScoreScreen.style.display = "none";
    clearInterval(timerInterval);

}
// created a function to show high score page
function showLastPage() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    quizScreenTwo.style.display = "none";
    quizScreenThree.style.display = "none";
    quizScreenFour.style.display = "none";
    endScreen.style.display = "none";
    highScoreScreen.style.display = null;
}

function selectAnswer(event) {
    var element = event.target.innerHTML;
    console.log(element);

}
// added a function to submit scores and initals 
function submitScores() {
    var highScoreObj = {
        score: seconds,
        initals: inputElement.value
    };
    scoreArr.push(highScoreObj);
    localStorage.setItem("User score", JSON.stringify(scoreArr))
    firstScore.textContent = "Score: " + scoreArr.at(-1).score + " Initials: " + scoreArr.at(-1).initals;

}
// added a function to display high scores
function displayHighScores() {
    var highScores = JSON.parse(localStorage.getItem("User score"))
    console.log(highScores.length)
    for (var i = 0; i < highScores.length; i++) {
        var highScoreEl = document.createElement("p");
        highScoreEl.textContent = (highScores[i].initals + " " + highScores[i].score);
        highScoreScreen.appendChild(highScoreEl);
    }
}
// added eventlisteners
startButton.addEventListener('click', function (event) {
    showQuiz();
});

quizScreen.addEventListener('click', function (event) {
    showQuizTwo();
    var element = event.target.innerHTML;
    if (element !== "1.Alerts") {
        seconds -= 15;
        timerEl.textContent = seconds;

    }
});

quizScreenTwo.addEventListener('click', function (event) {
    showQuizThree();
    var element = event.target.innerHTML;
    if (element !== "2.Parentheses") {
        seconds -= 15;
        timerEl.textContent = seconds;

    }

});

quizScreenThree.addEventListener('click', function (event) {
    showQuizFour();
    var element = event.target.innerHTML;
    if (element === "3.Console.log") {
    } else {
        seconds -= 15;
        timerEl.textContent = seconds;
    }
});

quizScreenFour.addEventListener('click', function (event) {
    showEnd();
    var element = event.target.innerHTML;

    if (element !== "3.HTML") {
        seconds -= 15;
        timerEl.textContent = seconds;

    }
});

submitButton.addEventListener('click', function () {
    submitScores();
    showLastPage();
});
backButton.addEventListener('click', function (event) {
    showStart();
});

ClearHighScores.addEventListener('click', function (event) {
    localStorage.clear()
    highScoreScreen.removeChild(highScoreScreen.lastChild)

});

viewHighScoresButton.addEventListener('click', function (event) {
    showLastPage();
    displayHighScores();
})

function init() {
    showStart();
}

init();









