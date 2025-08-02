import OurClientsModel from "../Models/ourClientsModel.js";

//Add New Clients
export const addNewClient = async (req, res) => {
  try {
    const imagePath = req.file ? `uploads/${req.file.filename}` : null;
    const clintData = {
      ...req.body,
      image: imagePath,
    };

    const client = new OurClientsModel(clintData);
    await client.save();
    res.status(201).json({
      message: "Client Added Successfully",
      client,
    });
  } catch (error) {
    res.status(500).json({ message: "Error adding client", error });
  }
};

//get Home page 4 clients
export const getHomeClients = async (req, res) => {
  try {
    const clients = await OurClientsModel.find().limit(4);
    res.status(200).json({
      message: "Showing Home Page Clients",
      clients,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching home clients", error });
  }
};

//Get All Clients
export const getAllClients = async (req, res) => {
  try {
    const clients = await OurClientsModel.find();
    res.status(200).json({
      message: "Showing All Clients",
      clients,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching clients", error });
  }
};

//Update Client
export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const imagePath = req.file ? `uploads/${req.file.filename}` : null;
    const updateClientData = {
      ...req.body,
    };
    if (imagePath) {
      updateClientData.image = imagePath;
    }

    // Find existing client by ID
    const existingClint = await OurClientsModel.findById(id);
    if (!existingClint) {
      return res.status(404).json({
        message: "Client Not Found  ",
      });
    }
    // Update the client
    const updatedClient = await OurClientsModel.findByIdAndUpdate(
      id,
      updateClientData,
      { new: true }
    );
    res.status(200).json({
      message: "Client Updated Successfully",
      client: updatedClient,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating client", error });
  }
};

//Delete Client
export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    // Find existing client by ID
    const deletedClient = await OurClientsModel.findByIdAndDelete(id);
    if (!deletedClient) {
      return res.status(404).json({
        message: "Client Not Found",
      });
    }
    res.status(200).json({
      message: "Client Deleted Successfully",
      client: deletedClient,
    });
  } catch (error) {
    res.status(500).json({ message: "Error deleting client", error });
  }
};
