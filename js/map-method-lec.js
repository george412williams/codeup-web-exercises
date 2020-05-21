"use strict";

// map allows tomake copy of an array where ea element of an array is achanged with a callback fx.

let favoriteNumbers = [12,22,34,4,19];

//the result of fav number thru map method where take number and returned is number x2
//every element is going to be changed as defined
let dubNums = favoriteNumbers.map((number) => {
    //changes are defined here with this return
    return number * 2;
});
//in browser:
console.log(dubNums);

