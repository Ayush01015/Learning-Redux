import React, { useState } from "react";
import "../App.css";
import {increaseBonus} from "../actions/index"
const Bonus = ({bonus,setBonus,store}) => {
  return (
    <div className="container">
      <h3>points Component</h3>
      <h4>Total Points: ${store.getState().bonus.points}</h4>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={()=>store.dispatch(increaseBonus())}>
          Increment +
        </button>
      </div>
    </div>
  );
};

export default Bonus;
