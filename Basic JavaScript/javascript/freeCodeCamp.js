// 1 task. Try creating one of each type of comment.

// First task
/*
First task
 */

// 2 task. Use the var keyword to create a variable called myName.

var myName;

// 3 task. Assign the value 7 to variable a.

var a;
a = 7;

// 4 task. Assign the contents of a to variable b.

var b;
b = a;

// 5 task. Define a variable a with var and initialize it to a value of 9.

var a = 9;

// 6 task. Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.

var a;
a = 5;
var b;
b = 10;
var c;
c = "I am a"

a = a + 1;
b = b + 5;
c = c + " String!";

// 7 task. Modify the existing declarations and assignments so their names use camelCase. Do not create any new variables.

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 8 task. Change the 0 so that sum will equal 20. (var sum = 10 + 0)

var sum = 10 + 10;

// 9 task. Change the 0 so the difference is 12. (var difference = 45 - 0;)

var difference = 45 - 33;

// 10 task. Change the 0 so that product will equal 80. (var product = 8 * 0)

var product = 8 * 10;

// 11 task. Change the 0 so that the quotient is equal to 2. (var quotient = 66 / 0)

var quotient = 66 / 33;

// 12 task. Change the code to use the ++ operator on myVar. (myVar = myVar + 1)

var myVar = 87;
myVar++;

// 13 task. Change the code to use the -- operator on myVar. (myVar = myVar - 1)

var myVar = 11;
myVar--;

// 14 Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).

var myDecimal = 5.7;

// 15 task. Change the 0.0 so that product will equal 5.0. (var product = 2.0 * 0.0)

var product = 2.0 * 2.5;

// 16 task. Change the 0.0 so that quotient will equal to 2.2. (var quotient = 0.0 / 2.0)

var quotient = 4.4 / 2.0

// 17 task. Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.

var remainder = 11 % 3;

// 18 task. Convert the assignments for a, b, and c to use the += operator.
var a = 3;
var b = 17;
var c = 12;

/* a = a + 12;
b = 9 + b;
c = c + 7; */

a += 12;
b += 9;
c += 7;

// 19 task. Convert the assignments for a, b, and c to use the -= operator.

var a = 11;
var b = 9;
var c = 3;

/* a = a - 6;
b = b - 15;
c = c - 1; */

a -= 6;
b -= 15;
c -= 1;

// 20 task. Convert the assignments for a, b, and c to use the *= operator.

var a = 5;
var b = 12;
var c = 4.6;

/* a = a * 5;
b = 3 * b;
c = c * 10; */

a *= 5;
b *= 3;
c *= 10;

// 21 task. Convert the assignments for a, b, and c to use the /= operator.

var a = 48;
var b = 108;
var c = 33;

/* a = a / 12;
b = b / 4;
c = c / 11; */

a /= 12;
b /= 4;
c /= 11;

// 22 task. Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.

var myFirstName = 'Pavel';
var myLastName = 'Zheleznyak';

// 23 task. Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:
//I am a "double quoted" string inside "double quotes".

var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// 24 task. Change the provided string to a string with single quotes at the beginning and end and no escape characters.
// var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// 25 task. Assign the following three lines of text into the single variable myStr using escape sequences.

/* FirstLine
	\SecondLine
ThirdLine */

var myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';

// 26 task. Build myStr from the strings 'This is the start.' and 'This is the end.' using the + operator. Be sure to include a space between the two strings.

var myStr = 'This is the start. ' + 'This is the end.';

// 27 task. Build myStr over several lines by concatenating these two strings: 'This is the first sentence.' and 'This is the second sentence.' using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string.

var myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.'

// 28 task. Set myName to a string equal to your name and build myStr with myName between the strings 'My name is' and 'and I am well!'

var myName = 'Pavel';
var myStr = 'My name is ' + myName + 'and I am well!';

// 29 task. Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.

var someAdjective = 'cool';
var myStr = "Learning to code is ";
myStr += someAdjective;

// 30 task. Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.

var lastNameLength = 0;
var lastName = "Lovelace";
// lastNameLength = lastName;

lastNameLength = lastName.length;

// 31 task. Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.

var firstLetterOfLastName = "";
var lastName = "Lovelace";
// firstLetterOfLastName = lastName;

firstLetterOfLastName = lastName[0];

