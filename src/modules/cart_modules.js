const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        userId: {type: mongoose.Schema.Types.ObjectId,ref: "user"},
        products: [{productId: Number,quantity: Number,name: String,price: Number}],
    
      modifiedOn: {
        type: Date,
        default: Date.now,
        },
    },
    { timestamps: true }
  );
  
const Cart = new mongoose.model("cart",cartSchema);
module.exports = Cart