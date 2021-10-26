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

// 16 task. Steamroller

function steamrollArray(arr) {
	const newArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (!Array.isArray(arr[i])) {
			newArray.push(arr[i]);
		} else {
			newArray.push(...steamrollArray(arr[i]));
			;
		}
	}
	return newArray;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

// 17 task. Binary Agents

function binaryAgent(str) {

	return str.split(' ').map((item) => String.fromCharCode(parseInt(item, 2))).join('');

}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// 18 task. Everything Be True

function truthCheck(collection, pre) {

	return collection.every((item) => {
		return item.hasOwnProperty(pre) && Boolean(item[pre]);

	});
}

console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male", "age": 0 }, { "user": "Dipsy", "sex": "male", "age": 3 }, { "user": "Laa-Laa", "sex": "female", "age": 5 }, { "user": "Po", "sex": "female", "age": 4 }], "age"));

// 19 task. Arguments Optional

function addTogether() {
	const [firstArgument, secondArgument] = arguments
	if (typeof (firstArgument) !== 'number') {
		return undefined;
	}
	else if (secondArgument === undefined) {
		function addSecondArgument(secondArgument) {
			if (typeof (secondArgument) !== 'number') {
				return undefined;
			} else {
				return firstArgument + secondArgument;
			}
		}
		return addSecondArgument;
	} else if (typeof (secondArgument) !== 'number') {
		return undefined;
	} else {
		return firstArgument + secondArgument;
	}
}

console.log(addTogether(2, 3));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));

// 20 task. Make a Person

var Person = function (firstAndLast) {
	// Only change code below this line
	// Complete the method below and implement the others similarly
	var fullName = firstAndLast;

	this.getFullName = function () {
		return fullName;
	};

	this.getLastName = function () {
		return fullName.split(' ')[1];
	};

	this.getFirstName = function () {
		return fullName.split(' ')[0];
	};

	this.setFirstName = function (firstName) {
		fullName = firstName + ' ' + fullName.split(' ')[1];
	};

	this.setLastName = function (lastName) {
		fullName = fullName.split(' ')[0] + ' ' + lastName;
	};

	this.setFullName = function (firstAndLast) {
		fullName = firstAndLast;
	};

};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
bob.setFirstName("Haskell")
console.log(bob.getFullName());
bob.setLastName("Curry");
console.log(bob.getFullName());
bob.setFullName("Paval Zheleznyak");
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());

// 21 task. Map the Debris

function orbitalPeriod(arr) {

	var GM = 398600.4418;
	var earthRadius = 6367.4447;
	var a = 2 * Math.PI;
	var newArray = [];

	var getOrbitalPeriod = function (object) {
		var c = Math.pow(earthRadius + object.avgAlt, 3);
		var b = Math.sqrt(c / GM);
		var orbPeriod = Math.round(a * b);

		return { name: object.name, orbitalPeriod: orbPeriod };

	};

	for (var element in arr) {

		newArray.push(getOrbitalPeriod(arr[element]));

	}

	return newArray;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);