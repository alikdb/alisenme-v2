import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
  mobileNavbarVisible: false,
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    _setMobileNavbarVisible(state, action) {
      state.mobileNavbarVisible = action.payload;
    },
  },
});

export const { _setMobileNavbarVisible } = app.actions;

export default app.reducer;
