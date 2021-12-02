

//  REMOVE POP-UP WINDOW

function removeBtn(element) {
	var window = document.querySelector(".pop-up");
	window.remove();
}



// take onchange input from drop down   
// create query variables for C and F
// create function that will pass either variable through depending on what 	was selected and convert it to the opposite
// create query variables for the temps in the tiles
// take the conversion and update the appropriate number within the tiles



var currentUnit = "f";

function tempConverter(degree) {
	// console.log(degree.value);
	var temp1 = document.querySelectorAll(".temp1");
	var temp2 = document.querySelectorAll(".temp2");
	// console.log(temp1);
	// console.log(temp2);

	for (var i = 0; i < temp1.length; i++) {
		if (degree.value === currentUnit) {
			break;
		} else if (degree.value === "c") {
			var celsius1 = Math.round((temp1[i].innerText - 32) / 1.8);
			var celsius2 = Math.round((temp2[i].innerText - 32) / 1.8);
			// console.log(celsius1);
			// console.log(celsius2);
			temp1[i].innerText = celsius1;
			temp2[i].innerText = celsius2;
		} else if (degree.value === "f") {
			var farenheit1 = Math.round((temp1[i].innerText * 1.8) + 32);
			var farenheit2 = Math.round((temp2[i].innerText * 1.8) + 32);
			// console.log(farenheit1);
			// console.log(farenheit2);
			temp1[i].innerText = farenheit1;
			temp2[i].innerText = farenheit2;
		}
	}
	if (degree.value === currentUnit) {

	} else if (degree.value === "c") {
		currentUnit = "c";
	} else if (degree.value === "f") {
		currentUnit = "f";
	}
}

// document.querySelector(".temp-c");
// document.querySelector(".temp-f");


// var farenheit1 = (temp1[i].innerText * 1.8) + 32;
// 			var farenheit2 = (temp2[i].innerText * 1.8) + 32;
			// console.log(farenheit1);
			// console.log(farenheit2);
			// temp1.innertext() = farenheit1;
			// temp2.innerText() = farenheiht2;
			// Math.round(x)
