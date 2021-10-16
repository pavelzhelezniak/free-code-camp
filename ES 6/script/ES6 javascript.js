// 1 task. Explore Differences Between the var and let Keywords

let catName;
let quote;
function catTalk() {
	"use strict";

	catName = "Oliver";
	quote = catName + " says Meow!";

}
catTalk();

// 2 task. Compare Scopes of the var and let Keywords

function checkScope() {
	let i = 'function scope';
	if (true) {
		i = 'block scope';
		console.log('Block scope i is: ', i);
	}
	i = 'function scope';
	console.log('Function scope i is: ', i);
	return i;
}

// 3 task. Declare a Read-Only Variable with the const Keyword

function printManyTimes(str) {

	const SENTENCE = str + " is cool!";
	for (let i = 0; i < str.length; i += 2) {
		console.log(SENTENCE);
	}

}

printManyTimes("freeCodeCamp");

// 4 task. Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {

	s[0] = 2;
	s[1] = 5;
	s[2] = 7;

}

editInPlace();

// 5 task. Prevent Object Mutation

function freezeObj() {
	const MATH_CONSTANTS = {
		PI: 3.14
	};

	Object.freeze(MATH_CONSTANTS);

	try {
		MATH_CONSTANTS.PI = 99;
	} catch (ex) {
		console.log(ex);
	}
	return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// 6 task. Use Arrow Functions to Write Concise Anonymous Functions

const magic = () => new Date();

// 7 task. Write Arrow Functions with Parameters

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// 8 task. Set Default Parameters for Your Functions

const increment = (number, value = 1) => number + value;

// 9 task. Use the Rest Parameter with Function Parameters

const sum = (...args) => {

	return args.reduce((a, b) => a + b, 0);

}

// 10 task. Use the Spread Operator to Evaluate Arrays In-Place

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);

// 11 task. Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES = {
	yesterday: 75,
	today: 77,
	tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;

// 12 task. Use Destructuring Assignment to Assign Variables from Objects

const HIGH_TEMPERATURES = {
	yesterday: 75,
	today: 77,
	tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
//Вы можете прочитать это как «получить значение user.nameи присвоить его новой переменной с именем userName» и так далее.Значением userNameбудет строка John Doe, а значением userAge - число 34.

// 13 task. Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
	yesterday: { low: 61, high: 75 },
	today: { low: 64, high: 77 },
	tomorrow: { low: 68, high: 80 }
};

//  const { today: { low, high } } = LOCAL_FORECAST;
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

// 14 task. Use Destructuring Assignment to Assign Variables from Arrays

let a = 8, b = 6;

[a, b] = [b, a];

// 15 task. Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
	// Only change code below this line
	// const arr = list; Change this line
	const [a, b, ...arr] = list;
	// Only change code above this line
	return arr;
}
const arr = removeFirstTwo(source);

// 16 task. Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
	max: 56.78,
	standard_deviation: 4.34,
	median: 34.54,
	mode: 23.87,
	min: -0.75,
	average: 35.85
};

// Only change code below this line
// const half = (stats) => (stats.max + stats.min) / 2.0;
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line

// 17 task. Create Strings using Template Literals


const result = {
	success: ["max-length", "no-amd", "prefer-arrow-functions"],
	failure: ["no-var", "var-on-top", "linebreak"],
	skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
	// Only change code below this line
	const failureItems = [];
	for (let i = 0; i < arr.length; i++) {
		failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
	}
	// Only change code above this line

	return failureItems;
}

const failuresList = makeList(result.failure);

// 18 task. Write Concise Object Literal Declarations Using Object Property Shorthand

const createPerson = (name, age, gender) => {
	// Only change code below this line
	return { name, age, gender };
	// Only change code above this line
};

// 19 task. Write Concise Declarative Functions with ES6

// Only change code below this line
const bicycle = {
	gear: 2,
	setGear(newGear) {
		this.gear = newGear;
	}
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

// 20 task. Use class Syntax to Define a Constructor Function

class Vegetable {
	constructor(name) {
		this.name = name;
	}
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);

// 21 task. Use getters and setters to Control Access to an Object

class Thermostat {
	constructor(temperature) {
		this._temperature = temperature;
	}
	get temperature() {
		return 5 / 9 * (this._temperature - 32);
	}
	set temperature(updateTemperature) {
		this._temperature = updateTemperature * 9.0 / 5 + 32;
	}
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

// 22 task. Create a Module Script

<html>
	<body>
		<script type="module" src="index.js"></script>
	</body>
</html>

// 23 task. Use export to Share a Code Block

const uppercaseString = (string) => {
	return string.toUpperCase();
}

const lowercaseString = (string) => {
	return string.toLowerCase()
}

export { uppercaseString, lowercaseString };

// 24 task. Reuse JavaScript Code Using import

import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

// 25 task. Use * to Import Everything from a File

import * as stringFunctions from "./string_functions.js"
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// 26 task. Create an Export Fallback with export default

export default function subtract(x, y) {
	return x - y;
}

// 27 task. Import a Default Export

import subtract from "./math_functions.js";

subtract(7, 4);





