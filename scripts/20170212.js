
var text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for (var i = 0; i < text.length; i++) {
  if (text[i] === "E") {
    // If we find it, add characters up to
    // the length of my name to the array
    for (var j = i; j < (myName.length + i); j++) {
      hits.push(text[j]);
    }
  }
}

if (hits.length === 0) {
  console.log("Your name wasn't found!");
} else {
  console.log(hits);
}



var text = "Blabla bla bla? Zsolt, bla blablabla bla Zsolt blablablabla blab bla Zsolt blabla bla blablbla bla blaaa blablabla blaaaa Zsolt"

var myName = 'Zsolt'

var hits = []

for (var i = 0; i < text.length; i++) {
  if (text[i] === 'Z') {
    for (var j = i; j < (myName.length + i); j++) {
      hits.push(text[j]);
    }
  }
}

if (hits.length === 0) {
  console.log("Your name wasn't found!")
} else {
  console.log(hits)
}

/*
The code in the editor keeps flipping a coin until it is tails. Here's how it works:

In line 1, we create a variable named coinFace, which is a random number that is either 0 (heads) or 1 (tails).
Then in lines 3-5 we keep flipping the coin as long as the coin turns up heads. If coinFace is 0 (heads), then the condition in the while loop will evaluate to true, and we flip the coin again.
If coinFace is 1 (tails), then the condition will be false, so we break out of the while loop and print Tails! Done flipping.
*/

var coinFace = Math.floor(Math.random() * 2);

while (coinFace === 0) {
  console.log("Heads! Flipping again...");
  var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");


// As long as the condition evaluates to true, the loop will continue to run. As soon as it's false, it'll stop. (When you use a number in a condition, as we did earlier, JavaScript understands 1 to mean true and 0 to mean false.)

var understand = true;

while (understand === true) {
  console.log("I'm learning while loops!");
  understand = false;
}


// JS könyv, 4-5. lecke

document.write(document.lastModified);

var lines = 40
var lines = ++lines
console.log(lines)

var result = 3 + 6 + 12 + 14 / 4
console.log(result)

var result2 = (3 + 6 + 12 + 14) / 4
console.log(result2)


var stringvar = '30 angry icebear.'
var stringvar2 = 'angry icebears'
var numvar = parseInt(stringvar)
var numvar2 = parseInt(stringvar2)
console.log(numvar)                 // 30
console.log(numvar2)                // NaN


var test1 = 'This is a test.'
var test2 = 'This is only a test.'

var both = test1 + ' ' + test2
console.log(both)
console.log(test1.toLowerCase())
console.log(test1.toUpperCase())


var abece = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
console.log(abece.substring (6, 7)) // G
console.log(abece.substring (0, 4)) // ABCD
console.log(abece.substring (6, 6)) // null

console.log(abece.charAt(0))        // A
console.log(abece.charAt(12))       // M






