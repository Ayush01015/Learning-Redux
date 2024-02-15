import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

const initialState = {
  points: 0,
};

const incrementByAmt = createAction("account/incrementByAmount");

export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmt, (state, action) => {
      if (action.payload >= 100) state.points++;
    });
  },
});

export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;
