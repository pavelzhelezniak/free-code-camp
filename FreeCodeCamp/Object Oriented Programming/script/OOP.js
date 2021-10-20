// 1 task. Create a Basic JavaScript Object

let dog = {
	name: 'Alfa',
	numLegs: 4
};

// 2 task. Use Dot Notation to Access the Properties of an Object

let dog = {
	name: "Spot",
	numLegs: 4
};

console.log(dog.name);
console.log(dog.numLegs);

// 3 task. Create a Method on an Object

let dog = {
	name: "Spot",
	numLegs: 4,
	sayLegs: function () {
		return 'This dog has ' + dog.numLegs + ' legs.'
	}
};

dog.sayLegs();

// 4 task. Make Code More Reusable with the this Keyword

let dog = {
	name: "Spot",
	numLegs: 4,
	sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

dog.sayLegs();