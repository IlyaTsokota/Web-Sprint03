'use strict';

class Human {
	constructor(firstName, lastName, gender, age, calories) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.age = age;
		this.calories = calories;
		this.firtTimer = setTimeout(() => addCardItem("You are hungry!", 4, 'hungry', false), 5000);
		this.timer = setInterval(() => {
			this.calories -= 200;
			if (this.calories < 200) {
				addCardItem("You are hungry!", 4, 'hungry2', false);
			}
			if (this.calories < 0) {
				this.calories = 0;
			}
		}, 60000);
	}

	sleepFor(seconds) {
		let i = seconds;
		addCardItem(`I'm sleeping for the ${seconds} of seconds`, seconds, 'sleep');
		
		const timer = setInterval(() => {
			if (i <= 0) {
				addCardItem("I'm awake now", 4, 'awake', false);
				clearInterval(timer);
			} else {
				i--;
			}
		}, 1000);
	}

	feed() {
		if (this.calories > 500) {
			addCardItem("I'm not hungry", 4, 'feed', false);
		} else {
			let i = 0;
			addCardItem("Nom nom nom", 10, 'feed');
			const timer = setInterval(() => {
				if (i >= 10) {
					this.calories += 200;
					if (this.calories > 500) {
						addCardItem("I'm still hungry", 4, 'feedAnswer', false);
					}
					clearInterval(timer);
				} else {
					i++;
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
		addCardItem("I'm flying!", 10, 'fly', false)
		const timer = setInterval(() => {
			if (i >= 10) {
				clearInterval(timer);
			} else {
				i++;
			}
		}, 1000);
	}

	fightWithEvil() {
		addCardItem('Khhhh-chh... Bang-g-g-g... Evil is defeated!', 5, 'fightWithEvil', false)
	}
}


let human = new Human("Ilya", "Tsokota", "male", 20, 400);


const title = document.querySelector('.title'),
	img = document.querySelector('.body__img'),
	bodyBtns = document.querySelectorAll('.body__btn'),
	toHeroBtn = document.querySelector('.body__btn-tohero'),
	cardItems = document.querySelector('.card__items');

function addCardItem(msg, time, classTimer = '', isBlock = true){
	if(isBlock){
		blockBtns();
	}
	const code = `
		<div class="card__item">
				<div class="card__item-msg">${msg}</div>
				<div class="card__item-timer ${classTimer}">${time}</div>
		</div>
	`;
	cardItems.insertAdjacentHTML('afterbegin', code);
	let i = 0;
	const timerItem = document.querySelector(`.${classTimer}`),
	parent = timerItem.parentElement,
	timer = setInterval(()=>{
		if(+timerItem.textContent <= 1){
			unblockBtns();
			parent.remove();
			clearInterval(timer);
		}
		timerItem.textContent = time - i++;
	}, 1000);
}

function blockBtns(){
	toHeroBtn.classList.add('block');
	bodyBtns.forEach(item=> item.classList.add('block'));
}

function unblockBtns(){
	toHeroBtn.classList.remove('block');
	bodyBtns.forEach(item=> item.classList.remove('block'));
}

toHeroBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (human.calories > 500) {
		human = new Superhero(human.firstName, human.lastName, human.gender, human.age, human.calories);
		toHeroBtn.style.display = 'none';
		bodyBtns.forEach(btn => btn.classList.remove('hide'));
		img.classList.add('body__img--hero');
		title.textContent = "You are Superhero!";
	} else {
		addCardItem("Low in calories", 5, 'tohero', false)
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