export const editJobNameRedcer = (state = "", action) => {
    switch (action.type) {
        case "EDIT":
            return action.payload;
        case "CLEAR":
            return action.payload;
        case "SET":
            return action.payload;
        default:
            return state;
    }
};

export const editJobStartingTime = (state = "00:00", action) => {
    switch (action.type) {
        case "EDIT":
            return action.payload;
        case "CLEAR":
            return action.payload;
        case "SET":
            return action.payload;
        default:
            return state;
    }
};

export const editJobEndingTime = (state = "00:00", action) => {
    switch (action.type) {
        case "EDIT":
            return action.payload;
        case "CLEAR":
            return action.payload;

        case "SET":
            return action.payload;
        default:
            return state;
    }
};

export const editJobDetail = (state = "", action) => {
    switch (action.type) {
        case "EDIT":
            return action.payload;
        case "CLEAR":
            return action.payload;
        case "SET":
            return action.payload;
        default:
            return state;
    }
};

export const editJobPriority = (state = 0, action) => {
    switch (action.type) {
        case "EDIT":
            return action.payload;
        case "CLEAR":
            return action.payload;
        case "SET":
            return action.payload;
        default:
            return state;
    }
};