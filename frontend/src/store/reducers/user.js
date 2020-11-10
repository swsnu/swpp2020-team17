import * as actionTypes from '../actions/actionTypes';


const reducer = (state = {
    currentUser: {
        ID: 0,
        friendIDList: [],
        chatRoom: [],
        username: '',
        avatar: '',
        postList: [],
        shallWeRoomList: [],
        watchedPostedIDList: [],
        tagList: [],
        login: false,
    },
    visitedUser: {
        ID: 0,
        username: '',
        avatar: '',
        postList: [],
        login: false,
    },
    like: 0,
    postList: [],
    comments: [],
    MainPost: 0,
    chatRoomList: [],
    searchedTagList: [],
    searchedUserList: [],

}, action) => {
    switch (action.type) {
        case actionTypes.GetUserInfo:
            return { ...state, currentUser: action.currentUser }
        /*case actionTypes.Login:
            return { ...state, currentUser: action.user };*/
        case actionTypes.SendShallWe:
            return {...state, currentUser:{...state.currentUser, 
                shallWeRoomList: [...state.currentUser.shallWeRoomList, action.chatRoom]}};
        case actionTypes.IncreaseLike:
            return {...state, like: (state.like + 1)};
        case actionTypes.GetComments:
            return {...state, comments: [action.comments]};
        case actionTypes.GetUserPage:
            return {...state, visitedUser: action.user};
        case actionTypes.CreatePost:
            return {...state, currentUser:{...state.currentUser, 
                postList: [...state.currentUser.postList, action.post]}};
        case actionTypes.GetChatRoomList:
            return {...state, chatRoomList: [action.chatRoomList]};
        case actionTypes.CreateChatRoom:
            return {...state, currentUser: {...state.currentUser, chatRoom: action.chatRoom}};
        case actionTypes.JoinChatRoom:
            return {...state, currentUser: {...state.currentUser, chatRoom: action.chatRoom}};
        case actionTypes.ExitChatRoom:
            return {...state, currentUser: {...state.currentUser, chatRoom: []},
                    chatRoomList: [action.chatRoomList]};
        case actionTypes.GetTagList:
            return {...state, searchedTagList: [action.tags]};
        case actionTypes.GetUserList:
            return {...state, searchedUserList: [action.users]};
        case actionTypes.AddTag:
            return {...state, currentUser: {...state.currentUser, 
                    tagList: [...state.currentUser.tagList, action.tag]}};
        case actionTypes.FollowUser:
            return {...state, currentUser: {...state.currentUser, 
                friendIDList: [...state.currentUser.friendIDList, action.user]}};
        case actionTypes.ApplySetting:
            return {...state, currentUser: action.user};
        case actionTypes.PutPost:
            return {...state, content: action.content};
        case actionTypes.DeletePost:
            return {...state, currentUser:{...state.currentUser, 
                PostIDList: [action.postsID]}};
        default:
            break;
    }
    return state
};

export default reducer;