import { ADD_REVIEW, ADD_USER } from "../constants";
import { v4 as uuidv4 } from "uuid";

export default (store) => (next) => (action) => {
  if (action.type === ADD_REVIEW) {
    const reviewId = uuidv4();
    const userId = uuidv4();

    action.payload.review = {
      ...action.payload.review,
      id: reviewId,
      userId: userId,
    };

    action.payload.user = {
      ...action.payload.user,
      id: userId,
    };
  }

  /*   if (action.type === ADD_USER) {
    action.payload.user = {
      ...action.payload.user,
      id: uuidv4(),
    };
  } */

  next(action);
};
