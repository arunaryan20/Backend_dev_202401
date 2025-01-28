const express=require("express");
const jobRoutes=express.Router();

const jobController=require("../controller/jobController");
const verifyUser=require("../middleware/authMiddlware");


jobRoutes.get("/job-list",verifyUser.isUser,jobController.jobList);
jobRoutes.post("/apply-job",verifyUser.isUser,jobController.applyJob);
jobRoutes.get("/applied-jobs-list",verifyUser.isUser,jobController.getAppliedJob);


module.exports=jobRoutes;