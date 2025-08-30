const express = require("express");
const {
  createMembership,
  cardDetail,
  addMembership,
} = require("../controller/paymentController");
const { verifyToken } = require("../middleware/verifyToken");

const router = express.Router();

router.route("/addMembership").post(verifyToken, addMembership);
router.route("/createMembership").post(createMembership);
router.route("/cardDetail").post(cardDetail);

module.exports = router;
