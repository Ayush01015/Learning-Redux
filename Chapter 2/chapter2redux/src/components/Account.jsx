import React, { useState, useEffect } from "react";

import "../App.css";
const Account = ({
  account,
  store,
  handleIncValue,
  handleDecrement,
  handleIncrement,
  setIncValue,
  incValue,
}) => {
  // useEffect(()=>{
  //   console.log("store: ",store.getState());
  // })
  return (
    <div className="container">
      <h3>Account Component</h3>
      <h4>account: ${store.getState().account.amount}</h4>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={handleIncrement}>Increment +</button>
        <button onClick={handleDecrement}>decrement -</button>
        <input
          value={incValue}
          onChange={(e) => setIncValue(+e.target.value)}
        />
        <button onClick={() => handleIncValue(incValue)}>
          Increment by {incValue} +
        </button>
      </div>
    </div>
  );
};

export default Account;
