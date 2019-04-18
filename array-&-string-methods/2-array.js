var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(arr){
  var longWord = arr[0];
  arr.forEach(value => {
    if(value.length > longWord.length ){
      longWord = value
    } 
  })
  return longWord;
}
// ==========================================================================

function longWord (arr){
  arr.sort((a,b) => a.length - b.length);
  return arr.pop();
}

// ===========================================================================

var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
function sumArray(arry){
  return arry.reduce((acc, value) => {
  return acc = acc + value;
  },0);
}
// ===============================================================================
// Use reduce method of array
// Use the above sum and calculate the average.
function sumArray(arry){
  return arry.reduce((acc, value) => {
  return acc = acc + value;
  }, 0) / arry.length;
}
// ===============================================================================

var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
function averageNumbers(arr){
  return arr.reduce((acc,value) => {
  return acc = acc + value;
  }, 0) / arr.length
}

// ===============================================================================

var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(arry){
  return arry.reduce((acc, value) => {
  return acc = acc + value.length;
 }, 0) / arry.length;
}


