// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./rootReducer";

// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// const middleware = [thunk];
// const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware));

// const store = createStore(rootReducer, composedEnhancer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];

const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = configureStore(
  {
    reducer: rootReducer,
  },
  composedEnhancer
);

export default store;
