const express=require("express");

const route=express.Router();

const controllerFile=require("./controller");

route.get("/about",controllerFile.getDetails);
route.get("/get-name",controllerFile.getName);



module.exports=route;