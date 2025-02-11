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

// 12 task. Understand the Constructor Property

function Dog(name) {
	this.name = name;
}

function joinDogFraternity(candidate) {
	if (candidate.constructor === Dog) {
		return true;
	} else {
		return false;
	}
}

// 13 task. Change the Prototype to a New Object

function Dog(name) {
	this.name = name;
}

Dog.prototype = {
	// Only change code below this line
	numLegs: 4,
	eat: function () {
		console.log('Come on!');
	},
	describe: function () {
		console.log(`My name is ${this.name}`);
	}
};

// 14 task. Remember to Set the Constructor Property when Changing the Prototype

function Dog(name) {
	this.name = name;
}

Dog.prototype = {
	constructor: Dog,
	numLegs: 4,
	eat: function () {
		console.log("nom nom nom");
	},
	describe: function () {
		console.log("My name is " + this.name);
	}
};

// 15 task. Understand Where an Object’s Prototype Comes From

function Dog(name) {
	this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);

// 16 task. Understand the Prototype Chain

function Dog(name) {
	this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true
Object.prototype.isPrototypeOf(Dog.prototype); // true

// 17 task. Use Inheritance So You Don't Repeat Yourself

function Cat(name) {
	this.name = name;
}

Cat.prototype = {
	constructor: Cat,
};

function Bear(name) {
	this.name = name;
}

Bear.prototype = {
	constructor: Bear,
};

function Animal() { }

Animal.prototype = {
	constructor: Animal,
	eat: function () {
		console.log("nom nom nom");
	}
};

// 18 task. Inherit Behaviors from a Supertype

function Animal() { }

Animal.prototype = {
	constructor: Animal,
	eat: function () {
		console.log("nom nom nom");
	}
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

// 19 task. Set the Child's Prototype to an Instance of the Parent

function Animal() { }

Animal.prototype = {
	constructor: Animal,
	eat: function () {
		console.log("nom nom nom");
	}
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();

// 20 task. Reset an Inherited Constructor Property

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();

// 21 task. Add Methods After Inheritance

function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () { console.log("Woof!"); };

let beagle = new Dog();

// 22 task. Override Inherited Methods

function Bird() { }

Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function () { return "Alas, this is a flightless bird."; };

let penguin = new Penguin();
console.log(penguin.fly());

// 23 task. Use a Mixin to Add Common Behavior Between Unrelated Objects

let bird = {
	name: "Donald",
	numLegs: 2
};

let boat = {
	name: "Warrior",
	type: "race-boat"
};

let glideMixin = function (obj) {
	obj.glide = function () {
		console.log("Glide, wooosh!");
	}
};

glideMixin(bird);
glideMixin(boat);

// 24 task. Use Closure to Protect Properties Within an Object from Being Modified Externally

function Bird() {
	let weight = 15;
	this.getWeight = function () {
		return weight;
	}

}

// 25 task. Understand the Immediately Invoked Function Expression (IIFE)

(function () {
	console.log("A cozy nest is ready");
})();

// 26 task. Use an IIFE to Create a Module

let funModule = (function () {
	return {
		isCuteMixin: function (obj) {

			obj.isCute = function () {
				return true;
			};
		},
		singMixin: function (obj) {
			obj.sing = function () {
				console.log("Singing to an awesome tune");
			};
		}
	}
})();