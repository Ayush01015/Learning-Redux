import {
  init,
  increment,
  decrement,
  incrementByAmount,
  getUserAccFulfilled,
  getUserAccPending,
  getUserAccRejected
} from "../actions/index";

//reducers
export default function accountReducer(state = { amount: 1 }, action) {
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
