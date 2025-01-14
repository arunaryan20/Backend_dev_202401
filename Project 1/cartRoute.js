// mongodb /.env file

const express=require("express");
const cartRoute=express.Router();
const cartController=require("./cartController");
const middleware=require("./middleware/auth");


cartRoute.get("/cart-details",middleware.isAdmin,cartController.cartDetails);


module.exports=cartRoute;
