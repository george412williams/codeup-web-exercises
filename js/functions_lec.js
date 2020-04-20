"use strict";

// function decaration syntax

fucntion say Hello() {
    console.log ("Hello!");
}

// calling / invoking the function

sayHello();

// invoked and seen in console and can copy mult for mult logs

//this?:

sayHello;

//is just a value, not running, no console display, is a var that holds a value for a function, still has a meaning
//every function has a return value, can include a return statement in a fucntion, in order to see the value we console it

function sayHello() {
    console.log("Hello");
}

console.log(sayHello());

//needs a return, have a fnct is a preferred method that helps build big and prevents console from being written into the script

return "Hello";
function sayHello() {
    return "Hello");
}
// console.log(sayHello());

fucntion calculateMortgage() {
    return 2 + 2;
}

calculateMortgage() // edit html
// or
calculateMortgage() // wrtie to a text file, store in a DB, Pass the value to another funciton

// will use console in function to check for bugs
// return negates any other logs or returns, logs above returns will process along with the return
//distinction btwn

// fucntion sayHello() {
//     return "Hello";
// }
//
// consol.log(sayHello());

//this is a definition funtion, displays the funtion
//time s when appropriate to pass down definition versus value
//passing defs happen more when working with others' code

 // fucntion expression syntax

var  sayHello = fucntion () {
    return "Hello";
};

    //appendix further reading about hoisting, not in current focus right now

// argument vs parameters (fucntion input)

// function addTwo(num) {
//     return num + 2;
// }
//more ...
// function addTwo() {
//     return 2 + 2;
// }
// invoke function

// console.log(addTwo(5);

    //first is preferred because does not rely on global vars

// global variable - usable by anything following
// pure function vs function with side effects

// add't with parameters:

    // is possible to have mult parameters (num1, num2) {...

// fucntion add (num1, num2) { return num1 + num2
 //what would happen if you passed through more arguments than there are parameters?

    // beh's normally by ignoring them, does not break

