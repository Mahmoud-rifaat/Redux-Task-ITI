const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const increaseAction = (payload) => {
  return { type: INCREASE, payload: payload };
};

export const decreaseAction = (payload) => {
  return { type: DECREASE, payload: payload };
};
