import mongoose from "mongoose";

const ourClientsSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const OurClientsModel = mongoose.model("ourClients", ourClientsSchema);

export default OurClientsModel;
