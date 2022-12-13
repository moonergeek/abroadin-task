import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue: string[] = [];

export const messageSlice = createSlice({
  name: "message",

  initialState: { value: initialStateValue },

  reducers: {
    addMessage: (state, action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
