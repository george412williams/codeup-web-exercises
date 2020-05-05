(function () {
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


// ========== Accessing and modifying elements and properties

// get value of innerHTML
    //     var title = document.getElementById("main-title");
    //     console.log(title);
    // from this node can see what current html is, node itself followed by actual inner.html, inner text looking at actual text ignoring the elements
    // can change these as well, but can get current value by looking at inner.html

    var body = document.getElementsByTagName('body');  // although one body tag, this is a Collection, need to know what index to look at:
    console.log(body[0].innerHTML);  // .innerText is different in that you see the text in full
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

    document.body.style.backgroundColor = 'red';
    // the 'some list' to backgroundColor blue
        // there are multiple h2's, can use nthChild or...selectorAll

    var h2 = document.querySelectorAll('h2')[2];
    //now how to change text
    h2.innerText = "apple";

    h2.style.backgroundColor = "blue";
    h2.style.color = "white";

    // if  you have this much control over html, u can make calc or game




})();