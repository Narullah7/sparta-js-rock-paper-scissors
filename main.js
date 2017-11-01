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
    function computer() {
    var AI = Math.floor(Math.random() * 9)+1;
      if ( AI <= 3 ) {
        var a ="rock";
        return a;
      } else if (AI <= 6) {
        var b = "Paper";
        return b;
      } else {
        var c = "scissors";
        return c;
      }
    }
// displays what the user and the computer chose and our global variables.
alert("You chose " + choice + ", the computer chose " + computer());
  var score1 = 0;
  var score2 = 0;
  //calculate scores
  function scores() {
   //draw scenarios
   if (choice === computer()) {
     var a = alert("You drew, score is [user= " + score1 + ", computer= " +score2+"]");
   } else {
     alert("hey");
   }
 }
}


  //     if (parseInt(choice) === parseInt(computer())) {
  //       // display what the computer got and what user got.
  //       var result = alert("You chose " + choice + ", the computer chose " + computer());
  //       return alert("You drew, score is [user= " + score1 + ", computer= " +score2+"]");
  //     //win scenarios
  //   } else if ((choice === "rock") && (computer() === "scissors")) {
  //       score1 = score1 +1;
  //       return alert("You won, score is [user= " + score1 + ", computer= " +score2+"]");
  //   } else if ((choice === "paper") && (computer() === "rock")) {
  //       score1 = score1 +1;
  //       return alert("You won, score is [user= " + score1 + ", computer= " +score2+"]");
  //   } else if ( (choice === "scissors") && (computer() === "paper") ) {
  //       score1 = score1+1;
  //       return alert("You won, score is [user= " + score1 + ", computer= " +score2+"]");
  //     //lose scenarios
  //   } else if ( (computer() === "rock") && (choice === "scissors") ) {
  //       score2 = score2+1;
  //       return alert("You lost, score is [user= " + score1 + ", computer= " +score2+"]");
  //   } else if ( (computer() === "paper") && (choice === "rock") ) {
  //       score2 = score2+1;
  //       return alert("You lost, score is [user= " + score1 + ", computer= " +score2+"]");
  //   } else if ( (computer() === "scissors") && (choice === "paper") ) {
  //       score2 = score2+1;
  //       return alert("You lost, score is [user= " + score1 + ", computer= " +score2+"]");
  //   } else {
  //       return alert("Something went wrong! score could not be calculated!")
  //   }
  //   }
  //   scores();
  // }
