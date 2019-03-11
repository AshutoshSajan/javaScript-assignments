const button = document.querySelector(".push_me");
console.log(button);
// Make this code work and why it was not working.
button.addEventListener("click", function(){
  this.classList.toggle("on");
});

// Make this work when you `students.myScore()` it should alert you the marks.
// arraw function have no this
const students = {
  marks: 95,
  myScore: function(){
    alert(this.marks);
  }
};

// arguments is a special property inside a function that gives access to all the arguments passed.
// why is this not working

// const add = () => {
//   return Array.from(arguments).reduce(
//     (acc, currentValue) => acc + currentValue
//   );
// };


var add = function(){
  return Array.from(arguments).reduce(
    (acc, currentValue) => acc + currentValue
  );
};
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 0, 12, 13, 45, 13));
