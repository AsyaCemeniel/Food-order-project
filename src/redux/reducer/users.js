import {
  ADD_REVIEW,
  FAILURE,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
} from "../constants";
import { normalizedUsers } from "../../fixtures";
import { arrToMap } from "../utils";
import produce from "immer";

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, payload, userId, response, restaurantId, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST: {
      draft.loading = true;
      draft.error = null;
      break;
    }
    case LOAD_USERS + SUCCESS: {
      draft.entities = { ...draft.entities, ...arrToMap(response) };
      draft.loading = false;
      draft.loaded = true;
      draft.error = null;
      break;
    }
    case LOAD_USERS + FAILURE: {
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;
    }
    case ADD_REVIEW:
      const { name } = payload.review;
      draft.entities[userId] = { id: userId, name };
      break;

    default:
      return draft;
  }
});
