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

$('h1').dblclick(function () {
    // calling this to set html to text, changing css of text color, etc, and a transition to 0s, will explain shortly, also;
        // .off("dblclick"); //turns off our event, specifies the type of event to turn off
        // can select multiple things in listener:
    // this one targets body css color;
    // targets ".grandpa" css;
    // he targets a mix of ids and classes as example for the css of this dblclick event
});



//note all these events share the same name as vanilla js
// the fxality broken down:

    //
    //

