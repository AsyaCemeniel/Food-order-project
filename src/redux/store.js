import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import logger from "./middleware/logger";
import idGenerator from "./middleware/idGenerator";

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, idGenerator))
);
