var players = ["EnginEEr", "Nimf0", "Ramy", "Zlt"]

function rpickup(players) {
  var playersMod = players.slice(); // itt másolod le
  playersMod = shuffle(playersMod);
  var teamA = [playersMod[0], playersMod[2]];
  var teamB = [playersMod[1], playersMod[3]];

  var obj = {
    teamA: teamA,
    teamB: teamB
  };

  return obj
}


/*
console.log(teamA)
console.log(teamB)
console.log(Object.keys(obj))
console.log(obj.teamA)
console.log(obj.teamB)
*/


function generateTeams() {
  var teams = rpickup(players);
  document.getElementById("generatorButton").innerHTML = "RPICKUP<br>AGAIN";
  document.getElementById("teamRed").innerHTML = "ccs " + teams.teamA[0] + "<br>" + "ccs " + teams.teamA[1];
  document.getElementById("teamBlue").innerHTML = "ccs " + teams.teamB[0] + "<br>" + "ccs " + teams.teamB[1];
  console.log(teams.teamA)
  console.log(teams.teamB)
}

document.getElementById("generatorButton").addEventListener("click", generateTeams);


