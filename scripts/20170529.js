
function rpickup(players) {
    var playerCount = document.getElementById("playerCountSelector");
  var playerCountFinal = playerCount.value;
  console.log(playerCountFinal)


  for (i = 0; i < playerCount * 2; i++) {

}

  var playersMod = players.slice();
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

