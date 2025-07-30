import express from "express";
import upload from "../middlewares/upload.js";
import {
  addNewLeaderBoard,
  deleteLeaderBoard,
  getAllLeaderBoard,
  updateLeaderBoard,
} from "../Controller/leaderBoardController.js";

const router = express.Router();

//add new leader board
router.post("/addNew", upload.single("image"), addNewLeaderBoard);

//get all leader board
router.get("/getAll", getAllLeaderBoard);

//update leader board
router.put("/update/:id", upload.single("image"), updateLeaderBoard);

//delete leader board
router.delete("/delete/:id", deleteLeaderBoard);

export default router;
