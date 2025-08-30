"use strict";

var Razorpay = require("razorpay");

var User = require("./../model/User");

exports.createMembership = function _callee(req, res) {
  var instance, _req$body, order_id, amount, payment_Capture, currency, options, order;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          instance = new Razorpay({
            key_id: "rzp_test_bo57ny3aJFlmwp",
            key_secret: "dbsgYjgYGPgWzaUiO8ozquuX"
          });
          _req$body = req.body, order_id = _req$body.order_id, amount = _req$body.amount, payment_Capture = _req$body.payment_Capture, currency = _req$body.currency;
          options = {
            amount: amount,
            currency: currency,
            receipt: order_id
          };
          _context.next = 6;
          return regeneratorRuntime.awrap(instance.orders.create(options));

        case 6:
          order = _context.sent;

          if (order) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Something wronge occured"
          }));

        case 9:
          res.status(200).json({
            status: "success",
            data: order
          });
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

exports.cardDetail = function _callee2(req, res) {
  var instance, id, order;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
          });
          id = req.body.id;
          _context2.next = 5;
          return regeneratorRuntime.awrap(instance.payments.fetch(id));

        case 5:
          order = _context2.sent;

          if (order) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt("return", res.status(500).json({
            status: "failed",
            message: "Something wronge occured"
          }));

        case 8:
          res.status(200).json({
            status: "success",
            data: order
          });
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

exports.addMembership = function _callee3(req, res) {
  var type, updatedUser;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          type = req.body.type;
          _context3.next = 4;
          return regeneratorRuntime.awrap(User.findByIdAndUpdate(req.user, {
            "$push": {
              "membership": type
            }
          }, {
            "new": true
          }));

        case 4:
          updatedUser = _context3.sent;
          res.status(200).json({
            status: "success",
            message: "Membership purchased successfully.",
            updatedUser: updatedUser
          });
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.status(500).json({
            status: "failed",
            message: "Something went wronge"
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};