import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { email: "", password: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: initialStateValue,
  reducers: {
    login(state, action): any {
      return action.payload;
    },

    logout(): any {
      return initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
