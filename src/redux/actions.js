import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  ADD_USER,
  SET_ACTIVE_RESTAURANT_ID,
} from "./constants";

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const addReview = (reviewAndUser) => {
  const { text, rating, name } = reviewAndUser;
  const review = { text, rating };
  const user = { name };
  return {
    type: ADD_REVIEW,
    payload: { review, user },
  };
};
//export const addUser = (user) => ({ type: ADD_USER, payload: { user } });
/* export const setActiveRestaurantId = (id) => ({
  type: SET_ACTIVE_RESTAURANT_ID,
  payload: { id },
}); */
