// message for users. welcome to the game
var WelcomeMessage = prompt("Welcome to Rock, Paper, Scissors. The first player to reach 5 points will win the game. Press any key to start");

// User input choosing Rock, Paper or Scissors
var choice = prompt("please choose from the following, press r for rock, p for paper and s for scissors");

//Player input
switch (choice) {
  case "r":
  var b = "Rock"
  // var b = alert("You chose Rock, the " + computer());
  break;
  case "p":
  var p = ""
  // var p = alert("You chose Paper, the " + computer());
  break;
  case "s":
  // var s = alert("You chose Scissors, the " + computer());
  break;
  default:
  alert("Something went wrong!, you entered incorrect value");
}

// The computer's choice
function computer() {
  var AI = Math.floor(Math.random() * 9)+1;
  if ( AI < 4 ) {
    var a ="Computer chose Rock";
    return a
  } else if (AI < 7) {
    var b = "computer chose Paper";
    return b;
  } else {
    var c = "computer chose Scissors";
    return c
  }
}

// created variables: score1 = user, score2 = computer
var score1 = 0;
var score2 = 0;
// keeping track of the scores
for (var i = 1; i<10; i++) {
  function scores() {
    if ( (choice ==="r") && (computer()=== a) {
      score1 = score1 + 1;
      var score = alert("You drew, score is [user= " +score1 + ", computer + score2]" );
    } else if (true) {

    }
  }
}
scores();
