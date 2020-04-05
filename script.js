var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var secondsLeft = 75;
var startQuiz = document.getElementById("startQuizButton");
var quizScore = 0;
var count = 0;
var screenScore = document.querySelector("#screenScore");
var timerInterval;

var questions = [
  {
    questionStem: "What are the three fundamental languages for programming?",
    choiceA: "A. CSS, React, HTML",
    choiceB: "B. CSS, JS, HTML",
    choiceC: "C. JS, jQuery, HTML",
    choiceD: "D. CSS, Bootstrap, HTML",
    correct: "B"
  },
  {
    questionStem: "What does HTML stand for?",
    choiceA: "A. Hot Text Markup Language",
    choiceB: "B. Hyper Text Markup Language",
    choiceC: "C. High Text Markup Language",
    choiceD: "D. Hidden Text Markup Language",
    correct: "B"
  },
  {
    questionStem: "What does CSS stand for?",
    choiceA: "A. Cascading Style Sheet",
    choiceB: "B. Cool Super Saiyan",
    choiceC: "C. Casey's Super SMART",
    choiceD: "D. Code Style Sheet",
    correct: "A"
},
  {
    questionStem: "What does JS stand for?",
    choiceA: "A. Javasuper",
    choiceB: "B. Javasingle",
    choiceC: "C. Jabroni's suck",
    choiceD: "D. Javascript",
    correct: "D"
  },
  {
    questionStem: "What does a for loop look like?",
    choiceA: "A. for[var i=0; i<5; i++]{}",
    choiceB: "B. for[i=0, i<5, i++]{}",
    choiceC: "C. for(var i=0, i<5, i++){}",
    choiceD: "D. for(var i=0; i<5; i++){}",
    correct: "D"
  },
];

var lastQuestionIndex = questions.length - 1;
var questionBank = 0;

function showQuestion(){
  var q = questions[questionBank];
  question.innerHTML = "<p>" + q.questionStem + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
  console.log("The question is shown");
}

function cycleQuestions(){
  questionBank++;
  if(questionBank > lastQuestionIndex){
    alert("You've completed the quiz, you smartie!");
    clearInterval(timerInterval);
  } else {
  showQuestion();
  }
}

function userStartQuiz(){
  console.log("the quiz has started.");
  setTime();
  var x = document.getElementById("startQuizButton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  showQuestion();
}
console.log(secondsLeft);

function setTime() {
  // Should I put an if statement in here so when the user clicks on the button it runs the timer?
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left until YOU LOSE!";

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

function setCounterText() {
  screenScore.textContent = count;
}
var count = localStorage.getItem("screenScore");

function renderHighScore(){

}
 
// create addEventListener for onclick to work with the cycleQuestions,, when user selects an answer choice
startQuiz.addEventListener("click", userStartQuiz);

choiceA.addEventListener("click", function(event){
var answerId = event.target.id;
console.log(answerId);
  if(answerId !== questions[questionBank].correct){
    console.log("False, Dummy!")
    secondsLeft = secondsLeft - 15;
    count--;
    setCounterText();
  } else {
    console.log("Correct, Dummy!")
    count++;
    setCounterText();
  } 
  localStorage.setItem("screenScore", count);
cycleQuestions();
})

choiceB.addEventListener("click", function(event){
var answerId = event.target.id;
console.log(answerId);
  if(answerId !== questions[questionBank].correct){
    console.log("False, Dummy!")
    secondsLeft = secondsLeft - 15;
    count--;
    setCounterText();
  } else {
    console.log("Correct, Dummy!")
    count++;
    setCounterText();
  } 
  localStorage.setItem("screenScore", count);
cycleQuestions();
})

choiceC.addEventListener("click", function(event){
var answerId = event.target.id;
console.log(answerId);
  if(answerId !== questions[questionBank].correct){
    console.log("False, Dummy!")
    secondsLeft = secondsLeft - 15;
    count--;
    setCounterText();
  } else {
    console.log("Correct, Dummy!")
    count++;
    setCounterText();
  } 
  localStorage.setItem("screenScore", count);
cycleQuestions();
})

choiceD.addEventListener("click", function(event){
var answerId = event.target.id;
console.log(answerId);
  if(answerId !== questions[questionBank].correct){
    console.log("False, Dummy!")
    secondsLeft = secondsLeft - 15;
    count--;
    setCounterText();
  } else {
    console.log("Correct, Dummy!")
    count++;
    setCounterText();
  } 
  localStorage.setItem("screenScore", count);
cycleQuestions();
})