import Game from "../models/games.model.js";

export const getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getGameBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const game = await Game.findOne({ slug });

    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    res.json(game);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
