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









