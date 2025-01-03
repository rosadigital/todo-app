//authRoutes.js
import express from "express";
const router = express.Router();
import authController from "../controllers/authController.js";

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/logout", authController.logoutUser);
router.put("/:id", authController.updateUser);

export { router as authRoutes };
