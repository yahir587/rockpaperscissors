let randomNumber = 0;
let computerChoice;
let result;

$(".play").click(function () {
  let userChoice = $("input").val();
  $(".userChoice").text(userChoice);
  $(".computerChoice").text(computerChoice);
  let randomNumber = Math.ceil(Math.random() * 3);
  
  if (randomNumber === 1) {
    computerChoice = "rock";
    $(".computerChoice").text("rock");
    let computer = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
    $(".computerChoice").text("paper");
    let computer = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
    $(".computerChoice").text("scissors");
    let computer = "scissors";
  }

  if (userChoice === "rock" && computerChoice === "rock") {
    result = "it is a tie";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    result = "You win!";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    result = "Computer wins!";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    result = "Computer wins!";
  } else if (userChoice === "paper" && computerChoice === "paper") {
    result = "It's a tie";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    result = "You win!";
  } else if (userChoice === "scissors" && computerChoice === "scissors") {
    result = "You win!";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    result = "Computer wins!";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    result = "You win ";
  }

  $(".result").text(result);
});
