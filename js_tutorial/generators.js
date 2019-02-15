function * generatorFunction() { // Line 1
	console.log('This will be executed first.');
	yield 'Hello, ';   // Line 2
	console.log('I will be printed after the pause');
	yield 'World!';
  }
  const generatorObject = generatorFunction(); // Line 3
  console.log(generatorObject.next().value); // Line 4
  console.log(generatorObject.next().value); // Line 5
  console.log(generatorObject.next().value); // Line 6


  function *  generatorFunc() {
	yield 'a';
	return 'b'; // Generator ends here.
	yield 'a'; // Will never be executed.
  }

  const generatorObject2 = generatorFunc(); // Line 3
  console.log(generatorObject2.next().value); // Line 4
  console.log(generatorObject2.next().value); // Line 5
  console.log(generatorObject2.next().value); // Line 6

function * naturalNumbers() {
	let num = 1;
	while (true) {
	  yield num;
	  num = num + 1
	}
  }

  const numbers = naturalNumbers();
  console.log(numbers.next().value)
  console.log(numbers.next().value)

  function * powerSeries(number, power) {
	let base = number;
	while(true) {
	  yield Math.pow(base, power);
	  base++;
	}
  }

  function * take(n, iter) {
	let index = 0;
	for (const val of iter) {
	  if (index >= n) {
		return;
	  }
	  index = index + 1;
	  yield val;
	}
  }


let it1 = take(3, ['a', 'b', 'c', 'd', 'e'])
// a b c
let it2 = take(7, naturalNumbers());
// 1 2 3 4 5 6 7
let it3= take(5, powerSeries(3, 2));
// 9 16 25 36 49

console.log(...it1 ,",", ...it2 ,",",...it3);

// fetch example

// function fetchJson(url) {
//     return fetch(url)
//     .then(request => request.text())
//     .then(text => {
//         return JSON.parse(text);
//     })
//     .catch(error => {
//         console.log(`ERROR: ${error.stack}`);
//     });
// }

// const fetchJson = co.wrap(function * (url) {
//     try {
//         let request = yield fetch(url);
//         let text = yield request.text();
//         return JSON.parse(text);
//     }
//     catch (error) {
//         console.log(`ERROR: ${error.stack}`);
//     }
// });