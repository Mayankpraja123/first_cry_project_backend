
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
      brandName: { type: String, required: true },
      category: { type: String, required: false },
      description: { type: String, required: false },
      productName: { type: String, required: false },
      price: { type: Number, required: false },
      quantity: { type: Number, required: false },
      images: [{ type: String, required: false }],
      discount: { type: Number, required: false },
      sizes: [{ type: String, required: false }],
      color: { type: String, required: false },
      gender: { type: String, required: false },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
const Product = mongoose.model("product", productSchema);//products
module.exports = Product