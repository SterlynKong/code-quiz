var clearBtnEl = document.querySelector("#scores");

function displayScores() {
    // check for previous scores in localStorage
    if (!localStorage.getItem("scores")) {
        var scores = [];
    }
    else {
        var scores = JSON.parse(localStorage.getItem("scores"));
    }
    scores.sort(function(a, b){
        return b.score - a.score;
    });

    scores.forEach(function(score) {
        // create recordEl li for initials
        var recordEl = document.createElement("li");
        recordEl.textContent = score.initials + " - " + score.score;

        // create scoreListEl ordered list element and add recordEl for displaying scores
        var scoreListEl = document.getElementById("scores")
        scoreListEl.appendChild(recordEl);        
    });
}


function clearScores() {
    localStorage.removeItem("scores");
    location.reload();
}


// listen for click event on clearBtnEl and call function clearScores
clearBtnEl.addEventListener("click", clearScores);


// display scores when the page loads
displayScores();