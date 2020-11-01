import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentUser: {
        ID: '',
        FriendIDList: [],
        RoomID: '',
        userName: '',
        profilePicture: '',
        postIDList: '',
        ShallWeRoomList: [],
        watchedPostedIDList: [],
        isOnline: false
    },
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