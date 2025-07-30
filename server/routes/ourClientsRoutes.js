import express from 'express';
import upload from '../middlewares/upload.js';
import { addNewClient, deleteClient, getAllClients, updateClient } from '../Controller/ourClientsController.js';

const router = express.Router();

//Add New Client
router.post('/addNew', upload.single('image'), addNewClient);

//Get All Clients
router.get('/getAll', getAllClients);

//Update Client
router.put('/update/:id', upload.single('image'), updateClient);

//Delete Client
router.delete('/delete/:id', deleteClient);

export default router;
