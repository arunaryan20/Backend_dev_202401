const adminProfileModel=require("../../models/adminProfileModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const filter = {
      email: email,
    };

    const result = await adminProfileModel.findOne(filter);
    const flag = bcrypt.compareSync(password, result.password); // true // false
    if (result) {
      if (flag) {
        jwt.sign({ email: email },process.env.PRIVATE_KEY, { expiresIn:"1d" },function (err, token) {
            if (err) {
              res.status(400).json({ code: 400, message: "Internal server error",Error:err });
            } else {
              res.status(200).json({
                  code: 200,
                  message: "Login successfuly",
                  Token: token,
                });
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
