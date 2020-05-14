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
    // me: adding class of emergency procedure to divs that change during an event
    // click on button with this id

    $('#highlight-houses').click(function(){
        // target  // you give a string bc addClass takes a string and turns into a class, don't want to make a class out of a class
        $('.house-name').addClass('house');
    });


    // TODO: Comment out the code above. Add the class of 'house' to all the 'house-names'
    //  Write the event listener to remove the class instead

    // TODO TOGETHER: Refactor your addClass and removeClass methods to toggle the 'house' class instead

    /**********************************************
     * 			       Traversing
     *********************************************/

    // TODO TOGETHER: console log each list element's text

    // TODO TOGETHER: select all list elements and console log the first match

    // TODO TOGETHER: select all list elements and console log the last match

    // TODO TOGETHER: When I click on a list element, highlight its parent

    // TODO TOGETHER: When I click into a <ul>, console log last child in that group

    // TODO TOGETHER: When I click on any list element, console log the next element



});
