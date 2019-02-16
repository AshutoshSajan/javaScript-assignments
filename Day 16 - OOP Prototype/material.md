# Why OOP

OOP is important because you can have data and functions in an object. Where you can use the data and execute functions on the data.

Let's imagine we have to make a quiz game with the these properties. We need the data and some some functions to execute on those data.

Our requirement:
Name: Phil
Score: 4

    Name: Julia
    Score: 5

    Functionality
    + Ability to increase score
    What would be the best way to store this data and
    functionality?

```javascript
let user = {
  name: "Ramesh",
  score: 4,
  incrementScore() {
    user.score++;
  }
};
user.incrementScore(); // score = 5
```

Second way of creating object using object literal.

```javascript
let user = {};
user.name = "Ramesh";
user.score = 4;
user.incrementScore = function() {
  user.score++;
};
```

### Object.create

Implement using Object.create method that gives us a very special advantage over the literal method.

```javascript
let user = Object.create(null);
user.name = "Ramesh";
user.score = 4;
user.incrementScore = function() {
  user.score++;
};
```

### Implementing using function

```javascript
function createUser(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  };
  return newUser;
}
const user1 = createUser("Phil", 4);
const user2 = createUser("Julia", 5);
user1.increment();
```

### Avoid Duplication

The problem with this method is you are having the copy of function on every object you are creating with this function. For 3-4 users it doesn't matter but think about having 5000 or 50000 users it will occupy a lot a memory. The solution to this problem is the prototype chain.

```javascript
const functionStore = {
  increment: function() {
    this.score++;
  },
  login: function() {
    console.log("You're loggedin");
  }
};
const user1 = {
  name: "Phil",
  score: 4
};
```

How to link them so everytime we create a new object it should have a reference to the functionStore.

We link them using Object.create

```js
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}
const userFunctionStore = {
  increment: function() {
    this.score++;
  },
  login: function() {
    console.log("You're loggedin");
  }
};
const user1 = userCreator("Phil", 4);
const user2 = userCreator("Julia", 5);
user1.increment();
```

## Prototypal Neture

If the object doesn't find the method you are calling on the object it looks for it's prototypal linkage.

Probelms: 1. It feels very repetative to write the code and functions and link them to **proto**.(new) 2. How to access the newly created object(this)

Solution:

    1. The new keyword introduced to automate the process of creating new object with has the methods that you wanted in the way you wanted i the __proto__;
    2. You can access them with 'this';

## Functions are both object and function.

When you create a function it gets linked to a object. So they are a function and object combo. Generally we don't use that but in OOP we use it to understand how everything works.

Example:

```js
function multiplyByTwo(num) {
  return num * 2;
}
// Use it like an object
multiplyByTwo.value = 6;

// Use it like an function
multiplyByTwo(4); // 8

// Access the value we added
multiplyByTwo.value; //6
```

You get a predefined property in every function called 'prototype' which we can use to store the functions we want to store.

Example: (This is also called as the pseudoclassical way of creating object)

```js
function CreateUser(name, score){
 this.name = name;
 this.score = score;
}
CreateUser.prototype.increment = function(){
 this.score++;
};
CreateUser.prototype.login = function(){
 console.log("login");
};
const user1 = new CreateUser(“Eva”, 9)
user1.increment()
```

## The new keyword

When you write the word new in front of any function it will do a lot of stuff for you to make your life as a programmer very easy. These are the following thing that it does. 1. A new blank object is created with this context 2. The **proto** of the new object gets linked to the prototype object of the function. 3. The object gets returned.

## Benifits of this approch

    1. Faster to write
    2. Code runs faster
