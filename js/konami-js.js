"use strict";

// KEYCODE

var keyCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown'];
var bucket = 0;
var keyHandler = function (event) {
    // If the key isn't in the pattern, or isn't the current key in the pattern, reset
    if (keyCode.indexOf(event.key) < 0 || event.key !== keyCode[bucket]) {
        bucket = 0;
        return;
    }
// Update how much of the pattern is complete
    bucket++;
    // If complete, alert and reset
    if (keyCode.length === bucket) {
        bucket = 0;
        window.alert('Coordinates Accepted');
        $('#mainScreen').css('background-color','blue');
    }
};
// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);

// GENERAL VARIABLES

var cargo = {
    inventory: ["box1", "box2"],
    disposition: "loaded",
    damage: "intact"
};

var hermaticSeal = {
    status: "engaged",
    damage: "intact"
};

function damageReport() {

}

var initiateBurn = ['x','y'];

var initiateLockUnlock = ['keypress1','keypress2'];

//comm pwr fx

// function comsPowerSequence() {
//
// }

$('.com-button').click(function() {
    // $('h1').html(`<div class="area"><div class="mover"></div></div>`);
    $('#comPowerCircuit').css('background-color','green');
});

// FUTURE CONDITIONAL VARIABLES

// var powerOn = true;
//
// var powerOff = false;

//bucket.push(event.keycode);
//if(bucket)

//[52,50,88,52,50];
//"42x42";
//[form array of values of the code, sep by commas
//[52,50,88,52,50]

// var bucket = $("#inputToComputer").value;
