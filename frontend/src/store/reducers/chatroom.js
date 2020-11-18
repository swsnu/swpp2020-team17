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
                if (chatroom.id === action.chatroom.id) {
                    return { ...action.chatroom };
                } else return { ...chatroom };
            })
            const modifiedSelectedChatroom = ((state.selectedChatroom.id === action.chatroom.id) ? action.chatroom : state.selectedChatroom);
            return { ...state, selectedChatroom: modifiedSelectedChatroom, chatroomList: modifiedChatrooms };
        case actionTypes.DeleteChatroom:
            const deletedChatrooms = state.chatroomList.filter(chatroom => {
                return chatroom.id !== action.chatroom.id;
            });
            return { ...state, chatroomList: deletedChatrooms};
        default:
            break;
    }
    return state
};

export default reducer;