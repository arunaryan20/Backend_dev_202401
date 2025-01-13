const express=require("express");

const appRoute=express.Router();

appRoute.get("/btech",(req,res)=>{
    res.send("Response from B.tech department");
});

module.exports=appRoute;