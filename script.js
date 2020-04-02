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

var questions = [
  {
    questionStem: "What is Elliott's favorite color?",
    choiceA: "A. Teal",
    choiceB: "B. Jasper",
    choiceC: "C. Purple",
    choiceD: "D. What's a color?",
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
    questionStem: "What is Olivia's favorite kind of animal?",
    choiceA: "A. bug",
    choiceB: "B. rat",
    choiceC: "C. horse",
    choiceD: "D. wolf",
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

// var scores = JSON.parse(window.localStorage.setItem('scores'));
//   if (scores === null) {
//     scores = [];
//   } 
//   scores.push(currentPlayerScore);
//   localStorage.setItem("scores", JSON.stringify(scores));
//   viewHighScores(event);
// }

function setTime() {
  // Should I put an if statement in here so when the user clicks on the button it runs the timer?
  var timerInterval = setInterval(function() {
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
  } 
  if(answerId === questions[questionBank].correct){
    console.log("False, Dummy!")
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
  } 
  if(answerId === questions[questionBank].correct){
    console.log("False, Dummy!")
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
  } 
  if(answerId === questions[questionBank].correct){
    console.log("False, Dummy!")
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
  } 
  if(answerId === questions[questionBank].correct){
    console.log("False, Dummy!")
    count++;
    setCounterText();
  } 
  localStorage.setItem("screenScore", count);
cycleQuestions();
})