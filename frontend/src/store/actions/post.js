import * as actionTypes from './actionTypes';
import axios from 'axios';

export const increaseLike = () => {
    return dispatch => {
        return axios.get
    }
}

export const getCommentList = (postID) => {
    return dispatch => {
        return axios.get('/api/comment/')
        .then((res) => dispatch(getCommentList_(postID, res.data)))
    }
}

const getCommentList_ = (postID, comment) => {
    let postComment = comment.filter(c => c.post_ID === postID)
    return {
        type: actionTypes.GetComments,
        comments: postComment
    }
}

export const createPost = (post) => {
    return dispatch => {
        return axios.post('/api/post/', post)
        .then(res => dispatch(createPost_(res.data)))
    }
}

const createPost_ = (post) => {
    return {
        type: actionTypes.CreatePost,
        post: post
    }
}

export const getGridPost = () => {
    return
}

export const putPost = () => {
    return
}

export const deletePost = () => {
    return
}
