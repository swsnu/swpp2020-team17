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

const getPostList_ = (posts) => {
    return {
        type: actionTypes.GetPostList,
        posts: posts,
    }
}

export const getPostList = () => {
    return dispatch => {
        return axios.get('/api/post/')
        .then(res => dispatch(getPostList_(res.data)))
    }
}

const createPost_ = (post) => {
    return {
        type: actionTypes.CreatePost,
        post: post
    }
}
export const createPost = (post) => {
    return dispatch => {
        return axios.post('/api/post/', post)
        .then(res => dispatch(createPost_(res.data)))
    }
}

const getPost_ = (post) => {
    return {
        type: actionTypes.GetPost,
        post: post
    }
}
export const getPost = (id) => {
    return dispatch => {
        return axios.get('/api/post/' + id)
        .then(res => dispatch(getPost_(res.data)))
    }
}

const putPost_ = (post) => {
    return {
        type: actionTypes.PutPost,
        post: post
    }
}
export const putPost = (post) => {
    return dispatch => {
        return axios.put('/api/post/' + post.id, post)
        .then(res => dispatch(putPost_(res.data)))
    }
}

const deletePost_ = (post) => {
    return {
        type: actionTypes.DeletePost,
        post: post
    }
}

export const deletePost = (id) => {
    return dispatch => {
        return axios.delete('api/post/' + id)
        .then(res => dispatch(deletePost_(res.data)))
    }
}