/* var */

"use strict";
// Problem 1
// Guess the output and reason for the output.
// because function say hello is not returning anything s0 it will return undefined and console.log will show that user is not defined  
function sayHello() {
  var user = "Hello User";
}

sayHello();

// console.log(user);

// Problem 2
// Change the code to make problem 2 work

function sayHelloAgain() {
  var user = "Hello User";
  return user;
}

sayHelloAgain();

// Problem 3
// Guess the output of the following code
// output will be 10 because var is not functional scoped so we can access it outside forloop statement
for (var i = 0; i < 10; i++) {
  // Doing nothing
}
console.log(i);

// Problem 4
// Guess the output
// because the value of the i 10 and condition runs false so this forloop will not run

for (; i < 10; ) {
  var username = "Inside For Loop";
}
console.log(username);

// Problem 5
// Guess the output
// output will be jones
var name = "Jack";
var name = "Jones";
console.log(name);

// Problem 6
// What's the output.
// output is user is not defined
(function() {
  var user = "Sam";
})();

// console.log(user);

// Problem 6
// What's the output and why?

// ========================================================
// confusing
// ========================================================
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(`The Number is ${i}`, 1000));
}
// ========================================================

// Problem 7
// What's the output and why?
// output is undefined
console.log(pizza);
var pizza = "pizza 🍕🍕";
