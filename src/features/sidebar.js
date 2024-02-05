import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { open: false },
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    Activate: (state) => {
      state.value.open = true;
    },
    Deactivate: (state) => {
      state.value.open = false;
    },
  },
});

export const { Activate, Deactivate } = sidebarSlice.actions;
export default sidebarSlice.reducer;
