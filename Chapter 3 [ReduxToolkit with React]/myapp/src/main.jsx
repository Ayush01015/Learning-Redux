import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Slices/accountSlice.js";
import bonusReducer from "./Slices/bonusSlice.js";

const store = configureStore({
  reducer:{
    account:accountReducer,
    bonus:bonusReducer,
  }
})
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
