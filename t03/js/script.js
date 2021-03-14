'use strict';

class Human {
	constructor(firstName, lastName, gender, age, calories) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.age = age;
		this.calories = calories;
		this.firtTimer = setTimeout(() => alert("You are hungry!"), 5000);
		this.timer = setInterval(() => {
			this.calories -= 200;
			if (this.calories < 200) {
				alert("You are hungry!");
			}
			if (this.calories < 0) {
				this.calories = 0;
			}
		}, 60000);
	}

	sleepFor(seconds) {
		let i = seconds;
		alert(`I'm sleeping for the ${seconds} of seconds`);
		const timer = setInterval(() => {
			if (i <= 0) {
				alert("I'm awake now");
				clearInterval(timer);
			} else {
				i--;
				console.log(`I'm sleeping for the ${i} of seconds`);
			}
		}, 1000);
	}

	feed() {
		if (this.calories > 500) {
			alert("I'm not hungry");
		} else {
			let i = 0;
			alert("Nom nom nom");
			const timer = setInterval(() => {
				if (i >= 10) {
					this.calories += 200;
					if (this.calories > 500) {
						alert("I'm still hungry");
					}
					clearInterval(timer);
				} else {
					i++;
					console.log("Nom nom nom");
				}
			}, 1000);
		}
	}
}

class Superhero extends Human {
	constructor(firstName, lastName, gender, age, calories) {
		super(firstName, lastName, gender, age, calories);
	}

	fly() {
		let i = 0;
		alert("I'm flying!");
		const timer = setInterval(() => {
			if (i >= 10) {
				clearInterval(timer);
			} else {
				i++;
				console.log("I'm flying!");
			}
		}, 1000);
	}

	fightWithEvil() {
		alert('Khhhh-chh... Bang-g-g-g... Evil is defeated!');
	}
}

let human = new Human("Ilya", "Tsokota", "male", 20, 400);


const title = document.querySelector('.title'),
	img = document.querySelector('.body__img'),
	bodyBtns = document.querySelectorAll('.body__btn'),
	toHeroBtn = document.querySelector('.body__btn-tohero');


toHeroBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (human.calories > 500) {
		human = new Superhero(human.firstName, human.lastName, human.gender, human.age, human.calories);
		toHeroBtn.style.display = 'none';
		bodyBtns.forEach(btn => btn.classList.remove('hide'));
		img.classList.add('body__img--hero');
		title.textContent = "You are Superhero!";
	} else {
		alert("Low in calories");
	}
});

bodyBtns[0].addEventListener('click', (e) => {
	e.preventDefault();
	const seconds = prompt("Write count seconds", "5");
	human.sleepFor(seconds);
});


bodyBtns[1].addEventListener('click', (e) => {
	e.preventDefault();
	human.feed();
});


bodyBtns[2].addEventListener('click', (e) => {
	e.preventDefault();
	human.fly();
});


bodyBtns[3].addEventListener('click', (e) => {
	e.preventDefault();
	human.fightWithEvil();
});