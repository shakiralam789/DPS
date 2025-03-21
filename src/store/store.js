import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice";
import { authApi } from "../services/authApi";

// Create store without next-redux-wrapper
const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
