import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import adminReducer from "./adminReducer";
import staffReducer from "./staffReducer";
const rootReducer = combineReducers({
    user: adminReducer,
    staff: staffReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
