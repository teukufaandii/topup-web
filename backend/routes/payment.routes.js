import express from "express";
import fetch from "node-fetch"; 
import Order from "../models/order.model.js";

const router = express.Router();

router.post("/create-payment-intent", async (req, res) => {
    const { amount } = req.body;

    const orderId = await Order.findOne({ _id: req.body.orderId });

    const transactionDetails = {
        transaction_details: {
            order_id: orderId.orderId, 
            gross_amount: amount * 100 
        },
        credit_card: {
            secure: true
        }
    };

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Basic U0ItTWlkLXNlcnZlci1rVU44Yjh6dFhjUjdHanZTRkk2ckhTVlk6aGFsb2Rlaw==' // Your Midtrans API key
        },
        body: JSON.stringify(transactionDetails)
    };

    try {
        const response = await fetch('https://app.sandbox.midtrans.com/snap/v1/transactions', options);
        const data = await response.json();

        if (response.ok) {
            res.json(data);
        } else {
            res.status(response.status).json(data);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

export default router;
