// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;

// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;


// here, update Susan's age to 35 using the method
susan.setAge(35)


var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function (newWidth) {
  this.width = newWidth;
};

// here change the width to 8 and height to 6 using our new methods
rectangle.setWidth(8);
rectangle.setHeight(6);


var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function () {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function () {
  return this.sideLength * this.sideLength;
};

var p = square.calcPerimeter();
var a = square.calcArea();


/*
But this approach of adding in properties one at a time for every object is tedious! Instead of always using the boring Object constructor, we can make our own constructors.

This way we can set the properties for an object right when it is created. So instead of using the Object constructor which is empty and has no properties, we can make our own constructors which have properties.
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);


function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}


function Person(name, age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
};

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);

console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);


function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function () {
    return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function () {
    return 2 * height + 2 * width;
  };
}

var rex = new Rectangle(7, 3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();
