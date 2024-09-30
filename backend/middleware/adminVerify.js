import User from "../models/user.model.js";

export const adminVerify = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: "Please sign in first" });
        }

        if (user.role !== "admin") {
            return res.status(403).json({ message: "Not authorized" });
        }

        next();
    } catch (error) {
        console.log(error.message + " in adminVerify middleware");
        return res.status(500).json({ message: error.message });
    }
};
