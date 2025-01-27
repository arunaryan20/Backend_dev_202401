const userProfileModel = require("../models/userProfileModel");
const bcrypt = require("bcryptjs");
require("dotenv").config();

exports.createProfile = async (req, res) => {
  try {
    const { name, phone, password } = req.body;

    bcrypt.genSalt(10, async function (err, salt) {
      bcrypt.hash(
        password,
        salt,
        async function (err, hash) {
          if (err) {
            res
              .status(400)
              .json({ code: 400, message: "Internal server error",Error:err });
          } else {
            const data = {
              name: name,
              phone: phone,
              password: hash,
            };
            await userProfileModel.create(data);
            res
              .status(201)
              .json({ code: 200, message: "User created Successfuly" });
          }
        }
      );
    });
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, message: "Internal server error", Error: err });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, phone } = req.body;
     console.log("req.decoded--->",req.decoded);


    // const id = req.params.id;
    const filter = {
      phone: req.decoded.phone,
    };
    // const data = {
    //   name: name,
    //   phone: phone,
    //   image:req.file.filename
    // };
    // const options = {
    //   new: true,
    // };
   let result=await userProfileModel.findOne(filter);
       result.name=name; 
       result.phone=phone;
       result.image=req.file.filename;
       await result.save();
    // await userProfileModel.findByIdAndUpdate(filter, data, options);
    res.status(200).json({ code: 200, message: "Profile updated successfuly" });
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, message: "Internal server error", Error: err });
  }
};

exports.deleteProfile = async (req, res) => {
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
exports.profileDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const filter = {
      _id: id,
    };

    const temp = {
      password: 0,
      createdAt: 0,
    };
    const result = await userProfileModel.findOne(filter, temp);
    res
      .status(200)
      .json({ code: 200, message: "Profile details", data: result });
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, message: "Internal server error", Error: err });
  }
};
