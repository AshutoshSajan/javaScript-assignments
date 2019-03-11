const cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];

// Loop over every value of cuts array and console.log() the value using for of
for(var val of cuts){
  console.log(val);
}

// Select all the elements with class of `loop` and add a event listener on every element that alerts `you clicked me` using for of. (using querySelector)
var loop = document.querySelectorAll(".loop");
for(var p of loop){
  p.addEventListener("click", function(){
    alert(`you clicked me`);
  })
}

// Select all the elements with class of `loop` and add a event listener on every element that alerts `you clicked me` using for of.(using getElementsByClassName)
var loop = document.getElementsByClassName("loop");
for(var p of loop){
  p.addEventListener("click", function(){
    alert(`you clicked me`);
  })
}

var str = "The world is full of great people.";
// Loop over all the letters and reverse the whole sentence using for of
var strArr = str.split(" ");
var reverse = [];
for(var word of strArr){
  console.log(word);
  reverse.unshift(word);
  console.log(reverse.join(" "))
}