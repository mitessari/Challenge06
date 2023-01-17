
//let choicesEl = document.querySelector("#choices");
var start = document.querySelector("#button");
let timer = document.querySelector(".time");
let userScore = timer; 
var myQuestions = [{question: "What is 10/2?", answers: {a: '3', b: '5', c: '115'}, correctAnswer: 'b'},
	{ question: "What is 30/3?", answers: { a: '3', b: '5', c: '10'}, correctAnswer: 'c'}];

    let currentQuestion = 0;


//let intervalId = setInterval;

function setTime (){
    var secondsLeft = 10;
    //sets interval in variable
    var timerInterval= setInterval(function(){
        secondsLeft--;
        timer.textContent = secondsLeft;
        if(secondsLeft=== 0) {
            //stops execution of action at set interval
            clearInterval(timerInterval);
            
        }
    }, 1000);
}

function displayQuestion(){
    //acess the first question
    document.querySelector("#question-title").textContent = myQuestions[0].question;
    document.querySelector("#choices").textContent = myQuestions[0].answers;


}
displayQuestion();

start.addEventListener("click", function(){
    setTime();
    displayQuestion()
}) 




/*
 function setInterval(() {
    timer--;
    console.log(timer);
    
}, 1000); */

/*choicesEl.addEventListener("click", function(event)){
    if (event.target.matches("button"))
    console.log(event.target.getAttribute("data-index"));

}*/











/*

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
} */