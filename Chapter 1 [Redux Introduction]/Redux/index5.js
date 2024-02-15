/* Mutiple Reducers in Redux */
//Complex nesting of objects and attaining Immutability is hard so use multiple reducers

import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";

//action name constant divided by domain
const increment = "account/increment";
const decrement = "account/decrement";
const incrementByAmount = "account/incrementByAmount";
const init = "account/init";
const getUserAccPending = "account/getUser/pending";
const getUserAccFulfilled = "account/getUser/fulfilled";
const getUserAccRejected = "account/getUser/rejected";

const incBonus = "bonus/increment";

//store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk.default)
);

//reducers
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
    case getUserAccFulfilled:
      return { amount: action.payload, pending: false };
    case getUserAccRejected:
      return { ...state, error: action.error, pending: false };
    case getUserAccPending:
      return { ...state, error: action.error, pending: true };
    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case incrementByAmount:
      if (action.payload >= 100) return { points: state.points + 1 };
    case incBonus:
      return { points: state.points + 1 };
    default:
      return state;
  }
}

//Action creators for Account reducer

function increase() {
  return { type: increment };
}
function decrease() {
  return { type: decrement };
}
function increaseByAmount(value) {
  return { type: incrementByAmount, payload: value };
}

function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getUserAccountPending());
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch(getUserAccountFulfilled(data.amount));
    } catch (error) {
      dispatch(getUserAccountRejected(error.message));
    }
  };
}

function getUserAccountPending(value) {
  return { type: getUserAccPending };
}

function getUserAccountFulfilled(value) {
  return { type: getUserAccFulfilled, payload: value };
}

function getUserAccountRejected(error) {
  return { type: getUserAccRejected, error: error };
}

//Action creators for Bonus reducer

function increaseBonus() {
  return { type: incBonus };
}

setTimeout(() => {
  store.dispatch(getUserAccount(2));
  //   store.dispatch(incrementByAmount(200)); //Currently both reducers are running
  //   store.dispatch(increaseBonus());
}, 1500);
