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

function destroyer(arr) {
	const argsArray = [...arguments];
	const newArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (!argsArray.includes(arr[i])) {
			newArray.push(arr[i])
		}
	}
	return newArray;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));