import * as actionTypes from './actionTypes';

const reducer = (state = {
    currentUser: {
        "id": 0,
        "name": "",
        "logged_in": false
    },
}, action) => {

    switch( action.type ) {
        case actionTypes.Login:
            return {
                ...state,
                currentUser: action.currentUser,
            };
        case actionTypes.Logout:
            return {
                ...state,
                //currentUser: action.user
            }
        default:
            break;
    }

    return state;
}

export default reducer;