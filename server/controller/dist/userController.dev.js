"use strict";

var User = require("../model/User");

exports.patchUser = function _callee(req, res) {
  var _req$body, name, occupation, currPassword, newPassword, location, username, user, response;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, name = _req$body.name, occupation = _req$body.occupation, currPassword = _req$body.currPassword, newPassword = _req$body.newPassword, location = _req$body.location, username = _req$body.username;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.findById(req.user));

        case 4:
          user = _context.sent;

          if (!(currPassword !== user.password)) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            status: "failed",
            message: "Inalid current pasword"
          }));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(User.findByIdAndUpdate(req.user, {
            username: username,
            name: name,
            occupation: occupation,
            password: newPassword,
            location: location
          }, {
            "new": true
          }));

        case 9:
          response = _context.sent;
          res.status(200).json({
            status: "success",
            message: "User updated successfully",
            updatedUser: response
          });
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            status: "failed",
            message: "Something went wronge"
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
};