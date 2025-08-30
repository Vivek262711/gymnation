"use strict";

var express = require("express");

var _require = require("../controller/paymentController"),
    createMembership = _require.createMembership,
    cardDetail = _require.cardDetail,
    addMembership = _require.addMembership;

var _require2 = require("../middleware/verifyToken"),
    verifyToken = _require2.verifyToken;

var router = express.Router();
router.route("/addMembership").post(verifyToken, addMembership);
router.route("/createMembership").post(createMembership);
router.route("/cardDetail").post(cardDetail);
module.exports = router;