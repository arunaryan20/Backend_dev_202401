const express=require('express');
const server=express();
require("dotenv").config();
const port=process.env.PORT;


// body parser
server.use(express.json());

// Database connection
const databaseConnection=require("./config/database");
databaseConnection.dbConnect();

// User routes
const userProfileRouter=require("./routes/userProfileRoutes");
const userAuthRouter=require("./routes/userAuthRoutes");
const jobRouter=require("./routes/jobRoutes");

server.use("/api/user-profile",userProfileRouter);
server.use("/api/user-auth",userAuthRouter);
server.use("/api/job",jobRouter);


// Admin Routing

const adminProfileRouter=require("./Admin/routes/adminProfileRoute");
server.use("/api/admin-profile",adminProfileRouter);




server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})