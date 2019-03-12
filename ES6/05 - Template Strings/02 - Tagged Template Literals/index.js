// Use the below info to create HTML using tagged template literal
// const abb = {
//   HTML: "Hyper Text Markup Language",
//   CSS: "Cascading Style Sheets",
//   JS: "JavaScript"
// };

//The abbreviation for HTML, CSS and JS. Hover to see :🙎‍♂️
// On hover over HTML should show `Hyper Text Markup Language`
// Use the abbr tag

// for(var abbr in abbreviation){
// 	document.body.innerHTML +=
// 	`<p><abbr title="${abbreviation[abbr]}">${abbr}</abbr></p>`;
// }

var abb = {
  HTML: "Hyper Text Markup Language",
  CSS: "Cascading Style Sheets",
  JS: "JavaScript"
};

function tagMe(str, ...val){
	var html = "";
	val.map((v, i) => {
		html += `<p>${str[i]} <abbr class="show" title="${abb[v]}">${v}</abbr></p>`;
	})
	return html;
}

document.body.innerHTML = tagMe `i love to code in ${"HTML"} and style it by using ${"CSS"} and make it dynamic by ${"JS"}.`;