export const setJobEditId = (value) => {
    return async(dispatch) => {
        dispatch({ type: "EDIT", payload: value });
    }
}