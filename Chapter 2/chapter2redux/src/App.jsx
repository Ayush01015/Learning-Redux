import React, { useState } from "react";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

const App = ({ store }) => {
  const [account, setAccount] = useState({ amount: 0 });
  const [bonus, setBonus] = useState({ points: 0 });
  const [incValue, setIncValue] = useState(0);

  const handleIncrement = () => {
    setAccount({ amount: account.amount + 1 });
  };
  const handleDecrement = () => {
    setAccount({ amount: account.amount - 1 });
  };
  const handleIncValue = (incValue) => {
    setAccount({ amount: account.amount + incValue });
  };

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
        <h2>Current Amount:{store.getState().account.amount}</h2>
        <h2>Total Bonus:{store.getState().bonus.points}</h2>
      </div>
      <Account
        account={account}
        store={store}
        incValue={incValue}
        setIncValue={setIncValue}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleIncValue={handleIncValue}
      />
      <Bonus bonus={bonus} setBonus={setBonus} store={store} />
    </>
  );
};

export default App;
