import express from "express";

import * as leaderboardController from "../controllers/leaderboardController.js";

const router = express.Router();

router.get("/", leaderboardController.getPlayers);
router.post("/", leaderboardController.createPlayer);
router.delete("/:id", leaderboardController.deletePlayer);

export default router;