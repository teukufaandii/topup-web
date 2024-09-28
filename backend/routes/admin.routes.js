import express from "express";
import { adminVerify } from "../middleware/adminVerify.js";
import { getUsers } from "../controllers/admin.controllers.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/getusers", protectRoute, adminVerify, getUsers);

export default router;
