<<<<<<< HEAD
const data = {

  questions:[

{
  question: 'Question 1 what is that thing?',
    answers:[
       'this 0',
       'that 1',
       'something 2',
       'This is the correct answer 3'
    ],
  correctAnswer: 3
},

=======
$(function (){
  startQuiz();
  answerResponse();
  answerSubmitted();
  renderQuestionPage();
});

const data = {
  questions:[
// this is object 1 but we won't name it because it is inside an array
{
  question: 'Question 1 what is that thing?',
  answers:[
     'this 1',
     'that 2',
     'something 3',
     'allodat 4'
  ],
  correctAnswer: 2
},
// this is object 2 but we won't name it because it is inside an array
>>>>>>> refs/remotes/origin/master
{
  question: 'Question 2 what is that other thing?',
    answers: [
      'Alpha 0',
      'Bravo 1',
      'Charlie 2',
      'This is the correct answer 3'
    ],
  correctAnswer: 3
},

{

question: 'Question 3 I\'m a quesiton',
  answers: [
<<<<<<< HEAD
    '1',
    'This is the correct answer 2',
    '3',
    '4',
    ],
  correctAnswer: 1
},

{
question: 'Question 4 I\'m a quesiton',
  answers: [
    '1',
    'This is the correct answer2',
    '3',
    '4',
    ],
  correctAnswer: 1
},

{
  question: 'Question 5 I\'m a quesiton',
    answers: [
      '1',
      'This is the correct answer 2',
      '3',
      '4',
      ],
    correctAnswer: 1
  },


],

  currentQuestion: 0,
=======
    'bloop',
    'dope',
    'FIRE',
    'HOTZ'
  ],
  correctAnswer: 1
}
],
  currentQuestionIndex: 0,
>>>>>>> refs/remotes/origin/master
  totalScore: 0,
  startedQuiz: false
};

<<<<<<< HEAD

