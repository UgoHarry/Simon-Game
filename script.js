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
  testPattern = [];
}

init();
var index=1;
function startGame() {
  // create a random between 0-3
  let randomPick = Math.floor(Math.random() * 4);
  testPattern.push(randomPick);
  console.log("TestPattern");
  console.log(testPattern);
  //var index = 1;
  var beep = document.getElementById("audio" + testPattern[0]);
  beep.play();

  beep.onended = function () {
    if (index < testPattern.length) {
      console.log("IT IS LESS");
      console.log("INDEX BEFORE: "+ index);
      beep =  document.getElementById("audio" + testPattern[index]);
      beep.play();
      index++;
    }
    console.log("INDEX AFTER??: " + index);

  };

}

function checkPlay() {

}

function tune (id) {
  var mySound = document.getElementById("audio" + id);
  mySound.play();
}