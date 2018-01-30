const data = {
  questions:[


// this is object 1 but we won't name it because it is inside an array
{
  question: 'Question 1 what is that thing?',
  answers:[
     'this',
     'that',
     'something',
     'allodat'
  ],
  correctAnswer: 0
},

// this is object 2 but we won't name it because it is inside an array
{
  question: 'Question 2 what is that other thing?',
  answers: [
    'this',
    'that',
    'something',
    'allodat'
  ],
  correctAnswer: 2
}

],
  currentQuestion: 0,
  totalScore: 0,
  startQuiz: false
};

$(document).ready(function() {
  $("#startQuiz").click(function(){
    startQuiz();
  });
  $(".myForm").submit(function(event) {
    event.preventDefault();
    nextQuestion();
  });
  $("#continue").click(function(){
    renderPage();
  });
  $("#retake").click(function(event){
    event.preventDefault();
    retakeQuiz();
  });
  renderPage();
});

function renderPage() {
  if (data.startQuiz === false) {
    $("section").hide();
    $("#startPage").show();
  } else {
    $("section").hide();
    $("#questionPage").show();
    loadQuestions();
  }
}

function startQuiz(){
  data.startQuiz = true;
  data.currentQuestion = 0;
  data.totalScore = 0;
  renderPage();
}

function loadQuestions(){
  // another if statement similar to renderPage
}

function nextQuestion(){

}

// reassign data.questions
// add if conditional
data.currentQuestion++;

function continueQuiz(){
  renderPage();
}

function retakeQuiz(){
  // similar to renderPage() function
  // but without conditional
}
