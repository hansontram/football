"use strict";
window.onload = init;

function getAllTeams() {
  return [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
  ];
}

function init() {
  //   const selectButton = document.getElementById("selectButton");
  //   selectButton.onclick = buttonClicked;


  populateTeams();
}

function findTeamByCode(code) {
  const teams = getAllTeams();
  for (let team of teams) {
    if (team.code === code) {
      return team;
    }
  }
}

function selectionChanged(event) {
  event.preventDefault();

  // find the select list
  const teamsList = document.getElementById("teamsList");

  // get the selected team code
  const teamCode = teamsList.value;

  // find the team with that id
  const selectedTeam = findTeamByCode(teamCode);

  // display all team information
  document.getElementById(
    "teamName"
  ).innerText = `The team ${selectedTeam.name} stadium is located in ${selectedTeam.plays}`;
}

function populateTeams() {
  const teamsList = document.getElementById("teamsList");
  const teams = getAllTeams();

    teamsList.onchange = selectionChanged

  for (let team of teams) {
    // creates new option element
    const option = new Option(team.name, team.code);
    teamsList.appendChild(option);
  }
}
