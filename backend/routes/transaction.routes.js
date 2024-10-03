import express from "express";
import { fethcMidtransNotification } from "../controllers/transaction.controller.js";

const router = express.Router();

router.post("/transaction/finish", fethcMidtransNotification);

export default router;
