import express from "express";
import { getProducts } from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/fetchproducts", getProducts);

export default router;