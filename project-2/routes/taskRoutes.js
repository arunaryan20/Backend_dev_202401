const express=require("express");

const taskRoute=express.Router();

const taskController=require("../controller/taskController");

taskRoute.post("/create-task",taskController.createTask);
taskRoute.get("/task-list",taskController.getNameList);
taskRoute.delete("/delete-task/:id",taskController.deleteTask);
taskRoute.put("/update-task/:id",taskController.updateTask);

module.exports=taskRoute;