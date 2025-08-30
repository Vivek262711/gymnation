const Razorpay = require("razorpay");
const User = require("./../model/User");
exports.createMembership = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: "rzp_test_bo57ny3aJFlmwp",
      key_secret: "dbsgYjgYGPgWzaUiO8ozquuX",
    });
    const { order_id, amount, payment_Capture, currency } = req.body;
    const options = {
      amount,
      currency,
      receipt: order_id,
    };
    const order = await instance.orders.create(options);
    if (!order)
      return res.status(500).json({
        status: "failed",
        message: "Something wronge occured",
      });
    res.status(200).json({ status: "success", data: order });
  } catch (error) {
    console.log(error);
  }
};

exports.cardDetail = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const { id } = req.body;
    const order = await instance.payments.fetch(id);
    if (!order)
      return res.status(500).json({
        status: "failed",
        message: "Something wronge occured",
      });
    res.status(200).json({ status: "success", data: order });
  } catch (error) {
    console.log(error);
  }
};

exports.addMembership = async (req, res) => {
  try {
    const { type } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.user,
      {
        "$push": { "membership": type } 
      },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      message:"Membership purchased successfully.",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "Something went wronge"
    });
  }
};
