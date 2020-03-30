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

var questions = [
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
  {
    questionStem: "What does JS stand for?",
    choiceA: "A. Javasuper",
    choiceB: "B. Javasingle",
    choiceC: "C. Jabroni's suck",
    choiceD: "D. Javascript",
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
  showQuestion();
}

function userStartQuiz(){
  console.log("the quiz has started, Mfer.");
  // setTime();
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// var scores = JSON.parse(window.localStorage.getItem('scores'));
//   if (scores === null) {
//     scores = [];
//   } 
//   scores.push(currentPlayerScore);
//   localStorage.setItem("scores", JSON.stringify(scores));
//   viewHighScores(event);
// }
   
// need some work here. If the user selects questionStem.correct || var answerId, then it moves onto the next question. Else, it deducts time from the clock and moves onto the next question. 
 

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left until YOU LOSE!";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

// create function that deals with the event listener, passing answerId as a parameter of a function
 
// create addEventListener for onclick to work with the cycleQuestions,, when user selects an answer choice
startQuiz.addEventListener("click", userStartQuiz);

choiceA.addEventListener("click", function(event){
var answerId = event.target.id;
console.log(answerId);
cycleQuestions();
})

choiceB.addEventListener("click", function(event){
var answerId = event.target.id;
console.log(answerId);
cycleQuestions();
})

choiceC.addEventListener("click", function(event){
var answerId = event.target.id;
console.log(answerId);
cycleQuestions();
})

choiceD.addEventListener("click", function(event){
var answerId = event.target.id;
console.log(answerId);
cycleQuestions();
})

setTime();
showQuestion();