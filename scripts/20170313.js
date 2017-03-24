var james = {
  job: "programmer",
  married: false,
  sayJob: function () {
    // complete this method
    console.log("Hi, I work as a " + this.job);
  }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = 'super programmer';

// james' second job
james.sayJob();


var james = {
  job: "programmer",
  married: false
};

// set to the first property name of "james"
var aProperty = "job"


// print the value of the first property of "james"
// using the variable "aProperty"
console.log(james.job)
console.log(james[aProperty])


// complete these definitions so that they will have
// the appropriate types
var anObj = {
  job: "I'm an object!"
};
var aNumber = 42;
var aString = "I'm a string!";

console.log(typeof anObj); // should print "object"
console.log(typeof aNumber); // should print "number"
console.log(typeof aString); // should print "string"


var myObj = {
  // finish myObj
  name: "Zsolt Katai"
};

console.log(myObj.hasOwnProperty('name')); // should print true
console.log(myObj.hasOwnProperty('nickname')); // should print false


var suitcase = {
  shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty('shorts') === true) {
  console.log(suitcase.shorts)
} else {
  suitcase.shorts = 'blue',
    console.log(suitcase.shorts)
}
