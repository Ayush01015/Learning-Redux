import React, { useState } from "react";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

const App = () => {
  const [account, setAccount] = useState({amount:0});
  const [bonus, setBonus] = useState({points:0});
  return (
    <>
      <div
      style={{
        display:"flex",
        flexDirection:"column",
        gap:"1rem",
        padding:"1rem",
      }}
      >
        <h3>App</h3>
        <h2>Current Amount:{account.amount}</h2>
        <h2>Total Bonus:{bonus.points}</h2>
      </div>
      <Account account={account} setAccount={setAccount}/>
      <Bonus bonus={bonus} setBonus={setBonus}/>
    </>
  );
};

export default App;
