import React, { useState } from "react";
import "../App.css";
import {increaseBonus} from "../actions/index"
import { useSelector,useDispatch } from "react-redux";

const Bonus = () => {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3>points Component</h3>
      <h4>Amount: ${amount}</h4>
      <h4>Total Points: ${points}</h4>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={()=>dispatch(increaseBonus())}>
          Increment +
        </button>
      </div>
    </div>
  );
};

export default Bonus;
