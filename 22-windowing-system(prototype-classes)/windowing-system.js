// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
	this.width = width;
	this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
	this.width = newWidth;
	this.height = newHeight;
};

export function Position(x = 0, y = 0) {
	this.x = x;
	this.y = y;
}

Position.prototype.move = function (newX, newY) {
	this.x = newX;
	this.y = newY;
};

export class ProgramWindow {
	constructor() {
		this.screenSize = new Size(800, 600);
		this.size = new Size();
		this.position = new Position();
	}

	resize(newSize) {
		this.size.width = newSize.width < 1 ? 1 : Math.min(this.screenSize.width - this.position.x, newSize.width)
		this.size.height = newSize.height < 1 ? 1 : Math.min(this.screenSize.height - this.position.y, newSize.height)		
	}

	move(newPosition) {

		const maxX = this.screenSize.width - this.size.width;
		const maxY = this.screenSize.height - this.size.height;

		const newX = Math.max(0, Math.min(newPosition.x, maxX));
		const newY = Math.max(0, Math.min(newPosition.y, maxY));
		
		this.position.x = newX
		this.position.y = newY
	}
}

export function changeWindow(ProgramWindow) {
	ProgramWindow.resize(new Size(400, 300))
	ProgramWindow.move(new Position(100,150))
	return ProgramWindow
}
