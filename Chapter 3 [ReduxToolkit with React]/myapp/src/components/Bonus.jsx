import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment } from "../Slices/bonusSlice";
import "../App.css";


const Bonus = ({account,points}) => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h3>points Component</h3>
      <h2>Amount: <span className="amount">${account}</span></h2>
      <h4>Total Points: <span className="amount bonus">{points}</span></h4>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={() =>dispatch(increment())}>
          Increment +
        </button>
      </div>
    </div>
  );
};

export default Bonus;
