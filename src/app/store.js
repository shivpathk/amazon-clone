import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebar";
import basketReducer from "../features/basket";
import ordersReducer from "../features/orders";

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    basket: basketReducer,
    orders: ordersReducer,
  },
});
