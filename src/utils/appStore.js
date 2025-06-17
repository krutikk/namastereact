import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlices";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    // Add your reducers here
    // For example:
    // user: userReducer,
    // posts: postsReducer,
  },
  
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check if needed
    }),
});


export default appStore;