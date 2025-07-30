import currentProjectModel from "../Models/currentProjectModel.js";
import completeProjectModel from "../Models/completeProjectModel.js";

// Add New Project
export const addCurrentProject = async (req, res) => {
  try {
    const imagePath = req.file ? `uploads/${req.file.filename}` : null;
    const projectData = {
      ...req.body,
      image: imagePath,
    };
    const project = new currentProjectModel(projectData);

    // if Current Project status is Completed move to Complete Project
    if (project.status === "completed") {
      const completeProject = new completeProjectModel(projectData);
      await completeProject.save();
      return res.status(201).json({
        message: "project added to complete project",
        project: completeProject,
      });
    } else {
      await project.save();
      return res
        .status(201)
        .json({ message: "project added to current project", project });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to add project", error });
  }
};

// Get All Current Projects
export const getAllCurrentProjects = async (req, res) => {
  try {
    const currentProject = await currentProjectModel.find();
    const completedProject = await completeProjectModel.find();

    const projects = [...currentProject, ...completedProject];
    res.status(200).json({
      message: "Showing all current and completed projects",
      projects,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects", error });
  }
};

//Update Current Project
export const updateCurrentProject = async (req, res) => {
  try {
    const { id } = req.params;

    //Find by existing project by ID
    const existingProject = await currentProjectModel.findById(id);
    if (!existingProject) {
      return res.status(404).json({ message: "Project Not Found" });
    }
    //Check if the status is Completed
    if (req.body.status === "completed") {
      //Move to Complete Project
      const completeProject = new completeProjectModel({
        ...existingProject._doc,
        ...req.body,
      });
      await completeProject.save();
      //Delete from Current Project
      await currentProjectModel.findByIdAndDelete(id);

      return res.status(200).json({
        message: "Project moved to completed projects",
        project: completeProject,
      });
    } else {
      //If not completed just update the current project
      const updateProject = await currentProjectModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
      return res.status(200).json({
        message: "Project updated successfully",
        project: updateProject,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update project", error });
  }
};

//Delate Project
export const deleteCurrentProject = async (req, res) => {
  try {
    const { id } = req.params;
    let deletedProject = await currentProjectModel.findByIdAndDelete(id);
    if (!deletedProject) {
      deletedProject = await completeProjectModel.findByIdAndDelete(id);
    }
    if (!deletedProject) {
      return res.status(404).json({ message: "Project Not Found" });
    }
    return res.status(200).json({
      message: "Project Deleted Successfully",
      project: deletedProject,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to Deleted Project" });
  }
};
