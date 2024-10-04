import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ msg: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ msg: "Unauthorized: Token has expired" });
        }
        if (err.name === "JsonWebTokenError") {
          return res.status(401).json({ msg: "Unauthorized: Invalid token" });
        }
        return res.status(500).json({ msg: "Token verification failed" });
      }
      return decoded;
    });

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ msg: "Unauthorized: User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.log("Error in protectRoute middleware", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
