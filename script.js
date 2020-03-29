var mainEl = document.getElementById("main");
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
var question = document.getElementById("question")
const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const choiceD = document.getElementById("D")
// stick with var here instead of const
// populate the HTML with the above IDs
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
];
var lastQuestionIndex = questions.length - 1;
var questionBank = 0;
function showQuestion(){
  var q = questions[questionBank];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
  console.log("The question is shown");
}
 
function setTimer() {
 
}
 
 
showQuestion();
 
 
