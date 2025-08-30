"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setLogout = exports.setLoading = exports.setToken = exports.setUser = exports.setPageType = exports.userSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  user: "",
  token: "",
  pageType: "",
  loading: false
};
var userSlice = (0, _toolkit.createSlice)({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: function setUser(state, action) {
      state.user = action.payload;
    },
    setToken: function setToken(state, action) {
      state.token = action.payload;
    },
    setPageType: function setPageType(state, action) {
      state.pageType = action.payload;
    },
    setLoading: function setLoading(state, action) {
      state.loading = action.payload;
    },
    setLogout: function setLogout(state) {
      state.user = null;
      state.token = null;
    }
  }
});
exports.userSlice = userSlice;
var _userSlice$actions = userSlice.actions,
    setPageType = _userSlice$actions.setPageType,
    setUser = _userSlice$actions.setUser,
    setToken = _userSlice$actions.setToken,
    setLoading = _userSlice$actions.setLoading,
    setLogout = _userSlice$actions.setLogout;
exports.setLogout = setLogout;
exports.setLoading = setLoading;
exports.setToken = setToken;
exports.setUser = setUser;
exports.setPageType = setPageType;
var _default = userSlice.reducer;
exports["default"] = _default;