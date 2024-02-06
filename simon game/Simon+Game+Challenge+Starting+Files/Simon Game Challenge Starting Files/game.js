// Define an array of button colors
const buttonColours = ["red", "blue", "green", "yellow"];

// Initialize arrays for the game pattern and user clicked pattern
let gamePattern = [];
let userClickedPattern = [];

// Variables to track game state
let gameStarted = false;
let currentLevel = 0;

// Event listener for a keypress to start the game
$(document).keypress(function startGame() {
  if (!gameStarted) {
    $("#level-title").text("Level " + currentLevel);
    generateNextSequence();
    gameStarted = true;
  }
});

$(".btn").click(function handleButtonClick() {
  const userChosenColour = $(this).attr("id");
  
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animateButtonPress(userChosenColour);

  checkUserAnswer(userClickedPattern.length - 1);
});

function checkUserAnswer(currentIndex) {
  if (gamePattern[currentIndex] === userClickedPattern[currentIndex]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(generateNextSequence, 1000);
    }
  } else {
  }
}

function generateNextSequence() {
  userClickedPattern = [];
  
  currentLevel++;
  $("#level-title").text("Level " + currentLevel);

  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  animateColorSequence(randomChosenColour);
  playSound(randomChosenColour);
}

function animateButtonPress(color) {
  $("#" + color).addClass("pressed");
  setTimeout(() => $("#" + color).removeClass("pressed"), 100);
}

function animateColorSequence(color) {
  $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function handleGameLoss() {
  playSound("wrong");
  $("body").addClass("game-over");
  $("#level-title").text("Game Over, Press Any Key to Restart");

  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 200);

  resetGame();
}

function resetGame() {
  currentLevel = 0;
  gamePattern = [];
  gameStarted = false;
}
