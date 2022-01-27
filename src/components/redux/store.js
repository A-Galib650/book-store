import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import bookReducer from "./reducer/reducer";

const rootReducer = combineReducers({
  book: bookReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
