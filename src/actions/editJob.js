export const editJobNameEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: e.target.value });
    }
}
export const editJobStartingTimeEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: e.target.value });
    }
}
export const editJobEndingTimeEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: e.target.value });
    }
}
export const editJobDetailEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: e.target.value });
    }
}
export const editJobPriorityEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: e.target.value });
    }
}


export const editJobNameClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: "" });
    }
}
export const editJobStartingTimeClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: "00:00" });
    }
}
export const editJobEndingTimeClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: "00:00" });
    }
}
export const editJobDetailClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: "" });
    }
}
export const editJobPriorityClean = () => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: 0 });
    }
}


export const setJobNameEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: e });
    }
}
export const setJobStartingTimeEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: e });
    }
}
export const setJobEndingTimeEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: e });
    }
}
export const setJobDetailEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: e });
    }
}
export const setJobPriorityEdit = (e) => {
    return async(dispatch) => {
        await dispatch({ type: "EDIT", payload: e });
    }
}