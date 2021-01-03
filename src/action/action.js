
// a simple action that is called by the React component that dispatches the data to the reducer
export const action = (data) => dispatch => {
    dispatch({
        type: 'UPDATE',
        payload: data
    })
}
