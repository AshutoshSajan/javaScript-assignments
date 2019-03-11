/* Arrow Function */

const pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];

// pizzas.map(function(pizza) {
//   return `I 😍 ${pizza}`;
// });


// Convert the above function into arrow function (explicit return)
pizzas.map(pizza => {
  return `I 😍 ${pizza}`;
});
// Convert the function into arrow function without curly braces (implicit return)
pizzas.map(pizza => `I 😍 ${pizza}`)
  
// Convert the above function into arrow function  also take the index from map and print the message like this `0. Deep Dish`
pizzas.map((pizza,index) => {
  console.log(pizza,index)
  return `I 😍 ${pizza}`;
});
// Can you name a arrow function?
// no we can-not name a arrow function

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879 },
  { first: "Isaac", last: "Newton", year: 1643 },
  { first: "Galileo", last: "Galilei", year: 1564 },
  { first: "Marie", last: "Curie", year: 1867 },
  { first: "Johannes", last: "Kepler", year: 1571 },
  { first: "Nicolaus", last: "Copernicus", year: 1473 },
  { first: "Max", last: "Planck", year: 1858 }
];
// Refactor to make it work
const inventorsName = inventors.map(inventor => {
  return `${inventor.first} ${inventor.last}`;
});

// Refactor to make it work
const nameAndIndex = inventors.map((inventor, index) => {
  return [`${inventor.first} ${inventor.last}`, index];
});

// Refactor to make ot work
var arr = inventors.filter(inventor => inventor.year > 1867);