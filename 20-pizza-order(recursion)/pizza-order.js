/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
	let total = 0;

	switch (pizza) {
		case "Margherita":
			total += 7;
			break;
		case "Caprese":
			total += 9;
			break;
		case "Formaggio":
			total += 10;
			break;
		default:
			break;
	}

	extras.forEach((item) => {
		if (item === "ExtraSauce") total += 1;
		else if (item === "ExtraToppings") total += 2;
	});

	return total;
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
	return pizzaOrders.reduce(
		(total, order) => total + pizzaPrice(order.pizza, ...order.extras),
		0
	);
}
