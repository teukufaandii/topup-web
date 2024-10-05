import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import userRoutes from "./routes/user.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import mongoDbConnect from "./db/mongoDbConnect.js";
import gamesRoutes from "./routes/game.routes.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

const PORT = process.env.PORT || 8000;

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);
app.use("/api", transactionRoutes);
app.use("/api/games", gamesRoutes);

console.log("MongoDb connected: ", process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  mongoDbConnect();
});
