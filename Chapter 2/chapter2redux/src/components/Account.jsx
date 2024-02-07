import React, { useState } from "react";
import "../App.css"
const Account = () => {
  const [Amount, setAmount] = useState(0);
  const [incValue, setincValue] = useState(0);

  const handleIncrement = () => {
    setAmount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setAmount((prev) => prev - 1);
  };
  const handleincValue = (incValue) => {
    setAmount(prev => prev + incValue);
  };

  return (
    <div className="container"  >
      <h3>Account Component</h3>
      <h4>Amount: ${Amount}</h4>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={handleIncrement} i>
          Increment +
        </button>
        <button onClick={handleDecrement} i>
          decrement -
        </button>
        <input value={incValue} onChange={(e) => setincValue(+(e.target.value))} />
        <button onClick={()=>handleincValue(incValue)}>
          Increment by {incValue} +
        </button>
      </div>
    </div>
  );
};

export default Account;
