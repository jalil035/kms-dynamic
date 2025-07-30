import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    subject1: {
      type: String,
      required: true,
    },
    description1: {
      type: String,
      required: true,
    },
    subject2: String,
    description2: String,
    subject3: String,
    description3: String,
    subject4: String,
    description4: String,
    subject5: String,
    description5: String,
  },
  { timestamps: true, versionKey: false }
);

const ServiceModel = mongoose.model("service", serviceSchema);

export default ServiceModel;
