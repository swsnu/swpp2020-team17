import * as actionTypes from './actionTypes';
import axios from 'axios';

export const increaseLike = () => {
    return dispatch => {
        return axios.get
    }
}

export const getComments = (postID) => {
    return dispatch => {
        return axios.get('/api/comment/')
        .then((res) => dispatch(getComments_(postID, res.data)))
    }
}

const getComments_ = (postID, comment) => {
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
