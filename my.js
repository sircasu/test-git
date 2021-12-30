window.onload = (event) => {
	
	console.log('page is fully loaded');

	// var btns = document.getElementsByTagName("button")
	// var last_btn = btns[btns.length-1]
	// last_btn.onclick = function() {
	// 	console.log("ASDASDASDASDASDA")	
	// }

	var btn = document.getElementById("cambioColore")
	btn.onclick = function() {
		console.log("ASQWE")	
	}
};



function clickMe() {
	console.log("click me, clicked!")
}


function getByTag() {
	
	var divs = document.getElementsByTagName("div"); // selezione by tag

	for (var i = 0; i < divs.length; i++) {

		divs[i].style.backgroundColor = "red"
	}
}


// (function() {

// })()

// function getByClass() {
	
// 	var divs = document.; // selezione by class

// 	for (var i = 0; i < divs.length; i++) {

// 		divs[i].style.backgroundColor = "red"
// 	}
// }

