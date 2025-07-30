import ServiceModel from "../Models/serviceModel.js";

//Add New Service
export const addNewService = async (req, res) => {
  try {
    const imagePath = req.file ? `uploads/${req.file.filename}` : null;
    const serviceData = {
      ...req.body,
      image: imagePath,
    };

    const service = new ServiceModel(serviceData);
    await service.save();
    res.status(201).json({
      message: "Service Added Successfully",
      service,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to add service", error });
  }
};

//Get All Services
export const getAllServices = async (req, res) => {
  try {
    const services = await ServiceModel.find();
    res.status(200).json({
      message: "Showing All Services",
      services,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch services", error });
  }
};

//Update Servics
export const updateService = async (req, res) => {
  try {
    const { id } = req.params;

    const imagePath = req.file ? `uploads/${req.file.filename}` : null;
    const updateServiceData = {
      ...req.body,
    };
    if (imagePath) {
      updateServiceData.image = imagePath;
    }
    //find existing service by ID
    const existingService = await ServiceModel.findById(id);
    if (!existingService) {
      return res.status(404).json({ message: "Service Not Found" });
    }
    //Update the service
    const updatedService = await ServiceModel.findByIdAndUpdate(
      id,
      updateServiceData,
      { new: true }
    );
    res.status(200).json({
      message: "Service Updated Successfully",
      service: updatedService,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update service", error });
  }
};

//Delete Service
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedService = await ServiceModel.findByIdAndDelete(id);
    if (!deletedService) {
      return res.status(404).json({ message: "Service Not Found" });
    }
    res.status(200).json({
      message: "Service Deleted Successfully",
      service: deletedService,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete service", error });
  }
};
