import React, { useState } from "react";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";
import Reward from "./components/Reward";

const App = () => {
  const [incValue, setIncValue] = useState(0);
  const account = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const rewardpoints = useSelector((state) => state.reward.points);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <h2 className="heading">Current Amount: <span className="amount">${account}</span></h2>
        <h2 className="heading">Total Bonus: <span className="amount bonus">{points}</span></h2>
        <h2 className="heading">Reward Points: <span className="amount bonus">{rewardpoints}</span></h2>
      </div>
      <Account
        account={account}
        points={points}
        incValue={incValue}
        setIncValue={setIncValue}
      />
      <Bonus account={account} points={points} />
      <Reward/>
    </>
  );
};

export default App;
