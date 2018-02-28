
init();

var playerPattern, simonPattern;

function init() {
  // set counter field to zero
  document.getElementById("counter").setAttribute("value", "0");
  // create variable for score
  let score = 0;
  // create empty array variable for pattern
  simonPattern = [];
  playerPattern = [];
  // tryy();
}

function start() {
  var test = document.getElementById("powerSwitch");
  if (test.checked === true) {
    console.log("On");
    console.log(test.checked);
    simonGame();
  }
  else {
    console.log("Off");
    console.log(test.checked);
  }
}



var index = 1;
function simonGame() {
  // create a random between 0-3
  let randomPick = Math.floor(Math.random() * 4);
  // Push number to simonPattern array
  simonPattern.push(randomPick);
  console.log("Simon Pattern");
  console.log(simonPattern);
  var i = 0;

  var myInterval = setInterval(function() {
   var pos = simonPattern[i];
   colorTune(pos);
   i++;
   if(i == simonPattern.length){
     clearInterval(myInterval);
   }
  }, 1000);

  // var beep = document.getElementById("audio" + testPattern[0]);
  // beep.play();
}

//Function that runs on every user play
function userPlay(id) {
  console.log(id);
  // Adding pad id to player pattern array
  playerPattern.push(id * 1);
  console.log(playerPattern);
  colorTune(id*1);
  
}


// Add bright colour and sound
function colorTune (id) {
  var quarter = document.getElementById(id);
  quarter.classList.add("lighter");
  playTune(id);
  setTimeout (function(){
    quarter.classList.remove("lighter");
  }, 500)


function playTune (id) {
  var mySound = document.getElementById("audio" + id);
  mySound.play();
}
  // var mySound = document.getElementById("audio" + id);
  // mySound.play();
}