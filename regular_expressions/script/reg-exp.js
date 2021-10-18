// 1 task. Using the Test Method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// 2 task. Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

// 2 task. Match a Literal String with Different Possibilities

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);