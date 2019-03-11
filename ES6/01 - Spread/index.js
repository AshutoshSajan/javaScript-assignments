/*
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.
Returns the sum of the arguments
*/

// Write the function here
function sum(...num) {
	return num.reduce((acc, val)=>{
		return acc += val
	},0)
}

// Tests
sum(1, 31);
// 32

sum(10, 200, 5);
// 215

sum(2, 5, 80, 1, 10, 12);
//110

// Select all the `p` tag and convert it into array using spread and add `click` event listener that alert `You clicked me!`
var p = document.querySelectorAll(".user_name");
// console.log(...p, "spread");
function msg(elm){
	// console.log(elm);
	[...elm].forEach(val => {
		// console.log(val);
		val.addEventListener("click", clicked)
	})
}

msg(p)
function clicked(){
	alert(`You clicked me!`);
}

// Find the minimum value in the array below using spread and Math.min()
let numbers = [9, 4, 7, 1, 21, 233, 42];
Math.min(...numbers)

// Find the maximum value in the array below using spread and Math.max()
let sampleArr = [1, 9, 17, -3, 7, 89, 40, 100, 121, 8];
Math.max(...sampleArr)