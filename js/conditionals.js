"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// var colorChoice = prompt("Please choose a color.");
//
// function analyzeColor(colorChoice) {
//     if (colorChoice === "blue") {
//         return "blue is the color of the sky";
//     } else if (colorChoice === "red") {
//         return "Strawberris are red";
//     } else if (colorChoice === "cyan") {
//         return "I don't know anything about cyan");
//     } else {
//         return "I know nothing about that color";
//     }
// }
// console.log(analyzeColor("blue"), "blue is the color of the sky");
// console.log(analyzeColor("red"), "Strawberries are red");
// console.log(analyzeColor("cyan"), "I don't know anything about cyan");
// console.log(analyzeColor("brown"), "I know nothing about that color");


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

(function () {

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// function analyzeColor(randomColor) {
//     if (colorChoice === "blue") {
//         return "blue is the color of the sky";
//     } else if (colorChoice === "red") {
//         return "Strawberris are red";
//     } else if (colorChoice === "cyan") {
//         return "I don't know anything about cyan");
//     } else {
//         return "I know nothing about that color";
// }
//
// console.log(analyzeColor("blue"), "blue is the color of the sky");
// console.log(analyzeColor("red"), "Strawberries are red");
// console.log(analyzeColor("cyan"), "I don't know anything about cyan");
// console.log(analyzeColor("brown"), "I know nothing about that color");

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

var colorChoice = prompt("Please choose a color.");

switch (colorChoice) {
    case "blue":
        alert("blue is the color of the sky");
        break;
    case "red":
        alert("Strawberries are red");
        break;
    case "cyan":
        alert("I don't know anything about this color");
        break;
    default:
        alert("I don't know anything about that color");
        break;
}
})();
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
(function () {
// var colorChoice = prompt("Please choose a color.");

function analyzeColor(colorChoice) {
    alert("You have chosen " + colorChoice);
}

})();
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
(function () {
var luckyNumber = Math.floor((Math.random() * 10) + 1);

function calculateTotal(luckyNumber) {
    if (luckyNumber === 0) {
        return "no discount";
    } else if (luckyNumber === 1) {
        return "10% discount";
    } else if (luckyNumber === 2) {
        return "25% discounty";
    } else if (luckyNumber === 3) {
        return "35% discount";
    } else if (luckyNumber === 4) {
        return "50% discount";
    } else {
        return "Luck you, it's free!";
    }
}
})();
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
(function () {
var luckyNumber = Math.floor(Math.random() * 6);

var userBill = prompt("What was your total bill?");

function calculateTotal(userBill) {
    alert("Your lucky number was " + luckyNumber + "!");
}
})();
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//switch here? need the wrap the whole thing method here i think

// iffe function here? for these local vars? do the others need it to keep from interferringing?
    // yes probably


(function () {


var desireNumber = confirm("Would you like to enter a number?");

function yourNumber(desireNumber) {
    if desireNumber === true;
        return var userNumber = prompt("Please enter a number.");
}

switch (userNumber) {
    case (userNumber % 2 === 0);
        alert("Your Number is even.");
        break;
    case (userNumber % 2 >= 1);
        alert("Your number is odd.");
        break;
    case (userNumber + 100);
        alert("Did you know your number plus 100 is " + (userNumber + 100));
        break;
    case (userNumber * -1);
    default:
        alert("Next time choose a number.");
        break;
}

function userNumber() {
    if //multiplied by -1 = positive;
        then number is negative;
    or
    if //multiplied by -1 = negative;
        then number is postivie;
}

})();