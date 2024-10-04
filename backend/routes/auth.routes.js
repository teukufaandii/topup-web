import express from "express";
import {
  forgotPassword,
  getMe,
  logout,
  resetPassword,
  signin,
  signUp,
  validateToken,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/getme", protectRoute, getMe);
router.get("/validate", protectRoute, validateToken);
router.post("/logout", protectRoute, logout);

router.post("/signin", signin);
router.post("/signup", signUp);
router.post("/forgot-password", forgotPassword);
router.put("/reset-password", resetPassword);


export default router;
