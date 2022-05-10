// export const createAction = (type, ...args) => {
//   return function (...argsvalues) {
//     let action = {type};
//     args.forEach(function (key, index) {
//       action[args[]] = argsvalues[index];
//     });
//     console.log("utils action value", action);

//     return action;
//   };
// };

export const createAction = (type, ...args) => {
  return function (...argsvalues) {
    console.log("argsvalues",argsvalues,"args",args)
    let action = { type };
    args.forEach(function (key, index) {
      action[args[index]] = argsvalues[index];
    });
    console.log("utils action value", action);
    return action;
  };
};