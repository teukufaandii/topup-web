import mongoose from "mongoose";

const gamesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", gamesSchema);

export default Game;
