const express = require("express");
const {
  loginController,
  registerController,
} = require("../controller/userController");

const router = express.Router();

// ✅ Fix: These should be POST, not GET, if you're sending data
router.post("/login", loginController);
router.post("/register", registerController);

// ✅ Fix: Typo
module.exports = router;
