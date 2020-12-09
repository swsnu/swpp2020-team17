import * as actionTypes from '../actions/actionTypes';


const reducer = (state = {
    selectedCommentList: null,
    selectedPostId: null,
}, action) => {
    switch (action.type) {
        case actionTypes.GetCommentList:
            return { ...state, selectedCommentList: action.commentList, selectedPostId: action.postId }
        case actionTypes.CreateComment:
            const newComment = action.comment;
            let modifiedCommentList = null;
            if (state.selectedPostId === newComment.postId) {
                modifiedCommentList = state.selectedCommentList.concat(newComment);
            }
            return { ...state, selectedCommentList: modifiedCommentList }
        case actionTypes.DeleteComment:
            let deletedCommentList = null;
            if (state.selectedPostId === action.comment.post) {
                deletedCommentList = state.selectedCommentList.filter(comment => comment.id !== action.comment.id);
            }
            return { ...state, selectedCommentList: deletedCommentList }
        default:
            break;
    }
    return state
};

export default reducer;