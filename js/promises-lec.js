"use strict";

/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */

var pokemonPromise = fetch('https://pokeapi.co/api/v2/pokemon');
//return from fetch request is a Promise object   pending

//TODO: console log the results of the above Promise. What is the result?

console.log(pokemonPromise);


//TODO: add a method that runs if the Promise resolves successfully
//.then takes in a callback fx
pokemonPromise.then(() => console.log("api request successful path"))//.catch(() => console.log("api request fail path"));
//also
pokemonPromise.then((response) => response.json());   //just returning response  wo .jason gives raw unmanip data

//pokemonPromise.catch(() => console.log("api request fail path"));
//an error in the fetch shows in as custom error in console debugger as rejections

// why bad to console.log here? bc after the console.log you cannot change properties
    //so return response into a json data format
        //so if request is successful it gives the data of the response
        //the data we get back has not been parsed as JSON
    //in the properties in the JSON property (in curric it refers) for data able to manip

pokemonPromise.then((response) => response.json())//parsed into json data object, able to manip now
    .then(jsonResponse => (jsonResponse.results))       //you will see a results property in this data

    //we're getting the data we want now
        //so you can call the api once and hang out and grab specific pieces
    //important to keep track of what layer you're at when requesting, console.log to be sure
    //so what is the shape of the data right now? like an array of objects, then you know how to iterate through the data, it is
        //what the current layer of data looks like
    .then(pokemonArray => pokemonArray.forEach(pokemon => console.log(pokemon.name))) //shows name property of all the object,
        // pass this statement once when reading through for notes to make better sense
        //the return from this first fx is passed as a parameter in the second one
    //to clean, they are all callback fxs,
    //if have a fx to listNames(arr) {arr.forEach(element => console.log(arr.name));
        //how can i make a reusable piece of code to plug in
    // function listNames(arr) {
    //     arr.forEach(element => console.log(element.name));
    // };
    //.then(listNames)  //use this with the fx listNames and not use the 2nd .then statement

    .catch(error => console.log(error));
//the return from this first fx, is passed as a parameter in the second one

//TODO: add a method that runs if the Promise fails

pokemonPromise.then(() => console.log("api request successful path")).catch(() => console.log("api request fail path"));


//TODO: In the callback function of the .then method, parse the response into JSON

/*********************************************
 *              CHAINING PROMISES
 ******************************************** */

// TODO: Using Promise chaining, add another .then method that returns the results property of
//  the first returned response.
//    Taking a look at this second return, what are the results? What is the shape of our data?

// TODO: Finally, chain another .then method that would log all of the name properties of the
//  returned pokemon.
// BONUS: Is there a way for us to clean up our code?

// Let's try working with the Star Wars API!
    //her process
    //looked for the diff things you can request


var starWarsAPI = fetch("https://swapi.dev/api/planets/3/");
//console.log(starWarsAPI);


// TODO: Using Promises, make a fetch request to the Star Wars API

// parse the response into the json
starWarsAPI.then(response => response.json())
    //access the results property from the json object
    .then(jsonResponse => jsonResponse.results)
    //lookingto get an array of objs, good to go, now to iterate thru them to access what we want
    //wants a fx that gives movies and their name
    .then(resultsArray => resultsArray.forEach(film => {
        console.log(film.title + " " + film.episode_id);
    }))
    //pulling out, or parsing, properties we want, consoles as such
    //in case we get an error we'll always add:
    .catch(error => console.log(error));


// TODO: Use Promise chaining to console log the json response

//starWarsAPI.then(response => console.log(response.json())
//  .then(jsonResponse => console.log(jasonResponse.count));
//.results is an array in this obj
//remember the console is best way to indicate you hit your mark

// TODO: chain another method that iterates through the results array and console logs the names
//  of all characters and their birth_years

/*********************************************
 *              CUSTOM PROMISES
 ******************************************** */

// To further understand Promises, we can create our own custom Promise object
// Let's take a look at the example from the curriculum

    //typically we will be consuming promises instead of having to creat one

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('this is where api data would be as an object');
        } else {
            reject('your api request failed');
        }
    }, 1500);
});

// fetch('fromSomeURL') -> returns promise object
//below is saying if myPromise resolves from the coin flip Math.random 50% chance

// The resolve and reject functions can also be passed a value.
// These can then be used in our .resolve and .reject methods

// TODO: pass in a message argument into the resolve and reject functions


// myPromise.then(() => console.log(response));
// myPromise.catch(() => console.log(error));

//chained:
myPromise.then(() => console.log(response)).catch(() => console.log(error));


    //will get a console error with catch as well

// TODO: use the passed in arguments in the callback functions

// This is a simplified example of what goes on underneath the hood of a more complex fetch
// request. The concepts we covered are similar to what you learned when using AJAX with jQuery.


//GOING OVER .ALL AND .RACE

    //using pokemonPromise and starWarsAPI, now that we have two api's here

    //these return an array of object responses

Promise.all([pokemonPromise, starWarsAPI])
    .then(data => console.log(data()));
        //or
    //.then(data => console.log(data[1].json));
                //for the data at this index
Promise.race([pokemonPromise, starWarsAPI])
    .then(data => console.log(data()));

        //changing order they are requested matters not, up to the api upstream

