import { createPlayer, getPlayers } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", () => {
    handleCreatePlayer();
  });
})


async function handleCreatePlayer() {
  const nameToAdd = document.getElementById("username");
  const currentPlayers = await getPlayers();
  let hasPlayer = false;
  let lastSave;
  for (let player of currentPlayers) {
    if (player.name == nameToAdd.value) {
      hasPlayer = true;
      lastSave = player;
      break;
    }
  }
  if (!hasPlayer) {
    const player = {
      name: nameToAdd.value,
      score: 0,
    };
    await createPlayer(player);
  } else {
    console.log("Has That Name!!!!")
  }
  nameToAdd.value = "";
}