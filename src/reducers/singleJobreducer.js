export const singleJobNameRedcer = (state = "", action) => {
    switch (action.type) {
        case "EDIT_SINGLE_NAME":
            return action.payload;
        case "CLEAR_SINGLE_NAME":
            return action.payload;
        default:
            return state;
    }
};

export const singleJobStartingTime = (state = "00:00", action) => {
    switch (action.type) {
        case "EDIT_SINGLE_STARTING":
            return action.payload;
        case "CLEAR_SINGLE_STARTING":
            return action.payload;
        default:
            return state;
    }
};

export const singleJobEndingTime = (state = "00:00", action) => {
    switch (action.type) {
        case "EDIT_SINGLE_ENDING":
            return action.payload;
        case "CLEAR_SINGLE_ENDING":
            return action.payload;
        default:
            return state;
    }
};

export const singleJobDetail = (state = "", action) => {
    switch (action.type) {
        case "EDIT_SINGLE_DETAIL":
            return action.payload;
        case "CLEAR_SINGLE_DETAIL":
            return action.payload;
        default:
            return state;
    }
};

export const singleJobPriority = (state = 0, action) => {
    switch (action.type) {
        case "EDIT_SINGLE_PRIORITY":
            return action.payload;
        case "CLEAR_SINGLE_PRIORITY":
            return action.payload;
        default:
            return state;
    }
};