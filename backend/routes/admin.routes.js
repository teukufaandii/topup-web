import express from "express";
import { adminVerify } from "../middleware/adminVerify.js";
import { addCategory, addGame, addProduct, getUsers } from "../controllers/admin.controllers.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/getusers", protectRoute, adminVerify, getUsers);
router.post("/addproduct", protectRoute, adminVerify, addProduct);
router.post("/addgame", protectRoute, adminVerify, addGame);
router.post("/category", protectRoute, adminVerify, addCategory);

export default router;
