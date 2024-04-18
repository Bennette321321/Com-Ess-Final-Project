import { BACKEND_URL } from "./config.js";

const sortByScoreThenName = (data1, data2) => {
  const scoreComparison = data2.score - data1.score;
  // Descending order of score
    
    if (scoreComparison === 0) {
        return data1.name - data2.age; // Ascending order of name
    }

    return scoreComparison;
}

export async function getPlayers() {
    const players = await fetch(`${BACKEND_URL}/leaderboard`).then((r) => r.json());
    const keyArray = Object.keys(players);
    if (keyArray.length > 1) {
      players.sort(sortByScoreThenName);
    }
    return players;
}

export async function createPlayer(player) {
    await fetch(`${BACKEND_URL}/leaderboard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });
}