// 32 task. Correct the assignment to myStr so it contains the string value of 'Hello World' using the approach shown in the example above.

var myStr = "Jello World";
//myStr[0] = "H";
myStr = "Hello World";

// 33 task. Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

var lastName = "Lovelace";
//var thirdLetterOfLastName = lastName;
var thirdLetterOfLastName = lastName[2];//33

// 34 task. Use bracket notation to find the last character in the lastName variable.

var lastName = "Lovelace";
//var lastLetterOfLastName = lastName;
var lastLetterOfLastName = lastName[lastName.length - 1];

// 35 task. Use bracket notation to find the second-to-last character in the lastName string.

var lastName = "Lovelace";
//var secondToLastLetterOfLastName = lastName; 
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

// 36 task. Use bracket notation to find the second-to-last character in the lastName string.

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
//var wordBlanks = "";
var wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;

//37 task. Modify the new array myArray so that it contains both a string and a number(in that order).

var myArray = ['Pavel', 19];

//38 task. Create a nested array called myArray.

//var myArray = [];
var myArray = [['Pavel']];

//39 task. Create a variable called myData and set it to equal the first value of myArray using bracket notation.

var myArray = [50, 60, 70];
var myData = myArray[0];

//40 task. Modify the data stored at index 0 of myArray to a value of 45.

var myArray = [18, 64, 99];
myArray[0] = 45;

//41 task. Using bracket notation select an element from myArray such that myData is equal to 8.

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var myData = myArray[2][1];

//42 task. Push ["dog", 3] onto the end of the myArray variable.

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

//43 task. Use the .pop() function to remove the last item from myArray, assigning the popped off value to removedFromMyArray.

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

//44 task. Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();


//45 task. Add ["Paul",35] to the beginning of the myArray variable using unshift().

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

//46 task. There should be at least 5 sub-arrays in the list.

var myList = [["Candy", 10], ["Sausage", 11], ["Eggs", 12], ["Orange", 13], ["Ice cream", 15]];

//47 task. Create a function called reusableFunction which prints the string Hi World to the dev console. Call the function.

function reusableFunction() {
	console.log("Hi World");
}
reusableFunction();

//48 task. Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console. Call the function with two numbers as arguments.

function functionWithArgs(firstParam, secondParam) {
	console.log(firstParam + secondParam);
}
functionWithArgs(3, 4);

//49 task. Using var, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10. Inside function fun1, assign 5 to oopsGlobal without using the var keyword.

var myGlobal = 10;

function fun1() {
	oopsGlobal = 5;
}

function fun2() {
	var output = "";
	if (typeof myGlobal != "undefined") {
		output += "myGlobal: " + myGlobal;
	}
	if (typeof oopsGlobal != "undefined") {
		output += " oopsGlobal: " + oopsGlobal;
	}
	console.log(output);
}

//50 task. The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

// Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.

function myLocalScope() {
	var myVar;
	console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);

//51 task. Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

var outerWear = "T-Shirt";

function myOutfit() {
	var outerWear = "sweater";
	return outerWear;
}

myOutfit();

//52 task. Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

function timesFive(num) {
	return num * 5;
}

//53 task. Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

var sum = 0;

function addThree() {
	sum = sum + 3;
}

function addFive() {
	sum = sum + 5;
}

addThree();
addFive();

//54 task. Call the processArg function with an argument of 7 and assign its return value to the variable processed.

var processed = 0;

function processArg(num) {
	return (num + 3) / 5;
}

processed = processArg(7);

//55 task. Add the number to the end of the array, then remove the first element of the array. The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
	arr.push(item);
	var newArr = arr.shift();
	return newArr;
}

var testArr = [1, 2, 3, 4, 5];

//56 task. Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.

function welcomeToBooleans() {

	return true;

}

//57 task. Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.

function trueOrFalse(wasThatTrue) {
	if (wasThatTrue) {
		return 'Yes, that was true';
	}
	return 'No, that was false';
}

//58 task. Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

function testEqual(val) {
	if (val == 12) { // Change this line
		return "Equal";
	}
	return "Not Equal";
}

testEqual(10);

//59 task. Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7

function testStrict(val) {
	if (val === 7) { // Change this line
		return "Equal";
	}
	return "Not Equal";
}

testStrict(10);

//60 task. The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.

function compareEquality(a, b) {
	if (a == b) { // Change this line
		return "Equal";
	}
	return "Not Equal";
}

