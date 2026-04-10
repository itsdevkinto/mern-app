import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/db.config.js";
import authRouter from "./routes/auth.route.js";

const PORT = process.env.PORT || 4000;
const uri = process.env.MONGODB_URI;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", authRouter);

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

startServer();
