"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello (name) {
    return ("Hello, " + name + "!");
}
sayHello();
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
//sayHello(george);
var helloMessage = sayHello('George');
console.log(helloMessage, 'Hello, George!');

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
vay myName;
console.log(sayHello(myName));
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(num) {
    return num === 2;
}

console.log(isTwo(1), false);
console.log(isTwo(2), true);
console.log(isTwo(3), false);
console.log(isTwo(random));
console.log(random);
// the two randoms, one is to id the random the other is for the boolean
// random is defined above, you can sub in any numbers for the desired range

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tipPercentage, bill) {
    //take tipP and mult w bill
    return tipPercentage * bill;
}
console.log(calculateTip(.2, 20), 4);
console.log(calculateTip(.25, 20), 6.31);
console.log(calculateTip(.15, 20), 5.03);

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// can be scaled up for lgr apps, separation of concerns: user input sys separate from storage/mgnmt

alert("Welcome to the calculate tip app!");

var bill = prompt("What is your total bill?");
var tip = prompt("How much would you like to tip? (enter 1-100 for the percent value)");
var tipPercentage = tip / 100;

alert("you will need to ftip $" + tipDollars);  //var tipDollars = calculateTip

console.log(bill);
console.log(tip);
console.log(typeof bill);
//come back as string, so good idea to convert to number:
//console.log(calculateTip(10 / 100, 100));
//console.log(calculateTip(tipPercentage, bill))toFixed(2);
//or
//add Number to the prompts to pump out numbers to work with


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount (price, discount) {
    return price * discount;
}
console.log(applyDiscount());
console.log(applyDiscount());
console.log();