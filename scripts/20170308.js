function Person(job, married) {
  this.job = job;
  this.married = married;
  // add a "speak" method to Person!
  this.speak = function () {
    console.log("Hello!");
  }
}

var user = new Person("Codecademy Student", false);
user.speak();


var james = {
  job: "programmer",
  married: false,
  speak: function (mood) {
    console.log("Hello, I am feeling " + mood)
  }
};

james.speak("great");
james.speak("just okay");
