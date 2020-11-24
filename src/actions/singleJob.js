export const singleJobNameEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT_SINGLE_NAME", payload: e.target.value });
    }
}
export const singleJobStartingTimeEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT_SINGLE_STARTING", payload: e.target.value });
    }
}
export const singleJobEndingTimeEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT_SINGLE_ENDING", payload: e.target.value });
    }
}
export const singleJobDetailEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT_SINGLE_DETAIL", payload: e.target.value });
    }
}
export const singleJobPriorityEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT_SINGLE_PRIORITY", payload: e.target.value });
    }
}


export const singleJobNameClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "CLEAR_SINGLE_NAME", payload: "" });
    }
}
export const singleJobStartingTimeClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "CLEAR_SINGLE_STARTING", payload: "00:00" });
    }
}
export const singleJobEndingTimeClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "CLEAR_SINGLE_ENDING", payload: "00:00" });
    }
}
export const singleJobDetailClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "CLEAR_SINGLE_DETAIL", payload: "" });
    }
}
export const singleJobPriorityClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "CLEAR_SINGLE_PRIORITY", payload: 0 });
    }
}