import * as actionTypes from '../actions/actionTypes';

const reducer = (state = {
    chatRoomList: []
}, action) => {
    switch (action.type) {
        case actionTypes.GetChatRoomList:
            return {...state, chatRoomList: action.chatRoomList};
        default:
            break;
    }
    return state
};

export default reducer;