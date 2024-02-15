import React, { useState } from "react";
import "../App.css";


const Bonus = () => {

const [bonus,setBonus] = useState({points:0})
  return (
    <div className="container">
      <h3>points Component</h3>
      <h4>Total Points: {bonus.points}</h4>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={()=>setBonus(prev => ({points:prev.points + 1}))}>
          Increment +
        </button>
      </div>
    </div>
  );
};

export default Bonus;
