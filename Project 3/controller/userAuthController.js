const userProfileModel = require("../models/userProfileModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.userLogin = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const filter = {
      phone: phone,
    };

    const result = await userProfileModel.findOne(filter);
    const flag = bcrypt.compareSync(password, result.password); // true // false
    if (result) {
      if (flag) {
        jwt.sign({ userId: result._id },process.env.PRIVATE_KEY, { expiresIn:"1d" },function (err, token) {
            if (err) {
              res.status(400).json({ code: 400, message: "Internal server error",Error:err });
            } else {
                res.cookie("token",token,{maxAge:24 * 60 * 60 * 1000,
                  httpOnly: true,              // Accessible only by the web server
                  secure: true,                // Ensures the cookie is sent over HTTPS
                  sameSite: "strict",          // Prevents CSRF attacks
                });
                res.send({code:200,message:"login successful"});

              // res.status(200).json({
              //     code: 200,
              //     message: "Login successfuly",
              //     Token: token,
              //   });
            }
          }
        );
      } else {
        res.status(200).json({ code: 400, message: "Wrong password" });
      }
    } else {
      res.status(200).json({ code: 400, message: "User does not exist" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, message: "Internal server error", Error: err });
  }
};
