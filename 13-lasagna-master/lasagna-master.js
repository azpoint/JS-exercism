/// <reference path="./global.d.ts" />

// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timeLeft) {
	if (timeLeft === 0) return "Lasagna is done.";
	else if (!timeLeft) return "You forgot to set the timer.";
	else if (timeLeft !== 0) return "Not done, please wait.";
}

export function preparationTime(layers, layerTime = 2) {
	return layers.length * layerTime;
}

export function quantities(layers) {
	return {
		noodles: layers.filter(layer => layer === "noodles").length * 50,
		sauce: layers.filter(layer => layer === "sauce").length * 0.2
	}
	/*
	const totalQty = {
		noodles: 0,
		sauce: 0,
	};

	layers.forEach((layer) => {
		if (layer === "noodles") totalQty.noodles += 50;
		else if (layer === "sauce") totalQty.sauce += 0.2;
	});

	return totalQty;
	*/
}

export function addSecretIngredient(friendList, myList) {
	myList.push(friendList[friendList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
	const newPortions = { ...recipe }; // Object.assign({}, recipe);
	for (let item in newPortions) {
		newPortions[item] = (newPortions[item] / 2) * portions;
	}

	return newPortions;
}
