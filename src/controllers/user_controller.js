const  express = require("express")

const router = express.Router();

const User = require("../modules/user_module")

console.log("user controler");

router.post("",async (req,res)=>{
    console.log("post post methos is ::::: methos is called");
        const post = await User.create(req.body);
        return res.status(201).send({post});
    });


router.get("",async(req,res)=>{
    const post = await User.findById(req.params.id);
    return res.status(200).send({post});
});


module.exports = router;