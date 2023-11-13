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
function showStart() {
    startScreen.style.display = null;
    quizScreen.style.display = "none";
    quizScreenTwo.style.display = "none";
    quizScreenThree.style.display = "none";
    quizScreenFour.style.display = "none";
    endScreen.style.display = "none";
    highScoreScreen.style.display = "none";
}

function showQuiz() {
    startScreen.style.display = "none";
    quizScreen.style.display = null;
    quizScreenTwo.style.display = "none";
    quizScreenThree.style.display = "none";
    quizScreenFour.style.display = "none";
    endScreen.style.display = "none";
    highScoreScreen.style.display = "none";

    console.log("HEHEHEHEEYEH");

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

function submitScores() {
    var highScoreObj = {
        score: seconds,
        initals: inputElement.value
    };
    scoreArr.push(highScoreObj);
    localStorage.setItem("User score", JSON.stringify(scoreArr))
    firstScore.textContent = "Score: " + scoreArr.at(-1).score + " Initials: " + scoreArr.at(-1).initals;

}

startButton.addEventListener('click', function (event) {
    showQuiz();
});

quizScreen.addEventListener('click', function (event) {
    var element = event.target.innerHTML;
    console.log(element);
    if (element !== "1.Alerts") {
        seconds -= 15;
        timerEl.textContent = seconds;
        showQuizTwo();
    }
});

quizScreenTwo.addEventListener('click', function (event) {
    showQuizThree();
    var element = event.target.innerHTML;
    console.log(element);
    if (element !== "2.Parentheses") {
        seconds -= 15;
        timerEl.textContent = seconds;

    }

});

quizScreenThree.addEventListener('click', function (event) {
    showQuizFour();
    var element = event.target.innerHTML;
    console.log(element);
    if (element === "3.Console.log") {
    } else {
        seconds -= 15;
        timerEl.textContent = seconds;
    }
});

quizScreenFour.addEventListener('click', function (event) {
    showEnd();
    var element = event.target.innerHTML;
    console.log(element);
    if (element !== "3.HTML") {
        seconds -= 15;
        timerEl.textContent = seconds;

    }
});



submitButton.addEventListener('click', function () {
    submitScores();
    showLastPage();
});



function init() {
    showStart();
}

init();
