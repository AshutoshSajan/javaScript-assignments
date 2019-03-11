const pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];

// Store the value of index 0,1,3,5 in variables using destructuring
var [zero, one, ,three, ,five] = pizzas;
console.log(zero, one,three,five);

// Swap the value of index 1 & 3.
[one, three] = [three, one]