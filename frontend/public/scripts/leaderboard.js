import { getPlayers, createPlayer } from "./api.js";

function drawLeaderboardTable(players) {
    const table = document.getElementById("table-body");
    table.innerHTML = "";
    for (const player of players) {
        const row = table.insertRow();
        row.insertCell().innerText = player.name;
        row.insertCell().innerText = player.score;
    }
}

export async function fetchAndDrawTable() {
    const players = await getPlayers();
    drawLeaderboardTable(players);
}

export async function handleCreatePlayer() {
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