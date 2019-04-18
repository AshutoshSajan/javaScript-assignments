// Write a JavaScript function to check whether an `input` is a string or not.
function dataType(elm){
	return typeof elm;
}

// Write a JavaScript function to check whether a string is blank or not.
var empty = str => str === "" ? `string is empty`: `string is not empty`;


// Write a JavaScript function to split a string and convert it into an array of words.
// Input -> "Hello World In Javascript"
// Output -> ['Hello','World', 'In', 'Javascript']
function split(str){
	return str.split(" ");
}

// Write a JavaScript function to extract a specified number of characters from a string.
// Input -> (string, number) -> ('Hello World!', 4)
// Ouptut -> String -> "Hell"

function extractSpecified(str, num) {
	return str.slice(0,num);
}

// Write a JavaScript function to convert a Full Name like (Rahul Dravid) -> (Rahul D.)
// Input -> (String)
// Output (String)
function shortName(str) {
	var nickName = name.split(" ");
	var short = nickName[1].slice(0,1);
	nickName.splice(1,2);
	nickName.push(short);
	return nickName.join(" ");
}

// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Input -> (String) -> "someone@altcampus.io"
// Output -> (String) -> "som....@altcampus.io"
function hideEmail(str){
	var arr = str.split("@");
	var slice = arr[0].slice(0,3);
	var concat = slice.concat("....");
	arr[0] = concat;
	return arr.join("@");
}


// Write a JavaScript function to parameterize a string
// Input -> (String) -> ('The Perks Of Being A Wallflower')
// Output -> (String) -> 'the-perks-of-being-a-wallflower
function parameterize(str){
	var newStr = str.toLowerCase();
	var split = newStr.split(" ");
	return join = split.join("-");
}

// Write a JavaScript function to capitalize the first letter of every Word of a string.
// Inpput -> (String) -> 'hello Batman from India'
// Output -> (String) -> 'Hello Batman From India'
function firstLetterCapitalize(str){
	var newStr = "";
	for (var i = 0; i < str.length; i++){
		console.log(i);
		if(str[i][0].toLowerCase()){
			newStr += str[i][0].toUpperCase();
		}
	}
}xxxxxxxxxxxxxxx

// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// Input (String) -> 'AaBbcVv'
// Output -> 'aAbBCvV'
	function flipStr(str){
		var newStr = "";
		for(var i = 0; i < str.length; i++){
			if(str[i].toLowerCase()){
				str[i].toUpperCase();
			}else if(str[i].toUpperCase()){
				str[i].toLowerCase();
			}
		}
	}

// Write a JavaScript function to convert a string into camel case.
// Input (String) -> 'Learning about js'
// Output -> 'LearningAboutJs'



// Write a JavaScript function to uncamelize a string
// Input (String) -> 'LearningAboutJs'
// Output -> 'Learning About Js'
// function uncamelizeString(str){
// 	var newStr = str.join("");
// 	for(var i = 0; i < str.length; i++){
// 		console.log(i);
// 	}
// }xxxxxxxxxxxxxxxxxxxxxxx


// Write a JavaScript function to concatenates a given string n times
// Input (String, number) -> ('Hello!', 4)
// Output -> 'Hello!Hello!Hello!Hello!'
function concatenates(str, num){
	return str.repeat(num)
}


// Write a JavaScript function to humanized number
// Input -> (Number) -> 1 or 2
// Output -> (String) -> 1st or 2nd
function humanizedNumber(num = 0){
	function humanizedNumber(num){
	if(num % 100 === 11 || num % 100 === 12 || num % 100 === 13){
		return num + "th";
	}
	else if(num % 10 === 1){
		return num + "st";
	}else if(num % 10 === 2){
		return num + "nd";
	}else if(num % 10 === 3){
		return num + "rd";
  }else {
		return num + "th"
	}	
}







// ===========================================
// // phone number function
// ===========================================
// // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// // function phoneNo(arr){
// // 	arr.splice(0,0,"(")
// // console.log(arr)
// // 	arr.splice(4,0,") ")
// // console.log(arr)
// // 	arr.splice(8,0,"-");
// // console.log(arr)
// // 	return arr.join("");
// // }phoneNo(arr)
// =========================================