/* Traditional Redux */

import { createStore } from "redux";

//store
const store = createStore(reducer);
const history = [];
//reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    //state.amount = state.amount + 1; wrong
     return { amount: state.amount + 1 };
  }
  return state;
}

//global state
// console.log(store.getState());

//subscribing
store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

setInterval(() => {
  store.dispatch({ type: "increment" });
}, 1500);

//dispatching an action -> {type:"increment"}
// store.dispatch({type:"increment"})
