import * as actionTypes from '../actions/actionTypes';


const reducer = (state = {
    selectedCommentList: null,

}, action) => {
    switch (action.type) {
        case actionTypes.GetCommentList:
            return { ...state, selectedCommentList: action.commentList }
        default:
            break;
    }
    return state
};

export default reducer;