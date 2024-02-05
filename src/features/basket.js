import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      // creating new basket
      const newBasket = [...state.items];
      // find index of the item
      const index = newBasket.findIndex((item) => item.i === action.payload.i);
      // remove the found index item from new basket
      index >= 0 && newBasket.splice(index, 1);
      // setting the new basket as the main one
      state.items = newBasket;
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

// All actions
export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions;

// Total basket items
export const selectItems = (state) => state.basket.items;

// Total basket price
export const totalPrice = (state) => state.basket.items.reduce((total, item) => total + item.price, 0).toFixed(2);

// Reducer
export default basketSlice.reducer;
