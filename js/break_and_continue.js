"use strict";

// 2
var input = prompt("Choose an odd number between 1 and 50");


while (true) {
    if ((input > 50 || input < 1) && input % 2 === 0) {
        console.log("Invalid Entry");
    }
    if (input >= 1 && input <= 49 && input % 2 !==0) {
        break;
    }
}

// 3

