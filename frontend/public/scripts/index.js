import { createPlayer, getPlayers } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", () => {
    handleCreatePlayer();
  });
})

async function handleCreatePlayer() {
  const name = document.getElementById("username");
  if (name.value != "") {
    const players = await getPlayers();
    const playerNames = [];
    for (let player of players) {
      playerNames.push(player.name);
    }
    if (!playerNames.includes(name.value)) {
      await createPlayer(name.value, 0);
    }
    window.open("play.html", "_self");
  }
}