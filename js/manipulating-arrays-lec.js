"use strict";

// Slide 1 Adding Elements to an array
    // .push and .unshift
    // push adds item to end
    // unshift add item to beginning

console.log("Let's manipulate some arrays");

/* ***************************************************************
* 						MANIPULATING ARRAYS
*************************************************************** */

//JavaScript has several methods we can use to manipulate arrays.
//We will be covering some of the most commonly used array methods.

/* ***************************************************************
* 						ADDING ELEMENTS
*************************************************************** */
// .push adds elements to the end of an array
// .unshift adds elements to the beginning of an array
// these methods return the new length of the array
// modifies original array

var numStrings = ['three','four','five','six','seven'];

// TODO TOGETHER: Use the .push method to add the next String in the sequence.

numStrings.push('eight');

// TODO TOGETHER: Use the .unshift method to add 'two' before 'three'.

numStrings.unshift('two');
console.log(numStrings);
// inspect console reveals add items and length modified

numStrings.push('eight');
numStrings.unshift('two');
//add .log between closing ) and ; to creat a log
console.log(numStrings.push('eight'));;
console.log(numStrings.unshift('two'));;
// gives 6 and 7 respectively because the second console had not been run to read the correct pos and length we wanted

// TODO: Use the .push method to add 'nine' and 'ten'.

numStrings.push('nine');
numStrings.push('ten');
// or
numStrings.push('nine','ten');
// what does the method return?
console.log(numStrings.push('nine', 'ten'));;
// me i thought two numbers
// twas 9
// to call the array, call original array

// TODO: Use .unshift to add 'zero' and 'one'. Can this be done with one statement?

console.log(numStrings.unshift('zero', 'one'));;
console.log(numStrings);

// Console log your results.


/* ***************************************************************
* 						REMOVING ELEMENTS
*************************************************************** */
// These methods don't return the new length of the array, returns the element
// modifies original array

var activeCohorts = ['deimos','europa','fortuna','ganymede','ada','bayes'];

// TODO TOGETHER: Use the .pop method to remove the last cohort in the list.

console.log(activeCohorts.pop());;
console.log(activeCohorts);
// don't pass anying in pop bc just removing, nothing to replace

// TODO TOGETHER: Use the .shift method to remove the first cohort in the list.
// also can store what you removed:
var deimos = activeCohorts.shift();

console.log(activeCohorts.shift());;
console.log(activeCohorts);;

// What do we get when we log the return of these methods?
// removes deimos and returns deimos

// TODO: Use a combination of .pop and .shift methods until only 'fortuna' and 'ganymede' are
// left in the array. Log the updated array.

console.log(activeCohorts.pop());
console.log(activeCohorts);


/* ***************************************************************
* 					LOCATING ARRAY ELEMENTS
*************************************************************** */
// these methods return a number representing the index of the element

// slide:
// find specific items in an array we can use the indexOf and

var fruit = ['apples','oranges','grapes','bananas','apples','oranges','grapes'];

// TODO TOGETHER: Find the first index of 'apples' in the array

fruit.indexOf('apples');
// returns 0, its pos

// TODO TOGETHER: Find the last index of 'apples' in the array

fruit.lastIndexOf('apples');
// returns 4

//
// TODO: If the last element in the fruits array is 'grapes', remove it from the list.

// how to start? why not if
if(fruit.lastIndexOf('grapes') === fruit.length - 1) {
    fruit.pop();
    // removed fruit with [] bc would reutrn the word grapes
    // verbally: if the last index of grapes is at the end, remove the end thing that is that thing
}
console.log(fruit);

// should return 6 bc last index of grapes is there

// Console log your new array.


/* ***************************************************************
* 							SLICING
*************************************************************** */
// allows us to copy a ortion of out array
// does not allow
// looking at curriculum, copies everything starting at that index, second parameter allowed to issue a place to stop
// var sllice = colors.slice(2, 4); does not include the 4th index, stops at it

var instructors = ['justin','david','sophie','vivian','casey','trant','daniel'];

// TODO TOGETHER: Create a variable named ganymedeInstructors that stores an array list of
// 'justin','david', and 'sophie'. Do this with the .slice method.

var ganymedeInstructors = instrucotrs.slice(0, 3);
console.log(ganymedeInstructors);

// TODO TOGETHER: Create a variable named fortunaInstructors that stores an array list of all
// instructors starting from 'vivian' onward.

var fortunaInstructors = instructors.slice(3);
console.log(fortunaInstructors);
console.log(instructors);
//original array is untouched
//this is how you can parse out and rename and use later stuff within an array

//q: don't know length of array but want to remove last 4, can use thos earlier fxs to -1 or -4 as long as
// it comes out as number to manipulate
// here is important to remember what is returned or evaluates to
// make list of things by how they are returned

/* ***************************************************************
* 							REVERSING
*************************************************************** */
// .revrese can be used to revers an array.
// reverse original array


// TODO TOGETHER: Take the instructors array and reverse it.
// What will the following console log display?

instructors.reverse();
// this should flip the array
console.log(instructors);

/* ***************************************************************
* 							SORTING
*************************************************************** */
// will convert element in an array to their string equiv to and sort based on those values
//similar to reverse and sort will modify and return ORIGINAL array

// TODO TOGETHER: Sort the instructors array.
// Take a look at the results of the console log.

var myString = [5,6,'one',1,2,'3','4'];
myString.sort();
// 5,6,1,2 will be converted to string values
// sorts as strings, output preserves their original data types as seen as the console output but is actually:
// ['1','2','3','4','5','6','one'] sorted alphabetically where #s come first still, spaces count before 0
// console output shows these in this order but as their data type
// good for alphebetizing a list of elements
console.log(instructors);

/* ***************************************************************
* 				CONVERTING BETWEEN STRINGS AND ARRAYS
*************************************************************** */
//.split allow us to turn string into an array
// split/join returns new array/string

var submarine = "We all live in a yellow submarine.";

// TODO TOGETHER: Split this string up into an array of elements


// What will this console log display?
// submarine.split(' ');  // the space character is where we split everything
var submarineArray = submarine.split(' ');
console.log(submarine);
console.log(submarineArray);
//

// TODO: Now, join the array elements into a string. Each word should be in its own separate line.
// Log your results.

// can join things with a space or anything that evaluates into HTML

var newSubmarine = surbmarineArray.join('\n');
console.log(newSubmarine);
// does not console with a <b> because evaluates to HTML primarily, but does with \n
// could eventually target an element in HTML and change the inner HTML and join them with a break
// in a bonus question in the exercies...
// '\n' instead of <br>
// submarineArray.join('<br>'); was replaced
// console.log(newSubmarine);

// now look at exercise
// GIT merging remember can happen from the terminal or github
