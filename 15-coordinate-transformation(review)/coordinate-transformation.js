// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */

export function translate2d(dx, dy) {
	return function move2Right(x, y) {
		return [x + dx, y + dy];
	};
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
	return function scale(x, y) {
		return [x * sx, y * sy];
	};
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} function1 the first function to apply
 * @param {function} function2 the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(function1, function2) {
	return function transformCoordinates(x, y) {
		let modifiedCoordinates = function1(x, y);

		let xCoordinate = modifiedCoordinates[0];
		let yCoordinate = modifiedCoordinates[1];

		let finalCoordinates = function2(xCoordinate, yCoordinate);

		return [finalCoordinates[0], finalCoordinates[1]];
	};
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
	let lastX;
	let lastY;
	let lastResult = [lastX, lastY];
	
	return function (x, y) {
		if (lastX === x && lastY === y) {
			return lastResult;
		} else {
			lastX = x;
			lastY = y;
			lastResult = f(x, y);
			return lastResult;
		}
	};
}
