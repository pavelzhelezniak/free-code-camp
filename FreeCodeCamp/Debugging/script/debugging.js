// 1 task. Use the JavaScript Console to Check the Value of a Variable

let a = 5;
let b = 1;
a++;
let sumAB = a + b;
console.log(a);

// 2 task. Understanding the Differences between the freeCodeCamp and Browser Console

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

// 3 task. Use typeof to Check the Type of a Variable

let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);

// 4 task. Catch Misspelled Variable and Function Names

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

// 5 task. Catch Unclosed Parentheses, Brackets, Braces and Quotes

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

// 6 task. Catch Mixed Usage of Single and Double Quotes

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

// 7 task. Catch Use of Assignment Operator Instead of Equality Operator

let x = 7;
let y = 9;
let result = "to come";

if (x === y) {
	result = "Equal!";
} else {
	result = "Not equal!";
}

console.log(result);

// 8 task. Catch Missing Open and Closing Parenthesis After a Function Call

function getNine() {
	let x = 6;
	let y = 3;
	return x + y;
}

let result = getNine();
console.log(result);