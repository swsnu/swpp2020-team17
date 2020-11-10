import * as actionTypes from '../actions/actionTypes';


const reducer = (state = {
    currentUser: {
        ID: 0,
        FriendIDList: [],
        chatRoom: [],
        userName: '',
        profilePicture: '',
        postList: [],
        ShallWeRoomList: [],
        watchedPostedIDList: [],
        tagList: [],
        isOnline: false,
    },
    visitedUser: {
        ID: 0,
        userName: '',
        profilePicture: '',
        postList: [],
        isOnline: false,
    },
    like: 0,
    postList: [],
    comments: [],
    MainPost: 0,
    postPicture: '',
    content: '',
    chatRoomList: [],
    tagList: [],
    userList: [],

}, action) => {
    switch (action.type) {
        case actionTypes.Login:
            return { ...state, currentUser: action.user };
        case actionTypes.SendShallWe:
            return {...state, currentUser:{...state.currentUser, 
                ShallWeRoomList: [...state.currentUser.ShallWeRoomList, action.chatRoom]}};
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
                FriendIDList: [...state.currentUser.FriendIDList, action.user]}};
        case actionTypes.ApplySetting:
            return {...state, currentUser: action.user};
        case actionTypes.GetGridPost:
            return {...state, postPicture:action.picture, content: action.content};
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