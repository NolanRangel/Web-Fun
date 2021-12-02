

// REMOVE POP-UP WINDOW

function removeBtn(element) {
	var window = document.querySelector(".pop-up");
	window.remove();
}


// onmouseover event

function imgSwap1(element) {
	console.log(element);
	document.querySelector(".img1").src = "./images/succulents-2.jpg";
}


// onmouseout event

function imgSwap2(element) {
	console.log(element);
	document.querySelector(".img1").src = "./images/succulents-1.jpg";
}