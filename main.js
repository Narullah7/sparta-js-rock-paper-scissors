// message for users. welcome to the game
var WelcomeMessage = alert("Welcome to Rock, Paper, Scissors. The first player to reach 5 points will win the game. Press any key to start");

//setting up the for loop
for (var i = 1; i<3; i++) {

  // asking the user for their inputs
  var choice = prompt("please choose from the following, type 'rock', type 'Paper' and type 'scissors')");

  //settings for Player input
  switch (choice) {
    case "rock":
    var b = "rock"
    break;
    case "paper":
    var p = "paper"
    break;
    case "scissors":
    var s = "scissors";
    break;
    default:
    alert("Something went wrong!, you entered incorrect value");
  }

  // The computer's choice
    var AI = (Math.floor(Math.random() * 9)+1);
    if ( AI <= 3 ) {
      var computer ="rock";
    } else if (AI <= 6) {
      var computer = "paper";
    } else {
      var computer = "scissors";
    }

  // displays what the user and the computer chose
  alert("You chose " + choice + ", the computer chose " + computer);

// calculate scores
function scores(choice,computer) {

  //Setting up global variables
  if (i=1 ){
    score1 = 0;
    score2 = 0;
  } else if (i>=2 && i<=9) {
    score1 = score1[i-1];
    score2 = score2[i-1];
  }


  //draw scenarios
  if (choice === computer) {
    return alert("You drew, score is [user= " + score1 + ", computer= " +score2+"]");
  //win scenarios
} else if ( (choice === "rock") && computer === "scissors") {
    score1[i] = score1++;
    return alert("You won, score is [user= " + score1 + ", computer= " +score2+"]");
  } else if ((choice === "paper") && (computer === "rock")) {
    score1[i] = score1++;
    return alert("You won, score is [user= " + score1 + ", computer= " +score2+"]");
  } else if ((choice === "scissors") && computer === "paper") {
    score1[i] = score1++;
    return alert("You won, score is [user= " + score1 + ", computer= " +score2+"]");
  //lose scenarios
} else if ( (computer === "rock") && (choice === "scissors") ) {
    score2[i] =score2++;
    return alert("You lost, score is [user= " + score1 + ", computer= " +score2+"]");
  } else if ((computer === "paper") && choice === "rock") {
    var b = score2++;
    return alert("You lost, score is [user= " + score1 + ", computer= " +score2+"]");
  } else if ((computer === "scissors") && (choice === "paper")) {
    var b = score2++;
    return alert("You lost, score is [user= " + score1 + ", computer= " +score2+"]");
  } else {
    alert("Something went wrong");
  }

}
scores(choice,computer);

function Gameover() {
  if (score1 === 1) {
    return alert("You have won, congradulations")
    break;
  } else if (score2 === 1) {
    return alert("You've lost, try again")
    break;
  } else {

  }
}
}
window.stop();
