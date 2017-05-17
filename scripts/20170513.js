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

function renderTeam(id, team) {
  var elem = document.getElementById(id);
  elem.innerHTML = team[0] + '<br>' + team[1]
}

function generateTeams() {
  var teams = rpickup(players);
  renderTeam('teamRed', teams.teamA);
  renderTeam('teamBlue', teams.teamB)
}

document.getElementById("generatorButton").addEventListener("click", generateTeams);


