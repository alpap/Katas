const binaryArrayToNumber = arr => {
	return parseInt(arr[0] + arr[1] + arr[2] + arr[3], 16);
};

const binaryArrayToNumber2 = arr => parseInt(arr.join(''), 2);

var array = [0, 0, 0, 1];
binaryArrayToNumber(array);
