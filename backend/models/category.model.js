import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ["currency", "monthlyPass", "battlePass"],
  },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
