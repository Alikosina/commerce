import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
