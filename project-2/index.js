// To do Aplication

const express=require("express");
const server=express();
const cors=require("cors");
require("dotenv").config();
// Database connection
const databaseConnection=require("./config/db");
databaseConnection.dbConnect();

server.use(express.json());
var corsOptions = {
     origin: 'http://localhost:3000', // Ensure this matches the frontend origin exactly
     methods: 'GET,POST,PUT,DELETE', // Allowed methods
     credentials: true, // Include cookies if needed
 };

server.use(cors(corsOptions));
// importing router
const taskRouter=require("./routes/taskRoutes");



server.use("/api",taskRouter);


server.listen(process.env.PORT,()=>{
     console.log(`Server is running on port--${process.env.PORT} `);
})