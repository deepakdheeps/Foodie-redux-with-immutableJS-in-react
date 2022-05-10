import { createAction } from "./utils";

export const SENDING_MESSAGE = "SENDING_MESSAGE";

const setResetMessage = createAction(SENDING_MESSAGE,'value');
//const setResetMessage = createAction(RESET_MESSAGE_SUCCESS, 'message');


export function resetMessage(value) {
  return function (dispatch) {
    dispatch(setResetMessage(value));
  };
}

// const setResetMessage = (value) => {
//   console.log("array value", value);
//   return {
//     type: RESET_MESSAGE_SUCCESS,
//     payload: {
//       value: value,
//     },
//   };
// };

// export function resetMessage(value) {
//   return function (dispatch) {
//     dispatch(setResetMessage(value));
//   };
// }
