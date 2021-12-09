let randomNumber = 0;
let computerChoice;

$(".play").click(function() {
  let userChoice = $("input").val();
  $(".userChoice").text(userChoice);
  let randomNumber = Math.random();
  $(".computerChoice").text(randomNumber);
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
if (userChoice === "rock" && computerChoice === "rock"){
  
}



});
