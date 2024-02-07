import React, { useState } from "react";
import "../App.css";
const Bonus = () => {
  const [Bonus, setBonus] = useState(0);

  return (
    <div className="container">
      <h3>Bonus Component</h3>
      <h4>Total Points: ${Bonus}</h4>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={() => setBonus((prev) => prev + 1)} i>
          Increment +
        </button>
      </div>
    </div>
  );
};

export default Bonus;
