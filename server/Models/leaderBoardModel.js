import mongoose from "mongoose";

const leaderBoardSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const LeaderBoardModel = mongoose.model("leaderBoare", leaderBoardSchema);

export default LeaderBoardModel;
