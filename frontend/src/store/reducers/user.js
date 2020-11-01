import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentUser: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return { ...state, currentUser: action.user};
        default:
            break;
    }
    return state
};

export default reducer;