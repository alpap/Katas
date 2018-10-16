function getMiddle(s) {
	let len = s.length / 2;
	return s.length % 2 > 0 ? s[Math.floor(len)] : s[len - 1] + s[len];
}

// getMiddle("test")  "es"

// getMiddle("testing")  "t"

// getMiddle("middle")  "dd"

// getMiddle("A")  "A"

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
console.log(getMiddle('A'));

//best
function getMiddleBest(s) {
	return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

console.log(getMiddleBest('test'));
console.log(getMiddleBest('testing'));
console.log(getMiddleBest('middle'));
console.log(getMiddleBest('A'));
