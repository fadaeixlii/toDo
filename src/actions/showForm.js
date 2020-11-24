export const showForm = () => {
    return async(dispatch) => {
        dispatch({ type: "SHOWTOGGLE" });
    }
}
export const setShowForm = (value) => {
    return async(dispatch) => {
        dispatch({ type: "EDIT", payload: value });
    }
}