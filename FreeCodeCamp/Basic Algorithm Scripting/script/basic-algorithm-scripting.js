// 1 task. Convert Celsius to Fahrenheit

function convertToF(celsius) {
	let fahrenheit = (celsius * 9 / 5) + 32;
	return fahrenheit;
}

convertToF(30);

// 2 task. Reverse a String

function reverseString(str) {
	return str.split('').reverse().join('');
}

reverseString("hello");