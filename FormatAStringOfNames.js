function list(names) {
	if (names.length > 1) {
		var gotnames = names.map(n => n.name);
		gotnames.splice(
			gotnames.length - 2,
			2,
			gotnames[gotnames.length - 2] + ' & ' + gotnames[gotnames.length - 1],
		);
		return gotnames.join(', ');
	}
	return names.length === 1 ? names[0].name : '';
}

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
// returns 'Bart, Lisa & Maggie'

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]));
// returns 'Bart & Lisa'

console.log(list([{ name: 'Bart' }]));
// returns 'Bart'

console.log(list([]));
// returns ''

function list2(names) {
	return names.reduce(function(prev, current, index, array) {
		if (index === 0) {
			return current.name;
		} else if (index === array.length - 1) {
			return prev + ' & ' + current.name;
		} else {
			return prev + ', ' + current.name;
		}
	}, '');
}

function list3(names) {
	var xs = names.map(p => p.name);
	var x = xs.pop();
	return xs.length ? xs.join(', ') + ' & ' + x : x || '';
}

function list4(names) {
	return names
		.map(o => o.name)
		.join(', ')
		.replace(/^(.*)(, )(.*)$/, '$1 & $3');
}

function list5(names) {
	return names
		.map(item => item.name)
		.join(', ')
		.replace(/,\s([^,]+)$/, ' & $1');
}
