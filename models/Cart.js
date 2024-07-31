const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    Categories: { type: String },
    Size: { type: String },
    color: { type: String },
    price: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", CartSchema);
