//authController.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const registerUser = async (req, res) => {
  try {
    console.log("Request received for user registration: ", req.body);
    const { name, email, password, phone } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword, phone });

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists: ", email);
      return res.status(400).json({ error: "Email already in use" });
    }

    try {
      const result = await newUser.save();
    } catch (error) {
      console.log("error while saving : ", error);
    }

    console.log("User is saved... ");
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    let userInfo = await User.findOne({ _id: req.params.id });

    if (!userInfo) {
      return res.status(404).json({ message: " User not found. " });
    }

    const { name, email, phone } = req.body;
    userInfo.name = name;
    userInfo.email = email;
    userInfo.phone = phone;

    await userInfo.save();

    res.status(201).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Osman
const loginUser = async (req, res) => {
  try {
    console.log("login requested, ", req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "User logged in successfully",
      token,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token");

  return res.status(200).json({ message: "User logged out successfully." });
};

export default { registerUser, loginUser, logoutUser, updateUser };
