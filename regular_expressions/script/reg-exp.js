// 1 task. Using the Test Method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// 2 task. Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

// 3 task. Match a Literal String with Different Possibilities

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

// 4 task. Ignore Case While Matching

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);

// 5 task. Extract Matches

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

// 6 task. Find More Than the First Match

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

// 7 task. Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

// 8 task. Match Single Character with Multiple Possibilities

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

// 9 task. Match Letters of the Alphabet

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

// 10 task. Match Numbers and Letters of the Alphabet

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

// 11 task. Match Single Characters Not Specified

let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line