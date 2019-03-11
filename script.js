//+++++++++++++++++++ When the User clicks the start button ++++++++++++++++++++++++++

// 1. listen for when the user clicks on the start button
// 2. Move the page downward centering the form element
// 3. Generate the first question pulling the information from the STORE
// create a function that renders the questions
//+++++ Form Template +++++
// 4. Render the first question on the DOM
// 5. Generate the Submit button on the form
// 6. Generate the exit button on the form
// 7. Generate the current score of the game 0/5
// 8. Current Question number
// 9. Restart quiz button

//+++++++++++++++++++ When the User Clicks the Submit button ++++++++++++++++++++++++++

// 1.  Listn for the click submission
// 2. Create a function that compare the seleected answer against the correct updates the score variable
// 3. show the updated score on the DOM
// 4. generate one of the two specific reaction pages based on question answer
// 5. Generate the Next Button

//+++++++++++++++++++ When the user clicks the Next Button on result screen ++++++++++++++++++++++++++

//1. Listen for click event on the next button
//2. close the response page
//2. Render the next question in the store to the page

//+++++++++++++++++++ When the user clicks the New Quiz (restart) Button  ++++++++++++++++++++++++++

//1. Current question is cleared
//2. Quiz is reset to the st

let questionNumber = 0;
let currentScore = 0;

function displayQuestion() {
  return `<form>
  <div class="quizControls">
  <button class="closeQuiz"><i class="material-icons">
  clear
  </i></button>

  <div class="questionCounter">Question # ${questionNumber + 1}</div>
  <span class = "currentScore">${currentScore} / 5 Points</span>
</div>

<img src = "${STORE[questionNumber].questionIcon}" style="max-width:250px" />
  <h2 class = "question">${STORE[questionNumber].question}</h2>
  <fieldset class = "answerBox">
  <div>
  <input id="question1" class = "answerChoice" type ="radio" name ="radAnswer" value ="${
    STORE[questionNumber].answers[0]
  }"/>
  <label for="question1">${STORE[questionNumber].answers[0]}</label>
  </div>
  <div>
  <input id="question2" class = "answerChoice" type ="radio" name ="radAnswer" value ="${
    STORE[questionNumber].answers[1]
  }"/>
  <label for="question2">${STORE[questionNumber].answers[1]}</label>
  </div>
  <div>
  <input id="question3" class = "answerChoice" type ="radio" name ="radAnswer" value ="${
    STORE[questionNumber].answers[2]
  }"/>
  <label for="question3">${STORE[questionNumber].answers[2]}</label>
  </div>
  <div>
  <input id="question4" class = "answerChoice" type ="radio" name ="radAnswer" value="${
    STORE[questionNumber].answers[3]
  }"/>
  <label for="question4">${STORE[questionNumber].answers[3]}</label>
  </div>
  </fieldset>
  
  </form>
  <button id="submitButton" onclick="userSubmit()">SUBMIT</button>
 
  `;
}

//animating the drop down quiz
$(function() {
  $(".arrow-down").click(function() {
    let position = $("#quizTitle").offset().top;
    $("body, html").animate({
      scrollTop: position
    });
    $(".quizWrapper").slideDown("medium");
  });
});

function renderQuestion() {
  $(".quizWrapper").html(displayQuestion());
}

// Determining if the question submitted is correct or wrong and then displaying the appropirate page
function userSubmit() {
  console.log(questionNumber);
  let choice = $("input:checked");
  if (choice.val() == `${STORE[questionNumber].correctAnswer}`) {
    currentScore += 1;
    renderCorrectAnswerScreen();
  } else {
    renderWrongAsnwerScreen();
  }
}

//Displaying the Correct AnswerScreen on the DOM if selected
function renderCorrectAnswerScreen() {
  $(".quizWrapper").html(correctAnswerScreen());
}
//Displaying the Wrong AnswerScreen on the DOM if selected
function renderWrongAsnwerScreen() {
  $(".quizWrapper").html(wrongAnswerScreen());
}

function renderQuizEnd() {
  $(".quizWrapper").html(quizEndScreen());
}

function correctAnswerScreen() {
  return `
  <div class="quizControls">
  <button class="closeQuiz"><i class="material-icons">
  clear
  </i></button>
  <div class="questionCounter">CORRECT!</div>
  <span class = "currentScore"> ${currentScore} / 5 Points</span>
  </div>
  <img src = "${
    STORE[questionNumber].correctAnswerIcon
  }" style="max-width:500px" />
  <h2 class = "questionMessage">${
    STORE[questionNumber].correctAnswerMessage
  }</h2>
  ${checkForQuizEnd()}
  `;
}

function wrongAnswerScreen() {
  return ` 
  <div class="quizControls">
  <button class="closeQuiz"><i class="material-icons">
  clear
  </i></button>
  <div class="questionCounter">WRONG!</div>
  <span class = "currentScore"> ${currentScore} / 5 Points</span>
  </div>
  <img src = "${
    STORE[questionNumber].wrongAnswerIcon
  }" style="max-width:500px" />
  <h2 class = "questionMessage">${STORE[questionNumber].wrongAnswerMessage}</h2>
  ${checkForQuizEnd()}
  `;
}

function quizEndScreen() {
  return `
  <div class="quizControls">
  <span class = "finalScore"> FINAL SCORE : ${currentScore} / 5 Points</span>
  </div>
  <img id="portrait" src="media/jorge-ortiz-2stephen.jpg">
 <blockquote class = "king">Talent is cheaper than table salt. What separates the talented
 individual from the successful one is a lot of hard work.
 </blockquote>
  <button id="transitionButton" onclick = "restartQuiz()">Restart Quiz</button>
  `;
}

//Check for the final question in the quiz
function checkForQuizEnd() {
  let button = `<button id="transitionButton" onclick= "nextQuestion()">NEXT</button>`;
  if (questionNumber == 4) {
    button = `<button id="transitionButton" onclick= "renderQuizEnd()">FINISH</button>`;
  }
  return `${button}`;
}

function restartQuiz() {
  questionNumber = 0;
  currentScore = 0;
  renderQuestion();
}

function nextQuestion() {
  questionNumber = questionNumber + 1;
  renderQuestion();
  console.log("Next question");
}

//at question max render the question correct/wrong screen
// and change the Next questio button value to be finished

function startQuiz() {
  renderQuestion();
}

$(startQuiz);
