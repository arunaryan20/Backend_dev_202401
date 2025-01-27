const adminProfileModel=require("../../models/adminProfileModel");
const bcrypt=require("bcryptjs");
exports.createProfile=async(req,res)=>{
          try{
                    const {email,password}=req.body;
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
                                email: email,
                                password: hash,
                              };
                              await adminProfileModel.create(data);
                              res
                                .status(201)
                                .json({ code: 200, message: "Admin created Successfuly" });
                            }
                          }
                        );
                      });
                   
          }catch(err){
            res.status(500).json({code:500,message:"Internal server error"});
          }
}