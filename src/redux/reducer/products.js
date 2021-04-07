import produce from "immer";
import { LOAD_PRODUCTS, SUCCESS, REQUEST, FAILURE } from "../constants";
import { arrToMap } from "../utils";

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: null,
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, response, error, restaurantId } = action;

    switch (type) {
      case LOAD_PRODUCTS + REQUEST: {
        draft.loading[restaurantId] = true;
        break;
      }
      case LOAD_PRODUCTS + SUCCESS: {
        draft.entities = { ...draft.entities, ...arrToMap(response) };
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = true;
        draft.error = null;
        break;
      }
      case LOAD_PRODUCTS + FAILURE: {
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = false;
        draft.error = error;
        break;
      }
      default:
        return;
    }
  });
