import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const phoneRegex = /^\+62\d{9,}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return res
        .status(400)
        .json({
          message:
            "Phone number must start with +62 and contain at least 9 digits",
        });
    }

    const existingPhone = await User.findOne({ phoneNumber });
    if (existingPhone) {
      return res.status(400).json({ message: "Phone number already exists" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    if (!phoneNumber || !password || !fullName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      password: hashedPassword,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
      });
    } else {
      res.status(400).json({ msg: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ msg: error.message });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Ensure email and password are provided
    if (!email || !password) {
      return res.status(400).json({ msg: "Please provide both email and password" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    
    // If user does not exist, return error
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    // Compare passwords
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    // If password is incorrect, return error
    if (!isPasswordCorrect) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    // Generate token and set cookie
    generateTokenAndSetCookie(user._id, res);

    // Return user data
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
    });
  } catch (error) {
    console.error("Error in signin controller", error.message);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
};


export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ msg: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controlller", error.message);
    res.status(500).json({ msg: error.message });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    console.log("Error in getMe controlller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const validateToken = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ msg: "Unauthorized: No user found" });
  }

  res.status(200).json({ userId: req.user._id, token: req.cookies.jwt });
};
