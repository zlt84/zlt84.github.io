var players = ["EnginEEr", "Nimf0", "Ramy", "zlt"]

function rpickup(players) {
  var shuffled = shuffle(players);

  var teamA = [shuffled[0], shuffled[2]];
  var teamB = [shuffled[1], shuffled[3]];

  var obj = new Object();
  obj.teamA = teamA;
  obj.teamA = teamB;

  return obj;
}


/*
console.log(teamA)
console.log(teamB)
console.log(Object.keys(obj))
console.log(obj.teamA)
console.log(obj.teamB)
*/

function generateTeams() {
  rpickup(players);
  document.getElementById("generatorButton").innerHTML = "AGAIN";
  console.log(players)
}

