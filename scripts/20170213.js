var slaying = true;
// This sets youHit to a random number that's either 0 (which JavaScript reads as false) or 1 (which JavaScript reads as true).
var youHit = Math.floor(Math.random() * 2);
// This sets damageThisRound to a random number that's between 1 and 5 (up to and including 5).
var damageThisRound = Math.floor(Math.random() * 5 + 1);

var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;

    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}


var slaying = true
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit!");
    totalDamage += damageThisRound;
    if (totalDamage >= 4) {
      console.log("You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("You missed! You\'re a dead man!");
    slaying = false;
  }
}


/*
Write an if / else statement inside the isEven function. It should return true; if the number it receives is evenly divisible by 2. Otherwise (else), it should return false;.

Make sure to return - don't use console.log()!
*/

var isEven = function (number) {
  if (number % 2 === 0) {
    return true
  } else {
    return false
  }
};


isEven(Math.round(Math.random() * 10))


// Let's Learn about a fancy new function: isNaN.
// If you call isNaN on something, it checks to see if that thing is not a number. So:

isNaN('berry'); // => true
isNaN(NaN); // => true
isNaN(undefined); // => true
isNaN(42); // => false

// Be careful: if you call isNaN on a string that looks like a number, like '42', JavaScript will try to help by automatically converting the string '42' to the number 42 and return false (since 42 is a number).



var isEven = function (number) {
  if (number % 2 === 0) {
    return true
  } else if (isNaN(number) === true) {
    return "Your input is a number";
  } else {
    return false
  }
};


isEven(Math.round(Math.random() * 10))


for (var i = 0; i <= 11; i++) {
  console.log('I am not afraid. I was born to do this')
  console.log(i)
}


// As you might imagine, if you have a lot of choices you want to cover in a program, it might be annoying to type else if () ten times. That's why JavaScript has the switch statement!

// switch allows you to preset a number of options (called cases), then check an expression to see if it matches any of them. If there's a match, the program will perform the action for the matching case; if there's no match, it can execute a default option.

var lunch = prompt("What do you want for lunch?", "Type your lunch choice here");

switch (lunch) {
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
