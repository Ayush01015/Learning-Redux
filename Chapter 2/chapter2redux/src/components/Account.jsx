import React, { useState } from "react";
import "../App.css"
const Account = ({account,setAccount}) => {
  
  const [incValue, setincValue] = useState(0);

  const handleIncrement = () => {
    setAccount({amount:account.amount + 1});
  };
  const handleDecrement = () => {
    setAccount({amount:account.amount - 1});
  };
  const handleIncValue = (incValue) => {
    setAccount({amount:account.amount + incValue});
  };

  return (
    <div className="container"  >
      <h3>Account Component</h3>
      <h4>account: ${account.amount}</h4>
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
        <button onClick={()=>handleIncValue(incValue)}>
          Increment by {incValue} +
        </button>
      </div>
    </div>
  );
};

export default Account;