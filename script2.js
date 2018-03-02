//  Variables
var userSeq = [];
var simonSeq = [];
var id, colour, level = 0;

//  Initialise start board
$(function(){
    $('.start').click(function(){
        //Increase level once game is started
        level++;
        startSequence();
    })
})

//  Simon sequence function
function startSequence() {
    //  Generate random number
    genRandomNum();
    var i = 0;
    var myInterval = setInterval(function(){
        playtune();
    }, 1000)
}

//  function to generate random numbers
function genRandomNum() {
    let randomPick = Math.floor(Math.random() * 4);
    //  Push random number to Simon sequence
    simonSeq.push(randomPick);
}



//  User replicates sequence