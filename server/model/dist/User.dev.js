"use strict";

var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  membership: {
    type: [String],
    "default": []
  },
  location: String,
  occupation: String
}, {
  timestamps: true
});
var User = mongoose.model("User", UserSchema);
module.exports = User;