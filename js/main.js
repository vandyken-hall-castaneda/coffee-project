"use strict"


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

let globalCoffee = coffees.map((d) => d.name);

coffeePrint();

function sort(num){
    let filter = [];
    if (num === `1`){
       filter = coffees.filter((d) => d.roast === `light`);
    }
    else if (num === `2`){
        filter = coffees.filter((d) => d.roast === `medium`);
    }
    else if (num === `3`){
        filter = coffees.filter((d) => d.roast === `dark`);
    }
    else {
        filter = coffees;
    }
    globalCoffee =  filter.map((d) => d.name);
    coffeePrint();
}

function coffeePrint(str){
    $(`#coffeeDisplay`).empty();
    if (str === `` || str === undefined){
        globalCoffee.forEach((d) => $(`#coffeeDisplay`).append(`<div class="col">${d}</div>`));
    }
    else{
       str = str.toLowerCase();
      let filter =  globalCoffee.filter((d)=> d.toLowerCase().includes(str))
      filter.forEach((d) => $(`#coffeeDisplay`).append(`<div class="col">${d}</div>`));
    }
}


// function displayCoffee(input){
//     if (input === undefined){
//         let coffeeName = coffees.map((d) => d.name);
//         coffeeName.forEach((d) => $(`#coffeeDisplay`).append(`<div class="col">${d}</div>`));
//     }
//     else if (input === `1`){
//         $(`#coffeeDisplay`).empty();
//         if (search === ``){
//             sort(`1`).forEach((d) => $(`#coffeeDisplay`).append(`<div class="col">${d}</div>`));
//         }
//         else {
//             sort(`1`).includes(search);
//         }
//
//     }
//     else if (input === `2`){
//         let coffeeName = coffees.filter((d) => d.roast === `medium`);
//         let displayCoffee = coffeeName.map((d) => d.name);
//         $(`#coffeeDisplay`).empty();
//         displayCoffee.forEach((d) => $(`#coffeeDisplay`).append(`<div class="col">${d}</div>`));
//     }
//     else if (input === `3`){
//         let coffeeName = coffees.filter((d) => d.roast === `dark`);
//         let displayCoffee = coffeeName.map((d) => d.name);
//         $(`#coffeeDisplay`).empty();
//         displayCoffee.forEach((d) => $(`#coffeeDisplay`).append(`<div class="col">${d}</div>`));
//     }
//     else  {
//         input.toLowerCase();
//         let coffeeName = coffees.map((d) => d.name);
//        let filterCoffee =  coffeeName.filter((d) => d.toLowerCase().includes(`${input}`))
//         $(`#coffeeDisplay`).empty();
//        filterCoffee.forEach((d) => $(`#coffeeDisplay`).append(`<div class="col">${d}</div>`));
//     }
//
// }
// displayCoffee();
$(`#search`).keyup(() => {
    let search = $(`#search`).val().toLowerCase();
    coffeePrint(search);
})
$(`#options`).change(() =>{
    let test = $(`#options`).val();
    if (test === `Filter by Roast`){
        test = undefined;
    }
    $(`#search`).val(``);
    sort(test);
})


