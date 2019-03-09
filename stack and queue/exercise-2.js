/*
QUEUE
Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.

1. Implement Queue Data Structure using String
  Operations you need to add are
    * enqueue(value) - add a new value and returns the size of the storage
    * isEmpty() - returns true if the storage is empty
    * dequeue() - remove one element and returns the deleted element
    * peek() - displays the latest element in the storage
    * size() - the size of the storage
*/

// String implementation
class Queue {
  constructor() {
    this._storage = ""; // String Implementation
  }

  isEmpty() {
    if(this._storage == ""){
      return true;
    }
  }

  enqueue(value) {
    this._storage += value + "_";
    return this._storage.split("_").filter(Boolean).join(" ").length;
  }

  dequeue() {
    // var index = this._storage.slice(0, this._storage.length - 2).lastIndexOf("_");
    // var last = this._storage.slice(index, this._storage.length - 2);
    // this._storage = this._storage.slice(0, index) + "_";
    // return last;

    this._storage.split("_").pop()
  }

  peek() {
    var index = this._storage.indexOf("_");
    return this._storage.slice(0, index);
  }

  size() {
    return this._storage.split("_").join(" ").length - 1;
  }
}



// Object Implementation
class Queue{
  constructor(maxCapacity) {
    this._storage = {}; // Object Implementation
  this.capacity = maxCapacity;
  }

  isEmpty(){
    if(Object.keys(this._storage).length == 0){
      return true;
    }
  }

  enqueue(value){
    if (value && this.capacity && Object.keys(this._storage).length < this.capacity){
      this._storage[value] = value;
    } else if(value && !this.capacity){
      this._storage[value] = value;
    } else {
      console.log("Max capacity already reached");
    }
  }

  dequeue(){
    return delete this._storage[Object.keys(this._storage).pop()];  
  }

  peek(){
    return Object.keys(this._storage)[0];
  }

  size(){
    return Object.keys(this._storage).length;
  }

  contains(value){
    if(Object.values(this._storage).includes(value)){
      return true;
    }else {return false};
  }

  sort(){
    return Object.values(this._storage).sort()
  }
}

/*
Implement all above methods using Object data type
  Additionals:
    1. Modify your queue to take max capacity as a parameter and once you exceed the size it should
    print message "Max capacity already reached"
    2. Make a method named 'contains' which will return true if any of the value matches the value of object.
    queue.contains('hello') - true or false
    3. Write a method named sort() which sorts by value
*/

// Use for testing
// var myQueue = new Queue(3);
// console.log(myQueue.enqueue('a'), 'should be 1');
// console.log(myQueue.enqueue('b'), 'should be 2');
// console.log(myQueue.enqueue('c'), 'should be 3');
// console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
// console.log(myQueue.dequeue(), 'should be a');
// console.log(myQueue.count(), 'should be 2');
// console.log(myQueue.peek(), 'should be b');
// console.log(myQueue.count(), 'should be 2');
// console.log(myQueue.contains('b'), 'should be true');
// console.log(myQueue.contains('d'), 'should be false');
// console.log(myQueue._storage, myQueue._head);
// console.log(myQueue.until('b'), 'should be 1');
// console.log(myQueue.until('c'), 'should be 2');
// console.log(myQueue.until('d'), 'should be null');
