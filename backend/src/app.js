import express from "express";
import cors from "cors";

import LeaderBoardRoute from "./routes/leaderboardRoute.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/leaderboard", LeaderBoardRoute);

export default app;
