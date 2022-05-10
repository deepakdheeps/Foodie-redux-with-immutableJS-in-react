import { fromJS } from "immutable";
import * as actions from "./action";

const initialState =fromJS({
  info: [],
});

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case actions.SENDING_MESSAGE: {
     
    console.log("SENDING_MESSAGE")
      //return state.set('info',action.value);
   //  return state.get('info',[]).push(action.value);
    //return state.get('info',[]).push([action.value])
return state.set('info',fromJS(action.value))
    }
    default:
      return state;
  }
};
export default dataReducer;
