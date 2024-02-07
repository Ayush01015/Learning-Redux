import React, { useState, useEffect } from "react";
import {increase,decrease,getUserAccount,increaseByAmount} from "../actions/index"
import "../App.css";
const Account = ({
  account,
  store,
  incValue,
  setIncValue,
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
        <button onClick={()=>store.dispatch(increase())}>Increment +</button>
        <button onClick={()=>store.dispatch(decrease())}>decrement -</button>
        <input
          value={incValue}
          onChange={(e) => setIncValue(+e.target.value)}
        />
        <button onClick={()=>store.dispatch(increaseByAmount(incValue))}>
          Increment by {incValue} +
        </button>
      </div>
    </div>
  );
};

export default Account;
