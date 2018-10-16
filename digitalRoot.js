function digital_root(n) {
	var chars = n.toString();
	var res = chars.split('').reduce((sum, char) => sum + parseInt(char), 0);
	return chars.length > 1 ? digital_root(res) : n;
}

console.log(digital_root(16)); //7);
console.log(digital_root(456)); //6);

function digital_root(n) {
	if (n < 10) return n;

	return digital_root(
		n
			.toString()
			.split('')
			.reduce(function(acc, d) {
				return acc + +d;
			}, 0),
	);
}

function digital_root(n) {
	return ((n - 1) % 9) + 1;
}
