/* Action Creators In Redux */

import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger';

//store
const store = createStore(reducer,applyMiddleware(logger.default));
const history = [];



//reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    //Immutability --> don't update state directly
    //state.amount = state.amount + 1; wrong
     return { amount: state.amount + 1 };
  }
  if (action.type === "decrement") {
     return { amount: state.amount - 1 };
  }
  if (action.type === "incrementByAmount") {
     return { amount: state.amount + action.payload };
  }
  return state;
}

//global state
// console.log(store.getState());

//subscribing
// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });

//action creators

function increment(){
    return {type:'increment'}
}
function decrement(){
    return {type:'decrement'};
}
function incrementByAmount(value){
    return {type:'incrementByAmount',payload:value};
}

setInterval(() => {
    store.dispatch(incrementByAmount(4));
}, 1500);

/*
    Adv. of action creators
    kPerform some calculations and then return final state
    Now these actions are solving our problem a little but still there is a chance that we might make a typo while implementing them in reducer. Now to solve this make action name constant.
    For ex.
        const increment = 'increment'
*/



