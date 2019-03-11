/* const
Answer following Questions:
  1. Why no error is generated after the line 14?
  2. Why after the line 19 TypeError is generated?
Change one line of code so, that error will go away.
Don't change lines 12, 17.
*/

var arr = [1, 2];

arr.push(3);

console.log(arr);
// [1, 2, 3]

arr = [1, 2, 3, 4];
// BEFORE: Uncaught TypeError:
//   Assignment to constant variable.
// AFTER: No error

console.log(arr);
// [1, 2, 3, 4]

// Problem 2
// What's the output and why?
const person = {
  name: "Charlie",
  age: 28
};

// output will be the object person because const variable can not be re-assighned.
// person = "New Value";

console.log(person);

// Problem 3
// What's the output and why?

const user = {
  name: "Jack",
  batch: 4
};

user.name = "Jones";
// user name will be jones because we are assigning the value to the name key of object

console.log(user.name);

// Problem 4
// What's the output and why?
// =============================================
// not understood
// =============================================
// const is block scoped element so we can not acces it outside the curly brackets
// ide is not defined answer

{
  const ide = "Vs Code";
}
console.log(ide);
// =============================================
// =============================================

// Problem 5
// What's the output and why?
// i++ means i = i + 1 and we can not re-assign the const variable
// so Assignment to const variable error will be shown 
for (const i = 0; i < 10; i++) {
  console.log(i);
}

// Problem 6
// What's the output and why?
// output will be undefined because console.log is runnig before the variable declaration 
console.log(pizza);
var pizza = "pizza 🍕🍕";
