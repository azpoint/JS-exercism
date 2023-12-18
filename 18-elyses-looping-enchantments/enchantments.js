// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
	let typeCount = 0;

	stack.forEach((num) => {
		if (num === card) typeCount++;
	});
	
	return typeCount;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
	let odd = 0;
	let even = 0;

	for (let item of stack) {
		if (type && item % 2 === 0) even++;
		else if (!type && item % 2 !== 0) odd++;
	}

	return type ? even : odd;
}
