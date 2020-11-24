export const editJobNameRedcer = (state = "", action) => {
    switch (action.type) {
        case "EDIT_NAME":
            return action.payload;
        case "CLEAR_NAME":
            return action.payload;
        case "SET_NAME":
            return action.payload;
        default:
            return state;
    }
};

export const editJobStartingTime = (state = "00:00", action) => {
    switch (action.type) {
        case "EDIT_STARTING":
            return action.payload;
        case "CLEAR_STARTING":
            return action.payload;
        case "SET_STARTING":
            return action.payload;
        default:
            return state;
    }
};

export const editJobEndingTime = (state = "00:00", action) => {
    switch (action.type) {
        case "EDIT_ENDING":
            return action.payload;
        case "CLEAR_ENDING":
            return action.payload;

        case "SET_ENDING":
            return action.payload;
        default:
            return state;
    }
};

export const editJobDetail = (state = "", action) => {
    switch (action.type) {
        case "EDIT_DETAIL":
            return action.payload;
        case "CLEAR_DETAIL":
            return action.payload;
        case "SET_DETAIL":
            return action.payload;
        default:
            return state;
    }
};

export const editJobPriority = (state = 0, action) => {
    switch (action.type) {
        case "EDIT_PRIORITY":
            return action.payload;
        case "CLEAR_PRIORITY":
            return action.payload;
        case "SET_PRIORITY":
            return action.payload;
        default:
            return state;
    }
};