console.log("server file");
const express = require("express");
const connect = require("./config/db")

const app = express();
app.use(express.json());



const productController = require("./contollers/product_controller");
const userController = require("./contollers/user_controller");
const cartController = require("./contollers/cart_controller");

app.use("/users",userController);
app.use("/products",productController);
app.use("/carts",cartController)


app.listen(5000,async function (){
    await connect();
    console.log("listining on port 5000");
});



