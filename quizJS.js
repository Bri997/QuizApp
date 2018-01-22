var myQuestions = [
  {
    "question": "What is your nearest star?",
    "answers": {
      "a": "Alpha Centauri",
      "b": "Barnard\'s Star",
      "c": "Sirius",
      "d": "Sol"
    },
    "correctAnswer": "d"
  },

  {
    "question": "It is important to stay away from the event horizon \n of our black hole Sagittarius A* \n that limit is?",
    "answers": {
      "a": "Eight million miles",
      "b": "Fifty thousand miles",
      "c": "Twenty seven trillion miles"
    },
    "correctAnswer": "a"
  }
];

var output = document.getElementById('output');
    page = 0;
loadQuestions();

// Event Listeners
btnPre.onclick = buildQuiz(page - 1);
// btnNxt.onclick = buildQuiz(page + 1);

function loadQuestions(){
  buildQuiz(1);
}

function buildQuiz(pg){
  console.log(pg);
  page = pg;
  console.log(page);
  var myQuestion = myQuestions[page - 1].question;
  var myCorrect = myQuestions[page - 1].correctAnswer;
  var questionHolder = '';
  var yesCor = '';
  for(var i in myQuestions[page - 1].answers){
    console.log(i);
    if (i == myCorrect) {
      yesCor = '*';
    } else {
      yesCor = '';
    }
    questionHolder += '<div class="col-sm-6"><div class="btnAns">'+myQuestions[page-1].answers[i] + ' ' +  yesCor + '</div></div>';
  }
    output.innerHTML = '<div class="myQ">'+ myQuestion + ' </div>';
    output.innerHTML += questionHolder;
    console.log();

}
