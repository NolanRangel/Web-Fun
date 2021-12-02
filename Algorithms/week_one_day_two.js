// Predict Loops

for (var i = 0; i < 10; i++) {
	console.log(i);
	i = i + 3;
}

console.log("outside of the loop " + i);


// Predict what the code does

function getTotal(arrayOfNumbers) {

	var sum = arrayOfNumbers[0];		// sum = 1

	for (var i = 0; i < arrayOfNumbers.length; i++) {
		sum += arrayOfNumbers[i];
		console.log("the current sum is: " + sum);
	}

	console.log("the total is: " + sum);

}

getTotal([1, 3, 5]);
