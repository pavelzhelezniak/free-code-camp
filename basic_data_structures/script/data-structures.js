// 1 task. Use an Array to Store a Collection of Data

let yourArray = ['string', 19, false, [1, 9], { a: 1, b: 5 }];

// 2 task. Access an Array's Contents Using Bracket Notation

let myArray = ["a", "b", "c", "d"];
myArray[1] = 'index = 1'
console.log(myArray);

// 3 task. Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
	// Only change code below this line
	arr.unshift('I', 2, 'three')
	arr.push(7, 'VIII', 9)
	// Only change code above this line
	return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

// 4 task. Remove Items from an Array with pop() and shift()

function popShift(arr) {
	let popped = arr.pop(); // Change this line
	let shifted = arr.shift(); // Change this line
	return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// 5 task. Remove Items Using splice()

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4)
console.log(arr);

// 6 task. Add Items Using splice()

function htmlColorNames(arr) {
	// Only change code below this line
	arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
	// Only change code above this line
	return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// 7 task. Copy Array Items Using slice()

function forecast(arr) {
	const newArray = arr.slice(2, 4)
	return newArray;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// 8 task. Copy an Array with the Spread Operator

function copyMachine(arr, num) {
	let newArr = [];
	while (num >= 1) {
		// Only change code below this line
		newArr.push([...arr])
		// Only change code above this line
		num--;
	}
	return newArr;
}

console.log(copyMachine([true, false, true], 2));