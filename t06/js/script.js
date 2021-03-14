'use strict';

function* generator() {
	let prevResult = 1, question;
	do {
		question = prompt(`Previous result: ${prevResult}. Enter a new number:`, "");
		if (+question > 10000) {
			yield prevResult = 1;
		} else {
		 	yield prevResult += +question;
		}
	} while (isValid(question));
	alert("Invalid number!");
	return;
}

function isValid(val) {
	if (!isNaN(parseInt(val))) {
		return true;
	}
	return false;
}
let gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);