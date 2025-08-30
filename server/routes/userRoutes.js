const express = require("express");

const {
  createUser,
  getAllUser,
  loginUser,
} = require("../controller/authController");
const { patchUser } = require("../controller/userController");
const { verifyToken } = require("../middleware/verifyToken");

const router = express.Router();
router.get("/", verifyToken, getAllUser);
router.patch("/", verifyToken, patchUser);
router.route("/register").post(createUser);
router.route("/login").post(loginUser);

module.exports = router;
