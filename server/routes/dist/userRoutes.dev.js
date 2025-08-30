"use strict";

var express = require("express");

var _require = require("../controller/authController"),
    createUser = _require.createUser,
    getAllUser = _require.getAllUser,
    loginUser = _require.loginUser;

var _require2 = require("../controller/userController"),
    patchUser = _require2.patchUser;

var _require3 = require("../middleware/verifyToken"),
    verifyToken = _require3.verifyToken;

var router = express.Router();
router.get("/", verifyToken, getAllUser);
router.patch("/", verifyToken, patchUser);
router.route("/register").post(createUser);
router.route("/login").post(loginUser);
module.exports = router;