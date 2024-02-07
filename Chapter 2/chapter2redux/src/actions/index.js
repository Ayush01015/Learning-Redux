import axios from "axios"

//action name constant divided by domain

export const increment = "account/increment";
export const decrement = "account/decrement";
export const incrementByAmount = "account/incrementByAmount";
export const init = "account/init";
export const getUserAccPending = "account/getUser/pending";
export const getUserAccFulfilled = "account/getUser/fulfilled";
export const getUserAccRejected = "account/getUser/rejected";

export const incBonus = "bonus/increment";

//Action creators for Account reducer

export function increase() {
  return { type: increment };
}
export function decrease() {
  return { type: decrement };
}
export function increaseByAmount(value) {
  return { type: incrementByAmount, payload: value };
}

export function getUserAccount(id) {
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

export function getUserAccountPending(value) {
  return { type: getUserAccPending };
}

export function getUserAccountFulfilled(value) {
  return { type: getUserAccFulfilled, payload: value };
}

export function getUserAccountRejected(error) {
  return { type: getUserAccRejected, error: error };
}

//Action creators for Bonus reducer

export function increaseBonus() {
  return { type: incBonus };
}
