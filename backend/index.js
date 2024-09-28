import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import mongoDbConnect from "./db/mongoDbConnect.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const PORT = process.env.PORT || 8000;

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

console.log("MongoDb connected: ", process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  mongoDbConnect();
});
