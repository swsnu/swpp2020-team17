import * as actionTypes from '../actions/actionTypes';


const reducer = (state = {
    currentUser: null,
    selectedUser: null,
    userList: [],

}, action) => {
    switch (action.type) {
        case actionTypes.GetUserList:
            return {...state, userList: action.users};
        case actionTypes.GetCurrentUser:
            return { ...state, currentUser: action.currentUser }
        case actionTypes.GetUser:
            return { ...state, selectedUser: action.user }
        case actionTypes.PutUser:
            const modifiedUserList = state.userList.map((user) => {
                if (user.ID === action.user.ID) {
                    return { ...action.user };
                } else return { ...user };
            })
            const modifiedCurrentuser = ((state.currentUser.ID === action.user.ID) ? action.user : state.currentUser);
            return { ...state , currentUser: modifiedCurrentuser, userList: modifiedUserList}
        default:
            break;
    }
    return state
};

export default reducer;