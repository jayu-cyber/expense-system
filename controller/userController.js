const userModel = require("../models/userModel");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

// ✅ Fix: Correct parameter order
const registerController = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Debug log
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    console.error(error); // Log actual error
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};


// ✅ Fix: Export both controllers together
module.exports = { loginController, registerController };
