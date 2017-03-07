function Rabbit(adjective) {
  this.adjective = adjective;
  this.describeMyself = function () {
    console.log("I am a " + this.adjective + " rabbit");
  };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit('fluffy');
var rabbit2 = new Rabbit('happy');
var rabbit3 = new Rabbit('sleepy');

rabbit1.describeMyself();
rabbit2.describeMyself();
rabbit3.describeMyself();


// Our person constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy", 6);


// Our Person constructor
function Emberek(name, age) {
  this.name = name;
  this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Emberek("alice", 40);
family[1] = new Emberek("bob", 42);
family[2] = new Emberek("michelle", 8);
family[3] = new Emberek("timmy", 6);

// loop through our new array
for (var i = 0; family.length >= i; i++) {
  console.log(family[i]);
}


// Our person constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function (person1, person2) {
  return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice, billy)
console.log(diff)


// Our person constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function (person1, person2) {
  return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
function olderAge(person1, person2) {
  if (person1.age > person2.age) {
    return person1.age;
  } else {
    return person2.age;
  }
}

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));


var spencer = {
  age: 22,
  country: "United States"
};

// make spencer2 here with constructor notation
var spencer2 = new Object();
spencer2.age = 22;
spencer2.country = "United States";


var snoopy = new Object();
snoopy.species = "beagle";
snoopy.age = 10;

// save Snoopy's age and species into variables
// use dot notation for snoopy's species
var species = snoopy.species;

// use bracket notation for snoopy's age
var age = snoopy["age"]
