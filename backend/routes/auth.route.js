import express from "express";
import { Register, Login, userHome } from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// Register a new user

router.post("/register", Register);

router.post("/login", Login);

router.get("/me", authMiddleware, userHome);

export default router;
