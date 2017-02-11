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