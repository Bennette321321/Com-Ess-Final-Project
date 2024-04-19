import { BACKEND_URL } from "./config.js";

const sortByScoreThenName = (data1, data2) => {
  const scoreComparison = data2.score - data1.score; // Descending order of score
    
    if (scoreComparison === 0) {
      const name1 = data1.name.toLowerCase();
      const name2 = data2.name.toLowerCase();
      return name1.localeCompare(name2); // Ascending order of name
    }

    return scoreComparison;
}

export async function getPlayers() {
    const players = await fetch(`${BACKEND_URL}/leaderboard`).then((r) => r.json());
    if (players.length > 1) {
      players.sort(sortByScoreThenName);
    }
    return players;
}

export async function createPlayer(name, score) {
    await fetch(`${BACKEND_URL}/leaderboard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"name": name, "score": score}),
    });
}

export async function updatePlayer(name, score) {
  await fetch(`${BACKEND_URL}/leaderboard/${name}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"name": name, "score": score}),
  });
}