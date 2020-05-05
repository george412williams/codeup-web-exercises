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

    var cards = document.getElementsByClassName('card');
    console.log(cards); // see 4 elements with class of card an: HTMLCollection
    console.log(cards[0]);
    cards.pop(); // gives error bc no arr
    var cardArr = Array.from(cards); // convert HTMLCollection and NodeList to Array
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

    // var headerTitle = document.querySelector('header h1');
    // var headerTitle = document.querySelector('#main-title');
    // console.log(headerTitle);
    //
    // var li = document.querySelector('li'); // only returns first matching
    // console.log(li);
    //
    // var secondLi = document.querySelector('li:nth-child(2)');
    // console.log(secondLi);


// querySelectorAll()

    // var lis = document.querySelectorAll("li");
    // console.log(lis);




// ========== Direct access to form inputs

    // var forms = document.forms;
    // console.log(forms['feedback-form'].feedback.value);


// ========== Accessing and modifying elements and properties

// get value of innerHTML
    //     var title = document.getElementById("main-title");
    //     console.log(title);
    //
    //     console.log(title.innerHTML);
    //     console.log(title.innerText);

// set value of innerHTML
    //     title.innerHTML = "<em>Hi MOM!</em>";

// set value of innerText
    //     title.innerText = "<em>Hi MOM!</em>";

// append value to innerText (works the same with innerHTML)
    //     title.innerHTML += " ...and hi Mom!";


// ========== Accessing and modifying attributes

// check if attribute exists
    //     var cowboy = document.getElementById('cowboy');
    //     console.log(cowboy.hasAttribute('data-1'));

// get an attribute value
    //     console.log(cowboy.getAttribute('data-1'));

// create a new attribute or change a value of an existing attribute
    //     cowboy.setAttribute('data-1', 'hello');
    //     cowboy.setAttribute('data-test', 'testing');
    //     console.log(cowboy.getAttribute('data-1'));

// remove attribute
    //     cowboy.removeAttribute("data-test");
    //     console.log(cowboy);


// ========== Accessing and modifying styles

// single style
    //     var jumbotron = document.querySelector('.jumbotron');
    //     jumbotron.style.display = "none";
    //     jumbotron.style['font-family'] = "times";


// ========== Add / Remove Elements

// see curriculum links



})();