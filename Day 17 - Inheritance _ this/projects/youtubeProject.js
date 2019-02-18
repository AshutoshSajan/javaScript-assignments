class Rectngle{
	 // setup
	constructor(_width, _height, _color){
 		this.width = _width;
 		this.height = _height;
 		this.color = _color;
	}

	getArea(){
		return this.width * this.height;
	}
	printDescription(){
		console.log(`i am a Rectngle of${this.width} X ${this.height} and i am ${this.color}`);
	}
}

let myRectangle = new Rectngle();
// ==========================================
// getter setter
// ==========================================
class Square{
	constructor(_width){
		this.width = _width;
		this.height = _width;
		this.numOfReqForArea = 0;
	}
	// getter
	get area(){
		this.numOfReqForArea++;
		return this.width * this.height;
	}

	set area(){
		this.width = Math.sqrt(area);
		this.height = this.width;
	}
}

let square1 = new Square(10);
console.log(square1.area);

square1.area = 25;
console.log(square1.width);
console.log(square1.height);
console.log(square1.numOfReqForArea);//show no of area requests

// ==========================================
// static methods
// ==========================================

class Square{
	constructor(_width){
		this.width = _width;
		this.height = _width;
	}

	// a and b are squares
	static equals (a, b){
		return a.width * a.height === b.width * b.height;
	}

	static isValidDimensions (width, height){
		return width === height; 
	}
}

var square1 = new Square(10);
var square2 = new Square(10);
console.log(Square.equals(square1, square2));
console.log(isValidDimensions(width, height));

// ==========================================
// inheritance / extends
// ==========================================
// parent and child class
class person {
	constructor(_name, _age){
		this.name = _name;
		this.age =_age;
	}
	describe(){
		console.log(`i am ${this.name} and i am ${this.year} years old.`)
	}
}

class Programmer extends person{
	constructor(_name, age, _yeasOfExperience){
		super(_name, _age); //calling parent class(person);

	// custom behaviour
	this.yeasOfExperience = _yeasOfExperience;
	}

	code(){
		console.log(`${this.name} is coding`);
	}

}


let person = new Person("jack", 22);
let programmer = new Programmer("jack", 22, 12);

const programmers = [
	new Programmer("dom", 56, 14),
	new Programmer("jeff", 33, 6)
];

function developSoftware(programmers){
	//develop software
	for(let programmer of programmers){
		Programmer.code;
	}
}

// ==========================================
// polymorphisam
// ==========================================

class Animal{
	constructor(name){
		this.name = name;
	}

	makeSound(){
		console.log("Generic animal sound!");
	}
}

class Dog extends Animal{
	constructor(name){
		super(name);
	}
}
makeSound(){
	console.log("woof! woof!");
}

var a1 = new Animal("dom");
var a2 = new Dog("rocky");