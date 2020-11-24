export const singleJobNameRedcer = (state = "", action) => {
  switch (action.type) {
    case "EDIT":
      return action.payload;
    case "CLEAR":
      return action.payload;
    default:
      return state;
  }
};

export const singleJobStartingTime = (state = "00:00", action) => {
  switch (action.type) {
    case "EDIT":
      return action.payload;
    case "CLEAR":
      return action.payload;
    default:
      return state;
  }
};

export const singleJobEndingTime = (state = "00:00", action) => {
  switch (action.type) {
    case "EDIT":
      return action.payload;
    case "CLEAR":
      return action.payload;
    default:
      return state;
  }
};

export const singleJobDetail = (state = "", action) => {
  switch (action.type) {
    case "EDIT":
      return action.payload;
    case "CLEAR":
      return action.payload;
    default:
      return state;
  }
};

export const singleJobPriority = (state = 0, action) => {
  switch (action.type) {
    case "EDIT":
      return action.payload;
    case "CLEAR":
      return action.payload;
    default:
      return state;
  }
};
