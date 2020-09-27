// variables to monitor quiz progression
var currentQuestionsIndex = 0;
var totalAllowedTime = questions.lenght * 20;
var timerId;


// variables to store refences to DOM Elements for manipulation
var questionsEl = document.getElementById("questions");
var countDownEl = document.getElementById("countdown");
var responsesEl = document.getElementById("responses");
var startBtnEl = document.getElementById("start");
var submitBtnEl = document.getElementById("submit");
var feedbackEl = document.getElementById("feedback");

function startQuiz() {
    // hide start screen to make way for questions to be displayed
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    // show question section by removing hide class from section element
    questionsEl.removeAttribute("class", "hide");

    // display totalAllowedTime
    countDownEl.textContent = totalAllowedTime;

    // start timer
    timerId = setInterval(countDownDecrement, 1000);

    // display question
    getQuestion();
};

function getQuestion() {
    var currentQuestion = questions[currentQuestionsIndex];

    // display current question by updating 'question-text' with data from currentQuestionIndex
    var questionTextEl = document.getElementById("question-text");
    questionTextEl.textContent = currentQuestion.text;

    // remove previously displayed responses
    responsesEl.innerHTML = "";

    // find responses related to currentQuestion
    currentQuestion.responses.forEach(function(repsonse, i) {
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