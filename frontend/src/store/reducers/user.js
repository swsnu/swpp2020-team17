import * as actionTypes from '../actions/actionTypes';


const reducer = (state = {
    currentUser: {
        ID: 0,
        FriendIDList: [],
        RoomID: 0,
        userName: '',
        profilePicture: '',
        postIDList: [],
        ShallWeRoomList: [],
        watchedPostedIDList: [],
        tagList: [],
        isOnline: false,
    },
    like: 0,
    comments: [],
    MainPost: 0,
    postPicture: '',
    content: '',
    chatRoomList: [],
    searchedTagList: [],
    searchedUserList: [],

}, action) => {
    switch (action.type) {
        case actionTypes.Login:
            return { ...state, currentUser: action.user };
        case actionTypes.SendShallWe:
            return {...state, currentUser:{...state.currentUser, 
                ShallWeRoomList: [...state.currentUser.ShallWeRoomList, action.RoomID]}};
        case actionTypes.IncreaseLike:
            return {...state, like: (state.like + 1)};
        case actionTypes.GetComments:
            return {...state, comments: [action.comments]};
        case actionTypes.GetUserPage:
            return {...state, currentUser: action.user};
        case actionTypes.CreatePost:
            return {...state, currentUser:{...state.currentUser, 
                PostIDList: [...state.currentUser.PostIDList, action.postID]}};
        case actionTypes.GetChatRoomList:
            return {...state, chatRoomList: [action.chatRoomList]};
        case actionTypes.CreateRoom:
            return {...state, currentUser: {...state.currentUser, RoomID: action.RoomID}};
        case actionTypes.JoinChatRoom:
            return {...state, currentUser: {...state.currentUser, RoomID: action.RoomID}};
        case actionTypes.ExitChatRoom:
            return {...state, currentUser: {...state.currentUser, RoomID: 0},
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