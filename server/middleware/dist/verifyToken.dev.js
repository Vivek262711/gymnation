"use strict";

var jwt = require("jsonwebtoken");

exports.verifyToken = function _callee(req, res, next) {
  var token, verified;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          token = req.header("Authorization");

          if (token) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(403).json({
            message: "Access Denied"
          }));

        case 4:
          if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
          }

          verified = jwt.verify(token, process.env.JWT_SECRET);
          req.user = verified; //User Id

          next();
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            error: _context.t0.message
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};