"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

// prompt("What is your favorite color?");

var userInput = prompt("What is your favorite color?");

alert("Neato, " + userInput + " is my favorite color too!");

var dailyRentalRateDollars;

var littleMermaidDaysRented = parseInt(prompt("How long are you renting?"));
var brotherBearDaysRented = parseInt(prompt("How long are you renting?"));;
var herculesDaysRented = parseInt(prompt("How long are you renting?"));;
var dailyRentalRateDollars = 3;
var totalRentalCost;

alert(totalRentalCost = parseInt((littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars));

//

var googleHourlyRateDollars;
var amazonHourlyRateDollars;
var facebookHourlyRateDollars;
var googleHours;
var amazonHours;
var facebookHours;
var totalPayment;
totalPayment = googleHours * googleHourlyRateDollars;
totalPayment += amazonHours * amazonHourlyRateDollars;
totalPayment += facebookHours * facebookHourlyRateDollars;

//

var classIsNotFull; // boolean
var classScheduleDoesNotConflict; // boolean
var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;

//

var numberOfItems; // number
var offerIsValid; // boolean
var isPremiumMember; // boolean
var productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);

