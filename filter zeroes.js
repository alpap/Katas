var moveZeros = function(arr) {
	return arr
		.reverse()
		.reduce(function(acc, cur) {
			if (cur !== 0) acc.push(cur);
			else acc.unshift(cur);
			return acc;
		}, [])
		.reverse();
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));

var bestmoveZeros = function(arr) {
	return arr
		.filter(function(x) {
			return x !== 0;
		})
		.concat(
			arr.filter(function(x) {
				return x === 0;
			}),
		);
};
