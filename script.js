function tryy() {
  var test = document.getElementById("powerSwitch");
  if (test.checked === true) {
    console.log("On");
    console.log(test.checked);
    startGame();
  }
  else {
    console.log("Off");
    console.log(test.checked);
  }
}



init();


var activePlayer, testPattern;

function init() {
  // set counter field to zero
  document.getElementById("counter").setAttribute("value", "0");
  // create variable for score
  let score = 0;
  // create empty array variable for pattern
  testPattern = [];
  // tryy();
}


var index = 1;
function startGame() {
  // create a random between 0-3
  let randomPick = Math.floor(Math.random() * 4);
  // Push number to testPattern array
  testPattern.push(randomPick);
  console.log("TestPattern");
  console.log(testPattern);
  var i = 0;

  var myInterval = setInterval(function() {
   var pos = testPattern[i];
   colorTune(pos);
   i++;
   if(i == testPattern.length){
     clearInterval(myInterval);
   }
  }, 1000);

  // var beep = document.getElementById("audio" + testPattern[0]);
  // beep.play();


}

function checkPlay() {
}


// Add bright colour and sound
function colorTune (id) {
  var quarter = document.getElementById(id);
  quarter.classList.add("lighter");
  setTimeout (function(){
    quarter.classList.remove("lighter");
  }, 500)
  // var mySound = document.getElementById("audio" + id);
  // mySound.play();
}