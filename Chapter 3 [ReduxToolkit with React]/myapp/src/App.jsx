import React, { useState } from "react";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";

const App = () => {
  const [incValue, setIncValue] = useState(0);
  const account = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <h3>App</h3>
        <h2>Current Amount: {account}</h2>
        <h2>Total Bonus: {points}</h2>
      </div>
      <Account
        account={account}
        points={points}
        incValue={incValue}
        setIncValue={setIncValue}
      />
      <Bonus account={account} points={points} />
    </>
  );
};

export default App;
