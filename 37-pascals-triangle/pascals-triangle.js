//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (nRows) => {
	let rRows = [[1], [1, 1]];

	if (nRows === 0) return [];
	if (nRows === 1) return [[1]];
	if (nRows === 2) return rRows;

	for (let i = 1; i < nRows - 1; i++) {
		let Irow = [];

		for (let i2 = 0; i2 < rRows.length - 1; i2++) {
			if (i2 === 0) Irow.push(1);
			Irow.push(rRows[i][i2] + rRows[i][i2 + 1]);
			if (i2 === i - 1) Irow.push(1);
		}

		rRows.push(Irow);
	}
	return rRows;
};

// rows(3)
