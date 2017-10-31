// message for users. welcome to the game
var WelcomeMessage = prompt("Welcome to Rock, Paper, Scissors. The first player to reach 5 points will win the game. Press any key to start");

// User input choosing Rock, Paper or Scissors
var choice = prompt("please choose from the following, press r for rock, p for paper and s for scissors");

//Player input
switch (choice) {
  case "r":
   var r = prompt("You chose Rock, the " + computer());
  break;
  case "p":
  var p = prompt("You chose Paper, the " + computer());
  break;
  case "s":
  var s = prompt("You chose Scissors, the " + computer());
  break;
  default:
  console.log("Something went wrong!");
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


// for (var i = 1; i<10; i++) {
//   function computer() {
//     switch (choice) {
//       case "r":
//       var answer = prompt("You chose Rock, The computer chose Rock. You drew.")
//
//         break;
//       default:
//
//     }
//   }
// }







//   if (AI <= 2) {
//   var answer = prompt("The computer chose rock, you lost")
//   return choice
// } else if (AI <= 4) {
//   var answer = prompt("The computer chose paper");
// }
// }



// if (choice === "r")
// function Rock() {
//   var AI = Math.floor(Math.random() * 6) + 1;
//   if (AI <= 2)
//   return prompt("The computer chose rock, you drew");
// } else if (AI <=4) {
//   return prompt("The computer chose ppaper ")
// }
// }
