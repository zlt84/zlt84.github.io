// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book(pages, author) {
  this.pages = pages;
  this.author = author;
}

// Use our new constructor to make the_hobbit in one line
var the_hobbit = new Book(320, "J.R.R. Tolkien");


/*
Methods are like functions that are associated with a particular object.

They are especially helpful when you want to either:

Update the object properties
Calculate something based on an object's properties.
Here, we have included a Circle object, with a radius property representing the circle's radius. We have implemented an area function which calculates the circle's area. Notice we have used Math.PI to get the π value.
*/

function Circle(radius) {
  this.radius = radius;
  this.area = function () {
    return Math.PI * this.radius * this.radius;

  };
  // define a perimeter method here
  this.perimeter = function () {
    return 2 * Math.PI * this.radius;
  }
};


// Building an Address Book
var bob = {
  firstName: "Bob",
  lastName: "Jones",
  phoneNumber: "(650) 777-777",
  email: "bob.jones@example.com"
};

console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.email);


var bob = {
  firstName: "Bob",
  lastName: "Jones",
  phoneNumber: "(650) 777-7777",
  email: "bob.jones@example.com"
};

var mary = {
  firstname: "Mary",
  lastName: "Johnson",
  phoneNumber: "(650) 888-8888",
  email: "mary.johnson@example.com"
}

var contacts = [bob, mary]

console.log(contacts[1].phoneNumber)


var bob = {
  firstName: "Bob",
  lastName: "Jones",
  phoneNumber: "(650) 777-7777",
  email: "bob.jones@example.com"
};

var mary = {
  firstName: "Mary",
  lastName: "Johnson",
  phoneNumber: "(650) 888-8888",
  email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

// printPerson added here
function printPerson(person) {
  console.log(person.firstName + " " + person.lastName)
}

printPerson(contacts[0])
printPerson(contacts[1])


var bob = {
  firstName: "Bob",
  lastName: "Jones",
  phoneNumber: "(650) 777-7777",
  email: "bob.jones@example.com"
};

var mary = {
  firstName: "Mary",
  lastName: "Johnson",
  phoneNumber: "(650) 888-8888",
  email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
  console.log(person.firstName + " " + person.lastName);
}

function list() {
  var contactsLength = contacts.length;
  for (var i = 0; i < contactsLength; i++) {
    printPerson(contacts[i]);
  }
}

/*Create a search function
then call it passing "Jones"*/
function search(lastName) {
  var contactsLength = contacts.length;
  for (var i = 0; i < contactsLength; i++) {
    if (contacts[i].lastName === "Jones") {
      printPerson(contacts[i])
    }
  }
}


function add(firstName, lastName, email, phoneNumber) {
  this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.phoneNumber = phoneNumber

  contacts[contacts.length] = this;
};

add("Zsolt", "Katai", "zsolt.katai84@gmail.com", "+36 30 2222 807");


list();
search();
