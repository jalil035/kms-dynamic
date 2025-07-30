//server
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {
  DATABASE,
  MAX_JSON_SIZE,
  PORT,
  REQUEST_TIME,
  REQUEST_NUMBER,
  URL_ENCODER,
  WEB_CASH,
} from "./config/config.js";
import currentProject from "./routes/currentProjectRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import Service from "./routes/serviceRoutes.js";
import OurClients from "./routes/ourClientsRoutes.js";
import GalleryRoutes from "./routes/galleryRoutes.js";
import LeaderBoardRoutes from "./routes/leaderBoardRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//database connection
mongoose
  .connect(DATABASE, { autoIndex: true })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
app.use("/api/currentProject", currentProject);
app.use("/api/service", Service);
app.use("/api/ourClients", OurClients);
app.use("/api/gallery", GalleryRoutes);
app.use("/api/leaderBoard", LeaderBoardRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
