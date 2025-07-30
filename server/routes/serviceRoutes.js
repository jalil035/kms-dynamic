import express from "express";
import upload from "../middlewares/upload.js";
import {
  addNewService,
  deleteService,
  getAllServices,
  updateService,
} from "../Controller/serviceController.js";

const router = express.Router();

//Add New Service
router.post("/addNew", upload.single("image"), addNewService);

//Get All Services
router.get("/getAll", getAllServices);

//Update Services
router.put("/update/:id", upload.single("image"), updateService);

//Delete Service
router.delete("/delete/:id", deleteService);

export default router;
