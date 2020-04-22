"use strict";

// notes from instructor walk-through

//git checkout -b conditionals-exec ; set up an html with approp js tag

//#1

// create fx first; parameter color; now need if else if block

function analyzeColor(color) {
    if (color === "blue") {
        return "blue is the color of the sky";
    } else if (color === "red") {
        return "s";
    } else {
        return "I dont know anything aab out " + color;
    }
}

//console.log

// function analyzeColorSwitch(color) {
//     if (color === "blue") {
//         return "blue is the color of the sky";
//     } else if (color === "red") {
//         return "s";
//     } else {
//         return "I dont know anything aab out " + color;
//     }
// }

// in order to change to switch case... call switch case:
// return statements are done, and no need for breaks...

function analyzeColorSwitch(color) {
    switch (color) {
        case "blue":
            return "blue is the color of the sky";
            break;
        case "red":
            return "Strawberris are red";
            break;
        default:
            return "I don't know anything about" + color;
            break;
    }
}
// side note: default can occur on top, order does not effect switches
//console.log(analyzeColorSwitch(randomColor));

//TODO prompt for color, pass input to fx

var userColor = prompt("Enter a color").toLowerCase();   // toLowerCase to normalize everything if someone entered cases, sanitizes data

//to pass var color
alert(analyzeColorSwitch(userColor));

//return saves the value so that you for instance alert it later like here

//TODO next lucky number walmart

function calculateTotal(luckyNum, bull) {
    // mult places to start here
    if (luckyNum === 0) {
        return bill;
        //now what
    } else if (luckyNum === 1) {
        return (bill * .90);
    } else if (luckyNum === 2) {
        return (bill * .75);
    } else if (luckyNum === 3) {
        return (bill * .65);
    } else if (luckyNum === 4) {
        return (bill * .5);
    } else {
        return 0;
    }
}

//TODO random generator

var luckyNumber = Math.floor(Math.random() * 6);
//generates # 1-5

//prompt user for bill and alert to savings and final total
//come up with a var

//var userBill = prompt("What was your bill?"); //for a number:
var userBill = parseFloat(prompt("What was your bill?"));

alert("Your lucky number is " + luckyNumber + ". Before discount, your bill was: $" + userBill.toFixed(2) + ". After discount, your final total today is: $" + calculateTotal(luckyNumber, userBill).toFixed(2));

