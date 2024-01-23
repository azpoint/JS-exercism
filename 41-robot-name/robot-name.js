//Set data structure to avoid name repetition 
const NAMES = new Set()

export class Robot {
	constructor() {
		//Build name on method call
		this.buildName()
	}

	buildName() {
		//Clear name before buildint it
		this._name = "";
		//While is not empty OR the current _name IS in the list. Which means it is repeated so must build a new name.
		while(!this._name || NAMES.has(this._name)) {
			//Create function to build each number and letter from ASCII
			const letter = () => String.fromCharCode(Math.floor(90 - Math.random() * 26))
			const number = () => Math.floor(Math.random() * 10)
			//String litteral to call builders functions on every character
			this._name = `${letter()}${letter()}${number()}${number()}${number()}`
		}
		//Put name on the Setlist
		NAMES.add(this._name)
	}

	reset() {
		this.buildName();
	}

	//get syntax to execute code when the name property is called from outside. Like (robot.name). Returns the current name of the instance called.
	get name() {
		return this._name
	}

}

//Clear name list on calling releaseNames method
Robot.releaseNames = () => {NAMES.clear()};
