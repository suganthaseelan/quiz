function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions;
questions = [
    new Question("When was the company TESTPRESS found?", ["2010", "1990", "1998", "2013"], "2013"),
    new Question("Which place is TESTPRESS company based on?", ["Mumbai", "London", "Chennai", "NewYork"], "Chennai"),
    new Question("Which sector is TESTPRESS woking on?", ["Health", "Education", "Sports", "StockExchange"], "Education"),
    new Question("Who is the founder of TESTPRESS?", ["Sadik Kidas", "Dinesh Kumar", "Manimegalai Bala", "Dhoni Faruk"], "Sadik Kidas")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





