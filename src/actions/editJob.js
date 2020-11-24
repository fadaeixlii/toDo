export const editJobNameEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT_NAME", payload: e.target.value });
    }
}
export const editJobStartingTimeEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT_STARTING", payload: e.target.value });
    }
}
export const editJobEndingTimeEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT_ENDING", payload: e.target.value });
    }
}
export const editJobDetailEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT_DETAIL", payload: e.target.value });
    }
}
export const editJobPriorityEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT_PRIORITY", payload: e.target.value });
    }
}


export const editJobNameClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "CLEAR_NAME", payload: "" });
    }
}
export const editJobStartingTimeClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "CLEAR_STARTING", payload: "00:00" });
    }
}
export const editJobEndingTimeClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "CLEAR_ENDING", payload: "00:00" });
    }
}
export const editJobDetailClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "CLEAR_DETAIL", payload: "" });
    }
}
export const editJobPriorityClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "CLEAR_PRIORITY", payload: 0 });
    }
}


export const setJobNameEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "SET_NAME", payload: e });
    }
}
export const setJobStartingTimeEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "SET_STARING", payload: e });
    }
}
export const setJobEndingTimeEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "SET_ENDING", payload: e });
    }
}
export const setJobDetailEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "SET_DETAIL", payload: e });
    }
}
export const setJobPriorityEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "SET_PRIORITY", payload: e });
    }
}