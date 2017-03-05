var bob = new Object();
bob.age = 17;
// this time we have added a method, setAge
bob.setAge = function (newAge) {
  bob.age = newAge;
};

bob.getYearOfBirth = function () {
  return 2014 - bob.age;
};
console.log(bob.getYearOfBirth());


/*
The "this" Keyword
Our setAge method works great for bob because it updates bob.age, but what if we want to use it for other people?

It turns out we can make a method work for many objects using a new keyword, this. The keyword this acts as a placeholder, and will refer to whichever object called that method when the method is actually used.

Let's look at the method setAge (line 2) to see how this works. By using the keyword this, setAge will change the age property of any object that calls it. Previously, we had a specific object bob instead of the keyword this. But that limited the use of the method to just bob.

Then when we say bob.setAge = setAge; (line 9), it means whenever we type bob.setAge( ), this.age in the setAge method will refer to bob.age.
*/


// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;

// change bob's age to 50 here
bob.setAge(50)
