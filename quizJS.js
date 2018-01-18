
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
    question: "It is important to stay away from the event horizon \n of our black hole Sagittarius A* \n that limit is?",
    answers: {
      a: "Eight million miles",
      b: "Fifty thousand miles",
      c: "Twenty seven trillion miles"
    },
    correctAnswer: "a"
  }

// put more questions here
];
/*
function answerChecker(val) {
  const rightAnswer = correctAnswer.filter(val){
    if val === correctAnswer
    console.log("GOT IT")
  }
}
*/


function questionContainer() {
  for(var i in myQuestions){
    console.log(myQuestions[i].question);
      console.log(myQuestions[i].answers);
      console.log(myQuestions[i].correctAnswer);
      var questionHolder = "";
      for ( var i in myQuestions[i].answers){
        questionHolder += `<div `
      }
    }


}

questionContainer();



/*
$(".quizContainer").prepend ('Some Question');
$(".quizSelections").append("Select Sutff");

});
*/
