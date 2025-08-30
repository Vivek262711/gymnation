const User = require("./../model/User");
const jwt = require("jsonwebtoken");

exports.getAllUser = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({
      status: "success",
      length: allUsers.length,
      users: allUsers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "Something went wronge",
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const currUser = await User.findOne({ email: req.body.email });
    if (!currUser ) {
      return res.status(404).json({
        status: "failed",
        message: "User does not exist. Please Register.",
      });
    }
    if (currUser.password !== req.body.password ) {
      return res.status(404).json({
        status: "failed",
        message: "User details incorrect",
      });
    }
    const token = jwt.sign(
      {
        _id: currUser._id,
      },
      process.env.JWT_SECRET
    );
    res.status(200).json({
      status: "success",
      message: "Login Successful",
      user: currUser,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "Something went wronge",
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ status: "success", message: "New user created" });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = [];
      Object.keys(error.errors).forEach((key) => {
        errors.push(error.errors[key].message);
      });
      let sError = errors.join(" ");
      return res.status(400).json({ status: "failed", message: sError });
    } else {
      let error = "Something went very wrong";
      const userName = await User.findOne({
        username: req.body.username,
      });
      if (userName) {
        error = "Username already in use";
      }
      const email = await User.findOne({ email: req.body.email });
      if (email) {
        error = "Email already in use";
      }
      res.status(500).json({ status: "failed", message: error });
    }
  }
};
