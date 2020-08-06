class Wrapper {
	constructor() {
		
	}
	
	pack() {
		return 'Wrapper';
	}
}

class Bottle {
	constructor() {
		
	}
	
	pack() {
		return 'Bottle';
	}
	
}

class Burger {
	constructor() {
		
	}
	
	packing() {
		return new Wrapper();
	}
	
	price() {}
}

class ColdDrink {
	constructor() {
		
	}
	
	packing() {
		return new Bottle();
	}
	
	price() {}
}

class VegBurger extends Burger {
	constructor() {
		super();
	}
	
	price() {
		return 25.0;
	}
	
	name() {
		return 'Veg Burger';
	}
}

class ChickenBurger extends Burger {
	constructor() {
		super();
	}
	
	price() {
		return 50.5;
	}
	
	name() {
		return 'Chicken Burger';
	}
}

class Coke extends ColdDrink {
	constructor() {
		super();
	}
	
	price() {
		return 30.0;
	}
	
	name() {
		return 'Coke';
	}
}

class Pepsi extends ColdDrink {
	constructor() {
		super();
	}
	
	price() {
		return 35.0;
	}
	
	name() {
		return 'Pepsi';
	}
}

class Meal {
	constructor() {
		this.items = [];
	}
	
	addItem(item) {
		this.items.push(item);
	}
	
	getCost() {
		let cost = 0.0;
		
		for(let i = 0; i < this.items.length; i++) {
			cost += this.items[i].price();
		}
		
		return cost;
	}
	
	showItems() {
		for(let i = 0; i < this.items.length; i++) {
			console.log('Item : ' + this.items[i].name() + ', Packing : ' + this.items[i].packing().pack() + ', Price : ' + this.items[i].price());
		}
	}
}

class MealBuilder {
	constructor() {
		
	}
	
	prepareVegMeal() {
		const meal = new Meal();
		meal.addItem(new VegBurger());
		meal.addItem(new Coke());
		
		return meal;
	}
	
	prepareNonVegMeal() {
		const meal = new Meal();
		meal.addItem(new ChickenBurger());
		meal.addItem(new Pepsi());
		
		return meal;
	}
}

const mealBuilder = new MealBuilder();
const vegMeal = mealBuilder.prepareVegMeal();
console.log('Veg Meal');
vegMeal.showItems();
console.log('Total cost: ' + vegMeal.getCost());

const nonVegMeal = mealBuilder.prepareNonVegMeal();
console.log('Non-Veg Meal');
nonVegMeal.showItems();
console.log('Total cost: ' + nonVegMeal.getCost());
