function solution(roman) {
	function GetInt(character) {
		switch (character) {
			case 'M':
				return 1000;
				break;
			case 'D':
				return 500;
				break;
			case 'C':
				return 100;
				break;
			case 'L':
				return 50;
				break;
			case 'X':
				return 10;
				break;
			case 'V':
				return 5;
				break;
			case 'I':
				return 1;
				break;
		}
	}
	let intArray = roman
		.split('')
		.reverse()
		.map(char => GetInt(char))
		.reduce(function(accumulator, currentValue, index, intarray) {
			if (currentValue >= accumulator || currentValue == intarray[index - 1])
				accumulator += currentValue;
			else accumulator -= currentValue;
			return accumulator;
		}, 0);
	return intArray;
}

console.log(solution('IV'));
console.log(solution('XIX'));
console.log(solution('IX'));
console.log(solution('XXI'));
console.log(solution('MMVIII'));
console.log(solution('MCMXC'));
console.log(solution('MDCLXVI'));
console.log(solution('MDCLXIV'));

function bestsolution(roman) {
	var conversion = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};

	return roman
		.match(/CM|CD|XC|XL|IX|IV|\w/g)
		.reduce((accum, roman) => accum + conversion[roman], 0);
}
