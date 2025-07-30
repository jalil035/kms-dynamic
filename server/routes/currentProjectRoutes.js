import express from 'express';
import { addCurrentProject, deleteCurrentProject, getAllCurrentProjects, updateCurrentProject } from '../Controller/currentProjectController.js';
import upload from '../middlewares/upload.js';
const router = express.Router();

//Add New Project
router.post("/addNew", upload.single("image"), addCurrentProject);

//Get All Current Projects
router.get("/getAll", getAllCurrentProjects);

//Update Current Project
router.put("/update/:id", upload.single("image"), updateCurrentProject);

//Delete Project
router.delete("/delete/:id", deleteCurrentProject);


export default router;