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

const getCommentList_ = (commentList) => {
    return {
        type: actionTypes.GetCommentList,
        commentList: commentList
    }
}

// Get Comment by id
export const getCommentList = (postId) => {
    return dispatch => {
        return axios.get('/post/' + postId + '/comment/')
            .then(res => dispatch(getCommentList_(res.data)))
    }
}