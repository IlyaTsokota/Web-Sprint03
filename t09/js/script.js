'use strict';

let validator = {
    get(target, prop) {
        let value = target[prop];
        if (typeof value === 'undefined') {
            return false;
        } else {
            console.log(`Trying to access the property '${prop}'...`);
            return value;
        }
    },
    set(target, prop, val) {
        if (prop === 'age' && typeof val !== 'Number' && !Number.isInteger(val)) {
            console.log(`Uncaught TypeError: The age is not an integer`);
        } else if (val < 0 || val > 200) {
            console.log(`Uncaught RangeError: The age is invalid`);
        } else {
            console.log(`Setting value '${val}' to '${prop}' `);
            target[prop] = val;
        }
        return true;
    }

}

let person = new Proxy({}, validator);
person.age = 100;
// Setting value '100' to 'age'
console.log(person.age);
// Trying to access the property'age'...
// 100
person.gender = "male";
// Setting value'male' to 'gender'
person.age = 'young';
// Uncaught TypeError: The age is not an integer
person.age = 300;
// Uncaught RangeError: The age is invalid