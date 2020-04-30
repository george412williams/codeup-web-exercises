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

var fruit = ['apples','oranges','grapes','bananas','apples','oranges','grapes'];

// TO DO TOGETHER: Find the first index of 'apples' in the array
// TO DO TOGETHER: Find the last index of 'apples' in the array

// TO DO: If the last element in the fruits array is 'grapes', remove it from the list.
// Console log your new array.


/* ***************************************************************
* 							SLICING
*************************************************************** */

var instructors = ['justin','david','sophie','vivian','casey','trant','daniel'];

// TO DO TOGETHER: Create a variable named ganymedeInstructors that stores an array list of
// 'justin','david', and 'sophie'. Do this with the .slice method.

// TO DO TOGETHER: Create a variable named fortunaInstructors that stores an array list of all
// instructors starting from 'vivian' onward.


/* ***************************************************************
* 							REVERSING
*************************************************************** */

// TO DO TOGETHER: Take the instructors array and reverse it.
// What will the following console log display?
console.log(instructors);

/* ***************************************************************
* 							SORTING
*************************************************************** */

// TO DO TOGETHER: Sort the instructors array.
// Take a look at the results of the console log.
console.log(instructors);

/* ***************************************************************
* 				CONVERTING BETWEEN STRINGS AND ARRAYS
*************************************************************** */

var submarine = "We all live in a yellow submarine.";

// TO DO TOGETHER: Split this string up into an array of elements
// What will this console log display?
console.log(submarine);

// TO DO: Now, join the array elements into a string. Each word should be in its own separate line.
// Log your results.