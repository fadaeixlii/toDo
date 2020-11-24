export const jobEditIdReducer = (state = 0, action) => {
    switch (action.type) {
        case "EDIT":
            return action.payload;
        default:
            return state;
    }
}