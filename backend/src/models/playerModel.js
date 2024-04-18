import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    score: {
        type: Number,
        require: true
    }
});

const Player = mongoose.model("Player", playerSchema);

export default Player;