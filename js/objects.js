(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

var person = {
    firstName: "George",
    lastName: "Williams",
    sayHello() {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    }
        };
    person.sayHello = function () {
        return "Hello from " + this.firstName + " " + this.lastName;
    };

    console.log(person.sayHello());
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180,
            discountPrice(){
                if (this.amount > 200) {
                    return "Your amount is $" + (this.amount - (this.amount * .12)) + " saving you $" + (this.amount * .12) + ".";
                } else {
                    return "Your amount is $" + this.amount + ". You do not qualify for the discount."
                }
            }
        },
        {name: 'Ryan', amount: 250,
            discountPrice(){
                if (this.amount > 200) {
                    return "Your amount is $" + (this.amount - (this.amount * .12)) + " saving you $" + (this.amount * .12) + ".";
                } else {
                    return "Your amount is $" + this.amount + ". You do not qualify for the discount."
                }
            }
        },
        {name: 'George', amount: 320,
            discountPrice(){
                if (this.amount > 200) {
                    return "Your amount is $" + (this.amount - (this.amount * .12)) + " saving you $" + (this.amount * .12) + ".";
                } else {
                    return "Your amount is $" + this.amount + ". You do not qualify for the discount."
                }
            }
        }
    ];


    shoppers.forEach(function (shopper) {
        console.log(shopper.discountPrice());
    });

    //instructor:

    /*
    * function discountChecker(shoppers) {
    *   shoppers.forEach(funciton(shopper) {
    *       if (shopper.amount >= 200) {
    *           console.log(shopper.name + " has spent $" + shopper.amount.toFixed(2) + " today. They qualify for a 12% discount, and therefor have a final total of $" + (shopper.amount - (shopper.amount * .12)).toFixed(2) + ".");
    * } else {
    *   console.log(shopper.name + ", thank you for shopping with us today. Your final total today is: $" + shopper.total + ". If you added " + (200 - shopper.amount).toFixed(2) + ", you could save 12% on your purchase today.:);
    * }
    * }
    * }
    *
    *
    * */

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
var books = [
        {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: {
            firstName: "Douglas",
            lastName: "Adams",
        }
        },
        {
        title: "Eon",
        author: {
            firstName: "Greg",
            lastName: "Bear",
        }
        },
        {
        title: "I, Robot",
        author: {
            firstName: "Isaac",
            lastName: "Asimov",
        }
        },
        {
        title: "Choke",
        author: {
            firstName: "Chuck",
            lastName: "Palinuik",
        }
        },
        {
        title: "Animal Farm",
        author: {
            firstName: "George",
            lastName: "Orwell",
        }
        }
    ];


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    for(var i = 0; i < books.length; i++) {
        console.log("Book # " + (i + 1));
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
        console.log("---");
    }

//instructor:

// function loggingBooks(books) {
//     for (var x = 0; x < books.length; x++); {
//         console.log("Book #" + (x + 1) + "\n" + "Book title" + books[x].title) + "\n" + "Book author: " + books.[x].author.firstName + books.[x].author.lastName);
//
//     }
// }

// books.forEach(function(book, index)) {
//         //...(index + 1)...
//     }
  // being able to access index makes forEach easier, define second parameter to bring in index
    // x = 0 , then can say x++ ... as another way


// calls for 2, but gonna take in 3
function createBook(title, fName, lName) {
    return {
        title: title,
        author: {
        firstName: fName,
        lastName: lName
        }
    };
}

// refactoring involves var = newBook = {}...   arr[arr.length] = newBook; return arr;
    // can use push
    //arr.push(newBook); return arr;

    //createBook("How Learning Works","Susan","Ambrose", books);
    //loggingBooks(books);
    //now displays list of 6 books

})();

