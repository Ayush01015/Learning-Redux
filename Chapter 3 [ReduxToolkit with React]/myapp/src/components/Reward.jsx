import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../reducers/reward";
import "../App.css";

const Reward = () => {
  const points = useSelector((state) => state.reward.points);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h3>Reward Component</h3>
      <h4>Total Points: <span className="amount bonus">{points}</span></h4>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={() => dispatch(increment())}>Increment +</button>
      </div>
    </div>
  );
};

export default Reward;
