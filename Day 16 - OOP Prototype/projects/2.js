// Define a constructor function called Person which takes three arguments
//(name, yearOfBirth, job) Initiate the properties
function Person(name, yearOfBirth, job){
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}
var jack = new Person("jack", "1980", "teacher");

// Define a function name calculateAge which returns the age of the person
function calculateAge(){
	var currentYear = new Date().getFullYear();
	return currentYear - this.yearOfBirth;
}
var bill = new Person("bill", 1991, "programmer");
calculateAge.call(bill);

// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher')

function user(name, yearOfBirth, job){
	var user = Object.create({})
	user.name = name;
	user.yearOfBirth = yearOfBirth;
	user.job = job;
	return user;
}

var Bill = user("Bill", 1991, "Developer")
var Mike = user("Mike", 1995, "Doctor")
var Jimmy = user("Jimmy", 1998,"Teacher")
calculateAge.call(Bill);
calculateAge.call(Mike);
calculateAge.call(Jimmy);
// call the calculateAge function on each object
