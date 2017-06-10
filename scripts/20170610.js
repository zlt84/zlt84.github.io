"use strict";

function rpickup(players) {

  var playersMod = players.slice();
  playersMod = shuffle(playersMod);

  var playerCount = document.getElementById("playerCountSelector");
  var playerCountFinal = parseInt(playerCount.value);

  var teamA = [];
  var teamB = [];

  for (var i = 0; i < playerCountFinal * 2; i++) {
    if (i % 2 == 0) {
      teamA.push(playersMod[i]);
    } else {
      teamB.push(playersMod[i]);
    }
  }

  var obj = {
    teamA: teamA,
    teamB: teamB
  };

  return obj
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
