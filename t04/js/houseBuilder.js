'use strict';

function HouseBuilder(address, description, owner, size, roomCount) {
	this.address = address;
	this.description = description;
	this.owner = owner;
	this.size = size;
	this.roomCount = roomCount;
	this._averageBuildSpeed = 0.5;
	this.date = new Date();
	this.getDaysToBuild = function () {
		return Math.floor(this.size / this._averageBuildSpeed);
	};
}