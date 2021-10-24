// 1 task. Sum All Numbers in a Range

function sumAll(arr) {
	var firstElement = arr[0];
	var secondElement = arr[1];
	var sum = 0;
	if (firstElement < secondElement) {
		for (let i = firstElement; i <= secondElement; i++) {
			sum += i;
		}
		return sum;
	} else if (firstElement > secondElement) {
		for (let i = firstElement; i >= secondElement; i--) {
			sum += i;
		}
		return sum;
	}
}

console.log(sumAll([4, 1]));

// 2 task. Diff Two Arrays

function diffArray(arr1, arr2) {
	var newArr = [];

	for (let i = 0; i < arr1.length; i++) {
		if (!arr2.includes(arr1[i])) {
			newArr.push(arr1[i]);
		}
	}

	for (let i = 0; i < arr2.length; i++) {
		if (!arr1.includes(arr2[i])) {
			newArr.push(arr2[i]);
		}
	}

	return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// 3 task. Seek and Destroy

/* function destroyer(arr) {
	const argsArray = [...arguments];
	const newArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (!argsArray.includes(arr[i])) {
			newArray.push(arr[i])
		}
	}
	return newArray;
} */

function destroyer(arr) {
	const argsArray = [...arguments];
	return arr.filter(item => !argsArray.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// 4 task. Wherefore art thou

function whatIsInAName(collection, source) {

	var sourceKeys = Object.keys(source)
	var newArr = collection.filter(function (object) {

		for (var i = 0; i < sourceKeys.length; i++) {

			if (!object.hasOwnProperty(sourceKeys[i]) || object[sourceKeys[i]] !== source[sourceKeys[i]]) {
				return false;
			}

		}
		return true;
	})

	return newArr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

// 5 task. Spinal Tap Case


// 6 task. Pig Latin

function translatePigLatin(str) {
	let pigLatin = '';
	let vowelRegEx = /[aeiou]/gi;
	if (str[0].match(vowelRegEx)) {
		pigLatin = str + 'way';
	} else if (str.match(vowelRegEx) === null) {
		// Check if the string contains only consonants
		pigLatin = str + "ay";
	} else {

		var vowelIndice = str.indexOf(str.match(vowelRegEx)[0]);
		pigLatin = str.substring(vowelIndice) + str.substring(0, vowelIndice) + "ay";

	}

	return pigLatin;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("oveglay"));

// 15 task. Drop it

function dropElements(arr, func) {
	var newArray;
	for (let i = 0; i < arr.length; i++) {

		if (func(arr[i])) {
			newArray = arr.slice(i);
			break;
		} else if (!func(arr[arr.length - 1])) {
			newArray = [];
		} else if (!func(arr[i])) {
			continue;
		}

	}
	return newArray;
}

console.log(dropElements([1, 2, 3], function (n) { return n < 3; }));
console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; }));
console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; }));