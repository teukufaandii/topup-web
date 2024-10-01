import express from "express";
import { confirmOrder, getProducts } from "../controllers/user.controllers.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/fetchproducts", getProducts);
router.post("/confirm-order", protectRoute, confirmOrder, );

export default router;