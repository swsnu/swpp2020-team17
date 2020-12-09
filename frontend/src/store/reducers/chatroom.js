import * as actionTypes from '../actions/actionTypes';
import { StreamChat } from 'stream-chat';
const chatClient = new StreamChat('dc8cfsjehcsx');

const reducer = (state = {
    chatroomList: [],
    selectedChatroom: null,
    selectedChatUser: null,
    selectedChatChannel: null,

}, action) => {
    switch (action.type) {
        case actionTypes.GetChatroomList:
            return {...state, chatroomList: action.chatrooms};
        case actionTypes.CreateChatroom:
            const newChatroom = action.chatroom;
            return { ...state, chatroomList: state.chatroomList.concat(newChatroom), selectedChatroom: newChatroom };
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
        case actionTypes.CreateChatting:
            if (state.selectedChatUser === null) {
                chatClient.setUser(
                    {
                        id: action.user.id.toString(),
                        name: action.user.username,
                        image: action.user.avatar,
                    },
                    chatClient.devToken(action.user.id.toString()),
                );
            }

            const channel = chatClient.channel('messaging', action.chatroom.id, {
                //image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
                name: action.chatroom.title,
            });
            return { ...state, selectedChatUser: chatClient, selectedChatChannel: channel}
        case actionTypes.DeleteChatting:
            if (state.selectedChatChannel != null) {
                state.selectedChatChannel.delete();
            }
            return { ...state, selectedChatChannel: null }
        default:
            break;
    }
    return state
};

export default reducer;