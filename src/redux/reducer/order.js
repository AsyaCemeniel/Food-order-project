import { DECREMENT, DELETE, INCREMENT } from "../constants";

export default (state = {}, action) => {
  const { type, payload } = action;

  const product = payload?.product;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [product.id]: { amount: (state[product.id]?.amount || 0) + 1, product },
      };
    case DECREMENT:
      return {
        ...state,
        [product.id]: { amount: (state[product.id]?.amount || 0) - 1, product },
      };

    case DELETE:
      delete state[product.id];
      return {
        ...state,
      };

    default:
      return state;
  }
};
