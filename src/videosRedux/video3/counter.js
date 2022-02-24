export const INCREMENT = "INCREMENT";
const RESET = "RESET";
export function increment(amount) {
  return { type: INCREMENT, amount };
}
export function reset(amount) {
  return { type: RESET, amount };
}
export const counter = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.amount;
    case "RESET":
      return 0;
    default:
      return state;
  }
};
