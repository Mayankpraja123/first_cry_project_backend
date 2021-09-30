const  express = require("express")

const router = express.Router();

const Cart = require("../modules/cart_modules")

router.post("",async (req,res)=>{
    console.log("cart ::::: methos is called");
        const post = await Cart.create(req.body);
        return res.status(201).send({post});
    });


router.get("",async(req,res)=>{
    const post = await Cart.find();
    return res.status(200).send({post});
});

module.exports = router