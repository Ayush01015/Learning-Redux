import React, { useState } from "react";
import "../App.css";
const Bonus = ({bonus,setBonus}) => {
  return (
    <div className="container">
      <h3>points Component</h3>
      <h4>Total Points: ${bonus.points}</h4>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={() => setBonus({points:bonus.points + 1})}>
          Increment +
        </button>
      </div>
    </div>
  );
};

export default Bonus;
