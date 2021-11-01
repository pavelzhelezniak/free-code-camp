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

// 3 task. Factorialize a Number

function factorialize(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * factorialize(num - 1);
	}
}

console.log(factorialize(5));

