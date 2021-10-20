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

// 5 task. Define a Constructor Function

function Dog() {
	this.name = "Alfa";
	this.color = "black";
	this.numLegs = 4;
}

// 6 task. Use a Constructor to Create Objects

function Dog() {
	this.name = "Rupert";
	this.color = "brown";
	this.numLegs = 4;
}

let hound = new Dog();

// 7 task. Extend Constructors to Receive Arguments

function Dog(name, color) {
	this.name = name;
	this.color = color;
	this.numLegs = 4;
}
let terrier = new Dog('Alfa', 'black');