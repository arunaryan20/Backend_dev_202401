const userProfileModel = require("../models/userProfileModel");
const bcrypt = require("bcryptjs");

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
        res.status(200).json({ code: 200, message: "Login successfuly" });
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
