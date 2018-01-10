alert("Let's play Rock, Paper and Scissors");

// global variables
var playerScore = 0;
var compScore = 0;

// gets the player choice
function PlayerChoice(){
  if (question === "rock") {
    return "rock";
  } else if (question === "paper") {
    return "paper";
  } else if (question === "scissors") {
    return "scissors";
  }
}

// gets the computer choice
function CompChoice(){
  var rand = Math.floor(Math.random() * 3);
  if (rand === 0 ) {
    return "rock";
  } else if (rand === 1 ) {
    return "paper";
  } else {
    return "scissors";
  }
}

// check the winner
function Winner(){
  var winner;
  if (playerMove === CompMove ) {
    winner = "tie";
  } else if ( (playerMove === "paper" && CompMove === "rock") || (playerMove === "rock" && CompMove === "scissors") || (playerMove === "scissors" && CompMove === "paper")) {
    winner = "player";
  } else if (( CompMove === "paper" && playerMove === "rock") || (CompMove === "rock" && playerMove === "scissors") || (CompMove === "scissors" && playerMove === "paper")) {
    winner = "computer";
  }
  return winner;
}

// keeps looping and playing game until computer or user gets to 5
do {

  var question = prompt("Please select 'rock', 'paper' or 'scissors'");
  var playerMove = PlayerChoice();
  var CompMove = CompChoice();
  var winner = Winner();

  if (winner === "player") {
    playerScore++
    alert("Player has won! Scores are: Player: " + playerScore + " Computer: " + compScore );
  } else if (winner === "computer") {
    compScore++
    alert("Computer has won! Scores are: Player: " + playerScore + " Computer: " + compScore );
  } else if (winner == "tie") {
    alert("Game is tie! Scores are: Player: " + playerScore + " Computer: " + compScore );
  }
} while ( playerScore < 5 && compScore < 5);
