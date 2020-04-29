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

for (var userInput = prompt("Choose an odd number between 1 and 50"); userInput <= 49; ++userInput) {
    if (input >= 1 && input <= 49 && input % 2 !== 0) {
        console.log("Here is an odd number: " + );
    }
}
// piece of the puzzle
// if (i % 2 === 0) {
//    continue;
//   }

// alternate way try

// function oddNumber() {
//     console.log("number to skip is: " + userInput);
//     for (var i = 1; 1 <= 49; i++) {
//         console.log("Yikes" + i) {
//
//         } else {
//
//         }
//     }
// }