/* Traditional Redux */

import {createStore} from "redux"

//store
const store = createStore(reducer)

//reducer
function reducer(state={amount:1},action){
    if(action.type === "increment"){
        return {amount:state.amount+1}
    }
    return state;
} 

//global state
console.log(store.getState());

//dispatching an action -> {type:"increment"}
store.dispatch({type:"increment"})

console.log(store.getState());