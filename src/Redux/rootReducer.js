import { combineReducers } from "redux";
import shopReducer from "./shopping/shopping.reducer";
import dataReducer from "./details/reducer";
const rootReducer = combineReducers({
  shop: shopReducer,
  data: dataReducer,
});

export default rootReducer;
