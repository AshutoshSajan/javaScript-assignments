/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age){
	var user = {}
  user.name = name;
  user.age = age;
  return user;
}

var vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24





/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
var personStore = Object.create({});
  personStore.greet = function(){
  console.log("hello");
}

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  var person = Object.create({});
  person.name = name;
  person.age = age;
  person.greet = function(){
    console.log("hello");
  }
  return person;
}

var sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/

// add code here
user.introduce = function(){
  console.log(`Hi, my name is ${user.name}`)
}

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
  this.greet = function(){
    console.log("hello");
  }
}



// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor();
// simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function PersonFromConstructor(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function(){
   console.log(`hi my name is ${this.name}`)
  }
}

var mike = new PersonFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
// add code here
PersonConstructor.prototype.introduce = function (){
  console.log(`my name is ${this.name}`)
}

// mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
	constructor(name) {
    this.name = name;
	}
  greet(){
    console.log("hello")
  }
}


// /********* Uncomment this line to test your work! *********/
var george = new PersonClass;
// george.greet(); // -> Logs 'hello'


/*** CHALLENGE 2 of 3 ***/
class DeveloperClass{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log("hello");
  }
  introduce(){
    console.log(`hello my name is ${this.name}`);
  }
}

// /********* Uncomment these lines to test your work! *********/
// var thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'



/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  }
}

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore /* Put code here */ ;

function adminFactory(name, score) {
  // Put code here
}

/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"







function User(name, age){
  this.name = name;
  this.age = age;
  this.score = 0;
}
User.prototype.inc = function(){ return this.score++}

var a = new User("jack", 22);
a.inc();

// ==========================================
class user{ 
 constructor(name, age, sex, height, nationality){
      this.name = name;
      this.age = age;
      this.sex = sex;
  this.score = 0;
      this.nationality = nationality;
  }

  inc(){this.score++};
  dec(){this.score++};
  newName(){
    var newName = prompt("enter your name");
    return this.name = newName;
  }
}

var a = new user("jack", 22, "male", "6ft", "USA")
a.newName();