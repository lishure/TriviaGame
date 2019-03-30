window.onload = function () {
  //Create jumbotron with start button in html
  //Create onclick function for start button so page changes

  // var start = function () {
  //   //when starts, show questionaire page,
  // }
  //Need to make array of variables
  var correct = 0;
  //$("#correct-answer").text(correct); //This is for the correct count
  var incorrect = 0;
  //$("#wrong-answer").text(incorrect); //This is for the incorrect count
  //var unanswered = 0;
  //$("#no-answer").text(unanswered); //This is for blank
  //var questions = "";
  // var answer = "";
  //Need to make DOM variables
  var startButton = document.querySelector("#start-button");
  var newContainer = document.querySelector(".container");
  var newJumbotron = document.querySelector(".jumbotron");
  var newTimer = document.querySelector(".timer");
  var endPage = document.querySelector(".jumbotron-special");
  var correctDisplay = document.querySelector("#correct-answer");
  var incorrectDisplay = document.querySelector("#wrong-answer");
  var noAnswer = document.querySelector("#no-answer");

  //Make on click function using DOMS
  startButton.addEventListener("click", getNewContainer);

  function getNewContainer() {

    document.querySelector(".container").addEventListener("click", function (event) {

      console.log(event)

      if (event.target.type === "radio") {
        addValues(event.target.value)
        console.log(event.target);
        // then do something
        // event.target is the radio button that the user clicked
      }

    });

    var startTime = 20;
    // newContainer[0].style.display = "Initial";
    newContainer.classList.remove("invisible");

    // newJumbotron[0].style.display = "none";
    newJumbotron.classList.add("invisible");

    var timer = setInterval(function () {
      if (startTime === 1) {
        clearInterval(timer);
        newTimer.innerHTML = "";
        //placeholder. need to create a third container
        //Make consistent. invisible/visible
        endPage.classList.remove("invisible");
        newContainer.classList.add("invisible");
        incorrectDisplay.innerText = incorrect;
        correctDisplay.innerText = correct;
        noAnswer.innerText = 10 - (incorrect + correct);
      };
      console.log(startTime -= 1);
      newTimer.innerHTML = startTime;
    }, 1000);
  };

  //If value = 0 is selected, then incorrect ++, else if value = 1 is selected,
  //then correct ++. When timer runs out, unanswered === 10 -(incorrect)-(correct)

  function addValues(value) {
    if (value === "0") {
      incorrect++;
      //console.log(incorrect);

    }
    else if (value === "1") {
      correct++;
      console.log(correct);

    }
  };

  // correct.innerText = 

  // incorrect.innerText =


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
}