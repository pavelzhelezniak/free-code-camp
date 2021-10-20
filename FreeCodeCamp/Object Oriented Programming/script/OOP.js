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

// 8 task. Verify an Object's Constructor with instanceof

function House(numBedrooms) {
	this.numBedrooms = numBedrooms;
}
let myHouse = new House(4);
myHouse instanceof House;

// 9 task. Understand Own Properties

function Bird(name) {
	this.name = name;
	this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
	if (canary.hasOwnProperty(property)) {
		ownProps.push(property);
	}
}

// 10 task. Use Prototype Properties to Reduce Duplicate Code

function Dog(name) {
	this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");

// 11 task. Iterate Over All Properties

function Dog(name) {
	this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
	if (beagle.hasOwnProperty(property)) {
		ownProps.push(property);
	} else {
		prototypeProps.push(property);
	}
}