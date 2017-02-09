var vacationSpots = ['Thailand', 'Sweden', 'Japan'];

for (var i = vacationSpots.length - 1; i >= 0; i--) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);


var vacationSpots = ['Thailand', 'Sweden', 'Japan'];

for (var i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

/*
Instead of writing out the same code over and over, let’s make the computer loop through our array for us. We can do this with for loops.

The syntax looks like this:

var animals = ["Grizzly Bear", "Sloth", "Sea Lion"];

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Output:
// Grizzly Bear
// Sloth
// Sea Lion
Since this syntax is a little complicated, let's break it into 4 parts:

Within the for loop's parentheses, the start condition is var i = 0, which means the loop will start counting at 0.
The stop condition is i < animals.length, which means the loop will run as long as i is less than the length of the animals array. When i is greater than the length of the animals array, the loop will stop looping.
The iterator is i++. This means that each loop, i will have 1 added to it.
And finally, the code block is inside the { ... }. The block will run each loop, until the loop stops.
The secret to loops is that i, the variable we created inside the for loop's parentheses, is always equal to a number. To be more clear, the first loop, i will equal 0, the second loop, i will equal 1, and the third loop, i will equal 2.

This makes it possible to write animals[0], animals[1], animals[2] programmatically instead of by hand. We can write a for loop, and replace the hard coded number with the variable i, like this: animals[i].
*/


var vacationSpots = ['Thailand', 'Sweden', 'Japan'];

for (var i = vacationSpots.length - 1; i >= 0; i--) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

/*
If we can make a for loop run forwards through an array, can we make it run backwards through it? Of course!

We can make out loop run backwards by modifying the start, stop, and iterator conditions.

To do this, we'll need to edit the code between the for loop's parentheses:

The start condition should set i to the length of the array.
The stop condition should end when i is 0.
The iterator should subtract 1 each time, which is done with i--.
*/


var myPlaces = ['Sweden', 'Thailand', 'Japan'];
var friendPlaces = ['Denmark', 'Japan', 'Iceland'];

for (var i = 0; i < myPlaces.length; i++) {
  console.log(myPlaces[i]);

  for (var j = 0; j < friendPlaces.length; j++) {
    console.log(friendPlaces[j]);

    if (myPlaces[i] === friendPlaces[j]) {
      console.log('Match: ' + myPlaces[i]);
    }
  }
}

/* OUTPUT:
Sweden
Denmark
Japan
Iceland
Thailand
Denmark
Japan
Iceland
Japan
Denmark
Japan
Match: Japan
Iceland
*/

var cards = ['Diamond', 'Spade', 'Heart', 'Club'];

var currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);

  var randomNumber = Math.floor(Math.random() * 4);

  currentCard = cards[randomNumber];
}

console.log('Found a Spade!');

/*
Awesome job! for loops are great, but they have a limitation: you have to know how many times you want the loop to run. What if you want a loop to run an unknown or variable number of times instead?

For example, if we have a deck of cards and we want to flip cards (loop a card flipping function) until we get a 'Spade', how could we write that in JavaScript?

That's the purpose of the while loop. It looks like similar to a for loop. Check it out:

while (condition) {
  // code block that loops until condition is false
}
The loop begins with the keyword while
Inside the parentheses, we can insert a condition. As long as the variable evaluates to true the block of code will loop.
Inside the code block we can write any code we'd like to loop.
*/
