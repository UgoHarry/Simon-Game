// function tryy() {
//   var test = document.getElementById("powerSwitch");
//   if (test.checked === true) {
//     console.log("On");
//   }
//   else {
//     console.log("Off");
//   }
// }

// tryy();

var activePlayer, testPattern;

function init() {
  // set counter field to zero
  document.getElementById("counter").setAttribute("value", "0");

  // create variable for score
  let score = 0;
  
  // create empty array variable for pattern
  testPattern = [2,0];
}

init();

function startGame() {
  // create a random between 0-3
  let randomPick = Math.floor(Math.random() * 4);
  testPattern.push(randomPick);
  // Loop through pattern array and play sounds
  for (var i = 0; i < testPattern.length; i++) {
    let beep = document.getElementById("audio" + testPattern[i]);
    console.log(beep);
    beep.play();
  }

}

function checkPlay() {

}

function tune (id) {
  var mySound = document.getElementById("audio" + id);
  mySound.play();
}