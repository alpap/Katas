function expandedFormFirstIteration(num) {
	var str = num.toString();
	var result = '';
	for (let index = 0; index < str.length; index++) {
		if (parseInt(str[index]) > 0) {
			result += str[index].toString();
			let zeroes = str.length - (index + 1);
			for (let i = 0; i < zeroes; i++) {
				result += '0';
			}
			result += ' + ';
		}
	}
	return result.substring(0, result.length - 3);
}

const expandedFormBest = n =>
	n
		.toString()
		.split('')
		.reverse()
		.map((a, i) => a * Math.pow(10, i))
		.filter(a => a > 0)
		.reverse()
		.join(' + ');

function expandedForm(num) {
	return String(num)
		.split('')
		.map((num, index, arr) => num + '0'.repeat(arr.length - index - 1))
		.filter(num => Number(num) != 0)
		.join(' + ');
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'
