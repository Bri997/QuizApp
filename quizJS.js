const data = {
  question:[


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

/** if you had to do it in a for loop all at once **/

for ( let i = 0; i < data.length; i++ ){
  // i will tell us which question to use
  let thisQ = data[i];
  console.log(thisQ);
}


// first show splash screen
//showQuestion(currentIndex);

// then on click, show question 1,
// then on click, answer question 1,
// then on click, show question 2,
// then on click, answer question 2,

/** stretch the for loop over time: **/

let currentIndex = 0;

function drawCurrentQuestion(){
  let q = data[currentIndex];

  let displayQuestions = getHTMLForQuestion(q);
  $('#quizSelections').html(html);
}

function nextQuestion(){
  currentIndex++;
  drawCurrentQuestion();
}
/*
function buttonClickHandler(event){
  if( currentIndex >= questions.length ){
    //$("#displayQuestions").prepend( "DONE");
    console.log("done");
    // end of quiz, show the results screen
  } else {
    nextQuestion();
  }
}
*/
$("#startQuiz").on("click",function(){
  startQuiz();

  //console.log('ran');
});

$("#submit").submit(function(event) {
  event.preventDefault();
  nextQuestion();
    $("#displayQuestions").empty();
  $("#displayQuestions").prepend( "<p> " + data[currentIndex].question + " </p>");
  currentIndex++;
  console.log('ran');

});

$().click(function(){
  renderPage();
});

function renderPage() {
  if (data.startQuiz === false) {

  } else {
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

}

function continueQuiz(){
  renderPage();
}
