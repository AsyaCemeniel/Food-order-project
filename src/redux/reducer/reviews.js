import produce from "immer";
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from "../constants";
import { arrToMap } from "../utils";

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: null,
};

export default produce((draft = initialState, action) => {
  const {
    type,
    payload,
    reviewId,
    userId,
    response,
    restaurantId,
    error,
  } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST: {
      draft.loading[restaurantId] = true;
      draft.error = null;
      break;
    }
    case LOAD_REVIEWS + SUCCESS: {
      draft.entities = { ...draft.entities, ...arrToMap(response) };
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = true;
      draft.error = null;
      break;
    }
    case LOAD_REVIEWS + FAILURE: {
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = false;
      draft.error = error;
      break;
    }
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      break;

    default:
      return draft;
  }
});
