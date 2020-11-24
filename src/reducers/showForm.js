export const showFormReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOWTOGGLE":
      return !state;
    case "EDIT":
      return action.payload;
    default:
      return state;
  }
};
