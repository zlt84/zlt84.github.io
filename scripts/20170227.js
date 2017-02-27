// The logical operator not is written in JavaScript like this: !. It makes true expressions false, and vice-versa.

!true; // => false
!false; // => true


// Declare your variables here!
var programming = false

var happy = function () {
  if (programming != true) {
    return true;
  } else {
    return false
  }
};


var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch (troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if (strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if (money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if (fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}


//

var user = prompt("What will be your nickname in this Adventure?").toUpperCase();

switch (user) {
  case "RAMY":
    console.log("Welcome Lord Crystal!:)");
    break;
  case "OLD MAN":
    console.log("Old Man arrived.");
    break;
  case "UNNAMEDPLAYER":
    console.log("..from the shadows");
    break;
  default:
    console.log("I don’t know you!");
}

var brave = prompt("Are you brave enough to fight the monster?").toUpperCase();
var power = prompt("Do you have enough power to hit hard as hell?").toUpperCase();

if (brave === "YES" && power === "YES") {
  console.log("Great! Slay the beast immediately! *SLASH*SLASH*SLASH*");
} else if (brave === "NO" || power === "NO") {
  console.log("It looks like you'll die in pain... Bravery is not enough to kill a monster like this... as only pure power is nothing without control. Say farewell for those who you loved.")
} else {
  console.log("You are weak and coward, the worst combination ever. You’d better stay at home.")
}


var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

var elementThree = languages[2]
console.log(elementThree)


var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for (var i = 0; i < languages.length; i++) {
  console.log(languages[i])
}


var me = {
  name: 'Zsolt',
  age: 33
};

var me2 = new Object();

me2.name = "Zsolt";
me2.age = 33;


var object1 = {
  name: 'objektumOne',
  number: 1
}


var object2 = new Object();

object2.name = "objektumTwo";
object2.number = 2;


var object3 = new Object();

object3.name = "okjektumThree";
object3.number = 3;


var objectA = new Object();
objectA.name = 'Zsolt';
objectA.gender = 'male';


var myArray = [84, true, 'warrior', objectA]


var myObject = new Object();

var newArray = [[14, 'Zsolt', 'Katai'], [myObject, true]]


var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  interests: ['Sports', 'Psychedelic music and art', 'Nature']
};
