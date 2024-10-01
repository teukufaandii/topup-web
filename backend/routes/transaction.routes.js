import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/transaction-status/:orderId', async (req, res) => {
    const { orderId } = req.params;

    const url = `https://api.sandbox.midtrans.com/v2/${orderId}/status`;

    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `${process.env.MIDTRANS_SERVER_KEY}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (response.ok) {
            res.status(200).json(data);
        } else {
            res.status(response.status).json(data);
        }
    } catch (error) {
        console.error('Error retrieving transaction status:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
