//# hook up everything in - server.js
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env

import { connectDB } from "./config/db.js";

import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import { authRoutes } from "./routes/authRoutes.js";
import { todoRoutes } from "./routes/todoRoutes.js";

console.log("MONGO_URI: ", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// Use CORS to allow requests from specific origins
app.use(
  cors({
    origin: "http://localhost:5173", // allow your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
//app.use("/");
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
