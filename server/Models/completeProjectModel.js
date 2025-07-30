import mongoose from "mongoose";

const completeProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    client: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    duration: [
      {
        start: {
          type: String,
        },
        end: {
          type: String,
        },
      },
    ],
    location: {
      type: String,
      required: true,
    },
    projectOverview: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      enum: ["ongoing", "completed"],
      default: "completed",
    },
  },
  { timestamps: true, versionKey: false }
);

const CompleteProjectModel = mongoose.model(
  "completeProject",
  completeProjectSchema
);

export default CompleteProjectModel;
