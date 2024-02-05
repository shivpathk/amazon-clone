import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addToOrders: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    clearOrders: (state) => {
      state.items = [];
    },
  },
});

// All actions
export const { addToOrders, clearOrders } = ordersSlice.actions;

// Total Orders items
export const selectItems = (state) => state.orders.items;

// Reducer
export default ordersSlice.reducer;
