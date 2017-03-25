function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here
function Circle(radius) {
  this.radius = radius
}


function Dog(breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function () {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");

// we need you to teach snoopy how to bark here
snoopy.bark = function () {
  console.log("Woof");
}

// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();


function Dog(breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function () {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();


function Cat(name, breed) {
  this.name = name;
  this.breed = breed;
}

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console
Cat.prototype.meow = function () {
  console.log("Meow!")
}

// add code here to make the cats meow!
cheshire.meow
gary.meow


// create your Animal class here
function Animal(name, numLegs) {
  this.name = name;
  this.numLegs = numLegs;
}
Animal.prototype.sayName = function () {
  console.log("Hi my name is " + this.name);
};


// create a Penguin constructor here
function Penguin(name, numLegs) {
  this.name = name;
  this.numLegs = numLegs
}

// create a sayName method for Penguins here
Penguin.prototype.sayName = function () {
    console.log("Hi my name is " + this.name);
  }
  // our test code
var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();


// the original Animal class and sayName method
function Animal(name, numLegs) {
  this.name = name;
  this.numLegs = numLegs;
}
Animal.prototype.sayName = function () {
  console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
  this.name = name;
  this.numLegs = 2;
}

// set its prototype to be a new instance of Animal

Penguin.prototype = new Animal();

var penguin = new Penguin("Günter")

penguin.sayName();
