import Category from "../models/category.model.js";
import Game from "../models/games.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        if(!users) {
            return res.status(404).json({ message: "Users not found" });
        }

        
        if (users.length === 0) {
            return res.status(200).json([]);
        }

        res.status(200).json(users);
    } catch (error) {
        console.log("Error in getUsers controller", error.message);
        res.status(500).json({ message: error.message });
    }
}

export const addProduct = async (req, res) => {
    try {
      const { name, price, description, image, category, game, amount } = req.body;

      const newProduct = new Product({ name, price, description, image, category, game, amount });

      const savedProduct = await newProduct.save();

      const relatedGame = await Game.findById(game);
  
      if (!relatedGame) {
        return res.status(404).json({ message: "Game not found" });
      }

      relatedGame.products.push(savedProduct._id);

      await relatedGame.save();

      res.status(200).json({ message: "Product added successfully", product: savedProduct });
    } catch (error) {
      console.error("Error in addProduct controller", error.message);
      res.status(500).json({ message: error.message });
    }
  };

export const addGame = async (req, res) => {
    try {
        const { name, slug } = req.body;
        const newGame = new Game({ name, slug });
        await newGame.save();
        res.status(200).json({ message: "Game added successfully" });
    } catch (error) {
        console.log("Error in addGame controller", error.message);
        res.status(500).json({ message: error.message });
    }
}

export const addCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = new Category({ name });
        await newCategory.save();
        res.status(200).json({ message: "Category added successfully" });
    } catch (error) {
        console.log("Error in addCategory controller", error.message);
        res.status(500).json({ message: error.message });
    }
}