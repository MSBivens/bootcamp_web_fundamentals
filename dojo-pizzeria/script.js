// Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza, but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.

// 

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("deep dish", "alfredo", "mozzarella", "pineapple");
console.log(p3);

var p4 = pizzaOven("hand tossed", "traditional", "feta", ["mushrooms", "olives", "onions"]);
console.log(p4);


// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

var crustType = [
    "deep dish", 
    "hand tossed", 
    "flat bread"
];
    
var sauceType = [
    "traditional", 
    "marinara", 
    "alfredo"
];

var cheeses = [
    "mozzarella", 
    "feta"
];

var toppings = [
    "pepperoni", 
    "sausage", 
    "mushrooms", 
    "olives", 
    "onions", 
    "pineapple"
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustType);
    pizza.sauceType = randomPick(sauceType);
    pizza.cheeses = [];
        for(var i=0; i<randomRange(5, 1); i++) {
            pizza.cheeses.push(randomPick(cheeses));
        }
    pizza.toppings = [];
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.toppings.push(randomPick(toppings));
        }
    return pizza;
}

console.log(randomPizza());