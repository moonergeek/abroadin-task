import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",

  initialState: [],

  reducers: {
    addMessage(state, action): any {
      return [...state, action.payload];
    },
  },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
