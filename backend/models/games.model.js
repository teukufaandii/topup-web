import mongoose from "mongoose";

const gamesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "https://media.wired.com/photos/62feb60bcea7c0581e825cb0/master/pass/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg",
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    slug: {
      type: String,
      required: true,
      unique: true,
    }
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", gamesSchema);

export default Game;
