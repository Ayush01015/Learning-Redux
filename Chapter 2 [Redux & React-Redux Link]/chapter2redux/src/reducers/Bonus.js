import { incrementByAmount, incBonus } from "../actions/index";

export default function bonusReducer(state = { points: 0 }, action) {
  if (action.type === incrementByAmount && action.payload >= 100) {
    return { points: state.points + 1 };
  } else if (action.type === incBonus) {
    return { points: state.points + 1 };
  }
  return state;
}
