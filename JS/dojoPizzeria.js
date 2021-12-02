
var pizza = {
	crustType: ["deep dish", "hand tossed", "traditional", "thin crust"],
	sauceType: ["marinara", "bbq", "alfredo", "no sauce"],
	cheese: ["mozzarella", "feta", "smoked gouda", "cheddar", "fontina", "no cheese"],
	protein: ["pepperoni", "sausage", "chicken", "pulled pork", "bacon", "no protein"],
	toppings: ["mushrooms", "black olives", "onions", "green peppers", "roasted garlic", "no toppings"],
	display: function (pizza) {
		var randomCrustType = this.crustType[Math.floor(Math.random() * this.crustType.length)];
		// console.log(randomCrustType);
		var randomSauceType = this.sauceType[Math.floor(Math.random() * this.sauceType.length)];
		// console.log(randomSauceType);
		var randomCheese = this.cheese[Math.floor(Math.random() * this.cheese.length)];
		// console.log(randomCheese);
		var randomProtein = this.protein[Math.floor(Math.random() * this.protein.length)];
		// console.log(randomProtein);
		var randomToppings = this.toppings[Math.floor(Math.random() * this.toppings.length)];
		// console.log(randomToppings);
		var randomPizza = ([randomCrustType, randomSauceType, randomCheese, randomProtein, randomToppings]);
		// console.log(randomPizza)
		return randomPizza;
	}
}
console.log(pizza.display());





// var pizza1 = pizzaOven("deep dish", "marinara", ["mozzarella", "feta"], ["pepperoni", "sausage"]);
// // console.log(pizza1);

// var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
// // console.log(pizza2);

// var pizza3 = pizzaOven("thin crust", "bbq", ["smoked gouda", "mozzarella"], ["chicken", "black olives", "bacon"]);
// // console.log(pizza3);

// var pizza4 = pizzaOven("deep dish", "marinara", ["mozzarella"], ["roasted garlic", "suasage", "mushrooms", "thyme"]);
// // console.log(pizza4);




//  ANSWERS

function pizzaOven(crustType, sauceType, cheeses, toppings) {
	var pizza = {};
	pizza.crustType = crustType;
	pizza.sauceType = sauceType;
	pizza.cheeses = cheeses;
	pizza.toppings = toppings;
	return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var crustTypes = [
	"deep dish",
	"hand tossed",
	"thin and crispy",
	"cauliflower",
	"gluten free",
	"hawaiian bread"
];

var sauceTypes = [
	"traditional",
	"marinara",
	"bbq",
	"white sauce",
	"nacho cheese",
	"tikka masala"
];

var cheeses = [
	"mozzarella",
	"cheddar",
	"feta",
	"swiss cheese",
	"blue cheese",
	"goat cheese",
	"provolone",
	"parmesan",
	"vegan cheese"
];

var toppings = [
	"pepperoni",
	"sausage",
	"chicken",
	"corn",
	"olives",
	"bell peppers",
	"onions",
	"mushrooms",
	"anchovies"
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
	pizza.crustType = randomPick(crustTypes);
	pizza.sauceType = randomPick(sauceTypes);
	pizza.cheeses = [];
	pizza.toppings = [];
	for (var i = 0; i < randomRange(5, 1); i++) {
		pizza.cheeses.push(randomPick(cheeses));
	}
	for (var i = 0; i < randomRange(4, 0); i++) {
		pizza.toppings.push(randomPick(toppings));
	}
	return pizza;
}

console.log(randomPizza());

