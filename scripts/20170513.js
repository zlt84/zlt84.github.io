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

function generateTeams() {
  var teams = rpickup(players);
  document.getElementById("teamRed").innerHTML = "ccs " + teams.teamA[0] + "<br>" + "ccs " + teams.teamA[1];
  document.getElementById("teamBlue").innerHTML = "ccs " + teams.teamB[0] + "<br>" + "ccs " + teams.teamB[1];
}

document.getElementById("generatorButton").addEventListener("click", generateTeams);


