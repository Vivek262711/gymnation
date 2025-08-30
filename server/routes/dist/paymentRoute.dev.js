"use strict";

var express = require("express");

var _require = require("../controller/paymentController"),
    createMembership = _require.createMembership;

var router = express.Router();
router.route("/membership").post(createMembership);
module.exports = router;