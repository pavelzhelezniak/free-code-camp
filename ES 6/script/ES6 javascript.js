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















