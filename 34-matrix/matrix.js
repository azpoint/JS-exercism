//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
	constructor(string) {
		this.string = string.split("\n");
	}

	get rows() {
		return this.string.map((row) =>
			row.split(" ").map((number) => Number(number))
		);
	}

	get columns() {
		return this.rows[0].map((_v, i) => {
			return this.rows.map((row) => row[i]);
		});
	}
}
