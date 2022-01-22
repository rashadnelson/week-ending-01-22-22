// CODEWARS - 01-20-2022
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

// CODEWARS - 01-21-2022
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

// P.R.E.P. - Parameters, Returns, Examples, and Pseudo Code
// Parameters - what am I accepting?  It looks like I'm accepting an array of numbers.  We'll call this "pin".
// Returns - what am I returning?  It's asking for true or false, so I'm returning a boolean, true or false.
// Returns - returns true if pin is 4 or 6 digits in length.  So we're using an if / else statement; and, or logical statements and the .length property to check the length of an array.

function validatePIN(pin) {
	//return true or false
	if (pin.length === 4 || pin.length === 6) {
		pin.forEach((element, index) => {
			//console.log(element);
			let floatNumCheck = Number.isInteger(element);
			console.log(floatNumCheck);

			//let charCheck = /[a-zA-Z]/.test(element);
			//console.log(charCheck);
		});
	} else {
		return false;
	}
}

validatePIN(['b', 4, 6, 8]);
