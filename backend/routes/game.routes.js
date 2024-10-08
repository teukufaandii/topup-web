import express from "express";
import { getGameBySlug, getGames } from "../controllers/game.controller.js";

const router = express.Router();

router.get("/fetch-games", getGames);
router.get("/:slug", getGameBySlug);

export default router;
