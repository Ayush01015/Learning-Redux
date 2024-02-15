import React, { useState } from "react";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

const App = ({ store }) => {
  const [account, setAccount] = useState({ amount: 0 });
  const [bonus, setBonus] = useState({ points: 0 });
  const [incValue, setIncValue] = useState(0);

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
        {console.log(store.getState())}
        <h2>Total Bonus:{store.getState().bonus.points}</h2>
      </div>
      <Account store={store} incValue={incValue} setIncValue={setIncValue}/>
      <Bonus store={store} />
    </>
  );
};

export default App;
