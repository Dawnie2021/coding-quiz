// added variables
var startScreen = document.querySelector('.start');
var quizScreen = document.querySelector('.quiz');
var endScreen = document.querySelector('.end');
var startButton = document.querySelector('#start-btn');
var quizScreenTwo = document.querySelector('.quiz-two');
var quizScreenThree = document.querySelector('.quiz-three');
var quizScreenFour = document.querySelector('.quiz-four');

function showStart() {
    startScreen.style.display = null;
    quizScreen.style.display = "none";
    quizScreenTwo.style.display = "none";
    quizScreenThree.style.display = "none";
    quizScreenFour.style.display = "none";
    endScreen.style.display = "none";
}

function showQuiz() {
    startScreen.style.display = "none";
    quizScreen.style.display = null;
    quizScreenTwo.style.display = "none";
    quizScreenThree.style.display = "none";
    quizScreenFour.style.display = "none";
    endScreen.style.display = "none";
}

function showQuizTwo() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    quizScreenTwo.style.display = null;
    quizScreenThree.style.display = "none";
    quizScreenFour.style.display = "none";
    endScreen.style.display = "none";
}

function showQuizThree() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    quizScreenTwo.style.display = "none";
    quizScreenThree.style.display = null;
    quizScreenFour.style.display = "none";
    endScreen.style.display = "none";
}

function showQuizFour() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    quizScreenTwo.style.display = "none";
    quizScreenThree.style.display = "none";
    quizScreenFour.style.display = null;
    endScreen.style.display = "none";
}

function showEnd() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    quizScreenTwo.style.display = "none";
    quizScreenThree.style.display = "none";
    quizScreenFour.style.display = "none";
    endScreen.style.display = null;
}
// added event listeners
startButton.addEventListener('click', function (event) {
    showQuiz();
});

quizScreen.addEventListener('click', function (event) {
    showQuizTwo();
});

quizScreenTwo.addEventListener('click', function (event) {
    showQuizThree();
});

quizScreenThree.addEventListener('click', function (event) {
    showQuizFour();
});

quizScreenFour.addEventListener('click', function (event) {
    showEnd();
});





function init() {
    showStart();
}

init();

