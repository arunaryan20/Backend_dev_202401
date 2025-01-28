const jobModel = require("../models/job");
const appliedJobsModel = require("../models/appliedJobsModel");
const { ObjectId } = require("mongodb");

exports.jobList = async (req, res) => {
  try {
    const result = await jobModel.find();
    res.status(200).json({ code: 200, message: "Job list", Data: result });
  } catch (err) {
    res.status(500).json({ code: 500, message: "Internal server error" });
  }
};

exports.applyJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    const data = {
      userId: req.decoded.userId,
      jobId: jobId,
    };
    await appliedJobsModel.create(data);

    res.status(201).json({ code: 200, message: "Job applied" });
  } catch (err) {
    res.status(500).json({ code: 500, message: "Internal server error" });
  }
};

exports.getAppliedJob = async (req, res) => {
  try {
    console.log(req.decoded.userId);
    //       const result=await appliedJobsModel.find();
    const pipeline = [
      {
        $match: {
          userId: new ObjectId(req.decoded.userId),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId", // Field in the users collection
          foreignField: "_id", // Field in the cities collection
          as: "usersDetails", // Output array field
        },
      },
      {
        $lookup: {
          from: "jobs",
          localField: "jobId", // Field in the users collection
          foreignField: "_id", // Field in the cities collection
          as: "jobsDetails", // Output array field
        },
      },
      {
        $unwind: "$usersDetails", // Flatten the array
      },
      {
        $unwind: "$jobsDetails", // Flatten the array
      },
      {
        $project: {
          usersDetails: 1,
          jobsDetails: 1,
        },
      },
    ];

    const result = await appliedJobsModel.aggregate(pipeline);

    //      const filter={
    //         userId:req.decoded.userId
    //      }

    //     const result = await appliedJobsModel
    //       .find(filter)
    //       .populate("userId")
    //       .populate("jobId");
    res
      .status(200)
      .json({ code: 200, message: "Applied jobs list", data: result });
  } catch (err) {
    console.log("Errro--->", err);
    res.status(500).json({ code: 500, message: "Internal server error" });
  }
};
