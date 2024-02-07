import {incrementByAmount,incBonus} from "../actions/index"

export default function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
      case incrementByAmount:
        if (action.payload >= 100) return { points: state.points + 1 };
      case incBonus:
        return { points: state.points + 1 };
      default:
        return state;
    }
  }