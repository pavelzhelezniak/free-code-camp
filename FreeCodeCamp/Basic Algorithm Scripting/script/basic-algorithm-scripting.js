// 1 task. Convert Celsius to Fahrenheit

function convertToF(celsius) {
	let fahrenheit = (celsius * 9 / 5) + 32;
	return fahrenheit;
}

convertToF(30);

// 2 task. Reverse a String

function reverseString(str) {
	return str.split('').reverse().join('');
}

reverseString("hello");

// 3 task. Factorialize a Number

function factorialize(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * factorialize(num - 1);
	}
}

console.log(factorialize(5));

// 4 task. Find the Longest Word in a String

function findLongestWordLength(str) {
	return Math.max(...str.split(' ').map(item => item.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// 5 task. Return Largest Numbers in Arrays

function largestOfFour(arr) {
	const newArray = [];
	for (let i = 0; i < arr.length; i++) {
		for (let k = 0; k < arr[i].length; k++) {

		}
		newArray.push(Math.max(...arr[i]));
	}
	return newArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// 6 task. Confirm the Ending

function confirmEnding(str, target) {
	const newStr = str.slice(-target.length);
	if (newStr === target) {
		return true;
	} else {
		return false;
	}
}

confirmEnding("Bastian", "n");

// 7 task. Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
	let newStr = '';
	if (num <= 0) {
		return '';
	} else {
		do {
			newStr += str;
			num--;
		} while (num > 0);
		return newStr;
	}
}

repeatStringNumTimes("abc", 3);

// 8 task. Truncate a String

function truncateString(str, num) {
	if (str.length > num) {
		return str.slice(0, num) + '...';
	} else {
		return str;
	}
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// 9 task. Finders Keepers

function findElement(arr, func) {
	let num = 0;
	for (let i = 0; i < arr.length; i++) {
		if (func(arr[i])) {
			num = arr[i];
			break;
		} else {
			num = undefined;
		}
	}
	return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// 10 task. Boo who

function booWho(bool) {
	return typeof bool === "boolean";
}

booWho(null);

// 11 task. Title Case a Sentence

function titleCase(str) {
	str = str.split(' ');

	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].toLowerCase().split('');
		str[i][0] = str[i][0].toUpperCase();
		str[i] = str[i].join('');
	}

	return str.join(' ');
}

titleCase("I'm a little tea pot");

// 12 task. Title Case a Sentence

function frankenSplice(arr1, arr2, n) {
	const localArray = arr2.slice();
	localArray.splice(n, 0, ...arr1);
	return localArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// 13 task. Falsy Bouncer

function bouncer(arr) {
	const newArr = [];
	arr.forEach((item) => {
		if (item) {
			newArr.push(item);
		}
	});
	return newArr;
}

bouncer([7, "ate", "", false, 9]);

// 14 task. Where do I Belong

function getIndexToIns(arr, num) {

	return arr.concat(num).sort((a, b) => a - b).indexOf(num);

}

getIndexToIns([40, 60], 50);

// 15 task. Where do I Belong

function mutation(arr) {
	let substr = arr[1].toLowerCase();
	let newArr = arr[0].toLowerCase();
	for (let i = 0; i < substr.length; i++) {
		if (newArr.indexOf(substr[i]) < 0) {
			return false;
		}
	}
	return true;
}

mutation(["hello", "hey"]);

// 16 task. Chunky Monkey

function chunkArrayInGroups(arr, size) {
	const newArray = [];
	let index = 0;

	while (index < arr.length) {
		newArray.push(arr.slice(index, index + size));
		index += size;
	}
	return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);