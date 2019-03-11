/* let*/

"use strict";

var i = 10;

for (var i = 0; i < 5; i++) {
  console.log(i, "Inside");
  // i will be 0 to 4 it will iterate 5 times
}
// outside forloop i will be 5 because first value of i is reassigned in for loop and then it will give the final value according to the for loop condition
console.log(i, "Outside");

// Expected Output
// 0 "Inside"
// 1 "Inside"
// 2 "Inside"
// 3 "Inside"
// 4 "Inside"
//10 "Outside"

// Problem 2
// Write the output and reason behind it
// let is a block scoped element so it can not be accesed outside of its scope thats why i is not defined error will be showed

// for (let i = 0; i < 10; i++) {
//   // Doing nothing
// }
// console.log(i);

// Problem 3
// Write the output and reason behind it
// variable username is defind Inside the forloop brackets so it can not be accesed because of the blocked scope declaration

// for (let i = 0; i < 10; i++) {
//   let username = "Superuser!";
// }
// console.log(username);

// Problem 4
// Write the output and reason behind it
// we can reassign the value of let variable but b can not declare new variable of the same name so it will not throw the error when we are canging its value so the output will be new asigned value 
let name = "Jack";
name = "Jones";
console.log(name);

// Problem 5
// Write the output and reason behind it
// we can not declare the let and const variable with the same name so when we are declaring new variable with the same name sytem will throw an error that the variable of this name is already been declared and the output of the console log will be always the first declared variable value  
let firstName = "Jack";
// let firstName = "Jones";
console.log(firstName);

// Problem 6
// Write the output and reason behind it
// output will be false because console.log will access the value of global variable pass because it can not access the variable inside the if statement  
let marks = 76;
let pass = false;

if (marks > 70) {
  let pass = true;
}

console.log(`Passed: ${pass}`);

// Problem 7
// this will print the false because function is not returnig any this and and the new variable is inside its functional scope
(function() {
  let pass = true;
})();
console.log(pass);

// Problem 8
// users is inside the block scope so users is not defined will be the output. 
{
  let users = 45;
}
// console.log(users);

// Problem 9
// What's the output and why?
// output will be undefined because console log is exicuted before the variable declaration
console.log(pizza);
var pizza = "pizza 🍕🍕";
