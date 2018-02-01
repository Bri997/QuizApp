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
{
  question: 'Question 2 what is that other thing?',
  answers: [
    'bloop',
    'dope',
    'FIRE',
    'HOTZ'
  ],
  correctAnswer: 1
}
],
  currentQuestionIndex: 0,
  totalScore: 0,
  startedQuiz: false
};

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
    renderQuestionFeedback(false);
    data.currentQuestionIndex++;
  }
  if (data.currentQuestionIndex == data.questions.length) {
    finalResults();
  } else {
    renderQuestionPage();
  }
  console.log(userChoice);
}

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

function answerResponse(){
  $("#nextQuestion").on("click", function(e){
    e.preventDefault();
  });
}

function resetQuiz(){
  data.totalScore = 0;
  data.currentQuestionIndex = 0;
}
