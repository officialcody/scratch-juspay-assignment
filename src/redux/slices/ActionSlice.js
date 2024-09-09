import { createSlice } from "@reduxjs/toolkit";

const ActionSlice = createSlice({
  name: "action",
  initialState: {
    actions: [],
  },
  reducers: {
    addAction: (state, action) => {
      state.actions = [...state.actions, action.payload];
    },
  },
});

export const { addAction } = ActionSlice.actions;

export default ActionSlice.reducer;
