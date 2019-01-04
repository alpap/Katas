var uniqueInOrder = function(iterable) {
	return (typeof iterable == 'object' ? iterable : iterable.split('')).reduce(function(
		acc,
		cur,
		index,
		arr,
	) {
		cur == arr[index - 1] ? acc : acc.push(cur);
		return acc;
	},
	[]);
};

// Instructions
// Output
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:
console.log(uniqueInOrder('AAAABBBCCDAABBB')); //== ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')); //== ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); //== [1, 2, 3]

// best
var bestuniqueInOrder = function(iterable) {
	return [].filter.call(iterable, function(a, i) {
		return iterable[i - 1] !== a;
	});
};

// most readable
function otheruniqueInOrder(it) {
	var result = [];
	var last;

	for (var i = 0; i < it.length; i++) {
		if (it[i] !== last) {
			result.push((last = it[i]));
		}
	}

	return result;
}
