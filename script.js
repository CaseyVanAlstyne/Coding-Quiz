var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question")
var choiceA = document.getElementById("A")
var choiceB = document.getElementById("B")
var choiceC = document.getElementById("C")
var choiceD = document.getElementById("D")
var secondsLeft = 60;

var questions = [
  {
    questionStem: "What does HTML stand for?",
    choiceA: "Hot Text Markup Language",
    choiceB: "Hyper Text Markup Language",
    choiceC: "High Text Markup Language",
    choiceD: "Hidden Text Markup Language",
    correct: "B"
  },
  {
    questionStem: "What does CSS stand for?",
    choiceA: "Cascading Style Sheet",
    choiceB: "Cool Super Saiyan",
    choiceC: "Casey's Super SMART",
    choiceD: "Code Style Sheet",
    correct: "A"
},
  {
    questionStem: "What does JS stand for?",
    choiceA: "Javasuper",
    choiceB: "Javasingle",
    choiceC: "Jabroni's suck",
    choiceD: "Javascript",
    correct: "D"
  },
  {
    questionStem: "What is Olivia's favorite kind of animal?",
    choiceA: "bug",
    choiceB: "rat",
    choiceC: "horse",
    choiceD: "wolf",
    correct: "D"
  },
  {
    questionStem: "What does JS stand for?",
    choiceA: "Javasuper",
    choiceB: "Javasingle",
    choiceC: "Jabroni's suck",
    choiceD: "Javascript",
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

function answerChoices(){
  
}

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