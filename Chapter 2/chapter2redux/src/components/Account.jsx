import React from "react";
import {
  increase,
  decrease,
  getUserAccount,
  increaseByAmount,
} from "../actions/index";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";

const Account = ({ incValue, setIncValue }) => {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3>Account Component</h3>
      <h4>account: ${amount}</h4>
      <h4>Points: ${points}</h4>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={()=>dispatch(increase())}>Increment +</button>
        <button onClick={()=>dispatch(decrease())}>decrement -</button>
        <input
          value={incValue}
          onChange={(e) => setIncValue(+e.target.value)}
        />
        <button onClick={()=>dispatch(increaseByAmount(incValue))}>
          Increment by {incValue} +
        </button>
      </div>
    </div>
  );
};

export default Account;
