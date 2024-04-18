import { fetchAndDrawTable, handleCreatePlayer } from "./leaderboard.js"

document.addEventListener("DOMContentLoaded", () => {
    fetchAndDrawTable();

    const addPlayerButton = document.getElementById("add-newrow");
    addPlayerButton.addEventListener("click", () => {
      handleCreatePlayer();
    });
})