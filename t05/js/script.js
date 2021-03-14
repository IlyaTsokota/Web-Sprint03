'use strict';

const guestList = new WeakSet();

// Test guestList
let john = { name: "John" },
	pete = { name: "Pete" },
	mary = { name: "Mary" };

guestList.add(john);
guestList.add(pete);
guestList.add(john);

console.log(guestList);

console.log(guestList.has(john)); // true


guestList.delete(pete);

console.log(guestList);


const menu = new Map();
let menuItems = ["Оливье",
	"Картошка",
	"Макароны"];

menu.set(menuItems[0], 250);
menu.set(menuItems[1], 452);
menu.set(menuItems[2], 155);

for (let entry of menu) {
	console.log(entry);
}

const bankVault = new WeakMap();
let credentials = [{ login: "hi" }, { login: "kek" }];

bankVault.set(credentials[0], 555);
bankVault.set(credentials[1], 110);

console.log(bankVault.get(credentials[1]));


const coinCollection = new Set();

let coins = ["Пятка", "10 коп", "5 Коп"];

coinCollection.add(coins[0]);
coinCollection.add(coins[1]);
coinCollection.add(coins[2]);

console.log(coinCollection);
