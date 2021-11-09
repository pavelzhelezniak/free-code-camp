// 1 task. Palindrome Checker

function palindrome(str) {
	str = str.toLowerCase().match(/[a-z0-9]/g).join('');
	let newStr = str.split('').reverse().join('');
	return newStr === str;
}

console.log(palindrome("eye"));