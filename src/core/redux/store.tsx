import { configureStore } from "@reduxjs/toolkit";

import messageReducer from "./messages";
import userReducer from "./user";

export const store = configureStore({
  reducer: { messageReducer, userReducer },
});
