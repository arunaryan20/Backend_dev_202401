const express=require("express");
const route=express.Router();

route.get("/home",(req,res)=>{
     console.log("Route wala console");
     res.send("Route wala home");  
});
route.get("/about",(req,res)=>{
    console.log("Route wala console");
    res.send("Route wala response about");  
});


module.exports=route;