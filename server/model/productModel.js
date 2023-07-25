const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  pid: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  stocks:{
    type: Number,
    default: 1
  }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;