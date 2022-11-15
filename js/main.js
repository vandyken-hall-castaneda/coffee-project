"use strict";

(function () {
//////// CLEAR LOCAL STORAGE
// window.localStorage.clear()
// // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
	let coffees = [
		{id: 1, name: 'Light City', roast: 'light'},
		{id: 2, name: 'Half City', roast: 'light'},
		{id: 3, name: 'Cinnamon', roast: 'light'},
		{id: 4, name: 'City', roast: 'medium'},
		{id: 5, name: 'American', roast: 'medium'},
		{id: 6, name: 'Breakfast', roast: 'medium'},
		{id: 7, name: 'High', roast: 'dark'},
		{id: 8, name: 'Continental', roast: 'dark'},
		{id: 9, name: 'New Orleans', roast: 'dark'},
		{id: 10, name: 'European', roast: 'dark'},
		{id: 11, name: 'Espresso', roast: 'dark'},
		{id: 12, name: 'Viennese', roast: 'dark'},
		{id: 13, name: 'Italian', roast: 'dark'},
		{id: 14, name: 'French', roast: 'dark'},
	];
	getData();
	let globalCoffee = coffees.map((d) => d.name);
	let count = coffees[coffees.length - 1].id + 1;
	coffeePrint();
	function sort(num) {                                     /*takes filter selection and only prints valid information*/
		let filter = [];
		if (num === `1`) {
			filter = coffees.filter((d) => d.roast === `light`);
		} else if (num === `2`) {
			filter = coffees.filter((d) => d.roast === `medium`);
		} else if (num === `3`) {
			filter = coffees.filter((d) => d.roast === `dark`);
		} else {
			filter = coffees;
		}
		globalCoffee = filter.map((d) => d.name);
		coffeePrint();
	}
	function coffeePrint(str) {
		$(`#coffeeDisplay`).empty();                               /*loop to print objects into container*/
		if (str === `` || str === undefined) {
			globalCoffee.forEach((d) => $(`#coffeeDisplay`).append(`<div class="anime col p-1 fs-3">${d}</div>`));
		} else {
			str = str.toLowerCase();
			let filter = globalCoffee.filter((d) => d.toLowerCase().includes(str));
			filter.forEach((d) => $(`#coffeeDisplay`).append(`<div class="anime col p-1 fs-3">${d}</div>`));
		}
	}
	function getData() {                                             /*send and rewrite code for local storage*/
		for (let i = 15; i < 50; i++) {
			let current = JSON.parse(window.localStorage.getItem(`${i}`))
			if (current === null) {
				break;
			} else {
				coffees.push(current);
			}
		}
	}
///////////// LISTENERS ////////////////////////////
	$(`#search`).keyup(() => {                           /*search bar updater*/
		let search = $(`#search`).val().toLowerCase();
		coffeePrint(search);
	})
	$(`#options`).change(() => {                         /*drop down roast selector*/
		let test = $(`#options`).val();
		if (test === `Filter by Roast`) {
			test = undefined;
		}
		$(`#search`).val(``);
		sort(test);
	})
	$(`#save`).click(() => {                          /*save/add new coffee*/
		let newName = $(`#name`).val();
		let newRoast = $(`#optionsRoast`).val();
		if (newRoast === `1`) {
			newRoast = `light`
		} else if (newRoast === `2`) {
			newRoast = `medium`
		} else if (newRoast === `3`) {
			newRoast = `dark`
		}
		const coffee = {
			id: count,
			name: newName,
			roast: newRoast,
		}
		window.localStorage.setItem(count, JSON.stringify(coffee));     /*converting our object into jason for local storage*/
		count++;
		coffees.push(coffee);
		$(`#name`).val(``);
		$(`#optionsRoast`).val(`Roast`);
		$(`#options`).val(`Filter by Roast`);
		$(`#search`).val(``);
		sort();
	})
})();
//////////////////////////////////////////////////