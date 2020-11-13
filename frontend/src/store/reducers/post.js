import * as actionTypes from '../actions/actionTypes';


const reducer = (state = {
    selectedPost: null,
    postList: [],

}, action) => {
    switch (action.type) {
        case actionTypes.GetPostList:
            return {...state, postList: action.postList};
        default:
            break;
    }
    return state
};

export default reducer;