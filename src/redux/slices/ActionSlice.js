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
    setActions: (state, action) => {
      state.actions = action.payload;
    },
  },
});

export const { addAction, setActions } = ActionSlice.actions;

export default ActionSlice.reducer;
