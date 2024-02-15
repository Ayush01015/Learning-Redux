import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,incrementByAmount } from "../Slices/accountSlice";

const Account = ({ incValue, setIncValue, account, points }) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3>Account Component</h3>
      <h4>account: ${account}</h4>
      <h4>Points: ${points}</h4>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={() =>dispatch(increment()) }>Increment +</button>
        <button onClick={() =>dispatch(decrement())}>decrement -</button>
        <input
          value={incValue}
          onChange={(e) => setIncValue(+e.target.value)}
        />
        <button onClick={() =>dispatch(incrementByAmount(incValue))}>
          Increment by {incValue} +
        </button>
      </div>
    </div>
  );
};

export default Account;
