import express from "express";
import upload from "../middlewares/upload.js";
import {
  addNewGallery,
  deleteGallery,
  getAllGallery,
  updateGallery,
} from "../Controller/galleryController.js";

const router = express.Router();

//Add New Gallery
router.post("/addNew", upload.single("image"), addNewGallery);

//Get All Gallery
router.get("/getAll", getAllGallery);

//Update Gallery
router.put("/update/:id", upload.single("image"), updateGallery);

//Delete Gallery
router.delete("/delete/:id", deleteGallery);

export default router;
