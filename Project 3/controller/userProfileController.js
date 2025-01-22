const userProfileModel = require("../models/userProfileModel");
exports.createProfile = async (req, res) => {
  try {
    const { name, phone, password } = req.body;

    const data = {
      name: name,
      phone: phone,
      password: password,
    };
    await userProfileModel.create(data);
    res.status(201).json({ code: 200, message: "User created Successfuly" });
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, message: "Internal server error", Error: err });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const id = req.params.id;
    const filter = {
      _id: id,
    };
    const data = {
      name: name,
      phone: phone,
    };
    const options = {
      new: true,
    };
    await userProfileModel.findByIdAndUpdate(filter, data, options);
    res.status(200).json({ code: 200, message: "Profile updated successfuly" });
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, message: "Internal server error", Error: err });
  }
};
exports.deleteProfile =async (req, res) => {
  try {
    const { status } = req.body;
    const id = req.params.id;
    const filter = {
      _id: id,
    };
    const data = {
      status: status.toUpperCase(),
    };
    const options = {
      new: true,
    };
    await userProfileModel.findByIdAndUpdate(filter, data, options);
    res.status(200).json({ code: 200, message: "Profile deleted successfuly" });



  } catch (err) {
    res
      .status(500)
      .json({ code: 500, message: "Internal server error", Error: err });
  }
};
exports.profileDetails = (req, res) => {
  try {
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, message: "Internal server error", Error: err });
  }
};
