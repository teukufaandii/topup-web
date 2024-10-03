import express from "express";
import {
  confirmOrder,
  getProducts,
  updateOrderStatus,
} from "../controllers/user.controllers.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/fetchproducts", getProducts);
router.post("/confirm-order", protectRoute, confirmOrder);
router.get("/update-order/:orderId", protectRoute, updateOrderStatus);

export default router;
