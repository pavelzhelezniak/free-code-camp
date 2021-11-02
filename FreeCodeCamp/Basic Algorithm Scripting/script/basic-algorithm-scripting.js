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

// 4 task. Find the Longest Word in a String

function findLongestWordLength(str) {
	return Math.max(...str.split(' ').map(item => item.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// 5 task. Return Largest Numbers in Arrays

function largestOfFour(arr) {
	const newArray = [];
	for (let i = 0; i < arr.length; i++) {
		for (let k = 0; k < arr[i].length; k++) {

		}
		newArray.push(Math.max(...arr[i]))
	}
	return newArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));