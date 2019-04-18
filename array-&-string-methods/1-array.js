// Arrays to work on
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];


// Use the above two arrays and practice array methods


// Find largest number in numbers
numbers.sort((a,b) => a - b).pop();


// Find longest string in strings
strings.sort((a,b) => a.length - b.length).pop();

// Find all the even numbers
numbers.filter(number => number % 2 === 0);

// Find all the odd numbers
numbers.filter(number => number % 2 === 1);

// Find all the words that contain 'is' use string method 'contains'
strings.filter(str => str.includes("is"));

// Find all the words that contain 'is' use string method 'indexOf'
strings.filter(str => str.indexOf("is")!= -1);
strings.filter(value => value.indexOf("is") >= 0)

// Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(a => a % 3);


//  Sort Array from smallest to largest
numbers.sort((a,b) => a - b);

// Remove the last word in strings
strings.pop();

// Add a new word in the array
strings.push("hello");

// Remove the first word in the array
strings.shift();

// Place a new word at the start of the array use (upshift)
strings.unshift("new word");


// Make a subset of numbers array [18,9,7,11]
var newArr = numbers.splice(3, 4)

// Make a subset of strings array ['a','collection']
var newSubset = strings.splice(2, 2);

// Replace 12 & 18 with 1221 and 1881
numbers.splice(1,1, 1221), numbers.splice(3,1, 1881);

// Replace words with string in strings array
strings.splice(strings.length-1,1, "string");


// Customers Array
var customers = [
    { firstname : 'Joe', lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];
// Find all customers whose firstname starts with 'J'
customers.filter(name => name.firstname.includes("J"));
// Create new array with firstname and lastname
var a = customers.map(val => val.firstname);
var b = customers.map(val => val.lastname);

// Sort the array created above alphabetically
a.sort();
b.sort();