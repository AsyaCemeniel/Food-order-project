import { DECREMENT, DELETE, INCREMENT } from "./constants";

export const increment = (product) => ({
  type: INCREMENT,
  payload: { product },
});
export const decrement = (product) => ({
  type: DECREMENT,
  payload: { product },
});

export const deleteItem = (product) => ({ type: DELETE, payload: { product } });
