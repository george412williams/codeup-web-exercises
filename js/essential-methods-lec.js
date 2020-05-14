"use strict";

$(document).ready(function() {

    //name input goes through random sorting here
    $('#sort-wizard').click(function(e){
        let house = Math.floor(Math.random() * 4);
        let newWizard = $('#new-wizard');
        let newMember = $('<li></li>').text(newWizard.val());
        switch(house){
            case 0:
                $('#gryffindor').append(newMember);
                break;
            case 1:
                $('#slytherin').append(newMember);
                break;
            case 2:
                $('#ravenclaw').append(newMember);
                break;
            default:
                $('#hufflepuff').append(newMember);
                break;
        }
        newWizard.val('');
    });

    /**********************************************
     * 			Attributes and CSS
     *********************************************/

    // TODO TOGETHER:  Using an event listener and css method, increase the font-size of 'Sorting Hat' when clicked.
    //    How can font size be changed using .html()?

    $('#main-heading').click(function () {
       //if we are refering to the thing we are referring to we use this, remember?:
        $(this).css('font-size','4em');
        //$(this).html('h4 my sorting hat h4')  changes also now the text
        //$(this).text('p my sorting hat p');  // next 3 lines are how u use html to change font size
        //$('ul').click(function(){
        //  $(this).html('<li>Test</li>')

            //NOTE: .prepend() is opposite of .append() method

    });


    // TODO TOGETHER: store the inner text of #main-heading in a variable

    var mainHeading = $('#main-heading').text();  //just text callnot html
    alert(mainHeading);
        // get Sorting Hat as result, .html gets same, but are diff types

    // TODO: Using a css method, change the banner background-color to black
    //  Hint: make sure you use the right selector
    //class of banner applied to that section

    $('.banner').css('background-color','black'); //#000

    // TODO TOGETHER: When the 'Houses' button is clicked, add the class 'house' to anything with a class of 'house-name'
    // adding/removing classes using jquery, bc of using prebuilt styles in css, jquery can be dynamically added/rem'd
    // me: adding class of emergency procedure to divs that change during an event and using toggleClass to change slews of diff damage states
    // click on button with this id

    $('#highlight-houses').click(function(){
        // target  // you give a string bc addClass takes a string and turns into a class, don't want to make a class out of a class
        //$('.house-name').addClass('house');
        //$('.house-name').removeClass('house');  // to remove
        $('.house-name').toggleClass('house');  // i would toggle in the class .houses-highlighted calling it the result of the function
    });
    // console: shows add realtime with a space separator
    // want to find out what happens when you add classes with conflicting values...
    // if want to add id this way, but not necessary, add html with the id tags included...

    // just realized that the syntax and referencing of ea framework is like kids with their specific behs

    // to lock in a certain group of people, or can toggle to say unlock to lock, but wants the house title to turn red and

    //css:
    //.gryffindor{ background-color....red

    //js:
    //$('#lock-g').click(function() { $('#gryffindor-house').toggleClass('gryffindor');
        //interacts with the other toggle as well and added unlock part next
        // uses

        //if($('#gryffndor-house').hasClass('gryffindor')){
            //$(this).text('unlock');
                //this refers to the element that triggers the event listener, the parent reference up top
        //}else{
            //$(this).text('lock-in');
        // }
        //});

            // on click when turns red, button turns to unlock, and back on click: where?...

    // TODO: Comment out the code above. Add the class of 'house' to all the 'house-names'
    //  Write the event listener to remove the class instead

    // TODO TOGETHER: Refactor your addClass and removeClass methods to toggle the 'house' class instead

    /**********************************************
     * 			       Traversing
     *********************************************/

    // TODO TOGETHER: console log each list element's text

    $('#gryffindor').children();
    //$('#josh).next();  console's nothing because was last in that list
    var numbers =  [1,2,3,4,5];
    numbers.forEach(function (numbers) {
        console.log(number);
    });

    console.log('li');
    //in order to console log on each line of the console:
    $('li').each(function () {
        //similar to click events...
        console.log($(this).html())
    });

    // you can chain these methods
    console.log($('li').first().html());

    // TODO TOGETHER: select all list elements and console log the first match


    console.log($('li').last().html());

    // TODO TOGETHER: select all list elements and console log the last match

    console.log($('li').last().html());

    // TODO TOGETHER: When I click on a list element, highlight its parent

    $('li').click(function () {
        //use a class or css method:
        $(this).parent().css('background-color','yellow');
    });

    // TODO TOGETHER: When I click into a <ul>, console log last child in that group
    //good method chaining ex

    $('ul').click(function () {
        console.log($(this).children().last().html());
    });
    //console log to check

    // TODO TOGETHER: When I click on Ravenclaw(any list) element, console log the next element

    $('#r-heading').click(function () {
        $(this).next().css('background-color','blue');
    });
    //or could use the .addClass
    //$(this).next().toggleClass('ravenclaw');

    //debugging, req'd hard refresh




});
