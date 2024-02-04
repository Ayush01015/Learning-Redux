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

async function initUser(dispatch,getState){
    const {data} = await axios.get('http://localhost:3000/accounts/1');
    dispatch({type:init,payload:data.amount});
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
    store.dispatch(initUser); 
}, 1500);
