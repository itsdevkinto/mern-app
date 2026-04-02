import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.startsWith("Bearer") 
      ? req.headers.authorization.split(" ")[1] 
      : null;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, jwtSecret);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User no longer exists" });
    }

    req.user = user;
    next(); // Fixed the typo here
  } catch (error) {
    // If JWT expires or is invalid, treat it as 401, not 500
    if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
    
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};


export default authMiddleware;