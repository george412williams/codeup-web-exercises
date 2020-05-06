// (function () {
"use strict";




// ========== Retrieve elements by id, class, tag name

// id
    // var header = document.getElementById('main-title');
    // console.log(header);

    // var header = document.getElementById('small-heading');
    // console.log(smallHeading);

       // want to change how somehting looks after an interaction like a button push or changing text of a heading, first neect to target it in DOM
       // header.//intellij shows the huge list of things you can now do
       // header.innerHTML.log will log what's specifically in that node in the console, stuff inside an h1 for instance, not in the tags, its content
       // header.innerHTML = "Hello Ganymede"; // this changes the text to new text

    // other ways to id and target things:

    // get mult nodes back
        // getElementsByClassName   can have same class in mult places, will return the collection of them
        // bootstrap class of 'card'

    // var cards = document.getElementsByClassName('card');
    // console.log(cards); // see 4 elements with class of card an: HTMLCollection
    // console.log(cards[0]);
    // cards.pop(); // gives error bc no arr
    // var cardArr = Array.from(cards); // convert HTMLCollection and NodeList to Array
    // carsArr.pop();   // comment out prev consoles to see

        // get collection of those nodes, displays alot like an array but is not, so arr methods won't work,
        // IS indexed like arr's tho, so can do same references
        // quick way to make it work like
        // cannot change styling/text and such by calling up classes, will not change things accross the board like that

    // getElementsByTagName('h1');
    // to look at a specific node:
    // console.log = h1[0];

    //cards [0];
    //cards [1];  etc. can target all individually or:
    // ex:
    // for (var i = 0; i < cards.length; i += 1) {
        // cards[i].innerHTML = "howdy";    // this then targets all nodes within that class

    // have to pull the whole thing out of the box in order to even play with just one thing in it
    // this is what we'll use to target things to change them



// class - will return an HTMLCollection
    // var cards = document.getElementsByClassName('card');
    // console.log(cards);
    // console.log(cards[0]);
    // cards.pop(); // ERROR: Array specific method
    // var cardsArr = Array.from(cards); // convert HTMLCollection and NodeList to Array   // turns it into an array
    // cardsArr.pop();

// tag
    //     var sections = document.getElementsByTagName('section');
    //     console.log(sections);

    //===SUM UP===

        //.getElementById()  gets a single node/element
        //.getElementsByClassName() collection of nodes
        //.getElementsByTagName() collection of nodes

    // can target all buttons with tag name
    // .getElementsByTagName

// ========== Query Selector and Query Selector All

    //jQuery older bigger libray with simpler syntax, has own syntax that is shorter/simpler
    //since its creation, mid 2000s, js lang has improved and solved some of jQuery's probs
    //liek the query selector and query selctor all, similar to CSS
    //in JS also can do it


// querySelector()

    // var headerTitle = document.querySelector('header h1');  //anything you can put in CSS can go into this query method (again, older approach)
    // var headerTitle = document.querySelector('#main-title');  //give same thing
    // console.log(headerTitle);
    //

                // INSTR finds himself using this more than any other method (likes CSS)

    // var li = document.querySelector('li'); // only returns first matching
    // console.log(li);
    //
    // var secondLi = document.querySelector('li:nth-child(2)');
    // console.log(secondLi);


// querySelectorAll()

    // var lis = document.querySelectorAll("li");
    // similar also if used:
    // var liCollection = document.getElementsByTagName('li');
    // console.log(lis);
        //there are diffs, but not significant right now

    //massive projects with alot of DOM manipulation, older versions have slightly better performance


// ========== Direct access to form inputs

    // var forms = document.forms;
    // console.log(forms['feedback-form'].feedback.value);

    // within form can dig down to indiv inputs down to the name of that input
    // in console:
        //document.forms[0].username
    // if there's specific info to get
    // access through the value in the input:
        //.username.value...
    // target by ID also


// ========== Accessing and modifying elements and properties

// get value of innerHTML
    //     var title = document.getElementById("main-title");
    //     console.log(title);
    // from this node can see what current html is, node itself followed by actual inner.html, inner text looking at actual text ignoring the elements
    // can change these as well, but can get current value by looking at inner.html

    // var body = document.getElementsByTagName('body');  // although one body tag, this is a Collection, need to know what index to look at:
    // console.log(body[0].innerHTML);  // .innerText is different in that you see the text in full
    //     console.log(title.innerHTML);
    //     console.log(title.innerText);

// set value of innerHTML
    //     title.innerHTML = "<em>Hi MOM!</em>";     // is now changed to this, em- is italics remember?


// set value of innerText
    //     title.innerText = "<em>Hi MOM!</em>";   // same value but with inner text, you will see the tags here; sees it as valid text, not html to run

// append value to innerText (works the same with innerHTML)
    //     title.innerHTML += " ...and hi Mom!";


// ========== Accessing and modifying attributes

    // another reason why DOM is powerful
    // can add/take classes/attributes
    // anyting in HTML can be changed by JS


// check if attribute exists
    //     var cowboy = document.getElementById('cowboy');  // in html is a paragraph, node here is stored in this var
    //     console.log(cowboy.hasAttribute('data-1')); // data attribs are custome attribs you can add, can make any data- attrib, like data-height or data-genre

