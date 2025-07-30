import LeaderBoardModel from "../Models/leaderBoardModel.js";

export const addNewLeaderBoard = async (req, res) => {
  try {
    const imagePath = req.file ? `uploads/${req.file.filename}` : null;
    const leaderBoardData = {
      ...req.body,
      image: imagePath,
    };
    const leaderBoard = new LeaderBoardModel(leaderBoardData);
    await leaderBoard.save();
    res.status(201).json({
      message: "Leader Board Added Successfully",
      leaderBoard,
    });
  } catch (error) {
    res.status(500).json({ message: "Error adding new leader board", error });
  }
};

export const getAllLeaderBoard = async (req, res) => {
  try {
    const leaderBoard = await LeaderBoardModel.find();
    res.status(200).json({
      message: "Showing All Leader Board",
      leaderBoard,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching leader board", error });
  }
};

export const updateLeaderBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const imagePath = req.file ? `uploads/${req.file.filename}` : null;
    const leaderBoardData = {
      ...req.body,
      image: imagePath,
    };
    // Find existing leader board by ID
    const existingLeaderBoard = await LeaderBoardModel.findById(id);
    if (!existingLeaderBoard) {
      return res.status(404).json({
        message: "Leader Board Not Found",
      });
    }
    // Update the leader board
    const updatedLeaderBoard = await LeaderBoardModel.findByIdAndUpdate(
      id,
      leaderBoardData,
      { new: true }
    );
    res.status(200).json({
      message: "Leader Board Updated Successfully",
      updatedLeaderBoard,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating leader board", error });
  }
};

// Delete Leader Board
export const deleteLeaderBoard = async (req, res) => {
  try {
    const { id } = req.params;
    // Find existing leader board by ID
    const deleteLeaderBoard = await LeaderBoardModel.findByIdAndDelete(id);
    if (!deleteLeaderBoard) {
      return res.status(404).json({
        message: "Leader Board Not Found",
      });
    };
    res.status(200).json({
      message: "Leader Board Deleted Successfully",
      leaderBoard: deleteLeaderBoard,
    });
  } catch (error) {
    res.status(500).json({ message: "Error deleting leader board", error });
  };
};
