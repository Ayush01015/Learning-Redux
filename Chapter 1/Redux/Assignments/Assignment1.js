import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import axios from "axios";


//action name constant
const increase = 'post/increase';
const decrease = 'post/decrease';
const isPostPending = 'post/getPost/Pending';
const isPostFulfilled = 'post/getPost/Fulfilled';
const isPostRejected = 'post/getPost/Rejected';

const store = createStore(postReducer,applyMiddleware(logger.default,thunk.default));

//reducer

function postReducer(state={data:null,postCount:0,},action){
    switch (action.type) {
        case increase:
            return {...state,postCount:state.postCount + 1}
        case decrease:
            return {...state,postCount:state.postCount - 1}
        case isPostPending:
            return {...state,pending:true};
        case isPostFulfilled:
            return {...state,pending:false,data:action.payload,postCount:action.payload.length};
        case isPostRejected:
            return {...state,pending:false,error:action.error};
        default:
            return state;
    }
}

//actions creators

function increasePostcount(){
    return {type:increase}
}

function decreasePostcount(){
    return {type:decrease}
}

function postPending(){
    return {type:isPostPending}
}

function postFulfilled(value){
    return {type:isPostFulfilled,payload:value}
}

function postRejected(error){
    return {type:isPostRejected,error:error}
}

async function getPost(dispatch,getState){
    try {   
        dispatch(postPending())
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(postFulfilled(data))
    } catch (error) {
        dispatch(postRejected(error.message))
    }
}


setTimeout(()=>{
    store.dispatch(getPost);
},1000)

