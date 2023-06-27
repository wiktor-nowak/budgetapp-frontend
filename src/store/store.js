import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { userApi } from "../features/api/userApi";
import { expensesApi } from "../features/api/expensesApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [expensesApi.reducerPath]: expensesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(expensesApi.middleware),
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApi.middleware)
});
