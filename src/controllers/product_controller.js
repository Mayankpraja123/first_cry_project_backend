const  express = require("express")

const router = express.Router();

const Product = require("../modules/product_module")




router.post("",async (req,res)=>{
    console.log("post methos is called");
        const user = await Product.create(req.body);
        return res.status(201).send({user});
    });
 
router.get("",async (req,res)=>{
    console.log("get methos is called");
// const users = await Product.find().sort({id:-1}).lean().exec();
    const users = await Product.find();
    return res.status(200).send({users})
});

module.exports = router;