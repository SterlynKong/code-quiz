// variables to monitor quiz progression
var currentQuestionsIndex = 0;
var totalRemainingTime = questions.length * 20;
var timerId;


// variables to store refences to DOM Elements for manipulation
var questionsEl = document.getElementById("questions");
var countDownEl = document.getElementById("countdown");
var responsesEl = document.getElementById("responses");
var startBtnEl = document.getElementById("start");
var submitBtnEl = document.getElementById("submit");
var feedbackEl = document.getElementById("feedback");
var intialsEl = document.getElementById("initials");
var endScreenEl = document.getElementById("end-screen");

function startQuiz() {
    // hide start screen to make way for questions to be displayed
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    // show question section by removing hide class from section element
    questionsEl.removeAttribute("class", "hide");

    // display totalAllowedTime
    countDownEl.textContent = totalRemainingTime;

    // start timer
    timerId = setInterval(countDownDecrementer, 1000);

    // display question
    getQuestion();
};

function getQuestion() {
    var currentQuestion = questions[currentQuestionsIndex];

    // display current question by updating 'question' with data from currentQuestionIndex
    var questionEl = document.getElementById("question");
    questionEl.textContent = currentQuestion.text;

    // remove previously displayed responses
    responsesEl.innerHTML = "";

    // find responses related to currentQuestion
    currentQuestion.responses.forEach(function (repsonse, i) {
        // create button for each option
        var responseBtn = document.createElement("button");
        responseBtn.setAttribute("class", "repsonses");
        responseBtn.setAttribute("value", repsonse);

        responseBtn.textContent = i + 1 + ") " + response;

        // listen for 'click' event on each option and then designate as responseClicked
        responsesBtn.onclick = responseClicked;

        // display responses available for the currentQuestion
        responsesEl.appendChild(responseBtn);
    });
};


function responseClicked() {
    // check if user response does not match correctAnswer for currentQuestion
    if (this.value !== responses[currentQuestionsIndex].answer) {
        // apply penalty by decrementing totalRemainingTime
        totalRemainingTime -= 5;

        if (totalRemainingTime < 0) {
            totalRemainingTime = 0;
        }
        // update countdownEl to display new totalRemainingTime
        countDownEl.textContent = totalRemainingTime;

        // set feedbackEl textContent to 'That's Incorrect!'
        feedbackEl.textContent = "That's Incorrect!";
    }
    else {
        // set feedbackEl textContent to 'That's CORRECT'
        feedbackEl.textContent = "That's CORRECT!";
    }
    // display feedback on page for half a second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 500);

    // increment index to find next question and its possible responses
    currentQuestionsIndex++;

    // evaluate whether that WAS the last question and if not get next question
    if (currentQuestionsIndex <= questions.lenght) {
        endQuiz();
    }
    else {
        getQuestion();
    }
}


function endQuiz() {
    // stop countdown
    clearInterval(timerId);

    // show end-screen
    endScreenEl.removeAttribute("class");

    // show user's score
    var yourScoreEl = document.getElementById("your-score");
    yourScoreEl.textContent = totalRemainingTime;

    // hide questions seciton
    questionsEl.setAttribute("class", "hide");
};


function countDownDecrementer() {
    // default decrease to countdown by 1
    totalRemainingTime--;
    countDownEl.textContent = totalRemainingTime;

    // evaluate if user ran out of time
    if (totalRemainingTime <= 0) {
        endQuiz();
    }
}


function storeUserScore() {
    // get value of initials input without whitespace
    var initials = intialsEl.value.trim();

    // ensure initials returned is not null / empty
    if (initials !== "") {
        var newScore = {
            score: totalRemainingTime,
            initials: initials
        };
    }
    // check for previous scores in localStorage
    if (!localStorage.getItem("scores")) {
        var scores = [];
    }
    else {
        var scores = JSON.parse(localStorage.getItem("scores"));
    }
    // save scores to localStorage
    scores.push(newScore);
    localStorage.setItem("scores", JSON.stringify(scores));

    // redirect user to scores.html
    location.href = "scores.html";
}


// listen for way submit on endScreenEl
endScreenEl.addEventListener("submit", storeUserScore);

// listen for click event on the start button to start the quiz
startBtnEl.addEventListener("click", startQuiz);