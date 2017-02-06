var myString = 'zlt';
var myNumber = 14;
var myBoolean = true;

// one line comment
console.log("Name: " + myString);
console.log("Lucky Number: " + myNumber);
console.log("Good joke? " + myBoolean);

console.log(Math.random() * 100) // random szám 0-100 között, tizedesre pontosan
console.log(Math.floor(Math.random() * 100)); // random szám 0-100 között, kerekítve

/* commenting
as long as you want
really */

// simple text
console.log('Masters of War, torment every soul');
console.log('Rape every whore that carries the cross');

console.log('Fire!');
console.log('Burn them all, burn them alive');
console.log('Send their souls to Deathqueen’s hall');
console.log('To the land of cold burning flames');
console.log('Send them to the land of famine and despair');
console.log('Eternally they will starve and freeze');


var strength = '50,000 pounds';
console.log('How much stuff can a variable hold? ', strength);

var age = 32;
console.log(age);
var hasPet = true;
console.log(hasPet);


var morningAlarm = '6:30AM';
morningAlarm = '7:00AM';
console.log('Morning alarm is set to: ', morningAlarm);


var favoriteAnimal = 'cat';
console.log('My favorite animal: ' + favoriteAnimal);


var needCoffee = true;
if (needCoffee) {
  console.log('Finding coffee');
} else {
  console.log('Keep on keeping on!');
}


var harryPotterFan = false;
if (harryPotterFan) {
  console.log('I lead a muggle\'s life.');
} else {
  console.log('Mischief managed.');
}


var hungerLevel = 10;
if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('Let\'s eat later.');
}

var hungerLevelB = 7;
if (hungerLevelB >= 7) {
  console.log('Time to eat!');
} else {
  console.log('Let\'s eat later.');
}

/*

var foggyNight = false

var moonPhase = 'full';
if (moonPhase === 'full' && foggyNight) {
  console.log('Howwwwlll!!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairer');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');


var foggyNight = false

var moonPhase = 'full';
if (moonPhase === 'full' || foggyNight) {
  console.log('Howwwwlll!!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairer');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

*/

var moonPhase = 'full';

switch (moonPhase) {
  case 'full':
    console.log('Howwwwlll!!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairer');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
}
