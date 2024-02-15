import React, { useState } from "react";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";

const App = () => {
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
        <h2>Current Amount:</h2>
        <h2>Total Bonus:</h2>
      </div>
      <Account incValue={incValue} setIncValue={setIncValue} />
      <Bonus />
    </>
  );
};

export default App;
