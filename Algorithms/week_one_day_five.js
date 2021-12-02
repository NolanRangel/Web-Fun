// ["a", "b", "c", "d", "e"];
// Reverse the function above
// iterate through loop backwards and print in the array forwards

function reverse(arr) {
	var temp = 0;
	var n = 0;
	var arrayLength = arr.length - 1;

	while (n < (arr.length / 2)) {
		temp = arr[n];
		n = arr[arrayLength];
		arr[arrayLength] = temp;
		temp++
		n--
	}
	return arrayLength;
}

var x = ["a", "b", "c", "d", "e"]
console.log(reverse(x));


function reverse(arr) {
	var i = 0;
	var j = arr.length - 1;
	while (i < j) {
		temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		i++;
		j--;
	}
	return arr;
}

console.log(reverse(["a", "b", "c", "d", "e"]))