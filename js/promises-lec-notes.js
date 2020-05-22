"use strict";
$(document).ready(function() {

//PROMISES

    //Similar to ajax and get, gives more syntactic sugar

    //review on asynchronous, loading not in order, dependant on the source and travel time etc...

    //analogy: cooking

    //start                                                 end

    //boiling water      chop potatoes     chop onions      cook

    // asynch:

    //start                             end

    //boil         ->            cook

    //          up and rt           up

    //chop          ->          chop onions

        //so you can cook faster this way, like i do in the kitchen

    //STATES

        //3 states: Pending / RESOLVED / REJECTED

        //fetch(... when we fetch like a get request to an api; upon running the fetch,
            //the promise is pending
            // .then is when it successful
            // .catch
            // see in the geocode utils file for the map api to see promises in action

            //to illustrate searched for apis not needing an authentication or an acct
                //so went with pokemon and SW

            //.then takes in a callback fx
            pokemonPromise.then(response => response);
        //why bad to console.log here? bc after the console.log you cannot change properties
            //so return response into a json data format
            //so if request is successful it gives the data of the response
            //the data we get back has not been parsed as JSON
            //in the properties in the JSON property (in curric it refers) for data able to manip

    //DIFF btwn .get and .fetch

        // chaining - bc the return is a promise, can chain .thens to get to piece of info wo multiple requests

            //resolving with a .then, can take another .then



















// JS IFEE END
});
