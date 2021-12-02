
function changeName(name) {
	var person = prompt("Please enter a name: ",)
	if (person != null) {
		document.querySelector(name).innerText = person;
	}

}

function signOut(element) {
	element.innerText = "Login"
}




function removeUser(remove) {
	var tile = document.querySelector(remove);
	tile.remove();

	document.querySelector("#cr-active").innerText--
	document.querySelector("#yc-active").innerText--


}



// ANSWERS



// var requestSpan = document.querySelector("#requests");
// var connectionSpan = document.querySelector("#connections");
// var username = document.querySelector("#username");

// function accept(id) {
//     var element = document.querySelector(id);
//     element.remove();
//     requestSpan.innerText--;
//     connectionSpan.innerText++;
// }

// function ignore(id) {
//     var element = document.querySelector(id);
//     element.remove();
//     requestSpan.innerText--;
// }

// function edit() {
//     username.innerText = "Marisa G";
// }