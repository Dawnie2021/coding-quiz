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
    endScreen.style.display = "none";
}

function showQuiz() {
    startScreen.style.display = "none";
    quizScreen.style.display = null;
    endScreen.style.display = "none";
}

function showEnd() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    endScreen.style.display = null;
}

startButton.addEventListener('click', function(event) {
    showQuiz();
});

quizScreen.addEventListener('click', function(event){
if (event.target.matches('button'))
console.log("hit button")
}); 




function init () {
showStart();
}

init();