compareEquality(10, "10");

//61 task. Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99

function testNotEqual(val) {
	if (val != 99) { // Change this line
		return "Not Equal";
	}
	return "Equal";
}

testNotEqual(10);

//62 task. Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17

function testStrictNotEqual(val) {
	if (val !== 17) { // Change this line
		return "Not Equal";
	}
	return "Equal";
}

testStrictNotEqual(10);

//63 task. Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
	if (val > 100) {  // Change this line
		return "Over 100";
	}

	if (val > 10) {  // Change this line
		return "Over 10";
	}

	return "10 or Under";
}

testGreaterThan(10);

//64 task. Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

function testGreaterOrEqual(val) {
	if (val >= 20) {  // Change this line
		return "20 or Over";
	}

	if (val >= 10) {  // Change this line
		return "10 or Over";
	}

	return "Less than 10";
}

testGreaterOrEqual(10);

//65 task. Add the less than operator to the indicated lines so that the return statements make sense.

function testLessThan(val) {
	if (val < 25) {  // Change this line
		return "Under 25";
	}

	if (val < 55) {  // Change this line
		return "Under 55";
	}

	return "55 or Over";
}

testLessThan(10);

//66 task. Add the less than or equal to operator to the indicated lines so that the return statements make sense.

function testLessOrEqual(val) {
	if (val <= 12) {  // Change this line
		return "Smaller Than or Equal to 12";
	}

	if (val <= 24) {  // Change this line
		return "Smaller Than or Equal to 24";
	}

	return "More Than 24";
}

testLessOrEqual(10);

//67 task. Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.

function testLogicalAnd(val) {

	if (val <= 50 && val >= 25) {
		return "Yes";
	}

	return "No";
}

testLogicalAnd(10);

//68 task. Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

function testLogicalOr(val) {

	if (val < 10 || val > 20) {
		return "Outside";
	}

	return "Inside";
}

testLogicalOr(15);

//69 task. Combine the if statements into a single if/else statement.

function testElse(val) {
	var result = "";
	// Only change code below this line

	if (val > 5) {
		result = "Bigger than 5";
	} else {
		result = "5 or Smaller";
	}

	// Only change code above this line
	return result;
}

testElse(4);

//70 task. Convert the logic to use else if statements.

function testElseIf(val) {
	if (val > 10) {
		return "Greater than 10";
	} else if (val < 5) {
		return "Smaller than 5";
	} else {
		return "Between 5 and 10";
	}
}

testElseIf(7);

//71 task. Change the order of logic in the function so that it will return the correct statements in all cases.

function orderMyLogic(val) {
	if (val < 5) {
		return "Less than 5";
	} if (val < 10) {
		return "Less than 10";
	} else {
		return "Greater than or equal to 10";
	}
}

orderMyLogic(7);

//72 task. Write chained if/else if statements to fulfill the following conditions:
// num < 5 - return Tiny
// num < 10 - return Small
// num < 15 - return Medium
// num < 20 - return Large
// num >= 20 - return Huge

function testSize(num) {
	// Only change code below this line
	if (num < 5) {
		return 'Tiny';
	} else if (num < 10) {
		return 'Small';
	} else if (num < 15) {
		return 'Medium';
	} else if (num < 20) {
		return 'Large';
	} else if (num >= 5) {
		return 'Huge';
	}

	return "Change Me";
	// Only change code above this line
}

testSize(7);

//73 task. Golf CodePassed

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
	// Only change code below this line
	if (strokes == 1) {
		return names[0];
	} else if (strokes <= par - 2) {
		return names[1];
	} else if (strokes == par - 1) {
		return names[2];
	} else if (strokes == par) {
		return names[3];
	} else if (strokes == par + 1) {
		return names[4];
	} else if (strokes == par + 2) {
		return names[5];
	} else if (strokes >= par + 3) {
		return names[6];
	}
	return "Change Me";
	// Only change code above this line
}

golfScore(5, 4);

//74 task. Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
	var answer = "";
	switch (val) {
		case 1:
			answer = "alpha";
			break;
		case 2:
			answer = "beta";
			break;
		case 3:
			answer = "gamma";
			break;
		case 4:
			answer = "delta";
			break;
	}
	// Only change code below this line
	// Only change code above this line
	return answer;
}

caseInSwitch(1);
