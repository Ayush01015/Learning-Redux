/* Async in Redux */

import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger';
import axios from 'axios';

//action name constant
const increment = 'increment'
const decrement = 'decrement'
const incrementByAmount = 'incrementByAmount'
const init = 'init';

//store
const store = createStore(reducer,applyMiddleware(logger.default));
const history = [];

//reducer
function reducer(state, action) {
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

    /*To access global state*/
// console.log(store.getState());

//subscribing
// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });

//fetching Data
// async function getUser(){
//     const {data} = await axios.get('http://localhost:3000/accounts/1');
//     console.log(data);
// }

// getUser();
//action creators
//Now what if i want to get some data asynchronously in action
async function initUser(value){
    const {data} = await axios.get('http://localhost:3000/accounts/1');
    console.log(data);
    return {type:init,payload:value}
}
function increase(){
    return {type:increment}
}
function decrease(){
    return {type:decrement}
}
function increaseByAmount(value){
    return {type:incrementByAmount,payload:value};
}

// setInterval(() => {
//     store.dispatch(initUser(200));
// }, 1500);


