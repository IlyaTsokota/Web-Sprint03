'use strict';


class Timer {
	constructor(title, delay, stopCount) {
		this.title = title;
		this.delay = delay;
		this.stopCount = stopCount;
	}

	start() {
		console.log(`Timer ${this.title} started (delay=${this.delay},  stopCount=${this.stopCount--})`);
		this.timer = setInterval(() => this.tick(), 1000);
	}

	tick() {
		if (this.stopCount < 0) {
			this.stop();
		} else {
			console.log(`Timer ${this.title} Tick! | cycles left ${this.stopCount--}`);
		}
	}

	stop() {
		console.log(`Timer ${this.title} stopped`);
		clearInterval(this.timer);
	}
}

function runTimer(title, delay, stopCount) {
	new Timer(title, delay, stopCount).start();
}
runTimer("Bleep", 1000, 5);
