//Create jumbotron with start button in html
//Create onclick function for start button so page changes 
var start = function () {
    //when starts, show questionaire page,
}
//Need to make array of variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var questions = "";
var answer = "";
//Need to make DOM variables
var startButton = document.getElementById("start-button");
var newContainer = document.getElementsByClassName("container");
var newJumbotron = document.getElementsByClassName("jumbotron");
var newTimer = document.querySelector(".timer");

//Make on click function using DOMS
startButton.addEventListener("click", getNewContainer);
function getNewContainer() {
    var startTime = 5;
    newContainer[0].style.display = "Initial";
    newJumbotron[0].style.display = "none";
    
    var timer = setInterval(function() {
        if (startTime === 1){
            clearInterval(timer);
            newTimer.innerHTML = 5;
            //placeholder. need to create a third container
            newJumbotron[0].style.display = "Initial";
            
        };
        console.log(startTime -= 1);
        newTimer.innerHTML = startTime;
    }, 1000);
};
//Need to make an array of questions and answers? Maybe

//Need to use hide/show/next function
//Container is hidden in html, will use on click show function



//Make up a list of 10 questions with radio buttons
//Allow only 1 radio button to be selected per question
//Log correct/incorrect answers
//Need to set timer, also show time left.
//$("#start").on("click", function() {
  //  $(".container").show();

   // delayButtonAlert = setTimeout(function() {
     //when time runs out, display end page
    //}, 30000);
  //});
//When timer runs out, show end page- need show correct/incorrect/unanswered questions
//Need a total of 3 pages. start page, questionaire page, and end page.


