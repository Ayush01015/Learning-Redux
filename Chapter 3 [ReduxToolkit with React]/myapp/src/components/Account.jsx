import React, { useState } from "react";

const Account = ({ incValue, setIncValue }) => {
  const [account,setAccount] = useState({amount:0})
  return (
    <div className="container">
      <h3>Account Component</h3>
      <h4>account: ${account.amount}</h4>
      {/* <h4>Points: ${points}</h4> */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={() => setAccount(prev => ({ amount: prev.amount + 1 }))}>Increment +</button>
        <button onClick={() => setAccount(prev => ({ amount: prev.amount - 1 }))}>decrement -</button>
        <input
          value={incValue}
          onChange={(e) => setIncValue(+e.target.value)}
        />
        <button onClick={()=> setAccount(prev => ({amount:prev.amount + incValue}))}>
          Increment by {incValue} +
        </button>
      </div>
    </div>
  );
};

export default Account;