// get an attribute value
    //     console.log(cowboy.getAttribute('data-1')); // when you want a attrib's value to play with

// create a new attribute or change a value of an existing attribute
    //     cowboy.setAttribute('data-1', 'hello');
    //     cowboy.setAttribute('data-test', 'testing');
    //     console.log(cowboy.getAttribute('data-1'));

// remove attribute
    //     cowboy.removeAttribute("data-test");
    //     console.log(cowboy);

// helpful to locate attribs that need to be changed/ID'd

// ========== Accessing and modifying styles

// single style
    //     var jumbotron = document.querySelector('.jumbotron');  //in html is a div wrapping an h1
    //     jumbotron.style.display = "none";    //specific target, here it disappears
    //     jumbotron.style['font-family'] = "times";
        // can either camalcase
        //.fontFamily or ['font-family'] = "a-font-like-times";


// ========== Add / Remove Elements

// see curriculum links
// to create own nodes to attach to the DOM
    // but we have learned plenty of power right now
    // game stuff will be learned in the next lesson, listening for events for change


//===practice task
    // make whole background color of the page

    //document.body.style.backgroundColor = 'red';
    // the 'some list' to backgroundColor blue
        // there are multiple h2's, can use nthChild or...selectorAll

    // var h2 = document.querySelectorAll('h2')[2];
    // //now how to change text
    // h2.innerText = "apple";
    //
    // h2.style.backgroundColor = "blue";
    // h2.style.color = "white";

    // if  you have this much control over html, u can make calc or game
    //h2.setAttribute("class", "blue-white"); // another targeted change
    // pixel value changes for example will need to be strings bc html raw will not be read as JS, what's in the quotes here needs to be of the language it's going to

    // is pos to style whole page with JS
    // not good idea bc is not a good separation of concerns, not a replacement, just dynamic changes
    // still HTML in html doc, CSS in its sheet, and the thing that makes it change in JS
    // console logging is a good check to see if you getting back what you need

//==== DOM EVENTS ====
    //Audience: "David, it sure seems like

    //DOM Events allow us
    // Today, we'll be covering how

    // When using the addEventListener method, note the three parameters:
    // document.getElementById("someID").addEventListener("type", function(){}, useCapture);
        // the last one is not used much

    //"type" - we're going to be talking about multiple different mouse events
        // some keyboard events too

    //handler - callback fx or fx definition called by the method

    //boolean - for useCapture, optional, not using it here, adds events to DOM tree if set to true

    // on page, did a double click method, changed header text and title of the doc, and changed img jupiter to mars

    //viewing his code applied to a previous arrays exercise

    //inside his listener, used this.innerText, referring to the element id in
    // document.querySelector("#header").addEventListener("dblclick", function (){
    //      document.title = "DOM Events in JavaScript";...


    //inspecting mars pic, you see that an added attribute style="background-image: url..img/mars.jpg
        //note that style has an image


    // === keyup version ===   a keyboard even

    //document.addEventListener("keyup", function (event)  {})
        //event.preventDefault;
        //console.log(event);
        ...

    // uses spacebar to switch btwn listener fx changes
    //console shows characteristics of the keyboard even
    //clarification: exercise is going to have mouse events, not keyboard, but wanted to show how keyboard can be specific
    //q: combo of keys? (i'm thinking ctrl and alt)(will learn in jQuery)

//=== changetron ===

    //type: "change",   and = this.value to refer to the resulting field input
    //changed text on the page by using the field to input it. the input changed the page, in a text ID'd element

    // document.querySelector("#change-a-tron").addEventListener("change", )
    //     document

    //how to remove an eventlistener

    // var pikaEvent = function () {
    //         this.style.backgroundImage = 'url(img/screaming-detective-pik.gif")';
    //         this.style.backgroundColor = 'palevioetred';
    //         this.addEventListener("mouseout", function () )
    // }

    //the even he wants to review, but the specific functionality as well

    //intricacies, not removing an event can be tricky
    //to stop all events:

        // if yu have an event to fire off one time, define that listener like any other function,
        // if you want to remove, define that listener then pass it

    //space changed the page
    //click on little text fo pikachu even
    //hover change pika, and remained showing removal was successful
        // can bring back by using change-tron text to value of input, have to fire off changetron to do that

    //essentially, took entire listener event, defined it to its own named fx, can do it also with fx definition:
        //function littleEvent () {}     takes in no parameter
            //document.getElementByID("little-text").inerHTMO = "...";

    //then adding fx itself to the ID, when triggered removes even to prevent use, bc littleEvent has removeEventListener in it
    //when you have a named fx and want to pass into another higher level funciton, need to pass the fx definition without the (), () will give value, not the machinery
    //he then added the changetron event listener with click event littleEvent, which the only way then it can be activated, see previous

    //we're adding on the ability to do the calculator, simon, interactions

    //David's project:

    //the recipe ball - click on the meatball for a dinner recipe, added animation with CSS
    //we know how to activate DOM events, interactivity

    //List of events:
    //developer.mozilla.org/en-US/Web/Events

    //git

    //add
    //commit
    //push origin branch
    //open pull request in git
    //

    //EXERCISE

    //continue in last file, add 4 buttons to page with different fxality to each
    //taking all previous changes and putting behind a click event on buttons

// })();

// tomorrow, exercise walkthough after warm up, then to mapbox api