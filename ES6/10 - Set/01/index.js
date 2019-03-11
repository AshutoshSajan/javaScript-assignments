// Set
let animals = new Set(["🐷", "🐢", "🐷", "🐷"]);
console.log(animals)
// guess the output of animals

const text =
  "The Set object lets you store unique values of any type, whether primitive values or object references.";
var a = new Set(text);
var newStr;
// a.forEach(v => newStr += v);
console.log(a);
// remove all the duplicate letters from the text variable and give the length of string.

// Use for ... of to iterate ove the above result and console.log the characters
for(var char of a){
	console.log(char);
}

//Implement below methods using set and methods of set like add, delete, has etc.
var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([3, 4, 5, 6]);
// Implement isSuperSet function to check if `setA` is super set of `setA`
function isSuperSet(set, subset){
	for(var elm of subset){
		if(!set.has(elm)){
			return false;
		}
	}
	return true;
}
isSuperSet(setA, setB); // => true
console.log(isSuperSet(setA, setB));

// Implement union function to create the union of two sets
function union(setA, setB){
	var newSet = new Set(setA);
	for(var elm of setB){
		newSet.add(elm);
	}
	return newSet;
}
union(setA, setC); // => Set [1, 2, 3, 4, 5, 6]
console.log(union(setA, setC));

// Implement intersection function that gives you the intersection of two set
function intersection(setA, setB){
	var newSet = new Set();
	for(var elm of setB){
		if(setA.has(elm)){
			newSet.add(elm)
		}
	}
	return newSet;
}
intersection(setA, setC); // => Set [3, 4]
console.log(intersection(setA, setC));

// Implement difference function that gives you the difference of two set
function difference(setA, setB){
	var newSet = new Set(setA);
	for(var elm of setB){
			newSet.delete(elm);
	}
	return newSet;
}
difference(setA, setC); // => Set [1, 2]
console.log(difference(setA, setC));