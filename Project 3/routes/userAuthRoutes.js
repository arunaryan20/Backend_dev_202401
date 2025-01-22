const express=require("express");
const userAuthRoutes=express.Router();

const userAuthController=require("../controller/userAuthController");

userAuthRoutes.post("/user-login",userAuthController.userLogin);

module.exports=userAuthRoutes;