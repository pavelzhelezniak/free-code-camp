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