var color = prompt("What's your favorite primary color?", "Type your favorite color here");

switch (color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  case 'yellow':
    console.log("I don't like your choice pal!:B");
    break;
  default:
    console.log("I don't think that's a primary color!");
}


var answer = prompt("Which map is your favourite from QuakeWorld?");

switch (answer) {
  case 'dm2':
    console.log("Claustrophobopolis. Good choice, That's my favourite too!");
    break;
  case 'dm4':
    console.log("The Bad Place. I don't like your taste.:/");
    break;
  case 'dm6':
    console.log("Ahh, The Dark Zone... not bad at all.");
    break;
  case 'ztndm3':
    console.log("Blood Run. What a classic.");
    break;
  case 'aerowalk':
    console.log("Aerowalk. Never liked it, but I can understand your passion.:)");
    break;
  default:
    console.log("Choose a more popular map.;)")
}

// Complete lines 3 and 4!

var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}


// Declare your variables here!
var bored = false
var tired = true

var nap = function() {
  // Add your if/else statement here!
  if (bored || tired) {
      return true
     console.log("Keep going! We are almost there!")
  } else {
      return false
      console.log("Here I lie on wet sand, I will not make it home. I clinch my sword in my hand, Say farewell to those I love.")
  }
};
