import { createPlayer, deletePlayer, getPlayers } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", () => {
    handleCreatePlayer();
  });
})


async function handleCreatePlayer() {
  const nameToAdd = document.getElementById("username");
  const currentPlayers = await getPlayers();
  let player;
  let hasPlayer = false;
  let lastData;
  for (let player of currentPlayers) {
    if (player.name == nameToAdd.value) {
      hasPlayer = true;
      lastData = player
      break;
    }
  }
  if (!hasPlayer) {
    player = {
      name: nameToAdd.value,
      score: 0,
    };
  } else {
    player = {
      name: lastData.name,
      score: lastData.score + 2
    }
    handleDeletePlayer(lastData._id);
  }
  await createPlayer(player);
  nameToAdd.value = "";
  window.open("leaderboard.html", "_self");
}

async function handleDeletePlayer(id) {
  await deletePlayer(id);
}