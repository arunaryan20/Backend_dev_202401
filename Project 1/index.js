//.env  // mongoose
// mongodb schema   
const express = require("express");
const server = express();

const mongoose = require("mongoose");

require("dotenv").config();

const mongodbConnection=require("./db");
mongodbConnection.dbConnect();


// mongoose
//   .connect(process.env.DB_URL)
//   .then(() => console.log("Connected to Database"))
//   .catch((err) => {
//     console.log("Error in db connection--->",err);
//   });

// const PORT=8080;

console.log("Port--->", process.env.PORT);

const router = require("./routes");
const cartRouter = require("./cartRoute");

server.use("/api", router);
server.use("/cart", cartRouter);

server.listen(process.env.PORT, () => {
  console.log("Server is running on PORT--->", process.env.PORT);
});
