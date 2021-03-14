'use strict';

const removeWhiteSpacesArray = str =>
	str.split(' ').filter(word => word != '');

String.prototype.removeDuplicates = function () {
	const arr = removeWhiteSpacesArray(this),
		result = [];

	arr.forEach(item => {
		if (!result.includes(item)) {
			result.push(item);
		}
	});

	return result.join(' ');
};

let str = "Giant Spiders?   What’s next? Giant Snakes?";
console.log(str);// Giant Spiders?   What’s next? Giant Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?
str = str.removeDuplicates();
console.log(str);// Giant Spiders? What’s next? Snakes?
str = ". . . . ? . . . . . . . . . . . ";
console.log(str);
// . . . . ? . . . . . . . . . . .
str = str.removeDuplicates();
console.log(str);// . ?