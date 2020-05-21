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

//MAP FILTER REDUCE

    //these are immutable fxs, not going to effect the value of the array
    //values only ever going to spout out another copy

    //This map fx is an approximatate rep of what the Array.prototype.map()
        //method does.

function map(array, callback) {
    let output = [];
    for (let i = 0; i < array.length; i += 1) {
        //output is then return
        output.push(callback(array[i]));
    }
};
//console shows two identical arrays
    //so both the same, map is built in, the fx shows how it works

//Using map method, array of cheeses

let cheeses = [];

cheeses = cheeses.map((cheese) => cheese.toUpperCase());
//all caps for everything in it

let cheesesHTML = cheeses.map((cheese) => `<li>${cheese}</li>`);
//makes list

let evensAsTrue = favoriteNumbers.map((num) => {
    if (num % 2 === 0) {
        return true;
    }else{
        return num;
    }
});
//returns the array with true for all the evens

//FILTER

let oddFavorites = favoriteNumbers.filter((num) => num % 2 !==0);

//as fx

function filter(array, callback) {
    let output = [];
    for (let i = 0; i < array.length; i += 1) {
        output.push(array[i]);
    }
return output;
// should see two identical arrays of odd nums only
};

//filter and reestablish cheese array,

cheeses = cheeses.filter((cheese) => cheese.length <= 12);

cheesesHTML = cheeses.filter((cheese) => cheese.length <= 12).map((cheese) =>
    `<li>${cheese}</li>`);

//shoves kraftamericancheese off the list bc it's string is too long, we have a copy of an array with a
// list and now can method chain

//REDUCE

    //take a collection and turn it into a single value

let favoriteSum = favoriteNumbers.reduce((sum, num) => sum + num, 0);
                            //callback has 2 params, reduce method also has 2 arguements
                                //sum or the accumulation and the number, with every call sum changes, cumulative here
                            //1 fx def
                            //2 return is sum plus num
                    //returns value of 96

//as fx

function reduce(array, callback, startingValue) {
    let output = startingValue;
    for (let i = 0; i < array.length; i += 1){
        output = callback(output, array[i]);
}
return output;
}
//logs 96 as well

//UP THE COMPLEXITY

    //let salespeople = array of people objects name and units

        let salesReport = salespeople.reduce((finalString, person) => `${finalString}${person.name} has sold
         ${person.units} units this qtr1!`,"");
            //all with concat to the empty string, which is the starting value as the second argument
            //the first argument is a fx of the concated string, the second is the empty starting value
        //logs as concated text in the console

//what does this do?

cheesesHTML = cheeses.filter((cheese) => cheese.length <= 12)
    .map((cheese) => `<li>${cheese}</li>`)
    .reduce((finalHTML, li) => finalHTML + li, "<ul>") + "</ul>";
            //                                          finalhtml concated with li

        //this logs as: a ul with 3 li's and a closing ul tag
            //filter returns array, map give new array with li's and is array, then reduce to take that array
                //and turn into a string in properly formated html

    document.getElementById("cheeses").innerHTML = cheesesHTML; //come to explain this, sets to proper html

//another ex, an attempt at a more complicated example

let arrOfSales = salesPeople.reduce((arr, person) => arr.push(person.units), [55, 67, 88]);
            //this is trying to show how reduce is similar to map         random starting values
//to check logs as type error at first, doesn't like having an array as a starting value for some reason

let bestSalesPerson = salesPeople.reduce((bestSalesPerson, person) => (bestSalesPerson.units > person.units) ? bestSalesPerson : person, {units: 0});
//comparing values and returning the one that 'did the best'
//so what happens to bestsalesperson as it goes through here
//add'l: trying to see if bestsalesperson's units property is greater
//w first iteration, jim, we compare the number 0, the starting place, to jim's 7,
//now reassigned bestsalesperson to that 'person' jim
//next iteration sees james' 8, it gets returned as 'person' and is the new assignment
//next 8 to value of 92, reassigned to value of 'person', and returns Garfield with 92 units















