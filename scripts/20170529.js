"use strict";

function rpickup(players) {

  var playersMod = players.slice();
  playersMod = shuffle(playersMod);

  var playerCount = document.getElementById("playerCountSelector");
  var playerCountFinal = playerCount.value;

  if (playerCountFinal == "2") {
    var teamA = [playersMod[0], playersMod[2]];
    var teamB = [playersMod[1], playersMod[3]];

    var obj = {
      teamA: teamA,
      teamB: teamB
    };

    return obj;

  } else if (playerCountFinal == "3") {
    var teamA = [playersMod[0], playersMod[2], playersMod[4]];
    var teamB = [playersMod[1], playersMod[3], playersMod[5]];

    var obj = {
      teamA: teamA,
      teamB: teamB
    };

    return obj

  } else {
    var teamA = [playersMod[0], playersMod[2], playersMod[4], playersMod[6]];
    var teamB = [playersMod[1], playersMod[3], playersMod[5], playersMod[7]];

    var obj = {
      teamA: teamA,
      teamB: teamB
    };

    return obj
  }
}

function renderTeam(id, team) {
  var html = " "
  for (var i = 0; i < team.length; i++) {
    html += team[i].clan + " " + team[i].name + "<br>"
  }
  var elem = document.getElementById(id);
  elem.innerHTML = html
}

function generateTeams() {
  var teams = rpickup(players);
  renderTeam('teamRed', teams.teamA);
  renderTeam('teamBlue', teams.teamB)
}

document.getElementById("generatorButton").addEventListener("click", generateTeams);
