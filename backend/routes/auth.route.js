import express from "express";
import User from "../models/user.model.js";
import { Register } from "../controllers/auth.controller.js";

const router = express.Router();

// Register a new user

router.post("/register", Register);

export default router;