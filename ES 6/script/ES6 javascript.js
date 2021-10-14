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







