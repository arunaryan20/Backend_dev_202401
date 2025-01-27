const express=require("express");

const adminRoutes=express.Router();

const verifyAdmin=require("../middleware/authMiddleware");

const adminProfileController=require("../controller/adminProfileController");
const adminAuthController=require("../controller/adminAuthController");
const jobController=require("../controller/jobController");

/// Profile routes
adminRoutes.post("/create-admin",adminProfileController.createProfile);

// Auth routes
adminRoutes.post("/admin-login",adminAuthController.adminLogin);

// Job routes
adminRoutes.post("/create-job",verifyAdmin.isAdmin,jobController.createJob);

module.exports=adminRoutes;