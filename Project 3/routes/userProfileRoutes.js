const express=require("express");
const userProfileRoute=express.Router();
const imgMiddleware=require("../middleware/imgMiddleware");

const verifyUser=require("../middleware/authMiddlware");

const userProfileController=require("../controller/userProfileController");

userProfileRoute.post("/create-profile",userProfileController.createProfile);
userProfileRoute.put("/update-profile",verifyUser.isUser,imgMiddleware.upload,userProfileController.updateProfile);
userProfileRoute.put("/delete-profile/:id",userProfileController.deleteProfile);
userProfileRoute.get("/profile-details/:id",userProfileController.profileDetails);


module.exports=userProfileRoute;