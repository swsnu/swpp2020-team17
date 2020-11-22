import * as actionTypes from '../actions/actionTypes';


const reducer = (state = {
    selectedPost: null,
    postList: [],
    commentList: [],
}, action) => {
    switch (action.type) {
        case actionTypes.GetPostList:
            return { ...state, postList: action.posts };
        case actionTypes.CreatePost:
            return { ...state, selectedPost: action.post };
        case actionTypes.GetPost:
            return { ...state, selectedPost: action.post };
        case actionTypes.PutPost:
            const modifiedPosts = state.postList.map(post => {
                if (post.id === action.post.id) {
                  return { ...action.post };
                } else return { ...post };
            })
            return { ...state, postList: modifiedPosts };
        case actionTypes.DeletePost:
            const deletedPosts = state.postList.filter(post => {
                return post.id !== action.post.id;
            });
            return { ...state, postList: deletedPosts};
        case actionTypes.GetCommentList:
            return { ...state, commentList: action.commentList };
        case actionTypes.CreateComment:
            return { ...state, commentList: state.commentList.concat(comment) };
        default:
            break;
    }
    return state
};

export default reducer;