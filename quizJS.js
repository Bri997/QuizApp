
/*
var myQuestions = [
  {
    question: "What is your nearest star?",
    answers: {
      a: "Alpha Centauri",
      b: "Barnard\'s Star",
      c: "Sirius",
      d: "Sol"
    },
    correctAnswer: "d"
  },

  {
    question: "It is important to stay away from the event horizon of our black hole Sagittarius A* \n That limit is?",
    answers: [
       "Eight million miles",
       "Fifty thousand miles",
       "Twenty seven trillion miles"
    ],
    correctAnswer: "0"
  }

// put more questions here
];


let currenetIndex = 0;

function questionContainer() {
  var holdingQuestion = [];

  for(var i in myQuestions){
    //console.log(myQuestions[i].question);
    //  console.log(myQuestions[i].answers);
    //  console.log(myQuestions[i].correctAnswer);
    holdingQuestion.push(myQuestions[i].question);

      }
return (holdingQuestion);
}

questionContainer();
document.getElementById("displayQuestions").innerHTML = questionContainer();


function answerSelector () {
    var holdingAnswerSelector = [];
for(var i in myQuestions){
      holdingAnswerSelector.push(myQuestions[i].answers);
      }
      return (holdingAnswerSelector);
    //  console.log(holdingAnswerSelector);
}

answerSelector();

document.getElementById("quizSelections").innerHTML = answerSelector();

function drawCurrentQuestion(){
  let q = questions [currenetIndex];
  let HTML= getHTMLFORQUestion(q)
}
function  nextQuestion() {
  currenetIndex++;
  drawCurrentQuestion();
}

function buttonClickhandler(event){
  if(currenetIndex >= question.lenght
}

/*
function answerChecker(val) {
  const rightAnswer = correctAnswer.filter(val){
    if val === correctAnswer
    console.log("GOT IT")
  }
}
*/


const questions = [


// this is object 1 but we won't name it because it is inside an array
{
  question: 'what is that thing?',
  answers: {
    a: 'this',
    b: 'that',
    c: 'something',
    d: 'allodat'
  },
  correctAnswer: 0
},

// this is object 2 but we won't name it because it is inside an array
{
  question: 'what is that other thing?',
  answers: [
    'this',
    'that',
    'something',
    'allodat'
  ],
  correctAnswer: 2
},

];

/** if you had to do it in a for loop all at once **/

for ( let i = 0; i < questions.length; i++ ){
  // i will tell us which question to use
  let thisQ = questions[i];
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
  let q = questions[currentIndex];

  let displayQuestions = getHTMLForQuestion(q);
  $('.question').html(html);
}

function nextQuestion(){
  currentIndex++;
  drawCurrentQuestion();
}

function buttonClickHandler(event){
  if( currentIndex >= questions.length ){
    // end of quiz, show the results screen
  } else {
    nextQuestion();
  }
}
