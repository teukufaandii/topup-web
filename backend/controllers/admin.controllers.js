import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        if(!users) {
            return res.status(404).json({ message: "Users not found" });
        }

        
        if (users.length === 0) {
            return res.status(200).json([]);
        }

        res.status(200).json(users);
    } catch (error) {
        console.log("Error in getUsers controller", error.message);
        res.status(500).json({ message: error.message });
    }
}