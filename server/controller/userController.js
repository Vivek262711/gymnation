const User = require("../model/User");

exports.patchUser = async (req, res) => {
  try {
    const { name, occupation, currPassword, newPassword, location, username } =
      req.body;
    const user = await User.findById(req.user);
    if (currPassword !== user.password) {
      return res.status(401).json({
        status: "failed",
        message: "Inalid current pasword",
      });
    }
    const response = await User.findByIdAndUpdate(
      req.user,
      {
        username,
        name,
        occupation,
        password: newPassword,
        location,
      },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      message: "User updated successfully",
      updatedUser: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "Something went wronge"
    });
  }
};
