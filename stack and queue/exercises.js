/*
STACK
Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.

1. Implement Stack Data Structure using string data type
Operations you need to add are
  isEmpty() - returns true if the storage is empty
  push(value) - add a new value and returns the size of the storage
  pop() - remove one element and returns the deleted element
  peek() - displays the last pushed element in the storage
  size() - the size of the storage
*/

// String Implementation
class Stack {
  constructor() {
    this._storage = "";
  }
  isEmpty() {
  	if(this._storage.trim().length == 0){
  		return true;
  	}else {
  		return false;
  	}
  }
  push(value) {
	if(value == "") return;
  	else return this._storage += value + "_";
  }
  pop() {
  	// return this._storage = this._storage.split("_").join(" ").split(" ").filter(Boolean).pop().concat("_");
  	var index = this._storage.slice(0, this._storage.length-2).lastIndexOf("_")
  	return this._storage = this._storage.slice(0, index)
  }
  peek() {
  	var lastPush = this._storage.split("_").join(" ").split(" ").filter(Boolean);
		return lastPush[lastPush.length-1];
  }
  size() {
  	return this._storage.split("_").join(" ").trim().length;
  }
}


// Object Implementation
class Stack {
  constructor(maxCapacity) {
    this._storage = {};
	  this.capacity = maxCapacity;
  }
isEmpty() {
	if(Object.keys(this._storage).length == 0){
		return true
	}else return false;
}

push(value) {
	if(value.trim() != "" && Object.keys(this._storage).length < this.capacity){
		return this._storage[value] = value;
	}
	else if(value.trim() != "") {
		console.log("Max capacity already reached")	
	}
}

pop() {
	if(Object.keys(this._storage).length != 0){
		  return delete this._storage[Object.keys(this._storage).pop()];
	  } else {
		console.log("add value in object");
	}
}

peek() {
   return Object.keys(this._storage)[Object.keys(this._storage).length - 1]
}

size() {
	return Object.keys(this._storage).length;
}

contains(value){
  if(value && Object.values(this._storage).includes(value)){
			return true;
		} else {return false};
	}

}

// 2. Implement every method given above using the 'object' data type.
// Additionals:
// Modify your stack to take max capacity as a parameter and once you exceed the size it should print message
// "Max capacity already reached"

// Make a method named 'contains' which will return true if any of the value matches the value of object.
// stack.contains('hello') - true or false

// Use This For Testing

// var myStack = new Stack(3);
// console.log(myStack.isEmpty()) // true
// console.log(myStack.push('a'), 'should be 1');
// console.log(myStack.push('b'), 'should be 2');
// console.log(myStack.push('c'), 'should be 3');
// console.log(myStack.push('d'), 'Max capacity already reached');
// console.log(myStack.pop(), 'should be c');
// console.log(myStack.size(), 'should be 2');
// console.log(myStack.peek(), 'should be b');
// console.log(myStack.size(), 'should be 2');
