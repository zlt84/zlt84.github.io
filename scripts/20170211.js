confirm('Are you ready to open your mind?')

var age = prompt('What\'s your age?')

if (age < 13) {
  console.log('You\'re allowed to play but I take no responsibility.');
} else {
  console.log('Welcome to my World wanderer');
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'")

var userAnswer = prompt("Do you want to race Bieber on stage?")

if (userAnswer === 'yes') {
  console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
} else {
  console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
}

var feedback = prompt('Please, rate my game')

if (feedback > 8) {
  console.log("Thank you! We should race at the next concert!")
} else {
  console.log("I'll keep practicing coding and racing.")
}


var foodDemand = function (food) {
  console.log("I want to eat" + " " + food);
}

foodDemand('Alma')


// Nicely written function:
var calculate = function (number) {
  var val = number * 10;
  console.log(val);
};

// Badly written function with syntax errors!

var greeting = function (name) {
  console.log(name)
}

greeting(name)


function orangeCost(price) {
  console.log(price * 5);
}

orangeCost(5)


// Parameter is a number, and we do math with that parameter
var timesTwo = function (number) {
  return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(14)
console.log(newNumber);


var quarter = function (number) {
  return number / 4;
}

if (quarter(12) % 3 === 0) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}


// Write your function starting on line 3
var perimeterBox = function (length, width) {
  return length + length + width + width;
}

perimeterBox(30, 40)


var my_number = 7; //this has global scope

var timesTwo = function (number) {
  var my_number = number * 2;
  console.log("Inside the function my_number is: ");
  console.log(my_number);
};

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);


var nameString = function (name) {
  return 'Hi, I am' + ' ' + name
};

console.log(nameString('Zsolt'))


// Ko papir ollo jatek:)
var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();

if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}
console.log("Computer: " + computerChoice);


var compare = function (choice1, choice2) {
  if (choice1 === choice2) {
    return "The result is a tie!";
  } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      return "rock wins"
    } else {
      "paper wins"
    }
  } else if (choice1 === "paper") {
    if (choice2 === "rock") {
      return "paper wins"
    } else {
      "scissors wins"
    }
  }
}

compare()


for (var i = 5; i <= 50; i += 5) {
  console.log(i);
}


for (var i = 8; i < 120; i += 12) {
  console.log(i);
}


for (var i = 10; i >= 0; i--) {
  console.log(i);
}

for (var i = 100; i > 0; i -= 5) {
  console.log(i)
}


var cities = ["Budapest", "Kemence", "Maglód", "Győr", "Szob"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

var names = ['Goku', 'Kuririn', 'Piccolo', 'Gohan', 'Vegeta']

for (var i = 0; i < names.length; i++) {
    console.log("I know someone called " + names[i]);
}
