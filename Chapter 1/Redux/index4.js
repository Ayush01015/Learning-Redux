/* Async in Redux */

import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger';
import axios from 'axios';

//action name constant
const increment = 'increment'
const decrement = 'decrement'
const incrementByAmount = 'incrementByAmount'
const init = 'init';

//store
const store = createStore(reducer,applyMiddleware(logger.default,thunk.default));

//reducer
function reducer(state={ amount: 1 }, action) {
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

//now what if i want id to be passed ??
function getUser(id){
    return async (dispatch,getState)=>{
        const {data} = await axios.get(`http://localhost:3000/accounts/${id}`);
        dispatch(initUser(data.amount));
    }
}

function initUser(value){
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

setInterval(() => {
    store.dispatch(getUser(2)); //passing id !!!
}, 1500);
