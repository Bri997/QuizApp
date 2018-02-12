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
  totalScore: 0,
  startQuiz: false
};


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
    answerSubmitted();

  }
}


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

function continueQuiz(){
  renderPage();
}

$('#questionNo').text(data.currentQuestion++);


function retakeQuiz(){
  $("section").hide();
  $("#startPage").show();
}
