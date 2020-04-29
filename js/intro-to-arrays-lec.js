"use strict";

console.log("Welcome to intro to arrays");

//PRACTICE

    // lets make an array
    var arr1 = [1,2,3,4,5];

    console.log(arr1[0]);  //prints 1 in the 0 position, etc.; arr1[5] returns undefined...i know why!

    var arr2 = ['a','b','c'];
    // holding a list of elements of any type
    // arrays holding arrays
    var arr4 = [[],[],[]];  //3 empty arrays in arr4, an array of arrays
        console.log(arr4[1][2]);  //returns third position in the first array
        // avoid arrays within an array, for bit data, at our level consider turning it into an object (later)


/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items/elements of any type
// Each slot in a JavaScript array can hold any type of data



/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// var arrLength = arr1.length;
// arr1.push(6);  console.log(arrLength);  // returns 5 bc have not defined length

// dynamically changing array:
// console.log(arr1[arr1.length - 1]);    returns last element in array, if you don't know where the stuff's position in it



// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

// ================
/*
* Iterating over Arrays
*
* has indices 0 thru 5 for 6 elements
*
* var colors = ['red','orange','yellow','green','blue','violet'];
* console.log(colors[0]);
* console.log(colors[1]);
* console.log(colors[2]);
* console.log(colors[3]);
* console.log(colors[4]);
* console.log(colors[5]);
*
*
* this prints out all the colors
* a for loop is for less code
*
*   for, broken down where do i start, where am i start and
*
*       for(star; stop condition; how to get there) so,
*
* for(var i = 0; i < colors.length; i++) {
*   console.log(colors[i]);
* }
*
* for pros: varitye of options used when you need to list partial or backwards of the array
*     cons: more compoitlact use: when you need
*/
//for(var i = 2....starts from pos 2
//for(var i = (colors.length - 1); i >= 0; i--) {           //colors.length - 1 used to find the last index in array
//   console.log(colors[i]);                             //can go backwards
// }

// ties arrays with loops and then to functions

// FOR EACH

    // this forEach loop iterates over all the array elements, this is specific to this situation, narrow use

//call array name; array.forEach(); the parameter is the fx
colors.forEach(function () {

});
//function has 3 avail parameters to deal with
colors.forEach(function (color, index, array) {     //for each has to go from beginning to end, not backwards or another postions
    console.log(color, index);          //if you wanted to changed each element in array, use this
    //console.log(array);
});
// fx parameters have to be in that order to refer correctly on the log
// will usu not see array in the fx parameter...

// practical

var idNumbers = [0,1,2,3,4,5];

idNumbers.forEach(function (num) {
    num += 1;
});

//forEach changes an array globally within that array

//

console.log(idNumbers);

//===========================

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`
// array literal, means is literally a that thing

var pies = [];
console.log(pies);

//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
// ["apple", "cherry", "key lime", "huckleberry"];

pies = ["apple", "cherry", "key lime", "huckleberry"];
console.log(pies);

// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
//  ['square', 'rectangle', 'circle', 'triangle'];

var shapes = ['square', 'rectangle', 'circle', 'triangle'];
console.log(shapes);

// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
//  ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"]

var instructors = ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];
console.log(instructors);

// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
//  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

var daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
console.log(daysOfTheWeek);

// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable

var favoriteFoods = [pizza, curry, bbq, meat];
console.log(favoriteFoods);

/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array

console.log(shapes.length);

// TODO: console.log the length of the instructors array

console.log(instructors.length);

// TODO: console.log the length of the daysOfTheWeek array

console.log(daysOfTheWeek.length);

// TODO: console.log the length of the favoriteFoods array

console.log(favoriteFoods.length);


/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.

// TODO TOGETHER: What do we expect the following to output?
// 	console.log(shapes[0]);
// 	console.log(shapes[1]);
// 	console.log(shapes[2]);
// 	console.log(shapes[3]);
// 	console.log(shapes[4]);

// uncomment above to check behavior, don't have a shapes 4 position so...

// TODO: console.log each element of the instructors array

console.log(instructors[0]);  //again with 1-5, could use a for statement

// TODO: console.log the first three elements of the daysOfTheWeek array



// TODO: console.log the first three elements of the favoriteFoods array


// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array

function returnLastElement(arr) {
    return arr[array.length - 1];
}
console.log(returnLastElement(shapes));

/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array

console.log(shapes[0]);
console.log(shapes[1]);
console.log(shapes[2]);
console.log(shapes[3]);
console.log(shapes[4]);

// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape

    for(var i = 0; i < shapes.length; i++) {
        console.log(shapes[i]);
        if(shapes[i] === 'circle') {
            alert("That's my favorite shape!");
            break;   //will need this
        }
    }

// TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.

// add above:
// if(shapes[i]//referenceing the actual elementstring// === 'circle') {
        //alert("That's my favorite shape!");

// TODO: What happens if we change var i = 1? or var i = 2;

// you will have the wrong element output by +1 or +2

// TODO: What are benefits of using loops to iterate?

// allows us to avoid repeating our code

// TODO: How does the loop know when to stop iterating?

//when it reaches the last index

// TODO: Using a for loop, iterate through the instructors array and console.log each instructor

for(var i = 0; i < instructors.length; i++) {
    console.log([i]);
}

// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week

for(var i = 0; i < daysOfTheWeek.length; i++) {
    console.log([i]);
}

// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food

for(var i = 0; i < favoriteFoods.length; i++) {
    console.log([i]);
}

// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor. If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"
//var instructors = ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];
//console.log(instructors);
// if(shapes[i]//referenceing the actual elementstring// === 'circle') {
//         //alert("That's my favorite shape!");
for(var i = 0; i < instructors.length; i++) {
    console.log(instructors[i]);
    if (instructors[i] === "sophie" || instructors[i] === "justin" || instructors[i] === "david") {
        alert("hey, I know " + instructors[i]);
    } else {
        alert("I haven't had class with " + instructors[i]);
    }
}

/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array

    shapes.forEach(function (shape) {
        console.log(shape);
    });

// TODO TOGETHER: Using a for each loop, console.log each element from the following array:
var pies = ["apple", "cherry", "key lime", "huckleberry"];

pies.forEach(function (pie) {
    console.log(pie);
});

// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor

instructors.forEach(function (instructor) {
    console.log(instructor);
});

// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week

daysOfTheWeek.forEach(function (day) {
    console.log(day);
});

// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food

favoriteFoods.forEach(function (food) {
    console.log(food);
});
