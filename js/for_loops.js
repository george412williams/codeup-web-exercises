"use strict";

// FOR LOOPS

// 2

var num = 7;

for (var i = 1; i <= 10; i += 1) {
    num += num + " x " + i + " = " + (num * i);
    console.log(num + " x " + i + " = " + (num * i));
}

// function showMultiplicationTable() {
//     for (var i = 1; i <= 10; i += 1) {
//         console.log(num + " x " + i + " = " + (num * i));
//     }
// }

// 3

for (var n = 20; n <= 200; n + Math.floor(Math.random() * 181)) {
    if (n % 2 === 0) {
        console.log(n + "is even");
    } else {
        console.log(n + "is odd");
    }
}

// 4

for (var x = 1; x < 10; x++) {
    console.log(x.toString().repeat(x));
}

// 5

for (var x = 105; x > 4; x - 5) {
    console.log(x);
}

