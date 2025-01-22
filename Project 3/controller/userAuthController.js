const userProfileModel = require("../models/userProfileModel");
exports.userLogin = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const filter = {
      phone: phone,
    };

    const result = await userProfileModel.findOne(filter);
    if (result) {
      if (result.password === password) {
        res.status(200).json({ code: 200, message: "Login successfuly" });
      }else{
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
