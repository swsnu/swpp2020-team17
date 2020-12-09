import * as actionTypes from './actionTypes';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'

export function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';'); for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
            return cookieValue;
        }
    }
}
const csrftoken = getCookie('csrftoken');

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'

const getCommentList_ = (commentList, postId) => {
    console.log(commentList);
    return {
        type: actionTypes.GetCommentList,
        commentList: commentList,
        postId: postId
    }
}

// Get Comment by id
export const getCommentList = (postId) => {
    return dispatch => {
        return axios.get('/api/post/' + postId + '/comment/')
            .then(res => dispatch(getCommentList_(res.data, postId)))
    }
}

export const createComment_ = (comment) => {
    return {
        type: actionTypes.CreateComment,
        comment: comment
    }
}

export const createComment = (postId, comment) => {
    return dispatch => {
        return axios.post('/api/post/' + postId + '/comment/', comment)
            .then(res => dispatch(createComment_(res.data)))
    }
}

export const deleteComment_ = (comment) => {
    return {
        type: actionTypes.DeleteComment,
        comment: comment,
    }
}

export const deleteComment = (comment) => {
    return dispatch => {
        return axios.delete('/api/comment/' + comment.post)
            .then(res => dispatch(deleteComment_(comment)))
    }
}