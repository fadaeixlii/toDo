export const singleJobNameEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: e.target.value });
    }
}
export const singleJobStartingTimeEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: e.target.value });
    }
}
export const singleJobEndingTimeEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: e.target.value });
    }
}
export const singleJobDetailEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: e.target.value });
    }
}
export const singleJobPriorityEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: e.target.value });
    }
}


export const singleJobNameClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: "" });
    }
}
export const singleJobStartingTimeClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: "00:00" });
    }
}
export const singleJobEndingTimeClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: "00:00" });
    }
}
export const singleJobDetailClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: "" });
    }
}
export const singleJobPriorityClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: 0 });
    }
}