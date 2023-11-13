// added variables
var startScreen = document.querySelector('.start');
var quizScreen = document.querySelector('.quiz');
var endScreen = document.querySelector('.end');
var startButton = document.querySelector('#start-btn');
var quizScreenTwo = document.querySelector('.quiz-two');
var quizScreenThree = document.querySelector('.quiz-three');
var quizScreenFour = document.querySelector('.quiz-four');
var submitButton = document.querySelector('#submit-btn');
var viewHighScoresButton = document.querySelector('#highscores-btn');
var highScoreScreen = document.querySelector('.last-page');
var inputElement = document.querySelector("#input-element");
var scoreArr = JSON.parse(localStorage.getItem("User score"))
    || [];
var firstScore = document.querySelector("#first-score");
firstScore.textContent = "Score: " + scoreArr[0].score + " Initials: " + scoreArr[0].initals;

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

function selectAnswer(e) {
    var element = e.target.innerHTML;
    console.log(element);

}

function submitScores() {
    var highScoreObj = {
        score: 60,
        initals: inputElement.value
    };
    scoreArr.push(highScoreObj);
    localStorage.setItem("User score", JSON.stringify(scoreArr))
}
// added event listeners
startButton.addEventListener('click', function (event) {
    showQuiz();
});

quizScreen.addEventListener('click', function (event) {
    var element = event.target.innerHTML;
    console.log(element);
    if (element !== "1.Alerts") {
        alert("We just lost 15 points")
    }
    showQuizTwo();
});

quizScreenTwo.addEventListener('click', function (event) {
    showQuizThree();
    var element = event.target.innerHTML;
    console.log(element);
    if (element !== "2.Parentheses") {
        alert("We just lost 15 points")
    }

});

quizScreenThree.addEventListener('click', function (event) {
    showQuizFour();
    var element = event.target.innerHTML;
    console.log(element);
    if (element !== "3.Console.log") {
        alert("We just lost 15 points")
    }
});

quizScreenFour.addEventListener('click', function (event) {
    showEnd();
    var element = event.target.innerHTML;
    console.log(element);
    if (element !== "3.HTML") {
        alert("We just lost 15 points")
    }
});


submitButton.addEventListener('click', function () {
    submitScores();
    showLastPage();
})



function init() {
    showStart();
}

init();

