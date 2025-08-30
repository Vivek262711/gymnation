import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  token: "",
  pageType: "",
  loading: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setPageType: (state, action) => {
      state.pageType = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setPageType, setUser, setToken, setLoading, setLogout } =
  userSlice.actions;
export default userSlice.reducer;
