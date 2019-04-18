var sheet = document.querySelector(".sheet");
var mainData = JSON.parse(localStorage.getItem("tableData") ) || [];
var cells = "";
var displyData = [];

function createCells(){
  for(var i = 0; i <= 100; i++){
  	cells += `<div class="cells" >`;

	  for(var j = 0; j < 27; j++){
	  	if(i == 0 && j == 0){
	  		cells += `<div class="blank"></div>`
	  	} else if (j == 0){
	  		cells += `<div class="row-header">${i}</div>`;
	  	} else if(i == 0){
	  		cells += `<div class="col-header">${String.fromCharCode(j + 64)}</div>`	
	  	} else {
	  		cells += `<input class="cells-input" data-key='${String.fromCharCode(j + 64) + String(i)}'>`;
	  	}
	  }
	  cells += `</div>`;
	}
	return cells;
}
createCells()


function display(array){
	sheet.innerHTML = cells;
		array.forEach(elm => {
	})
}
display(mainData);


function handleEnter(e){
	if(e.target.classList.contains("cells-input")){
		var obj = {}
		obj.key = e.target.dataset.key;
		obj.text = e.target.value;
		mainData.push(obj);
		console.log(e);
	}
	localStorage.setItem("tableData", JSON.stringify(mainData));
}
// sheet.focus();

// function handleBlur(e){
// 	console.log("hello");
// 	console.log(e.target);
// }

// sheet.addEventListener("blur", handleBlur);
sheet.addEventListener("click", handleEnter);