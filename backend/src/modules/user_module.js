
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
      name: {type: String,required: true},
      username: {type: String,required: true },
      password: {type: String,required: true},
  
      cartItems: [{productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
          quantity: { type: Number, default: 1 }}],
  
      wishListItems: [{productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" }}],
      active: { type: Boolean, default: false }
   },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  
  const User = mongoose.model("user",userSchema)
  module.exports = User