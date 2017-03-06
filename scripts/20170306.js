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
