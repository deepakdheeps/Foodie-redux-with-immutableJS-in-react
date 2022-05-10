import * as actionTypes from "./shopping.types";

export const addTOCart = (itemID) => {
  console.log("entered addto cart")
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};
//dispatch({ type: actionTypes.ADD_TO_CART, id: itemID });

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

// export const adjustQTy = (itemID, value) => {
//   console.log("actons values", value, itemID);
//   return {
//     type: actionTypes.ADJUST_QTY,

//     payload: {
//       id: itemID,
//       qty: value,
//     },
//   };
// };
