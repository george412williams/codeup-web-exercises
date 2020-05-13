"use strict";

// MOUSE EVENTS
// seen html style in jquery

//David's file: clicked on 'more importanter lgr circle' to change main image
    // with van js:

//document.getElementById('importanter-circle').addEventListener()...

// W jQuery:

//select specific element/node, enact click event (req's an anom fx as the listener functionality)
    // $ to this thing to style it in that fassion.

$('#important-circle').click(function() {
    $(this).css( {
       'background-image': 'url(img/io.png)',
       'background-size': 'cover'
    });
});

//can also pass an img with a JSON  ..for later

// an event for an h1:

    //note: all these events share the same name as vanilla js
    // the fxality broken down:

$('h1').dblclick(function () {
    // calling this to set html to text, changing css of text color, etc, and a transition to 0s, will explain shortly, also;
        // .off("dblclick"); //turns off our event, specifies the type of event to turn off after it happens the one time

            // not like a return statement
            // miguel's slack post on on/off:
                // https://api.jquery.com/on/
                // https://api.jquery.com/off/
                // https://www.w3schools.com/jquery/event_on.asp

        // can select multiple things in listener:
    // this one targets body css color;
    // targets ".grandpa" css;
    // he targets a mix of ids and classes as example for the css of this dblclick event
});

// he duped the header, one on top of the other, the event occurred as intended for each header, not interferring by like:
    // turning off dblclick so that the other wouldn't work

// HOVER

$('.grandma').hover(function () {
    $(this).css('background-image', 'url(img/jupiter-coin.webp)');
}, function () {
    $(this).css('background-image','url(img/jupiter.webp)');
});

// {1st event is on enter hover on element, 2nd upon leave}
    // upon leave, just want an enter event and not leave?

$('h1').mouseenter(function () {
    $(this).css({
        "color" : "dodgerblue",
        "transition" : "2s"
    })
        .html("jQuery Events are Fun!")
        .off("mouseleave"); // will talk about this later, or just look it up
});

// mouse enters at the h1, changes, stays on leave

// another jQuery pointing to #submit does a .click

    // has btn in a form, default is to submit that form, but doesn't want that; event.preventDefault
$('submit').click(function (event) {
    // without preventDefault, using event parameter
    event.preventDefault();
    var val = $('input').val().toLowerCase();  // to normalize
    console.log(val);
    if (val === 'pikachu') {
        $('#picture-example').html('<img class="push" src=')
    }
});

// <form action=""> in html was empty bc he didn't want the form sending out any information anywhere like those
    // practice submittal sites
    // but preventDefault prevents a form from doing this also, would have to be individually turned on
        // David is looking into it, but you can initially just .off and sustain the default behavior
            // mainly for my understanding of how these things can act as switches

// recommends doing coffee project with vanilla js as we go back to things
    // depending on where you work, may require to work with only vanilla
// q: why faster for jquery? better to make use of the library
    // dav's msg from instr: memory is cheap, not like it used to be,
        // so more performace with vanilla JS and not overloading with extra stuff, one way to do:
            // when you have an event, good to turn it off after it fires, so it's not on standby throughout
// q: he was working in master, (nothing tracked by git yet), he'll take files and manip em and then checkout to branch and save it, but can get in trouble if you just send it to the master
    // SHOULD: create branch up front to know from getgo that master is clean

// EX:

    // use previous file, comment out previous stuff, make changes, do the hover task



