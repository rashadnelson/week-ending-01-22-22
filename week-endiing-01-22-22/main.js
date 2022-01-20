//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

//The binary number returned should be a string.

//Examples:(Input1, Input2 --> Output (explanation)))

function addBinary(a, b) {
	let sum = a + b;
	let sumBinary = Number(sum).toString(2);
	return sumBinary;
}

let getSumBinary = addBinary(10, 11);
console.log(getSumBinary);
