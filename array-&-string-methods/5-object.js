// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)
Object.keys(student)
// =================================

function objKeyAndVal(obj){
	var allKey = "";
	var val = "";
    for(var key in obj){
    	allKey = allKey + " " + key;
			val = val + " " + obj[key]; 	
    }
	return `${allKey} ${val}`;
}

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};
console.log(student);
delete student.rollno;
console.log(student);

// ============================================

function deleteProp(obj, prop){
	console.log(obj)
	delete obj[prop];
	console.log(obj)
}



// 3. Write a function to get the length of an object.
function objectLength(obj){
	return Object.keys(obj).length;
}

var objectLength = obj => Object.keys(obj).length;