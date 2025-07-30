import GalleryModel from "../Models/GalleryModel.js";

// Add New Gallery Image
export const addNewGallery = async (req, res) => {
  try {
    const imagePath = req.file ? `uploads/${req.file.filename}` : null;
    const galleryData = {
      ...req.body,
      image: imagePath,
    };
    const gallery = new GalleryModel(galleryData);
    await gallery.save();
    res.status(201).json({
      message: "Gallery Added Successfully",
      gallery,
    });
  } catch (error) {
    res.status(500).json({ message: "Error adding gallery image", error });
  }
};

//Get All Gallery
export const getAllGallery = async (req, res) => {
  try {
    const gallery = await GalleryModel.find();
    res.status(200).json({
      message: "Showing All Gallery Images",
      gallery,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching gallery images", error });
  }
};

//Update Gallery
export const updateGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const imagePath = req.file ? `uploads/${req.file.filename}` : null;
    const galleryData = {
      ...req.body,
      image: imagePath,
    };
    //find existing gallery image by ID
    const existingGallery = await GalleryModel.findById(id);
    if (!existingGallery) {
      return res.status(404).json({
        message: "Gallery Image Not Found",
      });
    }
    //Update the gallery image
    const updateGallery = await GalleryModel.findByIdAndUpdate(
      id,
      galleryData,
      { new: true }
    );
    res.status(200).json({
      message: "Gallery Image Updated Successfully",
      gallery: updateGallery,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating gallery image", error });
  }
};

//Delete Gallery
export const deleteGallery = async (req, res) => {
  try {
    const { id } = req.params;
    // Find existing gallery image by ID
    const deletedGallery = await GalleryModel.findByIdAndDelete(id);
    if (!deletedGallery) {
      return res.status(404).json({
        message: "Gallery Image Not Found",
      });
    }
    res.status(200).json({
      message: "Gallery Image Deleted Successfully",
      gallery: deletedGallery,
    });
  } catch (error) {
    res.status(500).json({ message: "Error deleting gallery image", error });
  }
};
