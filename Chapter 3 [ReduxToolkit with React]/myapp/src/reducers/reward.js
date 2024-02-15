import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("reward/increment");
export const decrement = createAction("reward/decrement");
export const incrementByAmount = createAction("reward/incrementByAmount");

const incrementByAmt = createAction("account/incrementByAmount");
const initialState = { points: 0 };

export const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points++;
    })
    .addCase(decrement, (state, action) => {
      state.points--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.points += action.payload;
    })
    .addCase(incrementByAmt, (state, action) => {
      if (action.payload % 500 === 0) {
        state.points++;
      }
    });
});
