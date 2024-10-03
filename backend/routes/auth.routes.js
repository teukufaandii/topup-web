import express from "express";
import {
  getMe,
  logout,
  signin,
  signUp,
  validateToken,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/getme", protectRoute, getMe);
router.get("/validate", protectRoute, validateToken);
router.post("/signin", signin);
router.post("/signup", signUp);
router.post("/logout", logout);


export default router;
