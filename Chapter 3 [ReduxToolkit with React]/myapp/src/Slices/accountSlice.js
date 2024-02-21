import { createSlice, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { increment as incrementBonus } from "./bonusSlice";
import axios from "axios";

const initialState = {
  amount: 1,
  loading: false,
  error: false,
};

export const getUserById = createAsyncThunk(
  "account/getUser",
  async (userId) => {
    const { data } = await axios.get(
      `http://localhost:3000/accounts/${userId}`
    );
    return data.amount;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.amount = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;
