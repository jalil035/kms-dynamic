import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    image: {
      type: String,
        required: true,
    },
    title: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const GalleryModel = mongoose.model("Gallery", GallerySchema);

export default GalleryModel;
