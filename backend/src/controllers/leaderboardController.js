import Player from "../models/playerModel.js";

export const createPlayer = async (req, res) => {
    try {
      const newPlayer = new Player(req.body);
      await newPlayer.save();
  
      res.status(200).json({ message: "OK" });
    } catch (err) {
      if (err.name === "ValidationError") {
        res.status(400).json({ error: "Bad Request" });
      } else {
        res.status(500).json({ error: "Internal server error." });
      }
    }
  };
  
export const getPlayers = async (req, res) => {
  const players = await Player.find();
  res.status(200).json(players);
};

export const updatePlayer = async (req, res) => {
  try {
    await Player.updateOne({"name": req.body.name}, {$set: {"score": req.body.score}});
  } catch (err) {
    const newPlayer = new Player(req.body);
    await newPlayer.save();
  }
  res.status(200).json({ message: "OK" });
}