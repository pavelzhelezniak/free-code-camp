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