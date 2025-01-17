const express=require("express");

const taskRoute=express.Router();

const taskController=require("../controller/taskController");

taskRoute.post("/create-task",taskController.createTask);


module.exports=taskRoute;