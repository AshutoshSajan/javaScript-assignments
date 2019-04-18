// Type JavaScript here and click "Run Code" or press Ctrl + s
function greet(){
	console.log('Hello, world!');
}

// Challenge 1
function addTwo(num) {
	return num + 2;
}



// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// ================================================================
// Challenge 2
function addS(word) {
	return word + "s"
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// ================================================================
// Challenge 3
function map(arr, callback) {

	let newArr = [];

	for(let i = 0; i < arr.length; i++){
		newArr.push(callback(arr[i]));
	}
	return newArr;
}

console.log(map([1, 2, 3], addTwo));

// ================================================================
// Challenge 4
var letters = ['a', 'b', 'c', 'd'];
var alphabet = '';
function forEach(letters, function(char) {
	  alphabet += char;
	};
	console.log(alphabet);  

// ==========================================
function cb(v){
	str = "";
	return str += v; 
}

function forEach(array, callback) {
	for(var i = 0; i < array.length; i++){
		callback(array[i]) ;
	}
}
// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function cb(v){
	return v + 2;
}

function mapWith(array, callback) {
	var newArr = [];
	array.forEach((v) => {
		return newArr.push(callback(v));
})

//Extension 2
function cb(v){
	return v + 2;
}

function reduce(array, callback, initialValue) {

	for(var i = 0; i < array.length; i++){
		initialValue += callback(array[i])
	}return initialValue;
}

or

function cb(v){
	return v + 2;
}

function reduce(array, callback) {
	var val = 0;
	for(var i = 0; i < array.length; i++){
		val += callback(array[i])
	}return val;
}

//Extension 3
function intersection(...arrays) {
	return arrays.reduce((acc, val) => {
	acc = acc.filter(v => val.includes(v))
		return acc;
	});
 }
 
// =======================================
// version 2
// =======================================
function intersection(...args) {
	var a = args[0];
	var result = [];
	for(var i = 0; i < args.length; i++){
		if(args[i].includes(a[i])){
			result.push(args[i][i])
		}
	}return result;
 }
 // =======================================
// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
	return arrays.reduce((acc, val) => {
	val.filter(v => {
		if(acc.includes(v)!=true){
			acc.push(v)	
		}
    })
		return acc;
	});
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function cb (str) {
 return str.toUpperCase();
}

function objOfMatches(array1, array2, cb) {
	var obj = {};
	array1.filter(v => {
		if(array2.includes(v.toUpperCase())){
			obj[v] = v.toUpperCase();
		}
  })
	return obj;
}
objOfMatches(array1, array2, cb)

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
	return arrVals.reduce((acc, val) => {
		acc[val] = arrCallbacks.map(fn => fn(val));
		return acc;
	},{})
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }



// ====================================================
// filter function using for loop
// ====================================================
function cb(v){
	if (v % 2 == 0){
		return true;
	}else {
		return false;
	}
} 

function myFilter(array, cb){
	var arr = [];
	for(var i = 0; i < array.length; i++){
		if (cb (array[i]) == true){
			arr.push(array[i]);
		};
	}
	return arr;	
}
myFilter([12,2,1,2,4,5,6,21,2], (v) => v % 5)