function toWeirdCase(string) {
	return string.split(' ').reduce(function(acc, cur, index, arr) {
		return acc
			.concat(
				cur.split('').reduce(function(acc, cur, indexinter) {
					return acc.concat(indexinter % 2 == 0 ? cur.toUpperCase() : cur);
				}, ''),
			)
			.concat(index != arr.length - 1 ? ' ' : '');
	}, '');
}

console.log(toWeirdCase('String'));
//=> returns "StRiNg"
console.log(toWeirdCase('Weird string case'));
//=> returns "WeIr

function othertoWeirdCase(string) {
	return string
		.split(' ')
		.map(function(word) {
			return word
				.split('')
				.map(function(letter, index) {
					return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
				})
				.join('');
		})
		.join(' ');
}

function besttoWeirdCase(string) {
	return string.replace(/(\w{1,2})/g, m => m[0].toUpperCase() + m.slice(1));
}
