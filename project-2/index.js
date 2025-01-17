// To do Aplication

const express=require("express");
const server=express();
require("dotenv").config();
// Database connection
const databaseConnection=require("./config/db");
databaseConnection.dbConnect();

server.use(express.json());

// importing router
const taskRouter=require("./routes/taskRoutes");

server.use("/api",taskRouter);


server.listen(process.env.PORT,()=>{
     console.log(`Server is running on port--${process.env.PORT} `);
})