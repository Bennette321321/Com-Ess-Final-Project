import { getPlayers, createPlayer } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {

  fetchAndDrawTable();

  const backToPlayButton = document.getElementById("back-btn");
  backToPlayButton.addEventListener("click", () => {
    window.open("play.html", "_self");
  }) 
})

function drawLeaderboardTable(players) {
  let rank = 0;
  const table = document.getElementById("table-body");
  table.innerHTML = "";
  for (const player of players) {
    rank++;
    const row = table.insertRow();
    row.insertCell().innerText = rank;
    row.insertCell().innerText = player.name;
    row.insertCell().innerText = player.score;
  }
}

async function fetchAndDrawTable() {
  const players = await getPlayers();
  drawLeaderboardTable(players);
}

async function handleCreatePlayer() {
  const nameToAdd = document.getElementById("name-to-add");
  const scoreToAdd = document.getElementById("score-to-add");

  const player = {
    name: nameToAdd.value,
    score: scoreToAdd.value,
  };

  await createPlayer(player);
  await fetchAndDrawTable();

  nameToAdd.value = "";
  scoreToAdd.value = "";
}