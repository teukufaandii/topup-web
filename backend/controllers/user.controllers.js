import Product from "../models/product.model.js";
import User from "../models/user.model.js";
import Order from "../models/order.model.js";
import fetch from "node-fetch";
import Payment from "../models/payment.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const confirmOrder = async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Please sign in first" });
    }

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else if (user.role === "admin") {
      return res
        .status(403)
        .json({ message: "Lah lu admin kocak ngapain beli" });
    }

    const { products } = req.body;

    if (!products || products.length === 0) {
      return res
        .status(400)
        .json({ message: "No products provided for the order." });
    }

    const productDetails = await Promise.all(
      products.map(async (item) => {
        const product = await Product.findById(item.productId);
        if (!product || product.status === "unavailable") {
          throw new Error(
            `Product not found or unavailable: ${item.productId}`
          );
        }
        return {
          product: product._id,
          quantity: item.quantity,
          price: product.discount ? product.discountPrice : product.price,
        };
      })
    );

    const totalAmount = productDetails.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const order = new Order({
      orderId: `order-${Date.now()}`,
      user: user._id,
      products: productDetails.map((item) => ({
        product: item.product,
        quantity: item.quantity,
      })),
      amount: totalAmount,
      status: "process",
    });

    await order.save();

    const transactionDetails = {
      transaction_details: {
        order_id: order.orderId,
        gross_amount: totalAmount,
      },
      credit_card: {
        secure: true,
      },
    };

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${process.env.MIDTRANS_SERVER_KEY}`,
      },
      body: JSON.stringify(transactionDetails),
    };

    const response = await fetch(
      "https://app.sandbox.midtrans.com/snap/v1/transactions",
      options
    );
    const paymentData = await response.json();

    if (response.ok) {
      const payment = new Payment({
        paymentId: order.orderId,
        status: paymentData.transaction_status,
        paymentDate: new Date(),
      });

      await payment.save();

      res
        .status(200)
        .json({
          message: "Order confirmed and payment intent created",
          order,
          paymentData,
        });
    } else {
      res.status(response.status).json(paymentData);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Please sign in first" });
    }

    const orderId = req.params.orderId;

    const order = await Order.findOne({ orderId: orderId });

    const userId = req.user._id;

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (userId.toString() !== order.user.toString()) {
      return res
        .status(401)
        .json({ message: "Unauthorized: You are not the owner of this order" });
    }

    if (order.status === "process") {
      res.json({ message: "Order is in process" });
    } else if (order.status === "cancel") {
      res.json({ message: "Your order is canceled" });
    } else if (order.status === "completed") {
      res.json({ message: "Your order is completed" });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
