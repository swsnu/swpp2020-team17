import * as actionTypes from '../actions/actionTypes';

const reducer = (state = {
    chatroomList: [],
    selectedChatroom: null,

}, action) => {
    switch (action.type) {
        case actionTypes.GetChatroomList:
            return {...state, chatroomList: action.chatrooms};
        case actionTypes.CreateChatroom:
            return { ...state, chatroomList: state.chatroomList.concat(action.chatroom), selectedChatroom: action.chatroom };
        case actionTypes.GetChatroom:
            return { ...state, selectedChatroom: action.chatroom };
        case actionTypes.PutChatroom:
            const modifiedChatrooms = state.chatroomList.map(chatroom => {
                if (chatroom.ID === action.chatroom.ID) {
                    return { ...action.chatroom };
                } else return { ...chatroom };
            })
            return { ...state, chatroomList: modifiedChatrooms };
        case actionTypes.DeleteChatroom:
            const deletedChatrooms = state.chatroomList.filter(chatroom => {
                return chatroom.ID !== action.chatroom.ID;
            });
            return { ...state, chatroomList: deletedChatrooms};
        default:
            break;
    }
    return state
};

export default reducer;