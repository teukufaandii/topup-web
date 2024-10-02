import Payment from "../models/payment.model.js";

export const fethcMidtransNotification = async (req, res) => {
    const body = req.body;

    if (body.transaction_status === 'settlement') {
        console.log('Payment settled for order', body.order_id);
    }

    try {
        const payment = await Payment.findOne({ paymentId: body.order_id });

        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        payment.status = "completed";
        await payment.save();

        console.log('Payment status updated to completed for payment id:', payment);
        
        res.status(200).json({ message: 'Notification received and payment updated' });
    } catch (error) {
        console.error('Error updating payment status:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

    res.status(200).json({ message: 'Notification received' });
};
