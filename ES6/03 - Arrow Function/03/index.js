// Open the html file in browser and go to the link provided.
// You can see the time of every video
// Use arrow function and array methods to calculate the total timing of the whole playlist.
// The final result should be in HH:MM:SS
var html = document.querySelectorAll(".ytd-thumbnail-overlay-time-status-renderer")
var time = Array.from(html).map(v => [...v.innerText].join(""));
var minuteArray = time.map(v => v.split(":").filter((v, i)=> i %2 == 0).join(""))
var secArray = time.map(v => v.split(":").filter((v, i)=> i %2 == 1).join(""))


var min = minuteArray.reduce((acc,v) => {
	return acc += Number(v)
},0)

var sec = secArray.reduce((acc,v) => {
	return acc += Number(v)
},0)

var total = `${Math.floor(min/60)} : ${min % 60 + Math.floor(sec / 60)} : ${Math.floor(sec % 60)}`;
console.log(total)

// var milisec = miliseconds(0,minutes / 60, sec / 787);
// function miliseconds(hrs, min, sec){
//   return((hrs * 60 * 60 + min * 60 + sec)*1000);
// }


// =====================================================
// not done
// =====================================================