$(document).ready(function() {
  $("#startQuiz").click(function(){
    startQuiz();
  });


  $(".myForm").submit(function(event) {
    event.preventDefault();
  });


  $("#continue").click(function(){
    renderPage();
  });


  $("#retake").click(function(event){
    event.preventDefault();
    retakeQuiz();
=======
function resetQuiz(){
  data.totalScore = 0;
  data.currentQuestionIndex = 0;
}

function renderQuestionPage() {
  var currentQuestionObj = data.questions[data.currentQuestionIndex];
  renderQuestion();
  renderQuestionOptions(currentQuestionObj.answers);
}

function renderQuestion() {
  var progressHTML = "<span>(" + (data.currentQuestionIndex + 1) +  '/' + data.questions.length + ")</span>"
  var questionText = data.questions[data.currentQuestionIndex].question;
  $(".js-question-text").html(progressHTML + questionText);
  console.log(renderQuestion);
}

function renderQuestionOptions(answers){
  $(".myForm label").each(function(index, label) {
    $(this).find("input").attr("value", answers[index]);
    $(this).find("input").prop("checked", false);
    $(this).find("span").text(answers[index]);
>>>>>>> refs/remotes/origin/master
  });
}

function finalResults(){
  $("#questionPage").addClass("hidden");
  $('#retake-button').removeClass("hidden");
}

function checkAnswer(userChoice) {
  var correctChoice = data.questions[data.currentQuestionIndex].correctAnswer;
  console.log(data.currentQuestionIndex, data.questions[data.currentQuestionIndex]);
  if (userChoice === correctChoice) {
    data.totalScore++;
    renderQuestionFeedback(true);
    data.currentQuestionIndex++;
  } else if (userChoice === undefined) {
    renderQuestionFeedback("unanswered");
  } else {
<<<<<<< HEAD
    $("section").hide();
    $("#questionPage").show();
    loadQuestions();
    answerSubmitted();

=======
    renderQuestionFeedback(false);
    data.currentQuestionIndex++;
>>>>>>> refs/remotes/origin/master
  }
  if (data.currentQuestionIndex == data.questions.length) {
    finalResults();
  } else {
    renderQuestionPage();
  }
  console.log(userChoice);
}

<<<<<<< HEAD

function startQuiz(){
  data.startQuiz = true;
  data.currentQuestion = 0;
  data.totalScore = 0;
  renderPage();
}


function loadQuestions(){
  if (data.currentQuestion === data.questions.length ){
    $("section").hide();
    $("finalPage").show();
    $('#questionNo').text(data.currentQuestion);
    $("#total-outof").text(data.questions.length);
  }


  let showQuestion = data.questions[data.currentQuestion];

  $(".myQuestion").text(showQuestion.question);

  for (let x = 0; x < showQuestion.answers.length; x++){
    $("#opt" +(x + 1)).text(showQuestion.answers[x]);
    }
  }


$('#nextQuestion').click(() => {
    data.currentQuestion++;
    loadQuestions();
console.log("correct" + data.totalScore);

});




function answerSubmitted () {
  $('#nextQuestion').click(function(e){
    e.preventDefault();
    let userChoice = $('input[name="option"]:checked').val()

    userChoice = parseInt(userChoice, 10);
    let theRightAnswer = data.questions[data.currentQuestion -1].correctAnswer;

    //console.log("user choice", JSON.stringify(userChoice), "the Rigth answer", JSON.stringify(theRightAnswer));

  //  console.log(userChoice + " what I picked");
  //  console.log(data.questions[data.currentQuestion].correctAnswer + " blah");
    if (userChoice === theRightAnswer) {
      data.totalScore++;
      alert ("correct");
    // console.log("correct" + data.totalScore);

     return data.totalScore;
   }
   if
   (userChoice === null){
     alert ("Pick something");
   }
     else {
       console.log("wrong");
       console.log(data.questions[data.currentQuestion].correctAnswer);
       alert ("Wrongo");
     }
  });

}



//answerSubmitted();
//$("#correctNo").text(data.totalScore + "pop");
console.log("correct " + data.totalScore);
// function checkAnswer() {
// $('#nextQuestion').click(function(e){
// if (answerSubmitted() === data.questions[data.currentQuestion].correctAnswer)
//  {
//   console.log("correct");
//   }
//   else {
//     console.log("wrong");
//     console.log(data.questions[data.currentQuestion].correctAnswer);
//     }
//   });
// }
// checkAnswer();
=======
function renderQuestionFeedback(response){
  var feedback = $(".popup-inner");
  if (response === true) {
    feedback.find("h2").text("That was correct");
  } else if (response === false) {
    feedback.find("h2").text("That was incorrect");
  } else if (response === "unanswered") {
    feedback.find("h2").text("Answer the question!");
  }
}

function startQuiz(){
  $("#startQuiz").click(function(e){
    $("questionPage").removeClass("hidden");
    $("#startQuiz").addClass("hidden");
    console.log("take quiz clicked");
  });
}

function retakeQuiz(){
  $("#retake-button").click(function(e){
    $("#questionPage").removeClass("hidden");
    $("#retake-button").addClass("hidden");
    resetQuiz();
    renderQuestionPage();
  });
}

function answerSubmitted(){
  $("#submit-answer").click(function(e){
    e.preventDefault();
    var userChoice = $("input[name='']").val();
    checkAnswer(userChoice);
  });
}
>>>>>>> refs/remotes/origin/master

function answerResponse(){
  $("#nextQuestion").on("click", function(e){
    e.preventDefault();
  });
}

<<<<<<< HEAD
$('#questionNo').text(data.currentQuestion++);


function retakeQuiz(){
  $("section").hide();
  $("#startPage").show();
=======
function resetQuiz(){
  data.totalScore = 0;
  data.currentQuestionIndex = 0;
>>>>>>> refs/remotes/origin/master
}
