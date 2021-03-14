'use strict';

let houseMixin = {
	wordReplace(oldWord, newWord) {
		let arr = this.description.split(' ');
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === oldWord) {
				arr[i] = newWord;
			}
		}
		this.description = arr.join(' ');
	},
	wordInsertAfter(prevWord, insertWorld) {
		const arr = this.description.split(' '),
			newArr = [];

		for (let i = 0, j = 0; i < arr.length; i++) {
			newArr[j++] = arr[i];
			if (arr[i] === prevWord) {
				newArr[j++] = insertWorld;
			}
		}
		this.description = newArr.join(' ');
	},
	wordDelete(word) {
		this.description = this.description.split(' ').filter(item => item !== word.trim()).join(' ');

	},
	wordEncrypt() {
		this.description = this.description.replace(/[A-Za-z]/g, function (c) {
			return String.fromCharCode(c.charCodeAt(0) + (c.toUpperCase() <= "M" ? 13 : -13));
		});
	},
	wordDecrypt() {
		let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
			b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
		this.description = this.description.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);

	}
};

const house = new HouseBuilder('88 Crescent Avenue',
	'Spacious town house with wood flooring, 2-car garage, and a back patio.', 'J. Smith', 110, 5);

Object.assign(house, houseMixin);
console.log(house.getDaysToBuild());
// 220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.
house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.
house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.
house.wordInsertAfter("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.
house.wordEncrypt();
console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.
house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio