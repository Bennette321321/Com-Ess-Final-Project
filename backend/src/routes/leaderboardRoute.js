import express from "express";

import * as leaderboardController from "../controllers/leaderboardController.js";
import Player from "../models/playerModel.js";

const router = express.Router();

router.get("/", leaderboardController.getPlayers);
router.post("/", leaderboardController.createPlayer);

export default router;