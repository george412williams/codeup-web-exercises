"use strict";

//var i = 1;
//var numberToStopAt = 65536;

//while (i <= 65536) {
    //console.log(i + i);
    // if (i < 10) {
    //     console.log(i);
    //     break;
    // }
    // console.log(i);
//}

function doubleNumber() {
    var output = "";
    var i = 2;
    while (i <= 65536) {
        output += i + "\n";
        i *= 2;     //changed to this after demo
    }
    return output;
}
console.log(doubleNumber());

// ice cream cones - DO WHILE:
// An ice cream seller can't go home until she sells all of her cones.
// First write enough code that generates a random number between 50 and 100
// representing the amount of cones to sell before you start your loop.
// Inside of the loop your code should generate another random number
// between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person.
// This is a way get the random numbers for this exercise.

//predicted output:
//5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

var totalCones = Math.floor(Math.random() * 50) + 50;

//pseudo
// do {
//     var soldCones = Math.floor(Math.random() * 5) + 1;
//     1 - 5;
//     console
//     log
//     " i have allcones left to sell;" +
//     if allcones >= soldCones;" +
//         log than you for conessold !;
//     allcones = allacone - conessold
//     else console log i'm sory canno se cones sold i only have allcone left' +
//     if allcone === 0 console log yay
//     while allcones > 0;
// }
// add a yay i sold them all   break;

//maybe try this:

// do {
//     var conesSold = Math.floor(Math.random() * 5) + 1;
//         if conesSold <= ttl cones
//         output += buyCones cones slod
//         attlcones -+ buycones;
//         if ttlcone ====0
//         output += yahy sold all
// } else {
//     output += canno sell you buycones i only have ttle cones "..."
// } while (ttlcone >= 1);

//console.log(output);




//separate by making a function for the randos, like for soldCones
//Math.floor(Math.random() * 50) + 50;
//Math.floor(Math.random() * 5) + 1;
