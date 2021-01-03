const initialState = {
    name: ''
};

// a simple reducer that takes in initial state and action as a parameter
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE':
            return {
                ...state,
                name: action.payload
            }
            default:
                return state;
    }
}

export default reducer;