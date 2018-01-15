"use strict";
const myQuestions = [
  {
    question: "Commander what is your nearest star?",
    answers: {
      a: "Alpha Centauri",
      b: "Barnard's Star",
      c: "Sirius",
      d: "Sol"
    },
    correctAnswer: "d"
  },
  {
    question: "Commander it is important to stay away from the event horizon \n of our back hole Sagittarius A* \n that limit is?",
    answers: {
      a: "Eight million miles",
      b: "Fifty thousand miles",
      c: "Twenty seven trillion miles"
    },
    correctAnswer: "a"
  },

  },






];









const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton - document.getElementById('submit');

function buildQuiz(){
  // we'll need a place to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults() {

}

//display quiz right away
buildQuiz();

submitButton.addEventLister('click', showResults);



/*
function storeQuestions() {

};

function nextQuestion() {

};


function answers() {

}
*/
