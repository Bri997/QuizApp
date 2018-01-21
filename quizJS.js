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

function loadQuestions(){
  page = 1;
  buildQuiz(1);
}

function buildQuiz(){
  for (var i in myQuestions) {
    var myQuestion = myQuestions[page - 1].question;
    var myCorrect = myQuestions[page - 1].question;
    var questionHolder = '';
    for(var i in myQuestions[page - 1].answers){
      questionHolder += '<div class="col-sm-6"><a>'+myQuestions[page-1].answers[i] + '</a></div>';
    }
    output.innerHTML = '<div>'+ myQuestion + '</div>';
    output.innerHTML += questionHolder;
    console.log();
  }

}
