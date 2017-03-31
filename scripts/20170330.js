function Penguin(name) {
  this.name = name;
  this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor(name) {
  this.name = name
}

Emperor.prototype = new Penguin();

// create an "emperor" object and print the number of legs it has
var emperor = new Penguin("Zsola")

console.log(emperor.numLegs)


// original classes
function Animal(name, numLegs) {
  this.name = name;
  this.numLegs = numLegs;
  this.isAlive = true;
}

function Penguin(name) {
  this.name = name;
  this.numLegs = 2;
}

function Emperor(name) {
  this.name = name;
  this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log(myEmperor.saying); // should print "Waddle waddle"
console.log(myEmperor.numLegs); // should print 2
console.log(myEmperor.isAlive); // should print true


function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

var john = new Person('John', 'Smith', 30);
var myFirst = john.firstName;
var myLast = john.lastName;

//declare variable myAge set to the age of the john object.
var myAge = john.age


function Person(first, last, age) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  var bankBalance = 7500;

  this.getBalance = function () {
    // your code should return the bankBalance
    return bankBalance
  };
}

var john = new Person('John', 'Smith', 30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance()
console.log(myBalance)


function Person(first, last, age) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  var bankBalance = 7500;

  var returnBalance = function () {
    return bankBalance;
  };

  // create the new function here
  this.askTeller = function () {
    return returnBalance;
  };
}

var john = new Person('John', 'Smith', 30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);
