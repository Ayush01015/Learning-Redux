/* Mutiple Reducers in Redux */
//Complex nesting of objects and attaining Immutability is hard so use multiple reducers

import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";

//action name constant
const increment = "increment";
const decrement = "decrement";
const incrementByAmount = "incrementByAmount";
const init = "init";

//store
const store = createStore(
  combineReducers({
    account:accountReducer,
    bonus:bonusReducer
  }),
  applyMiddleware(logger.default, thunk.default)
);

//reducer
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case init:
      return { amount: action.payload };
    case increment:
      return { amount: state.amount + 1 };
    case decrement:
      return { amount: state.amount - 1 };
    case incrementByAmount:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case increment:
      return { points: state.points + 1 };
    default:
      return state;
  }
}

function getUser(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    dispatch(initUser(data.amount));
  };
}

function initUser(value) {
  return { type: init, payload: value };
}
function increase() {
  return { type: increment };
}
function decrease() {
  return { type: decrement };
}
function increaseByAmount(value) {
  return { type: incrementByAmount, payload: value };
}

setTimeout(() => {
//   store.dispatch(getUser(2));
  store.dispatch(increase()); //Currently both reducers are running
}, 1500);
